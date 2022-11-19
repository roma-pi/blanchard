document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const movementsLinkList = document.querySelectorAll('.header__movements-link');
  const artistBtnList = document.querySelectorAll('.catalog__artist-btn');
  const countryBtnList = document.querySelectorAll('.catalog__btn');
  const eventsBtn = document.querySelector('.events__btn');
  const eventListToShow = document.querySelectorAll('.events__item');
  const gallerySlideList = document.querySelectorAll('.gallery__slide');
  const closeModalBtnList = document.querySelectorAll('.gallery__modal-close');
  const smoothLinkList = document.querySelectorAll('a[href^="#"]');

  movementsLinkList.forEach(movementsLink => {
    movementsLink.addEventListener('click', event => {
      const path = event.currentTarget.dataset.path;
      const activeMovementsLinkList = document.querySelectorAll(`.header__movements-link_active:not([data-path="${path}"])`);
      const targetArtistsList = document.querySelector(`[data-target="${path}"]`);
      const activeArtistsListArr = document.querySelectorAll(`.header__artists-list_active:not([data-target="${path}"])`);

      movementsLink.classList.toggle('header__movements-link_active');
      activeMovementsLinkList.forEach(activeMovementsLink => {
        activeMovementsLink.classList.remove('header__movements-link_active');
      })
      targetArtistsList.classList.toggle('header__artists-list_active');
      activeArtistsListArr.forEach(artistsListToClose => {
        artistsListToClose.classList.remove('header__artists-list_active');
      })
    })
  });

  document.addEventListener('click', event => {
    const target = event.target;

    if (!target.closest('.header__movements-link') && !target.closest('.header__artists-list')) {
      const activeMovementsLinkList = document.querySelectorAll('.header__movements-link_active');
      const activeArtistsListArr = document.querySelectorAll('.header__artists-list_active');

      activeMovementsLinkList.forEach(activeMovementsLink => {
        activeMovementsLink.classList.remove('header__movements-link_active');
      })
      activeArtistsListArr.forEach(artistListToClose => {
        artistListToClose.classList.remove('header__artists-list_active');
      })
    }

    if (!target.closest('.gallery__modal') && !target.closest('.gallery__slide')) {
      const activeModalList = document.querySelectorAll('.gallery__modal_active');
      const activeModalShade = document.querySelector('.modal-active');

      activeModalList.forEach(activeModal => {
        activeModal.classList.remove('gallery__modal_active');
      })
      if (activeModalShade) {
        activeModalShade.classList.remove('modal-active');
        body.style = '';
      }
    }
  });

  artistBtnList.forEach(artistBtn => {
    artistBtn.addEventListener('click', event => {
      const path = event.currentTarget.dataset.path;
      const artistCardToHideList = document.querySelectorAll(`.catalog__artist-card_active:not([data-target="${path}"])`);
      const targetArtistCard = document.querySelector(`[data-target="${path}"]`);
      const artistCardList = document.querySelector('.catalog__artist-card-list');

      artistBtnList.forEach(artistBtn => {
        artistBtn.classList.remove('catalog__artist-btn_active');
      });
      artistBtn.classList.add('catalog__artist-btn_active');
      artistCardToHideList.forEach(artistCardToHide => {
        artistCardToHide.classList.remove('catalog__artist-card_active');
      })
      targetArtistCard.classList.add('catalog__artist-card_active');
      if (document.body.clientWidth <= 850) {
        artistCardList.scrollIntoView({behavior: 'smooth'});
      }
    })
  });

  countryBtnList.forEach(countryBtn => {
    countryBtn.addEventListener('click', event => {
      const path = event.currentTarget.dataset.path;
      const countryArtistsToShow = document.querySelectorAll(`[data-target="${path}"]`);
      const targetFirstArtist = document.querySelector(`[data-target="${path}"] .catalog__artist-btn`);
      const countryArtistsToHide = document.querySelectorAll(`.catalog__artist-by-country-item_active:not([data-target="${path}"])`);

      countryBtnList.forEach(countryBtn => {
        countryBtn.classList.remove('catalog__btn_active');
      })
      countryBtn.classList.add('catalog__btn_active');
      countryArtistsToShow.forEach(countryArtist => {
        countryArtist.classList.add('catalog__artist-by-country-item_active');
      })
      targetFirstArtist.click();
      countryArtistsToHide.forEach(countryArtist => {
        countryArtist.classList.remove('catalog__artist-by-country-item_active');
      })
    })
  });

  eventsBtn.addEventListener('click', () => {
    eventListToShow.forEach(event => {
      event.classList.add('events__item_active');
    })
    eventsBtn.classList.add('events__btn_hidden');
  });

  gallerySlideList.forEach(gallerySlide => {
    gallerySlide.addEventListener('click', event => {
      const path = event.currentTarget.dataset.path;
      const targetModal = document.querySelector(`[data-target="${path}"]`);
      const activeModalList = document.querySelectorAll(`.gallery__modal_active:not([data-target="${path}"])`);

      const div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      const scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();
      body.style.paddingRight = scrollWidth + 'px';
      body.classList.add('modal-active');

      targetModal.classList.add('gallery__modal_active');
      activeModalList.forEach(activeModal => {
        activeModal.classList.remove('gallery__modal_active');
      })
    })
  });

  closeModalBtnList.forEach(closeModalBtn => {
    closeModalBtn.addEventListener('click', () => {
      const activeModalList = document.querySelectorAll('.gallery__modal_active');
      const activeModalShade = document.querySelector('.modal-active');

      activeModalList.forEach(activeModal => {
        activeModal.classList.remove('gallery__modal_active');
      });
      activeModalShade.classList.remove('modal-active');
      body.style = '';
    })
  });

  smoothLinkList.forEach(smoothLink => {
    smoothLink.addEventListener('click', event => {
      event.preventDefault();
      const id = smoothLink.getAttribute('href');
      const target = document.querySelector(id);

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});
