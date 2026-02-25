Perfeito — vou montar um fluxo completo e minimal, pronto pra usar no Next 16+ (App Router) hospedado na Vercel free, usando **postgres** (sua lib `postgres`) e autenticação própria no banco (hash de senha + JWT em cookie HttpOnly). Vou mostrar:

* esquema SQL da tabela `users`
* `lib/db.ts` (já tem, só confirmar)
* `lib/hash.ts` (`bcryptjs`)
* `lib/jwt.ts` (`jsonwebtoken`)
* `services/auth.service.ts` (CRUD + autenticação)
* rotas API: `app/api/auth/register/route.ts`, `login/route.ts`, `logout/route.ts`
* util server: `lib/session.ts` para ler cookie no server (uso em server components / layouts)
* exemplo de uso (login form fetch + proteger página via `getCurrentUser()`)

Observação rápida: isso usa JWT armazenado em **cookie HttpOnly** (impossível acessar via JS), o que é suficiente e simples num ambiente serverless. Se você precisa invalidar tokens imediatamente (logout forçado), você pode guardar sessões em tabela no DB e invalidar por id — posso adicionar depois se quiser.

---

# 1) Migration / tabela SQL (exemplo)

```sql
-- execute no seu banco (psql / migration)
CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

---

# 2) Variáveis de ambiente (adicionar no Vercel)

* `DATABASE_URL` (já tem)
* `JWT_SECRET` (string longa e secreta)
* opcional: `COOKIE_NAME` (ex: `app_session`) — vou usar `app_session` por padrão

---

# 3) `lib/db.ts` (você já tem algo parecido)

```ts
// lib/db.ts
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error('DATABASE_URL não configurada');

const sql = postgres(connectionString, {
  // opcional: set pool, idle_timeout, etc conforme necessidade
});

export default sql;
```

---

# 4) `lib/hash.ts` — bcrypt

```ts
// lib/hash.ts
import bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
```

Adicione `bcryptjs` nas dependências: `npm i bcryptjs`

---

# 5) `lib/jwt.ts`

```ts
// lib/jwt.ts
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error('JWT_SECRET não configurado');

export function signJwt(payload: object, options?: jwt.SignOptions) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d', ...(options || {}) });
}

export function verifyJwt(token: string) {
  return jwt.verify(token, JWT_SECRET) as any;
}
```

Instale: `npm i jsonwebtoken`

---

# 6) `services/auth.service.ts`

```ts
// services/auth.service.ts
import sql from '@/lib/db';
import { hashPassword, verifyPassword } from '@/lib/hash';
import { signJwt, verifyJwt } from '@/lib/jwt';

type UserRow = {
  id: number;
  email: string;
  name: string | null;
  password_hash: string;
  created_at: string;
};

export async function getUserByEmail(email: string): Promise<UserRow | null> {
  const rows = await sql<UserRow[]>`select * from users where email = ${email} limit 1`;
  return rows[0] ?? null;
}

export async function getUserById(id: number): Promise<UserRow | null> {
  const rows = await sql<UserRow[]>`select * from users where id = ${id} limit 1`;
  return rows[0] ?? null;
}

export async function createUser({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name?: string;
}) {
  const existing = await getUserByEmail(email);
  if (existing) throw new Error('Email já cadastrado');

  const password_hash = await hashPassword(password);
  const rows = await sql<UserRow[]>`
    insert into users (email, name, password_hash)
    values (${email}, ${name ?? null}, ${password_hash})
    returning id, email, name, created_at, password_hash
  `;
  return rows[0];
}

export async function authenticateUser(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) return null;
  const ok = await verifyPassword(password, user.password_hash);
  if (!ok) return null;
  return user;
}

export function generateSessionToken(user: { id: number }) {
  return signJwt({ sub: String(user.id) });
}

export async function getUserFromToken(token: string) {
  try {
    const payload = verifyJwt(token) as { sub: string; iat?: number; exp?: number };
    const id = Number(payload.sub);
    if (Number.isNaN(id)) return null;
    return getUserById(id);
  } catch (err) {
    return null;
  }
}
```

---

# 7) Cookies: helper `lib/cookie.ts`

Vou usar o pacote `cookie` para serializar headers (compatível com Route Handlers). `npm i cookie`

```ts
// lib/cookie.ts
import { serialize } from 'cookie';

const COOKIE_NAME = process.env.COOKIE_NAME ?? 'app_session';

export function createSessionCookie(token: string) {
  const isProd = process.env.NODE_ENV === 'production';
  return serialize(COOKIE_NAME, token, {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: isProd,
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  });
}

export function expireSessionCookie() {
  return serialize(COOKIE_NAME, '', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0),
  });
}
```

---

# 8) Rotas API (Route Handlers) — `app/api/auth/*/route.ts`

### `app/api/auth/register/route.ts`

```ts
// app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import { createUser, generateSessionToken } from '@/services/auth.service';
import { createSessionCookie } from '@/lib/cookie';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    // validações simples (aumente conforme necessário)
    if (!email || !password) {
      return NextResponse.json({ error: 'email e password são obrigatórios' }, { status: 400 });
    }

    const user = await createUser({ email, password, name });
    const token = generateSessionToken({ id: user.id });
    const setCookie = createSessionCookie(token);

    return NextResponse.json(
      { user: { id: user.id, email: user.email, name: user.name } },
      { status: 201, headers: { 'Set-Cookie': setCookie } }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'erro' }, { status: 400 });
  }
}
```

### `app/api/auth/login/route.ts`

```ts
// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { authenticateUser, generateSessionToken } from '@/services/auth.service';
import { createSessionCookie } from '@/lib/cookie';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'email e password obrigatórios' }, { status: 400 });
    }

    const user = await authenticateUser(email, password);
    if (!user) return NextResponse.json({ error: 'credenciais inválidas' }, { status: 401 });

    const token = generateSessionToken({ id: user.id });
    const setCookie = createSessionCookie(token);

    return NextResponse.json(
      { user: { id: user.id, email: user.email, name: user.name } },
      { headers: { 'Set-Cookie': setCookie } }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'erro' }, { status: 500 });
  }
}
```

### `app/api/auth/logout/route.ts`

```ts
// app/api/auth/logout/route.ts
import { NextResponse } from 'next/server';
import { expireSessionCookie } from '@/lib/cookie';

export async function POST() {
  const cookie = expireSessionCookie();
  return NextResponse.json({ ok: true }, { headers: { 'Set-Cookie': cookie } });
}
```

---

# 9) `lib/session.ts` — helper para server components / layouts

```ts
// lib/session.ts
import { cookies } from 'next/headers';
import { getUserFromToken } from '@/services/auth.service';

const COOKIE_NAME = process.env.COOKIE_NAME ?? 'app_session';

export async function getCurrentUser() {
  try {
    const cookieStore = cookies();
    const c = cookieStore.get(COOKIE_NAME);
    const token = c?.value;
    if (!token) return null;
    const user = await getUserFromToken(token);
    if (!user) return null;
    // não retorne password_hash
    const { password_hash, ...rest } = user as any;
    return rest;
  } catch {
    return null;
  }
}
```

Uso típico em server component (ex.: `app/layout.tsx` ou `app/dashboard/page.tsx`):

```ts
// em server component
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  return <div>Bem-vindo, {user.name ?? user.email}</div>;
}
```

---

# 10) Formulário de login (client component) — exemplo

```tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim(), password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data?.error || 'Erro ao logar');
      return;
    }
    // cookie HttpOnly foi setado pela rota, agora podemos redirecionar
    router.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" type="password" />
      <button type="submit">Entrar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
```

Observação: o cookie setado é HttpOnly — não dá pra ler via `document.cookie`. O login é confirmado porque a rota colocou o cookie; páginas server podem checar `getCurrentUser()`.

---

# 11) Logout (client)

```ts
// chamada simples
await fetch('/api/auth/logout', { method: 'POST' });
// redirecionar client-side
router.push('/');
```

---

# 12) Considerações de segurança e melhorias

* **Senha**: use bcrypt (já feito).
* **JWT_SECRET**: usar valor longo, armazenado no Vercel ENV.
* **Cookie**: `Secure` apenas em production (https). `HttpOnly` + `SameSite=Lax` reduz CSRF. Para maior proteção CSRF, adote tokens anti-CSRF em formulários ou `SameSite=Strict` se cabível.
* **Invalidar sessão**: com JWT puro, não há invalidation server-side (a não ser blacklist). Para logout forçado ou revogação, crie tabela `sessions` com `session_id` salvo no cookie (em vez de JWT) — posso mostrar depois.
* **Refresh tokens**: opcional para long-lived sessions.
* **Rate-limit / brute-force**: proteja rota `/api/auth/login` (limitação de tentativas).
* **Validações**: sanitize/validate email, senha mínima etc.

---

# 13) Próximos passos que posso entregar (se quiser)

* implementar **sessions em DB** (revogável) em vez de JWT.
* adicionar **middleware** para proteger rotas do Next (ex.: `middleware.ts` para bloquear caminhos `/dashboard/*`).
* fluxos de **reset de senha / verificação de email**.
* versão com **TypeScript** mais rigorosa (tipagens DTOs) e examples de testes.

---

Se quiser, já te monto a versão que usa **tabela sessions** (ID de sessão em cookie) — é um pouco mais verbosa mas permite invalidar sessões e ver quando/onde o usuário fez login. Quer que eu faça essa variação agora ou prefere seguir com JWT + cookie (prático e rápido)?
