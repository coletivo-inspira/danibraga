# Dani Braga Design — Portfolio

Site portfolio de design de interiores e branding para o mercado de hospitalidade.

---

## Visualizar o site localmente

> **Importante:** o site usa ES Modules (`type="module"`) e `fetch()` para carregar as traduções.  
> Por segurança, os navegadores **bloqueiam** essas APIs quando o arquivo é aberto diretamente (`file://`).  
> Você precisa de um servidor HTTP local.

### Opção 1 — Live Server (VS Code) ✅ Recomendado

1. Instale a extensão **Live Server** no VS Code  
   (`Ctrl+P` → `ext install ritwickdey.liveserver`)
2. Abra a pasta `d:\Coletivo Inspira\danibraga` no VS Code
3. Clique em **"Go Live"** na barra de status (canto inferior direito)
4. O navegador abrirá automaticamente em `http://localhost:5500`

### Opção 2 — Python (sem extensões)

```bash
# Na pasta raiz do projeto:
cd "d:\Coletivo Inspira\danibraga"
python -m http.server 5500
```

Acesse: [http://localhost:5500](http://localhost:5500)

---

## Estrutura do projeto

```
dani/
├── index.html            # Página inicial
├── projetos.html         # Grade de projetos
├── sobre.html            # Sobre a designer
├── contato.html          # Contato
├── projeto-detalhe.html  # Detalhes de projeto (dinâmico via ?slug=)
├── assets/
│   └── images/           # Imagens SVG placeholder (substituir pelas reais)
├── css/
│   ├── main.css
│   ├── components/       # Botões, nav, footer, modais…
│   └── pages/            # Estilos específicos por página
├── js/
│   ├── main.js           # Entry point (ES Module)
│   ├── i18n.js           # Internacionalização
│   ├── components/       # Nav, Gallery, AudioPlayer…
│   └── pages/            # Controllers por página
├── i18n/
│   ├── pt.json           # Traduções em português
│   └── en.json           # Traduções em inglês
└── scripts/
    └── create-placeholders.js   # Gera imagens SVG placeholder
```

---

## Substituir imagens placeholder

Todas as imagens em `assets/images/*.svg` são placeholders.  
Para substituir por fotos reais:

1. Exporte as imagens nos tamanhos:
   - Covers de projeto: **800 × 500 px**
   - Galeria de projeto: **800 × 600 px**
   - Hero background: **1920 × 1080 px**
   - Portrait: **600 × 800 px**
   - Studio: **800 × 600 px**
   - Instagram: **400 × 400 px**
2. Salve como `.jpg` ou `.webp` em `assets/images/`
3. Atualize as referências nos arquivos HTML/CSS/JS (busca global por `.svg`)

---

## Regenerar placeholders

Caso precise recriar os SVGs (por exemplo, após limpar a pasta):

```bash
node scripts/create-placeholders.js
```

---

## Internacionalização

O site suporta português (padrão) e inglês.  
Os textos ficam em `i18n/pt.json` e `i18n/en.json`.  
O seletor de idioma está no `<header>` em todas as páginas.
