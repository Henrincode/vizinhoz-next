import { BsFileTextFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoPricetagsSharp } from "react-icons/io5";
import { MdCategory, MdOutlineCategory, MdOutlineLabel } from "react-icons/md";
import { TbLabelFilled, TbShoppingBagPlus } from "react-icons/tb";

export default function CadAnuncio() {
    return (
        <form className="max-w-200 mt-10 mx-auto p-2 ">
            <div className="flex flex-col items-center p-4 rounded-t-2xl text-white bg-blue-600">
                <p className="flex flex-row items-end gap-2 mb-1 font-bold text-3xl sm:text-4xl"><TbShoppingBagPlus className="text-4xl sm:text-5xl" /> Criar novo anúncio</p>
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
                    <label htmlFor="titulo"><FaEdit /> Título do Anúncio</label>
                    <input id="titulo" className="campo" type="text" placeholder="O que você esta oferecendo ou buscando" />
                </div>

                {/* categoria / tipo */}
                <div className="fLinha">
                    {/* categoria */}
                    <div className="fGrupo">
                        <label htmlFor="categoria"><MdCategory /> Categoria</label>
                        <select id="categoria" className="campo" name="categoria" defaultValue="selecione">
                            <option disabled value="selecione">Selecione...</option>
                            <option value="bolos">Bolos</option>
                            <option value="lanches">&nbsp;&nbsp;&nbsp;&nbsp;Lanches</option>
                            <option value="salgados">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salgados</option>
                        </select>
                    </div>
                    {/* tipo */}
                    <div className="fGrupo">
                        <label htmlFor="tipo"><TbLabelFilled /> Tipo</label>
                        <select id="tipo" className="campo" name="tipo" defaultValue="servicos">
                            <option value="selecione" className="text-gray-400">Selecione...</option>
                            <option value="servico">{'(Serviço) - Faço tal serviço'}</option>
                            <option value="venda">{'(Venda) - Estou vendendo'}</option>
                            <option value="aluguel">(Aluguel) - Estou alugando</option>
                            <option value="troca">{'(Troca) - Troco por alguma coisa'}</option>
                            <option value="doacao">{'(Doação) - Estou doando'}</option>
                            <option value="precisando">{'(Precisando) - Preciso / procuro'}</option>
                        </select>
                    </div>
                    {/* perço */}
                    <div className="fGrupo">
                        <label htmlFor="preco"><IoPricetagsSharp /> Preço</label>
                        <input id="preco" className="campo" type="number" placeholder="0,00" min={0} step={0.01} />
                    </div>
                </div>

                {/* descricao */}
                <div className="fGrupo">
                    <label htmlFor="descricao"><BsFileTextFill /> Descrição</label>
                    <textarea id="descricao" className="campo scrollbar-clean" name="descricao" rows={5} placeholder={
                        `Descreva seu anúncio aqui\nExemplo:\n\nProduto: Bolo caseiro\nEstado: Feito no dia\nEntrega: Retirada no local ou delivery\nObservações: Aceito encomendas`
                    }></textarea>
                </div>

                <div className="fLinha justify-center">
                    <button className="p-2 rounded-xl text-white bg-blue-600 hover:bg-blue-900 cursor-pointer">Cadastrar oferta</button>
                </div>


            </div>
        </form>
    )
}