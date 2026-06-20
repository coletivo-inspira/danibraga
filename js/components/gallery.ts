/**
 * gallery.js — Dani Braga Design
 * Lightbox com navegação por teclado, swipe touch e lazy load
 */

const Gallery = (() => {
  let items = [];
  let currentIndex = 0;
  let lightbox, lightboxImg, lightboxCaption, prevBtn, nextBtn, closeBtn;
  let touchStartX = 0;

  /* ─── INIT ───────────────────────────────── */

  function init() {
    const galleries = document.querySelectorAll('.gallery');
    if (!galleries.length) return;

    buildLightbox();
    galleries.forEach(gallery => initGallery(gallery));
  }

  function initGallery(gallery) {
    const galleryItems = gallery.querySelectorAll('.gallery__item');

    galleryItems.forEach((item, idx) => {
      const img = item.querySelector('img');
      if (!img) return;

      items.push({
        src:     item.dataset.full || img.src,
        alt:     img.alt || '',
        caption: item.dataset.caption || img.alt || '',
      });

      const globalIdx = items.length - 1;
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', `Abrir imagem: ${img.alt}`);

      item.addEventListener('click', () => openLightbox(globalIdx));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(globalIdx);
        }
      });
    });
  }

  /* ─── LIGHTBOX BUILD ─────────────────────── */

  function buildLightbox() {
    if (document.querySelector('.lightbox')) return;

    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Visualizador de imagem');
    lb.innerHTML = `
      <button class="lightbox__close" aria-label="Fechar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <button class="lightbox__nav lightbox__nav--prev" aria-label="Imagem anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <div class="lightbox__content">
        <img class="lightbox__img" src="" alt="" />
        <p class="lightbox__caption"></p>
      </div>
      <button class="lightbox__nav lightbox__nav--next" aria-label="Próxima imagem">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
      <div class="lightbox__counter"></div>
    `;
    document.body.appendChild(lb);

    lightbox        = lb;
    lightboxImg     = lb.querySelector('.lightbox__img');
    lightboxCaption = lb.querySelector('.lightbox__caption');
    closeBtn        = lb.querySelector('.lightbox__close');
    prevBtn         = lb.querySelector('.lightbox__nav--prev');
    nextBtn         = lb.querySelector('.lightbox__nav--next');

    bindLightboxEvents();
  }

  /* ─── EVENTOS ───────────────────────────── */

  function bindLightboxEvents() {
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // fechar clicando fora
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // teclado
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  showPrev();
      if (e.key === 'ArrowRight') showNext();
    });

    // swipe touch
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { diff > 0 ? showNext() : showPrev(); }
    }, { passive: true });
  }

  /* ─── ABRIR / FECHAR ─────────────────────── */

  function openLightbox(index) {
    currentIndex = index;
    renderSlide();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    renderSlide();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    renderSlide();
  }

  function renderSlide() {
    const item = items[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxCaption.textContent = item.caption;

    const counter = lightbox.querySelector('.lightbox__counter');
    counter.textContent = `${currentIndex + 1} / ${items.length}`;

    prevBtn.style.display = items.length > 1 ? '' : 'none';
    nextBtn.style.display = items.length > 1 ? '' : 'none';
  }

  return { init };
})();

export default Gallery;
