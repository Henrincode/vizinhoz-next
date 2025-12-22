import { getUsuariosComCondominio } from '@/app/actions/get-usuarios'

export default async function Home() {
  const result = await getUsuariosComCondominio()

  // ⛔ Se deu erro, encerra aqui
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

  // ✅ A PARTIR DAQUI data EXISTE
  return (
    <main style={{ padding: 20 }}>
      <h1>Usuários por condomínio</h1>

      <ul>
        {result.data.map((item, index) => (
          <li key={index}>
            <strong>{item.nome}</strong> — {item.condominio}
          </li>
        ))}
      </ul>
    </main>
  )
}
