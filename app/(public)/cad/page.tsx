import { catTudo } from "@/actions/categorias";
import { tipoTudo } from "@/actions/tipos";
import CadPrivado from "@/components/Forms/Cad/Privado";

export default async function Cat() {

    const cat = await catTudo()
    const tipo = await tipoTudo()

    return (
        <div className="box mt-5">
            <CadPrivado cat={cat} tipo={tipo} />

        </div>
    )
}