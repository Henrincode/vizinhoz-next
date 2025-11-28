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