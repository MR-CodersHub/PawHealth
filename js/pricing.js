/**
 * PawHealth — pricing.js
 * Pricing & Care Plans: Interactive package selection & billing frequency toggle
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Highlight and store selected plan when user clicks 'Choose / Book / Enroll'
  const planButtons = document.querySelectorAll('.pricing-card-btn');
  planButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const planName = this.getAttribute('data-plan') || 'Custom Wellness Plan';
      try {
        localStorage.setItem('pawhealth_preferred_service', planName);
      } catch (err) {
        console.warn('Could not save to localStorage', err);
      }

      if (typeof window.showToast === 'function') {
        window.showToast('Plan Selected', 'Selected ' + planName + '. Redirecting to appointment booking...', 'info', 3000);
      }
    });
  });

  // 2. Interactive Billing Frequency Toggle (Annual vs Monthly Installments)
  const billingToggleBtn = document.getElementById('billing-toggle-btn');
  const annualLabel = document.getElementById('billing-annual-label');
  const monthlyLabel = document.getElementById('billing-monthly-label');
  const amountElements = document.querySelectorAll('.pricing-plan-amount');
  const cadenceElements = document.querySelectorAll('.pricing-plan-cadence');

  let isMonthly = false;

  function setBillingMode(monthly) {
    isMonthly = monthly;
    if (billingToggleBtn) {
      billingToggleBtn.setAttribute('aria-pressed', isMonthly ? 'true' : 'false');
    }

    if (annualLabel && monthlyLabel) {
      if (isMonthly) {
        annualLabel.classList.remove('active');
        monthlyLabel.classList.add('active');
      } else {
        annualLabel.classList.add('active');
        monthlyLabel.classList.remove('active');
      }
    }

    amountElements.forEach(el => {
      const val = isMonthly ? el.getAttribute('data-monthly') : el.getAttribute('data-annual');
      if (val) el.textContent = val;
    });

    cadenceElements.forEach(el => {
      const val = isMonthly ? el.getAttribute('data-monthly') : el.getAttribute('data-annual');
      if (val) el.textContent = val;
    });
  }

  if (billingToggleBtn) {
    billingToggleBtn.addEventListener('click', function () {
      setBillingMode(!isMonthly);
    });
  }

  if (annualLabel) {
    annualLabel.addEventListener('click', function () {
      setBillingMode(false);
    });
  }

  if (monthlyLabel) {
    monthlyLabel.addEventListener('click', function () {
      setBillingMode(true);
    });
  }
});
