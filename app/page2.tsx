// page.tsx
import { getCategorias } from '@/app/actions/get-categorias'
import { createCategoria } from '@/app/actions/create-categoria'

// interface PageProps {
//   // aceita também Promise para ficar mais seguro
//   searchParams: Record<string, string | string[] | undefined> | Promise<Record<string, string | string[] | undefined>>
// }

export default async function Home({ searchParams }: any) {
  const params = await searchParams // agora garantido resolvido
  // trata array ou string
  const busca = params.busca

  const categorias = await getCategorias()

  {console.log(busca)}
  return (
    <main style={{ padding: 20, maxWidth: 400 }}>
      <h1>Categorias</h1>

      {/* LISTA */}
      <ul>
        {categorias.map((cat: any) => (
          <li key={cat.id_categoria}>
            {cat.nome}
          </li>
        ))}
      </ul>

      <hr style={{ margin: '20px 0' }} />

      {/* FORMULÁRIO */}
      <form action={createCategoria}>
        <input
          type="text"
          name="nome"
          placeholder="Nova categoria"
          required
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
      <h1>{busca}</h1>
    </main>
  )
}
