/**
 * PawHealth — coming-soon.js
 * Coming Soon & Maintenance: Interactive countdown timer
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Countdown timer set to 30 days from launch
  const daysEl = document.querySelector('#cdDays');
  const hoursEl = document.querySelector('#cdHours');
  const minutesEl = document.querySelector('#cdMinutes');
  const secondsEl = document.querySelector('#cdSeconds');

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 28);
    targetDate.setHours(targetDate.getHours() + 14);

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = String(d).padStart(2, '0');
      hoursEl.textContent = String(h).padStart(2, '0');
      minutesEl.textContent = String(m).padStart(2, '0');
      secondsEl.textContent = String(s).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Notify form
  const notifyForm = document.querySelector('#notifyForm');
  if (notifyForm) {
    notifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = notifyForm.querySelector('input[type="email"]');
      if (input && input.value) {
        if (window.showToast) {
          window.showToast('Subscribed!', "We'll notify you as soon as this feature goes live.", 'success');
        }
        input.value = '';
      }
    });
  }
});
