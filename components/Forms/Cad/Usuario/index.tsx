'use client'

import { userCriar } from "@/actions/usuarios";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { FaBuilding, FaLock, FaUser } from "react-icons/fa";

export default function FormUsuario() {

    const formState = {}

    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    const [passOk, setPassOk] = useState(true)

    const [StateUserCriar, formUserCriar] = useActionState(userCriar, formState)



    useEffect(() => {
        pass === pass2 ? setPassOk(true) : setPassOk(false)
    },[pass2, pass])


    return (
        <div className="box">
            <div className="w-fit mx-auto mt-6 p-10 rounded-2xl text-9xl text-white bg-blue-600"><FaBuilding /></div>
            <form action={formUserCriar} className="
                flex
                flex-col
                gap-4
                max-w-200
                mx-auto
                mt-6
                p-2
                rounded-xl
                bg-white

                [&_.fLinha]:flex
                [&_.fLinha]:flex-row
                [&_.fLinha]:flex-wrap
                [&_.fLinha]:gap-4

                [&_.fGrupo]:flex-1
                [&_.fGrupo]:flex
                [&_.fGrupo]:flex-col
                [&_.fGrupo]:flex-wrap
                [&_.fGrupo]:gap-1

                [&_label]:flex
                [&_label]:flex-row
                [&_label]:items-center
                [&_label]:gap-1
                [&_label]:pl-2
                [&_label]:font-bold
                [&_label]:text-sm
                [&_label]:text-gray-400

                [&_.campo]:min-w-60
                [&_.campo]:w-full
                [&_.campo]:p-3
                [&_.campo]:border-3
                [&_.campo]:rounded-xl
                [&_.campo]:border-blue-200
                [&_.campo]:hover:border-blue-500
                [&_.campo]:focus:border-blue-500
                [&_.campo]:outline-none
                [&_.campo]:resize-none

                [&_.botao]:px-2
                [&_.botao]:py-1
                [&_.botao]:rounded-xl
                [&_.botao]:text-white
                [&_.botao]:cursor-pointer
            ">
                <div className="fLinha">
                    <div className="fGrupo">
                        <label htmlFor=""><FaUser /> vizinhoz.com/u/<span className="-ml-1 text-green-600">user-name</span>*</label>
                        <input className="campo" name="username" type="text" placeholder="username, user-name" />
                    </div>
                    <div className="fGrupo">
                        <label htmlFor=""><FaLock /> Nome *</label>
                        <input className="campo" name="nome" type="text" placeholder="Meu nome" />
                    </div>
                </div>
                <div className="fLinha">
                    <div className="fGrupo">
                        <label htmlFor=""><FaLock /> Senha *</label>
                        <input className="campo" name="pass" type="password" value={pass} onChange={(e) => setPass(e.currentTarget.value)} />
                    </div>
                    <div className="fGrupo">
                        <label htmlFor=""><FaLock /> Confirmar senha *</label>
                        <input className="campo" name="pass2" type="password" value={pass2} onChange={(e) => setPass2(e.currentTarget.value)} />
                    </div>
                </div>
                <div className="text-center text-red-600">{passOk || 'As senhas deve ser identicas'}</div>
                <div className="fGrupo">
                    <label htmlFor=""><FaLock /> E-Mail *</label>
                    <input className="campo" name="email" type="email" placeholder="meu@email.com.br" />
                </div>

                <div className="h-1 rounded-full bg-gray-300"></div>

                <div className="fLinha">
                    <div className="fGrupo">
                        <label htmlFor=""><FaLock /> Condomínio</label>
                        <select className="campo" name="condominio" id="">
                            <option value="1">Spazio Beach</option>
                        </select>
                    </div>
                    <div className="fGrupo">
                        <label htmlFor=""><FaLock /> Seu Tel/Cel/Zap:</label>
                        <input className="campo" name="contato" type="number" placeholder="meu@email.com.br" />
                    </div>

                </div>
                <div className="fLinha">
                    <div className="fGrupo">
                        <label htmlFor=""><FaLock /> Bloco / rua</label>
                        <input className="campo" name="bloco" type="text" placeholder="Bloco 1, ou A, ou Rua João..." />
                    </div>
                    <div className="fGrupo">
                        <label htmlFor=""><FaLock /> Apto / número</label>
                        <input className="campo" name="apto" type="text" placeholder="100, 200, 300 ou 200B fundos" />
                    </div>
                </div>

                <div className="flex flex-row justify-center gap-4">
                    <button className="botao bg-blue-600 hover:bg-blue-900">Criar conta</button>
                    <Link href="/logar" className="botao bg-green-600 hover:bg-green-900">Logar</Link>
                </div>
            </form>
        </div>
    )
}