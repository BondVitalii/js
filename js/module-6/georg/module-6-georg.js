import { todoItem } from './todoItem.js'; // Импортируем нашу функцию todoItem из отдельного файла.

// =====================================================================================
// ** Пример-1 Работа с шаблоном.
// =====================================================================================
const todos = [
  { id: '111', done: true, text: 'lorem ipsum 1' },
  { id: '222', done: false, text: 'lorem ipsum 2' },
  { id: '333', done: true, text: 'lorem ipsum 3' },
];

/** Пишем функцию которая просто возвращает текст (шаблонный текст). Для упролщения чтения кода - эту функцию todoItem можно вынести в отдельный файл.
|============================
const todoItem = ({ id, done, text }) => {
  const checked = done ? 'checked' : '';
  // Шаблонный текст.
  return `<li class="todo-item" data-id=${id}>
        <label class="todo-description">
        <input type="checkbox" ${checked}/>
        <span>${text}</span>
        </label>
        <button>x</button>
    </li>`;
};
|============================
*/

// (refs) - Это ссылки для доступа к элементам. Через них находим элемент в доме и привязываем к ключу в объекте.
const refs = {
  body: document.body, // (Это для второго варианта). Привязываем body к ключу body
  myButton: document.querySelector('.my-button'), // Привязываем кнопку(html .my-button-'Push me')к ключу myButton для слушателя событий.
  contextMenu: document.querySelector('.context-menu'), // Привязываем контекстное меню к ключу contextMenu для слушателя событий.
  list: document.querySelector('.todo-list'), // Привязываем список(html .todo-list) к ключу list для слушателя событий.
  addTodoButton: document.querySelector('.add-todo'), // Привязываем .add-todo к ключу addTodoButton, для добавления контекста в контекстное меню.
};

// Функция...
const render = () => {
  const todoItems = todos.map(todo => todoItem(todo)).join(''); // Превращает масив todos в todoItems (.join превращает в текст) и потом вставляем в refs.list.insertAdjacentHTML('beforeend', todoItems).
  refs.list.innerHTML = ''; // Чистим дублирующиеся позиции в контекстном меню при добавление новой позиции.(на случай нового списка)
  refs.list.insertAdjacentHTML('beforeend', todoItems); // Текст todoItems вставляем в список (который в html в ul - li). Перед этим чистим список.
};

// В отдельную функцию showContextMenu выносим функции. Для события клик ПКМ слушателя событий на кконтекстное меню(по клику ПКМ).
const showContextMenu = event => {
  event.preventDefault(); // Это для того чтоб классическое контекстное меню задушить, и в параметрах добовляем слово event
  refs.contextMenu.classList.add('show'); // Во время этого события мы добовляем класс show для нашего контекстного меню.(когда клик меню появлялось, нет клика не появлялось).
  // Далее позиционируем меню в том месте где происходит клик.
  refs.contextMenu.style.left = `${event.pageX}px`; // По горизонтали.
  refs.contextMenu.style.top = `${event.pageY}px`; // По высоте.
};

// В отдельную функцию hideContextMenu выносим функцию замены состояния (видимое/невидимое). Для Слушателя события клик кконтекстное меню.
const hideContextMenu = () => {
  refs.contextMenu.classList.remove('show'); //Также show должен стоять (в классе на теге в html).
};

// В отдельную функцию textMyButton выносим функцию выведения текста. Для слушатель события по кнопке Push me.
const textMyButton = () => {
  console.log('hello from button');
};

// Функция addtodo добавляет контекст в контекстное меню. Для слушателя событий добавления контекста в контекстное меню.
const addtodo = () => {
  todos.push({ id: '555', done: false, text: 'new todo' });
};
// Функция handleAddtodo вызывает рендер функции addtodo.
const handleAddtodo = () => {
  addtodo(); // При клике добовляет тудушку.
  render(); // И вызывает рендер.
};

render(); // Запускается функция render и отображается список.

// ---- Слушатели событий.
// Просто пример: Подписываемся на событие клик. Слушатель событий при клике где угодно, событие всплывает до самого верха, до window.
// window.addEventListener('click', () => {
//   console.log('hello from window');
// });

// ----- У нас есть контекстное меню в html context-menu которое скрыто через стили css - display: none; -----
// Подписываемся на событие - слушатель событий по кнопке Push me (клик ПКМ).
refs.myButton.addEventListener('click', textMyButton);
// Подписываемся на событие клик ПКМ. Слушатель событий на кконтекстное меню (по клику ПКМ)
window.addEventListener('contextmenu', showContextMenu);
// Подписываемся на событие - слушатель событий на кконтекстное меню (убираем меню ЛКМ)
window.addEventListener('click', hideContextMenu);
// Подписываемся на событие - слушатель событий на кконтекстное меню (добавления контекста в контекстное меню).
refs.addTodoButton.addEventListener('click', handleAddtodo); // Подписка на кнопку addtodo (в нашем контекстном меню)

// =====================================================================================
// ** Пример-2 (Экстримальный) Пример как создают объекты с нуля.(Этот вариант используется редко.)
// =====================================================================================

/** Пример. Будем с нуля создавать вот такую ссылку с заголовкрм.
|============================
<a
  href="https://goit.global/textbooks/javascript-yk5evp/v2/uk/docs/lesson-11/dom"
  target="_blank"
>
  <h3>Module 6.11</h3>
</a> 
|============================
*/

// const refs = {
//   body: document.body,
// };

// // Создаем функцию.
// const addLink = () => {
//   const h3 = document.createElement('h3'); // Создаем заголовок h3.
//   h3.textContent = 'Module 6.11'; // В заголовок вставляем текст.

//   const a = document.createElement('a'); // Создаем ссылку.
//   a.href =
//     'https://goit.global/textbooks/javascript-yk5evp/v2/uk/docs/lesson-11/dom'; // Создаем ссылке атрибут href,вставляем адрес в ссылку.
//   a.target = '_blank'; // Создаем ссылке атрибут target, даем ему значение _blank.
//   a.appendChild(h3); // Добавляем в ссылку заголовок h3.

//   refs.body.appendChild(a); // Вставлять в дом нужно в последнюю очередь, когда мы все уже создали.
// };

// addLink();

// =================================================================================
// видео 1:18:30  Пример который понадобится при выполнении домашки.
// =================================================================================
// const refs = {
//   showIdButton: document.querySelector('.show-id'),
// };

// const handleShowId = event => {
//   const parentWrapper = event.target.closest('.context-menu');
//   console.log(parentWrapper.dataset.id);
// };

// refs.showIdButton.addEventListener('click', handleShowId);
// =================================================================================
