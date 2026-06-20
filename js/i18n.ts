/**
 * i18n.js — Dani Braga Design
 * Sistema de internacionalização (PT / EN)
 * Usa atributos data-i18n no HTML
 */

const I18n = (() => {
  const SUPPORTED_LANGS = ['pt', 'en'];
  const DEFAULT_LANG    = 'pt';
  const STORAGE_KEY     = 'dbd_lang';

  let _translations = {};
  let _currentLang  = DEFAULT_LANG;

  /* ─── DETECÇÃO DE IDIOMA ────────────────────── */

  function detectLang() {
    // 1. Preferência salva pelo usuário
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

    // 2. Idioma do navegador
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase().slice(0, 2);
    if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

    return DEFAULT_LANG;
  }

  /* ─── CARREGAMENTO DO JSON ──────────────────── */

  async function loadTranslations(lang) {
    const basePath = window._i18nBasePath || 'i18n/';
    const url      = `${basePath}${lang}.json`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`[i18n] Could not load ${url}`);

    const data = await res.json();
    _translations[lang] = flatten(data);
    return _translations[lang];
  }

  /* ─── FLATTEN DO OBJETO JSON ────────────────── */

  function flatten(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, key) => {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(acc, flatten(obj[key], fullKey));
      } else {
        acc[fullKey] = obj[key];
      }
      return acc;
    }, {});
  }

  /* ─── TRADUZIR CHAVE ────────────────────────── */

  function t(key, replacements = {}) {
    const trans = _translations[_currentLang] || {};
    let str     = trans[key] || key;

    // Substituições dinâmicas: {placeholder}
    Object.entries(replacements).forEach(([k, v]) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    });

    return str;
  }

  /* ─── APLICAR NO DOM ────────────────────────── */

  function applyToDom() {
    const trans = _translations[_currentLang] || {};

    // data-i18n="chave" → textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (trans[key] !== undefined) {
        el.textContent = trans[key];
      }
    });

    // data-i18n-html="chave" → innerHTML (use com cuidado)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (trans[key] !== undefined) {
        el.innerHTML = trans[key];
      }
    });

    // data-i18n-placeholder="chave" → placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (trans[key] !== undefined) {
        el.setAttribute('placeholder', trans[key]);
      }
    });

    // data-i18n-aria="chave" → aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (trans[key] !== undefined) {
        el.setAttribute('aria-label', trans[key]);
      }
    });

    // data-i18n-title="chave" → title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (trans[key] !== undefined) {
        el.setAttribute('title', trans[key]);
      }
    });

    // Atualiza o atributo lang do HTML e meta description
    document.documentElement.setAttribute('lang', _currentLang);
    updateMetaTags();
    updateHreflang();
  }

  /* ─── META TAGS ─────────────────────────────── */

  function updateMetaTags() {
    const trans = _translations[_currentLang] || {};

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && trans['meta.siteDescription']) {
      metaDesc.setAttribute('content', trans['meta.siteDescription']);
    }

    // OG locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', _currentLang === 'en' ? 'en_US' : 'pt_BR');
    }
  }

  /* ─── HREFLANG ──────────────────────────────── */

  function updateHreflang() {
    document.querySelectorAll('link[hreflang]').forEach(link => {
      const hl = link.getAttribute('hreflang');
      if (hl === 'x-default' || hl === 'pt') {
        link.setAttribute('href', window.location.origin + window.location.pathname);
      }
    });
  }

  /* ─── TROCAR IDIOMA ─────────────────────────── */

  async function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    if (lang === _currentLang && _translations[lang]) {
      applyToDom();
      return;
    }

    _currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    if (!_translations[lang]) {
      await loadTranslations(lang);
    }

    applyToDom();
    updateToggleButtons();

    // Dispara evento customizado
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
  }

  /* ─── BOTÕES DE TOGGLE ──────────────────────── */

  function updateToggleButtons() {
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      const lang = btn.getAttribute('data-lang-toggle');
      btn.classList.toggle('is-active', lang === _currentLang);
      btn.setAttribute('aria-pressed', lang === _currentLang ? 'true' : 'false');
    });
  }

  /* ─── INICIALIZAÇÃO ─────────────────────────── */

  async function init() {
    _currentLang = detectLang();

    try {
      await loadTranslations(_currentLang);
    } catch (err) {
      console.warn('[i18n] Error loading translations, falling back to PT', err);
      _currentLang = DEFAULT_LANG;
      await loadTranslations(DEFAULT_LANG);
    }

    applyToDom();
    updateToggleButtons();

    // Eventos nos botões de idioma
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-lang-toggle]');
      if (!btn) return;
      const lang = btn.getAttribute('data-lang-toggle');
      if (lang) setLang(lang);
    });
  }

  /* ─── API PÚBLICA ───────────────────────────── */

  return {
    init,
    setLang,
    t,
    get lang() { return _currentLang; },
    get supported() { return [...SUPPORTED_LANGS]; },
  };
})();

export default I18n;
