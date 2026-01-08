'use server'

import { revalidatePath } from 'next/cache'
import * as categoryService from '@/services/categoria-service'

type ActionState = {
  error?: string
  success?: boolean
}

function limparRotas() {
  revalidatePath('/cad')
  revalidatePath('/anunciar')
}

// Criar
export async function criarCategoria(_: ActionState, formData: FormData): Promise<ActionState> {
  const nome = formData.get('titulo')

  if (typeof nome !== 'string') {
    return { error: 'Título inválido' }
  }

  try {
    await categoryService.criarCategoria(nome)
    limparRotas()
    return { success: true }
  } catch {
    return { error: 'Erro ao cadastrar categoria' }
  }
}

// Editar
export async function editarCategoria(_: ActionState, formData: FormData): Promise<ActionState> {
  const nome = formData.get('titulo') as string
  const id = Number(formData.get('id'))

  if (!nome || !Number.isInteger(id)) {
    return { error: 'Dados inválidos' }
  }

  try {
    await categoryService.editarCategoria(id, nome)
    limparRotas()
    return { success: true }
  } catch {
    return { error: 'Erro ao editar categoria' }
  }
}

// Apagar
export async function apagarCategoria(_: ActionState, formData: FormData): Promise<ActionState> {
  const id = Number(formData.get('id'))

  if (!Number.isInteger(id)) {
    return { error: 'ID inválido' }
  }

  try {
    await categoryService.apagarCategoria(id)
    limparRotas()
    return { success: true }
  } catch {
    return { error: 'Erro ao apagar categoria' }
  }
}
