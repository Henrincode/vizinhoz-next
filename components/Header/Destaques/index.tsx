export default function Destaques() {
    return (
        <div className="
            grid
            grid-cols-2
            grid-rows-[1.5fr_1fr]
            md:grid-cols-3
            md:grid-rows-2
            h-100
            gap-2
            sm:gap-2
            *:rounded-lg
            *:duration-300
            *:hover:cursor-pointer
            *:hover:saturate-0
            *:bg-center
            *:bg-cover
            *:bg-blue-500
        ">
            <a id="des-1" style={{ backgroundImage: "url('https://habitacional.com.br/wp-content/uploads/2022/12/entao-e-natal-e-o-que-vamos-fazer-1024x698.webp')" }} className="
                col-span-2
                md:row-span-2
                md:col-span-2
            ">
            </a>

            <a id="des-2" style={{ backgroundImage: "url('https://morar.com.br/wp-content/uploads/2024/05/Como-fazer-festa-no-condominio-Morar-Construtora-1-1024x427.png')" }} className=""></a>
            <a id="des-3" style={{ backgroundImage: "url('https://www.direcional.com.br/wp-content/uploads/2024/05/Perspectiva_PARQUEVILLEORQUIDEA_GUARITA.jpg')" }}></a>
        </div>
    )
}