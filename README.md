# PawHealth — Premium Veterinary Clinic & Animal Hospital

> A compassionate, modern, fully responsive Veterinary Clinic & Animal Hospital website with a dedicated, functional Pet Owner Dashboard.

---

## 🌟 Project Overview

**PawHealth** is designed for modern veterinary practices and animal hospitals. The website blends clinical credibility with deep empathy, providing pet parents with clear medical education, transparent care pricing, online appointment scheduling, and a practical **Pet Owner Dashboard**.

### Brand Identity & Palette
- **Primary Forest Green**: `#245C48`
- **Deep Teal**: `#286D73`
- **Soft Mint**: `#DCEFE5`
- **Warm Cream**: `#FFF9F0`
- **Light Background**: `#F6F8F5`
- **Charcoal Text**: `#27332F`
- **Accent Coral**: `#F28B78`
- **Soft Golden Yellow**: `#F2C66D`
- **Clean White**: `#FFFFFF`

### Strict Technology Stack
- **HTML5** (Semantic structure, ARIA accessibility, Open Graph metadata)
- **CSS3** (Custom properties/design tokens, custom CSS grid, responsive flexbox, smooth keyframe animations, dark/light theme, RTL/LTR layout)
- **Vanilla JavaScript ES6** (No frameworks: Zero React, Vue, Angular, jQuery, Bootstrap, or Tailwind)

---

## 📂 Complete 13-Page Website Structure

Every public page contains **EXACTLY SIX meaningful main content sections** (excluding the global header and footer).

| # | Page File | Page Title & Purpose | Main Content Sections Count |
|---|---|---|:---:|
| 1 | `index.html` | **Home 1 – General Veterinary Care** | 6 Sections |
| 2 | `home2.html` | **Home 2 – Specialized Animal Care** | 6 Sections |
| 3 | `about.html` | **About Us – Clinic Story & Veterinary Team** | 6 Sections |
| 4 | `services.html` | **Services – Veterinary Services & Treatments** | 6 Sections |
| 5 | `service-details.html` | **Service Details – Vaccination & Preventive Healthcare** | 6 Sections |
| 6 | `blog.html` | **Blog – Pet Health & Veterinary Articles** | 6 Sections |
| 7 | `blog-details.html` | **Blog Details – Complete Puppy Vaccination Guide** | 6 Sections |
| 8 | `contact.html` | **Contact Us – Clinic Contact & Appointment Enquiries** | 6 Sections |
| 9 | `dashboard.html` | **Pet Owner Dashboard – Pet Health & Appointment Portal** | 11 Functional Panels |
| 10 | `pricing.html` | **Pricing – Treatment Packages & Preventive Care Plans** | 6 Sections |
| 11 | `login.html` | **Login / Register – Pet Owner Authentication** | Interactive Auth Tabs |
| 12 | `404.html` | **404 – Page Not Found** | Standalone Animal Themed |
| 13 | `coming-soon.html` | **Coming Soon / Maintenance** | Standalone with Live Timer |

---

## 🐾 Pet Owner Dashboard (`dashboard.html`)

A practical application interface specifically built for veterinary pet care:

1. **Overview**: Welcome banner with user's name, summary stats (Pets: 2, Upcoming Visits: 1, Completed: 8, Vaccinations Due: 1), upcoming appointment card, registered pet cards, vaccination alerts, and recent clinical activity feed.
2. **My Pets**: Full animal profiles (Max - Labrador, Luna - Persian Cat) with breed, gender, age, weight, microchip number, allergies, and care notes. Includes interactive **Add New Pet** modal.
3. **Book Appointment**: Comprehensive **8-Step Booking Wizard**:
   - Step 1: Select Pet
   - Step 2: Select Veterinary Service
   - Step 3: Choose Attending Veterinarian (or First Available)
   - Step 4: Interactive Calendar Date Selection
   - Step 5: Available Time Slot Grid (Morning, Afternoon, Evening)
   - Step 6: Reason for Visit & Urgency Level
   - Step 7: Booking Review Summary
   - Step 8: Submission Confirmation Screen (`#PH-2026-XXXX`)
4. **My Appointments**: Filter visits by status (`All`, `Confirmed`, `Pending`, `Completed`, `Cancelled`). Includes appointment details modal, cancellation requests, and reschedule actions.
5. **Vaccination Records**: Pet-specific tabs (Max / Luna) with full immunization history tables, status indicators (`Up to Date`, `Due Soon`, `Overdue`), and a **Print Vaccination Certificate** feature (`window.print()`).
6. **Medical History**: Chronological clinical history with pet and date filters, expandable doctor notes, diagnoses, treatments, and follow-up guidance.
7. **Prescriptions & Documents**: Tabs for active/completed prescriptions, downloadable PDF discharge summaries, and official vaccination passports.
8. **Notifications**: Real-time reminder alerts with read/unread statuses and "Mark all as read" capability.
9. **My Profile**: Update personal details, phone, address, change password with strength meter, and manage email/SMS notifications.
10. **Help & Support**: Clinic hours, emergency triage telephone line, support FAQ accordion, and inquiry ticket submission.
11. **Logout**: Modal confirmation that clears session state and redirects to `login.html`.

---

## 🔑 Demo Access Credentials

To test the Pet Owner Dashboard:
- Navigate to `login.html`
- Click the **"Enter Dashboard as Demo User"** quick action button
- **OR** log in with:
  - **Email**: `demo@pawhealth.com`
  - **Password**: `demo12345`

---

## 🌐 Global Interactive Capabilities

- **Dark / Light Theme Toggle**: Seamless CSS variables switch with `localStorage` memory (`pawhealth_theme`).
- **RTL / LTR Direction Toggle**: Full bidirectional layout switching with `localStorage` memory (`pawhealth_dir`).
- **Sticky Header**: Dynamic navbar with mobile hamburger drawer and dropdown navigation.
- **Scroll Reveal Animations**: Smooth entry animations using native `IntersectionObserver`.
- **Live Clinic Status**: Dynamic open/closed hours indicator based on real-time clock.
- **Universal Toast Notifications**: Non-intrusive feedback toasts for form submissions, preference updates, and searches.
- **Accessible Accordions**: Native ARIA-expanded FAQ accordions.
- **Lightbox Preview**: Built-in modal image zoom for facility galleries.
- **Back-to-Top Button**: Smooth scrolling trigger when scrolling past 350px.

---

## 🚀 How to Run the Website

No build tools, bundlers, or servers are required:
1. Double-click `index.html` to open the website in any modern web browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, serve via any local web server (e.g. `npx serve`, Python `python -m http.server`, or VS Code Live Server).
