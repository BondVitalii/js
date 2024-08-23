/* ===== Репета модуль-6, занятие-2 ===== */
// ==============================================================
/** События (Файл - 01-event-listeners.js)
|============================
// ---------------------------------------
//  * События.
//  * - Создание и удаление слушателей
//  * - Именование колбеков для слушателей
//  *    - handle*: handleEvent или handleSubjectEvent
//  *    - *Handler: subjectEventHandler
//  *    - on*: onSubjectEvent
//  * - Ссылочная идентичность колбеков
//  * - Объект события
// ---------------------------------------
// Доступ к кнопкам.

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// ----------------------------
// Добавляем слушателя событий.
// ----------------------------
// ** Первым аргументом передаём тип события, на который хотим прослушивать(реагировать). Событие передаётся в виде стороки.
// ** Вторым аргументом передаём колбэк функцию. Которая будет выполнена в момент наступления этого события.

targetBtn.addEventListener('click', () => {
  console.log('Клик');
});

// Теперь при клике на эту кнопку в консоле будет выводиться колл-во кликов.
// Это называется (издатель-подписчик).

// Расшифровка (аналогия - Подписка на журнал). Кто подписывается? В нашем случае это targetBtn, (он подписывается на выпуск журнала) тоесть он подписывается на 'click'. И каждый раз когда будет происходить клик, мы будем его читать.

// ----------------------------
// Наименование функций обрабатывающих события.
// Как передавать эти коллбэки.
// ----------------------------
// Представьте что это анонимная функция. И если мы хотим её сделать внешней функцией, то-есть сохранить как отдельную функцию и сюда передавать на неё ссылку. Её нужно грамотно именовать.
// Есть несколько именований хендлеров(обработчиков событий).
//  * - Именование колбеков для слушателей
//  *    - handle*: handleEvent или handleSubjectEvent
//  *    - *Handler: eventHandler или subjectEventHandler
//  *    - on*:  onEvent или onSubjectEvent
// -----------------------------
// ** Если я хочу сделать отдельную функцию.
// ** Пример: Три варианта наименования обработчика событий.

// *** Первый вариант именования.
// ------------------------------
// Создаю отдельную функцию и в наименовании её пишу сначало слово handle, потом добавляю TargetButton(то-есть куда клик), и потом добавляю имя события Click(то-есть какое событие). И это будет функция handleTargetButtonClick. С таким именем сразу понятно что функция эта делает.
// Это первый паттерн наименования наших обработчиков.

targetBtn.addEventListener('click', handleTargetButtonClick);

function handleTargetButtonClick() {
  console.log('Клик');
}

// *** Второй вариант именования.
// ------------------------------
// Создаю отдельную функцию и в наименовании её пишу сначало targetButton(то-есть куда клик), потом добавляю имя события Click(то-есть какое событие), и в конце handler. И это будет функция targetButtonClickHandler.
// Это второй паттерн наименования наших обработчиков.

targetBtn.addEventListener('click', targetButtonClickHandler);

function targetButtonClickHandler() {
  console.log('Клик');
}

// *** Третий вариант именования.
// ------------------------------
// Создаю отдельную функцию и в наименовании её пишу сначало on, потом добавляю TargetButton(то-есть куда клик), и потом добавляю имя события Click(то-есть какое событие). И это будет функция onTargetButtonClick.
// Это третий паттерн наименования наших обработчиков.

targetBtn.addEventListener('click', onTargetButtonClick);

function onTargetButtonClick() {
  console.log('Клик');
}

// Не важно какой из этих вариантов вы будете использовать, но важно то, чтоб в одном проекте использовался один вариант именования, все должно быть однородно.

// --------------------------------------------------------------------------
// Добавляем и снимаем слушателя динамически.
// -------------------------------------------------------------------------
// Когда я клацну кнопку "Добавить слушатель" - это действие на целевую кнопку вешает слушателя. Тоесть при клике на одну кнопку вешаю слушателя на другую. И тоже самое когда я клацну на кнопку "Снять слушатель" - это действие снимет с целевой кнопки слушателя.

// * Внутри этой функции addListenerBtn я буду добавлять слушателя событий на целевую кнопку.

addListenerBtn.addEventListener('click', () => {
  console.log('Вешаю слушателя событий на целевую кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
});

// * Внутри этой функции removeListenerBtn я буду убирать слушателя событий с целевой кнопки.

removeListenerBtn.addEventListener('click', () => {
  console.log('Снимаю слушателя событий с целевой кнопки');

  targetBtn.removeEventListener('click', onTargetBtnClick);
});

// * Пишу функцию которая регестирирует событие клик.

function onTargetBtnClick() {
  console.log('Клик по целевой кнопке');
}

// --------------------------------------------------------------------------
// Обработчик событий event (Это объект который содержит служебную информацию о событии).
// --------------------------------------------------------------------------
addListenerBtn.addEventListener('click', event => {
  console.log(event);

  console.log('Вешаю слушателя событий на целевую кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Снимаю слушателя событий с целевой кнопки');

  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log('Клик по целевой кнопке');
}
// --------------------------------------------------------------------------
|============================
*/
// ==============================================================
/** Событие сабмита формы (Файл - 02-forms.js) (видео 23:00)
|============================
// ---------------------------------------
//  * - Событие submit
//  * - Действия браузера по умолчанию
//  * - Свойство elements
//  * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
// ---------------------------------------

const form = document.querySelector('.js-register-form');   // Получаю дочтуп к форме.

form.addEventListener('submit', onFormSubmit);              // Вешаю слушателя событий для формы.

function onFormSubmit(event) {
  event.preventDefault();                                   // Предотвращаем по умолчанию перезагрузку вкладки браузером.

  const formData = new FormData(event.currentTarget);       // Делаю ссылку на сам DOM элемент.

  console.dir(formData);

  // Первым параметром объявляем значения этого поля, а вторым параметром имя этого поля.

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
// Что делает formData? - она автоматически проходится по всем интерактивным элементам формы и собирает из них данные которые мы туда ввели. Сохраняет итерируемый объект, буквально как свойство значения, ключ это имя элемента, а значение это значение которое туда ввели.

// Если нужно поработать с отдельными элементами, это formElements.
// Если нужно собрать данные из всей формы, это FormData.

// Это пригодится для работы с серверами, формами.
|============================
*/
// ==============================================================
/** События инпутов и ввода (Паттерн «Объект ссылок», События: focus и blur, input и change, Чекбоксы и свойство checked) (Файл - 03 - input - events.js)
|============================
// ---------------------------------------
//  * Паттерн «Объект ссылок»
//  *
//  * События
//  * - focus и blur
//  * - input и change
//  * - Чекбоксы и свойство checked
// ---------------------------------------

// * Паттерн «Объект ссылок»
// ---------------------------------------
// Паттерн «Объект ссылок» Это объект в котором хранятся ссылки на Html элементы.

const refs = {
  input: document.querySelector('.js-input'), // Ссылка на сам input.
  nameLabel: document.querySelector('.js-button > span'), // Ссылка на span в кнопке.
  licenseCheckbox: document.querySelector('.js-license'), // Ссылка на чекбокс.
  btn: document.querySelector('.js-button'), // Ссылка на саму кнопку.
};
// Эти ссылки мы используем ниже по коду.

// ======================================
// События input.
// ======================================
// Для события мышки.
// ------------------------------
// ** Получение фокуса из JS

refs.input.addEventListener('focus', onInputFocus);
// ----------
// ** Потеря(размытие) фокуса из JS

refs.input.addEventListener('blur', onInputBlur);

// ------------------------------
// Для получения значения input.
// ------------------------------
// ** Событие происходит при потере фокуса.
// ** Довольно странное, оно не полезное.
// ** Использовать его мы не будем на инпутах, только на чекбоксах и на радиобатанах.

refs.input.addEventListener('change', onInputChange);
// ----------
// ** Стандартное событие для работы с текстовыми инпутами, это input.
// ** Для каждого изменения внутри input выводится значение. На каждом клике.

refs.input.addEventListener('input', onInputChange);
// ----------

function onInputFocus() {
  console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() {
  console.log('Инпут потерял фокус - событие blur');
}

function onInputChange(event) {
  //   console.log(event);
  console.log(event.currentTarget.value); // Получаю значение введенное в input.
  //   refs.nameLabel.textContent = event.currentTarget.value;
}
// ======================================
// Реализуем задачу.
// ======================================

refs.input.addEventListener('input', onInputChange);   // Для изменения названия на кнопке.
refs.licenseCheckbox.addEventListener('change', onLicenseChange); // Для активации кнопки.

// Первая часть задания.
// ---------------------
// Нам нужно что бы при вводе текста в input, изменялась часть надписи "Аноним" на кнопке. значение этого <span>Аноним</span> в Html.

function onInputChange(event) {
  console.log(event.currentTarget.value); // Получаю значение введенное в input.
  refs.nameLabel.textContent = event.currentTarget.value;
}

// Вторая часть задания.
// ---------------------
// Нам необходимо что бы эта кнопка была активна только тогда когда мы чекнули чекбокс.

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked; // Кнопка выключена когда элем. не выбран.
}
|============================
*/
// ==============================================================
/** События клавиатуры (Cобытий: keypress, keydown, keyup) (04-keyboard-events.js) (видео 56:33)
|============================
// ---------------------------------------
//  * Типы событий: keypress, keydown, keyup
//  * - Ограничения keypress
//  * - Свойства KeyboardEvent.key и KeyboardEvent.code
// ---------------------------------------
// Ссылки доступа с которыми будем работать.
const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// -----------------------------------------------
// Есть несколько типов события клавиатуры.
// -----------------------------------------------
// ** keypress - Композитная. Реагирует на нажатия клавиши которые генерят символы.
// ** keydown - Реагирует на любое нажатия клавиши включая служебные клавиши.
// ** кейап   - Реагирует на любое отжатие клавиши, включая служебные клавиши.

// ----------------
// Событие keydown и keypress
// ----------------
// Переводим фокус мышки в окно браузера и нажимаем кнопки на клавиатуре, и при этих действиях в консоли регестрируется клики кнопок на которые я нажимаю.

window.addEventListener('keydown', onKeypress1);      // Реагирует на любое нажатия клавиши.

window.addEventListener('keypress', onKeypress1);     // Реагирует на клав. генерящие символы.

function onKeypress1(event) {
  console.log(event);
}

// В зависимости от задачи используем эти клавиши.
// Если нужно прослушивание служебных клавиш к примеру Ctrl или Esc, то выбираем keydown.
// Если не нужно прослушивание служебных клавиш, то выбираем keypress.
// В этом и вся разница.

// ---------------------------------------------------------------
// У объекта события есть два важных свойства code и key (в браузере на объекте события).
// Нажимаю английскую букву Т (клавиатура находится в режиме английского).
// Свойство code: "keyT"
// Свойство key: "t"

// Перевожу клавиатуру в русский язык. Нажимаю ту же кл. (клавиатура в режиме русского).
// Свойство code: "keyT"
// Свойство key: "е"

// Свойство code это физическая кл. на клавиатуре.
// Свойство key это значение символа взависимости от вкл. языка клавиатуры, буква на клавиатуре, которую ввели, которую набираете (прямо сейчас).
// Если мы хотим получить значение нажатой кл. то тогда используем свойство key.
// ---------------------------------------------------------------

// Вешаем слушателя события на окно window.
window.addEventListener('keypress', onKeypress);   

// Очистка введенного нажатием кнопки.
refs.clearBtn.addEventListener('click', onClearOutput); 

function onKeypress(event) {
  console.log('event.key: ', event.key); // Показывает значения символа в зависимости от языка.
  console.log('event.code: ', event.code); // Показывает какую клавишу нажали.

  refs.output.textContent += event.key;
}

// ** Очистка введенного нажатием кнопки.
function onClearOutput() {
  refs.output.textContent = '';
}
|============================
*/
// ==============================================================
/** События мыши () (05-mouse-events.js) (видео 1:05:30)
|============================
// =======================================
//  * События мыши
//  * - mouseenter и mouseleave (это ховер)
//  * - mouseover и mouseout
//  * - mousemove (chatty event - болтливое событие)
//  * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
//  * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
// =======================================
// ** Ховер - Фокус. Пример: Меняем цвет на боксе при наведении мышки.
// ---------------------------------------
const boxRef = document.querySelector('.js-box');         // Получаем ссылку на элемент js-box.
// ---------------------------------------
// * - mouseenter - срабатывает когда мышка заходит в границы блока и находится над ним и  его детьми которые внутри него.
// * - mouseleave - срабатывает когда мышка выходит за границы блока.
// ---------------------------------------
// boxRef.addEventListener('mouseenter', onMouseEnter);   // Когда мышка на боксе.
// boxRef.addEventListener('mouseleave', onMouseLeave);   // Когда мышка выходит за этот бокс

// function onMouseEnter(event) {
//   const box = event.currentTarget;        // Получаем ссылку на этот бокс.
//   box.classList.add('box--active');       // Дабавляем ему класс box--active (его стили в CSS).
// }

// function onMouseLeave(event) {
//   const box = event.currentTarget;        // Получаем ссылку на этот бокс.
//   box.classList.remove('box--active');    // Убираем у него класс box--active.
// }

// function onMouseMove(event) {
//   console.log(event);
// }
// ---------------------------------------
// * - mouseover - Срабатывает когда мышка заходит в границы бокса и работает над самим элементом, как только мышка переходит на детей которые внутри этого бокса, то срабатывает mouseout.
// * - mouseout  - Срабатывает когда мышка над детьми элемента mouseover.
// ---------------------------------------
// boxRef.addEventListener('mouseover', onMouseEnter);    // Когда мышка на боксе.
// boxRef.addEventListener('mouseout', onMouseLeave);     // Когда мышка выходит за этот бокс

// function onMouseEnter(event) {
//   const box = event.currentTarget;                    // Получаем ссылку на этот бокс.
//   box.classList.add('box--active');                   // Дабавляем ему класс box--active (его стили в CSS).
// }

// function onMouseLeave(event) {
//   const box = event.currentTarget;                   // Получаем ссылку на этот бокс.
//   box.classList.remove('box--active');               // Убираем у него класс box--active.
// }

// function onMouseMove(event) {
//   console.log(event);
// }
// ---------------------------------------
// * - mousemove (chatty event - болтливое событие) - Движение мышки.
// Болтливое в том смысле что оно слишком часто происходит.
// ---------------------------------------
boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;                     // Получаем ссылку на этот бокс.
  box.classList.add('box--active');                    // Дабавляем ему класс box--active (его стили в CSS).
}

function onMouseLeave(event) {
  const box = event.currentTarget;                    // Получаем ссылку на этот бокс.
  box.classList.remove('box--active');                // Убираем у него класс box--active.
}

function onMouseMove(event) {
  console.log(event);
}
|============================
*/
// ==============================================================
/** Модальное окно (06-modal.js) (видео 1:16:50)
|============================
// ---------------------------------------
//  * 1. Открыть и закрыть по кнопке onOpenModal и onCloseModal
//  * 2. Закрыть по клику в бекдроп: onBackDropClick
//  * 3. Закрыть по ESC: onEscapeKeypress
//  *
//  * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
// ---------------------------------------

// Ссылки доступа к элементам в Html.
const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

// ** Вешаем слушателей события.
refs.openModalBtn.addEventListener('click', onOpenModal);              // Открыть по кнопке модалку.
refs.closeModalBtn.addEventListener('click', onCloseModal);            // Закрыть по кнопке модалку.
refs.backdrop.addEventListener('click', onBackdropClick);              // Клик в серое модалку закрываем.

// ***** Открыть по кнопке модалку.
function onOpenModal() {
  // Для открытия модалки всё что мне нужно - это на body повесить класс show-modal.
  document.body.classList.add('show-modal');                           // Вешаю класс show-modal на body.

  // Вешаем слушателя событий onEscKeyPress.
  window.addEventListener('keydown', onEscKeyPress);                   // Вешаю слушателя клавиш на window,когда модалка открыта.
}

// ***** Закрыть по кнопке модалку.
function onCloseModal() {
  document.body.classList.remove('show-modal');                        // Снимаю класс show-modal при закрытии модалки.
  window.removeEventListener('keydown', onEscKeyPress);                // Снимаю слушателя на window при закрытии модалки. Что он не прослушивал клавиши при закрытой модалке.
}

// ***** Закрытие модалки по клику в серое.
function onBackdropClick(event) {
  // console.log(event.currentTarget);                                // Текущий эл. Это где висит этот addEventListener
  // console.log(event.target);                                       // target это целевой эл. Это куда мы в интерфейсе жмакнули.
  if (event.currentTarget === event.target) {
    console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal();
  }
}

// ***** Закрытие модалки по клавиши Esc.
function onEscKeyPress(event) {
  // ----- Вариант-1 с константами -----
  const ESC_KEY_CODE = 'Escape';                                     // Делаем переменную ESC_KEY_CODE константу.
  const isEscKey = event.code === ESC_KEY_CODE;                      // Переменная с проверкой.

  if (isEscKey) {
    onCloseModal();
  }
  // ----- Вариант-2 с константами -----
  //   const ESC_KEY_CODE = 'Escape';

  //   if (event.code === ESC_KEY_CODE) {
  //     onCloseModal();
  //   }
  // ----- Вариант-3 без констант -----
  //   console.log(event.code);

  //   if (event.code === 'Escape') {
  //     onCloseModal();
  //   }
}
|============================
*/
// ==============================================================
