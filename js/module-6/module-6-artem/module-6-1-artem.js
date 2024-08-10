import cars from './cars.js';

// console.log(cars);

// ================================================================
// Получение доступа к элементам.
// ================================================================
// const title = document.querySelector('.js-title');  // Получаем доступ к h1 по классу.
// const title1 = document.querySelector('h1');        // Получаем доступ к h1 по тегу.
// const title2 = document.querySelector('#title');    // Получаем доступ к h1 по id.

// console.log('По классу:', title);                    // По классу: <h1 id="title" class="js-title">Hello world</h1>

// console.log('По тегу:', title1);                     // По тегу: <h1 id="title" class="js-title">Hello JS</h1>

// console.log('По id:', title2);                       // По id: <h1 id="title" class="js-title">Hello JS</h1>

// 1) Правило № 1. Если мы работаем с Html элементом, мы должны выводить его через console.dir(), данная команда позволяет нам его открыть в виде объекта.

// console.dir(title);                                  // h1#title.js-title (это объект).

// ------------------------------------------------

// Мы всегда должны делить Html элементы на два типа, первый это тип комуникации, второй тип это текстовый тип.
// * текстовый тип - это те элементы которые что-то отображают (ul, li, h1, и т.п.)
// * комуникации тип - это input, комуникация, взаимодействие, то что мы вводим.

// ================================================================
// Свойство textContent
// ================================================================
// Если мы говорим о текстовых документах, мы всегда должны помнить о таком свойстве как textContent, тоесть все что будет написано в середине нашего тега, оно будет доступно в свойстве textContent. Помним что Html элемент это объект, и если мы хочем считать какое-то свойство с нашего объекта мы стучимся через точку. Пример: (title.textContent).

// console.dir(title.textContent);        // Hello word

// Переопределение значения элемента(он же объект).
// ------------------------------------------------
// Это объект, и мы можем пойти, и переопределить значение нашего элемента.

// title.textContent = 'Hello JS';

// console.dir(title.textContent);        // Hello JS

// ================================================================
// Свойство classList
// ================================================================
// В данном объекте есть свойство которое полностью сохраняет всю информацию про классы которые принадлежат нашему Html элементу.
// Соответственно мы с JS можем манипулировать этими классами, можем добовлять, удалять, и добовлять если их нет. а также удалять если они есть.

// В этом варианте разберём свойство classList.
// ------------------------------------------------

// * elem.classList.contains(cls) - возвращает true или false, в зависимости от наличия  класса cls у элемента.

// * elem.classList.add(cls) - добавляет класс cls к списку классов элемента.

// * elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.

// * elem.classList.toggle(cls) - Если нет такого класса - то добавит, если уже есть этот класс, то наоборот удалит.

// * elem.classList.replace(oldClass, newClass) - Заменит существующий класс oldClass на указаный newClass.

// ------------------------------------------------
// title.classList.add('title-color');       // Добавит класс Html элементу.
// title.classList.remove('title-color');    // Удалит класс у Html элемента.
// title.classList.toggle('title-color');    // Если нет-то добавит, если есть-то удалит.

// ================================================================
// Свойство style
// ================================================================
// Используется для чтения и изменения инлайновых стилей.
// Мы можем добавлять как целые классы так и можем добавлять один конкретный стиль.
// Сразу вам скажу, мы сейчас рассматриваем, но так-же быстро и забываем!
// Потому что инлайново добавлять стили это очень плохой пример.Так как при добавлении какого - то одного стиля браузер перерэндеривает все стили заново, весь DOM.Три стиля изменил, три раза переписал DOM.
// Проще создать CSS класс заранее и добавить его через classList.

// title.style.width = '250px';
// title.style.fontSize = '24px';
// title.style.backgroundColor = 'teal';
// title.style.textAlign = 'center';

// console.dir(title.style);             // inline styles object

// ================================================================
// Свойство data-атрибути
// ================================================================
// id - Предназначендля для поиска нашего элемента. Для выделения какого-то уникального элемента на странице. Если нам нужно сохратить в Html разметке, то мы используем базовый id.
//
// Атрибут hidden - Это системный атрибут, но у него есть свое банальное значение, данный атрибут хочет спрятать наш Html элемент.
//
// Атрибут disable - Это системный, делает кнопку неактивной.
//
// data-id - Предназначен для передачи какой-то информации, для того чтоб мы сохраняли самостоятельно в него какую-то информацию. Типа такого как data-id - товара который мы сохраняем на розетке. Для того чтоб мы понимали по какому товару кликнул пользователь. Для прослушивания клика.

// console.dir(title);                // h1#title.js-title

// Мы можем поставить элементу несколько data-атрибутов с разным названием, пример: (data-id="test-title", data-goods="apple"). В браузере в свойствах этого элемента(объекта), в dataset мы их будем видеть как (id: test-title, goods: "apple"), тоесть без приставки data, остаётся только название data-атрибута и значение его(его селектор).

// Если мне нужно считать какой нибудь data-атрибут с своего элемента.
// data-атрибути сохраняются в dataset. получаем к ним доступ через dataset.

// console.dir(title.dataset);        // DOMStringMap; goods: 'apple'; id: 'test-title';
// console.dir(title.dataset.id);     // test-title
// console.dir(title.dataset.goods);  // apple

// ------------------------------------------------
// Если нам не нужно работать с data-атрибутами, а например с обычными атрибутами.
// Базовые атрибуты уже представлены как свойство. Получаем к ним доступ через точку.

// console.dir(title.id);             // title
// console.dir(title.hidden);         // true

// Убирает атрибут hidden.

// title.hidden = false;
// title.hidden = true;
// console.dir(title.hidden);         // false Убрали(поменяли) hidden на false

// ==============================================================
// Методы для работы с системными атрибутами или data-атрибутами.
// ==============================================================
// DOM-елементам відповідають HTML-теги, які містять текстові атрибути. Доступ до атрибутів здійснюється за допомогою стандартних методів. Ці методи працюють зі значенням, яке знаходиться в HTML.
//
// title.hasAttribute(name) - проверяет наличие атрибута, возвращае true или false.
// title.getAttribute(name) - получает значение атрибута и возвращает его.
// title.setAttribute(name, value) - устанавливает атрибут.
// title.removeAttribute(name) - удаляет атрибут.
// title.attributes - свойство, которое возвращает объект всех атрибутов элемента.

// ------------------------
// Если нам нужно получить значение какого нибудь атрибута.
// ------------------------
// console.dir(title.getAttribute('hidden')); // он пришол пустой (ничего нет).Особенное поведение.
// console.dir(title.getAttribute('id'));     // title.

// ------------------------
// Если мы хочем получить data-атрибут. Прописываем его с приставкой data.
// ------------------------
// console.dir(title.getAttribute('data-id'));      // test-title.
// console.dir(title.getAttribute('data-goods'));   // apple.

// ------------------------
// Если нам нужно установить атрибут.
// ------------------------
// Первым параметром указываем название атрибута, через запятую вторым параметром указываем значение атрибута. Обязательно оба параметра указываем в ковычках.

// title.hidden = false;
// title.hidden = true;

// console.dir(title.getAttribute('data-goods'));    // apple
// title.removeAttribute('hidden');
// title.setAttribute('hidden', 'false');

// Сразу скажу что с getAttribute, removeAttribute, setAttribute сейчас уже с ними не работают. Удобнее работать с dataset. Но должны о них знать, что есть такая возможность.

// ==============================================================
// Вложеные элементы.
// ==============================================================
// const list = document.querySelector('.js-list');

// console.log(list.children);            // HTMLCollection(3)[(li, li, li)];
// console.dir([...list.children]);       // Array(3) [li, li, li] Распыляем детей ul в масив.

// ==============================================================
// Добавление в DOM.
// ==============================================================
// Есть два варианта добавления элементов в DOM.
// Первый вариант - добавления с помощью createElement() и append(), prepend().
// Второй вариант - при помощи шаблонныч строк innerHTML() и insertAdjacentHTML().

// const list = document.querySelector('.js-list');    // Получаем доступ к ul.

// ----------------------------------------------------
// Вариант-1 append() На практике неудобно, много писанины, такое никто не будет юзать.
// ----------------------------------------------------
// const li = document.createElement('li');       // Создаем элемент li.
// li.textContent = list.children.length + 1;     // Добовляем текст в созданую li.
// li.classList.add('title-color');               // Добавляем класс элементу li.
// li.dataset.id = '123';                         // Добавляем id-атрибут элементу li.

// const div = document.createElement('div');     // Создаем элемент div.

// const h2 = document.createElement('h2');       // Создаем элемент h2.
// h2.textContent = 'Hello';                      // Добовляем текст в созданую h2.

// li.append(div);                                // Добавляем div в li.
// div.append(h2);                                // Добавляем h2 в div.
// list.append(li);                               // Добавляем li в ul, в DOM.
// console.log(li);

// ----------------------------------------------------
// Вариант-2 Метод шаблонных строк. (этот вариант нужно запоминать, будем его почи всегда использовать).
// ----------------------------------------------------
// Создаём готовую разметку Html элементов вложеных друг в друга (с классами и data-атрибутами), методом шаблонных строк.

// const li = `
// <li class="title-color" data-id ='123'>${list.children.length + 1}
// <div>
//     <h2>Hello</h2>
//     </div>
// </li>`;
// list.insertAdjacentHTML('beforeend', li);       // Добавляем созданные элементы в ul, в DOM.

// ==============================================================
// Живая и неживая коллекция. (Статичный или динамичный масив.) (видео-1:05:28)
// ==============================================================

// До внесения данных (добавления дополнительных элементов li)

// const listStatic = document.querySelectorAll('li');
// const listDynamics = document.getElementsByTagName('li');

// const list = document.querySelector('.js-list');    // Получаем доступ к ul.

// const li = document.createElement('li');            // Добавляем еще элемент li.
// li.textContent = list.children.length + 1;
// list.append(li);

// const li2 = document.createElement('li');           // И еще добавляем элемент li.
// li2.textContent = list.children.length + 1;
// list.append(li2);

// Смотрим разницу. До внесения данных
// console.log('listStatic', listStatic);              // listStatic NodeList(3) [li, li, li]
// console.log('listDynamics', listDynamics);          // listDynamics HTMLCollection(4) [li, li, li, li, li]
// ------------------
// Мы видим что querySelectorAll при добавлении элементов позже не показывает изменения. Он показывает только те элементы которые были во время его вызова. Если его вызвать после добавления элементов, то он покажет актуальные данные.

// В свою очередь getElementsByTagName при добавлении элементов позже вносит эти изменения. Возвращает всегда актуальные данные.
// ------------------

// После внесения данных (добавления дополнительных элементов li)
// const listStatic = document.querySelectorAll('li');
// const listDynamics = document.getElementsByTagName('li');

// Смотрим разницу. После внесения данных
// console.log('listStatic', listStatic);               // listStatic NodeList(3) [li, li, li, li, li]
// console.log('listDynamics', listDynamics);           // listDynamics HTMLCollection(4) [li, li, li, li, li]

// В этом и состоит разница Динамических и Статических операций.

// На практике будем использовать больше querySelectorAll. А getElementsByTagName не так часто используется. Но его можно использовать при бесконечной прокрутке страницы(Инфинити-скролл).

// ==============================================================
// Практика создание коллекции на примере масива объектов cars (видео - 1:25:00)
// ==============================================================
// Плохой вариант создание коллекции. Очень плохой вариант.
// ----------------------------------------------
// Этот вариант плох тем, что карточки авто  в середине цикла будут добавлятся по одной, и при каждом добавлении браузер будет полностью перерисовывать весь DOM.

// const container = document.querySelector('.js-container'); // Доступ к контейнеру.

// cars.forEach(({ id, model, type, price, img }) => {
//   const markup = `
//   <li>
//     <img src="${img}" alt="${model}" class="img" />
//     <h2>Марка - ${model}</h2>
//     <h3>Модель - ${type}</h3>
//     <p>Цена - ${price}</p>
//   </li>
//   `;
//   container.insertAdjacentHTML('beforeend', markup);
// });

// console.dir(container);

// ----------------------------------------------
// Хороший вариант создание коллекции.
// ----------------------------------------------
// Нам нужно cтараться добавить полностью всю разметку за одну операцию. Рассмотрим это в этом варианте.

// const container = document.querySelector('.js-container');       // Доступ к контейнеру.

// const markup = cars
//   .map(
//     ({ id = 'none', model, type, price, img }) =>
//       `<li data-id="${id}">
//         <img src="${img}" alt="${model}" class="img" />
//         <h2>Марка - ${model}</h2>
//         <h3>Модель - ${type}</h3>
//         <p>Цена - ${price}</p>
//     </li>`
//   )
//   .join('');

// insertAdjacentHTML принимает параметр markup в формате строки, а map() нам возвращает масив, поетому мы добовляем после операции map() операцию .join() которая превращает масив в строку.

// container.insertAdjacentHTML('beforeend', markup);

// В этом варианте мы добавили 30 карточек авто за один раз и браузеру не надо перерендеривать для каждой карточки заново разметку DOM. Мы выполнили лучший подход.

// ==============================================================
// Удаление Html элементов.
// ==============================================================

// const container = document.querySelector('.js-container');

// const markup = cars
//   .map(
//     ({ id = 'none', model, type, price, img }) =>
//       `<li data-id="${id}">
//         <img src="${img}" alt="${model}" class="img" />
//         <h2>Марка - ${model}</h2>
//         <h3>Модель - ${type}</h3>
//         <p>Цена - ${price}</p>
//     </li>`
//   )
//   .join('');

// container.insertAdjacentHTML('beforeend', markup);

// const containerAfter = document.querySelector('.js-container');

// --------------------------------------------------------------------
// Если нам нужно полностью почистить наш контейнер, удалить всех детей.
// --------------------------------------------------------------------
// Вариант-1 Плохой.
// ------------------
// Потому что удаляет по одному эл.и перерендривает DOM после каждого удаления.
// Этот вариант используем когда нам нужно удалить одим эл., или два эл., по какому-то условию.

// [...containerAfter.children].forEach(item => item.remove()); // Полностью очистили ul.

// ------------------
// Вариант-2 Хороший.
// ------------------
// Удаляет все элементы li из ul сразу за одну операцию.

// container.innerHTML = '';

// --------------------------------------------------------------------
// Если нам нужно удалить определенные эл., из нашей коллекции ul по какому-то критерию.
// --------------------------------------------------------------------
// Допустим мы хочем удалить те эл., у которых есть data-атрибут-id. Это у нас один эл., почледний Volvo.

// [...containerAfter.children].forEach(item => {
//   if (item.dataset.id !== 'none') {
//     item.remove();
//   }
// });

// ----------------------------------------
// На сегоднишний день нам самое важное
// 1) Научиться получать Html элемент.
// Просматреть свойства textContent, children, dataset, classList  и каким образом сними работать.
// После этого правила добавления и удаления разметки.
// ----------------------------------------

// ==============================================================
// Разбор домашнего задания (видео 1:56:10)
// ==============================================================
