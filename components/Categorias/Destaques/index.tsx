export default function Destaques({ categorias, className }: any) {
    return (
        <ul className={`
            ${className}
            flex
            flex-row
            justify-between
            gap-5
        `}>
            {categorias.map((c: any, i: number) => (
                <li key={i}>
                    <a href="#" className="
                    relative
                    flex
                    justify-center
                    items-center
                    w-32
                    lg:w-44
                    aspect-square
                    rounded-full
                    **:rounded-full
                    overflow-hidden
                    cursor-pointer
                    group
                    
                ">

                        <div style={{ backgroundImage: `url('${c.img}')` }} className="
                        absolute
                        size-full
                        bg-cover
                        bg-center
                        duration-300
                        group-hover:blur
                        bg-blue-500
                    "></div>

                        <div className="
                        absolute
                        font-bold
                        px-4
                        py-2
                        rounded-full
                        bg-white/70
                    ">{c.nome}</div>
                    </a>
                </li>
            ))}
        </ul>
    )
}