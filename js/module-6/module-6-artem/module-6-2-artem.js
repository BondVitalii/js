import cars from './cars-6-2.js';
// console.log(cars);
// ================================================================
/** Пример-1 Создаем элемент квадрат и заставляем его двигаться.
|============================

const button = document.querySelector('.js-click');         
const container = document.querySelector('.js-container');  

button.addEventListener('click', onClick); 

container.addEventListener('click', onClick);

let step = 0;

function onClick(evt) {
  step += 5;             
  container.style.marginLeft = `${step}px`;   
  container.style.marginTop = `${step}px`;    
  console.log(evt.currentTarget);
}

// Ниже идёт полное разьяснение этого кода.
  
// ================================================================
// Получаем доступ к элементам Html. Через document.querySelector()

const button = document.querySelector('.js-click');         // Получаем доступ к кнопке.
const container = document.querySelector('.js-container');  // Получаем доступ к контейнеру.

// Добавляем слушателей событий на элементы. С помощью addEventListener().
// В параметрах слушателя событий прописываем два параметра.
// - Первый параметр - это (тип ивента)событие на которое мы хотим подписаться(слушатель).
// - Второй параметр - это колбек функция.
// - Слушатель событий всегда возвращает (объект event) - это объект с интерфейсом.
// Из интерфейса объекта event нас интерисует: currentTarget и target.
// ** currentTarget - Это тот элемент (объект), на который мы добавили слушателя событий.
//    - Браузер прописывает currentTarget как null (currentTarget: null).
// ** target

// Движение контейнера по клику на кнопку.

button.addEventListener('click', onClick);      // Добавляем слушателя событий на кнопку.

// Движение контейнера по клику на контейнер.

container.addEventListener('click', onClick);   // Добавляем слушателя событий на сонтейнер.

let step = 0;                       // Создаем переменную для шага сдвига нашего контейнера.

// Пишем колбэк функцию.
// В скобочках параметра функции указываем необязательный параметр event, который нам возвращает слушатель событий. Оглашать event в параметрах колбэк функции не обязательно. Если нужен - то оглашаем, ели не нужен - то не оглашаем.

function onClick(evt) {
  step += 5;             // Каждый раз при клике для данного step(шаг сдвига) добовляем 5px.
  container.style.marginLeft = `${step}px`;   // Cдвигаем контейнер в право.
  container.style.marginTop = `${step}px`;    // Cдвигаем контейнер в вниз.
  console.log(evt.currentTarget);
}
|============================
*/
// ================================================================
/** Пример-2 (Вариант-1) Текст для выпадающего меню (обрезание текста по клику)
|============================

const title = document.querySelector('.js-title');
const maxLength = 13;
const totalLength = maxLength + 3;

title.addEventListener('click', onClick);

function onClick(evt) {
  const title = evt.currentTarget;
  const str = title.textContent.slice(0, maxLength);

  if (title.textContent.length > totalLength) {
    const remainder = title.textContent.slice(maxLength);

    title.setAttribute('data-title', remainder);
    title.textContent = str + '...';
  } else {
    const remainder = title.dataset.title;
    title.textContent = str + remainder;
    console.log(remainder);
  }
}

// Ниже идёт полное разьяснение этого кода.

// ================================================================
// Получаем доступ к 'h1'
const title = document.querySelector('.js-title');

// Создаем перемен., и указываем кол-во остающихся символов строки, остальные обрезаем.
const maxLength = 13;

// Создаем переменную и указываем что она равняется обрезаной строке + три точки.
const totalLength = maxLength + 3;

// Вешаем слушателя по клику на title(h1).
title.addEventListener('click', onClick);

// Создаем колбэк функцию для клика.
function onClick(evt) {
  // Создаём локальную переменную в которую выносим evt.currentTarget.
  const title = evt.currentTarget;

  // Обрезаем строку по количеству символов 13.
  const str = title.textContent.slice(0, maxLength);

  // Пишем условие if else.
  // Если длина строки больше чем нами заданная totalLength(13 символов), то выполняем действия по обрезке этой строки и добавлению трех точек.
  // В противном случае в теле else, когда строка уже обрезана, возвращаем её в исходное состочние, в вид полной строки без точек.

  if (title.textContent.length > totalLength) {
    // Получаем обрезаемую часть строки.
    const remainder = title.textContent.slice(maxLength);

    // Добавляем (дата-атрибут 'data-title').
    // Добавляем обрезаемую часть(остаток) текста в дата-атрибут с помощью setAttribute(). Первым парам., пишем название (дата-атрибута 'data-title'), а вторым парам., переменную с остатком строки.
    title.setAttribute('data-title', remainder);

    // Говорим что наш title(h1), сейчас равняется обрезаной строке и добовляем три точки.
    title.textContent = str + '...';
  } else {
    // Добавляем через dataset к нашей обрезаной строке, (дата-атрибут 'data-title') - остаток нашей строки которая была отрезана. Так же эту операцию можно сделать с помощью метода getAttribute()
    const remainder = title.dataset.title;

    // К нашей оригинальной строке без трёх точек добавляем остаток строки, та что в (дата-атребуте 'data-title').
    title.textContent = str + remainder;

    console.log(remainder);
  }
}
|============================
*/
// ================================================================
/** Пример-3 (Вариант-2) Почему лучше работать с event.currentTarget, а не с элементом на прямую. (Видео 30: 40)
|============================
// ================================================================
// Пример. Почему лучше работать с event.currentTarget, а не с элементом на прямую.
// (Видео 30: 40)
// ================================================================
// От предыдущего варианта я убрал все коментарии разьяснения.
// Добавили три li с h2 с селекторами '.js-title', '.js-title1', '.js-title2'. И так-же повесили три слушателя. Так-же эти три li добавлены в Html.
// Закоментировал строку с const title = evt.currentTarget.
// Все больше никаких изменений не вносил.
// Этот пример для понимания почему лучше работать с const title = evt.currentTarget

const title = document.querySelector('.js-title');
const title1 = document.querySelector('.js-title1');
const title2 = document.querySelector('.js-title2');

title.addEventListener('click', onClick);
title1.addEventListener('click', onClick);
title2.addEventListener('click', onClick);

const maxLength = 13;
const totalLength = maxLength + 3;

function onClick(evt) {
  // Если я убираю эту строку, то обрезаться будет только первая строка.
  // А с этой строкой обрезаются все три строки когда я клацаю по ним.
  //   const title = evt.currentTarget;

  const str = title.textContent.slice(0, maxLength);

  if (title.textContent.length > totalLength) {
    const remainder = title.textContent.slice(maxLength);
    title.setAttribute('data-title', remainder);
    title.textContent = str + '...';
  } else {
    const remainder = title.dataset.title;
    title.textContent = str + remainder;
  }
}
|============================
*/
// ================================================================
/** Пример-4 (Вариант-3) Если строка меньше по длинне чем заданная по умолчанию.
|============================
// ================================================================
// Пример. Если строка меньше по длинне чем заданная по умолчанию.
// ================================================================
// Все тоже самое, но только добавили еще один if(условие)

const title = document.querySelector('.js-title');
const title1 = document.querySelector('.js-title1');
const title2 = document.querySelector('.js-title2');

title.addEventListener('click', onClick);
title1.addEventListener('click', onClick);
title2.addEventListener('click', onClick);

const maxLength = 13;
const totalLength = maxLength + 3;

function onClick(evt) {
  const title = evt.currentTarget;

  const str = title.textContent.slice(0, maxLength);

  if (title.textContent.length > totalLength) {
    const remainder = title.textContent.slice(maxLength);
    title.setAttribute('data-title', remainder);
    title.textContent = str + '...';
  } else {
      const remainder = title.dataset.title;
    // -------------- добавили еще один if(условие) --------------------------
    if (remainder) {
      title.textContent = str + remainder;
    }
  }
}
|============================
*/
// ================================================================
/** Пример-5 Работаем с input (видео 45:10)
|============================
// ================================================================
// Событие input и change
// ================================================================
const userName = document.querySelector('.js-input');

// userName.addEventListener('input', onInput); // Событие input сработает сразу при нажатии клавиши.

userName.addEventListener('change', onInput); // Событие change сработает после потери фокуса.

function onInput(evt) {
  console.log(evt.currentTarget); // Для получения всего содержимого нашей строки.

  // * Для получения значения введённого пользователем, используем console.dir().

  console.dir(evt.currentTarget.value); // Получаем то, что ввёл пользователь.
}

// Где может быть использовано событие input? Где угодно.
// Хотим получить имя пользователя.
// Хотим получить пароль пользователя.
// Хотим получить никнаме пользователя.
// Хотим получить что угодно от пользователя.
|============================
*/
// ================================================================
/** Пример-6 Работа с формой 
|============================
// ================================================================
// События элементов форм.
// Для прослушивания input может быть несколько событий.
// Это может быть событие submit
// Это может быть событие input
// Это может быть событие change
// Это может быть событие focus и blur
// ================================================================
// Дефолтное поведение атрибутов и элементов Html.
//  * У атрибута submit дефолтнаое поведение - перезагружать страницу.
//  * У тега (а - у ссылки) дефолтнаое поведение - переадрисация на другой сайт.
// Поэтому всегда нужно сбрасывать дефолтное поведение с помощью .preventDefault().

const formEl = document.querySelector('.js-form');

// * При работе с формой мы всегда будем использовать событие submit.

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();          // Сбрасываем базовые настройки (перезагрузку страницы).

  // * Для обработки формы и её элементов на каждой форме есть вкладка elements (в браузере).

  const { userAge, userEmail, userName } = evt.currentTarget.elements; // Деструктуризируем.

  //   console.dir(userName.value);       // Возвращает содержимое инпута userName
  //   console.dir(userEmail.value);      // Возвращает содержимое инпута userEmail
  //   console.dir(userAge.value);        // Возвращает содержимое инпута userAge

  // * Отправляем данные на бэкэнд. Собераем это все в один объект.

  const data = {
    name: userName.value,
    email: userEmail.value,
    age: userAge.value,
  };
  console.log(data);
}
|============================
*/
// ================================================================
/** Пример-7 События клавиатуры. (Видео 1:22:45) Скрываем и открываем контейнер по нажатию клавиши.
|============================
// ================================================================
// События клавиатуры. 
// ================================================================
// События клавиатуры в отличии всех других событий не вешаются на элементы. Они вешаются на сам документ, на весь Html.
// Типы событий клавиатуры - это keydown, keyup, keypress.
//  * keydown - Данное событие вызывается в то момент когда мы нажимаем клавишу.
//  * keyup - Данное событие вызывается в то момент когда мы отпускаем клавишу.
//  * keypress - (устаревший) Работает на нажатие клавиш, но не работает с служебными клавишами.
// Нас интерисует в свойствах событий клавиатуры: code, key, keyCode. (keyCode - устаревший).

// ----------------------------------------------------------------
// Прячем и показываем снова контейнер при нажатию клавиши Esc или клавиши Enter.
// ----------------------------------------------------------------
const container = document.querySelector('.js-container');

document.addEventListener('keydown', onKey);

function onKey(evt) {
  console.log(evt.code);

  if (evt.code === 'Escape' || evt.code === 'Enter') {
    container.classList.toggle('tog');
  }
}
// ----------------------------------------------------------------
// Нажатие двух кнопок одновременно. К примеру Ctrl + Shift. (видео 1:38:00)
// ----------------------------------------------------------------
const container = document.querySelector('.js-container');

document.addEventListener('keydown', onKey);

function onKey(evt) {
  if (evt.ctrlKey && evt.code === 'KeyC') {
    evt.preventDefault();
    alert('Копируешь?');
    return;
  }
}
|============================
*/
// ================================================================
/** Пример-8 Работа с коллекцией автомобилей cars (видео 1:47:15)
|============================
const list = document.querySelector('.js-list');
const form = document.querySelector('.js-search-form');

form.addEventListener('submit', onSearch);

function createMarkup(arr) {
  return arr
    .map(
      ({ id, car, type, price, img }) => `      
    <li data-id="${id}">
        <img src="${img}" alt="${car}" width="300"/>
        <h2>${car}</h2>
        <h3>${type}</h3>
        <p>${price}</p>
    </li>`
    )
    .join('');
}

list.insertAdjacentHTML('beforeend', createMarkup(cars));

function onSearch(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;

  const { query, select } = form.elements;
  const searchCars = cars.filter(
    item =>
      item[select.value].toLowerCase() === query.value.trim().toLowerCase()
  );

  list.innerHTML = createMarkup(searchCars);
}

// Ниже идёт полное разьяснение этого кода.

// ==========================================================================
// * (1) Получаем доступ к элементам Html.

const list = document.querySelector('.js-list');
const form = document.querySelector('.js-search-form');

// * (4) Добавляем слушателя на форму.

form.addEventListener('submit', onSearch);

// * (2) Создаем функцию для того чтобы можно было переиспользовать шаблон.

function createMarkup(arr) {

  // * (2.1) Создаём разметку-шаблон и ретёрним его.
  // -- разметку вставляем в метод.map() и деструктуризируем свойствами из объекта.
  // -- прогоняем через метод.join() - для превращения масива пришедшего от.map() в строку.

  return arr
    .map(
      ({ id, car, type, price, img }) => `      
    <li data-id="${id}">
        <img src="${img}" alt="${car}" width="300"/>
        <h2>${car}</h2>
        <h3>${type}</h3>
        <p>${price}</p>
    </li>`
    )
    .join('');
}

// * (3) Для добавления первый раз разметки в DOM дерево, используем .insertAdjacentHTML().

list.insertAdjacentHTML('beforeend', createMarkup(cars));

// * (5) Создаем колбэк функцию.

function onSearch(evt) {
  // * (6) Сбрасываем базовые настройки (перезагрузку страницы) с помощью preventDefault().

  evt.preventDefault();

  // * (7) Получаем доступ к форме, чтоб мы могли считать с неё значения полей.

  const form = evt.currentTarget;
  //   console.dir(form);                 // form.js-search-form

  // * (8) В браузере в инпут вводим Honda и смотрим в интерфейсе объекта в свойстве elements к каким элементам у нас есть доступ и деструктуризируем их.

  // (8) Деструктуризируем свойства elements.

  const { query, select } = form.elements; 

  // * (8) Получаем элементы коммуникации, то что ввёл пользователь. Смотрим его value.

  //   console.dir(query); // (8.1) input - Смотрим его value.
  //   console.dir(select); // (8.1) select - Смотрим его value.
  //   console.dir(query.value); // (8.2) марка - Honda  // модель - Honda
  //   console.dir(select.value); // (8.2) марка - car   // модель - type

  // * (9) На основании того что ввёл пользователь, фильтруем коллекцию.

  const searchCars = cars.filter(
    item =>
      item[select.value].toLowerCase() === query.value.trim().toLowerCase()
  );

  // Разьяснение того что написано в .filter().
  //  - В .filter() задаем item - это наш объект на этерации (карточка авто).
  //  - Нам нужно получить доступ к car и к type из select.
  //  - Когда нам нужно получить значение ключа и при этом название приходид как строка, то мы подставляем через квадратные скобки []. Select возвращакет строку, значит нам нужен доступ к ключу объекта через квадратные скобки "item[select.value]". На место "[select.value]" будет подсавляться или car, или type.
  //    -- По желанию можем select.value сохранить в отдельную переменную.
  //      --- пример (const selectValue = select.value;).
  //      --- и тогда в квадратных скобках подставлять её. item[selectValue].
  //  - Сравниваем === с тем что ввёл пользователь "query.value"
  //  - Пользователь может ввести буквы в разном регистре и с пробелами.
  //  - С помощью .toLowerCase() приводим все буквы к единому регистру .
  //  - С помощью .trim() мы убираем пробелы в начале и конце. Пробелы это тоже символы.
  //  Проверяем в браузере.

  //   console.log(searchCars);

  // * (10) После того как мы нашли совпадение, имеем возможность переиспользования.
  //   - При помощи innerHTML заменяем разметку в DOM.
  //   - innerHTML (заменит - перерисует) все что было на новое.

  list.innerHTML = createMarkup(searchCars);
}
|============================
*/
// ================================================================
/** Пример-9 Работа с коллекцией cars, добавить в избранное (видео 2:12:20)
|============================
const list = document.querySelector('.js-list');
const favoriteList = document.querySelector('.js-favorite-list'); // Добавили. <-----
const form = document.querySelector('.js-search-form');

form.addEventListener('submit', onSearch);

list.addEventListener('click', onClick); // Добавили. <------------------------------

function createMarkup(arr) {
  // В разметку добавили div с звёздочкой. <-----------------------------------------
  return arr
    .map(
      ({ id, car, type, price, img }) => `
    <li data-id="${id}">
        <img src="${img}" alt="${car}" width="300"/>
        <div class="js-favorite">★</div>
        <h2>${car}</h2>
        <h3>${type}</h3>
        <p>${price}</p>
    </li>`
    )
    .join('');
}

list.insertAdjacentHTML('beforeend', createMarkup(cars));

function onSearch(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;

  const { query, select } = form.elements;
  const searchCars = cars.filter(
    item =>
      item[select.value].toLowerCase() === query.value.trim().toLowerCase()
  );

  list.innerHTML = createMarkup(searchCars);
}

//  Добавили колбэк функцию. <-------------------------------------------------------
function onClick(evt) {
  // Расписую что в if.
  // Если тот элемент(evt.target) по которому я кликнул, его список классов(.classList), содеожит(.contains()) класс js-favorite, то (тело if) покажи мне этот элемент.
  if (evt.target.classList.contains('js-favorite')) {
    evt.target.classList.add('js-favorite-active');
    //   console.log(evt.target);
    const { id } = evt.target.closest('li').dataset;
    // console.log(id);
    const { car, type } = cars.find(({ id: carId }) => carId === Number(id));
    // console.log(currentCar);
    addFavorite(`${car} ${type}`);
  }
}
function addFavorite(currentCar) {
  favoriteList.insertAdjacentHTML('beforeend', `<li>${currentCar}</li>`);
}
|============================
*/
// ================================================================
/** Ответы на вопросы по домашке (видео 2:26:55)
|============================
1) (видео 2:26:55) Разбор дз-6 задача-1
|============================
*/
// ================================================================
