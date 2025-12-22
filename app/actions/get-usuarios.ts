'use server'

import sql from '@/lib/db'

type UsuarioComCondominio = {
  nome: string
  condominio: string
}

export async function getUsuariosComCondominio() {
  try {
    const rows = await sql<UsuarioComCondominio[]>`
      select 
        u.nome,
        c.nome as condominio
      from vz_tb_usuarios u
      inner join vz_tb_condominios c
        on c.id_condominio = u.id_condominio_fk
      limit 10
    `

    return {
      success: true,
      data: rows
    }
  } catch (error: any) {
    console.error('Erro ao buscar usuários:', error)

    return {
      success: false,
      message: error.message ?? 'Erro ao consultar banco'
    }
  }
}
