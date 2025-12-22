'use server'

import sql from '@/lib/db'

export async function getCategorias() {
    try {
        const rows = await sql`
      select id_categoria, nome
      from vz_tb_categorias
      order by nome
    `

        return rows
    } catch (error) {
        console.error(error)
        return []
    }
}
