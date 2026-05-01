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
      <a href="tel:07738737000" class="phone-link">📞 07738737000</a>
      <a href="contact.html" class="btn btn-primary">Get a Quote</a>
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
    <li><a href="contact.html" style="color:var(--orange)">Get a Free Quote →</a></li>
  </ul>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo" style="margin-bottom:20px;display:inline-flex">
          <div class="logo-icon">F&G</div>
          <div class="logo-text">FIX & GO<span>Property Maintenance</span></div>
        </a>
        <p class="footer-desc">Your trusted partner for all residential property maintenance needs across the UK. Quality work, reliable service, affordable prices.</p>
        <div class="footer-social">
          <a href="#" class="social-link">f</a>
          <a href="#" class="social-link">in</a>
          <a href="#" class="social-link">ig</a>
        </div>
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
          <li><a href="contact.html">Get a Quote</a></li>
        </ul>
      </div>
      <div>
  <h4 class="footer-col-title">Contact</h4>
  <ul class="footer-links">
    <li><a href="mailto:fixngoltd@gmail.com">fixngoltd@gmail.com</a></li>
    <li><a href="tel:07738737000">07738737000</a></li>
    <li style="color: rgba(255, 255, 255, 0.45);">1 Ashville Avenue, B34 6NA</li>
    <li style="color: var(--gray); font-size: 14px;">Available Mon–Sat<br>
      8am – 6pm</li>
  </ul>
</div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2025 FIX & GO Property Maintenance Ltd. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>`;

// Inject
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
});
