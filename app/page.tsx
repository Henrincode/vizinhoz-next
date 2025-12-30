import FiltroLinha from '@/components/Filtros/FiltroLinha'
import Lista from '@/components/Lista'
import Teste from '@/components/Teste'

export default async function Home() {

  return (
    <div>
      {/* Boas vintas */}
      <div className='box flex flex-col justify-center items-center pt-2 h-75'>
        <h2 className='text-6xl font-bold text-center'>Olá, vizinho 👋</h2>
        <h3 className='text-2xl italic font-light text-gray-500 mt-2 text-center'>Encontre tudo o que precisa sem sair do condomínio.</h3>
      </div>
      {/* Filtros */}
      <FiltroLinha />
      <div className='box mt-4'>
        <Lista />
      </div>
      <div className="m-10"></div>
    </div>
  )
}
