/** Распространение событий (Всплытие событий - Bubbling Phase).
|============================
 * Всплытие событий
 * event.target - целевой (исходный) элемент
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие
// --------------------------------------
// Всплытие событий (Bubbling Phase).
// --------------------------------------
// Не все события всплывают, focus и blur не всплывают.

const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(evt) {
  console.log('onParentClick');
  console.log('onParentClick -> evt.target', evt.target);
  console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}

function onChildClick(evt) {
  console.log('onChildClick');
  console.log('onChildClick -> evt.target', evt.target);
  console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
}

function onInnerChildClick(evt) {
  console.log('onInnerChildClick');
  console.log('onInnerChildClick -> evt.target', evt.target);
  console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget);
}
|============================
*/
// -------------------------------------------------------------------------------
/** (Видео 14:50) Делегирование событий. Ловим клик по кнопкам в контейнере кнопок 
|============================
// Делегирование событий. Ловим клик по кнопкам в контейнере кнопок (Видео 14:50)
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(evt) {
  console.log(evt);
  console.log(evt.target);               // <button type="button">Кнопка 1</button> (Куда кликнули).
  console.log(evt.target.textContent);   // Кнопка 1 (получу текстовый контент кнопки).

  // Я хочу чтоб тело этой функции срабатывало только тогда когда я кликнул на кнопку, а по клику на контейнер в котором лежат кнопки не срабатывало. Свойство nodeName.
  // console.log(evt.target.nodeName);   // BUTTON

  // Если клик не по кнопке, то уходим. Патерн "гадклоус" то уходим.
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  // console.log(evt.target.textContent); // Кнопка 1
}

// ** Код добавления кнопок
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}
|============================
*/
// -------------------------------------------------------------------------------
/** (Видео 25:00) Практика. Мастерская: теги 
|============================
// Практика. Мастерская: теги (Видео 25:00)
//  * Делегирование
//  * - один из многих
//  * - несколько из многих и Set

const tagsContainer = document.querySelector('.js-tags');
// console.log(tagsContainer);               // 1) Проверяем, получаем доступ к ul

let selectedTag = null;

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  // console.log(evt.target);                // 2) Выведет то, куда был клик, в кнопку или в ul, или в li.
  // console.log(evt.target.nodeName);       // 3) BUTTON (Проверяем что клик именно по кнопке).

  // ** Делаем проверку, если это не кнопка, тогда не делаем ничего.
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(evt.target);

  // ** Создаём слушателя активного состояния для элемента на котором будет клик.
  const currentActiveBtn = document.querySelector('.tags__btn--active');

  // ** Делаем проверку, (если currentActiveBtn - true), то-есть если уже есть активный елемент, то снимаем с него активность (класс tags__btn--active), и вешаем его на другой элем. на котором произошол клик.
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('tags__btn--active');   // Удаляем активный класс с ел.
  }
  const nextActiveBtn = evt.target;
  nextActiveBtn.classList.add('tags__btn--active'); // Добавл.актив.класс ел. на котором клик.
  selectedTag = nextActiveBtn.dataset.value;

  console.log(selectedTag);    // html, css, javascript (выводит тот элемент на котором клик).
}
|============================
*/
// -------------------------------------------------------------------------------
/** (Видео 38:40) Мастерская: теги. Все тоже самое, но пример с новым оператором (?.) заменяющим if() при доступе к свойству. 
|============================
const tagsContainer = document.querySelector('.js-tags');

let selectedTag = null;

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.tags__btn--active');

  // --------
  // ** Новый операторо (?.) замена для if()
  // if (currentActiveBtn) {
  //   currentActiveBtn.classList.remove('tags__btn--active');
  // }

  // ** Новый оператор (?.) он заменяет if() при доступе к свойству.
  // - Этот оператор ?. - что он делает - это необязательное свойство. Как он работает.
  // - Если в currentActiveBtn есть что - то объект допустим, не null, не undefuned, то оно будет выполнять код который правее. Если в currentActiveBtn(null или undefuned), то код правее не будет выполняться.

  currentActiveBtn?.classList.remove('tags__btn--active');
  // --------

  const nextActiveBtn = evt.target;
  nextActiveBtn.classList.add('tags__btn--active');
  selectedTag = nextActiveBtn.dataset.value;

  console.log(selectedTag);
}
|============================
*/
// -------------------------------------------------------------------------------
/* (Видео 40:08) Разъясняет как работает оператор (?.) и для чего он нужен. */
// -------------------------------------------------------------------------------
/** (Видео 43:20) Мастерская: теги. Делаем чтоб этих тегов можно было выбрать много. classList.toggle() 
|============================
// ------------------------------
(Видео 43:20) .classList.toggle()
// ------------------------------
// Проблема этого варианта в том что даже при клике на уже активный элемент активность снимется, но все равно он запушится в масив.
// ------------------------------
const tagsContainer = document.querySelector('.js-tags');

const selectedTags = [];

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  // Если клас есть, то снимет его, если нет то добавит класс.
  evt.target.classList.toggle('tags__btn--active');

  selectedTags.push(evt.target.dataset.value);
  console.log(selectedTags);
}
  
// ------------------------------
(Видео 47:20) new Set() наборы. Set - это набор уникальных элементов, дубляжи не пропускает.
// ------------------------------
const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags__btn--active');

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle('tags__btn--active');
  console.log(selectedTags);
}
|============================
*/
// -------------------------------------------------------------------------------
/** Мастерская: колорпикер (Видео 1:00:25)
|============================
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

// ----------------------------------------
// Предварительный вариант без оптимизации.
// ----------------------------------------
const paletteContainer = document.querySelector('.js-palette');      // Получ. доступ к контейнеру.
const cardsMarkup = createColorCardsMarkup(colors);                  // Переменная вызывает функцию создания разметки.

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);       // Вставляем разметку в DOM ел.

paletteContainer.addEventListener('click', onPaletteContainerClick); // Делегирование вешаем, слушателя на контейнер.

// ** Функция создания разметки по шаблону. Она рендерит всю нашу разметку.
function createColorCardsMarkup(colors) {                     
  return colors
    .map(({ hex, rgb }) => {
      return `
        <div class="color-card">
          <div>
            <div>
              <div> 
                <div
                  class="color-swatch"
                  data-hex="${hex}"
                  data-rgb="${rgb}"
                  style="background-color: ${hex}"
                >
                </div>
              </div>
            </div>
          </div>
          <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
          </div>
        </div>
        `;
    })
    .join('');
}

// ** Функция проверки куда мы кликнули. Если клик не в цвет, а в пространство вокруг, то ничего не делаем.
function onPaletteContainerClick(evt) {  
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');   // Проверяем есть ли класс на елем.
  if (!isColorSwatchEl) {                                                  // Если это не isColorSwatchEl, то выходим.
    return;
  }

  const currentActiveCard = document.querySelector('.color-card.is-active');  // Ищем текущую активн. карточку.

  if (currentActiveCard) {                                    // И если она есть, то у неё удаляем активный класс.
    currentActiveCard.classList.remove('is-active');          // Удаляем активный класс.
  }

  const swatchEl = evt.target;                            // Создаем переменную и вкладываем в неё целевой элемент.

  // ** Ищем ближайщего предка, с таким селектором с помощью closest(), он ищет только вверх по вложенности.
  const parentColorCard = swatchEl.closest('.color-card');    

  parentColorCard.classList.add('is-active');                     // Добавляем активный класс на предка.
  document.body.style.backgroundColor = swatchEl.dataset.hex;     // Ставим на body, цвет карты на которой клик.

  // console.log(evt.target);
  // console.log(evt.target.dataset.hex);
  // console.log(parentColorCard);
}

// -----------------------------------------------------------
// Вариант с оптимизацией кода написаного выше. (Видео 1:28:18)
// Разносим несколько действий одной функции в разные функции.
// -----------------------------------------------------------

const paletteContainer = document.querySelector('.js-palette');  // Получаем доступ к контейнеру.
const cardsMarkup = createColorCardsMarkup(colors);              // Переменная вызывает функцию создания разметки.

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);       // Вставляем разметку в DOM елемент.

paletteContainer.addEventListener('click', onPaletteContainerClick); // Делегирование, вешаем слушателя на контейнер.

// ** Функция для создания разметки по шаблону. Она рендерит всю нашу разметку.
function createColorCardsMarkup(colors) {                
  return colors
    .map(({ hex, rgb }) => {
      return `
      <div class="color-card">
        <div>
          <div>
            <div>
              <div
                class="color-swatch"
                data-hex="${hex}"
                data-rgb="${rgb}"
                style="background-color: ${hex}"
              ></div>
            </div>
          </div>
        </div>

        <div class="color-meta">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
      </div>`;
    })
    .join('');
}


// ** Функция проверки куда мы кликнули. Если клик не в цвет, в пространство вокруг, ничего не делаем.
function onPaletteContainerClick(evt) {  
  const isColorSwatchEl = evt.target.classList.contains('color-swatch');   // Проверяем есть ли класс на елем.

  if (!isColorSwatchEl) {                                  // Если это не isColorSwatchEl, то выходим.
    return;
  }

  const swatchEl = evt.target;                             // Создаем переменную и вкладываем в неё целевой элемент.
  const parentColorCard = swatchEl.closest('.color-card'); // Ищем ближайщего предка, с таким селектором с помощью closest(), он ищет только вверх по вложенности.

  removeActiveCardClass();                                 // Вызов функции.
  addActiveCardClass(parentColorCard);                     // Вызов функции добавления класса.
  setBodyBgColor(swatchEl.dataset.hex);                    // Вызов функции замены цвета на body.
}

// ** Функция меняет цвет на body.
function setBodyBgColor(color) {                           
  document.body.style.backgroundColor = color;             // Ставим на body, цвет карты на которой клик.
}

// ** Функция снимает класс с активного элемента если он есть, и добовлять на родительский елемент.
function removeActiveCardClass() {                         
  const currentActiveCard = document.querySelector('.color-card.is-active');  // Ищем текущую активную карточку.

  if (currentActiveCard) {                                // И если она есть, то у неё удаляем активный класс.
    currentActiveCard.classList.remove('is-active');      // Удаляем активный класс.
  }
}

// ** Функция добавления класса.
function addActiveCardClass(card) {                        
  card.classList.add('is-active');                         // Добавляем активный класс на предка.
}

|============================
*/
// -------------------------------------------------------------------------------
