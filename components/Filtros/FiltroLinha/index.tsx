'use client'

import { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";

export default function FiltroLinha() {

    const [ativo, setAtivo] = useState('Tudo')

    function infoAtivo(valor: any) {
        console.log(valor)
    }

    function mudarAtivo(item: any) {
        setAtivo(item)
        infoAtivo(item)
    }

    const lista = ['Tudo', 'Produtos', 'Serviços', 'Doação', 'Adoção', 'Pessoas']

    return (
        <div className='box border-b-2 border-gray-500 pb-2'>
            <div className='flex flex-row justify-between px-2'>
                <ul className='flex flex-row gap-4 font-bold'>
                    {lista.map(item => (
                        <li key={item} onClick={() => mudarAtivo(item)} className={`
                            cursor-pointer
                            ${ativo === item
                                ? `text-blue-500`
                                : `text-gray-500 hover:text-gray-700`}
                        `}>
                            {item}
                        </li>
                    ))}
                </ul>
                <div id="testee" className='flex flex-row gap-2 items-center font-bold text-gray-500'>
                    <BiFilterAlt /> Filtrar
                </div>
            </div>
        </div>
    )
}