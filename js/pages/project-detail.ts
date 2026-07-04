type Lang = 'pt' | 'en';

type LocalizedText = {
  pt: string;
  en: string;
};

type GalleryItem = {
  src: string;
  alt: LocalizedText;
  layout: 'wide' | 'narrow' | 'half' | 'third' | 'full';
};

type ProcessStage = {
  number: string;
  title: LocalizedText;
  text: LocalizedText;
};

type Project = {
  slug: string;
  category: LocalizedText;
  title: LocalizedText;
  tagline: LocalizedText;
  client: LocalizedText;
  scope: LocalizedText;
  year: string;
  location: LocalizedText;
  cover: string;
  gallery: GalleryItem[];
  overview: LocalizedText;
  statDeliverables: string;
  statWeeks: string;
  process: ProcessStage[];
  result: LocalizedText;
};

const PROJECTS: Project[] = [
  {
    slug: 'eco-resort',
    category: { pt: 'Resort', en: 'Resort' },
    title: { pt: 'Eco Resort Zagaia', en: 'Zagaia Eco Resort' },
    tagline: {
      pt: 'Area externa e suites pensadas para ampliar conforto, privacidade e conexao com a natureza em Bonito/MS.',
      en: 'Outdoor areas and suites designed to expand comfort, privacy, and connection with nature in Bonito/MS.',
    },
    client: { pt: 'Zagaia Eco Resort', en: 'Zagaia Eco Resort' },
    scope: { pt: 'Area externa e suites', en: 'Outdoor areas and suites' },
    year: '2024',
    location: { pt: 'Bonito, MS', en: 'Bonito, MS - Brazil' },
    cover: 'assets/images/projects/eco-resort/cover.jpg',
    gallery: [
      { src: 'assets/images/projects/eco-resort/01.jpg', alt: { pt: 'Area externa do Eco Resort integrada a paisagem', en: 'Eco Resort outdoor area integrated with the landscape' }, layout: 'wide' },
      { src: 'assets/images/projects/eco-resort/02.jpg', alt: { pt: 'Vista superior do ambiente com leitura de implantacao', en: 'Top view showing the spatial layout' }, layout: 'narrow' },
      { src: 'assets/images/projects/eco-resort/03.jpg', alt: { pt: 'Estudo do ambiente no periodo noturno', en: 'Night-time study of the environment' }, layout: 'half' },
      { src: 'assets/images/projects/eco-resort/04.jpg', alt: { pt: 'Varanda funcional sem jacuzzi', en: 'Simple functional veranda without jacuzzi' }, layout: 'half' },
      { src: 'assets/images/projects/eco-resort/05.jpg', alt: { pt: 'Varanda completa com jacuzzi, ducha e pergolado', en: 'Complete veranda with jacuzzi, shower and pergola' }, layout: 'wide' },
      { src: 'assets/images/projects/eco-resort/06.jpg', alt: { pt: 'Suite com foco em leveza e acolhimento', en: 'Suite focused on lightness and comfort' }, layout: 'half' },
      { src: 'assets/images/projects/eco-resort/07.jpg', alt: { pt: 'Detalhe da suite com solucoes para bem-estar', en: 'Suite detail with solutions for guest well-being' }, layout: 'half' },
    ],
    overview: {
      pt: '<p>Area externa desenvolvida para o Zagaia Eco Resort em Bonito/MS. Os ambientes foram concebidos de forma funcional e integrada, priorizando a privacidade dos usuarios e o equilibrio com a natureza.</p><p>O projeto se desdobra entre estudos de iluminacao para os periodos diurno e noturno, varandas com diferentes niveis de sofisticacao e suites pensadas para proporcionar conforto, praticidade e bem-estar durante os dias de descanso.</p>',
      en: '<p>Outdoor areas designed for Zagaia Eco Resort in Bonito/MS. The spaces were conceived as functional and integrated environments, prioritising guest privacy and balance with nature.</p><p>The project unfolds through lighting studies for day and night use, verandas with different levels of sophistication, and suites planned to deliver comfort, practicality, and well-being throughout the stay.</p>',
    },
    statDeliverables: '4',
    statWeeks: '7',
    process: [
      { number: '01', title: { pt: 'Leitura do lugar', en: 'Reading the site' }, text: { pt: 'Mapeamento das relacoes entre hospedagem, paisagem e experiencia de uso na area externa do resort.', en: 'Mapping the relationship between hospitality, landscape, and guest experience across the resort outdoor areas.' } },
      { number: '02', title: { pt: 'Estudo de conforto', en: 'Comfort study' }, text: { pt: 'Projecoes em vista superior e estudos de iluminacao para garantir bem-estar nos periodos diurno e noturno.', en: 'Top-view projections and lighting studies to ensure comfort during both daytime and nighttime use.' } },
      { number: '03', title: { pt: 'Desenho dos ambientes', en: 'Environmental design' }, text: { pt: 'Definicao de varandas, jacuzzis, pergolados e percursos com foco em privacidade e relaxamento.', en: 'Definition of verandas, jacuzzis, pergolas, and circulation with a focus on privacy and relaxation.' } },
      { number: '04', title: { pt: 'Ajuste fino das suites', en: 'Suite refinement' }, text: { pt: 'Solucoes internas voltadas a leveza, praticidade e uma experiencia acolhedora de hospedagem.', en: 'Interior solutions aimed at lightness, practicality, and a welcoming hospitality experience.' } },
    ],
    result: {
      pt: '<p>O conjunto fortalece a experiencia do Eco Resort ao conectar descanso, paisagem e conforto em diferentes escalas do empreendimento. O resultado e um ambiente de alto padrao que valoriza a permanencia e a relacao do hospede com o entorno.</p>',
      en: '<p>The project strengthens the resort experience by connecting rest, landscape, and comfort across different scales of the development. The result is a high-standard environment that values permanence and the guest relationship with the surroundings.</p>',
    },
  },
  {
    slug: 'estrela-do-formoso',
    category: { pt: 'Atrativo Turistico', en: 'Tourist Attraction' },
    title: { pt: 'Estrela do Formoso', en: 'Estrela do Formoso' },
    tagline: {
      pt: 'Bangalos privativos e bar externo para um atrativo turistico que queria elevar conforto, identidade e conexao com a natureza.',
      en: 'Private bungalows and an outdoor bar for a tourist attraction seeking to elevate comfort, identity, and connection with nature.',
    },
    client: { pt: 'Estrela do Formoso', en: 'Estrela do Formoso' },
    scope: { pt: 'Bangalos e bar externo', en: 'Bungalows and outdoor bar' },
    year: '2024',
    location: { pt: 'Bonito, MS', en: 'Bonito, MS - Brazil' },
    cover: 'assets/images/projects/estrela-do-formoso/cover.jpg',
    gallery: [
      { src: 'assets/images/projects/estrela-do-formoso/01.jpg', alt: { pt: 'Visao geral do atrativo integrada a natureza', en: 'General view of the attraction integrated with nature' }, layout: 'wide' },
      { src: 'assets/images/projects/estrela-do-formoso/02.jpg', alt: { pt: 'Bangalo privativo com foco em exclusividade', en: 'Private bungalow focused on exclusivity' }, layout: 'half' },
      { src: 'assets/images/projects/estrela-do-formoso/03.jpg', alt: { pt: 'Outro modulo de bangalo com leitura da implantacao', en: 'Another bungalow module showing the site layout' }, layout: 'half' },
      { src: 'assets/images/projects/estrela-do-formoso/04.jpg', alt: { pt: 'Bar externo acolhedor conectado aos bangalos', en: 'Welcoming outdoor bar connected to the bungalows' }, layout: 'full' },
    ],
    overview: {
      pt: '<p>Projeto criado para o atrativo turistico em Bonito/MS. Os ambientes foram desenvolvidos para integrar natureza, conforto e sofisticacao, proporcionando uma experiencia exclusiva e acolhedora ao usuario.</p><p>O escopo reuniu bangalos privativos e um bar em area externa. A proposta buscou fortalecer a identidade do empreendimento, associando sua marca a momentos de qualidade, personalidade e permanencia.</p>',
      en: '<p>This project was created for a tourist attraction in Bonito/MS. The environments were developed to integrate nature, comfort, and sophistication, delivering an exclusive and welcoming experience for visitors.</p><p>The scope combined private bungalows and an outdoor bar. The proposal aimed to strengthen the identity of the attraction, linking its brand to moments of quality, personality, and memorable stay.</p>',
    },
    statDeliverables: '2',
    statWeeks: '4',
    process: [
      { number: '01', title: { pt: 'Experiencia do visitante', en: 'Visitor experience' }, text: { pt: 'Analise dos percursos, momentos de pausa e expectativa de privacidade no atrativo.', en: 'Analysis of circulation, pause moments, and privacy expectations within the attraction.' } },
      { number: '02', title: { pt: 'Setorizacao', en: 'Spatial zoning' }, text: { pt: 'Desenho dos bangalos para garantir singularidade, conforto e integracao harmoniosa com o entorno.', en: 'Bungalow design to ensure singularity, comfort, and harmonious integration with the surroundings.' } },
      { number: '03', title: { pt: 'Atmosfera do encontro', en: 'Atmosphere of gathering' }, text: { pt: 'Criacao do bar externo como ponto de conexao entre os modulos e a identidade do empreendimento.', en: 'Design of the outdoor bar as a point of connection between the modules and the enterprise identity.' } },
      { number: '04', title: { pt: 'Coerencia do conjunto', en: 'Overall coherence' }, text: { pt: 'Ajustes para consolidar uma linguagem acolhedora e conectada a natureza em todos os ambientes.', en: 'Refinements to consolidate a welcoming language connected to nature across all spaces.' } },
    ],
    result: {
      pt: '<p>O projeto amplia o valor percebido do atrativo ao oferecer ambientes mais reservados e memoraveis. A experiencia final combina natureza, conforto e identidade em uma linguagem arquitetonica coerente.</p>',
      en: '<p>The project increases the perceived value of the attraction by offering more private and memorable spaces. The final experience combines nature, comfort, and identity in a coherent architectural language.</p>',
    },
  },
  {
    slug: 'pousada-olho-dagua',
    category: { pt: 'Pousada', en: 'Guesthouse' },
    title: { pt: "Pousada Olho D'Agua", en: "Pousada Olho D'Agua" },
    tagline: {
      pt: 'Recepcao, fachada e lazer interno desenhados com pedra, madeira e palha para criar uma atmosfera de descanso em Bonito.',
      en: 'Reception, facade, and indoor leisure areas designed with stone, wood, and straw to create a restful atmosphere in Bonito.',
    },
    client: { pt: "Pousada Olho D'Agua", en: "Pousada Olho D'Agua" },
    scope: { pt: 'Recepcao, fachada e area de lazer', en: 'Reception, facade, and leisure area' },
    year: '2024',
    location: { pt: 'Bonito, MS', en: 'Bonito, MS - Brazil' },
    cover: 'assets/images/projects/pousada-olho-dagua/cover.jpg',
    gallery: [
      { src: 'assets/images/projects/pousada-olho-dagua/01.jpg', alt: { pt: 'Vista da pousada com materiais naturais em destaque', en: 'View of the guesthouse highlighting natural materials' }, layout: 'wide' },
      { src: 'assets/images/projects/pousada-olho-dagua/02.jpg', alt: { pt: 'Entrada e recepcao integradas a paisagem', en: 'Entrance and reception integrated with the landscape' }, layout: 'half' },
      { src: 'assets/images/projects/pousada-olho-dagua/03.jpg', alt: { pt: 'Area interna de lazer com identidade unificada', en: 'Indoor leisure area with unified identity' }, layout: 'half' },
      { src: 'assets/images/projects/pousada-olho-dagua/04.jpg', alt: { pt: 'Detalhe de bar e convivencia com linguagem acolhedora', en: 'Bar and lounge detail with a welcoming language' }, layout: 'full' },
    ],
    overview: {
      pt: '<p>Projeto desenvolvido para pousada em Bonito, valorizando o uso de materias-primas naturais como pedra, madeira e palha. A proposta cria uma atmosfera acolhedora e relaxante, convidando o usuario a uma experiencia sensorial conectada a natureza e ao descanso.</p><p>O trabalho se estende da entrada e area de recepcao ao bar e area de lazer interna, mantendo a mesma identidade espacial e reforcando a coerencia do empreendimento.</p>',
      en: '<p>This project was developed for a guesthouse in Bonito, highlighting the use of natural raw materials such as stone, wood, and straw. The proposal creates a welcoming and relaxing atmosphere, inviting the user into a sensory experience connected to nature and rest.</p><p>The work extends from the entrance and reception area to the bar and indoor leisure spaces, keeping the same spatial identity and reinforcing the coherence of the development.</p>',
    },
    statDeliverables: '3',
    statWeeks: '4',
    process: [
      { number: '01', title: { pt: 'Materialidade', en: 'Materiality' }, text: { pt: 'Definicao de uma base natural com pedra, madeira e palha para traduzir o clima da pousada.', en: 'Definition of a natural palette of stone, wood, and straw to convey the mood of the guesthouse.' } },
      { number: '02', title: { pt: 'Chegada do hospede', en: 'Guest arrival' }, text: { pt: 'Desenho da fachada e da recepcao para comunicar desaceleracao e clima de ferias desde a chegada.', en: 'Design of the facade and reception to communicate deceleration and a holiday atmosphere from the moment of arrival.' } },
      { number: '03', title: { pt: 'Areas de convivencia', en: 'Shared areas' }, text: { pt: 'Aplicacao da mesma identidade no bar e na area interna de lazer, garantindo continuidade de experiencia.', en: 'Application of the same identity to the bar and indoor leisure area, ensuring continuity of experience.' } },
      { number: '04', title: { pt: 'Unidade visual', en: 'Visual unity' }, text: { pt: 'Ajustes finais para consolidar personalidade, coerencia e leitura integrada do empreendimento.', en: 'Final refinements to consolidate personality, coherence, and an integrated reading of the development.' } },
    ],
    result: {
      pt: '<p>O resultado e uma pousada com linguagem espacial consistente desde o primeiro contato. A arquitetura de interiores reforca descanso, pertencimento e uma relacao sensorial mais forte com a paisagem de Bonito.</p>',
      en: '<p>The result is a guesthouse with a consistent spatial language from the very first contact. The interior architecture reinforces rest, belonging, and a stronger sensory relationship with the landscape of Bonito.</p>',
    },
  },
  {
    slug: 'chales',
    category: { pt: 'Residencial', en: 'Residential' },
    title: { pt: 'Chales', en: 'Chalets' },
    tagline: {
      pt: 'Casa de temporada em Bonito com chales individuais pensados para conforto, privacidade e imersao na natureza.',
      en: 'Holiday home in Bonito with individual chalets designed for comfort, privacy, and immersion in nature.',
    },
    client: { pt: 'Hospedagem de temporada', en: 'Seasonal hospitality property' },
    scope: { pt: 'Chales individuais', en: 'Individual chalets' },
    year: '2024',
    location: { pt: 'Bonito, MS', en: 'Bonito, MS - Brazil' },
    cover: 'assets/images/projects/chales/cover.jpg',
    gallery: [
      { src: 'assets/images/projects/chales/01.jpg', alt: { pt: 'Vista do conjunto com integracao a area externa', en: 'View of the chalet set integrated with the outdoor area' }, layout: 'wide' },
      { src: 'assets/images/projects/chales/02.jpg', alt: { pt: 'Interior do chale com atmosfera acolhedora', en: 'Chalet interior with a welcoming atmosphere' }, layout: 'narrow' },
    ],
    overview: {
      pt: '<p>Projeto de casa de temporada em Bonito, com ambientes pensados para proporcionar conforto e integracao com a natureza, criando uma experiencia acolhedora e imersiva para os hospedes.</p><p>Os chales individuais foram desenhados para garantir conforto e privacidade, com ambientes abertos e conectados a area externa, valorizando relaxamento e permanencia.</p>',
      en: '<p>A holiday home project in Bonito with environments designed to provide comfort and integration with nature, creating a welcoming and immersive experience for guests.</p><p>The individual chalets were designed to ensure comfort and privacy, with open spaces connected to the outdoor area, enhancing relaxation and permanence.</p>',
    },
    statDeliverables: '2',
    statWeeks: '2',
    process: [
      { number: '01', title: { pt: 'Programa de uso', en: 'Use program' }, text: { pt: 'Leitura das rotinas de uma hospedagem de temporada para organizar privacidade, descanso e vistas.', en: 'Reading the routines of a holiday accommodation to organise privacy, rest, and views.' } },
      { number: '02', title: { pt: 'Relacao interior-exterior', en: 'Indoor-outdoor relationship' }, text: { pt: 'Desenho de ambientes abertos e conectados a area externa para ampliar sensacao de imersao.', en: 'Design of open spaces connected to the outdoors to expand the sense of immersion.' } },
      { number: '03', title: { pt: 'Conforto do usuario', en: 'User comfort' }, text: { pt: 'Definicao de solucoes para acolhimento, circulacao fluida e permanencia prolongada.', en: 'Definition of solutions for warmth, fluid circulation, and prolonged stay.' } },
      { number: '04', title: { pt: 'Ajustes de atmosfera', en: 'Atmosphere refinement' }, text: { pt: 'Refinamento da ambiencia para reforcar privacidade, relaxamento e identidade do lugar.', en: 'Atmosphere refinement to reinforce privacy, relaxation, and sense of place.' } },
    ],
    result: {
      pt: '<p>O projeto entrega uma experiencia mais reservada e sensorial para quem se hospeda. A combinacao entre conforto, natureza e simplicidade bem resolvida sustenta a identidade acolhedora do conjunto.</p>',
      en: '<p>The project delivers a more private and sensory experience for guests. The combination of comfort, nature, and well-resolved simplicity supports the welcoming identity of the ensemble.</p>',
    },
  },
  {
    slug: 'nascente-azul',
    category: { pt: 'Atrativo Turistico', en: 'Tourist Attraction' },
    title: { pt: 'Nascente Azul', en: 'Nascente Azul' },
    tagline: {
      pt: 'Receptivo, hall e refeitorio desenhados com materiais rusticos e elementos naturais para acolher desde a chegada.',
      en: 'Reception, entry hall, and dining spaces designed with rustic materials and natural elements to welcome visitors from arrival.',
    },
    client: { pt: 'Nascente Azul', en: 'Nascente Azul' },
    scope: { pt: 'Receptivo, hall e refeitorio', en: 'Reception, hall, and dining areas' },
    year: '2024',
    location: { pt: 'Bonito, MS', en: 'Bonito, MS - Brazil' },
    cover: 'assets/images/projects/nascente-azul/cover.jpg',
    gallery: [
      { src: 'assets/images/projects/nascente-azul/01.jpg', alt: { pt: 'Hall e receptivo com materiais naturais', en: 'Reception hall with natural materials' }, layout: 'half' },
      { src: 'assets/images/projects/nascente-azul/02.jpg', alt: { pt: 'Refeitorio integrado a identidade do atrativo', en: 'Dining space aligned with the attraction identity' }, layout: 'half' },
    ],
    overview: {
      pt: '<p>Receptivo e hall de entrada projetados para o atrativo turistico em Bonito. A proposta valoriza o uso de materiais rusticos e aconchegantes, combinados a elementos naturais que trazem leveza ao ambiente.</p><p>O projeto se amplia para o refeitorio, preservando a arquitetura do atrativo e criando uma recepcao acolhedora, alinhada a identidade do local e preparada para receber visitantes com clareza e conforto.</p>',
      en: '<p>Reception and entry hall designed for the tourist attraction in Bonito. The proposal values rustic and welcoming materials combined with natural elements that bring lightness to the environment.</p><p>The project extends into the dining area, preserving the attraction architecture and creating a welcoming arrival aligned with the site identity and prepared to receive visitors with clarity and comfort.</p>',
    },
    statDeliverables: '2',
    statWeeks: '2',
    process: [
      { number: '01', title: { pt: 'Identidade do atrativo', en: 'Attraction identity' }, text: { pt: 'Leitura da arquitetura existente para desenhar um acolhimento coerente com o lugar.', en: 'Reading the existing architecture to design a welcome consistent with the place.' } },
      { number: '02', title: { pt: 'Materiais e leveza', en: 'Materials and lightness' }, text: { pt: 'Selecao de elementos rusticos e naturais para equilibrar robustez, conforto e leveza visual.', en: 'Selection of rustic and natural elements to balance robustness, comfort, and visual lightness.' } },
      { number: '03', title: { pt: 'Fluxo de chegada', en: 'Arrival flow' }, text: { pt: 'Organizacao de receptivo e hall para orientar o visitante com clareza e acolhimento.', en: 'Organisation of reception and hall to guide the visitor with clarity and warmth.' } },
      { number: '04', title: { pt: 'Continuidade no refeitorio', en: 'Continuity in dining' }, text: { pt: 'Extensao da mesma linguagem para o refeitorio, reforcando unidade e pertencimento.', en: 'Extension of the same language into the dining area, reinforcing unity and belonging.' } },
    ],
    result: {
      pt: '<p>O conjunto entrega uma chegada mais acolhedora e uma experiencia mais coerente ao longo do percurso do visitante. A materialidade reforca a identidade do atrativo sem competir com a paisagem natural.</p>',
      en: '<p>The project delivers a more welcoming arrival and a more coherent experience throughout the visitor journey. The material palette reinforces the attraction identity without competing with the natural landscape.</p>',
    },
  },
  {
    slug: 'casa-de-fazenda',
    category: { pt: 'Residencial', en: 'Residential' },
    title: { pt: 'Casa de Fazenda', en: 'Country House' },
    tagline: {
      pt: 'Casa para receber visitantes com estetica rustica, integrando quartos, jantar, cozinha, lavabo e area externa.',
      en: 'House designed to host visitors with a rustic aesthetic, integrating bedrooms, dining, kitchen, powder room, and outdoor areas.',
    },
    client: { pt: 'Residencia para visitantes', en: 'Visitor residence' },
    scope: { pt: 'Quartos, sala de jantar, cozinha e lavabo', en: 'Bedrooms, dining room, kitchen, and powder room' },
    year: '2024',
    location: { pt: 'Regiao de Bonito, MS', en: 'Bonito region, MS - Brazil' },
    cover: 'assets/images/projects/casa-de-fazenda/cover.jpg',
    gallery: [
      { src: 'assets/images/projects/casa-de-fazenda/01.jpg', alt: { pt: 'Vista geral da casa com linguagem rustica', en: 'General view of the house with a rustic language' }, layout: 'wide' },
      { src: 'assets/images/projects/casa-de-fazenda/02.jpg', alt: { pt: 'Quarto com materiais naturais e atmosfera acolhedora', en: 'Bedroom with natural materials and a welcoming atmosphere' }, layout: 'half' },
      { src: 'assets/images/projects/casa-de-fazenda/03.jpg', alt: { pt: 'Sala de jantar conectada ao restante da casa', en: 'Dining room connected to the rest of the house' }, layout: 'half' },
      { src: 'assets/images/projects/casa-de-fazenda/04.jpg', alt: { pt: 'Cozinha integrada a proposta rustica', en: 'Kitchen integrated into the rustic proposal' }, layout: 'wide' },
      { src: 'assets/images/projects/casa-de-fazenda/05.jpg', alt: { pt: 'Lavabo com transicao para o jardim', en: 'Powder room transitioning toward the garden' }, layout: 'half' },
      { src: 'assets/images/projects/casa-de-fazenda/06.jpg', alt: { pt: 'Detalhe do dialogo entre interiores e entorno', en: 'Detail of the dialogue between interiors and surroundings' }, layout: 'half' },
    ],
    overview: {
      pt: '<p>Casa projetada para receber visitantes, com estetica rustica que preserva a identidade das fazendas da regiao. A disposicao dos ambientes e a escolha dos elementos de design foram pensadas para integrar quartos, sala de jantar, cozinha e lavabo a area externa.</p><p>Em dialogo com essa atmosfera, o projeto valoriza uma experiencia sofisticada, acolhedora e em sintonia com a natureza, criando transicoes suaves entre os ambientes internos e o entorno.</p>',
      en: '<p>This house was designed to host visitors, with a rustic aesthetic that preserves the identity of farms in the region. The layout and design choices were planned to integrate bedrooms, dining room, kitchen, and powder room with the outdoor area.</p><p>In dialogue with this atmosphere, the project values a sophisticated and welcoming experience in tune with nature, creating smooth transitions between interior environments and the surroundings.</p>',
    },
    statDeliverables: '4',
    statWeeks: '6',
    process: [
      { number: '01', title: { pt: 'Memoria da fazenda', en: 'Farm memory' }, text: { pt: 'Leitura da linguagem rustica regional para preservar identidade sem perder refinamento.', en: 'Reading the regional rustic language to preserve identity without losing refinement.' } },
      { number: '02', title: { pt: 'Integracao dos ambientes', en: 'Integration of spaces' }, text: { pt: 'Organizacao de quartos, jantar, cozinha e lavabo para ampliar continuidade e convivencia.', en: 'Organisation of bedrooms, dining, kitchen, and powder room to expand continuity and conviviality.' } },
      { number: '03', title: { pt: 'Transicao com o jardim', en: 'Transition to the garden' }, text: { pt: 'Desenho de passagens e vistas que aproximam o interior da area externa.', en: 'Design of transitions and views that bring the interior closer to the outdoor area.' } },
      { number: '04', title: { pt: 'Acolhimento final', en: 'Final sense of welcome' }, text: { pt: 'Refinamento de materiais e atmosfera para sustentar uma experiencia sofisticada e afetiva.', en: 'Refinement of materials and atmosphere to sustain a sophisticated and emotional experience.' } },
    ],
    result: {
      pt: '<p>O resultado e uma casa que acolhe sem perder autenticidade. A linguagem rustica e reinterpretada com cuidado para criar um ambiente memoravel, funcional e profundamente conectado ao entorno.</p>',
      en: '<p>The result is a house that welcomes without losing authenticity. The rustic language is carefully reinterpreted to create a memorable, functional environment deeply connected to its surroundings.</p>',
    },
  },
];

let currentProject: Project | null = null;
let lightboxImages: GalleryItem[] = [];
let lightboxCurrent = 0;

function getSlugFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug') || '';
}

function getCurrentLang(): Lang {
  const stored = localStorage.getItem('dbd_lang');
  if (stored === 'en') return 'en';

  const htmlLang = document.documentElement.lang.toLowerCase();
  return htmlLang.startsWith('en') ? 'en' : 'pt';
}

function findProject(slug: string) {
  return PROJECTS.find(project => project.slug === slug) || null;
}

function prevProject(slug: string) {
  const index = PROJECTS.findIndex(project => project.slug === slug);
  if (index <= 0) return null;
  return PROJECTS[index - 1];
}

function nextProject(slug: string) {
  const index = PROJECTS.findIndex(project => project.slug === slug);
  if (index < 0 || index >= PROJECTS.length - 1) return null;
  return PROJECTS[index + 1];
}

function getText(entry: LocalizedText, lang: Lang) {
  return entry[lang];
}

function el(id: string) {
  return document.getElementById(id);
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function populateMeta(project: Project, lang: Lang) {
  const title = getText(project.title, lang);
  const tagline = getText(project.tagline, lang);
  const absoluteCover = new URL(project.cover, window.location.href).href;

  document.title = `${title} - Dani Braga Design`;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', stripHtml(tagline));
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', `${title} - Dani Braga Design`);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute('content', absoluteCover);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', window.location.href);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', window.location.href);
}

function populateHero(project: Project, lang: Lang) {
  const cover = el('project-cover') as HTMLImageElement | null;
  if (cover) {
    cover.src = project.cover;
    cover.alt = `${getText(project.title, lang)} - ${getText(project.tagline, lang)}`;
  }

  const category = el('project-category');
  if (category) category.textContent = getText(project.category, lang);

  const title = el('project-title');
  if (title) title.textContent = getText(project.title, lang);

  const tagline = el('project-tagline');
  if (tagline) tagline.textContent = getText(project.tagline, lang);

  const client = el('project-client');
  if (client) client.textContent = getText(project.client, lang);

  const scope = el('project-scope');
  if (scope) scope.textContent = getText(project.scope, lang);

  const year = el('project-year');
  if (year) year.textContent = project.year;

  const location = el('project-location');
  if (location) location.textContent = getText(project.location, lang);

  const breadcrumbTitle = el('breadcrumb-title');
  if (breadcrumbTitle) breadcrumbTitle.textContent = getText(project.title, lang);
}

function populateOverview(project: Project, lang: Lang) {
  const overview = el('project-overview');
  if (overview) overview.innerHTML = getText(project.overview, lang);

  const deliverables = el('project-stat-deliverables');
  if (deliverables) deliverables.textContent = project.statDeliverables;

  const weeks = el('project-stat-weeks');
  if (weeks) weeks.textContent = project.statWeeks;
}

function populateGallery(project: Project, lang: Lang) {
  const section = el('project-gallery');
  if (!section) return;

  section.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'project-gallery__grid';

  project.gallery.forEach((image, index) => {
    const item = document.createElement('button');
    item.className = `gallery-item gallery-item--${image.layout}`;
    item.type = 'button';
    item.setAttribute('data-index', String(index));
    item.setAttribute('aria-label', lang === 'en' ? `Open image: ${getText(image.alt, lang)}` : `Ampliar imagem: ${getText(image.alt, lang)}`);

    const picture = document.createElement('img');
    picture.src = image.src;
    picture.alt = getText(image.alt, lang);
    picture.loading = index < 3 ? 'eager' : 'lazy';

    item.appendChild(picture);
    grid.appendChild(item);

    item.addEventListener('click', () => openLightbox(index, project.gallery));
  });

  section.appendChild(grid);
}

function populateProcess(project: Project, lang: Lang) {
  const container = el('project-process');
  if (!container) return;

  container.innerHTML = '';

  project.process.forEach(stage => {
    const item = document.createElement('div');
    item.className = 'process-stage';
    item.setAttribute('data-reveal', '');
    item.innerHTML = `
      <p class="process-stage__number">${stage.number}</p>
      <h3 class="process-stage__title">${getText(stage.title, lang)}</h3>
      <p class="process-stage__text">${getText(stage.text, lang)}</p>
    `;
    container.appendChild(item);
  });
}

function populateResult(project: Project, lang: Lang) {
  const result = el('project-result');
  if (result) result.innerHTML = getText(project.result, lang);
}

function populateNavigation(project: Project, lang: Lang) {
  const previous = prevProject(project.slug);
  const next = nextProject(project.slug);

  const previousButton = el('nav-prev') as HTMLAnchorElement | null;
  const previousTitle = el('nav-prev-title');
  const nextButton = el('nav-next') as HTMLAnchorElement | null;
  const nextTitle = el('nav-next-title');

  if (previousButton && previousTitle) {
    if (previous) {
      previousButton.href = `projeto-detalhe.html?slug=${previous.slug}`;
      previousButton.style.visibility = 'visible';
      previousTitle.textContent = getText(previous.title, lang);
    } else {
      previousButton.style.visibility = 'hidden';
      previousTitle.textContent = '';
    }
  }

  if (nextButton && nextTitle) {
    if (next) {
      nextButton.href = `projeto-detalhe.html?slug=${next.slug}`;
      nextButton.style.visibility = 'visible';
      nextTitle.textContent = getText(next.title, lang);
    } else {
      nextButton.style.visibility = 'hidden';
      nextTitle.textContent = '';
    }
  }
}

function showNotFound() {
  const main = el('main-content');
  if (!main) return;

  const lang = getCurrentLang();
  const title = lang === 'en' ? 'Project not found' : 'Projeto não encontrado';
  const button = lang === 'en' ? 'View all projects' : 'Ver todos os projetos';

  main.innerHTML = `
    <div style="text-align:center; padding: 10rem 2rem;">
      <p style="font-size:4rem; margin-bottom:1rem;">404</p>
      <h1 style="font-size:1.5rem; font-weight:300; margin-bottom:2rem;">${title}</h1>
      <a href="projetos.html" class="btn btn--primary">${button}</a>
    </div>
  `;
}

function renderProject(project: Project) {
  const lang = getCurrentLang();

  populateMeta(project, lang);
  populateHero(project, lang);
  populateOverview(project, lang);
  populateGallery(project, lang);
  populateProcess(project, lang);
  populateResult(project, lang);
  populateNavigation(project, lang);

  const whatsapp = document.querySelector('.whatsapp-btn') as HTMLElement | null;
  if (whatsapp) {
    whatsapp.dataset.message = lang === 'en'
      ? `Hello! I loved the ${getText(project.title, lang)} project and would like to talk about something similar for my space.`
      : `Olá! Adorei o projeto ${getText(project.title, lang)} e gostaria de conversar sobre algo parecido para o meu espaço.`;
  }
}

function openLightbox(index: number, images: GalleryItem[]) {
  lightboxImages = images;
  lightboxCurrent = index;
  renderLightbox();

  const lightbox = el('lightbox');
  if (lightbox) {
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleLightboxKey);
  }
}

function closeLightbox() {
  const lightbox = el('lightbox');
  if (lightbox) {
    lightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleLightboxKey);
  }
}

function renderLightbox() {
  const image = el('lightbox-img') as HTMLImageElement | null;
  const caption = el('lightbox-caption');
  const lang = getCurrentLang();

  if (!image || !lightboxImages.length) return;

  const current = lightboxImages[lightboxCurrent];
  image.src = current.src;
  image.alt = getText(current.alt, lang);

  if (caption) caption.textContent = getText(current.alt, lang);
}

function handleLightboxKey(event: KeyboardEvent) {
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') moveLightbox(-1);
  if (event.key === 'ArrowRight') moveLightbox(1);
}

function moveLightbox(direction: number) {
  const total = lightboxImages.length;
  lightboxCurrent = (lightboxCurrent + direction + total) % total;
  renderLightbox();
}

function initLightboxControls() {
  const lightbox = el('lightbox');
  if (!lightbox) return;

  const backdrop = lightbox.querySelector('.lightbox__backdrop');
  const closeButton = lightbox.querySelector('.lightbox__close');
  const previousButton = lightbox.querySelector('.lightbox__prev');
  const nextButton = lightbox.querySelector('.lightbox__next');

  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (closeButton) closeButton.addEventListener('click', closeLightbox);
  if (previousButton) previousButton.addEventListener('click', () => moveLightbox(-1));
  if (nextButton) nextButton.addEventListener('click', () => moveLightbox(1));
}

document.addEventListener('DOMContentLoaded', () => {
  initLightboxControls();

  const slug = getSlugFromURL();
  if (!slug) return;

  const project = findProject(slug);
  if (!project) {
    showNotFound();
    return;
  }

  currentProject = project;
  renderProject(project);

  document.addEventListener('i18n:change', () => {
    if (!currentProject) return;
    renderProject(currentProject);
  });
});

export { PROJECTS, findProject };
