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
