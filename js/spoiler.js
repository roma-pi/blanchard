document.addEventListener('DOMContentLoaded', () => {
  const categoriesHeading = document.querySelector('.publishings__categories-heading');
  const categoriesTextList = document.querySelectorAll('.publishings__categories-text');

  categoriesHeading.addEventListener('click', () => {
    categoriesHeading.classList.toggle('publishings__categories-heading_spoiler');
    categoriesTextList.forEach(categoriesText => {
      categoriesText.classList.toggle('publishings__categories-text_visible');
      categoriesText.clientWidth;
      categoriesText.classList.toggle('publishings__categories-text_active');
    });
  });
});
