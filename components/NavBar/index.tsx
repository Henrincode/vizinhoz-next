import { FaBuilding } from "react-icons/fa";
import { IoAddCircleOutline, IoLocationOutline } from "react-icons/io5";

export default function NavBar() {

    return (
        <nav id="nav-bar" className="
        bg-white
        border-b
        **:duration-300
        border-black/20
            [&_a]:flex
            [&_a]:py-2
            [&_a]:px-4
            [&_a]:rounded-full
            [&_a]:cursor-pointer
            [&_a]:text-white
            [&_a]:bg-blue-600
            [&_a]:hover:bg-blue-900
            [&_a]:active:bg-blue-900
            select-none
        ">
            <div id="nav-container" className="
                box
                py-2
                px-4
                flex
                flex-row
                flex-wrap
                gap-2
                justify-center
                items-center
                rounded-b-lg
            ">
                <div id="nav-logo" className="
                    flex
                    flex-row
                    items-center
                    gap-1
                    py-4
                    sm:py-0
                    text-5xl
                    sm:text-3xl
                    font-bold
                    cursor-pointer
                    text-blue-700
                    hover:text-blue-900
                    active:text-blue-900
                    group
                ">
                    <FaBuilding className="bg-blue-600 group-hover:bg-blue-900 group-active:bg-blue-900 text-white p-2 rounded-lg" size={40} /> VIZINHOZ
                </div>

                <form action="" className="
                    flex
                    flex-row
                    flex-1
                    items-center
                ">
                    <input type="text" placeholder="🔍 O que você procura hoje?" className="
                        flex-1
                        p-2 min-w-32 w-full
                        rounded-full
                        outline-none
                        border
                        border-gray-900/10
                        accent-blue-400
                        caret-blue-500
                        bg-gray-100
                        hover:bg-blue-200
                        focus:bg-blue-300
                    "/>
                </form>

                <div className="flex flex-row text-gray-500 cursor-pointer hover:text-black group">
                    <IoLocationOutline className="text-2xl text-blue-600 group-hover:text-green-600" /> Spazio Beach
                </div>

                <div id="nav-conta">
                    <a href="#" className="flex-row  gap-1">
                        <IoAddCircleOutline className="text-2xl" /> Anunciar
                    </a>
                </div>
            </div>
        </nav>
    )
}