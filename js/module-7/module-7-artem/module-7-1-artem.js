/** Доступ к(элементам в контейнере) Делегирование событий.
|============================
const container = document.querySelector('.js-container');

// ** Вариант-1.
// ------------------------------------------
// В этом варианте-1 не рационально используется ресурс, потому что мы вешаем слушателя событий на каждый элемент (каждого ребенка контейнера).

[...container.children].forEach(item =>
  item.addEventListener('click', onClick)
);

function onClick(evt) {
  console.log(evt.currentTarget.dataset.color);
}

// ** Вариант-2. Патерн делегирование событий.
// ------------------------------------------
container.addEventListener('click', onClick);

function onClick(evt) {
  //   console.log(evt.currentTarget.dataset.color);
  if (!evt.target.classList.contains('js-box')) {
    return;
  }
  console.log(evt.currentTarget);
  console.log(evt.target.dataset.color);
}
|============================
*/
// =============================================
/** Крестики нолики (Видео 21:05).
|============================
const container = document.querySelector('.js-content');    
const nameWinner = document.querySelector('.js-winner');

let player = 'X';
let historyX = [];
let historyO = [];

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function createMarkup() {
  let markup = '';
  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }
  container.innerHTML = markup;
}
createMarkup();

container.addEventListener('click', onClick);

function onClick(evt) {
  const { target } = evt;

  if (!target.classList.contains('js-item') || target.textContent) {
    return;
  }

  const id = Number(target.dataset.id);
  let result = false;
  const isEndGame = historyO.length + historyX.length === 9;

  if (player === 'X') {
    historyX.push(id);
    result = isWinner(historyX);
  } else {
    historyO.push(id);
    result = isWinner(historyO);
  }

  target.textContent = player;

  if (result) {
    nameWinner.textContent = `Winner ${player} 😎`; 
    resetGame();
    return;
  } else if (isEndGame) {
    console.log(`Try again 😱`);
    resetGame();
    return;
  }
  player = player === 'X' ? 'O' : 'X';
}

function isWinner(arr) {
  return wins.some(item => item.every(id => arr.includes(id)));
}

function resetGame() {
  createMarkup();
  historyX = [];
  historyO = [];
  player = 'X';
}

// -------------------------------------------------------
// Ниже тот же самый код, но с описанием!
// -------------------------------------------------------
const container = document.querySelector('.js-content');    // Получаем наш контейнер
const nameWinner = document.querySelector('.js-winner');

let player = 'X';              // Создаем одного игрока. По дефолту первый начинает игру наш "Х".
let historyX = [];             // Создаем масив для истории ходов "Х"
let historyO = [];             // Создаем масив для истории ходов "0"

// В масив масивов выписываем выигрышные комбинации для наших полей.
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Функция генерации разметки.
function createMarkup() {
  let markup = '';                   // Аккумулирующая переменная в которую в середине нашего цикла на каждой итерации добавляем div.

  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;

    // В div у нас есть class="item для стилизации, js-item для делегирования событий, чтоб проверить на какой именно элемент был клик, и data-id="${i} для того, чтоб записывать историю ходов кажого игрока.
  }
  
  container.innerHTML = markup;      // Вставляем в наш html элемент container, нашу разметку div, вставляем с помощью innerHTML потому что нам нужно будет несколько раз перерисовывать разметку.
}
createMarkup();                      // Вызов функции генерации разметки.

container.addEventListener('click', onClick);    // На общий отсовский контейнер вешаем слушателя.

// Функция. Реализуем делеагирование событий.
function onClick(evt) {
  const { target } = evt;    // Деструктуризируем target, чтоб каждый раз не писать (evt.target).

  if (!target.classList.contains('js-item') || target.textContent) {
    return;
    // Проверка, если наш целевой элем. по которому кликнули не содержит класса js-item, то мы сразу выходим, или если даже это элем. с классом js-item, но его текстовый контент занятый, то также выходим(return). Если хотябы одно условие подтверждается, то нас эта клетка или элем. по которому мы кликнули не интерисует.
  }

  const id = Number(target.dataset.id);                           // Достаем id клетки и приводим его к числу.
  let result = false;
  const isEndGame = historyO.length + historyX.length === 9;      // Условия для завершения игры.

  if (player === 'X') {
    // Проверка, если текущий игрок который совершил ход был "Х", то мы...
    
    historyX.push(id);                    // В историю ходов крестика пушим id той клетки по которой он кликнул.
    result = isWinner(historyX);          // В переменную result присваиваем результат выполнения функции isWinner, то-есть мы проверяем история ходов "Х" выигрышная комбинация или нет.
  } else {
    historyO.push(id);
    result = isWinner(historyO);
  }

  target.textContent = player;             // Переназначение текстового контента, чтоб зафиксировать ход был крестика или нолика.

  if (result) {
    // Проверка, если result === true, то у нас есть уже победитель.

    nameWinner.textContent = `Winner ${player} 😎`;           // Прописываем кто выиграл
    resetGame();                                               // Вызов функции перезагрузка игры.
    return;
  } else if (isEndGame) {
    console.log(`Try again 😱`);
    resetGame();
    return;
  }
  player = player === 'X' ? 'O' : 'X';                         // Переиспользование игрока
}
// Функции isWinner, проверяет история ходов "Х" выигрышная или нет.
function isWinner(arr) {
  return wins.some(item => item.every(id => arr.includes(id)));

  // Перебираем масив wins с помощью метода some() - хотябы один элемент из данного масива удовлетворяет наше условие, на каждой итерации получаем по очереди каждый подмасив лежащий в wins, и спомощью метода every() - проверяем каждый элемент подмасива, он выдает true в том случае если каждый элемент удовлитворит его условие - arr.includes(id). А условие такое arr.includes(id) - если в историю игрока входит каждый элемент, если все три элем. true, то общий высновок true, если хотя бы один элемент false, то every() сразу преостанавливает своё выполнение.
}
// Функция перезагрузки игры, которая...
function resetGame() {
  createMarkup();                     // Вызывает функцию создания розметки.
  historyX = [];                      // Обозначает пустым масивом нашу историю "Х".
  historyO = [];                      // Обозначает пустым масивом нашу историю "0".
  player = 'X';                       // Возвращает player Крестиком.
}
|============================
*/
// =============================================
/** ДЗ какточки авто с библиотекой (Видео 1:38:10).
|============================
// Масим объектов с автомобилями.
const cars = [
  {
    id: 1,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 2,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    car: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 4,
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 5,
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

// ---------------------------------------------------------------
// ** Из библиотеки.
// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);
// console.log(instance);
// instance.show();
// ---------------------------------------------------------------

const container = document.querySelector('.js-container');

// Создаем наши карточки.
const markup = cars.map(
  ({ img, car, id }) => `
    <li data-car-id="${id}" class="js-target js-card">
        <img class="js-target" src="${img}" alt="${car}" width="200" />
        <h2 class="js-target">${car}</h2>
    </li>`
);

container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onClick);

function onClick(evt) {
  const { target } = evt;
  if (!target.classList.contains('js-target')) {
    return;
  }

  // ** вариант-1
  const carId =
    target.dataset.carId ?? target.closest('.js-card').dataset.carId;
  // ** вариант-2  const carId = target.dataset.carId ?? target.closest('.js-target');
  // ** вариант-3  const carId = target.dataset.carId ?? target.closest('li').dataset.carId;
  const currentItem = cars.find(({ id }) => id === Number(carId));
  //   console.log(currentItem);

  if (!currentItem) {
    const instance = basicLightbox.create(`
      <div class="bg">
        <img src="https://www.shutterstock.com/image-vector/no-image-available-icon-ui-600w-1458092489.jpg" width="300" alt="placeholder">" width="300" alt="placholder" />
      </div>
    `);
    instance.show();
    return;
  } else {

    const instance = basicLightbox.create(`
      <div class="bg">
        <img src="${currentItem.img}" width="300" alt="${currentItem.car}" />
        <h2>${currentItem.car}</h2>
        <h3>${currentItem.type}</h3>
        <p>${currentItem.price}</p>
      </div>
 `);
    instance.show();
  }
}

// Разъясняет что мы написали (видео 2:19:43).

// -----------------------------------------------------
// Ниже тот-же самый код но с пояснениями.
// -----------------------------------------------------

const container = document.querySelector('.js-container');     // Получаем наш ul из html.

// Создаем наши карточки.
const markup = cars.map(
  ({ img, car, id }) => `
    <li data-car-id="${id}" class="js-target js-card">
        <img class="js-target" src="${img}" alt="${car}" width="200" />
        <h2 class="js-target">${car}</h2>
    </li>`
);

container.insertAdjacentHTML('beforeend', markup.join(''));   // Помещаем наши карточки в DOM.
container.addEventListener('click', onClick); // Добавляем на общий отсовский ел. слушателя.

// Реализуем делегирование событий.
function onClick(evt) {
  const { target } = evt;              // Деструктуризируем target (элемент по которому мы кликнули).
  if (!target.classList.contains('js-target')) {
    // Если в список классов данного ел. не входит класс "js-target", то сразу выходим из функции (return).
    return;
  }
  //   console.log(evt.target);

  // ** Указываем переменную carId (время 2:21:00)
  //  - Мы пытаемся элем. по которому кликнули(target) достать дата-атрибут id (.dataset.carId).
  // ** Используем оператор нолевого сравнения "??".
  //  ?? - Работает на два значения (null и undefined).
  //  || - Работает на шесть значений которые всегда вернут false,- это: ('', 0, null, false, undefined, Nan).

  // ** вариант-1
  const carId =
    target.dataset.carId ?? target.closest('.js-card').dataset.carId;
  // ** вариант-2  const carId = target.dataset.carId ?? target.closest('.js-target');
  // ** вариант-3  const carId = target.dataset.carId ?? target.closest('li').dataset.carId;
  const currentItem = cars.find(({ id }) => id === Number(carId));
  //   console.log(currentItem);

  if (!currentItem) {
    const instance = basicLightbox.create(`
      <div class="bg">
        <img src="https://www.shutterstock.com/image-vector/no-image-available-icon-ui-600w-1458092489.jpg" width="300" alt="placeholder">" width="300" alt="placholder" />
      </div>
    `);
    instance.show();
    return;
  } else {
    // Создаем экземпляр класса (модалки).
    const instance = basicLightbox.create(`
      <div class="bg">
        <img src="${currentItem.img}" width="300" alt="${currentItem.car}" />
        <h2>${currentItem.car}</h2>
        <h3>${currentItem.type}</h3>
        <p>${currentItem.price}</p>
      </div>
 `);
    instance.show(); // Берем из библиотеки.
  }
}
|============================
*/
// ---------------------------------------------------------------------------------------
/** stopPropagation() (Видео 2:30:17)(Видео 2:38:50)
|============================
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

parent.addEventListener('click', () => {
  alert(
    'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
  );
});

child.addEventListener('click', event => {
  event.stopPropagation();
  alert(
    'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
  );
});

descendant.addEventListener('click', event => {
  alert('Descendant click handler');
});
|============================
*/
// ---------------------------------------------------------------------------------------
/** Emmit вопрос из таблицы (Видео 2:48:50)
|============================
const emmetConfig = {
  'editor.matchBrackets': 'never',
  '[javascript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  '[json]': {
    'editor.defaultFormatter': 'vscode.json-language-features',
  },
  '[jsonc]': {
    'editor.defaultFormatter': 'vscode.json-language-features',
  },
  'liveServer.settings.donotShowInfoMsg': true,
  '[html]': {
    'editor.defaultFormatter': 'HookyQR.beautify',
  },
  'editor.renderWhitespace': 'all',
  '[scss]': {
    'editor.defaultFormatter': 'HookyQR.beautify',
  },
  '[css]': {
    'editor.defaultFormatter': 'HookyQR.beautify',
  },
  'editor.detectIndentation': false,
  'liveServer.settings.donotVerifyTags': true,
  'redhat.telemetry.enabled': true,
  'workbench.editor.enablePreview': false,
  'explorer.confirmDelete': false,
  '[javascriptreact]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  'window.zoomLevel': 4,
  '[typescript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  '[markdown]': {
    'editor.wordWrap': 'wordWrapColumn',
  },
  'emmet.preferences': {},
};
|============================
*/
// ---------------------------------------------------------------------------------------
