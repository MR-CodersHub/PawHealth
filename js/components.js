/**
 * PawHealth — components.js
 * Injects consistent, accessible Navbar and Footer components across all public pages.
 */

(function () {
  'use strict';

  const PAW_ICON_SVG = `
    <svg class="navbar__logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#245C48"/>
      <!-- Main pad -->
      <path d="M20 18 C14 18, 10 22, 11 27 C12 31, 15 33, 20 33 C25 33, 28 31, 29 27 C30 22, 26 18, 20 18Z" fill="#DCEFE5"/>
      <!-- Toe pads -->
      <ellipse cx="14" cy="14" rx="2.5" ry="3.5" transform="rotate(-15 14 14)" fill="#DCEFE5"/>
      <ellipse cx="18" cy="11.5" rx="2.5" ry="3.5" transform="rotate(-5 18 11.5)" fill="#DCEFE5"/>
      <ellipse cx="22" cy="11.5" rx="2.5" ry="3.5" transform="rotate(5 22 11.5)" fill="#DCEFE5"/>
      <ellipse cx="26" cy="14" rx="2.5" ry="3.5" transform="rotate(15 26 14)" fill="#DCEFE5"/>
    </svg>
  `;

  const FOOTER_PAW_SVG = `
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#245C48"/>
      <path d="M20 18 C14 18, 10 22, 11 27 C12 31, 15 33, 20 33 C25 33, 28 31, 29 27 C30 22, 26 18, 20 18Z" fill="#FFF9F0"/>
      <ellipse cx="14" cy="14" rx="2.5" ry="3.5" transform="rotate(-15 14 14)" fill="#FFF9F0"/>
      <ellipse cx="18" cy="11.5" rx="2.5" ry="3.5" transform="rotate(-5 18 11.5)" fill="#FFF9F0"/>
      <ellipse cx="22" cy="11.5" rx="2.5" ry="3.5" transform="rotate(5 22 11.5)" fill="#FFF9F0"/>
      <ellipse cx="26" cy="14" rx="2.5" ry="3.5" transform="rotate(15 26 14)" fill="#FFF9F0"/>
    </svg>
  `;

  // -------------------------------------------------------------------------
  // Navbar Injection
  // -------------------------------------------------------------------------
  window.injectNavbar = function (targetSelector = '#navbar-container') {
    const container = document.querySelector(targetSelector);
    if (!container) return;

    // Check if user is logged into demo dashboard
    const isLogged = localStorage.getItem('pawhealth_demo_user');
    const portalLink = isLogged ? 'dashboard.html' : 'login.html';
    const portalLabel = isLogged ? 'My Dashboard' : 'Pet Owner Portal';

    const navbarHtml = `
      <header class="navbar" role="banner">
        <div class="navbar__inner">
          <!-- Brand Logo -->
          <a href="index.html" class="navbar__logo" aria-label="PawHealth Animal Hospital - Home">
            ${PAW_ICON_SVG}
            <div class="navbar__logo-text">
              <span class="navbar__logo-name">PawHealth</span>
              <span class="navbar__logo-tagline">Veterinary & Animal Hospital</span>
            </div>
          </a>

          <!-- Main Desktop Nav -->
          <nav class="navbar__nav" aria-label="Main Navigation">
            <!-- Home Dropdown -->
            <div class="navbar__dropdown-wrap">
              <a href="index.html" class="navbar__nav-link" aria-haspopup="true" aria-expanded="false">
                Home
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </a>
              <div class="navbar__dropdown" role="menu">
                <a href="index.html" role="menuitem">Home 1 — General Care</a>
                <a href="home2.html" role="menuitem">Home 2 — Specialized Care</a>
              </div>
            </div>

            <a href="about.html" class="navbar__nav-link">About Us</a>

            <!-- Services Dropdown -->
            <div class="navbar__dropdown-wrap">
              <a href="services.html" class="navbar__nav-link" aria-haspopup="true" aria-expanded="false">
                Services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </a>
              <div class="navbar__dropdown" role="menu">
                <a href="services.html" role="menuitem">All Services & Treatments</a>
                <a href="service-details.html" role="menuitem">Vaccination & Prevention</a>
              </div>
            </div>

            <!-- Blog Dropdown -->
            <div class="navbar__dropdown-wrap">
              <a href="blog.html" class="navbar__nav-link" aria-haspopup="true" aria-expanded="false">
                Blog
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </a>
              <div class="navbar__dropdown" role="menu">
                <a href="blog.html" role="menuitem">Pet Health Articles</a>
                <a href="blog-details.html" role="menuitem">Puppy Vaccination Guide</a>
              </div>
            </div>

            <a href="pricing.html" class="navbar__nav-link">Pricing</a>
            <a href="contact.html" class="navbar__nav-link">Contact Us</a>
          </nav>

          <!-- Controls Right -->
          <div class="navbar__controls">
            <!-- RTL Toggle -->
            <button class="navbar__toggle-btn rtl-toggle-btn" aria-label="Toggle text direction" title="Toggle RTL/LTR">
              <span class="rtl-text" style="font-size: 11px; font-weight: 700; letter-spacing: 0.5px;">RTL</span>
            </button>

            <!-- Dark/Light Theme Toggle -->
            <button class="navbar__toggle-btn theme-toggle-btn" aria-label="Toggle dark/light theme" title="Toggle Theme">
              <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </button>

            <!-- Pet Owner Portal Button -->
            <a href="${portalLink}" class="btn btn--outline-primary btn--sm" aria-label="${portalLabel}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              ${portalLabel}
            </a>

            <!-- Book Appointment CTA -->
            <a href="contact.html" class="btn btn--primary btn--sm" aria-label="Book an Appointment">
              Book Appointment
            </a>

            <!-- Mobile Hamburger -->
            <button class="navbar__hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Panel -->
        <div class="navbar__mobile" aria-label="Mobile Navigation">
          <div class="navbar__mobile-toggles">
            <button class="btn btn--outline-dark btn--sm rtl-toggle-btn" style="flex: 1;">
              Switch to <span class="rtl-text">RTL</span>
            </button>
            <button class="btn btn--outline-dark btn--sm theme-toggle-btn" style="flex: 1;">
              Theme Toggle
            </button>
          </div>

          <nav class="navbar__mobile-nav">
            <a href="index.html" class="navbar__mobile-has-subnav">Home ▾</a>
            <div class="navbar__mobile-subnav">
              <a href="index.html">Home 1 — General Care</a>
              <a href="home2.html">Home 2 — Specialized Care</a>
            </div>

            <a href="about.html">About Us</a>

            <a href="services.html" class="navbar__mobile-has-subnav">Services ▾</a>
            <div class="navbar__mobile-subnav">
              <a href="services.html">All Services & Treatments</a>
              <a href="service-details.html">Featured: Vaccination & Prevention</a>
            </div>

            <a href="blog.html" class="navbar__mobile-has-subnav">Blog ▾</a>
            <div class="navbar__mobile-subnav">
              <a href="blog.html">Pet Health Articles</a>
              <a href="blog-details.html">Featured: Puppy Vaccination Guide</a>
            </div>

            <a href="pricing.html">Pricing & Packages</a>
            <a href="contact.html">Contact Us</a>
            <a href="dashboard.html" style="font-weight: 700; color: var(--color-primary);">🐾 Pet Owner Dashboard</a>
          </nav>

          <div class="navbar__mobile-actions">
            <a href="${portalLink}" class="btn btn--outline-primary btn--full">${portalLabel}</a>
            <a href="contact.html" class="btn btn--primary btn--full">Book Appointment</a>
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

    const footerHtml = `
      <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="footer__main">

            <!-- Brand Column -->
            <div class="footer__brand">
              <a href="index.html" class="footer__logo" aria-label="PawHealth Animal Hospital">
                ${FOOTER_PAW_SVG}
                <span class="footer__logo-name">PawHealth</span>
              </a>
              <p class="footer__tagline">
                Compassionate veterinary care, cutting-edge animal medicine, and dedicated wellness support for your cherished pets.
              </p>
              <div class="footer__social" aria-label="Follow PawHealth on social media">
                <a href="#facebook" class="footer__social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#instagram" class="footer__social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#linkedin" class="footer__social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#youtube" class="footer__social-link" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#27332F"/></svg>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="footer__col">
              <h3 class="footer__col-title">Navigation</h3>
              <ul class="footer__links">
                <li><a href="index.html">Home 1 — General Care</a></li>
                <li><a href="home2.html">Home 2 — Specialized Care</a></li>
                <li><a href="about.html">About Our Clinic</a></li>
                <li><a href="about.html#team">Meet Our Vets</a></li>
                <li><a href="pricing.html">Pricing & Packages</a></li>
                <li><a href="dashboard.html">Pet Owner Dashboard</a></li>
                <li><a href="contact.html">Contact & Emergency</a></li>
              </ul>
            </div>

            <!-- Services -->
            <div class="footer__col">
              <h3 class="footer__col-title">Our Services</h3>
              <ul class="footer__links">
                <li><a href="service-details.html">Vaccination & Prevention</a></li>
                <li><a href="services.html#checkups">Routine Health Examinations</a></li>
                <li><a href="services.html#diagnostics">Diagnostic Imaging & Lab</a></li>
                <li><a href="services.html#surgery">Veterinary Surgery</a></li>
                <li><a href="services.html#dental">Dental Care & Hygiene</a></li>
                <li><a href="services.html#specialized">Senior Pet Geriatric Care</a></li>
                <li><a href="contact.html#emergency">24/7 Urgent Medical Advice</a></li>
              </ul>
            </div>

            <!-- Hours & Newsletter -->
            <div class="footer__col">
              <h3 class="footer__col-title">Clinic Hours</h3>
              <div class="footer__hours" style="margin-bottom: var(--space-6);">
                <div class="footer__hours-item">
                  <span class="footer__hours-day">Mon – Fri</span>
                  <span class="footer__hours-time">8:00 AM – 7:00 PM</span>
                </div>
                <div class="footer__hours-item">
                  <span class="footer__hours-day">Saturday</span>
                  <span class="footer__hours-time">9:00 AM – 5:00 PM</span>
                </div>
                <div class="footer__hours-item">
                  <span class="footer__hours-day">Sunday</span>
                  <span class="footer__hours-badge">Emergency Only</span>
                </div>
              </div>

              <h3 class="footer__col-title" style="margin-bottom: var(--space-3);">Stay Informed</h3>
              <p class="footer__newsletter-desc">Monthly pet wellness guidance from our veterinary experts.</p>
              <form class="footer__newsletter-form">
                <input type="email" class="footer__newsletter-input" placeholder="Your email address" required aria-label="Email address for pet newsletter" />
                <button type="submit" class="footer__newsletter-btn">Subscribe</button>
              </form>
            </div>

          </div>

          <!-- Footer Bottom Bar -->
          <div class="footer__bottom">
            <p class="footer__copyright">
              &copy; 2026 PawHealth Veterinary Clinic & Animal Hospital. All rights reserved.
            </p>
            <div class="footer__bottom-links">
              <a href="coming-soon.html">Privacy Policy</a>
              <a href="coming-soon.html">Terms of Service</a>
              <a href="404.html">404 Error Page</a>
              <a href="coming-soon.html">Maintenance Notice</a>
            </div>
          </div>
        </div>
      </footer>
    `;

    container.innerHTML = footerHtml;
  };

})();
