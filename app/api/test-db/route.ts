// app/api/test-db/route.ts
import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function GET() {
    try {
        const result = await sql`SELECT version()`;
        return NextResponse.json({ success: true, version: result[0] });
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            code: error.code,
            hostname: error.hostname || 'unknown'
        }, { status: 500 });
    }
}
