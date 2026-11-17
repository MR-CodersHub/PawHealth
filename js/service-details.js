/**
 * PawHealth — service-details.js
 * Featured Service Details Interactions: FAQ accordions, appointment link handlers
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Any service-details specific interactions
  const bookBtns = document.querySelectorAll('.sd-book-btn');
  bookBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Pre-select service in localStorage for contact form or dashboard
      localStorage.setItem('pawhealth_preferred_service', 'Vaccination & Preventive Healthcare');
    });
  });
});
