/**
 * PawHealth — contact.js
 * Contact Us: Form validation, appointment enquiry submission, and live opening status
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // -------------------------------------------------------------------------
  // Live Opening Hours Status Indicator
  // -------------------------------------------------------------------------
  const statusEl = document.querySelector('.live-clinic-status');
  if (statusEl) {
    const now = new Date();
    const day = now.getDay(); // 0 is Sun, 1 is Mon...
    const hour = now.getHours();

    let isOpen = false;
    let text = 'Closed Now — Emergency line active';

    if (day >= 1 && day <= 5) { // Mon-Fri 8am - 7pm
      if (hour >= 8 && hour < 19) {
        isOpen = true;
        text = 'Open Today until 7:00 PM';
      }
    } else if (day === 6) { // Sat 9am - 5pm
      if (hour >= 9 && hour < 17) {
        isOpen = true;
        text = 'Open Today until 5:00 PM';
      }
    } else { // Sun
      text = 'Sunday — Emergency Cases Only';
    }

    statusEl.innerHTML = `
      <span class="status-dot ${isOpen ? 'status-dot--online' : 'status-dot--busy'}"></span>
      <span>${text}</span>
    `;
  }

  // -------------------------------------------------------------------------
  // Appointment Enquiry Form Submission
  // -------------------------------------------------------------------------
  const enquiryForm = document.querySelector('#appointmentEnquiryForm');
  if (enquiryForm) {
    // Pre-fill preferred service if redirected from a service page
    const prefService = localStorage.getItem('pawhealth_preferred_service');
    if (prefService) {
      const select = enquiryForm.querySelector('select[name="service"]');
      if (select) {
        for (let opt of select.options) {
          if (opt.text.toLowerCase().includes('vaccin') || opt.value.toLowerCase().includes('vaccin')) {
            opt.selected = true;
            break;
          }
        }
      }
      localStorage.removeItem('pawhealth_preferred_service');
    }

    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = (enquiryForm.querySelector('[name="name"]') || {}).value || '';
      const email = (enquiryForm.querySelector('[name="email"]') || {}).value || '';
      const petName = (enquiryForm.querySelector('[name="petName"]') || {}).value || '';
      const date = (enquiryForm.querySelector('[name="date"]') || {}).value || '';

      if (!name.trim() || !email.trim() || !petName.trim()) {
        if (window.showToast) window.showToast('Missing Fields', 'Please complete all required fields.', 'error');
        return;
      }

      // Generate simulated reference
      const ref = 'PH-' + Math.floor(1000 + Math.random() * 9000);

      // Show confirmation
      const successModal = document.querySelector('#enquirySuccessModal');
      if (successModal) {
        const refEl = successModal.querySelector('.enquiry-ref-id');
        if (refEl) refEl.textContent = ref;
        successModal.classList.add('active');
        const overlay = document.querySelector('.overlay');
        if (overlay) overlay.classList.add('active');
      } else {
        if (window.showToast) {
          window.showToast('Enquiry Received!', `Thank you ${name}. Your reference is #${ref}. Our team will contact you within 24 hours.`, 'success', 5000);
        }
      }

      enquiryForm.reset();
    });
  }

  // Close modals
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) modal.classList.remove('active');
      const overlay = document.querySelector('.overlay');
      if (overlay) overlay.classList.remove('active');
    });
  });
});
