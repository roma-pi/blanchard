// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  const myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.75851460, 37.60109379],
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

  const myPlacemark = new ymaps.Placemark([55.75851460, 37.60109379], null, {
    iconLayout: 'default#image',
    iconImageHref: './img/map-mark.svg',
    iconImageSize: [20, 20],
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

