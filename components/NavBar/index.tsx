import Link from "next/link";
import { FaBuilding } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiAccountCircleFill, RiAccountCircleLine } from "react-icons/ri";
import { TbShoppingBagPlus } from "react-icons/tb";

export default function NavBar() {

    return (
        <nav id="nav-bar" className="
            select-none
            border-b
            bg-white
            border-black/20
            **:duration-300
            
            [&_.botao]:cursor-pointer
            [&_.botao]:flex
            [&_.botao]:px-4
            [&_.botao]:py-2
            [&_.botao]:rounded-full
            [&_.botao]:text-white
            [&_.botao]:bg-blue-600
            [&_.botao]:hover:bg-blue-900
            [&_.botao]:active:bg-blue-900
        ">
            <div id="nav-container" className="
                box
                flex
                flex-row
                justify-center
                items-center
                flex-wrap
                gap-2
                px-4
                py-2
                rounded-b-lg
            ">
                <Link id="nav-logo" href={'/'} className="
                    cursor-pointer
                    flex
                    flex-row
                    items-center
                    gap-1
                    py-4
                    text-5xl
                    font-bold
                    text-blue-700
                    hover:text-blue-900
                    active:text-blue-900
                    sm:py-0
                    sm:text-3xl
                    group
                ">
                    <FaBuilding className="p-2 rounded-lg text-white bg-blue-600 group-hover:bg-blue-900 group-active:bg-blue-900" size={40} /> VIZINHOZ
                </Link>

                <form action="" className="
                    flex-1
                    flex
                    flex-row
                    items-center
                ">
                    <input type="text" placeholder="🔍 O que você procura hoje?" className="
                        flex-1
                        min-w-50
                        w-full
                        p-2
                        border
                        rounded-full
                        outline-none
                        border-gray-900/10
                        bg-gray-100
                        hover:bg-blue-200
                        focus:bg-blue-300
                        accent-blue-400
                        caret-blue-500
                    "/>
                </form>

                <div className="flex flex-row text-gray-500 hover:text-black cursor-pointer group">
                    <IoLocationOutline className="text-2xl text-blue-600 group-hover:text-green-600" /> Spazio Beach
                </div>

                <div id="nav-conta" className="flex flex-row gap-2">
                    <Link href="/anunciar" className="botao flex-row items-center gap-1">
                        <TbShoppingBagPlus className="text-2xl" /> Anunciar
                    </Link>
                    <Link href="/logar" className="botao flex-row items-center gap-1">
                        <RiAccountCircleLine className="text-2xl" /> Entrar
                    </Link>
                </div>
            </div>
        </nav>
    )
}