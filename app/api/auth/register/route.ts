// app/api/auth/register/route.ts
import { NextResponse } from 'next/server'
import { createUser, generateSessionToken } from '@/services/auth.service'
import { createSessionCookie } from '@/lib/cookie'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password, name } = body

    // validações simples (aumente conforme necessário)
    if (!email || !password) {
      return NextResponse.json({ error: 'email e password são obrigatórios' }, { status: 400 })
    }

    const user = await createUser({ email, password, name })
    const token = generateSessionToken({ id: user.id })
    const setCookie = createSessionCookie(token)

    return NextResponse.json(
      { user: { id: user.id, email: user.email, name: user.name } },
      { status: 201, headers: { 'Set-Cookie': setCookie } }
    )
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'erro' }, { status: 400 })
  }
}
