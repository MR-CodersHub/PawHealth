/**
 * PawHealth — pricing.js
 * Pricing & Care Plans: Interactive package comparison and estimate calculator
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Highlight selected plan when user clicks 'Choose Package'
  const planButtons = document.querySelectorAll('.pricing-card-btn');
  planButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const planName = this.getAttribute('data-plan') || 'Custom Wellness';
      localStorage.setItem('pawhealth_preferred_service', planName);
    });
  });
});
