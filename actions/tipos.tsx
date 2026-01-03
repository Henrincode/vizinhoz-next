'use server'

import sql from '@/lib/db'
import { revalidatePath } from 'next/cache'

type ActionState = {
    error?: string
    success?: boolean
}

function limparRotas() {
  revalidatePath('/cad')
  revalidatePath('/anunciar')
}

export async function tipoTudo() {
    try {
        const rows = await sql`
      select id_tipo, nome
      from vz_tb_tipos
      
    `
    
        return rows
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function tipoCriar(prevState: ActionState, formData: FormData): Promise<ActionState> {

  const nome = formData.get('titulo')

  if (!nome || typeof nome !== 'string') {
    return { error: 'Título inválido' }
  }

  try {
    await sql`
      insert into vz_tb_tipos (nome, img)
      values (${nome}, '#')
    `

    limparRotas()

    return { success: true }

  } catch (error) {
    console.error(error)
    return { error: 'Erro ao cadastrar categoria' }
  }
}

export async function tipoEditar(prevState: ActionState, formData: FormData): Promise<ActionState> {

  const nome = formData.get('titulo')
  const id = formData.get('id')

  if (
    typeof nome !== 'string' ||
    typeof id !== 'string'
  ) {
    return { error: 'Dados inválidos' }
  }

  try {
    await sql`
    update vz_tb_tipos
    set nome = ${nome}
    where id_tipo = ${id}
    `

    limparRotas()
    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: 'Erro ao editar categoria' }
  }
}

export async function tipoApagar(prevState: ActionState, formData: FormData): Promise<ActionState> {

    const id: any = formData.get('id')

    try {
        await sql`
      delete from vz_tb_tipos where id_tipo = ${id}
      
    `
        limparRotas()
        return {success: true}
    } catch (error) {
        console.error(error)
        return {error: 'nao foi'}
    }
}
