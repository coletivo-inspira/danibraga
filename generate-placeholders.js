const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'assets', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function getSvg(title, subtitle, width = 800, height = 1000) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#141414"/>
  <rect x="5%" y="5%" width="90%" height="90%" fill="none" stroke="#242424" stroke-width="1"/>
  <path d="M ${width/2 - 50} ${height/2 - 80} L ${width/2 + 50} ${height/2 - 80}" stroke="#333" stroke-width="1"/>
  <text x="50%" y="50%" font-family="Inter, sans-serif" font-size="20" fill="#777" text-anchor="middle" letter-spacing="4" text-transform="uppercase">${title}</text>
  <text x="50%" y="54%" font-family="Cormorant Garamond, serif" font-size="18" fill="#555" text-anchor="middle" font-style="italic">${subtitle}</text>
</svg>`;
}

const files = {
  'project-aurora.svg': getSvg('Hotel Aurora', 'Branding & Identity'),
  'project-noite.svg': getSvg('Restaurante Noite', 'Editorial Design'),
  'project-essencia.svg': getSvg('Spa Essência', 'Visual Identity'),
  'insta-1.svg': getSvg('Instagram', 'Processo criativo', 800, 800),
  'insta-2.svg': getSvg('Instagram', 'Detalhe tipográfico', 800, 800),
  'insta-3.svg': getSvg('Instagram', 'Paleta de cores', 800, 800),
  'insta-4.svg': getSvg('Instagram', 'Material impresso', 800, 800),
  'insta-5.svg': getSvg('Instagram', 'Logo em produção', 800, 800),
  'insta-6.svg': getSvg('Instagram', 'Mesa de trabalho', 800, 800),
  'favicon.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#d4af37"/><text x="50%" y="60%" font-family="serif" font-size="60" fill="#111" text-anchor="middle">DB</text></svg>`,
  'og-home.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"><rect width="100%" height="100%" fill="#111"/><text x="50%" y="50%" font-family="sans-serif" font-size="60" fill="#fff" text-anchor="middle">Dani Braga Design</text></svg>`
};

for (const [file, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(dir, file), content);
}
console.log('SVGs created.');
