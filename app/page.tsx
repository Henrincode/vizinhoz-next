import Destaques from '@/components/Header/Destaques'
import CatDestaq from '@/components/Categorias/Destaques'

const catProdutos = [
  { nome: 'Bolos', img: 'https://receitastanahora.com.br/wp-content/uploads/2018/02/bolos-caseiros.jpg' },
  { nome: 'Salgados', img: 'https://cdn.awsli.com.br/2610/2610989/produto/221425681/kit-150-salgados-fritos-313yv5b730.png' },
  { nome: 'Roupas', img: 'https://blog.connectplug.com.br/wp-content/uploads/2018/01/como-decorar-uma-loja-de-roupas-e1522869386918.jpg' },
  { nome: 'Eletrônicos', img: 'https://www.grupodicas.com/wp-content/uploads/2023/04/eletronicos-miami.jpg' },
  { nome: 'Doação', img: 'https://www.pensamentoverde.com.br/wp-content/uploads/2021/06/equipamentos-eletronicos-o-que-acontece-quando-eles-nao-servem-mais-para-voce2-576x385.jpg' },
  { nome: 'Ver Mais', img: 'https://e1.pxfuel.com/desktop-wallpaper/394/928/desktop-wallpaper-table-top-wooden-table.jpg' }
]

const catProfissionais = [
  { nome: 'Confeiteiro', img: 'https://www.mococa.com.br/wp-content/uploads/2025/07/itens-de-confeitaria-para-confeiteiras-iniciantes-1024x683.jpg' },
  { nome: 'Lancheiro', img: 'https://img.freepik.com/fotos-premium/vista-frontal-chef-masculino-segurando-pao-de-hamburguer-na-cozinha_198067-1041178.jpg?semt=ais_hybrid&w=740&q=80' },
  { nome: 'Encanador', img: 'https://seufelix.com.br/wp-content/uploads/2025/09/curso-de-instalador-hidraulico-encanador-Empreendedorismo-e-Meio-Ambiente.webp' },
  { nome: 'Eletricista', img: 'https://www.vilapavao.es.gov.br/uploads/files/eletricistas.jpg' },
  { nome: 'Chaveiro', img: 'https://chaveirobougainville.com.br/wp-content/uploads/2016/03/chaveiro.png' },
  { nome: 'Ver Mais', img: 'https://e1.pxfuel.com/desktop-wallpaper/394/928/desktop-wallpaper-table-top-wooden-table.jpg' }
]

export default async function Home() {

  return (
    <div className=''>
      {/* Boas vintas */}
      <div className='box flex flex-col justify-center items-center pt-2 h-75'>
        <h2 className='text-6xl font-bold'>Olá, vizinho 👋</h2>
        <h3 className='text-2xl italic font-light text-gray-500 mt-2'>Encontre tudo o que precisa sem sair do condomínio.</h3>
      </div>
      {/* Filtors */}
      



      {/* <div className="box">
        <Destaques />
      </div>
      <div className=''>
        <div className='text-center text-5xl font-bold italic text-gray-500 mt-10'># Produtos</div>
        <CatDestaq categorias={catProdutos} className="
          box
          xl-box
          overflow-auto
          p-5
          xl:px-0
          " />
        <div className='text-center text-5xl font-bold italic text-gray-500 mt-5'># Profissionais</div>
        <CatDestaq categorias={catProfissionais} className="
          box
          xl-box
          overflow-auto
          p-5
          xl:px-0
          " />
      </div> */}
      <div className="m-10"></div>
    </div>
  )
}
