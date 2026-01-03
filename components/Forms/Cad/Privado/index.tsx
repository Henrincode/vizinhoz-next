'use client'

import { catCriar, catEditar, catApagar } from "@/actions/categorias";
import { tipoCriar, tipoEditar, tipoApagar } from "@/actions/tipos";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FormPrivado from "./FormPrivado";

type ActionState = {
    error?: string
    success?: boolean
}

const initialState: ActionState = {
    error: undefined,
    success: false,
}

export default function cadPrivado({ cat, tipo }: any) {
    const router = useRouter()

    const [editandoCat, setEditandoCat] = useState(false)
    const [inputCat, setInputCat] = useState('')
    const [idCat, setIdCat] = useState('')

    const [editandoTipo, setEditandoTipo] = useState(false)
    const [inputTipo, setInputTipo] = useState('')
    const [idTipo, setIdTipo] = useState('')

    // categorias
    const [stateCatCriar, formCatCadastrar] = useActionState(catCriar, initialState)
    const [stateCatEditar, formCatEditar] = useActionState(catEditar, initialState)
    const [stateCatApagar, formCatApagar] = useActionState(catApagar, initialState)
    // tipos
    const [stateTipoCriar, formTipoCadastrar] = useActionState(tipoCriar, initialState)
    const [stateTipoEditar, formTipoEditar] = useActionState(tipoEditar, initialState)
    const [stateTipoApagar, formTipoApagar] = useActionState(tipoApagar, initialState)

    // categorias
    useEffect(() => {
        if (stateCatCriar.success) {
            
        }
    }, [stateCatCriar])

    useEffect(() => {
        if (stateCatEditar.success) {
            setInputCat('')
            
        }
    }, [stateCatEditar])

    useEffect(() => {
        if (stateCatApagar.success) {
            
        }
    }, [stateCatApagar])

    // tipos
    useEffect(() => {
        if (stateTipoCriar.success) {
            
        }
    }, [stateTipoCriar])

    useEffect(() => {
        if (stateTipoEditar.success) {
            setInputTipo('')
            
        }
    }, [stateTipoEditar])

    useEffect(() => {
        if (stateTipoApagar.success) {
            
        }
    }, [stateTipoApagar])

    return (
        <div className="grid grid-cols-2 gap-2 h-250">
            <FormPrivado
                lista={cat}
                cadastrar={formCatCadastrar}
                editar={formCatEditar}
                apagar={formCatApagar}
                editando={editandoCat}
                setEditando={setEditandoCat}
                input={inputCat}
                setInput={setInputCat}
                id={idCat}
                setId={setIdCat}
                titulo="Criar nova categoria"
                label="Titulo da categoria"
            />
            <FormPrivado
                lista={tipo}
                tabela="tipo"
                cadastrar={formTipoCadastrar}
                editar={formTipoEditar}
                apagar={formTipoApagar}
                editando={editandoTipo}
                setEditando={setEditandoTipo}
                input={inputTipo}
                setInput={setInputTipo}
                id={idTipo}
                setId={setIdTipo}
                titulo="Criar novo tipo"
                label="Titulo do tipo"
            />

        </div>
    )
}