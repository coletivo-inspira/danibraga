/**
 * forms.js — Dani Braga Design
 * Validação client-side + envio via Netlify Forms / Fetch
 */

const Forms = (() => {
  /* ─── INIT ───────────────────────────────── */

  function init() {
    document.querySelectorAll('.form[data-validate]').forEach(form => {
      bindForm(form);
    });
  }

  /* ─── BIND FORM ──────────────────────────── */

  function bindForm(form) {
    // Validação ao sair do campo
    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('has-error')) validateField(field);
      });
    });

    form.addEventListener('submit', (e) => handleSubmit(e, form));
  }

  /* ─── VALIDAÇÃO DE CAMPO ─────────────────── */

  function validateField(field) {
    clearError(field);

    // Required
    if (field.required && !field.value.trim()) {
      setError(field, 'Este campo é obrigatório.');
      return false;
    }

    // Email
    if (field.type === 'email' && field.value.trim()) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(field.value.trim())) {
        setError(field, 'Informe um e-mail válido.');
        return false;
      }
    }

    // Tel (básico)
    if (field.type === 'tel' && field.value.trim()) {
      const digits = field.value.replace(/\D/g, '');
      if (digits.length < 10) {
        setError(field, 'Informe um telefone válido.');
        return false;
      }
    }

    // Minlength
    if (field.minLength > 0 && field.value.length < field.minLength) {
      setError(field, `Mínimo de ${field.minLength} caracteres.`);
      return false;
    }

    setSuccess(field);
    return true;
  }

  /* ─── SUBMIT ─────────────────────────────── */

  async function handleSubmit(e, form) {
    e.preventDefault();

    const fields = form.querySelectorAll('input, textarea, select');
    let valid = true;
    fields.forEach(f => { if (!validateField(f)) valid = false; });

    if (!valid) {
      const firstError = form.querySelector('.has-error');
      firstError?.focus();
      return;
    }

    setFormLoading(form, true);

    try {
      // Netlify Forms — POST com form-data
      const data = new FormData(form);
      const res  = await fetch('/', {
        method:  'POST',
        headers: { 'Accept': 'application/x-www-form-urlencoded' },
        body:    new URLSearchParams(data).toString(),
      });

      if (res.ok) {
        showSuccess(form);
      } else {
        showError(form, 'Erro ao enviar. Tente novamente ou me chame no Instagram.');
      }
    } catch {
      showError(form, 'Sem conexão. Tente novamente em breve.');
    } finally {
      setFormLoading(form, false);
    }
  }

  /* ─── UI DE CAMPO ─────────────────────────── */

  function setError(field, msg) {
    field.classList.add('has-error');
    field.classList.remove('has-success');
    field.setAttribute('aria-invalid', 'true');

    const wrapper = field.closest('.form__group');
    if (!wrapper) return;

    let err = wrapper.querySelector('.form__error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'form__error';
      err.setAttribute('role', 'alert');
      wrapper.appendChild(err);
    }
    err.textContent = msg;
  }

  function setSuccess(field) {
    field.classList.remove('has-error');
    field.classList.add('has-success');
    field.setAttribute('aria-invalid', 'false');

    const wrapper = field.closest('.form__group');
    wrapper?.querySelector('.form__error')?.remove();
  }

  function clearError(field) {
    field.classList.remove('has-error', 'has-success');
    field.removeAttribute('aria-invalid');
    const wrapper = field.closest('.form__group');
    wrapper?.querySelector('.form__error')?.remove();
  }

  /* ─── UI DE FORM ─────────────────────────── */

  function setFormLoading(form, loading) {
    const btn = form.querySelector('[type="submit"]');
    if (!btn) return;
    btn.disabled = loading;
    btn.classList.toggle('is-loading', loading);
  }

  function showSuccess(form) {
    const msg = form.querySelector('.form__success') || createMessage(form, 'form__success');
    msg.textContent = 'Mensagem enviada! Retornaremos em breve.';
    msg.hidden = false;
    form.reset();
    form.querySelectorAll('.has-success').forEach(f => f.classList.remove('has-success'));
    setTimeout(() => { msg.hidden = true; }, 6000);
  }

  function showError(form, text) {
    const msg = form.querySelector('.form__global-error') || createMessage(form, 'form__global-error');
    msg.textContent = text;
    msg.hidden = false;
    msg.setAttribute('role', 'alert');
    setTimeout(() => { msg.hidden = true; }, 6000);
  }

  function createMessage(form, cls) {
    const el = document.createElement('div');
    el.className = cls;
    el.hidden = true;
    form.appendChild(el);
    return el;
  }

  return { init };
})();

export default Forms;
