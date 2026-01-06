'use server'

import sql from "@/lib/db"
import { revalidatePath } from "next/cache"

function limparRotas() {
    revalidatePath('/cadastrar')
}

export async function userCriar(prevState: any, formData: any) {

    const resposta = {} as any

    console.log(formData)

    console.log('parte 1')

    const username = formData.get('username')
    const nome = formData.get('nome')
    const pass = formData.get('pass')
    const pass2 = formData.get('pass2')
    const email = formData.get('email')
    const condominio = Number(formData.get('condominio'))
    const contato = formData.get('contato')
    const bloco = formData.get('bloco')
    const apto = formData.get('apto')

    console.log('parte 2')


    if (!username) { resposta.username = "username vazio"; resposta.error = 'true' }
    if (!nome) { resposta.nome = "nome vazio"; resposta.error = 'true' }
    if (!pass) { resposta.pass = "pass vazio"; resposta.error = 'true' }
    if (!pass2) { resposta.pass2 = "pass2 vazio"; resposta.error = 'true' }
    if (!email) { resposta.email = "email vazio"; resposta.error = 'true' }
    if (!condominio || Number.isNaN(condominio)) { resposta.condominio = "condominio vazio"; resposta.error = 'true' }
    if (!contato) { resposta.contato = "contato vazio"; resposta.error = 'true' }
    if (!bloco) { resposta.bloco = "bloco vazio"; resposta.error = 'true' }
    if (!apto) { resposta.apto = "apto vazio"; resposta.error = 'true' }

    console.log('parte 3')

    if (resposta.error) {
        resposta.error = 'Dados errados'
        return resposta
    }

    console.log('parte 4')

    try {
        await sql`
      insert into vz_tb_usuarios (id_condominio_fk, username, nome, senha, email, contato, bloco, apto)
      values (${condominio}, ${username}, ${nome}, ${pass}, ${email}, ${contato}, ${bloco}, ${apto})
    `

        limparRotas()

        console.log('parte 5')

        return { success: true }

    } catch (error) {
        console.error(error)
        return { error: 'Erro ao cadastrar anuncio' }
    }
}