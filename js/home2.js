/**
 * PawHealth — home2.js
 * Home 2 specific interactions: Animals tabs switching & Timeline observer
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // -------------------------------------------------------------------------
  // Animals Care Tabs
  // -------------------------------------------------------------------------
  const tabs = document.querySelectorAll('.h2-tab');
  const panels = document.querySelectorAll('.h2-tab-panel');

  if (tabs.length && panels.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        const target = this.getAttribute('data-tab');

        // Update tabs ARIA & classes
        tabs.forEach(t => {
          const isSelected = t === this;
          t.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        });

        // Update panels visibility
        panels.forEach(panel => {
          const matches = panel.getAttribute('data-panel') === target;
          panel.classList.toggle('h2-tab-panel--hidden', !matches);
        });
      });
    });
  }

  // -------------------------------------------------------------------------
  // Timeline Animation
  // -------------------------------------------------------------------------
  const steps = document.querySelectorAll('.h2-timeline__step');
  if (steps.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 100);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    steps.forEach(step => observer.observe(step));
  }
});
