'use client'

import { BsFileTextFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoPricetagsSharp } from "react-icons/io5";
import { MdCategory, MdDelete } from "react-icons/md";
import { TbLabelFilled, TbShoppingBagPlus } from "react-icons/tb";

import { anuCriar, anuApagar } from "@/actions/anuncios";
import { useActionState } from "react";
import { GoTrash } from "react-icons/go";

type ActionState = {
    error?: string
    success?: boolean
}

const initialState: ActionState = {}

export default function CadAnuncio({ anuncios, cat, tipo }: any) {

    const [stateAnuCriar, formAnuCriar] = useActionState(anuCriar, initialState)
    const [stateAnuApagar, formAnuApagar] = useActionState(anuApagar, initialState)

    return (
        <>
            <form action={formAnuCriar} className="blox max-w-200 mt-10 mx-auto ">
                <input name="id" type="number" defaultValue={1} hidden />
                <div className="flex flex-col items-center p-4 rounded-t-2xl text-white bg-blue-600">
                    {stateAnuCriar.success && <p>Cadastrou</p>} {stateAnuCriar.error && <p>{stateAnuCriar.error}</p>}
                    <p className="flex flex-row items-end gap-2 mb-1 font-bold text-3xl sm:text-4xl">
                        <TbShoppingBagPlus className="text-4xl sm:text-5xl" /> Criar novo anúncio
                    </p>
                    <p className="ml-1 font-light text-sm sm:text-base">
                        Preencha as informações abaixo para publicar
                    </p>
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
                        <input id="titulo" name="titulo" className="campo" type="text" placeholder="O que você esta oferecendo ou buscando" />
                    </div>

                    {/* categoria / tipo */}
                    <div className="fLinha">
                        {/* categoria */}
                        <div className="fGrupo">
                            <label htmlFor="categoria"><MdCategory /> Categoria</label>
                            <select id="categoria" className="campo" name="categoria" defaultValue="selecione">
                                <option disabled value="selecione">Selecione...</option>
                                {cat && cat.map((c: any, i: number) => (
                                    <option key={i} value={c.id_categoria}>{c.nome}</option>
                                ))}
                            </select>
                        </div>
                        {/* tipo */}
                        <div className="fGrupo">
                            <label htmlFor="tipo"><TbLabelFilled /> Tipo</label>
                            <select id="tipo" className="campo" name="tipo" defaultValue="selecione">
                                <option disabled value="selecione">Selecione...</option>
                                {tipo && tipo.map((t: any, i: number) => (
                                    <option key={i} value={t.id_tipo}>{t.nome}</option>
                                ))}
                            </select>
                        </div>
                        {/* perço */}
                        <div className="fGrupo">
                            <label htmlFor="preco"><IoPricetagsSharp /> Preço</label>
                            <input id="preco" className="campo" name="preco" type="number" placeholder="0,00" min={0} step={0.01} />
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

            <div className="box flex flex-row justify-center flex-wrap gap-10 my-5">
                {anuncios.map((a: any, i: number) => (
                    <div key={i} className="flex flex-col gap-4 w-100 p-2 border-2 border-gray-500 rounded-xl
                        [&_ul]:flex
                        [&_ul]:flex-row
                        [&_ul]:justify-center
                        [&_ul]:gap-4
                        [&_li]:p-2
                        [&_li]:rounded-full
                        [&_li]:bg-gray-300
                        [&_.divisor]:h-0.5
                        [&_.divisor]:rounded-full
                        [&_.divisor]:bg-gray-500


                        ">
                        <div className="flex flex-row gap-4">
                            <div className="flex-1 flex flex-row justify-center items-center min-h-16 border-2 rounded-xl border-gray-500 text-xl text-center bg-gray-200">{a.titulo}</div>
                            <form action={formAnuApagar} className="overflow-auto flex justify-center items-center w-20 rounded-xl border-2 border-gray-500 bg-red-500 hover:bg-red-800 text-white text-4xl">
                                <input name="id" type="number" defaultValue={a.id_anuncio} hidden />
                                <button className="flex justify-center items-center size-full cursor-pointer    "><GoTrash /></button>
                                </form>
                        </div>
                        <div className="overflow-auto h-50 px-1 border-2 border-gray-500 rounded-xl text-justify bg-gray-200 hyphens-auto whitespace-pre-line scrollbar-clean">{a.descricao}</div>
                        <ul>
                            <li>{a.categoria}</li>
                            <li>{a.tipo}</li>
                        </ul>
                        <div className="divisor"></div>
                        <ul>
                            <li>{a.nome}</li>
                            <li>{a.condominio}</li>
                        </ul>
                        <div className="divisor"></div>
                        <ul>
                            <li>{"Bloco"} {a.bloco}</li>
                            <li>{"Apartamento"} {a.apartamento}</li>
                        </ul>
                        <div className="divisor"></div>
                        <ul>
                            <li className={a.preco || "hidden"}>{"R$"}{a.preco}</li>
                            <li>{new Date(a.data_criacao).toLocaleString("pt-BR")}</li>
                        </ul>

                    </div>
                ))}
            </div>
        </>
    )
}