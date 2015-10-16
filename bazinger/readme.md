### Карусель (слайдер).

Реализован как объект.

### Описание Демки
Независимо от количества и порядкового номера слайдов, прокрутка всегда будет
происходить последовательно (от первого ко второму, от второго к третьему...
от последнего к 1му). Перемещение возможно осуществлять в обе стороны. Так
же, к каждому слайду прикреплен свой "point", при клике на который произойдет
перемещение на соответствующий слайд.И наоборот, при прокрутке слайдера
активным будет соответствующий "point".

### Использование

```javascript

var
    slider = new Slider('#slider', {
        leftButtonSelector: '.cssSelector',
        rightButtonSelector: '.cssSelector',
        slidesSelector: 'ul .cssSelector'
    });

```