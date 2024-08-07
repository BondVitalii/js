// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Репета модуль-5 занятие-1 Ключове слово this. Методы .bind(), .call(), .apply() ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
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
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Репета модуль-5 занятие-2 Прототипне наслідування ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
/** Прототипное наследование (видео https://www.youtube.com/watch?v=snuVmKJ1gBg)(видео Прототипное наследование)
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
// Object.create() - Эта штука создает новый пустой объект objB и делает для этого объекта прототипом тот объект который мы укажем как аргумент в Object.create(objC).
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

// --------------------

console.log('objC', objC);               // objC {z: 5}
console.log('objB', objB);               // objB {y: 2}
console.log('objA', objA);               // objA {x: 1}

// Получилась цепочка прототипов.
// Объект objA, у него прототип объект objB, в свою очередь у объекта objB прототип объект objC.

// --------------------
// Доступ к свойствам объекта.

console.log(objB.y);               // 2     // (собственное свойство объекта objB)
console.log(objB.z);               // 5     // (не собственное свойство объекта objB)
console.log(objA.z);               // 5     // (не собственное свойство объекта objB)

console.log(objA.qwe);             // undefined        // (этого свойства нет во всей цепочки прототипов.)

// мы получим undefined не тогда когда нет этого свойства в объекте, а тогда когда этого свойства нет во всей цепочки прототипов.

// --------------------
// Добавление свойства в объект.

objA.d = 1000;                   // Создаст новое свойство x со значением 1000
console.log('objA', objA);       // objA {x: 1, d: 1000}

// --------------------
// Изменеиея значения свойства в объект.

objA.d = 10;                     // Создаст новое свойство x со значением 1000
console.log('objA', objA);       // objA {x: 1, d: 10}

// --------------------
// Проверка на собственное свойство. .hasOwnProperty()

console.log(objC.hasOwnProperty('z'));           // true          // Если есть собственное свойство 'z' оно мне вернет true, если нет, то false.
console.log(objC.hasOwnProperty('y'));           // false         // Оно мне скажет false такого собственного свойства в объекте objC нет.

// ------------------------------------------------
// Алгоритм поиска свойства в цепочке прототипов.

const dummyObj = Object.create({
  message2: 'Это свойство на объекте-прототипе',
});

dummyObj.message = 'Это собственное свойство объекта';

console.log('dummyObj', dummyObj);                // dummyObj {message: 'Это собственное свойство объекта'}

console.log(dummyObj.message);                   // Это собственное свойство объекта

console.log(dummyObj.message2);                  // Это свойство объекта протортипа

//  * Алгоритм поиска свойства в цепочке прототипов:
//  * 1. Поиск начинается в собственных свойствах
//  * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
//  * 3. Поиск прекращается при первом совпадении (есть такое свойство). Если в разных объектах лежат одинаковые свойства, то вернёт первое совпадение!
//  * 4. Возвращается значение свойства
//  * 4. Если же поиск дошол до конца цепочки и ненашол совпадения, то вернёт undefined.
|============================
*/
// --------------------
/** * Функции-конструкторы (видео Прототипное наследование)
|============================
// Функции-конструкторы
// ------------------------------------------------
const Car = function ({ brand, model, price } = {}) {               // Класс Car.
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {                  // Метод класса на свойстве прототип.
  this.price = newPrice;
};

Car.description = 'Класс описывающий автомобиль';                 // Статическое свойство.

Car.logInfo = function (carObj) {                                 // Статический метод.
  console.log('Car.logInfo -> carObj', carObj);
};

const myCar = new Car({                                           // Экземпляр класса.
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

// console.dir(Car);
console.log(myCar); // Car {brand: 'Audi', model: 'Q3', price: 35000}

myCar.changePrice(10);
console.log(myCar); // Car  {brand: 'Audi', model: 'Q3', price: 10}

Car.logInfo(); // Car.logInfo -> carObj undefined

// ================================================================
// Ниже разбираем по шагово что такое "Функции-конструкторы" (видео Прототипное наследование)
// ================================================================
* Основы ООП: класс, экземпляр (объект), интерфейс
// ------------------------------------------------
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype

// Функция-конструктор - Её имя должно быть с большой буквы существительное в единственном числе! (например Car)

const Car = function () {
  // console.log(this);              // Car {}

  this.brand = '';                  // Добавляем свойство brand в объект
  this.model = '';                  // Добавляем свойство model в объект
  this.price = '';
};

// console.dir(Car);

const myCar = new Car();       // Создаём первый экземпляр. Это говорит создай новый экземпляр(новую машину), оператор new отвечает за создание нового экземпляра.
console.log(myCar);                                         // В результате этого вызова мы получаем объект myCar который является экземпляром класса Car

const myCar2 = new Car();      // Создаём второй экземпляр
console.log(myCar2);

// 1) Если функция вызывается через оператор new, создается пустой объект (где-то в памяти).
// 2) Функция конструктор вызывается в контексте созданного объекта, то есть в this записывается ссылка на него. Во время вот этого вызова Car() - это вызов функции, this будет ссылаться пока что на тот пустой созданный объект.
// 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype, тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
// 4. Ссылка на обьект возвращается в место вызова new Car.

// ------------------------------------------------
// Передача аргументов в параметры.

const Car = function (brand, modal, price) {    // Класс Car (передачей независимых параметров (brand, modal, price))
  this.brand = brand;
  this.model = modal;
  this.price = price;
};

const myCar = new Car('Audi', 'Q3', 35000);     // Передаем аргументы ('Audi', 'Q3', 35000)
console.log(myCar);                             // Car {brand: 'Audi', model: 'Q3', price: 35000}

const myCar2 = new Car();
console.log(myCar2);                           // Car {brand: undefined, model: undefined, price: undefined}    // Будет три undefined потому что ни чего не передали.

// ------------------------------------------------
// Улудшаем.
// Если у нас два и больше аргументов, то лучше передовать аргументы через обьект настроек, а не просто набор параметров-это не удобно. Пример: ниже.
// В параметр класса Car  передаём обьект настроек. Слово config можно заменить на любое другое,это просто название параметра.

const Car = function (config) {                                              // Класс Car. 
  // console.log(config);                                                    // {brand: 'Audi', model: 'Q3', price: 35000}

  this.brand = config.brand;
  this.model = config.model;
  this.price = config.price;
};

const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });        // Передаем объект как аргумент
console.log(myCar);                                                         // Car {brand: 'Audi', model: 'Q3', price: 35000}

const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
console.log(myCar2);                                                        // Car {brand: 'BMW', model: 'X6', price: 50000}

// ------------------------------------------------
// Улудшаем.
// Параметр по умолчанию (config = {}), чтоб небыло ошибки.
// В параметр передаём обьект настроек с параметром по умолчанию, чтоб небыло ошибки если прийдет не объект.

const Car = function (config = {}) {                                         // Класс Car. 
  this.brand = config.brand;
  this.model = config.model;
  this.price = config.price;
};

const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });        // Передаем объект как в параметр (операция: обьект настроек)
console.log(myCar);                                                         // Car {brand: 'Audi', model: 'Q3', price: 35000}

const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
console.log(myCar2);                                                        // Car {brand: 'BMW', model: 'X6', price: 50000}

const myCar3 = new Car();
console.log(myCar3);                                                       // Car {brand: 'BMW', model: 'X6', price: 50000}

// В myCar3 не передаем аргументы,поэтому будет ошибка. 
// Чтоб небыло ошибки в параметр функции Car нужно поставить параметр по умолчанию хотябы пустой объект (config = {}). Если ничего не передаем, то в config запишется пустой объект.

// ------------------------------------------------
// Улудшаем.
// Деструктуризация обьекта.

// ---------- Вариант-1 Деструктуризация в теле функции.

const Car = function (config = {}) {
  const { brand, model, price } = config;                                 // Деструктуризация в теле функции.
  this.brand = brand;
  this.model = model;
  this.price = price;
};

const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });      // Передаем объект как в параметр (операция: обьект настроек)
console.log(myCar);                                                       // Car {brand: 'Audi', model: 'Q3', price: 35000}

const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
console.log(myCar2);                                                     // Car {brand: 'BMW', model: 'X6', price: 50000}

const myCar3 = new Car();
console.log(myCar3);                                                     // Car {brand: undefined, model: undefined, price: undefined}

// ---------- Вариант-2 (Деструктуризация в параметре функции)

const Car = function ({ brand, model, price } = {}) {                    // Деструктуризация в параметре функции
  this.brand = brand;
  this.model = model;
  this.price = price;
};

const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });   // Передаем объект как аргумент
console.log(myCar);                                                    // Car {brand: 'Audi', model: 'Q3', price: 35000}

const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
console.log(myCar2);                                                   // Car {brand: 'BMW', model: 'X6', price: 50000}

const myCar3 = new Car();
console.log(myCar3);                                                   // Car {brand: undefined, model: undefined, price: undefined}

// ------------------------------------------------
// Пробуем добавить метод который меняет цену машины. (видео 45:27 https://www.youtube.com/watch?v=snuVmKJ1gBg)

// Вызывается new Car() делается пустой объект. Функция ссылается в контексе этого объекта, тоесть this ссылается на этот объект. В него добавляются свойства brand,model,price (по ссылке просто записываем этот объект) И в том числе ему автоматически добавляется свойство __proto__ которое ссылается на Car.pototype. Получается что прототип устанавливается сразу при создании экземпляра. И мы можем использовать этот объект pototype для того чтобы создать какие-то общие методы.

const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.sayHi = function () {                                    // Создаем общий метод объекта для экземпляров этого класса.
  console.log('Car.prototype.sayHi -> this', this);                    // Car.prototype.sayHi -> this Car {brand: 'Audi', model: 'Q3', price: 35000}
  console.log('Hello :) ');                                            // Hello :)
};
console.log(Car.prototype);                                            // {sayHi: ƒ}

const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
console.log(myCar);                                                   // Car {brand: 'Audi', model: 'Q3', price: 35000}

myCar.sayHi();                                                        // Происходит вазов функции sayHi в контексте объекта myCar, поэтому this будет ссылаться на myCar

const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
console.log(myCar2);                                                  // Car {brand: 'BMW', model: 'X6', price: 50000}

myCar2.sayHi();

const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
console.log(myCar3);                                                  // Car {brand: 'Audi', model: 'A6', price: 65000}

myCar3.sayHi();

// Каждый из моих машин может пойти и обратиться к этому методу в экземпляре.

// ------------------------------------------------
// Меняем стоимость авто

const Car = function ({ brand, model, price } = {}) {                      // Класс Car
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.sayHi = function () {                                        // Метод. На прототип вешаем методы чтобы экземпляры могли получить к ним доступ.
  console.log('Car.prototype.sayHi -> this', this);
  console.log('Hello :) ');
};

Car.prototype.chngePrice = function (newPrice) {                           // Метод. На прототип вешаем методы чтобы экземпляры могли получить к ним доступ.
  this.price = newPrice;
};

Car.description = 'Класс описывающий автомобиль'                           // Статическое свойство.

Car.logInfo = function(carObj){                                            // Статический метод.
  console.log('Car.logInfo -> carObj', carObj);
}
console.log(Car.prototype);

const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });       // Экземпляр класса
console.log(myCar);

myCar.sayHi();
myCar.chngePrice(10000);                                                  // Меняем стоимость авто

const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });      // Экземпляр класса
console.log(myCar2);

myCar2.sayHi();

const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });    // Экземпляр класса
console.log(myCar3);

myCar3.sayHi();

Еще раз алгоритм наших правил.
// 1. Если функция вызывается через new, создаётся пустой объект
// 2. Функция вызывается в контексте созданного объекта, то есть в this записывается ссылка на него
// 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
// 4. Ссылка на обьект возвращается в место вызова new Car

// ------------------------------------------------
// Тренеровка-2 на другом вариане объекта User (видео 57:09 https://www.youtube.com/watch?v=snuVmKJ1gBg)

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

// console.log(User.prototype);

User.prototype.changeEmail = function (newMail) {
  this.email = newMail;
};

const mango = new User({ email: 'mango@mail.com', password: 1111111 });

mango.changeEmail('my-new-mail@mail.com');
console.log(mango);                                            // User {email: 'my-new-mail@mail.com', password: 1111111}

// ------------------------------------------------
Итог: Прототипное наследование
* 1. У каждого обьекта есть свойство __proto__
* 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
* 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
* 4. Функция-конструктор это просто функция :)
* 5. Всю магию делает оператор new
* 6. Если функция вызывается через new, создаётся пустой объект
* 7. Функция вызывается в контексте созданного объекта
* 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
* 9. Ссылка на обьект возвращается в место вызова new Фунукция()

// ------------------------------------------------
// Статические свойства и методы   (видео 1:13:00  https://www.youtube.com/watch?v=snuVmKJ1gBg)
// ------------------------------------------------
* Статические свойства и методы
* - Статические свойства и методы доступны только на самом конструкторе
* - В статических методах не нужен this

// User.message = 'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.password);
};

User.logInfo(mango);
|============================
*/
// --------------------
/** Дополнение (Функции-конструкторы, Прототипное наследование) для тех кто хочет посмотреть для чего нам это нужно. (видео Прототипное наследование)
|============================
файл https://github.com/luxplanjay/js-22/blob/05-1-прототипы/js/03-counter.js
видио (видео 1:26:59  https://www.youtube.com/watch?v=snuVmKJ1gBg)

const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
  onUpdate = () => null,
} = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);

  this.onUpdate = onUpdate;

  this._bindEvents();
  this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype._bindEvents -> this', this);
    this.increment();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype._bindEvents -> this', this);
    this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;

  this.onUpdate();
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

new CounterPlugin({
  rootSelector: '#counter-1',
  step: 10,
  initialValue: 100,
  onUpdate: () => console.log('Это мой кастомный колбек для onUpdate'),
});

new CounterPlugin({ rootSelector: '#counter-2', step: 2 });
|============================
*/
// --------------------
/** Классы (видео классы https://www.youtube.com/watch?v=Z-w9kLvu18A)
|============================
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры

// Для того чтоб обьявить класс, мы пишем ключевое слово class и потом имя с большой буквы имя класса (к примеру Car), и тело {}.

  * (Car) - это функция со свойством prototype вкотором объект со свойством constructor лежит.
  * И через new создается объект в свойстве [[Prototype]] которого лежит ссылка на свойство prototype этого класса.
  * В теле мы пишем constructor() {} - это синтаксис метода класса. Эта штука выполняется(инициализируется) автоматически, сразу как только мы создаем экземпляр и в нём конструкторе есть this.


class Car1 {
  static description = 'Класс описывающий автомобиль';                       // Статическое свойство класса. (После него обязательно точка с запятой).

  static logInfo(carObj) {                                                   // Статический метод класса. (После него точка с запятой не нужна).
    console.log('Car.logInfo -> carObj', carObj);
  }

  #test = 'test';                                                            // Приватное свойство. (Чтобы создать приватное свойство, добавляем #)

  mySuperPublicField = 555;                                                  // Публичное свойство. Это синтаксис публичного свойства в классе.

  constructor({ brand, model, price } = {}) {                    // Конструктор метод класса. В параметре проводим деструктуризацию с параметром по умолчанию.
    // console.log('Выполняется constructor');                   // Выполняется constructor
    // console.log(this);                                        // Car1 {}   brand: 'Audi'   model: 'Q3'   price: 35000

    this.brand = brand;
    this._model = model;                                         // При работе с геттерами и сеттерами в свойстве ставим впереди нижнее подчеркивание.
    this._price = price;

    this.mySuperPublicField = 555;                              // Публичное свойство. Это синтаксис публичного свойства в методе.
  }

// Публичное свойство как метод(стрелочная функция). Все что мы объявляем публичными свойствами, все оно идёт на экземпляр. Поэтому врядли мы хотим методы класса делать публичными свойствами.

 //  // qweqwe = newPrice => {                        // Публичное свойство как метод(стрелочная функция)
 //  //   this.model = newPrice;
 //  // };

  changePrice(newPrice) {                            // Метод класса.
    this.price = newPrice;
  }
  
  updateModel(newModel) {                           // Метод класса.
    this.model = newModel;
  }

  // API - геттеры и сеттеры - интерфейс для работы с доступом к свойствам.
  // Вариант-1 работа со свойствами(интерфейс) через геттеры и сеттеры get model(), set model().
  // В каких случаях используем Геттеры и Сеттеры? В том случае когда ты видишь что в будующем это свойство будет из вне читаться или перезаписываться!

  get model() {
    return this._model;
  }
  set model(newModel) {
    this._model = newModel;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  
  // Вариант-2 (Репета) работа со свойствами(интерфейс) через методы getModel() и setModel(). Так было раньше до появления Сеттеров и Геттеров.

  // setModel(newModel) {
  //   this.model = newModel;
  // }
  // getModel() {
  //   return this.model;
  // }
}

console.dir(Car1); // class Car1
console.log(Car1.description);                        // Класс описывающий автомобиль

const carInstance = new Car1({                        // Создаём экземпляр carInstance класса Car1
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

// С помощью Object.getPrototypeOf()                  // можем спросить,что является прототипом этого экземпляра carInstance?
// console.log(Object.getPrototypeOf(carInstance));   // {} constructor: class Car1

console.log(carInstance);                             // Car1 {brand: 'Audi', model: 'Q3', price: 35000}

Car1.logInfo(carInstance);                            // Car.logInfo -> carObj Car1 {brand: 'Audi', model: 'Q3', price: 35000}

// ----------------------------
// Доступ к свойствам через сеттеры и геттеры set model() и get model().
// * console.log(carInstance.model); Такое обращение без(геттеров, сеттеров get model() и set model()) будет работать, НО ЭТО НЕ ПРАВИЛЬНО! Потому что мы не хотоим на прямую обращяться к свойствам, свойство используеться в десяти местах кода и в будующем оно может изминиться, и если оно изменится в одном классе, то нам нужно будет рефакторить его везде.

// * Для этого делают API - тоесть интерфейс для работы с доступом к свойствам. (Вариант-1 Геттеры и Сеттеры) или (Вариант-2 через Методы, до появления Сеттеров и Геттеров).

// * Вариант-1 правильный! (работа с гетерами и сетерами - set model() и get model()).

console.log(carInstance.model); // Q3
carInstance.model = 'Q4'; // ипользуется для изменения значения свойства.
console.log(carInstance.model); // Q4

// * Вариант-2 (Репета Так было раньше!) (работа через методы - getModel() и setModel()), но при таком подходе куча вызовов методов. Поэтому используют геттеры и сеттеры!

// console.log(carInstance.getModel()); // Q3    (getModel() - метод исполюзуется для получения доступа к значению свойства (без гетера)).
// carInstance.setModel('Q4'); // (setModel() - метод ипользуется для изменения значения свойства (без сетера)).
// console.log(carInstance.getModel()); // Q4

console.log(carInstance.price); // 35000  // Это вызываем геттер
carInstance.price = 50000; // Вызывается сеттер для прайса и меняет значение.
console.log(carInstance.price); // 50000

// ----------------------------

console.log(carInstance); // Car1 {mySuperPublicField: 555, brand: 'Audi', _model: 'Q4', _price: 50000, #test: 'test'}
|============================
*/
// --------------------
/** Наследование классов.
|============================
class Hero {                                                          // Базовый класс героя.
  constructor(name = 'hero', xp = 0) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}


class Warrior extends Hero {                                         // Воин+
  constructor(name, xp, weapon) {
    super(name, xp);

    this.weapon = weapon;
  }
}

const mango = new Warrior('mango', 1000, 'алебарда');

console.log(mango);

// mango.gainXp(1000);

// ----------- Что на что указывает.
// console.log(mango.__proto__ === Warrior.prototype); // true
// console.log('Warrior.prototype', Warrior.prototype); // Что лежит тут  Warrior.prototype Hero {}
// console.log(Warrior.prototype.__proto__ === Hero.prototype); // true

// ---------------------------------------------------------
// Вариант, с обчныой передачей параметров.

class Hero {                                                                 // Базовый класс Hero
  constructor(name = 'hero', xp = 0) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends Hero {                                                 // Воин-1 Новый класс с ссылкой на базовый класс Hero
  constructor(name, xp, weapon) {
    super(name, xp);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Mage extends Hero {                                                   // Воин-2 Новый класс с ссылкой на базовый класс Hero
  constructor(name, xp, spells = []) {
    super(name, xp);

    this.spells = spells;
  }
  cast() {
    console.log();
    console.log(`${this.name} что-то там кастует 🚡`);
  }
}

const mango = new Warrior('mango', 1000, 'алебарда');                       // Воин-1 Создаем воина

console.log(mango);
mango.attack();
mango.gainXp(1000);

const poly = new Mage('poly', 500, ['фаербол']);                            // Воин-2 Создаем воина

console.log(poly);
poly.cast();
poly.gainXp(200);

// console.log('Warrior.prototype', Warrior.prototype); //
// console.log('Hero.prototype', Hero.prototype); //

// ---------------------------------------------------------
// Тот же вариант, но с объектом настроек + ...rest

class Hero {                                                        // Базовый класс Hero
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends Hero {                                        // Воин-1 Новый класс с ссылкой на базовый класс Hero
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Mage extends Hero {                                          // Воин-2 Новый класс с ссылкой на базовый класс Hero
  constructor({ spells, ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }
  cast() {
    console.log();
    console.log(`${this.name} что-то там кастует 🚡`);
  }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });    // Воин-1 Создаем воина

console.log(mango);
mango.attack();
mango.gainXp(1000);

const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });         // Воин-2 Создаем воина

console.log(poly);
poly.cast();
poly.gainXp(200);

// console.log('Warrior.prototype', Warrior.prototype); //
// console.log('Hero.prototype', Hero.prototype); //

// ---------------------------------------------------------
// Еще один вариант для практики.

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

const ajax = new Berserk({
  name: 'ajax',
  xp: 500,
  weapon: 'axe',
  warcry: 'waaaaaaaah',
});

console.log(ajax);

ajax.babyRage();
ajax.attack();
ajax.gainXp();

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} что-то там кастует 🧙‍♂️`);
  }
}
|============================
*/
// --------------------
/** Поздравляем! Вы выучили современный синтаксис JS. (Репета). Что нужно помнить из пяти модулей JS.
|============================
!!! Из пяти модулей нам нужно помнить то, что используется ежедневно, это: обращение к свойству, обьявление функций, параметры -дефолтные значения, деструктуризация - обязательно, методы, цепочки методов, ключевое слово this, синтаксис Геттеров и Сеттеров, классы писать!
|============================
*/
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Олег модуль-5 занятие-1 Ключове слово this. Методы .bind(), .call(), .apply() ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
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
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Артем модуль-5 занятие-1 Ключове слово this. Методы .bind(), .call(), .apply() ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
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
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| ЗАДАЧИ Артем - Олег модуль-5 занятие-1 Ключове слово this. Методы .bind(), .call(), .apply() ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
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
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Артем модуль-5 занятие-2 Прототипы и классы ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
/** Прототипное наследование (По такому принципу раньше и делали объектно ориентированное програмированние, до появления ES6 классы).
|============================
// Экземпляры user1 и user2 берут свойства из (объекта прототипа user), user является прототипом для user1 и user2.

const user = {
  name: 'test user a',
  age: 18,
  sayHello() {
    console.log(this.name);
  },
  showAge() {
    console.log(` My age ${this.age}`);
  },
};

const user1 = Object.create(user);

user1.sayHello();
console.log('user1', user1);

user1.name = 'test user 1';
user1.sayHello();

const user2 = Object.create(user);

user2.showAge();
console.log('user2', user2);
// -------------------------------------------------------
// Цепочка наследований

const user = {
  name: 'test user a',
  sayHello() {
    console.log(this.name);
  },
};

const admin = Object.create(user);

admin.age = 19;                                                     // Добавляем свойство age в объект admin

admin.showAge = function () {                                       // Добавляем метод в экземпляр admin
  console.log(this.age);
};

// console.log(admin);

const practiceOwner = Object.create(admin);

practiceOwner.name = 'Owner';                                       // Добавляем свойство name в объект practiceOwner

// console.log(practiceOwner);

practiceOwner.showAge();
practiceOwner.sayHello();

console.log(practiceOwner);

// -------------------------------------------------------
// Прототипы наследования работают с верху вниз, первое что найдет то и забирает. 
// Идет в низ до конца пока ненайдет. С низу вверх работать не может (будет ошибка).

const user = {
  name: 'test user a',
  age: 33,
  sayHello() {
    console.log(this.name);
  },
};

const admin = Object.create(user);

admin.showAge = function () {
  console.log(this.age);
};

console.log(admin);                                           // {showAge: ƒ}

const practiceOwner = Object.create(admin);
practiceOwner.name = 'Owner';                                // Добавляем свойство name в объект practiceOwner

console.log(practiceOwner);                                  // {name: 'Owner'}

practiceOwner.showAge();                                     // 33
practiceOwner.sayHello();                                    // Owner

console.log(practiceOwner);

// user.showAge();                                          // Ошибка. В обратном порядке не работает! TypeError: user.showAge is not a function

// console.log(user.qwerty);                                // Вернёт undefined, потому что такого свойства нет в цепочке.
// user.qwerty();                                           // Ошибка TypeError: user.qwerty is not a function потому что такого метода нет в цепочке.

// -------------------------------------------------------

|============================
*/
// --------------------
/** Классы 
|============================
// Создаем класс User.
// * В класе User создаем constructor, в конструкторе указываем ожидаемые параметры. Если при передаче аргументов будет меньше чем параметров, то на том параметре у которого не хватает аргумента будет undefined (пример: параметрр age).

class User {                                             // Создаем класс User.
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

const test = new User('User A', 'test@gmail.com');       // Инициализуем экземпляр класса.

console.log(test);                                       // User {name: 'User A', email: 'test@gmail.com', age: undefined} 

// ------------------------------------------------
// Параметр по умолчанию.

// * Для того чтобы небыло undefined указываем в параметр дефолтное значение (пример: параметрр age = 18). 
// * В таком случае если аргумента не будет для параметра он возьмёт дефолтное значение.

class User {                                                 // класс User.
  constructor(name, email, age = 18) {                       // Параметр по умолчанию (age = 18).
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

const test = new User('User A', 'test@gmail.com');           // Инициализуем экземпляр класса.

const test1 = new User('User B', 'gmail@gmail.com', 99);     // Инициализуем экземпляр класса.

console.log(test);                                           // User {name: 'User A', email: 'test@gmail.com', age: 18}
console.log(test1);                                          // User {name: 'User B', email: 'gmail@gmail.com', age: 99}

// ------------------------------------------------
// Паттерн "Объект параметров", Деструктуризация.

// * Если мы заранее не знаем какие аргументы будут передоваться в параметры, то используем  паттерн "объект параметров" и деструктуризацию с свойствами по умолчанию.

class User {                                                        // класс User.
  constructor({ name, email, age = 18, location = 'World' }) {      // Паттерн "Объект параметров" с параметром по умолчанию + деструктуризация.
    this.name = name;
    this.email = email;
    this.age = age;
    this.location = location;
  }
}

const test = new User({                                              // Инициализуем экземпляр класса.
  name: 'User A',
  email: 'test@gmail.com',
  location: 'Lviv',
});

const test1 = new User({                                             // Инициализуем экземпляр класса.
  name: 'User B', 
  email: 'test@gmail.com', 
  age: 99 
});   


console.log(test);                                             // User {name: 'User A', email: 'test@gmail.com', age: 18, location: 'Lviv'}
console.log(test1);                                            // User {name: 'User A', email: 'test@gmail.com', age: 99, location: 'World'}

// ------------------------------------------------
// Методы классов и Методы на объекте экземпляра.

// Методы классов ----------
// * Метод класса прописывается в теле класса и доступен по ссылке всем представителям этого классы. Пример: sayHello().
// Методы на объекте экземпляра ----------
// * Метод экземпляра на объекте qwerty, этот метод не попадёт в прототип, он кастомный.  Пример: test1.qwerty = function ().

class User {                                                          // класс User.
  constructor({ name, email, age = 18, location = 'World' } = {}) {   // Паттерн "Объект параметров" с параметром по умолчанию + деструктуризация.
    this.name = name;
    this.email = email;
    this.age = age;
    this.location = location;              
  }
  sayHello() {                                          // Метод класса
    console.log(this.name);
  }
}

const test = new User({                                // Экземпляр класса.
  name: 'User A',
  email: 'test@gmail.com',
  location: 'Lviv',
});

test.sayHello();

const test1 = new User({                               // Экземпляр класса.
  name: 'User B',
  email: 'test@gmail.com',
  age: 99,
});

test1.qwerty = function () {                           // Метод экземпляра, кастомный. На объекте test1 создаю метод qwerty и на него записываю функцию.
  console.log(this.age);
};

console.log(test);                                     // User {name: 'User A', email: 'test@gmail.com', age: 18, location: 'Lviv'}
console.log(test1);                                    // User {name: 'User A', email: 'test@gmail.com', age: 99, location: 'World'}

// ----------------------------------------------------
// Приватные свойства, Приватные методы, Геттеры и Сеттеры. 

// Инкапсуляция - это концепция, предписывающая скрывать то, как устроен класс.
// ---------- Приватные свойства ----------
// * Приватные свойства оглашаются перед конструктором и перед приватным свойством ставится решетка.
// * Вызов приватного свойства вне класса приведет к ошибке. (ОШИБКА, приватное свойство! SyntaxError: Private field '#location' must be declared in an enclosing)
// * Пример: Свойство "#location" недоступно вне класса "User", так как оно имеет закрытый идентификатор.
// * Для того чтобы иметь доступ к приватному свойству существуют Геттеры и Сеттеры.
// ---------- Гетер и Сетер ----------
// * Геттер и Сеттер используются в большенстве своём для работы с приватными свойствами(ключами).
// * Гетер и Сетер должены иметь одинаковые названия. Само название моет быть любым. Но...
// **** Если свойство неприватное то названия геттера и сеттера должно отличаться от названия ключа (потому как будет переполнение стека-зацыкленность). 
// **** Если же свойство приватное, то можно называть таким-же именем, но без решетки.
// * Для одного приватного свойства должен быть и Геттер и Сеттер.
// Геттер -----
// * Геттер возвращает значение ключа который мы укажем в теле геттера.
// * Геттер в круглых скобочках не принимает ни одного параметра никогда! Если указать в него параметр, то будет ошибка.
// Сеттер -----
// * Сеттер изменение ключа который мы укажем в теле сеттера.
// * Сеттер обязательно должен иметь один параметр. Этот параметр указывает значение на которое мы хотим изменить ключ.
// ---------- Приватные методы ----------
// * Приватные методы необязательно оглашать перед конструктором.
// * Приватный метод как и приватное свойство недоступен за границами класса, он не может быть вызван в глобальной области или на каком-то экземпляре класса.
// * Вызов приватного метода. Вызов приватного метода может быть только в середине методов. Вне класса не может быть использован.

class User {                                              // класс User.
  #location;                                              // Приватное свойство оглашаем перед конструктором. Перед приватным свойством, указываем решетку.

  constructor({ name, email, age = 18, location = 'World', password } = {}) {    // Паттерн "Объект параметров" с параметром по умолчанию + деструктуризация.
    this.name = name;
    this.email = email;
    this.age = age;
    this.#location = location;                            // Приватное свойство, указываем решетку.
    this.password = password;
  }
  sayHello() {                                            // Метод класса
    console.log(this.name);
  }

  #getEmail() {                                           // Приватный метод.
    console.log(this.email);
  }

  get locale() {                                          // Геттер
    return this.#location;
  }
  
  set locale(city) {                                      // Сеттер
    const value = prompt('Enter password');               // Вызываем окно для проверки пароля.

    this.#getEmail();                     // Вызов приватного метода. Вызов приватного метода может быть только в середине методов. Вне класса не может быть использован.

    if (value === this.password) {        //  Делаем проверку на ввод пароля пользователем в сеттере.
      this.#location = city;
      console.log(this.#location);
    } else {
      console.log('Хацкер ? 😱');
    }
  }
}

const test = new User({                  // Экземпляр класса.
  name: 'User A',
  email: 'test@gmail.com',
  location: 'Lviv',
  password: 'qwerty111',
});

const test1 = new User({               // Экземпляр класса.
  name: 'User B',
  email: 'test@gmail.com',
  age: 99,
});

test.#getEmail();                   // ОШИБКА, приватное свойство(метод)! Свойство "#getEmail" недоступно вне класса "User", так как оно имеет закрытый идентификатор.

console.log(test.#location);         // ОШИБКА, приватное свойство! SyntaxError: Private field '#location' must be declared in an enclosing

console.log(test.locale);           // Lviv  // Обрашаемся к приватному свойству после того как добавили сеттер этому приватному свойству.
test.locale = 'Dnipro';             // Обращение к Сеттеру. Меняем значение приватного свойства locale.

// ----------------------------------------------------
// Статические свойства и Статические методы.

// * Статические методы статические свойства не идут на экземпляр класса, они остаются на самом классе и работают с классом.
// * Докуметация говорит что статические свойства и методы не распространяются на экземпляры класса, но в реалии жизни статические свойства и статические методы через конструктор распространяются на экземпляры класса, через конструктор они распространяются на все. Пример: Вызываем через конструктор console.log(test.constructor.counter)
// * Статические методы и свойства прописываются перед конструктором и начинаются с ключевого слова static.
// * В самом статическом методе ссылка на контекст может быть в двух вариантах. Первый через this к классу. Второй напрямую к самому классу, через User.
// * Статический метод вызываем в конструкторе. Обращаемся при вызове через User
// * В примере с классом User Создаем статическое свойство (counter) и метод (addUser) которые будут считать сколько раз создавался экземпялр у класса юзер (сколько пользователей было создано).

class User {                                         // класс User.
  static counter = 0;                                // Статическое свойство. 

  static addUser() {                                 // Статический метод. Который добавляет нового юзера в статическое свойство counter.
    // this.counter += 1;                            // Обрашение (вариант-1) через this к самому классу. this ссылается на класс.
    User.counter += 1;                               // Или обращение (вариант-2) к самому классу юзеру.
    console.log(`Number of users ${this.counter}`);
  }

  constructor({ name, email, age = 18, location = 'World', password } = {}) {      // Паттерн "Объект параметров" с параметром по умолчанию + деструктуризация.
    this.name = name;
    this.email = email;
    this.age = age;
    User.addUser();                                 // Вызаваем статический метод.
  }
  sayHello() {
    console.log(this.name);
  }
}

const test = new User({                            // Экземпляр класса.
  name: 'User A',
  email: 'test@gmail.com',
  location: 'Lviv',
  password: 'qwerty111',
});

const test1 = new User({                           // Экземпляр класса.
  name: 'User B',
  email: 'test@gmail.com',
  age: 99,
});

const test2 = new User({                           // Экземпляр класса.
  name: 'User C',
  email: 'gmail@gmail.com',
  age: 92,
});

console.log(test.constructor.counter);           // 3    // Обращаюсь к статическомусвойству из вне и оно доступно.
|============================
*/
// --------------------
/** Прототипное наследование и классы. На примере игры с героями.
|============================
// 1.1 Создаётся клас User.
// 1.2 В конструкторе класса User прописываем свойства для класса User.

// 2.1 Создаётся клас Avatar. Через операцию extends привязываем его к классу User.
// 2.2 В классе Avatar создаем конструктор  и прописываем в него параметры которые есть у User и добавляем дополнительные параметры которых не будет у User, но будут у Avatar. Добовляем метод attack классу Avatar, который будет в Avatar, но не будет в User. Теперь у Avatar есть все что у User и + дополнительные параметры и методы  присущи Avatar.
// 2.3 В конструкторе класса Avatar, нам нужно чтоб он зацепил и конструктор в классе User, для этого прописываем метод super(). Этот метод super() делает комуникацию между конструктором User и конструктором Avatar.
// 2.4 Инициализуем через операцию (new) экземпляр(test) класса Avatar и в него передаём свойства со значениями.

// 3.1 Создаётся клас Zombi. Через операцию extends привязываем его к классу User.
// 3.2 В классе Zombi создаем конструктор  и прописываем в него параметры которые есть у User и добавляем дополнительные параметры которых не будет у User, но будут у Avatar. Добовляем методы классу Zombi, который будет присущи классу Zombi, но не будет в User. Теперь у Zombi есть все что у User и + дополнительные параметры и методы  присущи Zombi.
// 3.3 В конструкторе класса Zombi, нам нужно чтоб он зацепил и конструктор в классе User, для этого прописываем метод super(). Этот метод super() делает комуникацию между конструктором User и конструктором Zombi.
// 3.4 Инициализуем через операцию (new) экземпляр(test1) класса Zombi и в него передаём свойства со значениями.

// 4.1 Создаётся клас Dog. Через операцию extends привязываем его к классу Zombi.
// 4.2 В классе Dog создаем конструктор  и прописываем в него параметры которые есть у Zombi и добавляем дополнительные параметры которых не будет у Zombi, но будут у Dog. Добовляем методы классу Dog, который будет присущи классу Dog, но не будет в Zombi. Теперь класс Dog есть все что у классов Zombi и User, + дополнительные параметры и методы присущи Dog.
// 4.3 В конструкторе класса Dog, нам нужно чтоб он зацепил и конструктор в классе Zombi, для этого прописываем метод super(). Этот метод super() делает комуникацию между конструктором Dog и конструктором Zombi.
// 4.4 Инициализуем через операцию (new) экземпляр(test2) класса Dog и в него передаём свойства со значениями.

// И так делее...!

// ----------------------

// ---------- Создаём класс User.
class User {
  static counter = 0;                                 // Статическое свойство.

  static addUser() {                                 // Статический метод. Который добавляет нового юзера в статическое свойство counter.
    // this.counter += 1;                            // Обрашение (вариант-1) через this к самому классу. this ссылается на класс.
    User.counter += 1;                               // Или обращение (вариант-2) к самому классу юзеру.
    console.log(`Number of users ${this.counter}`);
  }

  #location;                                         // Приватное свойство оглашаем перед конструктором. Перед приватным свойством, указываем решетку.

  constructor({ name, email, age = 18, location = 'World', password } = {}) {       // Паттерн "Объект параметров" с параметром по умолчанию + деструктуризация.
    this.name = name;
    this.email = email;
    this.age = age;
    this.#location = location;                        // Приватное свойство, указываем решетку.
    this.password = password;
    User.addUser();                                   // Вызаваем статический метод.
  }
  sayHello() {
    console.log(this.name);
  }

  #getEmail() {                                      // Приватный метод.
    console.log(this.email);
  }

  get locale() {                                     // Геттер
    return this.#location;
  }

  set locale(city) {                                  // Сеттер
    const value = prompt('Enter password');           // Вызываем окно для проверки пароля.

    this.#getEmail();                // Вызов приватного метода. Вызов приватного метода может быть только в середине методов. Вне класса не может быть использован.

    if (value === this.password) {                   // Делаем проверку на ввод пароля пользователем.
      this.#location = city;
      console.log(this.#location);
    } else {
      console.log('Хацкер ? 😱');
    }
  }
}

//  ---------- Создаём класс Avatar на основе класса User.
class Avatar extends User {
// Вариант-1

  // constructor({ name, email, location, password, age, damage }) {
  //   super({ name, email, location, password, age });                   // Вызываем метод super для инициализации экземпляра.
  //   this.damage = damage;
  // }

  // Вариант-2 (Проводим деструктуризацию в объекте параметров с помощью операции ...rest)

  constructor({ damage, ...args }) {
    super({ args }); // Вызываем метод super для инициализации экземпляра.
    this.damage = damage;
  }
  
  attack() {                                                           // Создаём метод для класса Avatar
    console.log(`Attack with damage ${this.damage}`);
  }
}
  
//  ---------- Создаём класс Zombi на основе класса User.
class Zombi extends User {
  constructor({ name, email, location, password, age, poison }) {
    super({ name, email, location, password, age });
    this.poison = poison;
  }
  toBite() {
    console.log(`Bite with ${this.poison}`);
  }
}

//  ---------- Создаём класс Dog на основе класса Zombi.
class Dog extends Zombi {
  constructor({ name, email, location, password, age, poison }) {
    super({ name, email, location, password, age });
  }
}

const test = new Avatar({                                               // Инициализуем экземпляр класса Avatar
  name: 'User A',
  email: 'test@gmail.com',
  location: 'Lviv',
  password: 'qwerty111',
  damage: 700,
});


const test1 = new Zombi({                                               // Инициализуем экземпляр класса Zombi
  name: 'User B',
  email: 'test@gmail.com',
  age: 99,
  poison: 500,
});


const test2 = new Dog({                                                 // Инициализуем экземпляр класса Dog
  name: 'User C',
  email: 'gmail@gmail.com',
  age: 92,
});

console.log(test);
console.log(test1);
console.log(test2);

console.log(test.constructor.counter);                      // 3    // Обращаюсь к статическому свойству из вне и оно доступно.
|============================
*/
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| ЗАДАЧИ: Артем + Алексей Симак модуль-5 занятие-2 Прототипы и классы ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
/** ЗАДАЧИ Симак модуль-5 занятие-2 Прототипы и классы
|============================
Example 1 - Блоггер
* Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:
- email - почта, строка
- age - возраст, число
- numberOfPosts - кол-во постов, число
- topics - массив тем на которых специализируется блоггер
* Класс ожидает один параметр - объект настроек с одноимёнными свойствами.
* Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.
* Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.

const mango = new User({
  name: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new User({
  name: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// ===============================================
Example 2 - Хранилище
Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
Добавь методы класса:
* getItems() - возвращает массив товаров.
* addItem(item) - получает новый товар и добавляет его к текущим.
* removeItem(item) - получает товар и, если он есть, удаляет его из текущих.

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// ===============================================
Example 3 - User
Напиши класс User который создаёт объект со свойствами login и email. 
Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie
// ===============================================
// Example 4 - Заметки
// Напиши класс Notes который управляет коллекцией заметок в свойстве items. 
// Заметка это объект со свойствами text и priority. 
// Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
console.log(myNotes.items);
// ===============================================
Example 5 - Toggle
Напишите класс Toggle который принимает объект настроек {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл (true/false). 
По умолчанию значение свойства on должно быть false.

const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');
|============================
*/
// --------------------
/** ОТВЕТЫ на задачи Симак Модуль-5 занятие-2 Прототипы и классы
|============================
Example 1 - Блоггер
* Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:
- email - почта, строка
- age - возраст, число
- numberOfPosts - кол-во постов, число
- topics - массив тем на которых специализируется блоггер
* Класс ожидает один параметр - объект настроек с одноимёнными свойствами.
* Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.
* Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.

// ---------- Решение Артем ----------
class Blogger {
  constructor({ email, age, numberOfPosts, topics } = {}) {
    this.email = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger({
  name: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger({
  name: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// ---------- Решение Алексей ----------

class Blogger {
  constructor({ name, age, numberOfPosts, topics }) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger({
  name: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});

console.log(mango); // Blogger {name: 'mango@mail.com', age: 24, numberOfPosts: 20, topics: Array(2)}
console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts

mango.updatePostCount(5);
console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger({
  name: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});
console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

// ===============================================

Example 2 - Хранилище
Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
Добавь методы класса:
* getItems() - возвращает массив товаров.
* addItem(item) - получает новый товар и добавляет его к текущим.
* removeItem(item) - получает товар и, если он есть, удаляет его из текущих.

// ---------- Решение Артем ----------

class Storage {
  constructor(items = []) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    if (!this.items.includes(item)) {
      this.items.push(item);
      return;
    }
    //   return 'Такой товар уже есть';
    console.log('Такой товар уже есть');
  }

  removeItem(item) {
    // ----- Артем вариант-1

    const idx = this.items.indexOf(item);
    if (!!~idx) {
      this.items.splice(idx, 1);
    }

    // Запись (!!~idx) пояснение.
    // (~) конвертирует, удобно для indexOf, то что было(0) станет(-1), а то что было(-1) тоесть небыло в нашем масиве конвнртирует в(0).
    // (!!) сразу преведение к boolean.

    // -(x + 1)
    // 0 => false
    // -1 => true
    // -(0 + 1) => -1 => true
    // -(-1 + 1) => -0 => false
    // console.log(!!0); Boolean(0)

    // ----- Артем вариант-2

    // const idx = this.items.indexOf(item);
    // if (this.items.includes(item)) {
    //   this.items.splice(idx, 1);
    // }

    // ----- Мой вариант

    // if (this.items.includes(item)) {
    //   const idx = this.items.indexOf(item);
    //   this.items.splice(idx, 1);
    // } else {
    //   this.items.push(item);
    // }
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]
// console.log(items);

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
storage.addItem('🍌');
console.table(storage.items); // Такой товар уже есть

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

storage.removeItem('🍉'); // Для моего варианта
console.log(storage.items); // Для моего варианта ['🍎', '🍇', '🍑', '🍌', '🍋', '🍉']

// ---------- Решение Алексей ----------

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);

    // Вариант-2 (В одну строку, код не читабилен!)
    // this.items.splice(this.items.indexOf(item), 1);
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// ===============================================

Example 3 - User
Напиши класс User который создаёт объект со свойствами login и email. Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// ---------- Решение Артем ----------

class User {
  #login;
  #email;
  constructor({ login, email } = {}) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }
  set login(newLogin) {
    if (this.#login !== newLogin) {
      this.#login = newLogin;
    }
  }

  get email() {
    return this.#email;
  }
  set email(newEmail) {
    if (this.#email !== newLogin) {
      this.#email = newEmail;
    }
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

// console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

// console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie

// ---------- Решение Алексей ----------

class User {
  #login;
  #email;

  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
  
  // ----- Сеттер с проверкой на пробелы.
  // set login(newLogin) {
  //   if (newLogin.trim() !== '') this.#login = newLogin;
  //   else console.log('Your login not correct');
  // }

  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

// console.log(mango);

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

console.log(mango.email); // mango@dog.woof
mango.email = 'mango@gmail.com'; // Перезаписываю почту.
console.log(mango.email); // mango@gmail.com

// mango.login = '       '; // ----- Сеттер с проверкой на пробелы.

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie

// ===============================================

// Example 4 - Заметки
// Напиши класс Notes который управляет коллекцией заметок в свойстве items.
// Заметка это объект со свойствами text и priority.
// Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

// ---------- Решение Артем ----------

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };
  constructor(note) {
    this.items = note;
  }

  addNote(note) {
    const inArr = this.items.some(({ text }) => text === note.text);
    if (!inArr) {
      this.items.push(note);
    }
  }

  removeNote(text) {
    const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
    // означает idx !== -1   idx > -1
    if (!!~idx) {
      this.items.splice(idx, 1);
    }
  }

  updatePriority(text, newPriority) {
    const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
    // означает idx !== -1   idx > -1
    if (!!~idx) {
      this.items[idx].priority = newPriority;
    }
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
console.log(myNotes.items);

// ---------- Решение Алексей ----------

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(items = []) {
    this.items = items;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    this.items = this.items.filter(note => note.text !== text);
  }

  updatePriority(text, newPriority) {
    const note = this.items.find(note => note.text === text);
    console.log(note);
    if (note) note.priority = newPriority;           // Чтоб небыло ошибки, делаем проверку через if()
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
console.log(myNotes.items);
myNotes.updatePriority('qweqwe', Notes.Priority.HIGH);         // Проверка если приходит какаято белебирда вместо нужной строки.

// ===============================================

// Example 5 - Toggle (Не решалась на видео)
// Напишите класс Toggle который принимает объект настроек {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл (true/false).
// По умолчанию значение свойства on должно быть false.

class Toggle {
  constructor({ isOpen: boolean }) {
    this.isOpen = isOpen;
  }
}

const firstToggle = new Toggle({ isOpen: true });

console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();

console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');
// ===============================================


|============================
*/
// --------------------
/** Example 6 - Toggle - Дополнительные примеры от Алексея
|============================
// Задача и пример от Алексея на примере квадрата и прямоугольника.

class Rectangle {
  constructor({ heigth, width }) {
    this.name = "Rectangle";
    this.heigth = heigth;
    this.width = width;
  }

  greeting() {
    console.log(`Hey, I am a ${this.name}`);
  }

  calculateArea() {
    return this.width * this.heigth;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super({ width: length, heigth: length });
    this.name = "Square";
  }
}

const rectangle = new Rectangle({ width: 10, heigth: 4 });

rectangle.greeting();

console.log(rectangle.calculateArea());

const square = new Square(5);

square.greeting();

console.log(square.calculateArea());

console.log(square);
// -----------------------------------------------
// Статические свойства.

class User {
  static Roles = {
    admin: 'admin',
  };

  constructor(name) {
    this.name = name;
  }
}

const user = new User('Olga');

console.log(user.name);
console.log(User.Roles);
// -----------------------------------------------
// Для чего нужен Object.create()
const objA = {
  a: 'a',
};

const objB = Object.create(objA);
objB.b = 'b';

console.log(objB);
console.log(objB.a);
// -----------------------------------------------
|============================
*/
// --------------------
