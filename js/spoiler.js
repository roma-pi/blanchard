document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.publishings__categories-heading').addEventListener('click', function() {
    document.querySelector('.publishings__categories-heading').classList.toggle('publishings__categories-heading_spoiler');
    document.querySelectorAll('.publishings__categories-text').forEach(function(categoriesText) {
      categoriesText.classList.toggle('publishings__categories-text_visible');
      categoriesText.clientWidth;
      categoriesText.classList.toggle('publishings__categories-text_active');
    })
  })
})
