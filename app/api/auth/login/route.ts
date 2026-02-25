import { NextResponse } from 'next/server'
import { authenticateUser, generateSessionToken } from '@/services/auth.service'
import { createSessionCookie } from '@/lib/cookie'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ error: 'email e password obrigatórios' }, { status: 400 })
    }

    const user = await authenticateUser(email, password)
    if (!user) return NextResponse.json({ error: 'credenciais inválidas' }, { status: 401 })

    const token = generateSessionToken({ id: user.id })
    const setCookie = createSessionCookie(token)

    return NextResponse.json(
      { user: { id: user.id, email: user.email, name: user.name } },
      { headers: { 'Set-Cookie': setCookie } }
    )
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'erro' }, { status: 500 })
  }
}
