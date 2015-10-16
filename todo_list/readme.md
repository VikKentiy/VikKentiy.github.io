### Todo List

Реализован классом.

### Описание Демки
Удобное приложения для контроля выполнения дел.
Есть возможность добавлять запланированные дела, а так же вычеркивать и
удалять уже выполненые.

### Использование

```javascript

    var list = new List(document.getElementById('cssSelector'));
    list.init();
    list.finalList();

    var addButton = document.getElementById('cssSelector').addEventListener('click', function(event){ // кнопка добавления дела в список
        var input = document.getElementById('cssSelector').value.trim();    //поле для ввода текста
        list.addElement(input);
        document.getElementById('input').value = "";
    });

    var removeButton = document.getElementById('cssSelector').addEventListener('click', function(event){ //кнопка удаления оконченных дел
        list.removeCase(event);
    });

```