

export default function Header() {

    return (
        <nav id="nav-bar" className="mt-4">
            <div className="container py-2 px-4 flex flex-row gap-4 justify-around items-center rounded-2xl bg-blue-500">
                <div id="nav-logo" className="text-3xl font-bold cursor-pointer text-white hover:text-amber-200">VIZINHOZ</div>
                <form className="flex flex-row flex-1 gap-4" action="">
                    <input className="flex-1 p-2 w-full rounded-2xl bg-amber-50 hover:bg-amber-200 focus:bg-amber-300" type="text" />
                    <button className="py-2 px-4 rounded-2xl cursor-pointer bg-amber-50 hover:bg-amber-200" type="button"> Buscar </button>
                </form>
                <div id="nav-conta">
                    <a className="py-2 px-4 rounded-2xl cursor-pointer bg-amber-50 hover:bg-amber-200" href="#">Conta</a>
                </div>
            </div>
        </nav>
    )
}