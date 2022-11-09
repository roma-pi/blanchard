document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');

  document.querySelectorAll('.header__movements-link').forEach(function(movementsLink) {
    movementsLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      movementsLink.classList.toggle('header__movements-link_active');
      document.querySelectorAll(`.header__movements-link_active:not([data-path="${path}"])`).forEach(function(activeMovementsLink) {
        activeMovementsLink.classList.remove('header__movements-link_active');
      })

      document.querySelector(`[data-target="${path}"]`).classList.toggle('header__artists-list_active');
      document.querySelectorAll(`.header__artists-list_active:not([data-target="${path}"])`).forEach(function(artistListToClose) {
        artistListToClose.classList.remove('header__artists-list_active');
      })
    })
  })

  document.addEventListener('click', function(event) {
    let target = event.target;

    if (!target.closest('.header__movements-link') && !target.closest('.header__artists-list')) {
      document.querySelectorAll('.header__movements-link_active').forEach(function(activeMovementsLink) {
        activeMovementsLink.classList.remove('header__movements-link_active');
      })

      document.querySelectorAll('.header__artists-list_active').forEach(function(artistListToClose) {
        artistListToClose.classList.remove('header__artists-list_active');
      })
    }

    if (!target.closest('.gallery__modal') && !target.closest('.gallery__slide')) {
      document.querySelectorAll('.gallery__modal_active').forEach(function(modalActive) {
        modalActive.classList.remove('gallery__modal_active');
      })
      let modalActiveShade = document.querySelector('.modal-active');
      if (modalActiveShade) {
        modalActiveShade.classList.remove('modal-active');
        body.style = '';
      }
    }
  })

  document.querySelectorAll('.catalog__artist-btn').forEach(function(artistBtn) {
    artistBtn.addEventListener('click', function(event) {
      document.querySelectorAll('.catalog__artist-btn').forEach(function(artistBtnList) {
        artistBtnList.classList.remove('catalog__artist-btn_active');
      })
      artistBtn.classList.add('catalog__artist-btn_active');

      const path = event.currentTarget.dataset.path;

      document.querySelectorAll(`.catalog__artist-card_active:not([data-target="${path}"])`).forEach(function(artistCardToHide) {
        artistCardToHide.classList.remove('catalog__artist-card_active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__artist-card_active');
      if (document.body.clientWidth <= 850) {
        document.querySelector('.catalog__artist-card-list').scrollIntoView({behavior: 'smooth'});
      }
    })
  })

  document.querySelectorAll('.catalog__btn').forEach(function(countryBtn) {
    countryBtn.addEventListener('click', function(event) {
      document.querySelectorAll('.catalog__btn').forEach(function(countryBtnList) {
        countryBtnList.classList.remove('catalog__btn_active');
      })
      countryBtn.classList.add('catalog__btn_active');

      const path = event.currentTarget.dataset.path;

      document.querySelectorAll(`[data-target="${path}"]`).forEach(function(countryArtistsToShow) {
        countryArtistsToShow.classList.add('catalog__artist-by-country-item_active');
      })
      document.querySelector(`[data-target="${path}"] .catalog__artist-btn`).click();
      document.querySelectorAll(`.catalog__artist-by-country-item_active:not([data-target="${path}"])`).forEach(function(countryArtistsToHide) {
        countryArtistsToHide.classList.remove('catalog__artist-by-country-item_active');
      })
    })
  })

  document.querySelector('.events__btn').addEventListener('click', function(event) {
    document.querySelectorAll('.events__item').forEach(function(eventListToShow) {
      console.log(eventListToShow);
      eventListToShow.style.display = 'block';
      eventListToShow.clientWidth;
      eventListToShow.style.opacity = 1;
    })
    document.querySelector('.events__btn').classList.add('events__btn_hidden');
  })

  document.querySelectorAll('.gallery__slide').forEach(function(gallerySlide) {
    gallerySlide.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      // Get scrollWidth
      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();

      document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal_active');
      body.style.paddingRight = scrollWidth + 'px';
      body.classList.add('modal-active');
      document.querySelectorAll(`.gallery__modal_active:not([data-target="${path}"])`).forEach(function(modalActive) {
        modalActive.classList.remove('gallery__modal_active');
      })
    })
  })

  document.querySelectorAll('.gallery__modal-close').forEach(function(modalClose) {
    modalClose.addEventListener('click', function() {
      document.querySelectorAll('.gallery__modal_active').forEach(function(modalActive) {
        modalActive.classList.remove('gallery__modal_active');
      })
      document.querySelector('.modal-active').classList.remove('modal-active');
      body.style = '';
    })
  })

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');

          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  };
})
