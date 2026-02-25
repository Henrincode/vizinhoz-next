import { NextResponse } from "next/server";
import userService from "@/services/user.service";

type Errors = {
    username?: string
    password?: string
    mail?: string
    name?: string
    id_condo?: string
    address_section?: string
    address_number?: string
    address_detail?: string
}

// GET
export async function GET() {
    const data = await userService.find()
    return NextResponse.json(data)
}


// POST
export async function POST(req: Request) {
    const body = await req.json()
    const errors: Errors = {}

    // vars
    const username = String(body.username ?? '').trim()
    const password = String(body.password ?? '').trim()
    const mail = String(body.mail ?? '').trim()
    const name = String(body.name ?? '').trim()
    const id_condo = Number(body.id_condo)

    const address_section = body.address_section?.toString().trim() ?? null
    const address_number = body.address_number?.toString().trim() ?? null
    const address_detail = body.address_detail?.toString().trim() ?? null

    // validate
    if (!username) errors.username = 'Username é obrigatório'
    if (!password || password.length < 6) errors.password = 'Senha deve ter no mínimo 6 caracteres'
    if (!mail) errors.mail = 'E-Mail é obrigatório'
    if (!name) errors.name = 'Nome é obrigatório'
    if (Number.isNaN(id_condo)) errors.id_condo = 'Condomínio é obrigatório'

    if (Object.keys(errors).length) return NextResponse.json({success: false, message: 'Campos inválidos', errors}, {status: 400})

    return NextResponse.json('ok')

}


// PUT


// DELETE

// teste
export async function DELETE(req: Request) {
    const body = await req.json()
    return NextResponse.json(body.henry)
}