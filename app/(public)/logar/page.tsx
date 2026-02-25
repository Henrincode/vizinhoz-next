import FormLogarUsuario from "@/components/Forms/LogarUsuario";
import { FaBuilding } from "react-icons/fa";

export default function Logar() {
    return (
        <>
            <div className="w-fit mx-auto mt-6 p-10 rounded-2xl text-9xl text-white bg-blue-600"><FaBuilding /></div>
            <FormLogarUsuario />
        </>
    )
}