'use client'
const produtos = [
    {
        id: 1, titulo: 'Bolo de fubá', criador: 'Ana Cláudia', condominio: 'Spazio Beach', bloco: '06', apartamento: '308', tipo: 'Produto', categoria: 'Confeitaria',
        descricao: 'Delicioso bolo de fubá fofinho, feito com milho selecionado e uma pitada de erva-doce. Perfeito para o café da tarde. Faço por encomenda e entrego quentinho na sua porta.',
        imagem: 'https://essareceitafunciona.com.br/wp-content/uploads/2022/10/Receita-de-bolo-de-laranja-Essa-Receita-Funciona-8.jpg'
    },
    {
        id: 2, titulo: 'Instalação de Chuveiro', criador: 'Ricardo Santos', condominio: 'Res. das Palmeiras', bloco: 'B', apartamento: '104', tipo: 'Serviço', categoria: 'Manutenção',
        descricao: 'Serviço de eletricista residencial com foco em segurança. Instalação técnica de chuveiros de todas as marcas, troca de resistências, instalação de tomadas e luminárias LED.',
        imagem: 'https://cdn.leroymerlin.com.br/products/instalacao_de_chuveiro_eletrico_50019855_a010_600x600.jpg'
    },
    {
        id: 3, titulo: 'Marmitas Fit', criador: 'Juliana Lima', condominio: 'Solar do Bosque', bloco: '10', apartamento: '502', tipo: 'Produto', categoria: 'Alimentação',
        descricao: 'Alimentação saudável e prática para sua semana. Marmitas congeladas ou frescas, pesadas individualmente com equilíbrio de macros. Temos opções sem glúten e vegetarianas.',
        imagem: 'https://images.ctfassets.net/qfxflpv0atz9/6qSn32wUjDZMJyE57sAMSw/c188d6561fe6f98e0426c2b1ec415861/marmitasfit-imgdestacada.jpg'
    },
    {
        id: 4, titulo: 'Doação: Berço de Bebê', criador: 'Marcos Oliveira', condominio: 'Spazio Beach', bloco: '04', apartamento: '12', tipo: 'Doação', categoria: 'Infantil',
        descricao: 'Berço americano em madeira branca, em ótimo estado de conservação. Possui regulagem de altura. Estou doando pois meu filho cresceu. Retirada por conta do interessado.',
        imagem: 'https://img.freepik.com/fotos-gratis/quarto-de-bebe-com-berco-branco-e-travesseiro_23-2148906654.jpg'
    },
    {
        id: 5, titulo: 'Manicure e Pedicure', criador: 'Beatriz Costa', condominio: 'Vista do Vale', bloco: 'A1', apartamento: '901', tipo: 'Serviço', categoria: 'Estética',
        descricao: 'Trabalho com cutilagem russa e esmaltação comum ou em gel. Materiais 100% esterilizados em autoclave para sua segurança. Atendimento exclusivo para moradoras do condomínio.',
        imagem: '#'
    },
    {
        id: 6, titulo: 'Conserto de Vazamentos', criador: 'Seu Jorge', condominio: 'Spazio Beach', bloco: '01', apartamento: '05', tipo: 'Serviço', categoria: 'Hidráulica',
        descricao: 'Especialista em detecção e reparo de vazamentos em torneiras, vasos sanitários e sifões. Realizo também a limpeza periódica de caixas d’água com emissão de laudo.',
        imagem: '#'
    },
    {
        id: 7, titulo: 'Cookies Artesanais', criador: 'Fernanda Mello', condominio: 'Edifício Horizonte', bloco: 'Único', apartamento: '404', tipo: 'Produto', categoria: 'Confeitaria',
        descricao: 'Cookies estilo americano, crocantes por fora e macios por dentro. Usamos chocolate belga e manteiga de primeira qualidade. Sabores: Gotas de Chocolate, Red Velvet e Nutella.',
        imagem: '#'
    },
    {
        id: 8, titulo: 'Venda: Bicicleta Aro 29', criador: 'Paulo Rocha', condominio: 'Res. das Palmeiras', bloco: 'C', apartamento: '202', tipo: 'Produto', categoria: 'Lazer',
        descricao: 'Bicicleta Mountain Bike em excelente estado. Quadro de alumínio leve, 21 marchas Shimano, freio a disco hidráulico. Ideal para quem quer começar a pedalar nos fins de semana.',
        imagem: '#'
    },
    {
        id: 9, titulo: 'Passeador de Cães', criador: 'Gabriel Souza', condominio: 'Solar do Bosque', bloco: '05', apartamento: '110', tipo: 'Serviço', categoria: 'Pets',
        descricao: 'Seu cãozinho fica muito tempo sozinho? Eu levo ele para gastar energia! Passeios educativos de 40 minutos com foco no bem-estar animal. Tenho experiência com raças grandes e pequenas.',
        imagem: '#'
    },
    {
        id: 10, titulo: 'Adoção: Filhote de SRD', criador: 'Letícia Arantes', condominio: 'Bella Vita', bloco: '09', apartamento: '603', tipo: 'Adoção', categoria: 'Pets',
        descricao: 'Encontrei este filhotinho abandonado e estou cuidando dele até encontrar um lar definitivo. Tem 3 meses, porte médio, é muito brincalhão e já tomou a primeira dose da vacina V10.',
        imagem: '#'
    },
    {
        id: 11, titulo: 'Pão Caseiro Recheado', criador: 'Dona Maria', condominio: 'Spazio Beach', bloco: '02', apartamento: '201', tipo: 'Produto', categoria: 'Alimentação',
        descricao: 'Receita de família! Pães super fofinhos com recheios generosos de presunto e queijo, frango com catupiry ou calabresa. Encomende o seu para o café da manhã especial.',
        imagem: '#'
    },
    {
        id: 12, titulo: 'Marido de Aluguel', criador: 'Carlos Silva', condominio: 'Vista do Vale', bloco: 'B2', apartamento: '101', tipo: 'Serviço', categoria: 'Manutenção',
        descricao: 'Precisa pendurar um quadro, montar um guarda-roupa ou consertar uma porta? Faço pequenos reparos rápidos com ferramentas profissionais e limpeza após o serviço.',
        imagem: '#'
    },
    {
        id: 13, titulo: 'Doação: Livros Didáticos', criador: 'Amanda Silva', condominio: 'Edifício Horizonte', bloco: 'Único', apartamento: '804', tipo: 'Doação', categoria: 'Educação',
        descricao: 'Estou desapegando de livros de biologia, história e matemática focados no ENEM. Estão todos bem cuidados, alguns com anotações a lápis. Ideal para quem está estudando para vestibular.',
        imagem: '#'
    },
    {
        id: 14, titulo: 'Design de Sobrancelhas', criador: 'Patrícia Gomes', condominio: 'Solar do Bosque', bloco: '03', apartamento: '702', tipo: 'Serviço', categoria: 'Estética',
        descricao: 'Valorize seu olhar com um design personalizado. Faço medição facial (visagismo), limpeza e aplicação de henna opcional. Atendimento prático e rápido no conforto do seu prédio.',
        imagem: '#'
    },
    {
        id: 15, titulo: 'Coxinha e Salgados', criador: 'Roberto Júnior', condominio: 'Res. das Palmeiras', bloco: 'A', apartamento: '303', tipo: 'Produto', categoria: 'Alimentação',
        descricao: 'Salgadinhos fritos na hora! Massa de batata bem temperada e recheio de frango desfiado. Vendemos o cento para festas ou porções de 10 unidades para o seu lanche.',
        imagem: '#'
    },
    {
        id: 16, titulo: 'Lavagem de Carros', criador: 'Bruno Viana', condominio: 'Spazio Beach', bloco: '04', apartamento: '22', tipo: 'Serviço', categoria: 'Automotivo',
        descricao: 'Lavagem a seco (ecológica) realizada diretamente na sua vaga de garagem. Inclui limpeza interna, aspiração e pretinho nos pneus. Não utiliza mangueira, sem sujeira no chão.',
        imagem: '#'
    },
    {
        id: 17, titulo: 'Venda: Monitor 24 polegadas', criador: 'Thiago Neves', condominio: 'Bella Vita', bloco: '12', apartamento: '1005', tipo: 'Produto', categoria: 'Eletrônicos',
        descricao: 'Monitor Dell profissional com resolução Full HD. Entradas HDMI e DisplayPort. Base com ajuste de altura e rotação. 1 ano de uso, sem nenhum dead pixel ou arranhão.',
        imagem: '#'
    },
    {
        id: 18, titulo: 'Personal Trainer', criador: 'Carla Nunes', condominio: 'Vista do Vale', bloco: 'A2', apartamento: '402', tipo: 'Serviço', categoria: 'Saúde',
        descricao: 'Consultoria fitness e treinos presenciais na academia do condomínio. Especialista em emagrecimento feminino e fortalecimento muscular. Vamos bater suas metas de saúde!',
        imagem: '#'
    },
    {
        id: 19, titulo: 'Adoção: Gatinha Castrada', criador: 'Lucas Pereira', condominio: 'Solar do Bosque', bloco: '07', apartamento: '508', tipo: 'Adoção', categoria: 'Pets',
        descricao: 'Esta gatinha de 1 ano busca um novo lar. Ela é extremamente dócil, está com a saúde impecável, castrada e vacinada. Convive bem com outros gatos e crianças.',
        imagem: '#'
    },
    {
        id: 20, titulo: 'Babá Noturna', criador: 'Sandra Helena', condominio: 'Edifício Horizonte', bloco: 'Único', apartamento: '103', tipo: 'Serviço', categoria: 'Cuidados',
        descricao: 'Ofereço serviço de babá para pais que precisam sair à noite. Tenho curso de primeiros socorros e vasta experiência com bebês e crianças até 10 anos. Referências no prédio.',
        imagem: '#'
    },
    {
        id: 21, titulo: 'Venda: Plantas e Suculentas', criador: 'Regina Duarte', condominio: 'Spazio Beach', bloco: '10', apartamento: '205', tipo: 'Produto', categoria: 'Jardinagem',
        descricao: 'Lindas mudas de suculentas e plantas ornamentais para apartamento. Todas acompanham vasos decorativos de cerâmica e dicas de cultivo para iniciantes.',
        imagem: '#'
    },
    {
        id: 22, titulo: 'Limpeza de Estofados', criador: 'Fábio Antunes', condominio: 'Res. das Palmeiras', bloco: 'D', apartamento: '304', tipo: 'Serviço', categoria: 'Limpeza',
        descricao: 'Sua sala de cara nova! Higienização profunda de sofás e poltronas com máquina extratora de alta potência. Remove manchas, ácaros e odores desagradáveis.',
        imagem: '#'
    },
    {
        id: 23, titulo: 'Doação: Roupas de Inverno', criador: 'Heloísa Castro', condominio: 'Bella Vita', bloco: '05', apartamento: '902', tipo: 'Doação', categoria: 'Vestuário',
        descricao: 'Lote de roupas masculinas tamanho G contendo 3 blusas de moletom, 1 jaqueta pesada e 2 calças jeans. Tudo limpo e pronto para uso. Ideal para doação a instituições.',
        imagem: '#'
    },
    {
        id: 24, titulo: 'Costura e Ajustes', criador: 'Dona Cida', condominio: 'Vista do Vale', bloco: 'C1', apartamento: '108', tipo: 'Serviço', categoria: 'Moda',
        descricao: 'Costureira com 20 anos de experiência. Faço barras de calça, ajustes em vestidos de festa, troca de zíperes e transformações em peças de vestuário.',
        imagem: '#'
    },
    {
        id: 25, titulo: 'Hambúrguer Artesanal', criador: 'Matheus Farias', condominio: 'Solar do Bosque', bloco: '03', apartamento: '1201', tipo: 'Produto', categoria: 'Alimentação',
        descricao: 'Hambúrguer de 160g de fraldinha, queijo cheddar derretido e cebola caramelizada no pão brioche. Acompanha batata rústica. Pedidos via WhatsApp até as 22h.',
        imagem: '#'
    },
    {
        id: 26, titulo: 'Venda: Air Fryer Nova', criador: 'Viviane Lopes', condominio: 'Spazio Beach', bloco: '06', apartamento: '407', tipo: 'Produto', categoria: 'Eletrodomésticos',
        descricao: 'Fritadeira elétrica Mondial 4 litros, cor preta. Nunca foi usada, está lacrada na caixa original com nota fiscal e garantia de 1 ano do fabricante.',
        imagem: '#'
    },
    {
        id: 27, titulo: 'Consultoria Financeira', criador: 'André Rocha', condominio: 'Edifício Horizonte', bloco: 'Único', apartamento: '202', tipo: 'Serviço', categoria: 'Educação',
        descricao: 'Ajudo você a sair do vermelho e começar a investir. Planilha de gastos personalizada, análise de dívidas e introdução ao mercado financeiro de forma simples.',
        imagem: '#'
    },
    {
        id: 28, titulo: 'Adoção: Tartaruga de Água', criador: 'Camila Rossi', condominio: 'Bella Vita', bloco: '04', apartamento: '601', tipo: 'Adoção', categoria: 'Pets',
        descricao: 'Tartaruga (Tigre d´água) jovem. Vou me mudar para o exterior e não poderei levá-la. Procuro alguém que tenha um aquário adequado e tempo para cuidar dela.',
        imagem: '#'
    },
    {
        id: 29, titulo: 'Reparo de Computadores', criador: 'Igor Santos', condominio: 'Res. das Palmeiras', bloco: 'B', apartamento: '1103', tipo: 'Serviço', categoria: 'Tecnologia',
        descricao: 'Seu PC está lento? Faço formatação com backup, instalação de SSD para ganho de velocidade e limpeza interna para evitar superaquecimento. Atendo no local.',
        imagem: '#'
    },
    {
        id: 30, titulo: 'Doação: Brinquedos Diversos', criador: 'Patrícia Silva', condominio: 'Vista do Vale', bloco: 'A1', apartamento: '802', tipo: 'Doação', categoria: 'Infantil',
        descricao: 'Caixa com diversos brinquedos (quebra-cabeças, carrinhos e jogos de tabuleiro). Estão em bom estado de conservação, ideal para crianças de 4 a 8 anos.',
        imagem: '#'
    }
]

function corTipo(tipo: string, opac = 100) {
    switch (tipo) {
        case 'Produto':
            return "bg-blue-600/70"
        case 'Serviço':
            return "bg-red-600/70"
        case 'Doação':
            return "bg-green-600/70"
        case 'Adoção':
            return "bg-pink-600/70"
    }
}

export default function Lista() {
    return (
        <ul className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-4
        ">
            {produtos.map((p, i) => (
                <li key={i} className="
                    flex
                    flex-col
                    gap-2
                    p-2
                    rounded-2xl
                    duration-300
                    outline-3
                    outline-blue-500/10
                    hover:outline-3
                    hover:outline-blue-500
                    bg-white
                ">
                    {/* container para mudar cor do titulo quando imagem estiver hover */}
                    <div className="relative overflow-hidden rounded-t-2xl">
                        <div className="group cursor-pointer">
                            <img className="
                                aspect-square
                                object-cover
                                object-center
                                rounded-b-2xl
                            " src={p.imagem} alt="" />

                        <div className="mt-2 text-center font-bold cursor-pointer duration-300 text-gray-600 group-hover:text-blue-500">
                            {p.titulo}
                        </div>
                        </div>
                            <div className={`${corTipo(p.tipo)} px-2 py-1 text-white rounded-[0_0_16px_0] absolute top-0`}>
                                {p.tipo}
                            </div>
                            <div className="bg-gray-700/70 px-2 py-1 text-white rounded-[0_0_0_16px] absolute top-0 right-0">
                                {p.categoria}
                            </div>

                    </div>
                    {/* <div className="flex-1 border-t border-b border-gray-200 py-2 text-sm text-justify hyphens-auto text-gray-500">
                        {p.descricao}
                    </div> */}
                    {/* bg-blue-600/70 */}
                    <div className="flex flex-col items-center gap-2 border-t border-gray-200 pt-2 text-sm text-gray-700
                        [&_ul]:flex
                        [&_ul]:flex-row
                        [&_ul]:justify-center
                        [&_ul]:flex-wrap
                        [&_ul]:gap-2
                        [&_li]:duration-300
                        [&_li]:px-2
                        [&_li]:rounded-full
                        [&_li]:border
                        [&_li]:cursor-pointer
                        [&_li]:border-blue-500
                        [&_li]:hover:bg-blue-300
                    ">
                        <ul className="">
                            <li className="">
                                {p.criador}
                            </li>
                            <li>
                                {p.condominio}
                            </li>
                        </ul>
                        <ul className="">
                            <li className="">
                                Bloco {p.bloco}
                            </li>
                            <li className="">
                                Apto {p.apartamento}
                            </li>
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    )
}