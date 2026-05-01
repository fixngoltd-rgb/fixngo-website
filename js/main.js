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
document.querySelectorAll('.contact-form-el, .sidebar-form-el').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('[type="submit"]');
    const successEl = this.querySelector('.success-msg');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      if (successEl) { successEl.classList.add('show'); setTimeout(() => successEl.classList.remove('show'), 5000); }
      this.reset();
    }, 1200);
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
