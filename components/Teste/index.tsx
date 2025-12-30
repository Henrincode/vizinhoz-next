'use client'
export default function Teste() {

    function trocaCor(e: React.MouseEvent<HTMLDivElement>) {
        // e.currentTarget.classList.toggle('bg-amber-300')
        e.currentTarget.classList.toggle('opacity-0')
        e.currentTarget.classList.toggle('opacity-100')
    }

    return(
        <div onClick={trocaCor} id="testando" className="bg-amber-300 duration-500 opacity-100 size-32">

        </div>
    )
}