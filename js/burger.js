document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header__burger').forEach(function(burger) {
    burger.addEventListener('click', function() {
      document.querySelectorAll('.header__nav').forEach(function(nav) {
        nav.classList.add('header__nav_open')
      })
    })
  })

  document.querySelectorAll('.header__nav-btn').forEach(function(navBtn) {
    navBtn.addEventListener('click', function() {
      document.querySelectorAll('.header__nav').forEach(function(nav) {
        nav.classList.remove('header__nav_open')
      })
    })
  })
})
