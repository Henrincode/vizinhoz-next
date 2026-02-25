'use server'

import sql from "@/lib/db"
import { revalidatePath } from "next/cache"

function limparRotas() {
    revalidatePath('/anunciar')
}

export async function anuTudo() {
    try {
        const rows = await sql`
            SELECT
            an.id_anuncio,
            an.titulo,
            an.descricao,
            an.preco,
            an.data_criacao,
            ca.id_categoria,
            ca.nome categoria,
            ti.id_tipo,
            ti.nome tipo,
            us.id_usuario,
            us.nome,
            us.bloco,
            us.apartamento,
            co.id_condominio,
            co.nome condominio
            FROM vz_tb_anuncios an
            INNER JOIN vz_tb_categorias ca
            ON an.id_categoria_fk = ca.id_categoria
            INNER JOIN vz_tb_tipos ti
            ON an.id_tipo_fk = ti.id_tipo
            INNER JOIN vz_tb_usuarios us
            ON an.id_usuario_fk = us.id_usuario
            INNER JOIN vz_tb_condominios co
            ON co.id_condominio = us.id_condominio_fk
        `
        return rows
    } catch (error: any) {
        console.log(error.message)
        return []
    }
}

export async function anuCriar(prevState: any, formData: any) {

    const usuario = Number(formData.get('id'))
    const categoria = Number(formData.get('categoria'))
    const tipo = Number(formData.get('tipo'))
    const preco = Number(formData.get('preco'))
    const precoFinal = preco <= 0 ? null : preco

    const titulo = formData.get('titulo')
    const descricao = formData.get('descricao')

    console.log(formData)
    if (
        !usuario ||
        !categoria ||
        !tipo ||
        Number.isNaN(preco) ||
        typeof titulo !== 'string' ||
        typeof descricao !== 'string'
    ) {
        return { error: 'Dados inválidos' }
    }


    try {
        await sql`
            INSERT into vz_tb_anuncios (id_usuario_fk, id_categoria_fk, id_tipo_fk, titulo, preco, descricao)
            VALUES (${usuario}, ${categoria}, ${tipo}, ${titulo}, ${precoFinal}, ${descricao})
        `
        limparRotas()
        return { success: true }

    } catch (error) {
        console.error(error)
        return { error: 'Erro ao cadastrar anuncio' }
    }
}

export async function anuApagar(prevState: any, formData: any) {

    const id = Number(formData.get('id'))

    try {
        await sql`
            DELETE FROM vz_tb_anuncios WHERE id_anuncio = ${id}
        `
        limparRotas()
        return { success: true }
    } catch (error) {
        console.error(error)
        return { error: 'nao foi' }
    }
}

