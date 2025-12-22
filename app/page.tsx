import { getUsuariosComCondominio } from '@/app/actions/get-usuarios'

export default async function Home() {
  const result = await getUsuariosComCondominio()

  if (!result.success) {
    return (
      <main style={{ padding: 20 }}>
        <h1>Usuários por condomínio</h1>
        <p style={{ color: 'red' }}>
          ❌ {result.message}
        </p>
      </main>
    )
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Usuários por condomínio</h1>

      <ul>
        {result.data!.map((item: any, index: number) => (
          <li key={index}>
            <strong>{item.nome}</strong> — {item.condominio}
          </li>
        ))}
      </ul>
    </main>
  )
}
