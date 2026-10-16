// Shared components
const NAV_HTML = `
<header class="header">
  <nav class="nav container">
  
    <a href="index.html" class="logo">
      <img src="imgs/logo/Logo.png" alt="FIX & GO Property Maintenance Logo" style="height: 56px; width: auto; max-width: 250px;">
      <div class="logo-text">FIX & GO<span>Property Maintenance</span></div>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav-cta">
      <a href="tel:07738737000" class="phone-link"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg> 07738 737 000</a>
      <a href="contact.html#quote-form" class="btn btn-primary">Get a Quote</a>
    </div>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>
<div class="mobile-menu">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="contact.html#quote-form" style="color:var(--orange)">Get a Free Quote →</a></li>
  </ul>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo" style="margin-bottom:20px;display:inline-flex">
          <img src="imgs/logo/Logo.png" alt="" width="56" height="56" style="height:56px;width:56px">
          <div class="logo-text">FIX & GO<span>Property Maintenance</span></div>
        </a>
        <p class="footer-desc">Your trusted partner for all residential property maintenance needs across the UK. Quality work, reliable service, affordable prices.</p>
      </div>
      <div>
        <h4 class="footer-col-title">Services</h4>
        <ul class="footer-links">
          <li><a href="service-cleaning.html">Cleaning</a></li>
          <li><a href="service-electrical.html">Electrical</a></li>
          <li><a href="service-plumbing.html">Plumbing</a></li>
          <li><a href="service-boiler.html">Boiler Repair</a></li>
          <li><a href="service-roofing.html">Roofing</a></li>
          <li><a href="service-handyman.html">Handyman</a></li>
          <li><a href="services.html">All Services →</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer-col-title">Company</h4>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="contact.html#quote-form">Get a Quote</a></li>
        </ul>
      </div>
      <div>
  <h4 class="footer-col-title">Contact</h4>
  <ul class="footer-links">
    <li><a href="mailto:fixngoltd@gmail.com">fixngoltd@gmail.com</a></li>
    <li><a href="tel:07738737000">07738 737 000</a></li>
    <li style="color: rgba(255, 255, 255, 0.7);">1 Ashville Avenue, B34 6NA</li>
    <li style="color: rgba(255,255,255,0.7); font-size: 14px;">Available Mon–Sat<br>
      8am – 6pm</li>
  </ul>
</div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© <span id="year"></span> FIX & GO Property Maintenance Ltd. All rights reserved.</p>
      <div class="footer-legal">
        <a href="privacy.html">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>`;

// Inject
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
