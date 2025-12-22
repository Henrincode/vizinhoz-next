// app/page.tsx
import { getUsuariosComCondominio } from '@/app/actions/get-usuarios'

export default async function Home() {
  const result = await getUsuariosComCondominio()

  return (
    <main style={{ padding: 20 }}>
      <h1>Usuários por condomínio</h1>

      {!result.success && (
        <p style={{ color: 'red' }}>
          ❌ {result.message}
        </p>
      )}

      {result.success && (
        <ul>
          {result.data.map((item, index) => (
            <li key={index}>
              <strong>{item.nome}</strong> — {item.condominio}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
