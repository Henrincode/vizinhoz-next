export const dynamic = 'force-dynamic';

import sql from '@/lib/db';

export default async function Home() {

    const users = await sql`
        select u.nome nomeeee, c.nome condominio, u.bloco, u.apartamento
        from vz_tb_usuarios u
        inner join vz_tb_condominios c
            on c.id_condominio = u.id_condominio_fk
    `

    return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
