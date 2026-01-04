import { anuTudo } from "@/actions/anuncios";
import { catTudo } from "@/actions/categorias";
import { tipoTudo } from "@/actions/tipos";
import CadAnuncio from "@/components/Forms/Cad/Anuncio";


export default async function Anunciar() {
    
    const anuncios = await anuTudo()
    const cat = await catTudo()
    const tipo = await tipoTudo()
    
    return (
        <div>
            <CadAnuncio anuncios={anuncios} cat={cat} tipo={tipo}  />
        </div>
    )
}