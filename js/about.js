/**
 * PawHealth — about.js
 * About Us Page Interactions: Lightbox for facility gallery, milestone animation
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Parallax subtle effect on hero background
  const heroBg = document.querySelector('.about-hero__bg');
  if (heroBg) {
    setTimeout(() => {
      heroBg.classList.add('parallax-active');
    }, 100);
  }

  // Team card flip/focus interaction if any
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-6px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});
