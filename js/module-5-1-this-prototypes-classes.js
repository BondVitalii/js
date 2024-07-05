// !--------------||| Репета модуль-5 занятие-1 Ключове слово this. |||--------------!

/** this
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
