/**
 * PawHealth — components.js
 * Injects consistent, accessible Navbar and Footer components across all public pages.
 */

(function () {
  'use strict';

  function getPathPrefixes() {
    var path = window.location.pathname.replace(/\\/g, '/');
    var inPages = path.indexOf('/pages/') !== -1;
    return {
      toRoot: inPages ? '../' : '',
      toPage: inPages ? '' : 'pages/'
    };
  }

  const PAW_ICON_SVG = `
    <svg class="navbar__logo-icon" width="40" height="40" viewBox="0 0 100 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="nb-shield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1A4D3A"/>
          <stop offset="100%" stop-color="#1E7A6E"/>
        </linearGradient>
        <linearGradient id="nb-shine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.18)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </linearGradient>
      </defs>
      <path d="M50 2 L96 20 L96 54 C96 78 76 98 50 108 C24 98 4 78 4 54 L4 20 Z" fill="url(#nb-shield)"/>
      <path d="M50 7 L90 23 L90 54 C90 75 72 93 50 103 C28 93 10 75 10 54 L10 23 Z" fill="url(#nb-shine)"/>
      <ellipse cx="50" cy="66" rx="16" ry="13" fill="rgba(255,255,255,0.92)"/>
      <ellipse cx="31" cy="50" rx="6.5" ry="8" transform="rotate(-18 31 50)" fill="rgba(255,255,255,0.88)"/>
      <ellipse cx="42" cy="43" rx="6" ry="7.5" transform="rotate(-6 42 43)" fill="rgba(255,255,255,0.88)"/>
      <ellipse cx="58" cy="43" rx="6" ry="7.5" transform="rotate(6 58 43)" fill="rgba(255,255,255,0.88)"/>
      <ellipse cx="69" cy="50" rx="6.5" ry="8" transform="rotate(18 69 50)" fill="rgba(255,255,255,0.88)"/>
      <path d="M43 63 C43 59.7 46.1 57 50 57 C53.9 57 57 59.7 57 63 C57 67 53.5 70 50 72.5 C46.5 70 43 67 43 63 Z" fill="#E8A020" opacity="0.95"/>
    </svg>
  `;

  const FOOTER_PAW_SVG = `
    <svg class="footer__logo-icon" width="40" height="40" viewBox="0 0 100 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="ft-shield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1A4D3A"/>
          <stop offset="100%" stop-color="#1E7A6E"/>
        </linearGradient>
        <linearGradient id="ft-shine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.18)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </linearGradient>
      </defs>
      <path d="M50 2 L96 20 L96 54 C96 78 76 98 50 108 C24 98 4 78 4 54 L4 20 Z" fill="url(#ft-shield)"/>
      <path d="M50 7 L90 23 L90 54 C90 75 72 93 50 103 C28 93 10 75 10 54 L10 23 Z" fill="url(#ft-shine)"/>
      <ellipse cx="50" cy="66" rx="16" ry="13" fill="rgba(255,255,255,0.92)"/>
      <ellipse cx="31" cy="50" rx="6.5" ry="8" transform="rotate(-18 31 50)" fill="rgba(255,255,255,0.88)"/>
      <ellipse cx="42" cy="43" rx="6" ry="7.5" transform="rotate(-6 42 43)" fill="rgba(255,255,255,0.88)"/>
      <ellipse cx="58" cy="43" rx="6" ry="7.5" transform="rotate(6 58 43)" fill="rgba(255,255,255,0.88)"/>
      <ellipse cx="69" cy="50" rx="6.5" ry="8" transform="rotate(18 69 50)" fill="rgba(255,255,255,0.88)"/>
      <path d="M43 63 C43 59.7 46.1 57 50 57 C53.9 57 57 59.7 57 63 C57 67 53.5 70 50 72.5 C46.5 70 43 67 43 63 Z" fill="#E8A020" opacity="0.95"/>
    </svg>
  `;

  // -------------------------------------------------------------------------
  // Navbar Injection
  // -------------------------------------------------------------------------
  window.injectNavbar = function (targetSelector = '#navbar-container') {
    const container = document.querySelector(targetSelector);
    if (!container) return;

    const paths = getPathPrefixes();
    const toRoot = paths.toRoot;
    const toPage = paths.toPage;

    // Check if user is logged into demo dashboard
    const isLogged = localStorage.getItem('pawhealth_demo_user');
    const profileLink = toPage + (isLogged ? 'dashboard.html' : 'login.html');
    const profileLabel = isLogged ? 'My Dashboard' : 'User Profile';
    const loginCtaHref = toPage + (isLogged ? 'dashboard.html' : 'login.html');
    const loginCtaLabel = isLogged ? 'Dashboard' : 'Login';

    const navbarHtml = `
      <header class="navbar" role="banner">
        <div class="navbar__inner">
          <!-- Brand Logo -->
          <a href="${toRoot}index.html" class="navbar__logo" aria-label="PawHealth Animal Hospital - Home">
            ${PAW_ICON_SVG}
            <div class="navbar__logo-text">
              <span class="navbar__logo-name">PawHealth</span>
              <span class="navbar__logo-tagline">Trusted Care for Every Paw</span>
            </div>
          </a>

          <!-- Main Desktop Nav -->
          <nav class="navbar__nav" aria-label="Main Navigation">
            <a href="${toRoot}index.html" class="navbar__nav-link">Home</a>
            <a href="${toPage}home2.html" class="navbar__nav-link">Home 2</a>
            <a href="${toPage}about.html" class="navbar__nav-link">About</a>

            <a href="${toPage}services.html" class="navbar__nav-link">Services</a>
            <a href="${toPage}blog.html" class="navbar__nav-link">Blog</a>

            <a href="${toPage}pricing.html" class="navbar__nav-link">Pricing</a>
            <a href="${toPage}contact.html" class="navbar__nav-link">Contact</a>
          </nav>

          <!-- Controls Right -->
          <div class="navbar__controls">
            <!-- User Profile Dropdown -->
            <div class="navbar__dropdown-wrap navbar__profile-dropdown">
              <button class="navbar__toggle-btn" aria-label="${profileLabel}" title="${profileLabel}" aria-haspopup="true" aria-expanded="false">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </button>
              <div class="navbar__dropdown navbar__dropdown--align-right" role="menu" aria-label="Profile menu">
                <a href="${toPage}dashboard.html" role="menuitem">User Dashboard</a>
                <a href="${toPage}dashboard.html?view=admin" role="menuitem">Admin Dashboard</a>
              </div>
            </div>

            <!-- Dark/Light Theme Toggle -->
            <button class="navbar__toggle-btn theme-toggle-btn" aria-label="Toggle dark/light theme" title="Toggle Theme">
              <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </button>

            <!-- RTL/LTR Toggle -->
            <button class="navbar__toggle-btn rtl-toggle-btn" aria-label="Toggle text direction" title="Toggle RTL/LTR">
              <span class="rtl-text">RTL</span>
            </button>

            <!-- Login CTA -->
            <a href="${loginCtaHref}" class="btn btn--primary btn--sm navbar__cta" aria-label="${loginCtaLabel}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
              <span>${loginCtaLabel}</span>
            </a>

            <!-- Mobile Hamburger -->
            <button class="navbar__hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <!-- Redesigned Mobile Navigation Drawer -->
        <div class="navbar__mobile" aria-label="Mobile Navigation">
          <!-- Mobile Clinic Status Bar -->
          <div class="navbar__mobile-status">
            <div class="navbar__mobile-badge">
              <span class="status-pulse-dot" aria-hidden="true"></span>
              <span>Open Today: 8:00 AM – 7:00 PM</span>
            </div>
            <a href="tel:5551234568" class="navbar__mobile-urgent" aria-label="24/7 Urgent Medical Line">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>24/7 Urgent</span>
            </a>
          </div>

          <!-- Mobile Nav Links with Icons & Subtitles -->
          <nav class="navbar__mobile-nav">
            <a href="${toRoot}index.html" class="navbar__mobile-link">
              <div class="navbar__mobile-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <div class="navbar__mobile-link-text">
                <span class="navbar__mobile-link-title">Home</span>
                <span class="navbar__mobile-link-sub">Primary Hospital & Wellness</span>
              </div>
              <svg class="navbar__mobile-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>

            <a href="${toPage}home2.html" class="navbar__mobile-link">
              <div class="navbar__mobile-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
              </div>
              <div class="navbar__mobile-link-text">
                <span class="navbar__mobile-link-title">Home 2</span>
                <span class="navbar__mobile-link-sub">Specialty Care & Treatments</span>
              </div>
              <svg class="navbar__mobile-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>

            <a href="${toPage}about.html" class="navbar__mobile-link">
              <div class="navbar__mobile-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div class="navbar__mobile-link-text">
                <span class="navbar__mobile-link-title">About Us</span>
                <span class="navbar__mobile-link-sub">Our Veterinarians & Facility</span>
              </div>
              <svg class="navbar__mobile-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>

            <a href="${toPage}services.html" class="navbar__mobile-link">
              <div class="navbar__mobile-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <div class="navbar__mobile-link-text">
                <span class="navbar__mobile-link-title">Services</span>
                <span class="navbar__mobile-link-sub">Preventive, Surgery & Diagnostics</span>
              </div>
              <svg class="navbar__mobile-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>

            <a href="${toPage}blog.html" class="navbar__mobile-link">
              <div class="navbar__mobile-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <div class="navbar__mobile-link-text">
                <span class="navbar__mobile-link-title">Blog</span>
                <span class="navbar__mobile-link-sub">Pet Health & Wellness Tips</span>
              </div>
              <svg class="navbar__mobile-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>

            <a href="${toPage}pricing.html" class="navbar__mobile-link">
              <div class="navbar__mobile-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <div class="navbar__mobile-link-text">
                <span class="navbar__mobile-link-title">Pricing</span>
                <span class="navbar__mobile-link-sub">Affordable Wellness Care Plans</span>
              </div>
              <svg class="navbar__mobile-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>

            <a href="${toPage}contact.html" class="navbar__mobile-link">
              <div class="navbar__mobile-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div class="navbar__mobile-link-text">
                <span class="navbar__mobile-link-title">Contact</span>
                <span class="navbar__mobile-link-sub">Appointments & Emergency Map</span>
              </div>
              <svg class="navbar__mobile-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </nav>

          <!-- Action CTAs -->
          <div class="navbar__mobile-actions">
            <a href="${toPage}contact.html#appointment" class="btn btn--primary btn--full navbar__mobile-book-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>Book Appointment</span>
            </a>
            <a href="${loginCtaHref}" class="btn btn--secondary btn--full navbar__mobile-portal-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>${loginCtaLabel} Portal</span>
            </a>
          </div>

          <!-- Emergency Assistance Card -->
          <div class="navbar__mobile-emergency">
            <div class="navbar__mobile-emergency-text">
              <strong>Need Immediate Assistance?</strong>
              <span>Our veterinary team is on standby 24/7</span>
            </div>
            <a href="tel:5551234568" class="btn btn--sm btn--coral navbar__mobile-call-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>(555) 123-4568</span>
            </a>
          </div>
        </div>
      </header>
    `;

    container.innerHTML = navbarHtml;

    // Trigger active nav highlighting & theme update
    if (window.PawHealth && window.PawHealth.highlightActiveNav) {
      window.PawHealth.highlightActiveNav();
    }
  };

  // -------------------------------------------------------------------------
  // Footer Injection
  // -------------------------------------------------------------------------
  window.injectFooter = function (targetSelector = '#footer-container') {
    const container = document.querySelector(targetSelector);
    if (!container) return;

    const paths = getPathPrefixes();
    const toRoot = paths.toRoot;
    const toPage = paths.toPage;

    const footerHtml = `
      <footer class="footer" role="contentinfo">
        <div class="container container--2xl">
          <div class="footer__cta">
            <div class="footer__cta-copy">
              <span class="footer__cta-eyebrow">Pet wellness updates</span>
              <h3 class="footer__cta-title">Stay Informed</h3>
              <p class="footer__cta-desc">Monthly care tips, clinic news, and seasonal health guidance from our veterinary team.</p>
            </div>
            <form class="footer__newsletter-form">
              <label class="sr-only" for="footer-newsletter-email">Email address</label>
              <input id="footer-newsletter-email" type="email" class="footer__newsletter-input" placeholder="Enter your email address" required aria-label="Email address for pet newsletter" />
              <button type="submit" class="footer__newsletter-btn">Subscribe</button>
            </form>
          </div>

          <div class="footer__main">
            <div class="footer__brand">
              <a href="${toRoot}index.html" class="footer__logo" aria-label="PawHealth Animal Hospital">
                ${FOOTER_PAW_SVG}
                <span class="footer__logo-text">
                  <span class="footer__logo-name">PawHealth</span>
                  <span class="footer__brand-tagline">Trusted Care for Every Paw</span>
                </span>
              </a>
              <p class="footer__tagline">
                Compassionate veterinary care, modern medicine, and dedicated wellness support for every stage of your pet's life. Trusted by families for preventive, surgical, and emergency care.
              </p>
              <div class="footer__social" aria-label="Follow PawHealth on social media">
                <a href="https://www.facebook.com/pawhealth" class="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/pawhealth" class="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.linkedin.com/company/pawhealth" class="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://www.youtube.com/@pawhealth" class="footer__social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon class="footer__social-youtube-play" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </a>
                <a href="https://x.com/pawhealth" class="footer__social-link" aria-label="X" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            <div class="footer__col">
              <h3 class="footer__col-title">Navigation</h3>
              <ul class="footer__links">
                <li><a href="${toRoot}index.html">Home</a></li>
                <li><a href="${toPage}home2.html">Home 2</a></li>
                <li><a href="${toPage}about.html">About</a></li>
                <li><a href="${toPage}services.html">Services</a></li>
                <li><a href="${toPage}blog.html">Blog</a></li>
                <li><a href="${toPage}pricing.html">Pricing</a></li>
                <li><a href="${toPage}contact.html">Contact</a></li>
              </ul>
            </div>

            <div class="footer__col">
              <h3 class="footer__col-title">Our Services</h3>
              <ul class="footer__links">
                <li><a href="${toPage}service-details.html">Vaccination &amp; Prevention</a></li>
                <li><a href="${toPage}services.html#checkups">Routine Health Examinations</a></li>
                <li><a href="${toPage}services.html#diagnostics">Diagnostic Imaging &amp; Lab</a></li>
                <li><a href="${toPage}services.html#surgery">Veterinary Surgery</a></li>
                <li><a href="${toPage}services.html#dental">Dental Care &amp; Hygiene</a></li>
                <li><a href="${toPage}services.html#specialized">Senior Pet Geriatric Care</a></li>
                <li><a href="${toPage}contact.html#emergency">24/7 Urgent Medical Advice</a></li>
              </ul>
            </div>

            <div class="footer__col footer__col--hours">
              <h3 class="footer__col-title">Clinic Hours</h3>
              <div class="footer__hours">
                <div class="footer__hours-item">
                  <span class="footer__hours-day">Mon - Fri</span>
                  <span class="footer__hours-time">8:00 AM - 7:00 PM</span>
                </div>
                <div class="footer__hours-item">
                  <span class="footer__hours-day">Saturday</span>
                  <span class="footer__hours-time">9:00 AM - 5:00 PM</span>
                </div>
                <div class="footer__hours-item">
                  <span class="footer__hours-day">Sunday</span>
                  <span class="footer__hours-badge">Emergency Only</span>
                </div>
              </div>
              <p class="footer__hours-note">Emergency guidance is available any time. Call us for urgent concerns.</p>
            </div>
          </div>

          <div class="footer__bottom">
            <p class="footer__copyright">
              &copy; 2026 PawHealth Veterinary Clinic &amp; Animal Hospital. All rights reserved.
            </p>
            <div class="footer__bottom-links">
              <a href="${toPage}privacy-policy.html">Privacy Policy</a>
              <a href="${toPage}terms-of-service.html">Terms of Service</a>
              <a href="${toPage}sitemap.html">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    `;

    container.innerHTML = footerHtml;
  };

})();
