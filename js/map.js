// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        bounds: [[55.74512880425985, 37.60109379 + (37.59266459383299 - 37.60109379) / 1920 * document.body.clientWidth], [55.779052985859074, 37.60109379 + (37.69892298616699 - 37.60109379) / 1920 * document.body.clientWidth]],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14,
        controls: ['zoomControl', 'geolocationControl']
    }, {
        zoomControlSize: 'small',
        zoomControlFloat: 'none',
        zoomControlPosition: {
          top: '38%',
          right: '10px'
        },
        geolocationControlFloat: 'none',
        geolocationControlPosition: {
          top: '50%',
          right: '10px'
        },
    });

    var myPlacemark = new ymaps.Placemark([55.75851460, 37.60109379], null, {
      iconLayout: 'default#image',
      iconImageHref: './img/map-mark.svg',
      iconImageSize: [20, 20],
    });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);

  if (document.body.clientWidth <= 500) {
    myMap.controls.get('geolocationControl').options.set('position', {
      top: '60%',
      right: '10px'
    });
  } else {
    myMap.controls.get('geolocationControl').options.set('position', {
      top: '50%',
      right: '10px'
    });
  }

  window.addEventListener('resize', function() {
    myMap.setBounds([[55.74512880425985, 37.60109379 + (37.59266459383299 - 37.60109379) / 1920 * document.body.clientWidth], [55.779052985859074, 37.60109379 + (37.69892298616699 - 37.60109379) / 1920 * document.body.clientWidth]]);

    if (document.body.clientWidth <= 500) {
      myMap.controls.get('geolocationControl').options.set('position', {
        top: '60%',
        right: '10px'
      });
    } else {
      myMap.controls.get('geolocationControl').options.set('position', {
        top: '50%',
        right: '10px'
      });
    }
  })

}

