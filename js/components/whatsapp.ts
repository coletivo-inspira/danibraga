/**
 * instagram-contact.js — Dani Braga Design
 * Botão flutuante Instagram — aparece após scroll
 */

const InstagramContact = (() => {
  const SCROLL_SHOW   = 400;
  const DEFAULT_URL = 'https://instagram.com/danibraga.design';

  let btn, link;

  /* ─── INIT ───────────────────────────────── */

  function init() {
    btn = document.querySelector('.instagram-float');
    if (!btn) return;

    link = btn.querySelector('a') || btn;

    buildLink();
    bindEvents();
    checkVisibility();
  }

  /* ─── LINK ────────────────────────────────── */

  function buildLink() {
    const href = btn.dataset.href || DEFAULT_URL;

    if (link && link.tagName === 'A') link.href = href;
    else if (btn.tagName === 'A') btn.href = href;
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

export default InstagramContact;
