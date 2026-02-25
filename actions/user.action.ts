import userService from "@/services/user.service";
import { revalidateTag } from "next/cache";

type ActionState = {
    success?: boolean
    error?: string
    errors?: Errors
}

type Errors = {
    username?: string
    password?: string
    mail?: string
    name?: string
    id_condo?: string
    address_section?: string
    address_number?: string
    address_detail?: string
}

// create
export async function createUser(_: ActionState, formData: FormData) {
    const errors: Errors = {}

    // vars
    const username = String(formData.get('username')).trim()
    const password = String(formData.get('password')).trim()
    const mail = String(formData.get('mail')).trim()
    const name = String(formData.get('name')).trim()
    const id_condo = Number(formData.get('id_condo'))

    const address_section = formData.get('address_section')?.toString().trim() || null
    const address_number = formData.get('address_number')?.toString().trim() || null
    const address_detail = formData.get('address_detail')?.toString().trim() || null

    // validate
    if (!username) errors.username = 'Username é obrigatório'
    if (!password || password.length < 6) errors.password = 'Senha deve ter no mínimo 6 caracteres'
    if (!mail) errors.mail = 'E-Mail é obrigatório'
    if (!name) errors.name = 'Nome é obrigatório'
    if (Number.isNaN(id_condo)) errors.id_condo = 'Condomínio é obrigatório'

    if (Object.keys(errors).length) return { success: false, error: 'Erro ao validar', errors }

    const inputs = {
        username, password, mail, name, id_condo,
        address_section, address_number, address_detail
    }

    try {
        // aqui eu posso fazer um newUser para gerar um auth e já deixar o usuário logado
        await userService.create(inputs)
        // @ts-expect-error -- Ainda esta pedindo 2 parâmetros mas na nova versão é só 1
        revalidateTag('users')
        return { success: true }

    } catch (error) {
        console.log(error)
        return { success: false, error: 'Erro ao cadastrar no banco de dados' }
    }
}

// update


// delete