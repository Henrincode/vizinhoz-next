'use client'

import { TbPhotoX } from "react-icons/tb"

// muda a cor dos tipos em cima das fotos
function corTipo(tipo: string) {
    switch (tipo) {
        case 'Produto':
            return "bg-blue-600/70"
        case 'Serviço':
            return "bg-red-600/70"
        case 'Doação':
            return "bg-green-600/70"
        case 'Adoção':
            return "bg-pink-600/70"
    }
}

export default function Lista({ ofertas }: any) {

    // se não tiver ofertas mostra mensagem sem ofertas
    if (ofertas.length === 0) {
        return (
            <div className="mt-10  text-5xl text-center text-gray-500">
                Nenhuma oferta encontrada
            </div>
        )
    }

    return (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ofertas.map((p: any, i: number) => (
                <li key={i} className="
                    flex
                    flex-col
                    gap-2
                    p-2
                    rounded-2xl
                    
                    outline-3
                    outline-blue-500/10
                    hover:outline-blue-500
                    active:outline-blue-500
                    bg-white
                    duration-300
                ">
                    {/* container para mudar cor do titulo quando imagem estiver hover */}
                    <div className="relative overflow-hidden flex-1 flex flex-col rounded-t-2xl">
                        <div className="flex-1 flex flex-col group cursor-pointer">

                            {/* se não tiver foto mostra mensagem sem foto */}
                            {p.imagem !== '#'
                                ?
                                <img className="w-full aspect-square object-cover object-center rounded-b-2xl" src={p.imagem} alt="" />
                                :
                                <div className="flex flex-col justify-center items-center w-full aspect-square font-bold rounded-b-2xl text-4xl text-gray-500 bg-gray-200">
                                    <TbPhotoX className="text-8xl" /> Sem foto
                                </div>}

                            {/* titulo da oferta */}
                            <div className="cursor-pointer flex-1 mt-2 font-bold text-center text-gray-600 group-hover:text-blue-500 duration-300">
                                {p.titulo}
                            </div>
                        </div>

                        {/* tipo e categoria no topo da imagem */}
                        <div className={`absolute top-0 px-2 py-1 rounded-[0_0_16px_0] text-white ${corTipo(p.tipo)}`}>
                            {p.tipo}
                        </div>
                        <div className="absolute top-0 right-0 px-2 py-1 rounded-[0_0_0_16px] text-white bg-gray-700/70">
                            {p.categoria}
                        </div>

                    </div>

                    {/* botões com nome condominio bloco etc... */}
                    <div className="
                        flex
                        flex-col
                        items-center
                        gap-2
                        pt-2
                        border-t
                        text-sm
                        border-gray-200
                        text-gray-700

                        [&_li]:cursor-pointer
                        [&_ul]:flex
                        [&_ul]:flex-row
                        [&_ul]:justify-center
                        [&_ul]:flex-wrap
                        [&_ul]:gap-2
                        [&_li]:px-2
                        [&_li]:rounded-full
                        [&_li]:border
                        [&_li]:border-blue-500
                        [&_li]:hover:bg-blue-300
                        [&_li]:duration-300
                    ">
                        <ul className="">
                            <li className="">
                                {p.criador}
                            </li>
                            <li>
                                {p.condominio}
                            </li>
                        </ul>
                        <ul className="">
                            <li className="">
                                Bloco {p.bloco}
                            </li>
                            <li className="">
                                Apto {p.apartamento}
                            </li>
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    )
}