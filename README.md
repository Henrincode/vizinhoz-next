# vizinhoz-next
Senac - INTEGRADOR BACKEND


## Instalando o NEXTJS

```bash
npx create-next-app@latest . --yes
```

Usei . ao invés do app-name para instalar na raiz do projeto

## Rodar o NEXTJS

```bash
npm run dev
```

## Limpando dados de instalação padrão do NEXTjs

### Arquivos para serem apagados

```bash
📂 app
    📄 favicon.ico
    📄 globals.css
📂 public
    📄 file.svg
    📄 globe.svg
    📄 next.svg
    📄 vercel.svg
    📄 window.svg
```

### Arquivos para serem limpos:

`app/layout.tsx` deve fucar assim:

```tsx
export const metadata = {
  title: "Olá Mundo!",
  description: "Projeto Next.JS limpo com TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
```

`app/page.tsx` deve ficar assim:

```tsx
export default function Home() {
    return (
        <>
            <h1>Olá Mundo!</h1>
        </>
    )
}
```

## Banco de dados

### Criando tabela `tb_usuarios`

```sql
create table vz_tb_usuarios (
  id_usuario bigserial primary key,
  id_condominio_fk bigint not null,
  nome varchar(100) not null,
  email varchar(100) not null,
  senha text not null,
  bloco varchar(10) not null,
  apartamento integer not null,
  data_criacao timestamp default current_timestamp
);
```

### Criando tabela `tb_condominios`

```sql
create table vz_tb_condominios (
  id_condominio bigserial primary key,
  nome varchar(100) not null,
  cep varchar(8) not null,
  numero integer not null,
  rua varchar(100) not null,
  cidade varchar(100) not null,
  uf varchar(2) default 'SP',
  pais varchar(100) default 'Brasil',
  data_criacao timestamp default current_timestamp
);
```

### Criando tabela `tb_anuncios`

```sql
create table vz_tb_anuncios (
  id_anuncios bigserial primary key,
  id_usuario_fk bigint not null,
  id_tipo_fk bigint not null,
  id_categoria_fk bigint not null,
  titulo varchar(100),
  descricao text,
  data_criacao timestamp default current_timestamp
);
```

### Criando tabela `tb_tipos`

```sql
create table vz_tb_tipo (
  id_tipo bigserial primary key,
  nome varchar(100) not null,
  img text not null,
  data_criacao timestamp default current_timestamp
);
```

### Criando tabela `tb_categorias`

```sql
create table vz_tb_categorias (
  id_categoria bigserial primary key,
  nome varchar(100) not null,
  img text not null,
  data_criacao timestamp default current_timestamp
);
```

### Criando `constrains`

```sql
ALTER TABLE vz_tb_usuarios
ADD CONSTRAINT fk_condominio FOREIGN KEY (id_condominio_fk) REFERENCES vz_tb_condominios (id_condominio);

ALTER TABLE vz_tb_anuncios
ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario_fk) REFERENCES vz_tb_usuarios (id_usuario);

ALTER TABLE vz_tb_anuncios
ADD CONSTRAINT fk_tipo FOREIGN KEY (id_tipo_fk) REFERENCES vz_tb_tipo (id_tipo);

ALTER TABLE vz_tb_anuncios
ADD CONSTRAINT fk_categoria FOREIGN KEY (id_categoria_fk) REFERENCES vz_tb_categorias (id_categoria);
```










---

## Bibliotecas instaladas

### React Icons

Biblioteca com uma grande variedade de ícones prontos para uso em aplicações React.

**Documentação:**
[https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

**Instalação:**

```bash
npm i react-icons
```

---

### Postgres (postgres.js)

Cliente moderno e performático para conexão com banco de dados PostgreSQL no Node.js, com foco em simplicidade e segurança contra SQL Injection.

**Documentação:**
[https://github.com/porsager/postgres](https://github.com/porsager/postgres)

**Instalação:**

```bash
npm i postgres
```

---

### bcryptjs

Biblioteca usada para gerar **hash de senhas**, garantindo que as senhas não sejam armazenadas em texto puro no banco de dados.

**Documentação:**
[https://github.com/dcodeIO/bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

**Instalação:**

```bash
npm i bcryptjs
```

---

### jsonwebtoken

Biblioteca utilizada para criar e validar **tokens JWT**, muito comum em sistemas de autenticação e controle de sessão.

**Documentação:**
[https://github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

**Instalação:**

```bash
npm i jsonwebtoken
npm i -D @types/jsonwebtoken
```

---

### cookie

Biblioteca leve para **ler, criar e manipular cookies** no Node.js, muito usada em sistemas de autenticação para armazenar tokens de sessão (como JWT) de forma segura.

**Documentação:**
[https://github.com/jshttp/cookie](https://github.com/jshttp/cookie)

**Instalação:**

```bash
npm i cookie
```