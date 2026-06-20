/**
 * create-placeholders.js
 * Gera imagens SVG placeholder para todos os assets ausentes.
 * Executar com: node scripts/create-placeholders.js
 * Não requer nenhuma dependência npm.
 */

const fs   = require('fs');
const path = require('path');

const ROOT   = path.resolve(__dirname, '..');
const IMAGES = path.join(ROOT, 'assets', 'images');

/* ─── HELPER: escreve SVG ─────────────────────────────────── */

function writeSVG(filePath, width, height, bg, label, sublabel = '') {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const sub = sublabel
    ? `<text x="${width / 2}" y="${height / 2 + 34}" font-family="serif" font-size="16" fill="rgba(255,255,255,0.55)" text-anchor="middle">${sublabel}</text>`
    : '';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${bg}"/>
  <rect width="${width}" height="${height}" fill="url(#grain)" opacity="0.06"/>
  <defs>
    <pattern id="grain" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="2" height="2" fill="white"/>
    </pattern>
  </defs>
  <text x="${width / 2}" y="${height / 2}" font-family="Georgia, serif" font-size="22" fill="rgba(255,255,255,0.85)" text-anchor="middle" dominant-baseline="middle">${label}</text>
  ${sub}
</svg>`;

  fs.writeFileSync(filePath, svg, 'utf8');
  console.log('  ✓', path.relative(ROOT, filePath));
}

/* ─── PALETAS POR PROJETO ────────────────────────────────── */

const PROJECTS = [
  { slug: 'aurora',   name: 'Hotel Aurora',        color: '#8B6F47', cat: 'Branding'          },
  { slug: 'noite',    name: 'Restaurante Noite',    color: '#1E1A12', cat: 'Editorial'         },
  { slug: 'essencia', name: 'Spa Essência',         color: '#5C6B4A', cat: 'Identidade Visual' },
  { slug: 'mar',      name: 'Pousada Mar',          color: '#2E4A5E', cat: 'Digital'           },
  { slug: 'petale',   name: 'Confeitaria Pétale',   color: '#8E5A5A', cat: 'Identidade Visual' },
  { slug: 'terras',   name: 'Resort Terras',        color: '#4A3F2F', cat: 'Branding'          },
];

const GALLERY_COUNTS = {
  aurora:   7,
  noite:    5,
  essencia: 7,
  mar:      4,
  petale:   7,
  terras:   5,
};

/* ─── GERAR COVERS ────────────────────────────────────────── */

console.log('\n[create-placeholders] Gerando covers de projeto...');
for (const p of PROJECTS) {
  writeSVG(
    path.join(IMAGES, `project-${p.slug}.svg`),
    800, 500,
    p.color,
    p.name,
    p.cat
  );
}

/* ─── GERAR GALERIA ───────────────────────────────────────── */

console.log('\n[create-placeholders] Gerando imagens de galeria...');
for (const p of PROJECTS) {
  const count = GALLERY_COUNTS[p.slug];
  for (let i = 1; i <= count; i++) {
    const num = String(i).padStart(2, '0');
    writeSVG(
      path.join(IMAGES, `${p.slug}-${num}.svg`),
      800, 600,
      p.color,
      `${p.name}`,
      `Imagem ${i} de ${count}`
    );
  }
}

/* ─── HERO BACKGROUND ─────────────────────────────────────── */

console.log('\n[create-placeholders] Gerando hero e outros...');
writeSVG(path.join(IMAGES, 'hero-bg.svg'), 1920, 1080, '#1E1A12', '', '');

/* ─── RETRATOS (sobre.html) ───────────────────────────────── */

writeSVG(path.join(IMAGES, 'dani-portrait.svg'), 600, 800,  '#5C6B4A', 'Dani Braga', 'Foto profissional');
writeSVG(path.join(IMAGES, 'dani-studio.svg'),   800, 600,  '#4A3F2F', 'Estúdio', 'Ambiente de trabalho');

/* ─── FAVICON ─────────────────────────────────────────────── */

const faviconPath = path.join(IMAGES, 'favicon.svg');
fs.writeFileSync(faviconPath, `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#1E1A12"/>
  <text x="16" y="22" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#B8966E" text-anchor="middle">DB</text>
</svg>`, 'utf8');
console.log('  ✓', path.relative(ROOT, faviconPath));

/* ─── RESUMO ──────────────────────────────────────────────── */

const total = PROJECTS.length
  + Object.values(GALLERY_COUNTS).reduce((a, b) => a + b, 0)
  + 4; // hero-bg, portrait, studio, favicon

console.log(`\n[create-placeholders] Concluído — ${total} arquivos SVG gerados em assets/images/\n`);
console.log('Próximo passo: inicie o Live Server no VS Code e acesse http://localhost:5500\n');
