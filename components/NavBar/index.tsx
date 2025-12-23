
export default function NavBar() {

    return (
        <nav id="nav-bar" className="
            [&_a]:block
            [&_a]:py-2
            [&_a]:px-4
            [&_a]:rounded-lg
            [&_a]:cursor-pointer
            [&_a]:bg-white
            [&_a]:hover:bg-amber-200
            [&_a]:active:bg-amber-200
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
                bg-blue-500
            ">
                <div id="nav-logo" className="
                    py-4
                    sm:py-0
                    text-5xl
                    sm:text-3xl
                    font-bold
                    cursor-pointer
                    text-white
                    hover:text-amber-200
                    active:text-amber-200
                ">
                    VIZINHOZ
                </div>

                <form action="" className="
                    flex
                    flex-row
                    flex-1
                    items-center
                ">
                    <input type="text" className="
                        flex-1
                        p-2 min-w-32 w-full
                        rounded-l-lg
                        outline-none
                        accent-amber-400
                        caret-amber-500
                        bg-white
                        hover:bg-amber-200
                        focus:bg-amber-300
                    "/>
                    <button type="button" className="
                        py-2
                        px-4
                        border-l
                        rounded-r-lg
                        cursor-pointer
                        bg-amber-100
                        border-l-blue-200
                        hover:bg-amber-200
                        active:bg-amber-200
                        select-none
                    "> Buscar </button>
                </form>

                <a href="#">Categorias</a>

                <div id="nav-conta">
                    <a href="#">Conta</a>
                </div>
            </div>
        </nav>
    )
}