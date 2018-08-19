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
        center: [59.941993, 30.279423],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([59.941993, 30.279423], {
    // Хинт показывается при наведении мышкой на иконку метки.
    hintContent: 'Содержимое всплывающей подсказки',
    // Балун откроется при клике по метке.
    balloonContent: 'Diez - школа музыкального искусства'
    },
    {
    
    iconLayout: 'default#image',
    iconImageHref: '/Users/ovyunova/epixx/project/diez-vyunova/img/geotag.png',

    });

    // После того как метка была создана, ее
    // можно добавить на карту.
    myMap.geoObjects.add(myPlacemark);

}