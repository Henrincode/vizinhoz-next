'use server'

import sql from '@/lib/db'
import { revalidatePath } from 'next/cache'

type ActionState = {
  error?: string
  success?: boolean
}

export async function catTudo() {
  try {
    const rows = await sql`
      select id_categoria, nome
      from vz_tb_categorias
      
    `

    return rows
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function catCriar(prevState: ActionState, formData: FormData): Promise<ActionState> {

  const nome = formData.get('titulo')

  if (!nome || typeof nome !== 'string') {
    return { error: 'Título inválido' }
  }

  try {
    await sql`
      insert into vz_tb_categorias (nome, img)
      values (${nome}, '#')
    `

    revalidatePath('/cat')

    return { success: true }

  } catch (error) {
    console.error(error)
    return { error: 'Erro ao cadastrar categoria' }
  }
}

export async function catEditar(prevState: ActionState, formData: FormData): Promise<ActionState> {

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
    update vz_tb_categorias
    set nome = ${nome}
    where id_categoria = ${id}
    `

    revalidatePath('/cat')
    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: 'Erro ao editar categoria' }
  }
}

export async function catApagar(prevState: ActionState, formData: FormData): Promise<ActionState> {

  const id: any = formData.get('id')

  try {
    await sql`
      delete from vz_tb_categorias where id_categoria = ${id}
      
    `
    revalidatePath('/cat')
    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: 'nao foi' }
  }
}
