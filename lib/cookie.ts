import { serialize } from 'cookie'

const COOKIE_NAME = process.env.COOKIE_NAME ?? 'app_session'

export function createSessionCookie(token: string) {
  const isProd = process.env.NODE_ENV === 'production'
  return serialize(COOKIE_NAME, token, {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: isProd,
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  })
}

export function expireSessionCookie() {
  return serialize(COOKIE_NAME, '', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0),
  })
}
