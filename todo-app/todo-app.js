(function () {

  // проверяем есть ли сохраненные дела в хранилище, если нет - записываем пустой массив
  function getItemsFromLocalStorage(key) {
    window.keyTodo = key;
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(key));
  }

  // создаем и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  //создаем и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group');
    form.classList.add('mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn-primary');
    button.classList.add('btn');
    button.textContent = 'Добавить дело';
    button.disabled = true;

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  //создаем и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem(name) {
    //создаем элемент списка
    let item = document.createElement('li');
    //кнопки помещаем в элемент который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // устанавливаем стили для элемента списка, а также для размещения кнопок в его правой части с помощью флекс
    item.classList.add('list-group-item');
    item.classList.add('d-flex');
    item.classList.add('justify-content-between');
    item.classList.add('align-items-center');
    item.textContent = name;

    buttonGroup.classList.add('btn-group');
    buttonGroup.classList.add('btn-group-sm');
    doneButton.classList.add('btn')
    doneButton.classList.add('btn-success')
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.textContent = 'Удалить';

    // вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);


    //приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  // собираем приложение
  function createTodoApp(container, title = 'Список дел', todosAdded) {


    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();


    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    // добавляем дела сохраненные в хранилище
    for (i = 0; i < todosAdded.length; i++) {
      let oldTask = createTodoItem(todosAdded[i].name);
      todoList.append(oldTask.item);

      let oldTaskDoneBtn = oldTask.item.querySelector('.btn-success');

      let oldTaskDelBtn = oldTask.item.querySelector('.btn-danger');

      oldTaskDoneBtn.addEventListener('click', function () {
        oldTask.item.classList.toggle('list-group-item-success');

        let itemText = oldTask.item.firstChild.textContent;
        reWriteState(todosAdded, itemText)
      });

      oldTaskDelBtn.addEventListener('click', function () {
        if (confirm('Вы уверены?')) {
          oldTask.item.remove();

          let itemText = oldTask.item.firstChild.textContent;
          removeFromLocal(getItemsFromLocalStorage(window.keyTodo), itemText);
        }
      });

      if (todosAdded[i].done) {
        oldTask.item.classList.add('list-group-item-success');
      }
    }

    // дизаблим кнопку пока инпут пустой
    todoItemForm.input.addEventListener('input', function (e) {
      todoItemForm.button.disabled = todoItemForm.input.value.length === 0;
    });

    //браузер создает событие submit на форме по нажатию на ввод или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', function (e) {
      //предотвращаем дефолтное действие браузера, чтобы кнопка не перезагружала страницу
      e.preventDefault();

      //игнорируем создание элемента если пользователь ничего не ввел в поле
      if (!todoItemForm.input.value) {
        return;
      }

      let newValue = todoItemForm.input.value;

      let todoItem = createTodoItem(newValue);

      let newTodo = {
        name: newValue,
        done: false,
      };

      todosAdded.push(newTodo);

      localStorage.setItem(window.keyTodo, JSON.stringify(todosAdded));

      //добавляем обработчики на кнопки
      todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success');
        let itemText = todoItem.item.firstChild.textContent;

        reWriteState(todosAdded, itemText)
      });
      todoItem.deleteButton.addEventListener('click', function () {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();

          let itemText = todoItem.item.firstChild.textContent;
          removeFromLocal(getItemsFromLocalStorage(window.keyTodo), itemText);
        }
      });


      //создаем и добавляем в список новое дело с названием из поля ввода
      todoList.append(todoItem.item);

      //обнуляем значение в поле, чтобы не пришлось стирать его вручную
      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;
    });

    // перезаписываем состояние дела в хранилище
    function reWriteState(array, content) {
      let newArray = array.map(function (object) {
        if (object.name === content) {
          if (object.done === false) {
            object.done = true
          } else {
            object.done = false
          }
        }
        return object
      })
      localStorage.setItem(window.keyTodo, JSON.stringify(newArray));
    }

    // удаляем дело
    function removeFromLocal(array, content) {
      let newArray = array.filter(function (object) {
        return object.name !== content
      });
      localStorage.setItem(window.keyTodo, JSON.stringify(newArray));
    }

  }
  window.getItemsFromLocalStorage = getItemsFromLocalStorage;
  window.createTodoApp = createTodoApp;
})();
