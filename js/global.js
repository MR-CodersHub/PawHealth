/**
 * PawHealth — global.js
 * Universal interactions: Dark/Light Mode, RTL Toggle, Sticky Nav,
 * Mobile Menu, Scroll Reveal, Back-to-Top, FAQ Accordions, Toasts, Lightbox
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Theme (Dark / Light Mode) with LocalStorage
  // -------------------------------------------------------------------------
  const THEME_KEY = 'pawhealth_theme';

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    setTheme(theme, false);
  }

  function setTheme(theme, save = true) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    if (save) {
      localStorage.setItem(THEME_KEY, theme);
    }
    updateThemeToggleUI(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next, true);
    if (window.showToast) {
      window.showToast('Theme Changed', `Switched to ${next} mode`, 'info', 2000);
    }
  }

  function updateThemeToggleUI(theme) {
    const btns = document.querySelectorAll('.theme-toggle-btn, [data-action="toggle-theme"]');
    btns.forEach(btn => {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      const sunIcon = btn.querySelector('.icon-sun');
      const moonIcon = btn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        }
      }
    });
  }

  // -------------------------------------------------------------------------
  // 2. RTL / LTR Direction with LocalStorage
  // -------------------------------------------------------------------------
  const DIR_KEY = 'pawhealth_dir';

  function initDirection() {
    const saved = localStorage.getItem(DIR_KEY) || 'ltr';
    setDirection(saved, false);
  }

  function setDirection(dir, save = true) {
    document.documentElement.setAttribute('dir', dir);
    if (save) {
      localStorage.setItem(DIR_KEY, dir);
    }
    const btns = document.querySelectorAll('.rtl-toggle-btn, [data-action="toggle-rtl"]');
    btns.forEach(btn => {
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to Left-to-Right' : 'Switch to Right-to-Left');
      const text = btn.querySelector('.rtl-text');
      if (text) {
        text.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      }
    });
  }

  function toggleDirection() {
    const current = document.documentElement.getAttribute('dir') || 'ltr';
    const next = current === 'rtl' ? 'ltr' : 'rtl';
    setDirection(next, true);
    if (window.showToast) {
      window.showToast('Layout Switched', `Switched layout to ${next.toUpperCase()}`, 'info', 2000);
    }
  }

  // -------------------------------------------------------------------------
  // 3. Sticky Navbar & Scroll Events
  // -------------------------------------------------------------------------
  function initStickyNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // -------------------------------------------------------------------------
  // 4. Mobile Menu Navigation
  // -------------------------------------------------------------------------
  function initMobileMenu() {
    const hamburger = document.querySelector('.navbar__hamburger');
    const mobilePanel = document.querySelector('.navbar__mobile');
    if (!hamburger || !mobilePanel) return;

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobilePanel.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on clicking backdrop/link inside
    mobilePanel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobilePanel.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Subnav toggles in mobile menu
    const subnavToggles = mobilePanel.querySelectorAll('.navbar__mobile-has-subnav');
    subnavToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const subnav = toggle.nextElementSibling;
        if (subnav && subnav.classList.contains('navbar__mobile-subnav')) {
          subnav.classList.toggle('open');
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 5. Back-to-Top Button
  // -------------------------------------------------------------------------
  function initBackToTop() {
    let btn = document.querySelector('.back-to-top');
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'back-to-top';
      btn.setAttribute('aria-label', 'Back to top of page');
      btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;
      document.body.appendChild(btn);
    }

    const checkScroll = () => {
      if (window.scrollY > 350) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -------------------------------------------------------------------------
  // 6. Scroll Reveal Animations (IntersectionObserver)
  // -------------------------------------------------------------------------
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    reveals.forEach(el => observer.observe(el));
  }

  // -------------------------------------------------------------------------
  // 7. FAQ Accordions
  // -------------------------------------------------------------------------
  function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
      const items = accordion.querySelectorAll('.accordion-item');
      items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (!header) return;

        header.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          // If accordion has data-single="true", close siblings
          if (accordion.getAttribute('data-single') !== 'false') {
            items.forEach(sibling => {
              if (sibling !== item) {
                sibling.classList.remove('active');
                const btn = sibling.querySelector('.accordion-header');
                if (btn) btn.setAttribute('aria-expanded', 'false');
              }
            });
          }

          item.classList.toggle('active', !isActive);
          header.setAttribute('aria-expanded', !isActive ? 'true' : 'false');
        });
      });
    });
  }

  // -------------------------------------------------------------------------
  // 8. Toast Notification System
  // -------------------------------------------------------------------------
  window.showToast = function (title, message, type = 'info', duration = 4000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
    } else if (type === 'error') {
      iconSvg = `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    } else if (type === 'warning') {
      iconSvg = `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
    } else {
      iconSvg = `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div class="toast__content">
        <div class="toast__title">${escapeHtml(title)}</div>
        <div class="toast__message">${escapeHtml(message)}</div>
      </div>
      <button class="toast__close" aria-label="Close notification">&times;</button>
      <div class="toast__progress" style="animation-duration: ${duration}ms"></div>
    `;

    container.appendChild(toast);

    const close = () => {
      toast.classList.add('closing');
      setTimeout(() => {
        toast.remove();
        if (container.children.length === 0) {
          container.remove();
        }
      }, 250);
    };

    toast.querySelector('.toast__close').addEventListener('click', close);
    const timer = setTimeout(close, duration);
    toast.addEventListener('mouseenter', () => clearTimeout(timer));
  };

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // -------------------------------------------------------------------------
  // 9. Simple Image Lightbox
  // -------------------------------------------------------------------------
  function initLightbox() {
    let overlay = document.querySelector('.lightbox-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      overlay.innerHTML = `
        <div class="lightbox-dialog">
          <button class="lightbox-close" aria-label="Close preview">&times;</button>
          <img src="" alt="Enlarged view" class="lightbox-img" />
          <p class="lightbox-caption"></p>
        </div>
      `;
      document.body.appendChild(overlay);

      // Lightbox inline styles
      const style = document.createElement('style');
      style.textContent = `
        .lightbox-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.85);
          z-index: 99999; display: flex; align-items: center; justify-content: center;
          opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
          padding: 20px;
        }
        .lightbox-overlay.active { opacity: 1; pointer-events: auto; }
        .lightbox-dialog { position: relative; max-width: 90vw; max-height: 90vh; display: flex; flex-direction: column; align-items: center; }
        .lightbox-img { max-width: 100%; max-height: 80vh; object-fit: contain; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
        .lightbox-caption { color: #fff; margin-top: 12px; font-size: 14px; text-align: center; }
        .lightbox-close { position: absolute; top: -40px; right: 0; background: none; border: none; color: #fff; font-size: 32px; cursor: pointer; }
      `;
      document.head.appendChild(style);

      overlay.querySelector('.lightbox-close').addEventListener('click', () => {
        overlay.classList.remove('active');
      });
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });
    }

    document.querySelectorAll('[data-lightbox]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const src = el.getAttribute('href') || el.getAttribute('data-src') || el.src;
        const caption = el.getAttribute('data-caption') || el.getAttribute('alt') || '';
        if (src) {
          overlay.querySelector('.lightbox-img').src = src;
          overlay.querySelector('.lightbox-caption').textContent = caption;
          overlay.classList.add('active');
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 10. Active Navigation Link Highlighting
  // -------------------------------------------------------------------------
  function highlightActiveNav() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    const links = document.querySelectorAll('.navbar__nav-link, .navbar__dropdown a, .navbar__mobile-nav a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPage = href.split('/').pop();
      if (linkPage === page || (page === '' && linkPage === 'index.html')) {
        link.classList.add('active');
        const parentDropdown = link.closest('.navbar__dropdown-wrap');
        if (parentDropdown) {
          const toggle = parentDropdown.querySelector('.navbar__nav-link');
          if (toggle) toggle.classList.add('active');
        }
      }
    });
  }

  // -------------------------------------------------------------------------
  // 11. Keyboard Support (Escape closes modals)
  // -------------------------------------------------------------------------
  function initKeyboardListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // Close mobile nav
        const hamburger = document.querySelector('.navbar__hamburger');
        const mobilePanel = document.querySelector('.navbar__mobile');
        if (hamburger && mobilePanel && mobilePanel.classList.contains('open')) {
          hamburger.classList.remove('open');
          mobilePanel.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }

        // Close lightbox
        const lightbox = document.querySelector('.lightbox-overlay');
        if (lightbox && lightbox.classList.contains('active')) {
          lightbox.classList.remove('active');
        }

        // Close standard modals
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) activeModal.classList.remove('active');
        const activeOverlay = document.querySelector('.overlay.active');
        if (activeOverlay) activeOverlay.classList.remove('active');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 12. Newsletter Form Global Handler
  // -------------------------------------------------------------------------
  function initNewsletterForms() {
    document.querySelectorAll('.footer__newsletter-form, .newsletter-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (!input || !input.value.trim() || !input.checkValidity()) {
          if (window.showToast) window.showToast('Invalid Email', 'Please enter a valid email address.', 'error');
          return;
        }
        if (window.showToast) {
          window.showToast('Subscribed!', 'Thank you for joining our pet wellness newsletter.', 'success');
        }
        input.value = '';
      });
    });
  }

  function initDropdowns() {
    const closeAllDropdowns = () => {
      document.querySelectorAll('.navbar__dropdown-wrap.open').forEach((wrap) => {
        wrap.classList.remove('open');
        const t = wrap.querySelector(':scope > button, :scope > a.navbar__nav-link');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    };

    window.addEventListener('pageshow', closeAllDropdowns);
    window.addEventListener('pagehide', closeAllDropdowns);

    if (document.documentElement.dataset.dropdownsInit === '1') {
      closeAllDropdowns();
      return;
    }
    document.documentElement.dataset.dropdownsInit = '1';

    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('.navbar__dropdown-wrap > button');
      if (toggle) {
        const wrap = toggle.closest('.navbar__dropdown-wrap');
        if (!wrap) return;
        e.preventDefault();
        e.stopPropagation();

        const willOpen = !wrap.classList.contains('open');
        document.querySelectorAll('.navbar__dropdown-wrap.open').forEach((other) => {
          if (other !== wrap) {
            other.classList.remove('open');
            const otherToggle = other.querySelector(':scope > button, :scope > a.navbar__nav-link');
            if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
          }
        });
        wrap.classList.toggle('open', willOpen);
        toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        return;
      }

      if (e.target.closest('.navbar__dropdown a')) {
        closeAllDropdowns();
        return;
      }

      closeAllDropdowns();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDropdowns();
      }
    });
  }

  // -------------------------------------------------------------------------
  // Initialize Global on DOMContentLoaded
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDirection();
    initStickyNavbar();
    initMobileMenu();
    initDropdowns();
    initBackToTop();
    initScrollReveal();
    initAccordions();
    initLightbox();
    highlightActiveNav();
    initKeyboardListeners();
    initNewsletterForms();

    // Bind theme & RTL buttons
    document.addEventListener('click', (e) => {
      const themeBtn = e.target.closest('.theme-toggle-btn, [data-action="toggle-theme"]');
      if (themeBtn) {
        e.preventDefault();
        toggleTheme();
      }
      const rtlBtn = e.target.closest('.rtl-toggle-btn, [data-action="toggle-rtl"]');
      if (rtlBtn) {
        e.preventDefault();
        toggleDirection();
      }
    });
  });

  // Expose helpers globally
  window.PawHealth = {
    toggleTheme,
    setTheme,
    toggleDirection,
    setDirection,
    initScrollReveal,
    initAccordions,
    highlightActiveNav
  };

})();
