import sql from '@/lib/db'

export async function listarCategorias() {
  const rows = await sql`
    select id_categoria, nome
    from vz_tb_categorias
  `
  return rows
}

export async function criarCategoria(nome: string) {
  await sql`
    insert into vz_tb_categorias (nome, img)
    values (${nome}, '#')
  `
}

export async function editarCategoria(id: number, nome: string) {
  await sql`
    update vz_tb_categorias
    set nome = ${nome}
    where id_categoria = ${id}
  `
}

export async function apagarCategoria(id: number) {
  await sql`
    delete from vz_tb_categorias
    where id_categoria = ${id}
  `
}
