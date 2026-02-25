import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) throw new Error('JWT_SECRET não configurado')

export function signJwt(payload: object, options?: jwt.SignOptions) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d', ...(options || {}) })
}

export function verifyJwt(token: string) {
    return jwt.verify(token, JWT_SECRET) as any
}
