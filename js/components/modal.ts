/**
 * modal.js — Dani Braga Design
 * Sistema genérico de modais — focus trap, ESC, backdrop
 */

const Modal = (() => {
  const openModals = [];

  /* ─── INIT ───────────────────────────────── */

  function init() {
    // Triggers via data-modal-target="id"
    document.querySelectorAll('[data-modal-target]').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const id = trigger.dataset.modalTarget;
        const modal = document.getElementById(id);
        if (modal) open(modal);
      });
    });

    // Fechar via data-modal-close
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) close(modal);
      });
    });

    // ESC fecha o último modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && openModals.length) {
        close(openModals[openModals.length - 1]);
      }
    });
  }

  /* ─── ABRIR ──────────────────────────────── */

  function open(modal) {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    openModals.push(modal);

    // Focus trap — move foco para o primeiro elemento focável
    const focusable = getFocusable(modal);
    if (focusable.length) focusable[0].focus();

    // backdrop click
    const backdrop = modal.querySelector('.modal__backdrop');
    backdrop?.addEventListener('click', () => close(modal), { once: true });

    // trap de tab
    modal._trapHandler = (e) => trapFocus(e, modal);
    modal.addEventListener('keydown', modal._trapHandler);
  }

  /* ─── FECHAR ─────────────────────────────── */

  function close(modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');

    const idx = openModals.indexOf(modal);
    if (idx !== -1) openModals.splice(idx, 1);

    if (!openModals.length) document.body.style.overflow = '';

    modal.removeEventListener('keydown', modal._trapHandler);

    // Devolve foco ao trigger
    const trigger = document.querySelector(`[data-modal-target="${modal.id}"]`);
    trigger?.focus();
  }

  /* ─── FOCUS TRAP ─────────────────────────── */

  function trapFocus(e, modal) {
    if (e.key !== 'Tab') return;
    const focusable = getFocusable(modal);
    if (!focusable.length) return;

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }

  function getFocusable(container) {
    return [...container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )];
  }

  return { init, open, close };
})();

export default Modal;
