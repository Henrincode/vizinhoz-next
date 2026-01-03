import { catTudo } from "@/actions/categorias";
import { tipoTudo } from "@/actions/tipos";
import CadAnuncio from "@/components/Forms/Cad/Anuncio";


export default async function Anunciar() {
    
    const cat = await catTudo()
    const tipo = await tipoTudo()
    
    return (
        <div>
            <CadAnuncio cat={cat} tipo={tipo}  />
        </div>
    )
}