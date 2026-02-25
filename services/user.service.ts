import sql from "@/lib/db"
import bcrypt from "bcryptjs"

type Input = {
    id_user?: number
    username: string
    mail: string
    password?: string
    name: string
    id_condo: number
    address_section: string | null
    address_number: string | null
    address_detail: string | null
}

// find
export async function find() {
    const rows = await sql`
        select
            u.id_user,
            c.id_condo,
            u.username,
            u.name,
            c.name condo,
            c.city,
            c.state state
        from vz_tb_users u
        inner join vz_tb_condos c
            on u.id_condo_fk = c.id_condo
    `
    return rows
}

// create
export async function create({ username, mail, password, name, id_condo, address_section, address_number, address_detail }: Input) {

    if (!password) throw new Error('Password não informado')

    const hashPass = await bcrypt.hash(password, 10)

    // 
    // verificar se username já esta em uso
    // 

    const [data] = await sql`
        insert into vz_tb_users (
            username, mail, password, name, id_condo_fk,
            address_section, address_number, address_detail
        )
        values (
            ${username}, ${mail}, ${hashPass}, ${name}, ${id_condo},
            ${address_section}, ${address_number}, ${address_detail}
        )
        returning
            id_user, username, mail, name, id_condo_fk,
            address_section, address_number, address_detail
    `
    return data
}

// update
export async function update({ id_user, username, mail, name, id_condo, address_section, address_number, address_detail }: Input) {

    // 
    // verificar se username já esta em uso
    // 

    // 
    // ver onde fazer alteração de senha
    // 

    if (!id_user) throw new Error('id não informado')

    const [data] = await sql`
        update vz_tb_users
        set 
            username = ${username},
            mail = ${mail},
            name = ${name},
            id_condo_fk = ${id_condo},
            address_section = ${address_section},
            address_number = ${address_number},
            address_detail = ${address_detail}
        where id_user = ${id_user}
        returning
            id_user, username, mail, name, id_condo_fk,
            address_section, address_number, address_detail
    `
    return data
}

// remove
export async function remove(id: number) {
    const [data] = await sql`
        delete from vz_tb_users
        where id_user = ${id}
        returning
            id_user, username, mail, name, id_condo_fk,
            address_section, address_number, address_detail
    `
    return data
}

const userService = {
    find,
    create,
    update,
    delete: remove
}

export default userService