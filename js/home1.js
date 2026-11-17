/**
 * PawHealth — home1.js
 * Home 1 specific animations: Counter increment on scroll reveal
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Animate stat counters
  const counters = document.querySelectorAll('.h1-stat__number[data-target]');
  if (!counters.length) return;

  let animated = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 2000;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
        }
      }, stepTime);
    });
  }

  // Use IntersectionObserver to trigger when stats are visible
  const statsSection = document.querySelector('.h1-stats');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          runCounters();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
  } else {
    runCounters();
  }
});
