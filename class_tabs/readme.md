### Tabs (вкладки)

Реализованы классом.

### Описание Демки
В один момент времени может быть активна только одна вкладка.
Содержит функции, с помощью которых в консоле можно установить заголовок
вкладки, заголовок контента, контент.

### Использование

  ```javascript

  var
      var tabs = new Tabs($('#cssSelector'));

      tabs.setTitle(idx, value);            // устанавливает заголовок вкладки

      tabs.setContentTitle(idx, value);     // устанавливает заголовок контента

      tabs.setContent(idx, value1, value2); // в случае передачи двух аргументов
          //(idx, value1), во вкладке будет установлен контент. В случае передачи
          //трех аргументов (idx, value1, value2), во вкладке будут установлены
          //и контент и заголовок, где "value2" соответствует значению заголовка

  ```
