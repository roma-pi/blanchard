document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__search-label').addEventListener('click', function(event) {
    document.querySelector('.header__search-input').classList.add('header__search-input_active');
    document.querySelector('.header__search-input').placeholder = '';
  })

  document.querySelector('.header__search-label').addEventListener('keypress', function(event) {
    document.querySelector('.header__search-input').classList.add('header__search-input_active');
    document.querySelector('.header__search-input').placeholder = '';
  })

  document.querySelector('.header__search-input').addEventListener('blur', function(event) {
    event.currentTarget.classList.remove('header__search-input_active');
    event.currentTarget.placeholder = 'Поиск по сайту';
  })

  document.querySelector('.header__search-btn').addEventListener('click', function() {
    document.querySelector('.header__search-form').classList.add('header__search-form_active');
    document.querySelector('.header__search-label').classList.add('header__search-label_active');
    document.querySelector('.header__search-btn').classList.add('header__search-btn_active');
  })

  document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('header__search-btn') &&
    !event.target.classList.contains('header__search-btn-icon') && !event.target.classList.contains('header__search-input')) {
      document.querySelector('.header__search-form').classList.remove('header__search-form_active');
      document.querySelector('.header__search-label').classList.remove('header__search-label_active');
      document.querySelector('.header__search-btn').classList.remove('header__search-btn_active');
    }
  })
})
