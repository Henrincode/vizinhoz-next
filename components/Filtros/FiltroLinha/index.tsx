'use client'

// Hooks do Next para navegação client-side (sem reload)
import { useRouter, usePathname } from 'next/navigation'

import { BiFilterAlt } from "react-icons/bi"

export default function FiltroLinha({ radioDefault }: any) {

    // useRouter:
    // permite alterar a URL dinamicamente
    // sem recarregar a página
    const router = useRouter()

    // usePathname:
    // retorna apenas o caminho atual da rota
    // exemplo: "/" ou "/ofertas"
    // NÃO inclui query string (?busca=...)
    const pathname = usePathname()

    // Função executada ao enviar o formulário
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {

        // Bloqueia o submit padrão do formulário
        // (evita reload completo da página)
        e.preventDefault()

        // Referência ao próprio formulário
        // que disparou o evento
        const form = e.currentTarget

        // Captura todos os campos do formulário
        // (inputs, radios, selects, etc.)
        const data = new FormData(form)

        // Cria um objeto de query string vazio
        // que será usado para montar a URL
        const params = new URLSearchParams()

        // Converte os dados do FormData
        // para URLSearchParams
        // Ignora campos vazios para evitar ?campo=
        for (const [key, value] of data.entries()) {
            if (value) {
                params.append(key, String(value))
            }
        }

        // Monta a URL final:
        // - se houver filtros → "/?busca=abc&tipo=produto"
        // - se não houver filtros → "/"
        const url = params.toString()
            ? `${pathname}?${params.toString()}`
            : pathname

        // Atualiza a URL no navegador:
        // - sem recarregar a página
        // - sem voltar ao topo (scroll preservado)
        router.push(url, { scroll: false })
    }

    const lista = [{ nome: 'Tudo', tag: 'tudo' }, { nome: 'Produtos', tag: 'Produto' }, { nome: 'Serviços', tag: 'Serviço' }, { nome: 'Doação', tag: 'Doação' }, { nome: 'Adoção', tag: 'Adoção' }, { nome: 'Pessoas', tag: 'Pessoas' }]

    return (
        <div className='pb-2 border-b-2 border-gray-500'>
            <form onSubmit={onSubmit} className='flex flex-row justify-between items-start px-2'>
                <ul className='overflow-auto flex flex-row gap-4 pb-2 font-bold'>
                    {/* lista os filtros */}
                    {lista.map(item => (
                        <li key={item.tag}>
                            <label className="cursor-pointer">
                                <input name="filtroBase" type="radio" hidden value={item.tag} checked={radioDefault === item.tag}
                                    onChange={(e) => e.currentTarget.form?.requestSubmit()} className="peer"
                                />
                                <span className={`
                                    peer-checked:text-blue-500
                                    text-gray-500
                                    ${radioDefault !== item.tag && "hover:text-gray-700"}
                                    `}>
                                    {item.nome}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
                <div className='sm:hidden text-gray-500 animate-pulse'>{'>'}</div>
                <div className='flex flex-row items-center gap-2 ml-2 font-bold text-gray-500'>
                    <BiFilterAlt /> Filtrar
                </div>
            </form>
        </div>
    )
}