// :::::::::::::::||| Репета модуль-4 занятие-1 Callback-функции и замыкания. |||:::::::::::::::

/** Callback function, инлайн колбэки. (файл 01-callback Репета )
|============================
Callback-функции. файл https://github.com/luxplanjay/js-22/blob/04-1-колбек-функции/js/01-callbacks.js

 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 
const fnA = function (message, callback) {
  console.log(message);                                     // qweqwe

  console.log(callback);                                   // Этот лог вернет колбек функцию.
  callback(100);                                           // Вызов колбек функции.
};

const fnB = function (number) {
  console.log('Это лог при вызове fnB', number);           // Это лог при вызове fnB 100
};

fnA('qweqwe', fnB);

// ------------------------------------------------------

// * функция doMath(a, b, callback)

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);                         // 5
};

const add = function (x, y) {
  return x + y;
};

doMath(2, 3, add);                             // вызов doMath с аргументами для колбэк функции add

// ------------------------------------------------------

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);                         // // вызов add вернет 5. // вызов sub вернет 2.
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, add);                           // вызов doMath с аргументами для колбэк функции add
doMath(10, 8, sub);                          // вызов doMath с аргументами для колбэк функции sub

// ------------------------------------------------------

// Инлайн функции. (Встроеная функия - одноразовая - анонимная).

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result); // // вызов add вернет 5. // вызов sub вернет 2.
};
// Инлайн функция.
doMath(2, 3, function (x, y) {
  return x + y;
});
// Инлайн функция.
doMath(10, 8, function (x, y) {
  return x - y;
});

// ------------------------------------------------------
// Пример работы Callback-функциями.
// ------------------------------------------------------

// Пример работы Callback-функции -1:

// * Отложенный вызов: регистрация событий. Пример на кнопке.

// html код кнопки.---------------
// <button class="js-button">
//   Это кнопка
//   <span role="image" aria-label="Иконка волшебника">🧙‍♂️</span>
// </button>;

const buttonRef = document.querySelector('.js-button'); // Получаем ссылку на эту кнопку.

// Вариант-1 -------------------------------
const handleBtnClick = function () {
  console.log('Клик по кнопке ' + Date.now());
};
buttonRef.addEventListener('click', handleBtnClick); // Добавляем слушателя событий.

// Если этот 'click' совпадает с тем событием event что сейчас произошло, она берет и вызывает callback() функцию (handleBtnClick);
// function addEventListener(eventType, callback) {
//   if (eventType == event) {
//     callback();
//   }
// }

// Вариант-2 (с анонимной функцией) -------
buttonRef.addEventListener('click', function () {
  console.log('Клик по кнопке ' + Date.now());
});

// ------------------------------------------------------

// Пример работы Callback-функции-2:

// * Отложенный вызов: геолокация.



const onGetPositionSuccess = function (position) {
  console.log('Это вызов onGetPositionSuccess');
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log('Это вызов onGetPositionError');
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);

// ------------------------------------------------------

// Пример работы Callback-функции -3: (видео модуль-4-занятие-1 35:44)

//  * Отложенный вызов: интервалы 

const callback = function () {
  console.log('Через 2 секунды внутри колбека в таймауте');
};

console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
console.log('В коде после таймаута');

// ------------------------------------------------------

// Пример работы Callback-функции -4: (видео модуль-4-занят.-1 40:40)

//  * Отложенный вызов: http-запрос  
//  * - API URL: https://pokeapi.co/api/v2/pokemon

const onRequestSuccess = function (response) {
  console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
  console.log(response);
};

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

// ------------------------------------------------------

// Пример: (видео модуль-4-занят.-1 46:42)

//  * Фильтр

// Функция фильтр, для фильтрации масивов. По условию фильтрует масив.

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};
// Логика проверки.
// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

// ------------------------

// Пример: (видео 57:32)

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    // console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);
|============================
*/
// ==========================================================================================
/** Замыкания. (файл 02-closures Репета) 
|============================
// Замыкания. (видео 1:04:20) файл 02-closures (https://github.com/luxplanjay/js-22/blob/04-1-колбек-функции/js/02-closures.js)

//  * Функция результатом своей работы может возвращать другую функцию.
//  *
//  * Возвращаемая функция во время вызова будет иметь доступ
//  * ко всем локальным переменным (области видимости)
//  * родительской функции (той из которой её вернули),
//  * это называется «замыкание».

const fnA = function (parameter) {
  const innerVariable = 'значение внутренней переменной функции fnA';

  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log('Это вызов innerFunction');
  };

  return innerFunction;
};

const fnB = fnA(555);

fnB();

console.log(fnB);

// -------------------------------------------

// Пример-1 работы ЗАМЫКАНИЯ! (видео 1:12:40)

//  * Поварёнок

const makeDish = function (sheffName, dish) {
  console.log(`${sheffName} готовит ${dish}`);
};

makeDish('Mango', 'пирожок');
makeDish('Mango', 'омлет');
makeDish('Mango', 'чай');

makeDish('Poly', 'котлеты');
makeDish('Poly', 'супик');
makeDish('Poly', 'кофе');

const makeSheff = function (name) {
  const innverVar = 555;
  const message = 'hello';

  const makeDish = function (dish) {
    console.log(message);
    console.log(innverVar);
    console.log(`${name} готовит ${dish}`);
  };

  return makeDish;
};

const mango = makeSheff('Mango');

// console.dir(mango);

mango('котлеты');
mango('пирожок');

const poly = makeSheff('Poly');

// console.dir(poly);

poly('чай');
poly('омлет');

// console.dir(mango);

// -------------------------------------------

// Пример-2 работы ЗАМЫКАНИЯ! (видео 1:23:10)

//  * Округлятор 🤷‍♂️

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint); // 3
const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// ----- Пример без замыкания. -----

const rounder = function (number, places) {
  return Number(number.toFixed(places));
};

console.log(rounder(3.4567, 2));
console.log(rounder(3.4567, 3));
console.log(rounder(5.1234, 2));
console.log(rounder(3.4567, 3));

// ----- Пример этот-же, но с замыканием. -----

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

console.log(rounder2(3.4567));
console.log(rounder2(5.4512312312367));
console.log(rounder3(3.4567));
console.log(rounder2(5.1234));
console.log(rounder3(3.4567));
console.log(rounder3(10.67667));

// --------------------------------

// Пример-3 работы ЗАМЫКАНИЯ! (видео 1:30:55)

//  * Приватные данные и функции - скрытие реализации, интерфейс.

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  return {
    raise(amount) {
      if (amount > 1000) {
        return 'Ты офигел?';
      }

      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Текущая зарпалата ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current());

// --------------------------------

const myLibFactory = function () {
    let value = 0;

    const add = function (num) {
        value += num;
    };

    return {
        add: add,
        getValue() {
            return value;
        },
    };
};

const myLib = myLibFactory();

console.dir(myLib.getValue);

console.log(myLib);
console.log(myLib.getValue());
myLib.add(10);
console.log(myLib.getValue());

|============================
*/
// ==========================================================================================
/** Стрелочные функции. (файл 03-arrow-fns Репета)
|============================
Стрелочные функции. файл 03-arrow-fns Репета (видео м-4-з-1 / 1:47:05) https://github.com/luxplanjay/js-22/blob/04-1-колбек-функции/js/03-arrow-fns.js

 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта

// ----------------------------------------------------------------------------
* Если параметров 2 и больше, то скобки параметров должны быть.

const add = (a, b, c) => {
};

* Если параметр всего 1 то, то скобки параметров можно пропустить.

const add = a => {
};

* Если параметров вообще нет, то тогда обязательны пустые скобки параметров.

const add = () => {
};

// ---------------------

* Если у стрелочной функции в теле выполняется больше чем одна инструкция. 
* То тогда необходимо после стрелки ставить обычное тело функции { } и какой-то retur. Это называется "Явный возврат".

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

* Если же у стрелочной функции в теле выполняется всего одна инструкция возврата или одно значение какого-то выражения. 
* То тогда можно после стрелки поставить результат того выражения которое мі хотим вернуть, без тела функции { }. Это называется "Не явный возврат".

Это -------
const addArrow = (a, b, c) => {
    return a + b + c;
};

Заменяем на это -------
const add = (a, b, c) => a + b + c;

// ---------------------

// Что касается аргументов (arguments).

* Обычная функция.

const add = function (a, b, c) {
  console.log(arguments);
  return a + b + c;
};

* У стрелочнной функции нет локальной переменной arguments. Поэтому аргументы собираем через операцию ... rest.

const add = (...args) => {
  console.log(args);
  return a + b + c;
};

// ---------------------

* Обычная функция. Возврат обьекта.

const fnA = function () {
  return {
    a: 5,
  };
};
console.log(fnA());

*  Переписываем на стрелочную функцию. Возврат обьекта с явным возвратом.
const arrowFnA = () => {
  return {
    arrowA: 5,
  };
};
console.log(arrowFnA());

*  Переписываем на стрелочную функцию. Возврат обьекта с не явным возвратом.
const arrowFnA = () => ({ arrowA: 5 });

console.log(arrowFnA());

// ----------------------------------------------------------------------------

// Пример без стрелочной функции.

const add = function (a, b, c) {
  console.log(a, b, c);
  return a + b + c;
};
console.log(add(5, 10, 15));

// Переписываем это-же, но с стрелочной функцией.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
console.log(add(5, 10, 15));

// ----------------------------------------------------------------------------
// Пример замены обычной функции на стрелочную 1:59:18

// Обычная. ----------------
const onGetPositionSuccess = function (position) {
  console.log('Это вызов onGetPositionSuccess');
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log('Это вызов onGetPositionError');
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
);

// Стрелочная. ----------------
const onGetPositionSuccess = position => {
  console.log('Это вызов onGetPositionSuccess');
  console.log(position);
};

const onGetPositionError = error => {
  console.log('Это вызов onGetPositionError');
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);
// ----------------------------------------------------------------------------

// Пример-2 замены обычной функции на стрелочную

// Обычная. Вариант-1  -----------------------------------

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

// Стрелочная. Вариант-2 -----------------------------------

const filter = (array, test) => {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const callback1 = value => value >= 3;

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = value => value <= 4;

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

// Стрелочная. Вариант-3 стрелочная инлайн функция-----------------------------------

const filter = (array, test) => {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const r3 = filter(fruits, fruit => fruit.quantity >= 120);
console.log(r3);
|============================
*/
// ==========================================================================================
