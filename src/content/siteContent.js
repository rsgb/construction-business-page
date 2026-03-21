/**
 * Conteúdo centralizado — edite aqui para atualizar textos da página.
 * Fonte: https://www.obrasremodelacoes.pt/ e /servicos/ (março 2026)
 */

import { portfolioImageUrls } from './portfolioScrape'

export const site = {
  name: 'Obras Remodelações',
  tagline: 'Serviços e Reparações',
  area: 'Lisboa – Amadora',
  phoneDisplay: '963 495 891',
  phoneE164: '+351963495891',
  emailPrimary: 'geral@obrasremodelacoes.pt',
  emailSecondary: 'carlos.multiservicos24@gmail.com',
  portfolioUrl: 'https://www.obrasremodelacoes.pt/portfolio/',
  sourceSiteUrl: 'https://www.obrasremodelacoes.pt/',
}

/**
 * Redes encontradas no HTML público (homepage + /portfolio/), março 2026.
 * Não aparecem ligações a Instagram, LinkedIn, X/Twitter, YouTube ou TikTok nessas páginas.
 */
export const socialProfiles = {
  facebook: {
    url: 'https://www.facebook.com/fazobrasremodelacoes',
    label: 'Facebook',
  },
}

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'contactos', label: 'Contactos' },
]

/**
 * Imagens do hero: índices distintos no portfólio (ordenado alfabeticamente no scrape).
 * Ajuste os números se quiser outras fotos.
 */
const heroImageIndices = [289, 255, 58]

export const heroSlides = [
  {
    title: 'Remodelação de casas de banho',
    body: 'Peça já orçamento grátis para remodelar a sua casa de banho.',
    imageUrl: portfolioImageUrls[heroImageIndices[0]],
    imageAlt:
      'Trabalho de remodelação interior — imagem do portfólio público Obras Remodelações',
  },
  {
    title: 'Pintura interior e exterior',
    body: 'Dê uma nova vida à sua casa com os nossos serviços de pintura interior e exterior.',
    imageUrl: portfolioImageUrls[heroImageIndices[1]],
    imageAlt:
      'Projeto de obras ou acabamentos — imagem do portfólio público Obras Remodelações',
  },
  {
    title: 'Remodelação de cozinhas',
    body: 'Otimizamos o espaço, melhoramos a distribuição e acabamentos. Diga-nos o que precisa.',
    imageUrl: portfolioImageUrls[heroImageIndices[2]],
    imageAlt:
      'Remodelação ou reparação — imagem do portfólio público Obras Remodelações',
  },
]

/** Conteúdo alinhado à página Serviços do site atual. */
export const servicesPageIntro = {
  kicker: 'Reparações em casa',
  lead:
    'Temos faz-tudo de todas as áreas que podem ajudar com a maioria das pequenas reparações domésticas que precisa.',
}

/**
 * Blocos principais de https://www.obrasremodelacoes.pt/servicos/
 * Preços como no site público (médias indicativas).
 */
export const servicesDetailed = [
  {
    title: 'Montagem de mobiliário',
    items: [
      'Montagem de móveis, secretárias, cómodas, camas',
      'Montagem de estantes, sofás, cadeiras, guarda-roupas',
      'Montagem de mesas',
      'Desmontagem de mobiliário',
    ],
    priceRange: '24 € – 56 €',
    priceLabel: 'Média por projeto',
  },
  {
    title: 'Montagem e instalação',
    items: [
      'Pendurar TV na parede',
      'Afixação de prateleiras',
      'Serviço de cortinas',
      'Fixação à parede',
      'Instalação de iluminação',
    ],
    priceRange: '18 € – 35 €',
    priceLabel: 'Média por projeto',
  },
  {
    title: 'Serviços — pequenas reparações',
    items: [
      'Pintores',
      'Pladur',
      'Isolamento',
      'Impermeabilizações',
      'Carpinteiros e marceneiros',
      'Vedações',
      'Azulejos',
      'Revestimentos',
      'Telhados',
      'Grades e portões',
    ],
    priceRange: '42 € – 46 €',
    priceLabel: 'Média por projeto',
  },
  {
    title: 'Pinturas interiores e exteriores',
    items: ['Seja uma casa inteira, um quarto ou uma parede'],
    priceRange: '6 € – 35 €',
    priceLabel: 'Média por projeto',
  },
]

/** Áreas de serviço (tabelas do site /servicos/). */
export const serviceAreas = [
  {
    title: 'Lisboa',
    places: [
      'Lisboa e arredores',
      'Carnaxide',
      'Sacavém',
      'Benfica',
      'Loures',
      'Odivelas',
      'Moscavide',
    ],
  },
  {
    title: 'Linha de Sintra',
    places: [
      'Amadora',
      'Queluz',
      'Cacém',
      'Rio de Mouro',
      'Sintra',
      'Alfragide',
      'Massamá',
      'Algueirão',
      'Mem Martins',
      'Rinchoa',
    ],
  },
]

/** Outros serviços ainda referidos no site (homepage / rodapé), para não perder contexto. */
export const servicesExtra = [
  {
    title: 'Remodelações',
    items: [
      'Remodelação de interiores',
      'Remodelação de cozinha',
      'Remodelação de casa de banho',
    ],
  },
  {
    title: 'Reparação de canalização',
    items: [
      'Reparação e montagem de autoclismos',
      'Instalação de bases de duche',
      'Outras reparações domésticas',
    ],
  },
  {
    title: 'Janelas e estores',
    items: [
      'Reparação de janelas em alumínio e PVC',
      'Estores exteriores e interiores',
    ],
  },
]

export const footerServiceList = [
  'Remodelação de interiores',
  'Remodelação de cozinhas',
  'Remodelação de casas de banho',
  'Remodelação de apartamentos',
  'Obras de remodelação',
  'Obras em casa',
  'Pinturas',
]

export const hours = [
  { label: 'Segunda a sexta', value: '8:30 – 18:00' },
  { label: 'Sábado', value: '9:00 – 13:00' },
  { label: 'Domingos e feriados', value: 'Encerrado [confirmar horário no site atual]' },
]
