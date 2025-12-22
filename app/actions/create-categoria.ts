'use server'

import sql from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function createCategoria(formData: FormData) {
  const nome = formData.get('nome')

  if (!nome || typeof nome !== 'string') {
    return
  }

  try {
    await sql`
      insert into vz_tb_categorias (nome, img)
      values (${nome}, '')
    `

    // força atualização da página
    revalidatePath('/')
  } catch (error) {
    console.error(error)
  }
}
