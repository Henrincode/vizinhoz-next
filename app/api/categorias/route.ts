import { NextResponse } from 'next/server'
import {
  listarCategorias,
  criarCategoria,
  editarCategoria,
  apagarCategoria
} from '@/services/categoria-service'


// GET
export async function GET() {
  const data = await listarCategorias()
  return NextResponse.json(data)
}

// POST
export async function POST(req: Request) {
  const { nome } = await req.json()
  await criarCategoria(nome)
  return NextResponse.json({ success: true })
}


// PUT
export async function PUT(req: Request) {
  const { id, nome } = await req.json()

  const idNumber = Number(id)

  if (!Number.isInteger(idNumber)) {
    return NextResponse.json(
      { error: 'ID inválido' },
      { status: 400 }
    )
  }

  await editarCategoria(idNumber, nome)

  return NextResponse.json({ success: true })
}

// DELETE
export async function DELETE(req: Request) {
  const { id } = await req.json()

  const idNumber = Number(id)

  if (!Number.isInteger(idNumber)) {
    return NextResponse.json(
      { error: 'ID inválido' },
      { status: 400 }
    )
  }

  await apagarCategoria(idNumber)

  return NextResponse.json({ success: true })
}