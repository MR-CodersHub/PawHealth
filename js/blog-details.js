/**
 * PawHealth — blog-details.js
 * Article Details: Reading progress bar and social share actions
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Reading progress bar
  const progressBar = document.querySelector('.reading-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
    }, { passive: true });
  }

  // Social share buttons
  const shareBtns = document.querySelectorAll('.art-share-btn');
  shareBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const action = btn.getAttribute('data-share');
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);

      if (action === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, '_blank', 'width=600,height=400');
      } else if (action === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
      } else if (action === 'linkedin') {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
      } else {
        // Copy link
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            if (window.showToast) window.showToast('Link Copied', 'Article URL copied to clipboard!', 'success');
          });
        } else {
          if (window.showToast) window.showToast('Share', window.location.href, 'info');
        }
      }
    });
  });
});
