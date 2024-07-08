// !--------------||| Репета модуль-5 занятие-1 Ключове слово this. |||--------------!

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

// !--------------||| Олег модуль-5 занятие-1 Ключове слово this. Методы .bind(), .call(), .apply() |||--------------!

/** Контекст this
|============================

|============================
*/
// --------------------------
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
// --------------------------
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
// -------------------------------------------------------------------
/** ОТВЕТЫ на задачи модуль-5 занятие-1 Контекст вызова функции и this
|============================
// Решение - Example 1 Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {
    const stone = this.stones.find(stone => stone.name === stoneName);

    if (!stone) return 0;

    return stone.price * stone.quantity;
  },
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// ========================================================================
// Решение - Example 2 - Телефонная книга
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

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
// ========================================================================
// Решение - Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

* read(a, b)- принимает два значения и сохраняет их как свойства объекта.
* add() - возвращает сумму сохранённых значений.
* mult() - перемножает сохранённые значения и возвращает результат.

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

|============================
*/

// !--------------||| Артем модуль-5 занятие-1 Ключове слово this. Методы .bind(), .call(), .apply() |||--------------!

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
// -------------------------------------------------------------
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
// -------------------------------------------------------------
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

objA.skilss.foo(); // {skill: Array(2), foo: ƒ}

// -------------------------------------

|============================
*/
// -------------------------------------------------------------
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

objA.skilss.foo(); // {skill: Array(2), foo: ƒ}

// 51:35
