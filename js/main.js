// ===== HEADER SCROLL =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (!hamburger?.contains(e.target) && !mobileMenu?.contains(e.target)) {
    mobileMenu?.classList.remove('open');
  }
});

// ===== CONTACT FORM =====
// Enquiries are emailed to fixngoltd@gmail.com through FormSubmit (https://formsubmit.co).
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/fixngoltd@gmail.com';
document.querySelectorAll('.contact-form-el, .sidebar-form-el').forEach(form => {
  // Hidden spam trap: real visitors never fill this in.
  const trap = document.createElement('input');
  trap.type = 'text'; trap.name = '_honey'; trap.tabIndex = -1; trap.autocomplete = 'off';
  trap.setAttribute('aria-hidden', 'true');
  trap.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;opacity:0';
  form.appendChild(trap);

  const successEl = form.querySelector('.success-msg');
  const errorEl = document.createElement('div');
  errorEl.className = 'error-msg';
  errorEl.setAttribute('role', 'alert');
  errorEl.innerHTML = "Sorry, that did not send. Please call <a href=\"tel:07738737000\">07738 737 000</a> or email <a href=\"mailto:fixngoltd@gmail.com\">fixngoltd@gmail.com</a>.";
  (successEl || form).insertAdjacentElement('afterend', errorEl);

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    if (trap.value) return;
    const btn = this.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    errorEl.classList.remove('show');

    const data = {};
    this.querySelectorAll('input, select, textarea').forEach(el => {
      if (el === trap || el.type === 'submit' || !el.value) return;
      const label = el.id && this.querySelector('label[for="' + el.id + '"]');
      const key = (label ? label.textContent : (el.placeholder || el.name || 'Field')).replace('*', '').trim();
      data[key] = el.value;
    });
    data.Page = window.location.href;
    data._subject = 'New website enquiry: ' + document.title.split('|')[0].trim();
    data._template = 'table';
    data._captcha = 'false';

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      const out = await res.json();
      if (!res.ok || !(out.success === true || out.success === 'true')) throw new Error('send failed');
      if (successEl) { successEl.classList.add('show'); setTimeout(() => successEl.classList.remove('show'), 8000); }
      this.reset();
    } catch (err) {
      errorEl.classList.add('show');
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
});

// ===== ACTIVE NAV =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// ===== STRIP DUPLICATE FOR SEAMLESS SCROLL =====
const strip = document.querySelector('.strip-inner');
if (strip) { strip.innerHTML += strip.innerHTML; }
