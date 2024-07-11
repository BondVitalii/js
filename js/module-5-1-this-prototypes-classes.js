/* ! <<<<<<<<<<<<<<< ||| Репета модуль-5 занятие-1 Ключове слово this. Методы .bind(), .call(), .apply() ||| >>>>>>>>>>>>>>> ! */
// ________________________________________________________________________________________________
/** Контекст this
|============================
// * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
// -----------------------------------------------------
console.log('[] === []: ', [] === []);   // false  // Это условие всегда будет возвращать "false", так как JavaScript сравнивает объекты по ссылке, а не по значению.
console.log('{} === {}: ', {} === {});   // false  // Это условие всегда будет возвращать "false", так как JavaScript сравнивает объекты по ссылке, а не по значению.
console.log(
  'function() {} === function() {}: ',
  function () {} === function () {}     // false   // Это условие всегда будет возвращать "false", так как JavaScript сравнивает объекты по ссылке, а не по значению.
);

const fnA = function () {
  console.log('hello');
};

const fnB = fnA;

console.log('fnB === fnA: ', fnB === fnA);     // true

console.log(fnA());     // hello
console.log(fnB());     // hello

// ЗАПОМНИЛИ! Функция это сложный тип, когда мы функцию куда-то передаем, мы передаем не копию, а буквально ссылку!

// -----------------------------------------------------------

//  * Контекст (this)
//  *  - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
//  *  - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.

// ----------------------------
//  * Как метод объекта. В контексте объекта.

const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);            // showTag -> this {tag: 'Mango', showTag: ƒ}
  },
};

user.showTag();

// Если с лева от функции(метода) стоит объект который её вызывает, то this в этой функциии будет равняться этому объекту, будет ссылка на этот объект.
// Именно поэтому в методах объекта мы используем не имя самого объекта, а ключевое слово this.

// -----------------------------------------------------------

//  * Вызов без контекста.
//  * - В строгом режиме = undefined     // строгий режим (use strict) или (type="module")
//  * - Не в строгом режиме = window

// В 99% случаев будет undefined, потому что никто сейчас не пишет без строгого режима, все пишут в строгом режиме!

const foo = function () {
  console.log('foo -> this', this);                 // foo -> this undefined
};

foo();

// -----------------------------------------------------------
// юзкейс
//  * Как метод объекта, но объявлена как внешняя функция. В контексте объекта.

// В данном случае функция showTag не в контексте какого либо объекта.

const showTag = function () {
  console.log('showTag -> this', this);            // undefined  // showTag -> this undefined
  console.log('showTag -> this.tag', this.tag);    // Ошибка  // TypeError: Cannot read properties of undefined (reading 'tag')
};

showTag(); 

// ------------------------

// В следующем примере функция showTag в контексте объекта user, потому что присвоена в переменную showUserTag которая в свою очередь вызвана в контексте объекта user и this в свою очередь будет ссылаться на этот объект.

const showTag = function () {
  console.log('showTag -> this:', this); // showTag -> this: {tag: 'Mango', showUserTag: ƒ}
  console.log('showTag -> this.tag', this.tag); // showTag -> this.tag Mango
};

const user = {
  tag: 'Mango',
};

user.showUserTag = showTag;             // Я в объект user в новое свойство showUserTag записываю ссылку на функцию showTag.

console.log('user:', user);             // user: {tag: 'Mango', showUserTag: ƒ}

user.showUserTag();                    // Я вызываю функцию showUserTag как метод объекта в контексте объекта user. Соответственно в this который находится в функции showTag присваивается объект user который её вызвал.

// -----------------------------------------------------------
//  следующий юзкейс
//  * Вызов без контекста, но объявлена как метод объекта.

const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this:', this); // showTag -> this: {tag: 'Mango', showTag: ƒ}
    console.log('showTag -> this.tag', this.tag); // showTag -> this.tag Mango
  },
};

user.showTag();                       // Вызываю функцию showTag в контексте объекта user. This присваивается ссылка на этот объект.

const outerShowTag = user.showTag;    // Я наоборот делаю внешнюю переменную outerShowTag и присваиваю в неё ссылку на user.showTag, тоесть ссылку на функцию showTag.

outerShowTag();                      // Тут будет undefined. Потому что вызов без контекста. Когда я делаю этот вызов интерпритатор говорит мне что лежит в этой переменной? в ней лежит ссылка на функцию showTag! А функция вызваная без контекста объекта приводит к undefined. Для новичков - Смотри что находится с лева от вызова функции, если там объект точка - тогда функция вызывается в контексте этого объекта, если с лева нет ничего - тогда она вызывается вне контекста.

// -----------------------------------------------------------
//  следующий юзкейс (видео - 27:05)
// * Контекст в callback-функциях

const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this); // showTag -> this undefined
    console.log('showTag -> this.tag', this.tag); //
  },
};

const invokeAction = function (action) {
  console.log(action);

  action();
};

invokeAction(user.showTag); // Вызываем функцию invokeAction и передаем в её параметры(action) как колбек ссылку на функцию showTag которая находится в объекте user, далее мы вызываем её без контекста(action()), поэтому в this в функции showTag будет undefined, потому что она вызвана без контекста(без объекта).

// ============================================================

// * Тренируемся 1 -------------------------------------------

const fn = function () {
  console.log('fn -> this', this);
};

fn();                       // Какой this ???      // fn -> this undefined

// * Тренируемся 2 -------------------------------------------

const book = {
  title: 'React for beginners',
  showThis() {
    console.log('showThis -> this', this);
  },
  showTitle() {
    console.log('showTitle -> this.title', this.title);
  },
};

book.showThis(); // Какой this ???

const outerShowThis = book.showThis;
outerShowThis(); // Какой this ???

const outerShowTitle = book.showTitle;
outerShowTitle(); // Какой this ???

// * Тренируемся 3 -------------------------------------------

// Вопрос-1 ----------------------

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('changeColor -> this', this);
  };

  changeColor();                  // Какой this ???   // changeColor -> this undefined  // потому что нет объекта.
};

makeChangeColor();

// Вопрос-2 ----------------------

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('changeColor -> this', this);
  };

  const sweater = {
    color: 'teal',
  };

  sweater.updateColor = changeColor;

  sweater.updateColor('red');      // Какой this ???     // changeColor -> this {color: 'teal', updateColor: ƒ}

  return sweater.updateColor;
};

makeChangeColor();

// Вопрос-3 ----------------------

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('changeColor -> this', this);
  };

  const sweater = {
    color: 'teal',
  };

  sweater.updateColor = changeColor;    // Создаём новое свойство updateColor в объекте sweater и в значения этого свойства присваиваем ссылку на функцию changeColor.

  return sweater.updateColor;           // Результат работы функции makeChangeColor
};

const swapColor = makeChangeColor();    // Записываю результат работы функции makeChangeColor в переменную swapColor

swapColor('blue');                      // Какой this ???                // changeColor -> this undefined // Потому что нет контекста объекта в котором она вызвана.

// * Тренируемся 4 (видео 48:56)-------------------------------------------

// Вопрос-1 ----------------------

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('changeColor -> this', this);
  };

  return changeColor;
};

const updateColor = makeChangeColor();
updateColor('yellow'); // Какой this ??? // changeColor -> this undefined   // Потому что updateColor это не метод объекта, это просто рандомная переменная вызывающая функцию makeChangeColor.

// Вопрос-2 ----------------------

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('changeColor -> this', this);
  };

  return changeColor;
};

const updateColor = makeChangeColor();
// updateColor('yellow'); // Какой this ??? // changeColor -> this undefined   // Потому что updateColor это не метод объекта, это просто рандомная переменная вызывающая функцию makeChangeColor.

const hat = {
  color: 'blue',
  updateColor, // Это буквально вот это - (updateColor: updateColor,) запись oldscool
};

hat.updateColor('orange'); // Какой this ???  // changeColor -> this {color: 'blue', updateColor: ƒ}

// * Тренируемся 5 (видео 55:56)-------------------------------------------

// Правило! При передачи методов объектов как колбэков, контекст не сохраняется!

const counter = {
  value: 0,
  increment(value) {
    console.log('increment -> this', this);
    // this.value += value;
  },
  decrement(value) {
    console.log('decrement -> this', this);
    // this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value); // Вызов тела функции без какого либо объекта.
};

updateCounter(10, counter.increment); // increment -> this undefined             // При передаче метода объекта как колбэка контекст не сохраняется! Мы передаём ссылку на какуюто рандомную функцию в памяти, которая ничего не знает про объект который хранит на неё ссылку.
updateCounter(5, counter.decrement); // increment -> this undefined             // При передаче метода объекта как колбэка контекст не сохраняется! Мы передаём ссылку на какуюто рандомную функцию в памяти, которая ничего не знает про объект который хранит на неё ссылку.
// -----
counter.increment(10); // increment -> this {value: 0, increment: ƒ, decrement: ƒ} // Так сработает потому что ты вызываешь метод increment в контексте объекта counter.
|============================
*/
// --------------------
/** Методі функций call и apply
|============================
// Метод call
// ----------------------------------------------
// Метод call позволяет тебе взять какую-то произвольную функцию и принудительно вызвать в контексте какого-то объекта.

const showThis = function () {
  console.log('showThis -> this', this);
};

showThis();                                     // showThis -> this undefined

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 10, 20, 30, 40, 50);       // showThis -> this {a: 5, b: 10}

// console.log(showThis);
// console.dir(showThis);

// ----------------------------------------------
// Передача аргументов.

const showThis = function (a, b, c, d) {
  console.log(a, b, c, d); // 10 20 30 40
  console.log('showThis -> this', this);      
};

// showThis();                                // showThis -> this undefined

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 10, 20, 30, 40, 50);     // showThis -> this {a: 5, b: 10}

// ----------------------------------------------

const showThis = function (...args) {
  console.log(args);                       // [5, 1, 1, 1]
  console.log('showThis -> this', this);   // showThis -> this {a: 5, b: 10}
};

// showThis();                             // showThis -> this undefined

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 5, 1, 1, 1);

const objB = {
  a: 5,
  b: 10,
};

showThis.call(objB, 1, 1, 2, 2);

// ----------------------------------------------
// Метод apply
// ----------------------------------------------
// Разница между .call() и .apply()

// * В .call(objA, 5, 1, 1, 1)    - мы передаем контекст в котором его вызвать, тоесть объект, а потом любое кол-во аргументов через запятую.
// * В .apply(objA, [5, 1, 1, 1]) - мы передаем контекст в котором его вызвать, тоесть объект, а потом один аргумент масив аргументов.

const showThis = function (...args) {
  console.log(args);                          
  console.log('showThis -> this', this);      // showThis -> this {a: 5, b: 10}   
};

// showThis();                                // showThis -> this undefined

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 5, 1, 1, 1);              // [5, 1, 1, 1]
showThis.apply(objA, [5, 1, 1, 1]);           // [5, 1, 1, 1]

const objB = {
  a: 5,
  b: 10,
};

showThis.call(objB, 1, 1, 2, 2);              // [1, 1, 2, 2]
showThis.apply(objB, [1, 1, 2, 2]);           // [1, 1, 2, 2]

// ----------------------------------------------

const showThis = function (a, b, c) {
  console.log(a, b, c); // 5 1 1
  console.log('showThis -> this', this); // showThis -> this {a: 5, b: 10}
};

// showThis();                               // showThis -> this undefined

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 5, 1, 1); // 5 1 1
showThis.apply(objA, [5, 1, 1]); // 5 1 1

const objB = {
  a: 5,
  b: 10,
};

showThis.call(objB, 1, 1, 2); // 5 1 1
showThis.apply(objB, [1, 1, 2]); // 5 1 1

// ----------------------------------------------

const showThis = function (a, b, arr) {
  console.log(a, b, arr); // [5, 1, 1]
  console.log('showThis -> this', this);                  // showThis -> this {a: 5, b: 10}
};

// showThis();                                            // showThis -> this undefined

const objA = {
  a: 5,
  b: 10,
};

// showThis.call(objA, [5, 1, 1]);                       // [5, 1, 1]
showThis.apply(objA, [5, 1, [100, 200, 300]]);           // 5 1 [100, 200, 300]

const objB = {
  a: 5,
  b: 10,
};

// showThis.call(objB, [1, 1, 2]);                      // [1, 1, 2]
showThis.apply(objB, [1, 1, [200, 300, 400]]);          // 1 1 [200, 300, 400]

// ----------------------------------------------

// Используя методы .call() и .apply() мы можем сделать одну внешнюю функцию и просто вызывать её в контексте какого-то объекта.

const changeColor = function (color) {
  console.log('changeColor -> this', this);
  this.color = color;
};

const hat = {
  color: 'black',
};

changeColor.call(hat, 'orange');
console.log(hat);

const sweater = {
  color: 'green',
};

changeColor.call(sweater, 'blue');
console.log(sweater);
|============================
*/
// --------------------
/** Метод bind()
|============================
// Что делает bind(), он в отличии от call и apply не вызывает эту функцию прямо здесь и сейчас, он берет эту функцию делает её копию, но с навсегда привязаным контекстом. Тоесть в этой копии this всегда будет ссылаться на этот объект.

const changeColor = function (color) {
  console.log('changeColor -> this', this);
};

const hat = {
  color: 'black',
};

const sweater = {
  color: 'green',
};

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeColor();                               // changeColor -> this undefined
changeHatColor();                            // changeColor -> this {color: 'black'}
changeSweaterColor();                        // changeColor -> this {color: 'green'}

// ----------------------------------------------

const changeColor = function (color) {
  console.log('changeColor -> this', this);
  this.color = color;
};

const hat = {
  color: 'black',
};

const sweater = {
  color: 'green',
};

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeColor(); // changeColor -> this undefined  // Он не изменяет оригинальную функцию.

changeHatColor('yellow');
console.log(hat); // changeColor -> this {color: 'yellow'}

changeSweaterColor('red');
console.log(sweater); // changeColor -> this {color: 'red'}

// ----------------------------------------------
//  * counter
// ----------------------------------------------
// Вот так решается проблема передачи методов объекта как колбэка.

const counter = {
  value: 0,
  increment(value) {
    console.log('increment -> this', this);
    this.value += value;
  },
  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter)); // Вот так решается проблема передачи методов объекта как колбэка.
updateCounter(5, counter.decrement.bind(counter)); // Вот так решается проблема передачи методов объекта как колбэка.

// console.log(counter);

|============================
*/
// --------------------
/** Делаем счетчик
|============================
// ---------------код html------------------------
<div class="counter">
  <button class="js-decrement">Уменьшить</button>
  <p class="js-value">0</p>
  <button class="js-increment">Увеличить</button>
</div>
// -----------------------------------------------
const counter = {
  value: 0,
  increment() {
    console.log('increment -> this', this);
    this.value += 1;
  },
  decrement() {
    console.log('decrement -> this', this);
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

decrementBtn.addEventListener('click', function () {
  console.log('Кликнули на декремент');

  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  console.log('Кликнули на инкремент');

  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});

console.log(window);
|============================
*/
// ________________________________________________________________________________________________
/* ! <<<<<<<<<<<<<<< ||| Олег модуль-5 занятие-1 Ключове слово this. Методы .bind(), .call(), .apply() ||| >>>>>>>>>>>>>>> ! */
// ________________________________________________________________________________________________
/** Контекст this
|============================

|============================
*/
// --------------------
/** Методы .bind(), .call(), .apply()
|============================
// ----------------------------------------------
Метод .bind()
// ----------------------------------------------
const user = {
  balance: 1000,

  getBalance() {
    return this.balance;
  },
};

function showInfoFromCallback(callback) {
  const res = callback();
  console.log('INFO: ' + res);
}
// const newF = user.getBalance.bind({ balance: 10000000 });             // INFO: 10000000  // Запомнит на всегда balance: 10000000!

// const newF = user.getBalance.bind(user);                              // INFO: 1000  // Тоесть мы сказали в середине this всегда будет user.

showInfoFromCallback(user.getBalance.bind(user));                        // INFO: 1000  // Тоже самое но в одну строку. Без промежуточной переменной.

// ----------------------------------------------
Метод .call()
// ----------------------------------------------
const user = {
  balance: 1000,

  getBalance(a, b, c) {
    console.log(a, b, c);                                // 1 2 3
    return this.balance;
  },
};

function showInfoFromCallback(callback) {
  const res = callback.call(user, 1, 2, 3);
  console.log('INFO: ' + res);                          // INFO: 1000
}

showInfoFromCallback(user.getBalance);

// ----------------------------------------------
Метод .apply()
// ----------------------------------------------
const user = {
  balance: 1000,

  getBalance(a, b, c) {
    console.log(a, b, c);                               // 1 2 3
    return this.balance;
  },
};

function showInfoFromCallback(callback) {
  const res = callback.apply(user, [1, 2, 3]);
  console.log('INFO: ' + res);                          // INFO: 1000
}

showInfoFromCallback(user.getBalance);
|============================
*/
// ________________________________________________________________________________________________
/* ! <<<<<<<<<<<<<<< ||| Артем модуль-5 занятие-1 Ключове слово this. Методы .bind(), .call(), .apply() ||| >>>>>>>>>>>>>>> ! */
// ________________________________________________________________________________________________
/** Контекст this
|============================
// Типы функций и как они себя ведут в разных областях видимости.
// -------------------------------------------------------------

// function declaration -----
function foo() {}

// function expression -----
const foo = function () {};

// arrow function -----
const foo = () => {};

// Глобальная область видимости в строгом режиме ('use strict' или type="module"), и без него.

// ----------------------------------------------
// Без строгого режима
// ----------------------------------------------
function foo() {
  console.log(this);
}

foo();                            // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const boo = function () {
  console.log(this);
};

boo();                            // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const arrow = () => {
  console.log(this);
};

arrow();                          // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// ----------------------------------------------
// Строгий режим 'use strict' или type = "module" 
// ----------------------------------------------
// Прписываем в начале этого файла 'use strict';  // или вместо 'use strict' прописываем type="module" в файле html в ссылке подключения скрипта на этот файл js.
// Пример как подллючен этот файл  с type = "module"    <script src = "./js/module-5-1-this-prototypes-classes.js" type = "module"></ >

// * При варианте ('use strict')    - function declaration и function expression  будут (undefined), а arrow function будет (Window)
// * При варианте (type = "module") - function declaration, function expression, arrow function все будут (undefined).

// Функции declaration и expression становятся undefined, в строгом режиме выполнения кода они не могут оределить свой this и они принимают значения undefined.
// В то время как arrow function держит значение - Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// При определении контекста в 'use strict' функция arrow function (стрелочной функции) определяется своим фактическим местом написания в рамках какого объекта она была написана, она написана у нас в середине глобального объекта Window, соответственно она будет ссылаться на Window .

// 'use strict';

function foo() {
  console.log(this);
}

foo();                        // undefined

const boo = function () {
  console.log(this);
};

boo();                        // undefined

const arrow = () => {
  console.log(this);
};

arrow();                      // В режиме ('use strict') будет Window       // В режиме (type = "module") будет undefined

// -------------------------------------
// Примеры в строгом режиме.
// -------------------------------------
// ----- function declaration 
const objA = {
  name: 'User name',
  nickName() {
    console.log(this);
  },
};

objA.nickName();                     // {name: 'User name', nickName: ƒ}

// -------------------------------------
//  ----- arrow function
const objB = {
  name: 'User name',
  nickName: () => {
    console.log(this);
  },
};

objB.nickName();                      // В режиме ('use strict') будет Window       // В режиме (type = "module") будет undefined

// -------------------------------------
//  ----- function declaration
const objA = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    nickName() {
      console.log(this);
    },
  },
};

objA.skills.nickName();               // {mySkill: 'html', nickName: ƒ}

// -------------------------------------
//  ----- function declaration
const objA = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      nickName() {
        console.log(this);
      },
    },
  },
};

objA.skills.someValue.nickName();       // {value: 10, nickName: ƒ}

// -------------------------------------
// Еще пример: Так не работает! Потому что функция nickName вызывается без какого либо контекста.
const objB = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      foo() {
        console.log('foo', this); // foo {value: 10, foo: ƒ}
        function nickName() {
          console.log('nickName', this); // nickName undefined
        }
        nickName();
      },
    },
  },
};

objB.skills.someValue.foo(); // В режиме (type = "module") будет undefined   // В режиме ('use strict') будет Window   // Не в строгом режиме будет Window
|============================
*/
// --------------------
/** Стрелочные функции (arrow function)
|============================
//  Стрелочные функции (arrow function) как методы объекта не используем! Так как они не имеют своего this и ссылаются на отцовский элемент.
// -------------------------------------
// ----- Пример ниже: Так не работает!
const objB = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      nickName: () => {
        console.log(this);
      },
    },
  },
};

objB.skills.someValue.nickName();        // В режиме ('use strict') будет Window   // В режиме (type = "module") будет undefined

// -------------------------------------
// Но, есть исключения! Так работает! но такие случаи используют редко.
* Есть такие случаи когда мы создаем какой-то метод объекта (с помощью функции function declaration) в середине которого будет создана функция arrow function(стрелочная функция).
* Исключение когда стрелочная функция может использоваться- это когда стрелочная функция брёт свой this у отцовского элемента и если стрелочная функция вызвана в середине функции function declaration, а та в свою очередь вызвана объектом, то стрелочная функция возьмёт this у отцовской функции.

// Пример: В этом случае стрелочная функция nickName вызвана в середине функции foo (function declaration) и значит она берёт this с этой функции foo, а сама функция foo вызвана объектом someValue и ссылается на этот объект. Поэтому стрелочная функция сошлёт свой this на функцию foo в которой находится.

const objB = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      foo() {
        const nickName = () => {
          console.log(this);
        };
        nickName();
      },
    },
  },
};

objB.skills.someValue.foo();              // {value: 10, foo: ƒ}

// -------------------------------------
// Еще пример: Так не работает!
// Стрелочная функция nickName вызвана в середине стрелочной функции foo, та же в свою очередь тоже не имее своего this или возьмет его из глобального
элемента Window. Поэтому будет в режиме('use strict') Window, а в режиме(type = "module") undefined.

const objB = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      foo: () => {
        const nickName = () => {
          console.log(this);
        };
        nickName();
      },
    },
  },
};

objB.skills.someValue.foo();      // В режиме ('use strict') будет Window   // В режиме (type = "module") будет undefined

// -------------------------------------
// Еще пример: Так не работает!
const objB = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      foo: () => {
        function nickName() {
          console.log(this);
        }
        nickName();
      },
    },
  },
};

objB.skills.someValue.foo(); // В режиме (type = "module") будет undefined   // В режиме ('use strict') будет Window   // Не в строгом режиме будет Window
|============================
*/
// --------------------
/** Тренировка this
|============================
Тренировка
// -------------------------------------
const objA = {
  age: 22,
  myAge() {
    console.log(this);
  },
};
objA.myAge();             // {age: 22, myAge: ƒ}

// -------------------------------------
const objA = {
  age: 22,
  myAge: () => {
    console.log(this);
  },
};
objA.myAge();            // В режиме (type = "module") будет undefined   // В режиме ('use strict') будет Window   // Не в строгом режиме будет Window

// -------------------------------------
const objA = {
  age: 22,
  myAge: () => {
    const test = () => {
      console.log(this);
    };
    test();
  },
};
objA.myAge();                // В режиме (type = "module") будет undefined   // В режиме ('use strict') будет Window   // Не в строгом режиме будет Window

// -------------------------------------
const objA = {
  age: 22,
  myAge() {
    const test = () => {
      console.log(this);
    };
    test();
  },
};

objA.myAge();                // {age: 22, myAge: ƒ}

// -------------------------------------
const objA = {
  age: 22,
  myAge() {
    function test() {
      console.log(this);
    }
    test();
  },
};

objA.myAge();                 // undefined

// -------------------------------------
const objA = {
  age: 22,
  skilss: {
    skill: ['html', 'css'],
    foo() {
      const boo = () => {
        console.log(this);
      };
      boo();
    },
  },
};

objA.skilss.foo();             // {skill: Array(2), foo: ƒ}

// -------------------------------------
const objA = {
  age: 22,
  myAge() {
    const test = () => {
      console.log(this);
    };
    test();
  },
};

const objB = {
  age: 12,
  someFunction: objA.myAge,
};

objB.someFunction();           // {age: 12, someFunction: ƒ}

// -------------------------------------
const objA = {
  age: 22,
  myAge() {
    const test = () => {
      console.log(this);
    };
    test();
  },
};

const objB = {
  age: 12,
  someFunction: objA.myAge,
};

const objC = {
  age: 13,
  somecrazy: objB.someFunction,
};

objC.somecrazy();             // {age: 13, somecrazy: ƒ}

// -------------------------------------
const objA = {
  name: 'A',
  foo() {
    console.log(this);
  },
};

objA.foo();                  // {name: 'A', foo: ƒ}

// -------------------------------------
const objA = {
  name: 'A',
  foo: () => {
    console.log(this);
  },
};

objA.foo();                   // В режиме (type = "module") будет undefined   // В режиме ('use strict') будет Window   // Не в строгом режиме будет Window
|============================
*/
// --------------------
/**  Методы функцый  .bind(), .call(), .apply()
|============================
// -------------------------------------------------------
// Метод.call()
// -------------------------------------------------------
// Метод call вызывает функцию или метот тут и сейчас. Он может вызывать метод объекта в контексте другого объекта.
// Есть возмщжность переиспользовать функцию.

// Параметры передаваемые в call. Первым параметром указываем объект в контексте которого должен быть вызван this, начиная со второго параметра и дальше мы можем передавать какие-то свои аргументы.

// В примере ниже первым параметром указываем объект objB(на его контекст будет ссылаться this), вторым и третим параметром указываем (a, b) в них прийдут значения которые мы передадим в аргументы при вызове. 
// Тоесть 
* При вызове в контексте (objA) в параметр (а) прийдет аргумент (22), и в параметр (b) прийдет аргумент (44). 
* При вызове в контексте (objB) в параметр (а) прийдет аргумент (1),  и в параметр (b) прийдет аргумент (2).

const objA = {
  age: 22,
  myAge(a, b) {
    console.log(this, a, b);
  },
};
objA.myAge(22, 44);                       // {age: 22, myAge: ƒ} 22 44

const objB = {
  age: 23,
};

objA.myAge.call(objB, 1, 2);             // {age: 23} 1 2   // Фактически мы говорим, что this в методе объекта myAge в объекте objA бери контекст объекта objB(ссылайся на объект objB). Вызови и передай свой контекст.

// -------------------------------------------------------
const objA = {
  name: 'A',
  myAge(a, b) {
    console.log(this, a, b);
  },
};

objA.myAge(22, 44);                    // {age: 22, myAge: ƒ} 22 44

const objB = {
  name: 'B',
};
const objC = {
  name: 'C',
};

objA.myAge.call(objB, 1, 2);           // {name: 'B'} 1 2
objA.myAge.call(objC, 10, 20);         // {name: 'C'} 10 20

// -------------------------------------------------------
// Метод.apply()
// -------------------------------------------------------
// Метод apply вызывает функцию или метот тут и сейчас. Он может вызывать метод объекта в контексте другого объекта.
// Есть возмщжность переиспользовать функцию.

// Метод.apply() максимально подобный методу .call(). Есть между ними одно отличие.

* Метод.call()- принимает первым параметром объект в котором будет выполняться контекст(наш будущий this), начиная со второго и далее все те параметры которые ожидает наш метод. (Передает список параметров начиная со второго).
* Метод.apply()- принимает два параметра, первым параметром объект в котором будет выполняться контекст(наш будущий this), вторым параметром масив наших параметров.(Передает масив параметров вторым параметром).

// Метод.apply() и Метод.call() Используются эти методы функций в том случае когда у нас есть готовый метод объекта и нам нужно его переиспользовать с изменением контекста(в контексте другого объекта). Для того чтоб этот метод не копировать ни куда, не присваивать никуда, просто воспользоваться им, мы можем вызвать apply или call. 

const objA = {
  name: 'A',
  myAge(a, b) {
    console.log(this, a, b);
  },
};

// objA.myAge(22, 44);                       // {age: 22, myAge: ƒ} 22 44

const objB = {
  name: 'B',
};
const objC = {
  name: 'C',
};

objA.myAge.call(objB, 1, 2);
objA.myAge.call(objC, 10, 20);               // {name: 'C'} 10 20

objA.myAge.apply(objC, [10, 20]);            // {name: 'C'} 10 20
objA.myAge.apply(objC, [10, 20, 30, 40]);    // {name: 'C'} 10 20

// -------------------------------------------------------
const objA = {
  name: 'A',
  myAge(a, b, c) {
    console.log(this, a, b, c);
    return 'Some value';
  },
};

// objA.myAge(22, 44);                                      // {age: 22, myAge: ƒ} 22 44

const objB = {
  name: 'B',
  // myAge: objA.myAge
};
const objC = {
  name: 'C',
  // myAge: objA.myAge
};

objA.myAge.call(objB, 1, 2);                               // {name: 'B'} 1 2
objA.myAge.call(objC, 10, 20);                             // {name: 'C'} 10 20

objA.myAge.apply(objC, [10, 20]);                          // {name: 'C'} 10 20
objA.myAge.apply(objC, [10, 20, 30, 40]);                  // {name: 'C'} 10 20 30

const str = objA.myAge.call(objC, 10, 20);
console.log(str); // Some value

// ------------------
// К примеру с бекенда прилетел какой-то масив и нам нужно его обработать.

const fromBackEnd = [55, 66, 77, 88, 99, 100];              // масив с бекенда  и нам нужно его обработать.

// Вариант-1 с операцией apply

objA.myAge.apply(objC, fromBackEnd);                        // {name: 'C'} 55 66 77 

// *  С появлением распыления в JS можно это сделать с помощью оператора ...spread. Это будет взаимно заменимая операция.

// Вариант-2 с распылением ...spread

const str2 = objA.myAge.call(objC, ...fromBackEnd);        // {name: 'C'} 55 66 77

// -------------------------------------------------------
Метод .bind()
// -------------------------------------------------------
// Метод .bind() Даёт нам возможность скопировать функцию, навсегда присвоивши ей свой this.
// Метод .bind() Копирует функцию и навсегда привязывает ей контекст.

const objA = {
  name: 'A',
  myAge(a, b, c, d) {
    console.log(this, a, b, c, d);
    return 'Some value';
  },
};

const objB = {
  name: 'B',
};

const result = objA.myAge.bind(objB, 10, 20, 30, 40);

result(); //  {name: 'B'} 10 20 30 40

// -------------------------------------------------------
// Если нам каждый раз нужно будет изменять те параметры которые принимает наша функция или наш метод, мы ни вкоем случае не должны передавать их с помощью bind. Мы привязываем контекст с помощью bind, а дальше передаем дополнительные параметры с помощью вызова.

const objA = {
  name: 'A',
  myAge(a, b, c, d) {
    console.log(this, a, b, c, d);
    return 'Some value';
  },
};

const objB = {
  name: 'B',
};

const objC = {
  name: 'C',
};

// -----------
// Так лучше не делать!
// В этом варианте мы привязываем дополнительные параметры(10, 20, 30, 40) на всегда и чтобы перезаписать их нам нужно заново пререзаписть весь вызов. Это не удобно!

const result = objA.myAge.bind(objB, 10, 20, 30, 40);
const result2 = objA.myAge.bind(objB, 96, 97, 98, 99);

result();                                              // {name: 'B'} 10 20 30 40
result2();                                             // {name: 'B'} 10 20 30 40

// -----------
// Так будет правельнее!
// В этом варианте мы привязали контекст с помощью bind, а парамептры передаем в переменную при вызове.

const res = objA.myAge.bind(objB);

res(10, 20, 30, 40);                                  // {name: 'B'} 10 20 30 40
res(999, 888, 777, 666);                              // {name: 'B'} 999 888 777 666

const res2 = objA.myAge.bind(objC);

res2(1, 2, 3, 4);                                     // {name: 'C'} 1 2 3 4

// если аргументов при вызове менньше чем заданых параметров в функции, то на месте тех параметров где нехватает аргументов будет undefined.
res2(1, 2);                                           // {name: 'C'} 1 2 undefined undefined

// -------------------------------------------------------
// Если мы не знаем сколько аргументов прийдет, то в таком случае в функции не обьявляем параметра, а используем псевдомасив arguments или распыление ...spread

const objA = {
  name: 'A',
  myAge(...args) {
  // или arguments
    console.log(this, args);
    return 'Some value';
  },
};

const objB = {
  name: 'B',
};

const objC = {
  name: 'C',
};

const result = objA.myAge.bind(objB);

result(10, 20, 30, 40);                    // {name: 'B'} 10 20 30 40
result(999, 888, 777, 666);                // {name: 'B'} 999 888 777 666

const res = objA.myAge.bind(objC);

res(1, 2, 3, 4);                           // {name: 'C'} 1 2 3 4
res(1, 2);                                 // {name: 'C'} 1 2 

// -------------------------------------------------------
// Если нам нужно что-то обработать один раз то используем .call(), .apply()
// Если нам нужно что-то обработать несколько раз то используем .bind()
// -------------------------------------------------------
|============================
*/
// ________________________________________________________________________________________________
/* ! <<<<<<<<<<<<<<< ||| ЗАДАЧИ Артем - Олег модуль-5 занятие-1 Ключове слово this. Методы .bind(), .call(), .apply() ||| >>>>>>>>>>>>>>> ! */
// ________________________________________________________________________________________________
/** ЗАДАЧИ Олег: модуль-5 занятие-1 Контекст вызова функции и this
|============================
* Example 1 - Мастерская драгоценностей
* Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {},
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// ===============================================
* Example 2 - Телефонная книга
* Выполните рефакторинг методов объекта phonebook чтобы код заработал.

const phonebook = {
  contacts: [],

  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: generateId(),
      createdAt: getDate(),
    };
    contacts.push(newContact);
  },

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },

  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

// ===============================================
Example 3 - Калькулятор
Создайте объект calculator с тремя методами:

* read(a, b)- принимает два значения и сохраняет их как свойства объекта.
* add() - возвращает сумму сохранённых значений.
* mult() - перемножает сохранённые значения и возвращает результат.

const calculator = {};
|============================
*/
// --------------------
/** ОТВЕТЫ на задачи модуль-5 занятие-1 Контекст вызова функции и this
|============================
// Example 1 Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  // ------------------------------ Решение (Олег)
  calcTotalPrice(stoneName) {
    const stone = this.stones.find(stone => stone.name === stoneName);

    if (!stone) return 0;

    return stone.price * stone.quantity;
  },

  // ------------------------------ Решение (Артем)
  const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {
    const { price, quantity } = this.stones.find(
      ({ name }) => name === stoneName
    );
    return price * quantity;
  },
};

// ----- Если нам нужно увеличить наш магазин. Пример работы с методом .call()

const shop2 = {
  stones: [
    { name: 'Щебень', price: 1300, quantity: 4 },
    { name: 'Песок', price: 2700, quantity: 3 },
  ],
};

// Вызов ------------------------------------------------

console.log(chopShop.calcTotalPrice.call(shop2, 'Щебень'));    // 5200

console.log(chopShop.calcTotalPrice('Emerald'));      // 5200
console.log(chopShop.calcTotalPrice('Diamond'));      // 8100
console.log(chopShop.calcTotalPrice('Sapphire'));     // 9800
console.log(chopShop.calcTotalPrice('Ruby'));         // 1600

// ========================================================================
// Решение - Example 2 - Телефонная книга
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// ------------------------------ Решение (Олег)
const phonebook = {
  contacts: [],

  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },

  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

console.log(phonebook.contacts);

 // ------------------------------ Решение (Артем)
 const phonebook = {
  contacts: [],

  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
    return this.contacts;
  },

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },

  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

// ========================================================================
// Решение - Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

* read(a, b)- принимает два значения и сохраняет их как свойства объекта.
* add() - возвращает сумму сохранённых значений.
* mult() - перемножает сохранённые значения и возвращает результат.

// ------------------------------ Решение (Олег)
const calculator = {
  a: 0,
  b: 0,

  read(a, b) {
    this.a = a ?? this.a;
    this.b = b ?? this.b;
  },

  add() {
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },
};

calculator.read(10, 30);

console.log(calculator.add());
console.log(calculator.mult());

calculator.read(20);

console.log(calculator.add());
console.log(calculator.mult());

// ------------------------------ Решение (Артем)

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    return (this.a ?? 0) + (this.b ?? 0); // (??) - это оператор нолевого соединения, хорошая замена оператору ( ИЛИ - || ).(видео 2:03:07)
  },
  mult() {
    return (this.a ?? 1) * (this.b ?? 1);
  },
};

// calculator.read(3);
calculator.read(3, 0);
console.log(calculator.mult());
console.log(calculator.add());
// calculator.read(1, 2);

console.log(calculator);

|============================
*/
// ________________________________________________________________________________________________
/* ! <<<<<<<<<<<<<<< ||| Репета модуль-5 занятие-2 Прототипне наслідування ||| >>>>>>>>>>>>>>> ! */
// ________________________________________________________________________________________________
/** Прототипне наслідування
|============================
 * Прототип объекта
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
// ------------------------------------------------
// Object.create()    Цепочка прототипов.
// ------------------------------------------------
// Эта штука создает новый пустой объект objB и делает для этого объекта прототипом тот объект который мы укажем как аргумент в Object.create(objC).
// objC - это прототип для объекта objB. В объекте objC лежит ссылка на объект objB.
// В созданный новый объект добавляем свойство, чтоб он не показывал пустой объект.

// Цепочка объектов прототипов.

const objC = {
  z: 5,
};

const objB = Object.create(objC);        // Говорю сделай мне новый объект objB и пусть у него прототипом будет objC.
objB.y = 2;

const objA = Object.create(objB);        // Говорю сделай мне новый объект objA и пусть у него прототипом будет objB.
objA.x = 1;

// ----------

console.log('objC', objC);               // objC {z: 5}
console.log('objB', objB);               // objB {y: 2}
console.log('objA', objA);               // objA {x: 1}

// Получилась цепочка прототипов.
// Объект objA, у него прототип объект objB, в свою очередь у объекта objB прототип объект objC.

// ----------
// Доступ к свойствам объекта.

console.log(objB.y);               // 2     // (собственное свойство объекта objB)
console.log(objB.z);               // 5     // (не собственное свойство объекта objB)
console.log(objA.z);               // 5     // (не собственное свойство объекта objB)


// мы получим undefined не тогда когда нет этого свойства в объекте, а тогда когда этого свойства нет во всей цепочки прототипов.
console.log(objA.qwe);             // undefined        // (этого свойства нет во всей цепочки прототипов.)

// ----------
// Добавление свойства в объект.

objA.d = 1000;                   // Создаст новое свойство x со значением 1000
console.log('objA', objA);       // objA {x: 1, d: 1000}

// ----------
// Изменеиея значения свойства в объект.

objA.d = 10;                     // Создаст новое свойство x со значением 1000
console.log('objA', objA);       // objA {x: 1, d: 10}

// ----------
// Проверка на собственное свойство. .hasOwnProperty()

console.log(objC.hasOwnProperty('z'));           // true          // Если есть собственное свойство 'z' оно мне вернет true, если нет, то false.
console.log(objC.hasOwnProperty('y'));           // false         // Оно мне скажет false такого собственного свойства в объекте objC нет.

// ------------------------------------------------
// Алгоритм поиска свойства в цепочке прототипов.

const dummyObj = Object.create({
  message2: 'Это свойство на объекте-прототипе',
});

dummyObj.message = 'Это собственное свойство объекта';

console.log('dummyObj', dummyObj); // dummyObj {message: 'Это собственное свойство объекта'}

console.log(dummyObj.message); // Это собственное свойство объекта

console.log(dummyObj.message2); // Это свойство объекта протортипа

//  * Алгоритм поиска свойства в цепочке прототипов:
//  * 1. Поиск начинается в собственных свойствах
//  * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
//  * 3. Поиск прекращается при первом совпадении (есть такое свойство) Если в разных объектах лежат одинаковые свойства, то вернёт первое совпадение!
//  * 4. Возвращается значение свойства
//  * 4. Если же поиск дошол до конца цепочки и ненашол совпадения, то вернёт undefined.
|============================
*/
// --------------------
