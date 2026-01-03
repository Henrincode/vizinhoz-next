'use client'

import { useState } from "react"

export default function Teste({ busca }: any) {

    console.log(busca)

    function trocaCor(e: React.MouseEvent<HTMLDivElement>) {
        // e.currentTarget.classList.toggle('bg-amber-300')
        e.currentTarget.classList.toggle('opacity-0')
        e.currentTarget.classList.toggle('opacity-100')
    }

    const [ofertas, setOfertas] = useState([])

    return (
        <div id="testando" className="box bg-amber-300 duration-500 opacity-100 size-32">
            <form method="get" className="flex flex-col">
                <input name="filtroBase" type="text" className="bg-white" />
                <button className="bg-gray-400">Enviar</button>
                {busca}
            </form>
        </div>
    )
}