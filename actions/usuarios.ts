'use server'

import sql from "@/lib/db"
import bcrypt from "bcryptjs"
import { revalidatePath } from "next/cache"

function limparRotas() {
    revalidatePath('/cadastrar')
}

export async function userCriar(prevState: any, formData: FormData) {

    type Erros = {
        username?: string
        nome?: string
        pass?: string
        email?: string
        condominio?: string
        contato?: string
        bloco?: string
        apto?: string
        error?: string | true
    }
    const resposta: Erros = {}

    const username = formData.get('username') as string
    const nome = formData.get('nome') as string
    const pass = formData.get('pass') as string
    const email = formData.get('email') as string
    const condominio = Number(formData.get('condominio'))
    const contato = formData.get('contato') as string
    const bloco = formData.get('bloco') as string
    const apto = formData.get('apto') as string

    if (!username) { resposta.username = "username vazio"; resposta.error = true }
    if (!nome) { resposta.nome = "nome vazio"; resposta.error = true }
    if (!pass) { resposta.pass = "pass vazio"; resposta.error = true }
    if (!email) { resposta.email = "email vazio"; resposta.error = true }
    if (!condominio || Number.isNaN(condominio)) { resposta.condominio = "condominio vazio"; resposta.error = true }
    if (!contato) { resposta.contato = "contato vazio"; resposta.error = true }
    if (!bloco) { resposta.bloco = "bloco vazio"; resposta.error = true }
    if (!apto) { resposta.apto = "apto vazio"; resposta.error = true }

    if (resposta.error) {
        resposta.error = 'Dados errados'
        return resposta
    }

    const senhaHash = await bcrypt.hash(pass, 10)

    try {
        await sql`
            insert into vz_tb_usuarios (id_condominio_fk, username, nome, senha, email, contato, bloco, apto)
            values (${condominio}, ${username}, ${nome}, ${senhaHash}, ${email}, ${contato}, ${bloco}, ${apto})
        `
        limparRotas()
        return { success: true }

    } catch (error) {
        console.error(error)
        return { error: 'Erro ao cadastrar dados' }
    }
}