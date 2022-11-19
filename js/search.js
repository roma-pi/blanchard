document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.header__search-form');
  const searchLabel = document.querySelector('.header__search-label');
  const searchInput = document.querySelector('.header__search-input');
  const searchBtn = document.querySelector('.header__search-btn');

  searchLabel.addEventListener('click', () => {
    searchInput.classList.add('header__search-input_active');
    searchInput.placeholder = '';
  });

  searchLabel.addEventListener('keypress', () => {
    searchInput.classList.add('header__search-input_active');
    searchInput.placeholder = '';
  });

  searchInput.addEventListener('blur', () => {
    searchInput.classList.remove('header__search-input_active');
    searchInput.placeholder = 'Поиск по сайту';
  });

  searchBtn.addEventListener('click', () => {
    searchForm.classList.add('header__search-form_active');
    searchLabel.classList.add('header__search-label_active');
    searchBtn.classList.add('header__search-btn_active');
    if (document.documentElement.clientWidth > 1200) {
      searchForm.submit();
    } else {
      const activeSearchBtn = document.querySelector('.header__search-btn_active');
      activeSearchBtn.addEventListener('click', () => {
        searchForm.submit();
      });
    }
  });

  document.addEventListener('click', event => {
    if (!event.target.classList.contains('header__search-btn') &&
    !event.target.classList.contains('header__search-btn-icon') && !event.target.classList.contains('header__search-input')) {
      searchForm.classList.remove('header__search-form_active');
      searchLabel.classList.remove('header__search-label_active');
      searchBtn.classList.remove('header__search-btn_active');
    }
  });
});
