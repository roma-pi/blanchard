const heroSlider = new Swiper('.hero__slider', {
  // Optional parameters
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  loop: true,
  effect: 'fade',

  autoplay: {
    delay: 5000,
  },
});

const gallerySlider = new Swiper('.gallery__slider', {
  // Optional parameters
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    prevSlideMessage: 'Перейти на предыдущий слайд',
    nextSlideMessage: 'Перейти на следующий слайд',
    slideRole: 'img',
    slideLabelMessage: 'Картина {{index}} из {{slidesLength}}',
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      spaceBetween: 15,
      allowTouchMove: true,
    },

    501: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      spaceBetween: 25,
      allowTouchMove: true,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      allowTouchMove: false,
    },

    1450: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      allowTouchMove: false,
    },
  },

  on:{
    beforeResize() {
      if (window.innerWidth >= 320) {
        gallerySlider.slides.css('width', '');
        gallerySlider.slides.css('margin-top', '');
        gallerySlider.slides.css('margin-right', '');
      }
    }
  }
});

const eventsSlider = new Swiper('.events__slider', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  a11y: {
    slideLabelMessage: '{{index}} из {{slidesLength}}',
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      enabled: true,
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 34,
    },

    501: {
      enabled: false,
    },
  },

  on:{
    beforeResize() {
      if (window.innerWidth >= 320) {
        eventsSlider.slides.css('width', '');
      }
    }
  }

});

const publishingsSlider = new Swiper('.publishings__slider', {
  // Optional parameters
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    prevSlideMessage: 'Перейти на предыдущий слайд',
    nextSlideMessage: 'Перейти на следующий слайд',
    slideLabelMessage: 'Издание {{index}} из {{slidesLength}}',
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      enabled: false,
      slidesPerView: 'auto',
      spaceBetween: 0,
      slidesOffsetBefore: 0,
    },

    501: {
      enabled: true,
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 34,
      slidesOffsetBefore: 10,
    },

    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 34,
      slidesOffsetBefore: 23,
    },

    851: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 49,
      slidesOffsetBefore: 0,
    },

    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      slidesOffsetBefore: 0,
    },
  },

  on:{
    beforeResize() {
      if (window.innerWidth >= 320) {
        publishingsSlider.slides.css('width', '');
      }
      if (window.innerWidth >= 320 && window.innerWidth <= 500) {
        publishingsSlider.setProgress(0, 300);
      }
    }
  }
});

const projectsSlider = new Swiper('.projects__slider-container', {
  // Optional parameters
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    prevSlideMessage: 'Перейти на предыдущий слайд',
    nextSlideMessage: 'Перейти на следующий слайд',
    slideLabelMessage: 'Партнёр {{index}} из {{slidesLength}}',
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 21,
    },

    501: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    850: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }

});
