import { NextResponse } from 'next/server'
import categoryService from '@/services/category.service'


// GET
export async function GET() {
  const data = await categoryService.find()
  return NextResponse.json(data)
}

// POST
export async function POST(req: Request) {
  const body = await req.json()
  const name = String(body.name).trim()

  await categoryService.create(name)
  return NextResponse.json({ success: true })
}


// PUT
export async function PUT(req: Request) {
  const body = await req.json()

  const id = Number(body.id)
  const name = String(body.name).trim()

  if (!Number.isInteger(id)) {
    return NextResponse.json(
      { error: 'ID inválido' },
      { status: 400 }
    )
  }

  await categoryService.update(id, name)

  return NextResponse.json({ success: true })
}

// DELETE
export async function DELETE(req: Request) {
  const body = await req.json()

  const id = Number(body.id)

  if (!Number.isInteger(id)) {
    return NextResponse.json(
      { error: 'ID inválido' },
      { status: 400 }
    )
  }

  await categoryService.delete(id)

  return NextResponse.json({ success: true })
}