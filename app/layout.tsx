import "./globals.css"
import { Inter } from 'next/font/google'

import Header from '@/components/header'

// Font padrão
const fontInter = Inter({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

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
    <html lang="pt-BR" className={`${fontInter.className}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
