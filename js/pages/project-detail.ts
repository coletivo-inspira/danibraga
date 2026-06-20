/**
 * project-detail.js
 * LÃª ?slug= da URL, carrega dados do projeto e preenche o DOM.
 * TambÃ©m controla lightbox e navegaÃ§Ã£o prev/next.
 */

/* â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const PROJECTS = [
  {
    slug: 'hotel-aurora',
    category: 'Branding',
    title: 'Hotel Aurora',
    tagline: 'Identidade que captura a magia do entardecer em Santa Catarina.',
    client: 'Hotel Aurora',
    scope: 'Branding Completo',
    year: '2024',
    location: 'FlorianÃ³polis, SC',
    cover: 'assets/images/project-aurora.svg',
    gallery: [
      { src: 'assets/images/aurora-01.svg', alt: 'Logotipo Hotel Aurora', layout: 'wide' },
      { src: 'assets/images/aurora-02.svg', alt: 'Papelaria corporativa', layout: 'narrow' },
      { src: 'assets/images/aurora-03.svg', alt: 'Guia de cores e tipografia', layout: 'half' },
      { src: 'assets/images/aurora-04.svg', alt: 'SinalizaÃ§Ã£o interna', layout: 'half' },
      { src: 'assets/images/aurora-05.svg', alt: 'CardÃ¡pio do restaurante', layout: 'third' },
      { src: 'assets/images/aurora-06.svg', alt: 'Amenities e embalagens', layout: 'third' },
      { src: 'assets/images/aurora-07.svg', alt: 'Mockup digital', layout: 'third' },
    ],
    overview: `<p>O Hotel Aurora precisava de uma identidade que traduzisse a experiÃªncia Ãºnica de assistir ao pÃ´r do sol da costa catarinense. O briefing pedia algo que fosse simultaneamente sofisticado e acolhedor â€” uma marca que os hÃ³spedes lembrassem muito depois do check-out.</p>
<p>Desenvolvemos um sistema visual completo partindo da paleta dos tons dourados e rosados do cÃ©u ao entardecer, combinada com tipografia serifada de presenÃ§a editorial e elementos grÃ¡ficos inspirados nas ondas do litoral.</p>`,
    statDeliverables: '28',
    statWeeks: '10',
    process: [
      { number: '01', title: 'ImersÃ£o', text: 'Visitamos o hotel, conversamos com a equipe e passamos uma tarde inteira observando os hÃ³spedes e o ambiente.' },
      { number: '02', title: 'EstratÃ©gia', text: 'Definimos posicionamento, arquÃ©tipos de marca, paleta cromÃ¡tica estratÃ©gica e direÃ§Ã£o tipogrÃ¡fica.' },
      { number: '03', title: 'CriaÃ§Ã£o', text: 'Desenvolvimento do logotipo, sÃ­mbolo, sistema grÃ¡fico e todas as aplicaÃ§Ãµes da identidade.' },
      { number: '04', title: 'Entrega', text: '28 entregÃ¡veis finais: manual de marca, arquivos vetoriais, mockups e guia de aplicaÃ§Ã£o digital.' },
    ],
    result: `<p>A nova identidade do Hotel Aurora foi lanÃ§ada com uma campanha de reposicionamento que resultou em aumento significativo nas reservas diretas e cobertura espontÃ¢nea em publicaÃ§Ãµes de turismo de luxo no Brasil e no exterior.</p>`,
  },
  {
    slug: 'restaurante-noite',
    category: 'Editorial',
    title: 'Restaurante Noite',
    tagline: 'Um sistema visual que transforma cada refeiÃ§Ã£o em uma memÃ³ria.',
    client: 'Restaurante Noite',
    scope: 'Materiais Impressos',
    year: '2023',
    location: 'SÃ£o Paulo, SP',
    cover: 'assets/images/project-noite.svg',
    gallery: [
      { src: 'assets/images/noite-01.svg', alt: 'CardÃ¡pio principal', layout: 'wide' },
      { src: 'assets/images/noite-02.svg', alt: 'Detalhe tipogrÃ¡fico', layout: 'narrow' },
      { src: 'assets/images/noite-03.svg', alt: 'Carta de vinhos', layout: 'half' },
      { src: 'assets/images/noite-04.svg', alt: 'Menu degustaÃ§Ã£o', layout: 'half' },
      { src: 'assets/images/noite-05.svg', alt: 'Papel de parede da marca', layout: 'full' },
    ],
    overview: `<p>O Restaurante Noite, premiado fine dining paulistano, precisava de um sistema de materiais impressos que estivesse Ã  altura da experiÃªncia gastronÃ´mica que oferece. O desafio: criar peÃ§as editoriais que fossem funcionais para o serviÃ§o e belas o suficiente para serem guardadas pelos hÃ³spedes como recordaÃ§Ã£o.</p>
<p>O resultado Ã© um sistema editorial em preto, creme e dourado, com tipografia clÃ¡ssica e fotografias de produto trabalhadas em duotone.</p>`,
    statDeliverables: '16',
    statWeeks: '7',
    process: [
      { number: '01', title: 'Conceito', text: 'A partir do posicionamento "gastronomia como ritual", construÃ­mos uma direÃ§Ã£o editorial que mistura o clÃ¡ssico com o contemporÃ¢neo.' },
      { number: '02', title: 'Grid editorial', text: 'Desenvolvimento de sistema tipogrÃ¡fico hierÃ¡rquico e grid flexÃ­vel para todos os formatos.' },
      { number: '03', title: 'ProduÃ§Ã£o', text: 'DireÃ§Ã£o de arte das fotografias de pratos, seleÃ§Ã£o de papÃ©is especiais e supervisÃ£o de impressÃ£o.' },
      { number: '04', title: 'Entrega', text: 'CardÃ¡pios, carta de vinhos, menu degustaÃ§Ã£o, materiais de mesa e papelaria de serviÃ§o.' },
    ],
    result: `<p>Os cardÃ¡pios do Restaurante Noite viraram objeto de desejo â€” hÃ³spedes pedem permissÃ£o para levÃ¡-los para casa. As peÃ§as foram publicadas em trÃªs revistas de design editorial e tornaram-se referÃªncia em cursos de design grÃ¡fico.</p>`,
  },
  {
    slug: 'spa-essencia',
    category: 'Identidade Visual',
    title: 'Spa EssÃªncia',
    tagline: 'Marca sensorial para uma experiÃªncia de bem-estar transformadora.',
    client: 'Spa EssÃªncia',
    scope: 'Identidade Visual',
    year: '2024',
    location: 'Gramado, RS',
    cover: 'assets/images/project-essencia.svg',
    gallery: [
      { src: 'assets/images/essencia-01.svg', alt: 'Logotipo Spa EssÃªncia', layout: 'half' },
      { src: 'assets/images/essencia-02.svg', alt: 'Paleta de cores e materiais', layout: 'half' },
      { src: 'assets/images/essencia-03.svg', alt: 'Embalagens de produtos', layout: 'wide' },
      { src: 'assets/images/essencia-04.svg', alt: 'AplicaÃ§Ã£o em roupÃµes', layout: 'narrow' },
      { src: 'assets/images/essencia-05.svg', alt: 'Aromaterapia e frascos', layout: 'third' },
      { src: 'assets/images/essencia-06.svg', alt: 'SinalizaÃ§Ã£o do spa', layout: 'third' },
      { src: 'assets/images/essencia-07.svg', alt: 'Kit boas-vindas', layout: 'third' },
    ],
    overview: `<p>O Spa EssÃªncia nasce da filosofia de que bem-estar profundo comeÃ§a pelos sentidos. A marca precisava ser uma extensÃ£o dessa filosofia â€” um sistema visual que ativasse a sensaÃ§Ã£o de calma e cuidado antes mesmo da primeira sessÃ£o.</p>
<p>Criamos uma identidade minimalista em tons terrosos, com logotipo baseado em elementos botÃ¢nicos e tipografia que equilibra delicadeza e presenÃ§a.</p>`,
    statDeliverables: '22',
    statWeeks: '8',
    process: [
      { number: '01', title: 'Descoberta sensorial', text: 'Workshop imersivo com a fundadora para mapear os valores emocionais da marca e a experiÃªncia que ela quer proporcionar.' },
      { number: '02', title: 'DireÃ§Ã£o criativa', text: 'ConstruÃ§Ã£o do painel de referÃªncias e definiÃ§Ã£o da linguagem visual: minimalismo orgÃ¢nico com textura e profundidade.' },
      { number: '03', title: 'Identidade', text: 'Desenvolvimento do logotipo, sÃ­mbolo botÃ¢nico, paleta, tipografia e sistema de aplicaÃ§Ãµes.' },
      { number: '04', title: 'Produto', text: 'ExtensÃ£o da identidade para embalagens, textiles, sinalizaÃ§Ã£o e kit de boas-vindas.' },
    ],
    result: `<p>Dois meses apÃ³s o lanÃ§amento da nova identidade, o Spa EssÃªncia alcanÃ§ou 100% de ocupaÃ§Ã£o nos fins de semana e foi eleito um dos 10 spas mais fotogÃªnicos do Brasil por um portal especializado em bem-estar e viagem.</p>`,
  },
  {
    slug: 'pousada-mar',
    category: 'Digital',
    title: 'Pousada Mar',
    tagline: 'PresenÃ§a digital que converte admiradores em hÃ³spedes.',
    client: 'Pousada Mar',
    scope: 'PresenÃ§a Digital',
    year: '2023',
    location: 'Trancoso, BA',
    cover: 'assets/images/project-mar.svg',
    gallery: [
      { src: 'assets/images/mar-01.svg', alt: 'Feed do Instagram', layout: 'wide' },
      { src: 'assets/images/mar-02.svg', alt: 'Stories templates', layout: 'narrow' },
      { src: 'assets/images/mar-03.svg', alt: 'Guia de marca digital', layout: 'half' },
      { src: 'assets/images/mar-04.svg', alt: 'Destaque do Instagram', layout: 'half' },
    ],
    overview: `<p>A Pousada Mar, um refÃºgio escondido em Trancoso, tinha a beleza mas nÃ£o tinha a presenÃ§a digital Ã  altura. As fotos eram boas, mas o visual das redes nÃ£o traduzia o charme e a exclusividade da experiÃªncia.</p>
<p>Desenvolvemos um guia de marca digital completo â€” templates de feed e stories, direÃ§Ã£o de fotografia, estratÃ©gia de conteÃºdo e identidade visual adaptada para o universo digital.</p>`,
    statDeliverables: '45',
    statWeeks: '6',
    process: [
      { number: '01', title: 'Auditoria digital', text: 'AnÃ¡lise das redes existentes, benchmarking e identificaÃ§Ã£o das oportunidades de melhoria.' },
      { number: '02', title: 'Identidade digital', text: 'AdaptaÃ§Ã£o da marca para o ambiente digital: paleta, filtros fotogrÃ¡ficos, tipografia e Ã­cones.' },
      { number: '03', title: 'Templates', text: 'CriaÃ§Ã£o de 45 templates editÃ¡veis no Canva para feed, stories e destaques.' },
      { number: '04', title: 'CapacitaÃ§Ã£o', text: 'Treinamento da equipe para uso dos templates e implementaÃ§Ã£o da estratÃ©gia de conteÃºdo.' },
    ],
    result: `<p>Em trÃªs meses de implementaÃ§Ã£o, a Pousada Mar triplicou o engajamento no Instagram, aumentou em 60% as reservas vindas das redes sociais e conseguiu um recurso editorial espontÃ¢neo no perfil de uma influenciadora de viagem com 800 mil seguidores.</p>`,
  },
  {
    slug: 'confeitaria-petale',
    category: 'Identidade Visual',
    title: 'Confeitaria PÃ©tale',
    tagline: 'Logo, embalagens e PDV que transformam doces em presentes.',
    client: 'Confeitaria PÃ©tale',
    scope: 'Identidade Visual',
    year: '2022',
    location: 'Curitiba, PR',
    cover: 'assets/images/project-petale.svg',
    gallery: [
      { src: 'assets/images/petale-01.svg', alt: 'Logotipo Confeitaria PÃ©tale', layout: 'half' },
      { src: 'assets/images/petale-02.svg', alt: 'Caixas e embalagens', layout: 'half' },
      { src: 'assets/images/petale-03.svg', alt: 'Lacre e fitas', layout: 'wide' },
      { src: 'assets/images/petale-04.svg', alt: 'Fachada da confeitaria', layout: 'narrow' },
      { src: 'assets/images/petale-05.svg', alt: 'Material de PDV', layout: 'third' },
      { src: 'assets/images/petale-06.svg', alt: 'Sacola personalizada', layout: 'third' },
      { src: 'assets/images/petale-07.svg', alt: 'Caixa de bombons', layout: 'third' },
    ],
    overview: `<p>A Confeitaria PÃ©tale produz doces artesanais premium com receitas inspiradas na confeitaria francesa. A fundadora queria uma identidade que comunicasse essa origem, essa dedicaÃ§Ã£o ao detalhe, mas com personalidade brasileira e contemporÃ¢nea.</p>
<p>Criamos um sistema de identidade delicado e preciso, com logotipo caligrÃ¡fico, sÃ­mbolo botÃ¢nico de pÃ©tala e um sistema de embalagem que transforma cada compra em uma experiÃªncia de presente.</p>`,
    statDeliverables: '31',
    statWeeks: '9',
    process: [
      { number: '01', title: 'ReferÃªncias francesas', text: 'Pesquisa profunda em confeitarias parisienses e maisons de chocolat para entender a linguagem do segmento premium.' },
      { number: '02', title: 'Desenvolvimento do logo', text: 'TrÃªs rounds de desenvolvimento atÃ© chegar ao logotipo caligrÃ¡fico com sÃ­mbolo de pÃ©tala-P integrado.' },
      { number: '03', title: 'Sistema de embalagem', text: 'Design de caixas, sacos, lacres, fitas e etiquetas em trÃªs variaÃ§Ãµes para diferentes produtos.' },
      { number: '04', title: 'PDV e fachada', text: 'AplicaÃ§Ã£o da identidade na fachada, materiais de loja e uniformes.' },
    ],
    result: `<p>ApÃ³s o rebranding, a Confeitaria PÃ©tale entrou no segmento de presentes corporativos premium e fechou contratos com quatro hotÃ©is boutique em Curitiba para fornecimento de amenities personalizados.</p>`,
  },
  {
    slug: 'resort-terras',
    category: 'Branding',
    title: 'Resort Terras',
    tagline: 'Reposicionamento que levou um resort ao segmento de ecoturismo de luxo.',
    client: 'Resort Terras do Verde',
    scope: 'Branding Completo',
    year: '2022',
    location: 'Chapada dos Veadeiros, GO',
    cover: 'assets/images/project-terras.svg',
    gallery: [
      { src: 'assets/images/terras-01.svg', alt: 'Nova identidade Resort Terras', layout: 'wide' },
      { src: 'assets/images/terras-02.svg', alt: 'Papelaria e brindes', layout: 'narrow' },
      { src: 'assets/images/terras-03.svg', alt: 'SinalizaÃ§Ã£o ambiental', layout: 'half' },
      { src: 'assets/images/terras-04.svg', alt: 'Material de vendas', layout: 'half' },
      { src: 'assets/images/terras-05.svg', alt: 'Uniformes e tÃªxteis', layout: 'full' },
    ],
    overview: `<p>O Resort Terras do Verde estava em um momento de pivÃ´: de resort convencional para referÃªncia em ecoturismo de luxo na Chapada dos Veadeiros. A identidade antiga nÃ£o comunicava mais a proposta de conexÃ£o com a natureza do cerrado e a exclusividade da experiÃªncia.</p>
<p>Lideramos o reposicionamento de marca completo: novo nome reduzido, nova identidade, novo tom de voz e sistema de comunicaÃ§Ã£o para todos os pontos de contato.</p>`,
    statDeliverables: '40',
    statWeeks: '14',
    process: [
      { number: '01', title: 'DiagnÃ³stico', text: 'ImersÃ£o de dois dias no resort, entrevistas com hÃ³spedes e anÃ¡lise completa do posicionamento atual e desejado.' },
      { number: '02', title: 'EstratÃ©gia de marca', text: 'DefiniÃ§Ã£o de arquÃ©tipos, proposta de valor, tom de voz e plataforma de marca.' },
      { number: '03', title: 'Nova identidade', text: 'Desenvolvimento do sistema visual: logotipo inspirado no cerrado, paleta terrosa e sistema tipogrÃ¡fico robusto.' },
      { number: '04', title: 'ImplantaÃ§Ã£o', text: 'SupervisÃ£o da implantaÃ§Ã£o em 40 pontos de contato, do site ao uniforme dos guias.' },
    ],
    result: `<p>O Resort Terras encerrou o primeiro ano com a nova marca com 95% de ocupaÃ§Ã£o na alta temporada, ticket mÃ©dio 35% maior e duas reportagens em revistas internacionais de ecoturismo de luxo.</p>`,
  },
];

/* â”€â”€â”€ HELPERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function getSlugFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug') || '';
}

function findProject(slug) {
  return PROJECTS.find(p => p.slug === slug) || null;
}

function prevProject(slug) {
  const idx = PROJECTS.findIndex(p => p.slug === slug);
  if (idx <= 0) return null;
  return PROJECTS[idx - 1];
}

function nextProject(slug) {
  const idx = PROJECTS.findIndex(p => p.slug === slug);
  if (idx < 0 || idx >= PROJECTS.length - 1) return null;
  return PROJECTS[idx + 1];
}

function el(id) {
  return document.getElementById(id);
}

/* â”€â”€â”€ DOM POPULATION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function populateMeta(project) {
  document.title = `${project.title} â€” Dani Braga Design`;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = `${project.title} â€” Dani Braga Design`;
  const ogImg = document.querySelector('meta[property="og:image"]');
  if (ogImg) ogImg.content = project.cover;
}

function populateHero(project) {
  const cover = el('project-cover');
  if (cover) {
    cover.src = project.cover;
    cover.alt = `${project.title} â€” imagem de capa`;
  }

  const category = el('project-category');
  if (category) category.textContent = project.category;

  const title = el('project-title');
  if (title) title.textContent = project.title;

  const tagline = el('project-tagline');
  if (tagline) tagline.textContent = project.tagline;

  const client = el('project-client');
  if (client) client.textContent = project.client;

  const scope = el('project-scope');
  if (scope) scope.textContent = project.scope;

  const year = el('project-year');
  if (year) year.textContent = project.year;

  const location = el('project-location');
  if (location) location.textContent = project.location;

  const breadcrumbTitle = el('breadcrumb-title');
  if (breadcrumbTitle) breadcrumbTitle.textContent = project.title;
}

function populateOverview(project) {
  const overview = el('project-overview');
  if (overview) overview.innerHTML = project.overview;

  const deliverables = el('project-stat-deliverables');
  if (deliverables) deliverables.textContent = project.statDeliverables;

  const weeks = el('project-stat-weeks');
  if (weeks) weeks.textContent = project.statWeeks;
}

function populateGallery(project) {
  const section = el('project-gallery');
  if (!section) return;

  const grid = document.createElement('div');
  grid.className = 'project-gallery__grid';

  project.gallery.forEach((img, index) => {
    const item = document.createElement('button');
    item.className = `gallery-item gallery-item--${img.layout}`;
    item.type = 'button';
    item.setAttribute('data-index', index);
    item.setAttribute('aria-label', `Ampliar imagem: ${img.alt}`);

    const pic = document.createElement('img');
    pic.src = img.src;
    pic.alt = img.alt;
    pic.loading = index < 3 ? 'eager' : 'lazy';

    item.appendChild(pic);
    grid.appendChild(item);

    item.addEventListener('click', () => openLightbox(index, project.gallery));
  });

  section.appendChild(grid);
}

function populateProcess(project) {
  const container = el('project-process');
  if (!container) return;

  project.process.forEach(stage => {
    const div = document.createElement('div');
    div.className = 'process-stage';
    div.setAttribute('data-reveal', '');
    div.innerHTML = `
      <p class="process-stage__number">${stage.number}</p>
      <h3 class="process-stage__title">${stage.title}</h3>
      <p class="process-stage__text">${stage.text}</p>
    `;
    container.appendChild(div);
  });
}

function populateResult(project) {
  const result = el('project-result');
  if (result) result.innerHTML = project.result;
}

function populateNavigation(project) {
  const prev = prevProject(project.slug);
  const next = nextProject(project.slug);

  const prevBtn  = el('nav-prev');
  const prevTitle = el('nav-prev-title');
  const nextBtn  = el('nav-next');
  const nextTitle = el('nav-next-title');

  if (prevBtn && prevTitle) {
    if (prev) {
      prevBtn.href = `projeto-detalhe.html?slug=${prev.slug}`;
      prevTitle.textContent = prev.title;
    } else {
      prevBtn.style.visibility = 'hidden';
    }
  }

  if (nextBtn && nextTitle) {
    if (next) {
      nextBtn.href = `projeto-detalhe.html?slug=${next.slug}`;
      nextTitle.textContent = next.title;
    } else {
      nextBtn.style.visibility = 'hidden';
    }
  }
}

function showNotFound() {
  const main = document.getElementById('main-content');
  if (!main) return;

  main.innerHTML = `
    <div style="text-align:center; padding: 10rem 2rem;">
      <p style="font-size:4rem; margin-bottom:1rem;">404</p>
      <h1 style="font-size:1.5rem; font-weight:300; margin-bottom:2rem;">Projeto nÃ£o encontrado</h1>
      <a href="projetos.html" class="btn btn--primary">Ver todos os projetos</a>
    </div>
  `;
}

/* â”€â”€â”€ LIGHTBOX â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

let _lbImages  = [];
let _lbCurrent = 0;

function openLightbox(index, images) {
  _lbImages  = images;
  _lbCurrent = index;
  renderLightbox();

  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleLightboxKey);
  }
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.setAttribute('hidden', '');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleLightboxKey);
  }
}

function renderLightbox() {
  const img     = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  if (!img || !_lbImages.length) return;

  const current = _lbImages[_lbCurrent];
  img.src = current.src;
  img.alt = current.alt;

  if (caption) caption.textContent = current.alt;
}

function handleLightboxKey(e) {
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  moveLightbox(-1);
  if (e.key === 'ArrowRight') moveLightbox(1);
}

function moveLightbox(dir) {
  const len = _lbImages.length;
  _lbCurrent = (_lbCurrent + dir + len) % len;
  renderLightbox();
}

function initLightboxControls() {
  const lb       = document.getElementById('lightbox');
  if (!lb) return;

  const backdrop = lb.querySelector('.lightbox__backdrop');
  const closeBtn = lb.querySelector('.lightbox__close');
  const prevBtn  = lb.querySelector('.lightbox__prev');
  const nextBtn  = lb.querySelector('.lightbox__next');

  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn)  prevBtn.addEventListener('click', () => moveLightbox(-1));
  if (nextBtn)  nextBtn.addEventListener('click', () => moveLightbox(1));
}

/* â”€â”€â”€ FILTER BUTTONS (projetos.html) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function initFilterButtons() {
  const buttons = document.querySelectorAll('[data-filter]');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Atualiza estado ativo
      buttons.forEach(b => b.classList.toggle('is-active', b === btn));

      // Filtra cards
      const items = document.querySelectorAll('.portfolio-item');
      let visible = 0;

      items.forEach(item => {
        const match = filter === '*' || item.dataset.category === filter;
        if (match) {
          delete item.dataset.hidden;
          visible++;
        } else {
          item.dataset.hidden = '';
        }
      });

      // Estado vazio
      const empty = document.getElementById('portfolio-empty');
      if (empty) empty.hidden = visible > 0;
    });
  });
}

/* â”€â”€â”€ INIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

document.addEventListener('DOMContentLoaded', () => {
  // Lightbox controls (sempre, se o elemento existir)
  initLightboxControls();

  // Filter (projetos.html â€” graceful no-op em outras pÃ¡ginas)
  initFilterButtons();

  // Detail page logic
  const slug = getSlugFromURL();
  if (!slug) return; // nÃ£o Ã© a pÃ¡gina de detalhe

  const project = findProject(slug);
  if (!project) {
    showNotFound();
    return;
  }

  populateMeta(project);
  populateHero(project);
  populateOverview(project);
  populateGallery(project);
  populateProcess(project);
  populateResult(project);
  populateNavigation(project);
});

export { PROJECTS, findProject };
