import sql from '@/lib/db'

export async function find() {
  const rows = await sql`
    select id_categoria, nome
    from vz_tb_categorias
  `
  return rows
}

export async function findByName(name: string) {
  const rows = await sql`
    select id_categoria, nome
    from vz_tb_categorias
    where lower(nome) = ${name.toLowerCase()}
  `
  return rows
}

export async function create(name: string) {

  const existingCategory = await findByName(name)
  if (existingCategory.length) throw new Error('Nome já existe')

  await sql`
    insert into vz_tb_categorias (nome, img)
    values (${name}, '#')
  `
}

export async function update(id: number, name: string) {
  await sql`
    update vz_tb_categorias
    set nome = ${name}
    where id_categoria = ${id}
  `
}

export async function remove(id: number) {
  await sql`
    delete from vz_tb_categorias
    where id_categoria = ${id}
  `
}

const categoryService = {
  find,
  create,
  update,
  delete: remove
}

export default categoryService