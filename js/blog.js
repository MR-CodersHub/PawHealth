/**
 * PawHealth — blog.js
 * Pet Health Knowledge Centre: Search filter and category selection
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const searchInput = document.querySelector('.blog-search-input');
  const searchBtn = document.querySelector('.blog-search-btn');
  const articles = document.querySelectorAll('.blog-card');

  function filterArticles(query) {
    const q = query.toLowerCase().trim();
    let matches = 0;

    articles.forEach(card => {
      const title = (card.querySelector('.blog-card__title') || {}).textContent || '';
      const desc = (card.querySelector('.blog-card__desc') || {}).textContent || '';
      const cat = (card.querySelector('.blog-card__category') || {}).textContent || '';
      const text = `${title} ${desc} ${cat}`.toLowerCase();

      if (!q || text.includes(q)) {
        card.style.display = 'flex';
        matches++;
      } else {
        card.style.display = 'none';
      }
    });

    if (window.showToast && q) {
      window.showToast('Search Results', `Found ${matches} article${matches === 1 ? '' : 's'} matching "${query}"`, 'info', 2000);
    }
  }

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

  // Category card clicks filter articles
  const catCards = document.querySelectorAll('.blog-cat-card');
  catCards.forEach(catCard => {
    catCard.addEventListener('click', (e) => {
      e.preventDefault();
      const catTitle = (catCard.querySelector('.blog-cat-card__title') || {}).textContent || '';
      if (searchInput) {
        searchInput.value = catTitle;
        filterArticles(catTitle);
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
});
