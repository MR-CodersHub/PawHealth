/**
 * PawHealth — login.js
 * Pet Owner Authentication: Login/Register tab switching, password toggle,
 * demo login session creation and redirection to Pet Owner Dashboard.
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const tabBtns = document.querySelectorAll('.auth-tab-btn');
  const loginSection = document.querySelector('#loginSection');
  const registerSection = document.querySelector('#registerSection');

  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const target = this.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      if (target === 'login') {
        if (loginSection) loginSection.classList.add('active');
        if (registerSection) registerSection.classList.remove('active');
      } else {
        if (loginSection) loginSection.classList.remove('active');
        if (registerSection) registerSection.classList.add('active');
      }
    });
  });

  // Switch links inside forms
  document.querySelectorAll('[data-switch-tab]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('data-switch-tab');
      const btn = document.querySelector(`.auth-tab-btn[data-tab="${target}"]`);
      if (btn) btn.click();
    });
  });

  // Password visibility toggle
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const input = this.previousElementSibling;
      if (input && (input.type === 'password' || input.type === 'text')) {
        const isPass = input.type === 'password';
        input.type = isPass ? 'text' : 'password';
        this.innerHTML = isPass
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
      }
    });
  });

  // Password strength meter
  const regPassword = document.querySelector('#registerPassword');
  const strengthFill = document.querySelector('.password-strength-fill');
  if (regPassword && strengthFill) {
    regPassword.addEventListener('input', function () {
      const val = this.value;
      let score = 0;
      if (val.length >= 6) score++;
      if (val.length >= 10) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      const pct = Math.min(100, score * 20);
      strengthFill.style.width = `${pct}%`;
      if (score <= 2) {
        strengthFill.style.backgroundColor = 'var(--color-coral)';
      } else if (score <= 3) {
        strengthFill.style.backgroundColor = 'var(--color-yellow)';
      } else {
        strengthFill.style.backgroundColor = '#22c55e';
      }
    });
  }

  // Demo Login Quick Action
  const demoLoginBtn = document.querySelector('#demoLoginBtn');
  if (demoLoginBtn) {
    demoLoginBtn.addEventListener('click', function () {
      const demoUser = {
        name: 'Jane Demo',
        email: 'demo@pawhealth.com',
        phone: '(555) 987-6543',
        loggedIn: true,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('pawhealth_demo_user', JSON.stringify(demoUser));

      if (window.showToast) {
        window.showToast('Demo Access Granted', 'Redirecting to your Pet Owner Dashboard...', 'success', 2000);
      }
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 700);
    });
  }

  // Login Form Submission
  const loginForm = document.querySelector('#loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = (loginForm.querySelector('[name="email"]') || {}).value || '';
      const pass = (loginForm.querySelector('[name="password"]') || {}).value || '';

      if (!email.trim() || !pass.trim()) {
        if (window.showToast) window.showToast('Validation Error', 'Please enter your email and password.', 'error');
        return;
      }

      const user = {
        name: email.split('@')[0].replace('.', ' ') || 'Pet Owner',
        email: email,
        phone: '(555) 000-1234',
        loggedIn: true,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('pawhealth_demo_user', JSON.stringify(user));

      if (window.showToast) {
        window.showToast('Welcome Back!', 'Logging in to Pet Owner Dashboard...', 'success', 1500);
      }
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 600);
    });
  }

  // Register Form Submission
  const registerForm = document.querySelector('#registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (registerForm.querySelector('[name="name"]') || {}).value || '';
      const email = (registerForm.querySelector('[name="email"]') || {}).value || '';
      const pass = (registerForm.querySelector('[name="password"]') || {}).value || '';
      const confirmPass = (registerForm.querySelector('[name="confirmPassword"]') || {}).value || '';

      if (pass !== confirmPass) {
        if (window.showToast) window.showToast('Mismatch', 'Passwords do not match. Please verify.', 'error');
        return;
      }

      const user = {
        name: name || 'New Pet Owner',
        email: email,
        phone: '(555) 123-7890',
        loggedIn: true,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('pawhealth_demo_user', JSON.stringify(user));

      if (window.showToast) {
        window.showToast('Account Created!', 'Welcome to PawHealth. Redirecting to your dashboard...', 'success', 2000);
      }
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 700);
    });
  }
});
