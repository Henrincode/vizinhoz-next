import FiltroLinha from '@/components/Filtros/FiltroLinha'
import Lista from '@/components/Lista'

import { filtrarOfertas } from '@/actions/filtrarOfertas';

type PageProps = {
  searchParams: Promise<{
    filtroBase?: string;
  }>;
};

export default async function Home({ searchParams }: PageProps) {

  const { filtroBase } = await searchParams

  const ofertas = await filtrarOfertas(filtroBase)

  return (
    <div>
      {/* Boas vintas */}
      <div className='box flex flex-col justify-center items-center h-75 pt-2'>
        <h2 className='font-bold text-6xl text-center'>
          Olá, vizinho <span className='inline-block m-4 sm:inline sm:m-0'>👋</span>
        </h2>
        <h3 className='mt-2 font-light text-2xl text-center italic text-gray-500'>
          Encontre tudo o que precisa sem sair do condomínio.
        </h3>
      </div>

      {/* Filtros */}
      <div className='box'>
        <FiltroLinha radioDefault={filtroBase ?? 'tudo'} />
      </div>
      <div className='box mt-4'>
        <Lista ofertas={ofertas} />
      </div>
      
      <div className="m-10"></div>

    </div>
  )
}
