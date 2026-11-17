/**
 * PawHealth — dashboard.js
 * Comprehensive Pet Owner Dashboard Single-Page Application
 * Handles: Panel navigation, multi-step appointment booking, pet CRUD,
 * status filtering, expandable medical history, printable vaccination certificate,
 * document preview/download simulation, profile updates, theme sync, and logout.
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Initial State & Demo Data
  // -------------------------------------------------------------------------
  const defaultUser = {
    name: 'Jane Demo',
    email: 'demo@pawhealth.com',
    phone: '(555) 987-6543',
    address: '456 Pet Owners Lane, Animal District, City 10001',
    loggedIn: true
  };

  let currentUser = JSON.parse(localStorage.getItem('pawhealth_demo_user')) || defaultUser;

  let pets = [
    {
      id: 'pet-1',
      name: 'Max',
      type: 'Dog',
      breed: 'Labrador Retriever',
      gender: 'Male',
      dob: '2023-03-12',
      age: '3 yrs',
      weight: '28.5 kg',
      color: 'Golden Yellow',
      microchip: '985141005123456',
      allergies: 'None known',
      conditions: 'Mild hip sensitivity (managed with diet)',
      notes: 'Very friendly, loves chicken treats, slightly timid around loud diagnostic tools.',
      photo: 'https://picsum.photos/seed/max-dog-profile/400/400'
    },
    {
      id: 'pet-2',
      name: 'Luna',
      type: 'Cat',
      breed: 'Persian Longhair',
      gender: 'Female',
      dob: '2021-07-08',
      age: '5 yrs',
      weight: '4.2 kg',
      color: 'White & Grey',
      microchip: '985141005654321',
      allergies: 'Chicken-based proteins',
      conditions: 'Hairball tendency in shedding season',
      notes: 'Indoor only. Prefers low-noise handling and gentle towel wraps.',
      photo: 'https://picsum.photos/seed/luna-cat-profile/400/400'
    }
  ];

  let appointments = [
    {
      id: 'apt-101',
      petId: 'pet-1',
      petName: 'Max',
      petType: 'Dog',
      service: 'General Wellness Checkup',
      vet: 'Dr. Sarah Mitchell',
      date: '2026-11-25',
      time: '10:00 AM',
      status: 'confirmed',
      urgency: 'Routine',
      reason: 'Annual routine health assessment and weight check.',
      notes: 'Max is healthy and alert. Teeth showing minor tartar accumulation; routine cleaning advised in early 2027.'
    },
    {
      id: 'apt-102',
      petId: 'pet-2',
      petName: 'Luna',
      petType: 'Cat',
      service: 'Vaccination Booster (FVRCP)',
      vet: 'Dr. Priya Sharma',
      date: '2026-12-02',
      time: '02:00 PM',
      status: 'pending',
      urgency: 'Routine',
      reason: 'Scheduled core vaccination booster and general physical exam.',
      notes: 'Pending final clinic schedule confirmation.'
    },
    {
      id: 'apt-103',
      petId: 'pet-1',
      petName: 'Max',
      petType: 'Dog',
      service: 'Dental Cleaning & Tartar Removal',
      vet: 'Dr. James Okoye',
      date: '2026-10-10',
      time: '11:00 AM',
      status: 'completed',
      urgency: 'Non-urgent concern',
      reason: 'Oral exam and ultrasonic scaling.',
      notes: 'Ultrasonic scaling completed under mild sedation. Gum health fair, no tooth extractions required.'
    },
    {
      id: 'apt-104',
      petId: 'pet-2',
      petName: 'Luna',
      petType: 'Cat',
      service: 'Annual Wellness & Blood Panel',
      vet: 'Dr. Sarah Mitchell',
      date: '2026-09-05',
      time: '09:30 AM',
      status: 'completed',
      urgency: 'Routine',
      reason: 'Yearly feline blood profile and kidney monitoring.',
      notes: 'Kidney and liver values fully within normal range. Coat condition excellent.'
    },
    {
      id: 'apt-105',
      petId: 'pet-1',
      petName: 'Max',
      petType: 'Dog',
      service: 'Diagnostic Joint Evaluation',
      vet: 'Dr. James Okoye',
      date: '2026-07-15',
      time: '10:00 AM',
      status: 'completed',
      urgency: 'Concern',
      reason: 'Occasional stiffness after extended exercise.',
      notes: 'Bilateral elbow radiograph showed mild early remodeling. Joint supplements recommended.'
    }
  ];

  let notifications = [
    {
      id: 'notif-1',
      icon: '📅',
      title: 'Appointment Confirmed',
      message: 'Max\'s General Checkup on 25 Nov 2026 at 10:00 AM is confirmed.',
      time: '2 hours ago',
      read: false
    },
    {
      id: 'notif-2',
      icon: '💉',
      title: 'Vaccination Reminder',
      message: 'Max\'s Rabies Booster is due in 28 days (15 Dec 2026).',
      time: '1 day ago',
      read: false
    },
    {
      id: 'notif-3',
      icon: '📋',
      title: 'Clinical Notes Updated',
      message: 'Dr. Mitchell updated consultation summaries for Max.',
      time: '3 days ago',
      read: false
    },
    {
      id: 'notif-4',
      icon: '✅',
      title: 'Visit Completed',
      message: 'Luna\'s Annual Wellness Visit was successfully completed.',
      time: '2 months ago',
      read: true
    }
  ];

  // -------------------------------------------------------------------------
  // 2. Navigation Between Dashboard Panels
  // -------------------------------------------------------------------------
  function setupNavigation() {
    const navItems = document.querySelectorAll('.sidebar-nav-item[data-panel], [data-nav-target]');
    const panels = document.querySelectorAll('.dashboard-panel');
    const pageTitle = document.querySelector('.topbar-title');

    function switchPanel(panelId) {
      panels.forEach(p => p.classList.remove('active'));
      const targetPanel = document.querySelector(`#panel-${panelId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      navItems.forEach(item => {
        if (item.classList.contains('sidebar-nav-item')) {
          item.classList.toggle('active', item.getAttribute('data-panel') === panelId);
        }
      });

      // Update topbar title
      if (pageTitle) {
        const activeNav = document.querySelector(`.sidebar-nav-item[data-panel="${panelId}"] .nav-label`);
        if (activeNav) {
          pageTitle.textContent = activeNav.textContent;
        }
      }

      // Close mobile sidebar if open
      closeMobileSidebar();
    }

    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('data-panel') || item.getAttribute('data-nav-target');
        if (target === 'logout') {
          openLogoutModal();
        } else if (target) {
          switchPanel(target);
        }
      });
    });

    // Handle hash on load (e.g. dashboard.html#book)
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      switchPanel(hash);
    }
  }

  // -------------------------------------------------------------------------
  // 3. User Info & Header Synchronization
  // -------------------------------------------------------------------------
  function syncUserInfo() {
    const nameEls = document.querySelectorAll('.user-display-name, .sidebar-user-name');
    nameEls.forEach(el => el.textContent = currentUser.name || 'Jane Demo');

    const emailEls = document.querySelectorAll('.user-display-email');
    emailEls.forEach(el => el.textContent = currentUser.email || 'demo@pawhealth.com');

    const phoneEls = document.querySelectorAll('.user-display-phone');
    phoneEls.forEach(el => el.textContent = currentUser.phone || '(555) 987-6543');

    // Fill profile form if present
    const pForm = document.querySelector('#profileForm');
    if (pForm) {
      (pForm.querySelector('[name="name"]') || {}).value = currentUser.name || '';
      (pForm.querySelector('[name="email"]') || {}).value = currentUser.email || '';
      (pForm.querySelector('[name="phone"]') || {}).value = currentUser.phone || '';
      (pForm.querySelector('[name="address"]') || {}).value = currentUser.address || '';
    }
  }

  // -------------------------------------------------------------------------
  // 4. Mobile Sidebar Drawer Handling
  // -------------------------------------------------------------------------
  function setupMobileSidebar() {
    const hamburger = document.querySelector('.topbar-hamburger');
    const sidebar = document.querySelector('.dashboard-sidebar');
    const overlay = document.querySelector('.dashboard-sidebar-overlay');

    if (!hamburger || !sidebar) return;

    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('active');
    });

    if (overlay) {
      overlay.addEventListener('click', closeMobileSidebar);
    }
  }

  function closeMobileSidebar() {
    const sidebar = document.querySelector('.dashboard-sidebar');
    const overlay = document.querySelector('.dashboard-sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  }

  // -------------------------------------------------------------------------
  // 5. Multi-Step Appointment Booking System (8 Steps)
  // -------------------------------------------------------------------------
  let bookingState = {
    petId: 'pet-1',
    petName: 'Max',
    service: 'General Wellness Checkup',
    vet: 'Dr. Sarah Mitchell',
    date: '2026-11-28',
    time: '10:00 AM',
    reason: 'Routine checkup and general physical examination.',
    urgency: 'Routine'
  };

  let currentBookingStep = 1;

  function setupBookingFlow() {
    const stepPanels = document.querySelectorAll('.booking-step-panel');
    const stepIndicators = document.querySelectorAll('.booking-step-indicator');
    const prevBtn = document.querySelector('#bookingPrevBtn');
    const nextBtn = document.querySelector('#bookingNextBtn');

    function showStep(stepNum) {
      currentBookingStep = stepNum;

      stepPanels.forEach(p => {
        p.classList.toggle('active', parseInt(p.getAttribute('data-step'), 10) === stepNum);
      });

      stepIndicators.forEach(ind => {
        const s = parseInt(ind.getAttribute('data-step'), 10);
        ind.classList.toggle('active', s === stepNum);
        ind.classList.toggle('completed', s < stepNum);
      });

      // Button visibility
      if (prevBtn) {
        prevBtn.style.display = (stepNum > 1 && stepNum < 8) ? 'inline-flex' : 'none';
      }
      if (nextBtn) {
        if (stepNum === 7) {
          nextBtn.textContent = 'Submit Booking Request';
          nextBtn.className = 'btn btn--primary';
        } else if (stepNum === 8) {
          nextBtn.style.display = 'none';
        } else {
          nextBtn.textContent = 'Continue to Next Step';
          nextBtn.className = 'btn btn--primary';
        }
      }

      // If step 7, update review summary
      if (stepNum === 7) {
        updateBookingReview();
      }
    }

    // Next / Prev listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentBookingStep === 7) {
          // Submit request
          submitBookingRequest();
        } else if (currentBookingStep < 7) {
          showStep(currentBookingStep + 1);
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentBookingStep > 1) {
          showStep(currentBookingStep - 1);
        }
      });
    }

    // Step 1: Pet Selection Cards
    document.querySelectorAll('.booking-pet-card').forEach(card => {
      card.addEventListener('click', function () {
        document.querySelectorAll('.booking-pet-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        bookingState.petId = this.getAttribute('data-pet-id');
        bookingState.petName = this.getAttribute('data-pet-name');
      });
    });

    // Step 2: Service Selection Cards
    document.querySelectorAll('.booking-service-card').forEach(card => {
      card.addEventListener('click', function () {
        document.querySelectorAll('.booking-service-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        bookingState.service = this.getAttribute('data-service-name');
      });
    });

    // Step 3: Vet Selection Cards
    document.querySelectorAll('.booking-vet-card').forEach(card => {
      card.addEventListener('click', function () {
        document.querySelectorAll('.booking-vet-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        bookingState.vet = this.getAttribute('data-vet-name');
      });
    });

    // Step 4: Date Selection (Calendar Grid)
    document.querySelectorAll('.calendar-day:not(.disabled)').forEach(day => {
      day.addEventListener('click', function () {
        document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
        this.classList.add('selected');
        bookingState.date = this.getAttribute('data-date');
      });
    });

    // Step 5: Time Slot Selection
    document.querySelectorAll('.time-slot-btn:not(.booked)').forEach(slot => {
      slot.addEventListener('click', function () {
        document.querySelectorAll('.time-slot-btn').forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
        bookingState.time = this.getAttribute('data-time');
      });
    });

    // Step 6: Reason input
    const reasonInput = document.querySelector('#bookingReasonInput');
    const urgencySelect = document.querySelector('#bookingUrgencySelect');
    if (reasonInput) {
      reasonInput.addEventListener('input', () => {
        bookingState.reason = reasonInput.value || 'Routine examination';
      });
    }
    if (urgencySelect) {
      urgencySelect.addEventListener('change', () => {
        bookingState.urgency = urgencySelect.value;
      });
    }
  }

  function updateBookingReview() {
    const el = document.querySelector('#bookingReviewSummary');
    if (!el) return;

    el.innerHTML = `
      <div class="review-details-grid">
        <div class="review-item">
          <span class="review-label">Selected Pet:</span>
          <strong>🐾 ${bookingState.petName}</strong>
        </div>
        <div class="review-item">
          <span class="review-label">Service:</span>
          <strong>🩺 ${bookingState.service}</strong>
        </div>
        <div class="review-item">
          <span class="review-label">Veterinarian:</span>
          <strong>👨‍⚕️ ${bookingState.vet}</strong>
        </div>
        <div class="review-item">
          <span class="review-label">Preferred Date:</span>
          <strong>📅 ${bookingState.date}</strong>
        </div>
        <div class="review-item">
          <span class="review-label">Time Slot:</span>
          <strong>⏰ ${bookingState.time}</strong>
        </div>
        <div class="review-item">
          <span class="review-label">Urgency Level:</span>
          <strong>⚠️ ${bookingState.urgency}</strong>
        </div>
        <div class="review-item full-width">
          <span class="review-label">Reason for Visit:</span>
          <p>${bookingState.reason || 'Routine wellness check'}</p>
        </div>
      </div>
    `;
  }

  function submitBookingRequest() {
    const refCode = 'PH-2026-' + Math.floor(1000 + Math.random() * 9000);

    // Add to appointments array as pending
    const newApt = {
      id: 'apt-' + Math.floor(Math.random() * 90000),
      petId: bookingState.petId,
      petName: bookingState.petName,
      petType: 'Pet',
      service: bookingState.service,
      vet: bookingState.vet,
      date: bookingState.date,
      time: bookingState.time,
      status: 'pending',
      urgency: bookingState.urgency,
      reason: bookingState.reason,
      notes: 'New booking request submitted via online portal. Clinic verification in progress.'
    };
    appointments.unshift(newApt);
    renderAppointmentsList('all');

    // Update Step 8 confirmation view
    const refEl = document.querySelector('#bookingConfirmationRef');
    if (refEl) refEl.textContent = refCode;

    // Show step 8
    const stepPanels = document.querySelectorAll('.booking-step-panel');
    stepPanels.forEach(p => p.classList.remove('active'));
    const step8 = document.querySelector('.booking-step-panel[data-step="8"]');
    if (step8) step8.classList.add('active');

    // Hide wizard buttons
    const prevBtn = document.querySelector('#bookingPrevBtn');
    const nextBtn = document.querySelector('#bookingNextBtn');
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';

    if (window.showToast) {
      window.showToast('Booking Submitted', `Reference #${refCode}. We will confirm your slot within 24 hours.`, 'success', 4000);
    }
  }

  // -------------------------------------------------------------------------
  // 6. Appointments Filtering & Details Modal
  // -------------------------------------------------------------------------
  function setupAppointments() {
    const filterTabs = document.querySelectorAll('.apt-filter-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        filterTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-status-filter') || 'all';
        renderAppointmentsList(filter);
      });
    });

    renderAppointmentsList('all');
  }

  function renderAppointmentsList(filter = 'all') {
    const container = document.querySelector('#appointmentsListContainer');
    if (!container) return;

    const filtered = appointments.filter(a => filter === 'all' || a.status === filter);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card">
          <p>No appointments found with status: <strong>${filter}</strong></p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(apt => `
      <div class="db-apt-card" data-apt-id="${apt.id}">
        <div class="db-apt-card__header">
          <div class="db-apt-card__pet-info">
            <span class="db-apt-card__avatar">🐾</span>
            <div>
              <h4 class="db-apt-card__pet-name">${apt.petName}</h4>
              <span class="db-apt-card__service">${apt.service}</span>
            </div>
          </div>
          <span class="badge badge--${getStatusBadgeClass(apt.status)}">${capitalize(apt.status)}</span>
        </div>

        <div class="db-apt-card__body">
          <div class="db-apt-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span>${apt.date} at ${apt.time}</span>
          </div>
          <div class="db-apt-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>${apt.vet}</span>
          </div>
        </div>

        <div class="db-apt-card__actions">
          <button class="btn btn--outline-dark btn--sm view-apt-btn" data-id="${apt.id}">View Details</button>
          ${apt.status === 'confirmed' || apt.status === 'pending' ? `
            <button class="btn btn--outline-dark btn--sm reschedule-apt-btn" data-id="${apt.id}">Reschedule</button>
            <button class="btn btn--outline-coral btn--sm cancel-apt-btn" data-id="${apt.id}">Cancel</button>
          ` : ''}
        </div>
      </div>
    `).join('');

    // Attach click events
    container.querySelectorAll('.view-apt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const aptId = btn.getAttribute('data-id');
        const apt = appointments.find(a => a.id === aptId);
        if (apt) openAppointmentModal(apt);
      });
    });

    container.querySelectorAll('.cancel-apt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const aptId = btn.getAttribute('data-id');
        const apt = appointments.find(a => a.id === aptId);
        if (apt && confirm(`Are you sure you want to request cancellation for ${apt.petName}'s appointment on ${apt.date}?`)) {
          apt.status = 'cancelled';
          renderAppointmentsList(filter);
          if (window.showToast) window.showToast('Cancelled', 'Your appointment cancellation request was recorded.', 'info');
        }
      });
    });

    container.querySelectorAll('.reschedule-apt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const aptId = btn.getAttribute('data-id');
        const apt = appointments.find(a => a.id === aptId);
        if (apt) {
          if (window.showToast) window.showToast('Reschedule', `To reschedule ${apt.petName}'s visit, please pick a new slot in Book Appointment or call (555) 123-4567.`, 'info', 4000);
        }
      });
    });
  }

  function getStatusBadgeClass(status) {
    switch (status) {
      case 'confirmed': return 'success';
      case 'pending': return 'warning';
      case 'completed': return 'neutral';
      case 'cancelled': return 'danger';
      case 'rescheduled': return 'teal';
      default: return 'neutral';
    }
  }

  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function openAppointmentModal(apt) {
    const modal = document.querySelector('#appointmentDetailsModal');
    if (!modal) return;

    modal.querySelector('.apt-modal-title').textContent = `${apt.petName} — ${apt.service}`;
    modal.querySelector('.apt-modal-date').textContent = `${apt.date} at ${apt.time}`;
    modal.querySelector('.apt-modal-vet').textContent = apt.vet;
    modal.querySelector('.apt-modal-status').textContent = capitalize(apt.status);
    modal.querySelector('.apt-modal-reason').textContent = apt.reason || 'None specified';
    modal.querySelector('.apt-modal-notes').textContent = apt.notes || 'No clinical notes recorded yet.';

    modal.classList.add('active');
    const overlay = document.querySelector('.overlay');
    if (overlay) overlay.classList.add('active');
  }

  // -------------------------------------------------------------------------
  // 7. Pets Management (Add & Edit Pet Modals)
  // -------------------------------------------------------------------------
  function setupPets() {
    renderPetsGrid();

    const addPetBtn = document.querySelector('#addPetBtn');
    const modal = document.querySelector('#petModal');
    const petForm = document.querySelector('#petForm');

    if (addPetBtn && modal) {
      addPetBtn.addEventListener('click', () => {
        if (petForm) petForm.reset();
        modal.querySelector('.modal__title').textContent = 'Add New Pet Profile';
        modal.classList.add('active');
        const overlay = document.querySelector('.overlay');
        if (overlay) overlay.classList.add('active');
      });
    }

    if (petForm) {
      petForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (petForm.querySelector('[name="petName"]') || {}).value || 'New Pet';
        const type = (petForm.querySelector('[name="petType"]') || {}).value || 'Dog';
        const breed = (petForm.querySelector('[name="breed"]') || {}).value || 'Mixed Breed';
        const age = (petForm.querySelector('[name="age"]') || {}).value || '1 yr';
        const weight = (petForm.querySelector('[name="weight"]') || {}).value || '5 kg';
        const allergies = (petForm.querySelector('[name="allergies"]') || {}).value || 'None known';
        const notes = (petForm.querySelector('[name="notes"]') || {}).value || 'Friendly';

        const newPet = {
          id: 'pet-' + (pets.length + 1),
          name: name,
          type: type,
          breed: breed,
          gender: 'Not specified',
          dob: '2025-01-01',
          age: age,
          weight: weight,
          color: 'Standard',
          microchip: 'PH-' + Math.floor(100000000 + Math.random() * 900000000),
          allergies: allergies,
          conditions: 'None reported',
          notes: notes,
          photo: type.toLowerCase() === 'cat'
            ? 'https://picsum.photos/seed/cat-profile-new/400/400'
            : 'https://picsum.photos/seed/dog-profile-new/400/400'
        };

        pets.push(newPet);
        renderPetsGrid();
        modal.classList.remove('active');
        const overlay = document.querySelector('.overlay');
        if (overlay) overlay.classList.remove('active');

        if (window.showToast) {
          window.showToast('Pet Added!', `${name}'s health record has been created.`, 'success');
        }
      });
    }
  }

  function renderPetsGrid() {
    const container = document.querySelector('#petsGridContainer');
    if (!container) return;

    container.innerHTML = pets.map(pet => `
      <div class="db-pet-profile-card" data-pet-id="${pet.id}">
        <div class="db-pet-card__header">
          <img src="${pet.photo}" alt="${pet.name}" class="db-pet-card__photo" />
          <div class="db-pet-card__title-wrap">
            <h3 class="db-pet-card__name">${pet.name}</h3>
            <span class="db-pet-card__breed">${pet.type} · ${pet.breed}</span>
            <span class="badge badge--primary" style="margin-top: 4px;">Age: ${pet.age}</span>
          </div>
        </div>

        <div class="db-pet-card__vitals">
          <div class="vital-item">
            <span class="vital-label">Weight</span>
            <strong>${pet.weight}</strong>
          </div>
          <div class="vital-item">
            <span class="vital-label">Microchip</span>
            <strong>${pet.microchip ? pet.microchip.slice(-6) : 'N/A'}</strong>
          </div>
          <div class="vital-item">
            <span class="vital-label">Allergies</span>
            <strong>${pet.allergies}</strong>
          </div>
        </div>

        <div class="db-pet-card__notes">
          <strong>Care Notes:</strong>
          <p>${pet.notes}</p>
        </div>

        <div class="db-pet-card__actions">
          <button class="btn btn--outline-dark btn--sm book-for-pet-btn" data-pet-id="${pet.id}">Book Visit</button>
          <button class="btn btn--outline-primary btn--sm view-pet-rec-btn" data-pet-id="${pet.id}">Records</button>
        </div>
      </div>
    `).join('') + `
      <div class="db-add-pet-cta-card" id="addPetBtn">
        <div class="db-add-pet-cta__icon">+</div>
        <h4>Add Another Pet</h4>
        <p>Register a dog, cat, or other family pet</p>
      </div>
    `;

    // Re-bind add pet card
    const newAddBtn = container.querySelector('#addPetBtn');
    if (newAddBtn) {
      newAddBtn.addEventListener('click', () => {
        const modal = document.querySelector('#petModal');
        if (modal) {
          modal.classList.add('active');
          const overlay = document.querySelector('.overlay');
          if (overlay) overlay.classList.add('active');
        }
      });
    }

    // Book for pet links
    container.querySelectorAll('.book-for-pet-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const petId = btn.getAttribute('data-pet-id');
        const p = pets.find(item => item.id === petId);
        if (p) {
          bookingState.petId = p.id;
          bookingState.petName = p.name;
        }
        const bookNav = document.querySelector('.sidebar-nav-item[data-panel="book"]');
        if (bookNav) bookNav.click();
      });
    });

    // View records
    container.querySelectorAll('.view-pet-rec-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const vaxNav = document.querySelector('.sidebar-nav-item[data-panel="vaccinations"]');
        if (vaxNav) vaxNav.click();
      });
    });
  }

  // -------------------------------------------------------------------------
  // 8. Vaccination Records (Filtering & Print Function)
  // -------------------------------------------------------------------------
  function setupVaccinations() {
    const tabs = document.querySelectorAll('.vax-pet-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const targetPet = this.getAttribute('data-pet');
        renderVaccinationTable(targetPet);
      });
    });

    const printBtn = document.querySelector('#printVaxCertBtn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  function renderVaccinationTable(petName = 'Max') {
    const container = document.querySelector('#vaxTableContainer');
    if (!container) return;

    if (petName === 'Max') {
      container.innerHTML = `
        <table class="db-table">
          <thead>
            <tr>
              <th>Vaccine Name</th>
              <th>Date Given</th>
              <th>Next Due</th>
              <th>Veterinarian</th>
              <th>Status</th>
              <th>Clinical Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Distemper (DHPPi)</strong></td>
              <td>15 Mar 2024</td>
              <td>15 Mar 2027</td>
              <td>Dr. Sarah Mitchell</td>
              <td><span class="badge badge--success">✅ Up to Date</span></td>
              <td>Standard 3-year canine booster</td>
            </tr>
            <tr>
              <td><strong>Rabies</strong></td>
              <td>15 Dec 2023</td>
              <td>15 Dec 2026</td>
              <td>Dr. Sarah Mitchell</td>
              <td><span class="badge badge--warning">⚠️ Due Soon</span></td>
              <td>Annual booster required next month</td>
            </tr>
            <tr>
              <td><strong>Leptospirosis</strong></td>
              <td>20 Apr 2026</td>
              <td>20 Apr 2027</td>
              <td>Dr. Priya Sharma</td>
              <td><span class="badge badge--success">✅ Up to Date</span></td>
              <td>Lifestyle protection administered</td>
            </tr>
            <tr>
              <td><strong>Bordetella (Kennel Cough)</strong></td>
              <td>01 Jun 2025</td>
              <td>01 Jun 2026</td>
              <td>Dr. Priya Sharma</td>
              <td><span class="badge badge--danger">❌ Overdue</span></td>
              <td>Recommend renewal prior to boarding</td>
            </tr>
          </tbody>
        </table>
      `;
    } else {
      container.innerHTML = `
        <table class="db-table">
          <thead>
            <tr>
              <th>Vaccine Name</th>
              <th>Date Given</th>
              <th>Next Due</th>
              <th>Veterinarian</th>
              <th>Status</th>
              <th>Clinical Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>FVRCP Core Feline</strong></td>
              <td>08 Jul 2026</td>
              <td>08 Jul 2029</td>
              <td>Dr. Sarah Mitchell</td>
              <td><span class="badge badge--success">✅ Up to Date</span></td>
              <td>3-year protection against panleukopenia, herpes, calicivirus</td>
            </tr>
            <tr>
              <td><strong>Feline Rabies</strong></td>
              <td>08 Jul 2026</td>
              <td>08 Jul 2027</td>
              <td>Dr. Sarah Mitchell</td>
              <td><span class="badge badge--success">✅ Up to Date</span></td>
              <td>Annual feline rabies booster completed</td>
            </tr>
          </tbody>
        </table>
      `;
    }
  }

  // -------------------------------------------------------------------------
  // 9. Medical History (Accordion expansion & pet filter)
  // -------------------------------------------------------------------------
  function setupMedicalHistory() {
    const petFilter = document.querySelector('#medHistoryPetFilter');
    if (petFilter) {
      petFilter.addEventListener('change', () => {
        const val = petFilter.value;
        document.querySelectorAll('.med-history-item').forEach(item => {
          if (val === 'all' || item.getAttribute('data-pet') === val) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }

    // Toggle expand on med history cards
    document.querySelectorAll('.med-history-item').forEach(item => {
      const header = item.querySelector('.med-history-header');
      if (header) {
        header.addEventListener('click', () => {
          item.classList.toggle('expanded');
        });
      }
    });
  }

  // -------------------------------------------------------------------------
  // 10. Prescriptions & Documents Simulation
  // -------------------------------------------------------------------------
  function setupDocuments() {
    const docTabs = document.querySelectorAll('.doc-tab-btn');
    const docPanels = document.querySelectorAll('.doc-tab-panel');

    docTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        docTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const target = this.getAttribute('data-doc-tab');
        docPanels.forEach(p => {
          p.classList.toggle('active', p.getAttribute('data-doc-panel') === target);
        });
      });
    });

    // Simulated downloads
    document.querySelectorAll('.doc-download-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const docName = btn.getAttribute('data-doc-name') || 'Medical Document';
        if (window.showToast) {
          window.showToast('Download Started', `Downloading simulated PDF: ${docName}`, 'info', 2500);
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 11. Notifications System
  // -------------------------------------------------------------------------
  function setupNotifications() {
    const markAllBtn = document.querySelector('#markAllNotifsReadBtn');
    if (markAllBtn) {
      markAllBtn.addEventListener('click', () => {
        notifications.forEach(n => n.read = true);
        renderNotificationsList();
        updateNotificationBadges();
        if (window.showToast) window.showToast('Notifications', 'All notifications marked as read.', 'info');
      });
    }

    renderNotificationsList();
    updateNotificationBadges();
  }

  function renderNotificationsList() {
    const container = document.querySelector('#notificationsListContainer');
    if (!container) return;

    container.innerHTML = notifications.map(notif => `
      <div class="db-notif-item ${notif.read ? 'read' : 'unread'}" data-id="${notif.id}">
        <span class="db-notif-icon">${notif.icon}</span>
        <div class="db-notif-content">
          <div class="db-notif-title-row">
            <h4 class="db-notif-title">${notif.title}</h4>
            <span class="db-notif-time">${notif.time}</span>
          </div>
          <p class="db-notif-msg">${notif.message}</p>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.db-notif-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const n = notifications.find(x => x.id === id);
        if (n) {
          n.read = true;
          item.classList.remove('unread');
          item.classList.add('read');
          updateNotificationBadges();
        }
      });
    });
  }

  function updateNotificationBadges() {
    const unreadCount = notifications.filter(n => !n.read).length;
    document.querySelectorAll('.notif-badge-count').forEach(badge => {
      badge.textContent = unreadCount;
      badge.style.display = unreadCount > 0 ? 'inline-block' : 'none';
    });
  }

  // -------------------------------------------------------------------------
  // 12. Profile & Security Updates
  // -------------------------------------------------------------------------
  function setupProfile() {
    const pTabs = document.querySelectorAll('.profile-tab-btn');
    const pPanels = document.querySelectorAll('.profile-tab-panel');

    pTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        pTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const target = this.getAttribute('data-profile-tab');
        pPanels.forEach(p => {
          p.classList.toggle('active', p.getAttribute('data-profile-panel') === target);
        });
      });
    });

    const form = document.querySelector('#profileForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        currentUser.name = (form.querySelector('[name="name"]') || {}).value || currentUser.name;
        currentUser.email = (form.querySelector('[name="email"]') || {}).value || currentUser.email;
        currentUser.phone = (form.querySelector('[name="phone"]') || {}).value || currentUser.phone;
        currentUser.address = (form.querySelector('[name="address"]') || {}).value || currentUser.address;

        localStorage.setItem('pawhealth_demo_user', JSON.stringify(currentUser));
        syncUserInfo();

        if (window.showToast) {
          window.showToast('Profile Updated', 'Your profile details have been saved.', 'success');
        }
      });
    }

    const secForm = document.querySelector('#securityForm');
    if (secForm) {
      secForm.addEventListener('submit', (e) => {
        e.preventDefault();
        secForm.reset();
        if (window.showToast) {
          window.showToast('Security Updated', 'Your password has been changed successfully.', 'success');
        }
      });
    }
  }

  // -------------------------------------------------------------------------
  // 13. Logout Confirmation Modal
  // -------------------------------------------------------------------------
  function setupLogout() {
    const modal = document.querySelector('#logoutModal');
    const confirmBtn = document.querySelector('#confirmLogoutBtn');
    const cancelBtn = document.querySelector('#cancelLogoutBtn');

    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        localStorage.removeItem('pawhealth_demo_user');
        if (window.showToast) {
          window.showToast('Logged Out', 'Redirecting to login page...', 'info', 1500);
        }
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 600);
      });
    }

    if (cancelBtn && modal) {
      cancelBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        const overlay = document.querySelector('.overlay');
        if (overlay) overlay.classList.remove('active');
      });
    }
  }

  function openLogoutModal() {
    const modal = document.querySelector('#logoutModal');
    if (modal) {
      modal.classList.add('active');
      const overlay = document.querySelector('.overlay');
      if (overlay) overlay.classList.add('active');
    }
  }

  // -------------------------------------------------------------------------
  // 14. Support Form
  // -------------------------------------------------------------------------
  function setupSupportForm() {
    const sForm = document.querySelector('#dashboardSupportForm');
    if (sForm) {
      sForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sForm.reset();
        if (window.showToast) {
          window.showToast('Ticket Created', 'Your support inquiry has been submitted. A team member will reply within 24 hours.', 'success');
        }
      });
    }
  }

  // -------------------------------------------------------------------------
  // Initialize Dashboard on DOMContentLoaded
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    syncUserInfo();
    setupNavigation();
    setupMobileSidebar();
    setupBookingFlow();
    setupAppointments();
    setupPets();
    setupVaccinations();
    setupMedicalHistory();
    setupDocuments();
    setupNotifications();
    setupProfile();
    setupLogout();
    setupSupportForm();
  });

})();
