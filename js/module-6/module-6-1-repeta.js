// ==============================================================
/** Поиск элементов (Файл 01-query-selectors.js)
|============================
// ! * Поиск элементов document.querySelector(selector) и document.querySelectorAll(selector)
// ============================
//  * document.querySelector(selector) и document.querySelectorAll(selector)
//  *   selector - любой валидный CSS-селектор
//  *
//  * Что возвращают?

// ----- Поиск элементов -----
// Ищет с самого верха документа и идет вниз.
// ----- .querySelectorA() -----
// .querySelectorA() Возвращает первый подходящий элемент, до первого совпадения.
// .querySelector()Если ничего не нашел, то вернёт null.
// ----- .querySelectorAll() -----
// .querySelectorAll() Возвращает масив из ссылок.
// .querySelectorAll() Если ничего не нашел, то вернёт [] пустой масив.

// ----- Поиск по тегу.

const navItemEl = document.querySelector('li');
console.log(navItemEl); // <li class="site-nav__item"></li>

// ----- Поиск по CSS селектору (класса).

const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl); // <ul class="site-nav"></ul>

const navLinksEl = document.querySelectorAll('.site-nav__link');
console.log('navLinksEl', navLinksEl); // navLinksEl [a.site-nav__link, a.site-nav__link, a.site-nav__link]

// ----- Поиск по селектору id.

const navLastItemElem = document.querySelector('#last-item');
console.log('navLastItemElem', navLastItemElem); // navLastItemElem <li class="site-nav__item" id="last-item">
// _______________________________________________________________________________________
// ! * Поиск querySelectorAll на элементе.
// ============================
// * Document.querySelector* и Element.querySelector*

// querySelector на элементе удобно использовать тогда - когда у нас есть какой-то элемент и мы хотим внутри его поискать, делаем поиск относительно этого элемента querySelectorAll и браузер вернет только те элементы которые являются потомками этого элемента.

const navEl = document.querySelector('.site-nav');

console.log('navEl', navEl); // <ul class="site-nav"></ul>

// Поиск линков. Этот вариант найдет все линки с таким селектором, которые есть в документе.

const navLinksEl = document.querySelectorAll('.site-nav__link');

console.log('navLinksEl', navLinksEl); // navLinksEl NodeList(5) [a.site-nav__link, a.site-nav__link, a.site-nav__link, a.site-nav__link, a.site-nav__link]

// ----- Поиск всех потомков элемента. Два варианта -----

// Вариант-1 (элемент.querySelectorAll, на элементе). Найдет всех потомков только этого элемента.

const navLinksElem = navEl.querySelectorAll('.site-nav__link');

console.log('navLinksElem', navLinksElem); // navLinksElem  [a.site-nav__link, a.site-nav__link, a.site-nav__link]

// Вариант-2 (через document) Найдет всех потомков только этого элемента. (Это тоже самое что и на элементе, только черезсложный селектор)

const navLinksElement = document.querySelectorAll('.site-nav .site-nav__link');

console.log('navLinksElement', navLinksElement); // navLinksElement  [a.site-nav__link, a.site-nav__link, a.site-nav__link]
// _______________________________________________________________________________________

// ! * Тоже самое но при нажатии на кнопку "Сделать магию"
// ============================
const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => {
  const navEl = document.querySelector('.site-nav');
  console.log('navEl', navEl);

  const navLinksEl = document.querySelectorAll('.site-nav__link');
  console.log('navLinksEl', navLinksEl);
});
// _______________________________________________________________________________________
|============================
*/
// ==============================================================
/** Свойства элемента (Файл 02-properties.js)
|============================
const magicBtn = document.querySelector('.js-magic-btn');

//  * Свойства элемента (hero)
//  * - Изображение
//  * - Текст и textContent
//  * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480

// =======================================
// Использую магическую кнопку. Пример.
// =======================================
// При клике на кнопку ("Сделать магию") меняем картинку.
// Меняем значение на новое атрибута src и alt.
// В src - меняем картинку при нажатии на кнопку.
// В alt - меняем текст к картинке.

magicBtn.addEventListener('click', () => {
  const imageEl = document.querySelector('.hero__image');
  console.log('imageEl', imageEl);
  console.log(imageEl.src); //  На это место вернётся значение атрибута src моего элемента. И я могу туда в src присвоить что-то другое.

  // В src присваиваем ссылку на другую картинку.
  imageEl.src =
    'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
  // В alt присваиваем новый текст.
  imageEl.alt = 'Это новый котик';
});

// ========================================================
// Работа с текстовым контентом. (.textContent) Меняем название заголовка.
// ========================================================
// Получаем доступ к картинке.
const imageEl = document.querySelector('.hero__image');
// В src присваиваем ссылку на другую картинку.
imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// В alt присваиваем новый текст.
imageEl.alt = 'Это новый котик';

// Меняем текст заголовка.
const heroTitleEl = document.querySelector('.hero__title');
// console.log('heroTitleEl', heroTitleEl); // heroTitleEl <h1 class="hero__title">Всё про меня</h1>
// console.log(heroTitleEl.textContent); // Всё про меня
heroTitleEl.textContent = 'Я сладкий пирожочек!'; // Меняем текстовый контент.
// console.log(heroTitleEl.textContent); // Я сладкий пирожочек!

// ========================================================
//  * Атрибуты
//  * - get(имя-атрибута)
//  * - set(имя-атрибута)
//  * - remove(имя-атрибута)
//  * - has(имя-атрибута)
// ========================================================
// Если тебе нужно просто прочитать атрибут или записать значение в него, можешь использовать просто как свойство (чрез точку пример: imageEl.src).
// Если нужно удалить атрибут используй для удаления .removeAttribute().
// Если нужно узнать собственно есть ли у элемента атрибут, используй .hasAttribute().
// А get(имя-атрибута) и set(имя-атрибута) не очень полезно честно говоря.

// Вариант-1 Доступ к значению атрибута
console.log(imageEl.getAttribute('src')); // Вернет значение этого атрибута.
// Вариант-2 Доступ к значению атрибута. Это тоже самое что и вариант-1.
console.log(imageEl.src); // Вернет значение этого атрибута.

// В чем разница между этими вариантами?
// Вариант-1 появился раньше, это стандартизированный интерфейс для работы с абсолютно любым атрибутом который ты можешь придумать себе.
// Вариант-2 появился позже, это идет только для тех атрибутов которые идут как свойство объекта. Но практически все полезные атрибуты идут как свойство объекта.
// -----------------------------------------
// Если мы хотим удалить у элемента атрибут. Используем .removeAttribute()
// imageEl.removeAttribute('src'); // Это действие удалит атрибут у элемента.
// -----------------------------------------
// Если мы хотим проверить есть ли атрибут у элемента?
console.log(imageEl.hasAttribute('src')); // true если есть атрибут и false если нет.

// ========================================================
//  * Data-атрибуты
// ========================================================
// Data-атрибут - Это где ты можешь на элементы дать происвольный атрибут с произвольным именем и произвольным значением, который не является стандартным а html.
// Data-атрибут - Можно использовать к примеру есть три кнопки и клацая по ним я хотел бы разлечить что за действие произошло, чтобы отличать одинаковые кнопки между собой. В дальнейшем при прослушивание действий мы сможем при помощи Data-атрибут узнать на какую кнопку было произведено действие.
// В Html указывая клас с приставкой js, пример: js-actions - тем самым мы явно говорим  не трогайте его(не меняйте его - он не для верстки, он для js) потому как это класс с которым работает скрипт js.
// ------------------------------
// Возврат значения Data-атрибута.
// Выбираем все кнопки и ищем в нутри класа actions любую кнопку.
const actions = document.querySelectorAll('.js-actions button');

console.log(actions); // NodeList(3) [button, button, button]  (Вернет три кнопки).

// Вариант-1
console.log(actions[0].dataset); // DOMStringMap {action: 'add'} (.dataset - откидывает слово data и оставляет action + значение).
console.log(actions[0].dataset.action); // add (вернет значение Data-атрибута 1й кнопки).
console.log(actions[1].dataset.action); // remove (значение Data-атрибута 2й кнопки).
console.log(actions[2].dataset.action); // edit (значение Data-атрибута 3й кнопки).

// Вариант-2 (но он очень длинный и не удобный)
console.log(actions[2].getAttribute('data-action')); // edit (значение Data-атрибута 3й кнопки).

// =======================================
// Использую магическую кнопку. Пример.
// =======================================
magicBtn.addEventListener('click', () => {
  // Получаю ссылку на  этот input.
  const inputEl = document.querySelector('.js-input');
  console.log(inputEl); // <input type="text" class="js-input"> (При клике по кнопке вернет ссылку на input.)
  console.log(inputEl.value); // qweqwe (Вернет то что ввели в input, при кликнули по кнопке)
  // Если я хочу что-то написать в input, то...
  inputEl.value = 'пишу что хочу в input';
  console.log(inputEl.value); // пишу что хочу в input
});
// =======================================
|============================
*/
// ==============================================================
/** Свойства classList (Файл 03-classlist.js)
|============================
const magicBtn = document.querySelector('.js-magic-btn');
// ===========================================================
//  * Интерфейс classList()
//  * - add(класс)          - добавляет класс.
//  * - remove(класс)       - удаляет класс.
//  * - toggle(класс)       - если нет класса - то добавляет, если класс есть - то удаляет.
//  * - replace(старыйКласс, новыйКЛасс) - меняет старый класс на новый.
//  * - contains(класс) - возвращает true или false в зависимости есть такой класс или нету.
// ===========================================================
// У каждого элемента есть специальный интерфейс называется classList - это просто свойство в котором хранится объект у которого в прототипе есть всякие методы.
// classList - работает только с классами.
// ===========================================================
const navEl = document.querySelector('.site-nav'); // Ищем элемент ul в документе.
console.log(navEl.classList);

// .classList.add() Добавляет классы, можно через запятую добавлять несколько штук.
navEl.classList.add('super-cool', 'qweqwe'); // Добавляем класс 'super-cool' и 'qweqwe' к тегу ul в Html.

// .classList.remove() Удаляем классы с тега.
navEl.classList.remove('super-cool'); // Удаляем класс 'super-cool' с тега ul в Html.

// .toggle() Если нет класса - то добавляет, если класс есть - то удаляет.
navEl.classList.toggle('abc'); // добавит клас abc, так как его небыло.
navEl.classList.toggle('abc'); // удалит клас abc, так как он был.

// .replace() Меняет старый класс на новый.
navEl.classList.replace('qweqwe', 'new-class'); // Меняем класс qweqwe на new-class

// .contains() Возвращает true или false в зависимости есть такой класс или нету.
navEl.classList.contains('new-class'); // true

// ===========================================================
// Поиск по значению атрибута у элемента.
// Юзкейс Если нам нужно где-то к элементу подменить,удалить,добавить класс или еще что-то.
// ===========================================================
const currentPageUrl = '/portfolio';

// ! Пример поиска по атрибуту href элемента и значению этого атрибута.
// Это приктически одинаковые записи.
// |============================
.site-nav__link[href = "/about}"] 
// поиск по более специфичному селектору .site-nav__link у которого есть атрибут href и значение этого атрибута "/about".

a[href="/about"]
// поиск по тегу (а) у которого есть атрибут href и значение этого атрибута "/about".
// |============================

const linkEl = document.querySelector(
  `.site-nav__link[href ="${currentPageUrl}"]`
  // Эта строка расшифровывается так: Вот селектор класса .site-nav__link и у этого элемента с таким классом должен быть атрибут href который совпадает со значением currentPageUrl.
);
console.log(linkEl); // <a href="/portfolio" class="site-nav__link">Портфолио</a>
linkEl.classList.add('site-nav__link--current'); // Портфолио надпись станет красным. Потому что на эту ссылку добавился еще один класс site-nav__link--current который в CSS стилях записан для смены цвета (например при активном состоянии ссылки).

|============================
*/
// ==============================================================
/** Свойство «навигации» по DOM  (04-dom-traversal.js) 
|============================
// =======================================================
//  * Свойства «навигации» по DOM-узлам (взять список)
//  * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
//  *
//  * elem.parentNode - вибере батьківський elem.
//  * elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
//  * elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
//  * elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
//  * elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
//  * elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
//  * elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
//  * elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
//  * elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
//  * elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
//  * elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).
// =======================================================
// Навигации по DOM.

const navEl = document.querySelector('.site-nav');

// Вариант-1 (Один подход).
// -----------------------------------
// Получаем псевдомасив, элементов отвечающих данному селектору. И будем правы. Но...
const navElAll = document.querySelectorAll('.site-nav__item');
console.log(navElAll); // NodeList(3) [li.site-nav__item, li.site-nav__item, li.site-nav__item]

// Допустим мне нужно внутри этого <ul class="site-nav"> очень быстро получить ссылку на первый элемент.

// Получаем первый дочирний узел-элемент в середине элемента. И будем правы. Но...
const firstNavItemEl = navEl.querySelector('.site-nav__item');
console.log(firstNavItemEl); // <li class="site-nav__item"></li>

// ----- ТЕПЕРЬ ПЕРЕПИСЫВАЕМ ТОЖЕ САМОЕ, НО В ЛУДШЕМ ВАРИАНТЕ! -----

// Вариант-2  // (Другой подход). Результат тот-же самый, что и вариант - 1.
// -----------------------------------
// Псевдомасив, сохраняет только дочерние узлы-элементы, тоесть только те, которые отвечают тегам.
const navElemAll = navEl.children;
console.log(navElemAll); // HTMLCollection(3) [li.site-nav__item, li.site-nav__item, li.site-nav__item]

// Получаем первый дочерний узел-элемент в середине элемента.
const firstNavItemElem = navEl.firstElementChild;
console.log(firstNavItemElem); // <li class="site-nav__item first"></li>

// Получаем последний дочерний узел-элемент в середине элемента.
const lastNavItemElem = navEl.lastElementChild;
console.log(lastNavItemElem); // <li class="site-nav__item last"></li>

// Получаем второй дочерний узел-элемент в середине элемента.
const secondNavItemElem = navEl.children[1];
console.log(secondNavItemElem); // <li class="site-nav__item second"></li>

// Нам нужно хорошо помнить про firstElementChild, children, lastElementChild, а остальные предыдущий-следующий-сосед не очень полезно!

|============================
*/
// ==============================================================
/** Создание элементов (05-creating-elements.js)
|============================

|============================
*/
// ==============================================================
//  * - Создание элементов
//  * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)

// ===============================
// * Создаём заголовок
// ===============================
// 1) Сначала создаем объект и полностью его заполняем. Он пока есть только в памяти, в разметке DOM его нет.
// 2) Добавляем созданный заголовок в DOM дерево.
// * елемент-А.appendChild(элемент-В) - Добавляет в конец родительского элемента.
// - елемент-А - это элемент в который добовляем.
// - элемент-В - это элемент который хотим добавить.

const titleEl = document.createElement('h1'); // Создаем заголовок h1.
titleEl.classList.add('page-title'); // Создаём клас page-title элементу h1.
titleEl.textContent = 'Это заголовок страницы :)'; // Создаем текст заголовку.
// console.log(titleEl); // <h1 class="page-title">Это заголовок страницы :)</h1>

// document.body.appendChild(titleEl); // Добавляем созданный заголовок h1 в DOM дерево, в элемент body.

// ===============================
//  * Создаём изображение
//  * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
//  * valais-alpine-mountains-glacier
// ===============================
// * Создаем картинку и добовляем её в DOM
// ===============================
// 1) Создаем тег img.
const imageEl = document.createElement('img');
// 2) Создаем атрибут src и добовляем в него ссылку.
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
// 3) Создаем атрибут alt и добовляем в него текст.
imageEl.alt = 'valais-alpine-mountains-glacier';
// 4) Записываем размер высоты картинки.
// Вариант-1
imageEl.width = 320;
// Вариант-2
// imageEl.setAttribute('width', 640); // Но этот вариант громоздкий.

// console.log('imageEl', imageEl);

document.body.appendChild(imageEl); // Добавляем картинку в конец элемента body, в DOM.

// Тут очень важно понимать а Html уже что-то должно быть куда ты это добавляешь. Подругому оно не будет работать.

// ===============================
//  * Создаём и добавляем новый пункт меню
// ===============================
// ----- Создаем.
const navItemEl = document.createElement('li'); // Создаем элемент тег li.
navItemEl.classList.add('site-nav__item'); // Создаем элементу li класс site-nav__item.

const navLinkEl = document.createElement('a'); // Создаем новый элемент(а) ссылку.
navLinkEl.classList.add('site-nav__link'); // Создаем ссылке класс site-nav__link.
navLinkEl.textContent = 'Личный кабинет'; // Создаем текст ссылки элементу(а).
navLinkEl.href = '/profile'; // Создаем(вставляем) ссылку в элемент(а).

// После создания элемента (li) и элемента (а), и заполнили их, мы их объединяем-вкладываем элемент(а) в элемент(li).
navItemEl.appendChild(navLinkEl); // Вкладываем ссылку(тег-а) в элемент li.

console.log(navItemEl); // <li class="site-nav__item"><a class="site-nav__link" href="/profile">Личный кабинет</a></li>

// После того как мы создали и заполнили элемент(li) и элемент(а), и вложили элемент(а) в элемент(li), только после этого за одну операцию добавляем элемент(li) в DOM.

// ---------------------------------------------
// Добавление элемента в DOM.
// ---------------------------------------------
// Примечание из конспекта.
// ** element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// ** element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// ** element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// ** element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
// ---------------------------------------------

const navEl = document.querySelector('.site-nav'); // Получаем ссылку на элемент (ul)-(список), в который будем вставлять наши созданный элемен (li) c элементом-ссылкой(а)

// ---------------------------------------------
// Добавляем созданый элемент(li), в DOM.
// ---------------------------------------------

// -------- Вставляем элемент(li) в конец, после всех детей элемента(ul), в DOM.
// Вариант-1 .append()
// navEl.append(navItemEl); // Вставляем в конец элемента(ul).

// Вариант-2 .appendChild() (Репета)
// navEl.appendChild(navItemEl); // Вставляем в конец элемента(ul).

// -------- Вставляем элемент(li) в начало перед всеми детьми элемента(ul), в DOM.
// Вариант-1 .prepend()
// navEl.prepend(navItemEl); // Вставляем в начало перед детьми элемента(ul).

// Вариант-2 .insertBefore() (Репета)
// navEl.insertBefore(navItemEl, navEl.firstElementChild); //Вставляем в начало перед детьми элемента(ul).

// -------- Вставляем элемент(li) (предпоследним) - перед последним ребенком элемента(ul), в DOM.
// Вариант-1 .insertBefore() (Репета)
// navEl.insertBefore(navItemEl, navEl.lastElementChild); // Вставляем предпоследним в  элемент(ul).

// -------- Вставляем элемент(li) перед самим элементом(ul), в DOM.
// Вариант-1 .before()
// navEl.before(navItemEl); // Вставляем элемент(li) перед элементом(ul).

// -------- Вставляем элемент(li) после самого элемента(ul), в DOM.
// Вариант-1 .after()
// navEl.after(navItemEl); // Вставляем элемент(li) после элемента(ul).

// -----------------------------------------------------------------------------

// const heroEl = document.querySelector('.hero');
// // heroEl.appendChild(titleEl);
// // heroEl.appendChild(imageEl);
// heroEl.append(titleEl, imageEl);

// /*
//  * Создаём и добавляем новый пункт меню
//  */
// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Личный кабинет';
// navLinkEl.href = '/profile';

// navItemEl.appendChild(navLinkEl);
// // console.log(navItemEl);

// const navEl = document.querySelector('.site-nav');

// // navEl.appendChild(navItemEl);
// navEl.insertBefore(navItemEl, navEl.firstElementChild);
