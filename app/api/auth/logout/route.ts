import { NextResponse } from 'next/server'
import { expireSessionCookie } from '@/lib/cookie'

export async function POST() {
  const cookie = expireSessionCookie()
  return NextResponse.json({ ok: true }, { headers: { 'Set-Cookie': cookie } })
}
