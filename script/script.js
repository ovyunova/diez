// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(createYandexMap);

function createYandexMap(){ 
    // Создание карты.    
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
    // Хинт показывается при наведении мышкой на иконку метки.
    hintContent: 'Содержимое всплывающей подсказки',
    // Балун откроется при клике по метке.
    balloonContent: 'Содержимое балуна'
    },
    {
    
    //iconLayout: 'default#image',
    //iconImageHref: 'images/sprite.png',

    });

    // После того как метка была создана, ее
    // можно добавить на карту.
    myMap.geoObjects.add(myPlacemark);

}