import sql from "@/lib/db"

// find
export async function find() {
  const rows = await sql`
    select id_category, name
    from vz_tb_categories
  `
  return rows
}

// findByName
export async function findByName(name: string) {
  const rows = await sql`
    select id_category, name
    from vz_tb_categories
    where lower(name) = ${name.toLowerCase()}
  `
  return rows
}

// create
export async function create(name: string) {

  const existingCategory = await findByName(name)
  if (existingCategory.length) throw new Error('Nome já existe')

  const [data] = await sql`
    insert into vz_tb_categories (name, img)
    values (${name}, '#')
    returning *
  `
  return data
}

// update
export async function update(id: number, name: string) {
  const [data] = await sql`
    update vz_tb_categories
    set name = ${name}
    where id_category = ${id}
    returning *
  `
  return data
}

// remove
export async function remove(id: number) {
  const [data] = await sql`
    delete from vz_tb_categories
    where id_category = ${id}
    returning *
  `
  return data
}

const categoryService = {
  find,
  create,
  update,
  delete: remove
}

export default categoryService