/** Создание модального окна. Открытие кнопка "Модальное окно", Закрытие "Esc". (Видео 20:45)
|============================
1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**
// -----------------------------------------------
// План действий.
  1. отримати всі посилання на дом елементи (refs)
  2. повісити обробник подій по кліку на кнопку
    2.1. додаємо клас open на body
  3. повісити обробники подій по кліку на кнопку close і на overlay
    3.1. прибрати клас open у тегу body
  4. повісити обробник подій по натисканню клавіш (keydown) на window
    4.1. перевірка на клавішу esc, якщо натиснули на неї - прибираємо клас open
// -----------------------------------------------

// ==================== Способ-1 ====================

// Получаем ссылки к Html элементам.

const refs = {
  overlay: document.getElementById('overlay'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  openModalBtn: document.getElementById('openModalBtn'),
};

// Создаю константу, класс open.

const classes = {
  open: 'open',
};

// Вешаю слушателей клика, на кнопки.

refs.openModalBtn.addEventListener('click', openModal);
refs.overlay.addEventListener('click', closeModal);
refs.modalCloseBtn.addEventListener('click', closeModal);

// Колбэк для открытия модального окна.

function openModal() {
  document.body.classList.add(classes.open); // Добавл.класс open на body при клике на кнопку.
  window.addEventListener('keydown', closeModalOnEsc); // Вешаю слушателя на кл. esc, когда модалка открыта.
}

// Колбэк для закрытия модального окна по close.

function closeModal() {
  document.body.classList.remove(classes.open); // Удаляю класс open с body при клике close.
  window.removeEventListener('keydown', closeModalOnEsc); // Удаляю слушателя с кл. esc, когда модалка закрыта.
}

// Колбэк для закрытия модального окна по Esc.

function closeModalOnEsc(event) {
  if (event.code === 'Escape') closeModal();
  //   console.log('Нажал Esc');
}

// ==================== Способ-2 ====================

// Этот вариант менее читабелен.

// Получаем ссылки к Html элементам.

const refs = {
  overlay: document.getElementById('overlay'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  openModalBtn: document.getElementById('openModalBtn'),
};

// Создаю константу, класс open.

const classes = {
  open: 'open',
};

// Вешаю слушателей клика, на кнопки.

refs.openModalBtn.addEventListener('click', toggleModal);
refs.overlay.addEventListener('click', toggleModal);
refs.modalCloseBtn.addEventListener('click', toggleModal);

window.addEventListener('keydown', closeModalOnEsc); // Вешаю слушателя на кл. esc, когда модалка открыта.

// Колбэк для открытия и закрытия модального окна.

function toggleModal() {
  document.body.classList.toggle(classes.open); // Убирает класс если он есть и добавляет если его нет.

  if (document.body.classList.contains(classes.open))
    // Вешаю слушателя на кл. esc, когда модалка открыта.
    window.addEventListener('keydown', closeModalOnEsc);
  // Удаляю слушателя с кл. esc, когда модалка закрыта.
  else window.removeEventListener('keydown', closeModalOnEsc);
}

// Колбэк для закрытия модального окна по Esc.

function closeModalOnEsc(event) {
  console.log(`key: ${event.key} | code: ${event.code}`);
  if (event.code === 'Escape') toggleModal();
}
|============================
*/
// ================================================================
/** Работа с формой. elements, submit (Видео 1:23:10) Сбор данных с формы при нажатии кнопки submit (Send).
|============================
// --------------------------------------------------
// Работа с объектом elements. 
// Без деструктуризации.
// --------------------------------------------------
const mainForm = document.getElementById('mainForm');

console.dir(mainForm.elements);            // HTMLFormControlsCollection(3)
console.dir(mainForm.elements.pass);       // input

mainForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(mainForm.elements.username.value);   // qwe - Выводит результат того что введено в поле username
  console.log(mainForm.elements.pass.value);       // 12345 - Выводит результат того что введено в поле pass

  // Очищаем поля submit формы, через reset. Этот метод есть только у форм.

  mainForm.reset();
}

// ------------------------------------------------------------
// Работа с объектом elements. 
// С деструктуризацией. Тоже самое. (Чтоб обращаться без точки).
// ------------------------------------------------------------

// Работа с объектом elements. Тоже самое с деструктуризацией.(Чтоб обращаться без точки).

const mainForm = document.getElementById('mainForm');

// Делаем деструктуризацию.

const { username, pass } = mainForm.elements;

console.dir(mainForm.elements);                  // HTMLFormControlsCollection(3)

mainForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(username.value); // qwe - Выводит результат того что введено в поле username
  console.log(pass.value); // 12345 - Выводит результат того что введено в поле pass

  // Очищаем поля submit формы, через reset. Этот метод есть только у форм.

  mainForm.reset();
}

// ------------------------------------------------------------
// Продолжаем... (Видео 1:39:20)
// ------------------------------------------------------------

// Работа с объектом elements. Тоже самое с деструктуризацией.(Чтоб обращаться без точки).

const mainForm = document.getElementById('mainForm');

// Делаем деструктуризацию.

const { username, pass } = mainForm.elements;

console.dir(mainForm.elements); // HTMLFormControlsCollection(3)
// console.dir(mainForm.elements.pass); // input

mainForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(username.value); // qwe - Выводит результат того что введено в поле username
  console.log(pass.value); // 12345 - Выводит результат того что введено в поле pass

  // Делаем проверку на пустые поля и пробелы. Если поля пустые, то при нажатии Send отправить, поля станут красными.

  if (username.value.trim() === '' || pass.value.trim() === '') {
    mainForm.classList.add('wrong');
  } else {
    mainForm.classList.remove('wrong');
    alert('Data sent!');

    // Очищаем поля submit формы, через reset. Этот метод есть только у форм. У инпутов его нет.

    mainForm.reset(); 
  }
}

// ------------------------------------------------------------
// Работаем с событием change, input для самих элементов форм.(Видео 1:43:45)
// ------------------------------------------------------------
|============================
*/
const mainForm = document.getElementById('mainForm');
const { username, pass } = mainForm.elements;

username.addEventListener('input', handleInput);
// ---------------------------------------------------------------
// Порядок работы с разными типами событий.
// ---------------------------------------------------------------

/**
|============================
// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const classes = {
//   open: "open",
// };

// refs.openModalBtn.addEventListener("click", openModal);
// refs.overlay.addEventListener("click", closeModal);
// refs.modalCloseBtn.addEventListener("click", closeModal);

// function openModal() {
//   document.body.classList.add(classes.open);
//   window.addEventListener("keydown", closeModalOnESC);
// }

// function closeModal() {
//   document.body.classList.remove(classes.open);
//   window.removeEventListener("keydown", closeModalOnESC);
// }

// function closeModalOnESC(event) {
//   console.log(`key: ${event.key} | code: ${event.code}`);
//   if (event.code === "Escape") closeModal();
// }

//! 2 спосіб

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const classes = {
//   open: "open",
// };

// refs.openModalBtn.addEventListener("click", toggleModal);
// refs.overlay.addEventListener("click", toggleModal);
// refs.modalCloseBtn.addEventListener("click", toggleModal);

// function toggleModal() {
//   document.body.classList.toggle(classes.open);
//   if (document.body.classList.contains(classes.open))
//     window.addEventListener("keydown", closeModalOnESC);
//   else window.removeEventListener("keydown", closeModalOnESC);
// }

// function closeModalOnESC(event) {
//   console.log(`key: ${event.key} | code: ${event.code}`);
//   if (event.code === "Escape") toggleModal();
// }

//! =======================================

// const mainForm = document.getElementById("mainForm");
// const { username, pass } = mainForm.elements;

// console.dir(mainForm.elements);

// mainForm.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//   event.preventDefault();
//   console.log(event);
//   console.log(username.value);
//   console.log(pass.value);

//   if (username.value.trim() === "" || pass.value.trim() === "") {
//     mainForm.classList.add("wrong");
//   } else {
//     mainForm.classList.remove("wrong");
//     alert("Data sent!");
//     mainForm.reset();
//   }
// }

//! =======================================

// const mainForm = document.getElementById("mainForm");
// const { username, pass } = mainForm.elements;

// username.addEventListener("input", handleInput);
// pass.addEventListener("change", handleChange);

// function handleInput(event) {
//   console.log(event.target.value);
//   const valueLength = event.target.value.length;
//   if (valueLength <= 3 || valueLength >= 10) {
//     console.log("некоректний розмір тексту");
//   } else {
//     console.log("все окей");
//   }
// }

// function handleChange(event) {
//   console.log(event.target.value);
// }

// const lang = document.getElementById('lang');

// lang.addEventListener('change', handleLangSwitch);

// function handleLangSwitch(event) {
//   console.log(this);
//   console.log(event.target);
//   console.log(event.target.value);
// }

//! =======================================
|============================
*/
