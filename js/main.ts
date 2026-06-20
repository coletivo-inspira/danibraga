/**
 * main.js — Dani Braga Design
 * Entry point — inicializa todos os módulos
 */

import I18n         from './i18n.js';
import Nav          from './components/nav.js';
import Gallery      from './components/gallery.js';
import AudioPlayer  from './components/audio-player.js';
import WhatsApp     from './components/whatsapp.js';
import Modal        from './components/modal.js';
import Forms        from './components/forms.js';
import Animations   from './animations.js';

/* ─── BASE PATH i18n ─────────────────────── */
// Como todas as páginas HTML estão na raiz, um caminho relativo simples funciona.
window._i18nBasePath = 'i18n/';

/* ─── DOM READY ──────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Idioma
  I18n.init().catch(() => console.warn('[I18n] Falha ao carregar traduções.'));

  // 2. Navegação
  Nav.init();

  // 3. Componentes
  Modal.init();
  Forms.init();
  WhatsApp.init();
  AudioPlayer.init();

  // 4. Galeria (somente páginas com .gallery)
  Gallery.init();

  // 5. Animações de scroll
  Animations.init();

  // 6. Seletor de idioma
  bindLangSwitch();

  // 7. Smooth scroll para âncoras internas
  bindSmoothScroll();

  // 8. Lazy load imagens nativas
  enableLazyImages();

  console.log('[Dani Braga Design] Site iniciado.');
});

/* ─── LANGUAGE SWITCH ─────────────────────── */

function bindLangSwitch() {
  document.querySelectorAll('[data-lang-switch]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.langSwitch;
      I18n.setLang(lang);

      // Atualiza estado ativo dos botões
      document.querySelectorAll('[data-lang-switch]').forEach(b => {
        b.classList.toggle('is-active', b.dataset.langSwitch === lang);
      });

      // Atualiza lang no <html>
      document.documentElement.lang = lang;
    });
  });
}

/* ─── SMOOTH SCROLL ───────────────────────── */

function bindSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Atualiza URL sem reload
      history.pushState(null, '', `#${id}`);
    });
  });
}

/* ─── LAZY IMAGES ─────────────────────────── */

function enableLazyImages() {
  // Adiciona loading="lazy" a imagens que não o têm
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
}
