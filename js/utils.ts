/**
 * utils.js — Dani Braga Design
 * Utilitários compartilhados entre módulos
 */

/* ─── DEBOUNCE ───────────────────────────── */
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/* ─── THROTTLE ───────────────────────────── */
export function throttle(fn, limit = 100) {
  let lastRun = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastRun >= limit) {
      lastRun = now;
      fn(...args);
    }
  };
}

/* ─── SCROLL Y ────────────────────────────── */
export function getScrollY() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

/* ─── IS IN VIEWPORT ──────────────────────── */
export function isInViewport(el, threshold = 0.15) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= 0;
}

/* ─── SLUGIFY ─────────────────────────────── */
export function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/* ─── FORMAT DATE ─────────────────────────── */
export function formatDate(date, locale = 'pt-BR') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'long', day: 'numeric',
  }).format(new Date(date));
}

/* ─── QUERY ALL ───────────────────────────── */
export function $$(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

/* ─── LOAD SCRIPT ─────────────────────────── */
export function loadScript(src, defer = true) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const script = document.createElement('script');
    script.src  = src;
    script.defer = defer;
    script.onload  = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/* ─── PREFERS REDUCED MOTION ──────────────── */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ─── SANITIZE (previne XSS em outputs) ───── */
export function sanitize(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
