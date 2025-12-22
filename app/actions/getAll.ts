'use server'

import sql from "@/lib/db"

export default async function getAll() {
    const data: any = {}
    try {
        const usuarios = await sql`
            select u.nome, c.nome as condominio, u.bloco, u.apartamento
            from vz_tb_usuarios as u
            inner join vz_tb_condominios as c
                on c.id_condominio = u.id_condominio_fk
        `
        data.usuarios = usuarios

    } catch (error) {
        console.log(error)
    }

    try {
        const condominios = await sql`
            select * from vz_tb_condominios
        `
        data.condominios = condominios
    } catch (error) {
        console.log(error)
    }

    try {
        const categorias = await sql`
            select * from vz_tb_categorias
        `
        data.categorias = categorias
    } catch (error) {
        console.log(error)
    }

    return data
}