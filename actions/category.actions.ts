'use server'

import categoryService from '@/services/category.service'
import { revalidateTag } from 'next/cache'

type ActionState = {
  error?: string
  success?: boolean
}

// create
export async function createCategory(_: ActionState, formData: FormData): Promise<ActionState> {
  const name = formData.get('name')

  if (typeof name !== 'string') {
    return { error: 'Nome inválido' }
  }

  try {
    await categoryService.create(name)
    // @ts-expect-error — bug de tipagem do Next 16 (revalidateTag aceita 1 arg em runtime)
    revalidateTag('categories')
    return { success: true }

  } catch {
    return { error: 'Erro ao cadastrar categoria' }
  }
}

// update
export async function updateCategory(_: ActionState, formData: FormData): Promise<ActionState> {
  const id = Number(formData.get('id'))
  const name = formData.get('name') as string

  if (!name || !Number.isInteger(id)) {
    return { error: 'Dados inválidos' }
  }

  try {
    await categoryService.update(id, name)
    // @ts-expect-error — bug de tipagem do Next 16 (revalidateTag aceita 1 arg em runtime)
    revalidateTag('categories')
    return { success: true }

  } catch {
    return { error: 'Erro ao editar categoria' }
  }
}

// delete
export async function deleteCategory(_: ActionState, formData: FormData): Promise<ActionState> {
  const id = Number(formData.get('id'))

  if (!Number.isInteger(id)) {
    return { error: 'ID inválido' }
  }

  try {
    await categoryService.delete(id)
    // @ts-expect-error — bug de tipagem do Next 16 (revalidateTag aceita 1 arg em runtime)
    revalidateTag('categories')
    return { success: true }

  } catch {
    return { error: 'Erro ao apagar categoria' }
  }
}
