/**
 * PawHealth — services.js
 * Services Page Interactions: Smooth category filtering and anchor jumps
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Smooth scroll for category navigation pills
  const navPills = document.querySelectorAll('.service-category-pill, .services-cat-link');
  navPills.forEach(pill => {
    pill.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = targetElement.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
