/**
 * nav.js — Dani Braga Design
 * Menu mobile drawer, scroll-aware header, active links
 */

const Nav = (() => {
  const SCROLL_THRESHOLD = 60;

  let header, toggle, drawer, backdrop, links;

  /* ─── INIT ───────────────────────────────── */

  function init() {
    header   = document.querySelector('.header');
    toggle   = document.querySelector('.nav__toggle');
    drawer   = document.querySelector('.nav__drawer');
    backdrop = document.querySelector('.nav__backdrop');
    links    = document.querySelectorAll('.nav__link[href]');

    if (!header) return;

    bindEvents();
    setActiveLink();
    onScroll(); // estado inicial
  }

  /* ─── EVENTOS ───────────────────────────── */

  function bindEvents() {
    // toggle menu mobile
    toggle?.addEventListener('click', () => toggleDrawer());

    // fechar ao clicar no backdrop
    backdrop?.addEventListener('click', () => closeDrawer());

    // fechar com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });

    // fechar ao clicar num link interno
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (link.getAttribute('href').startsWith('#') || window.innerWidth < 1024) {
          closeDrawer();
        }
      });
    });

    // scroll
    window.addEventListener('scroll', throttle(onScroll, 100), { passive: true });
  }

  /* ─── DRAWER ────────────────────────────── */

  function toggleDrawer() {
    const isOpen = drawer?.classList.contains('is-open');
    isOpen ? closeDrawer() : openDrawer();
  }

  function openDrawer() {
    drawer?.classList.add('is-open');
    backdrop?.classList.add('is-visible');
    toggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('is-open');
    backdrop?.classList.remove('is-visible');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ─── SCROLL BEHAVIOR ───────────────────── */

  function onScroll() {
    const scrolled = window.scrollY > SCROLL_THRESHOLD;
    header?.classList.toggle('is-scrolled', scrolled);
  }

  /* ─── LINK ATIVO ─────────────────────────── */

  function setActiveLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
      const href = link.getAttribute('href').split('/').pop().split('#')[0] || 'index.html';
      link.classList.toggle('is-active', href === current);
    });
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

export default Nav;
