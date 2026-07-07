/**
 * whatsapp-contact.js — Dani Braga Design
 * Botão flutuante WhatsApp — aparece após scroll
 */

const WhatsAppContact = (() => {
  const SCROLL_SHOW   = 400;
  const DEFAULT_PHONE = '5567998525247';
  const DEFAULT_MESSAGES = {
    pt: 'Ola! Vim pelo site e gostaria de conversar sobre um projeto de interiores.',
    en: 'Hello! I found your website and would like to talk about an interior design project.',
  };

  let btn, link;

  /* ─── INIT ───────────────────────────────── */

  function init() {
    btn = document.querySelector('.whatsapp-float');
    if (!btn) return;

    link = btn.querySelector('a') || btn;

    buildWhatsAppLink();
    bindEvents();
    checkVisibility();
  }

  /* ─── LINK ────────────────────────────────── */

  function buildWhatsAppLink() {
    const phone = normalizePhone(btn.dataset.phone || DEFAULT_PHONE);
    const lang = document.documentElement.lang === 'en' ? 'en' : 'pt';
    const message = (btn.dataset.message || DEFAULT_MESSAGES[lang]).trim();
    const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    if (link && link.tagName === 'A') link.href = href;
    else if (btn.tagName === 'A') btn.href = href;
  }

  function normalizePhone(phone) {
    const digits = String(phone).replace(/\D/g, '');
    return digits || DEFAULT_PHONE;
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

export default WhatsAppContact;
