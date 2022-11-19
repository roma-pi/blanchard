document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const navBtn = document.querySelector('.header__nav-btn');

  burger.addEventListener('click', () => {
    nav.classList.add('header__nav_open');
  });

  navBtn.addEventListener('click', () => {
    nav.classList.remove('header__nav_open');
  });
});
