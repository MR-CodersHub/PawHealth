/**
 * PawHealth — maintenance.js
 * Maintenance page: countdown timer and notification form.
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var daysEl = document.querySelector('#cdDays');
  var hoursEl = document.querySelector('#cdHours');
  var minutesEl = document.querySelector('#cdMinutes');
  var secondsEl = document.querySelector('#cdSeconds');

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(targetDate.getHours() + 6, 0, 0, 0);

    function updateCountdown() {
      var now = new Date().getTime();
      var diff = targetDate.getTime() - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }

      var d = Math.floor(diff / (1000 * 60 * 60 * 24));
      var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = String(d).padStart(2, '0');
      hoursEl.textContent = String(h).padStart(2, '0');
      minutesEl.textContent = String(m).padStart(2, '0');
      secondsEl.textContent = String(s).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  var notifyForm = document.querySelector('#notifyForm');
  if (notifyForm) {
    notifyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = notifyForm.querySelector('input[type="email"]');
      if (input && input.value) {
        if (window.showToast) {
          window.showToast('Notification Saved', "We'll let you know when maintenance is complete.", 'success');
        }
        input.value = '';
      }
    });
  }
});
