// lib/session.ts
import { cookies } from 'next/headers'
import { getUserFromToken } from '@/services/auth.service'

const COOKIE_NAME = process.env.COOKIE_NAME ?? 'app_session'

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies()
    const c = cookieStore.get(COOKIE_NAME)

    const token = c?.value
    if (!token) return null

    const user = await getUserFromToken(token)
    if (!user) return null

    // não retornar password_hash
    const { password_hash, ...rest } = user as any
    return rest
  } catch {
    return null
  }
}
