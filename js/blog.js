/**
 * PawHealth — blog.js
 * Pet Health Knowledge Centre: Search filter, category selection & filter pills
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const searchInput = document.querySelector('.blog-search-input');
  const searchBtn = document.querySelector('.blog-search-btn');
  const articles = document.querySelectorAll('.blog-card');
  const filterBtns = document.querySelectorAll('.blog-filter-btn');

  function filterArticles(query) {
    const q = (query || '').toLowerCase().trim();
    let matches = 0;

    articles.forEach(card => {
      const title = (card.querySelector('.blog-card__title') || {}).textContent || '';
      const desc = (card.querySelector('.blog-card__desc') || {}).textContent || '';
      const cat = (card.querySelector('.blog-card__category') || {}).textContent || '';
      const cardCategoryAttr = (card.getAttribute('data-category') || '').toLowerCase();
      const text = `${title} ${desc} ${cat} ${cardCategoryAttr}`.toLowerCase();

      if (!q || q === 'all' || text.includes(q)) {
        card.style.display = 'flex';
        matches++;
      } else {
        card.style.display = 'none';
      }
    });

    if (window.showToast && q && q !== 'all') {
      window.showToast('Search Results', `Found ${matches} article${matches === 1 ? '' : 's'} for "${query}"`, 'info', 2000);
    }
  }

  // 1. Text input live filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterArticles(e.target.value);
    });

    if (searchBtn) {
      searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        filterArticles(searchInput.value);
      });
    }
  }

  // 2. Quick topic pills in Hero
  const topicPills = document.querySelectorAll('.blog-topic-pill');
  topicPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const topic = pill.getAttribute('data-search-topic') || pill.textContent.replace(/[^a-zA-Z ]/g, '').trim();
      if (searchInput) {
        searchInput.value = topic;
        filterArticles(topic);
        const latestSec = document.getElementById('latest');
        if (latestSec) latestSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3. Category cards in Section 4
  const catCards = document.querySelectorAll('.blog-cat-card');
  catCards.forEach(catCard => {
    catCard.addEventListener('click', (e) => {
      const filter = catCard.getAttribute('data-cat-filter') || (catCard.querySelector('.blog-cat-card__title') || {}).textContent || '';
      if (searchInput) {
        searchInput.value = filter;
      }
      filterArticles(filter);

      // Update active filter button if exists
      filterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === filter.toLowerCase()) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    });
  });

  // 4. Interactive Filter Pills above articles
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterVal = this.getAttribute('data-filter') || 'all';
      if (searchInput && filterVal !== 'all') {
        searchInput.value = filterVal;
      } else if (searchInput && filterVal === 'all') {
        searchInput.value = '';
      }
      filterArticles(filterVal);
    });
  });
});
