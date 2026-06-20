/**
 * whatsapp.js — Dani Braga Design
 * Botão flutuante WhatsApp — aparece após scroll, UTM params
 */

const WhatsApp = (() => {
  const SCROLL_SHOW   = 400;
  const DEFAULT_PHONE = '5511999999999'; // substituir no HTML via data-phone

  let btn, link;

  /* ─── INIT ───────────────────────────────── */

  function init() {
    btn = document.querySelector('.whatsapp-btn');
    if (!btn) return;

    link = btn.querySelector('a') || btn;

    buildUTMLink();
    bindEvents();
    checkVisibility();
  }

  /* ─── UTM ─────────────────────────────────── */

  function buildUTMLink() {
    const phone   = btn.dataset.phone   || DEFAULT_PHONE;
    const message = btn.dataset.message || 'Olá! Vim pelo site e gostaria de saber mais sobre os serviços.';
    const source  = getUTMSource();
    const text    = encodeURIComponent(message);

    const utmMsg  = `${message} (via ${source})`;
    const encoded = encodeURIComponent(utmMsg);
    const href    = `https://wa.me/${phone}?text=${encoded}`;

    if (link && link.tagName === 'A') link.href = href;
    else if (btn.tagName === 'A') btn.href = href;
  }

  function getUTMSource() {
    const params = new URLSearchParams(window.location.search);
    return params.get('utm_source') || window.location.hostname;
  }

  /* ─── VISIBILIDADE ───────────────────────── */

  function bindEvents() {
    window.addEventListener('scroll', throttle(checkVisibility, 150), { passive: true });
  }

  function checkVisibility() {
    const show = window.scrollY > SCROLL_SHOW;
    btn.classList.toggle('is-visible', show);
  }

  /* ─── UTILS ──────────────────────────────── */

  function throttle(fn, ms) {
    let last = 0;
    return (...args) => {
      const now = Date.now();
      if (now - last >= ms) { last = now; fn(...args); }
    };
  }

  return { init };
})();

export default WhatsApp;
