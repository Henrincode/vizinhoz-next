import { FaEdit } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";

export default function FormPrivado({ cadastrar, editar, apagar, lista, titulo, label, tabela, editando, setEditando, input, setInput, id, setId }: any) {
    return (
        <div>
            <form action={editando ? editar : cadastrar} className="">
                <div className="flex flex-col items-center p-4 rounded-t-2xl text-white bg-blue-600">
                    <p className="flex flex-row items-end gap-2 mb-1 font-bold text-3xl sm:text-4xl"><TbShoppingBagPlus className="text-4xl sm:text-5xl" /> {titulo}</p>
                    <p className="ml-1 font-light text-sm sm:text-base">Preencha as informações abaixo para publicar</p>
                </div>
                <div className="
                        flex
                        flex-col
                        gap-4
                        p-4
                        rounded-b-2xl
                        bg-white

                        [&_.fLinha]:flex
                        [&_.fLinha]:flex-row
                        [&_.fLinha]:flex-wrap
                        [&_.fLinha]:gap-4

                        [&_.fGrupo]:flex-1
                        [&_.fGrupo]:flex
                        [&_.fGrupo]:flex-col
                        [&_.fGrupo]:flex-wrap
                        [&_.fGrupo]:gap-1

                        [&_label]:flex
                        [&_label]:flex-row
                        [&_label]:items-center
                        [&_label]:gap-1
                        [&_label]:pl-2
                        [&_label]:font-bold
                        [&_label]:text-sm
                        [&_label]:text-gray-400

                        [&_.campo]:min-w-60
                        [&_.campo]:w-full
                        [&_.campo]:p-3
                        [&_.campo]:border-3
                        [&_.campo]:rounded-xl
                        [&_.campo]:border-blue-200
                        [&_.campo]:hover:border-blue-500
                        [&_.campo]:focus:border-blue-500
                        [&_.campo]:outline-none
                        [&_.campo]:resize-none
                        ">
                    {/* título */}
                    <div className="fGrupo">
                        <label htmlFor="titulo"><FaEdit /> {label}</label>
                        <input id="titulo" name="titulo" className="campo" type="text" defaultValue={editando ? input : ''} placeholder="Insira o nome da categoria" />
                        <input type="text" name='id' hidden defaultValue={id} />
                    </div>

                    <div className="fLinha justify-center">
                        <button className="p-2 rounded-xl text-white bg-blue-600 hover:bg-blue-900 cursor-pointer">{editando ? 'Alterar categoria' : 'Cadastrar categoria'}</button>
                    </div>

                </div>

            </form>
            <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-4 text-white">
                {lista.map((c: any, i: any) => (
                    <form action={apagar} key={i} className="flex flex-row">
                        <span className="px-2 rounded-l-full bg-blue-500">{c.nome}</span>
                        <input name="id" type="text" hidden defaultValue={!tabela ? c.id_categoria : c.id_tipo} />
                        <span className="px-2 bg-amber-300 cursor-pointer" onClick={() => {setEditando(true); setInput(c.nome); setId(!tabela ? c.id_categoria : c.id_tipo)}}>E</span>
                        <button className="px-2 rounded-r-full bg-red-500">X</button>
                    </form>
                ))}
            </div>
        </div>
    )
}