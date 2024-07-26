// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Конспект модуль-4 занятие-1 callback-функции, Метод forEach, Стрелочные функции, Різновиди коду. ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
/** Колбек-функції (Конспект)
|============================
Функції не відрізняються від чисел, рядків або масивів - це просто спеціальний тип даних (об'єкт вищого порядку), значення, яке можна зберігати у змінній або передавати у якості аргументу в іншу функцію.

function greet(name) {
  return `Ласкаво просимо ${name}.`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet('Манго'));                                           // Ласкаво просимо Манго.

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet);                                                    // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// --------------------------------------------------------------------
У першому лозі ми викликаємо функцію greet за допомогою круглих дужок, і в консоль виводиться результат її виконання. У другому лозі передається посилання на функцію, а не результат виклику (відсутні круглі дужки), тому в консоль виводиться її тіло. Це означає, що функцію можна присвоїти у змінну або передати як аргумент іншої функції.

! Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

! Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.


// Колбек-функція
function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// Функція вищого порядку
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest('Манго', greet);

Ми передали посилання на функцію greet як аргумент, тому вона буде присвоєна в параметр callback і викликана всередині функції registerGuest за допомогою круглих дужок. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

// --------------------------------------------------------------------
Інлайн колбеки
// --------------------------------------------------------------------
Якщо колбек-функція - маленька, і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Така функція буде доступна тільки у якості значення параметра і більше ніде в коді.

function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

// Передаємо інлайн функцію greet у якості колбека
registerGuest('Манго', function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн функцію notify у якості колбека
registerGuest('Полі', function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});

// --------------------------------------------------------------------
 Декілька колбеків
// --------------------------------------------------------------------
Функція може приймати будь-яку кількість колбеків. Наприклад, уявімо, що ми пишемо логіку прийняття дзвінків для телефону. Програма повинна увімкнути автовідповідач, якщо абонент - недоступний, або з'єднати дзвінок в іншому випадку. Доступність абонента будемо імітувати генератором випадкового числа, щоб між різними викликами функції можна було отримати різні результати.

function processCall(recipient) {
  const isRecipientAvailable = Math.random() > 0.5;                           // Імітуємо доступність абонента випадковим числом

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);   // Логіка активації автовідповідача
  } else {
    console.log(`З'єднуємо з ${recipient}, очікуйте...`);                     // Логіка прийняття дзвінка
  }
}

processCall('Манго');

Проблема такого підходу полягає у тому, що функція processCall робить занадто багато і прив'язує перевірку доступності абонента до двох заздалегідь визначених дій. Що буде, якщо в майбутньому, замість автовідповідача, потрібно буде залишати голограму?

Ми могли б написати функцію таким чином, щоб вона повертала якесь значення, і потім за результатом її виконання, робити перевірки і виконувати потрібний код. Але перевірки не стосуються зовнішнього коду і будуть його засмічувати.

Виконаємо рефакторинг функції таким чином, щоб вона приймала два колбеки onAvailable і onNotAvailable, і викликала їх за умовою.

function processCall(recipient, onAvailable, onNotAvailable) {
  const isRecipientAvailable = Math.random() > 0.5;                          // Імітуємо доступність абонента випадковим числом

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }
  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);                           // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);         // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);          // Логіка запису голограми
}

processCall('Манго', takeCall, activateAnsweringMachine);
processCall('Полі', takeCall, leaveHoloMessage);

Колбеки застосовуються для обробки дій користувача на сторінці, на момент обробки запитів на сервер, виконання заздалегідь невідомих функцій тощо. У цьому і полягає їх суть - це функції, призначені для відкладеного виконання.

// --------------------------------------------------------------------
Абстрагування повторення
// --------------------------------------------------------------------
Абстракція - приховування деталей реалізації. Дозволяє думати про задачі на вищому (абстрактному) рівні. Функції - це хороший спосіб побудови абстракцій.
Наприклад, скрипт виконує якусь дію певну кількість разів. З цією метою можна написати цикл for.

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

Чи можемо ми абстрагувати «робити щось N разів» у якості функції? - так, напишемо функцію, яка викликає console.log() N разів.

function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(5);

Але що робити, якщо ми хочемо виконати щось, крім логування чисел? Оскільки «робити щось» можна уявити функцією, а функції - це просто значення, ми можемо передати дію як аргумент.

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log('Logging value: ', value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Передаємо printValue як callback-функцію
repeat(3, printValue);
// 0
// 1
// 2

// Передаємо prettyPrint як callback-функцію
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2
|============================
*/
// --------------------------
/** Метод forEach
|============================
Метод forEach
Метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією даних.

массив.forEach(function callback(element, index, array) {
  // Тіло колбек-функції
});

Поелементо перебирає масив.
Викликає колбек-функцію для кожного елемента масиву.
Нічого не повертає.
Аргументи колбек-функції - це значення поточного елемента element, його індекс index і власне вихідний масив array. Можна оголошувати тільки необхідні параметри, найчастіше - це елемент, головне не забувати про їх порядок.

const numbers = [5, 10, 15, 20];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

// Метод перебирання forEach
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Індекс 0, значення 5  
// Індекс 1, значення 10  
// Індекс 2, значення 15  
// Індекс 3, значення 20 

Єдиним випадком, коли варто використовувати цикли for або for...of для перебирання масиву, - це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.
|============================
*/
// --------------------------
/** Стрілочні функції
|============================
// -----------------------------------------
Стрілочні функції
// -----------------------------------------
Стрілочні функції мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька або якщо вона використовується як колбек.

Усі стрілки створюються як функціональний вираз, і якщо функція - не анонімна, її необхідно присвоювати змінній.

// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

Ключове слово function не використовується, замість цього відразу зазначається оголошення параметрів, після нього - символ => і тіло функції.

Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками дорівнює = і стрілкою =>.

const add = (a, b, c) => {
  return a + b + c;
};

Якщо параметр один, його можна оголошувати без круглих дужок.

const add = a => {
  return a + 5;
};

Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

const greet = () => {
  console.log("Привіт!");
};

// -----------------------------------------
Явне повернення (explicit return), Неявне повернення(implicit return) 
// -----------------------------------------
У стрілочної функції після символу => знаходиться її тіло. Існує два варіанти: з фігурними дужками і без них.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

Якщо є фігурні дужки, і функція повинна повертати якесь значення, необхідно явно поставити return. Це називається явне повернення (explicit return). Такий синтаксис використовується у разі, якщо в тілі функції потрібно виконати ще якісь інструкції, крім повернення значення.

const add = (a, b, c) => a + b + c;

Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. Це називається неявне повернення (implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.

Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається, але доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, крім повернення значення.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// Після
const arrowAdd = (a, b, c) => a + b + c;

// -----------------------------------------
Псевдомасив arguments
// -----------------------------------------
У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

// -----------------------------------------
Стрілочні функції як колбеки
// -----------------------------------------
Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих методів масиву завдяки коротшому синтаксису оголошення, особливо, якщо не потрібне тіло функції.

const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Анонімна стрілочна функція
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
});

Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання. Це варто робити, якщо одна функція використовується у декількох місцях програми або якщо вона громіздка.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage);
|============================
*/
// --------------------------
/** Різновиди коду
|============================
Різновиди коду
// -----------------------------------------
Імперативне програмування
// -----------------------------------------
Описує процес обчислення у вигляді заданої послідовності інструкцій, що змінюють стан програми. Опис того, як щось виконується.

Імперативний стиль програмування - це такий стиль, що надає машині набір детальних інструкцій для виконання задачі. Наприклад, цикл for, який надає точні вказівки для ітерації по індексам масиву.

Можна провести аналогію з рецептом приготування страви. Рецепт - це набір покрокових інструкцій для отримання бажаного результату.

// -----------------------------------------
Декларативне програмування
// -----------------------------------------
Описує те, що ми хочемо отримати у підсумку, а не спосіб це зробити. Порядок виконання і спосіб досягнення - неважливі.

Коли ми пишемо HTML-код, то декларативно, за допомогою тегів та атрибутів, описуємо те, що хочемо отримати у підсумку. Браузер читає цей код і сам виконує всі необхідні операції для створення HTML-елементів і розміщення їх на сторінці.

Можна провести аналогію з меню ресторану. Це декларативний набір страв, які можна замовити, подробиці приготування і подачі яких приховані.

food menu
Декларативний опис задачі наочніше і легше формулюється. Ми кажемо, що хочемо зробити, викликаючи метод або функцію. Її реалізація, найімовірніше, використовує імперативний код, але він прихований всередині і не ускладнює розуміння основного коду.

// -----------------------------------------
Імперативний vs декларативний
// -----------------------------------------
Розглянемо різницю підходів на прикладі базової операції фільтрації колекції. Напишемо код перебирання і фільтрації масиву чисел за певним критерієм.

// Імперативний підхід
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers); // [4, 5]

Метод filter() приховує в собі логіку перебирання колекції і викликає callback-функцію, яку ми йому передаємо для кожного елемента, повертаючи масив елементів, що відповідають критерію.

// Декларативний підхід
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5]
|============================
*/
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Репета модуль-4 занятие-1 callback-функции, замыкания, стрелочные функции. ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
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
// --------------------------
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
// --------------------------
/** Стрелочные функции. В видео с Callback-функции. (видео м-4-з-1 / 1:47:05) (файл 03-arrow-fns Репета) https://github.com/luxplanjay/js-18/tree/07-1-arrow-fns/js
|============================
Стрелочные функции. файл 03-arrow-fns Репета (видео м-4-з-1 / 1:47:05) https://github.com/luxplanjay/js-18/tree/07-1-arrow-fns/js

 * Стрелочные функции
 * - Объявление
 * - Явный (explicit return) и неявный  (implicit return) возврат 
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
// --------------------------
/** Стрелочные функции. Отдельное видео. (видео Cтрелочные функции Репета). файл https://github.com/luxplanjay/js-18/blob/07-1-arrow-fns/js/02-context.js)
|============================
// ----------------------------------------------------------
Синтаксис стрелочных функций.
// ----------------------------------------------------------
* Если параметров много. Базовый вариант. 

const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

* Если параметр один, то без скобок параметров.

const logMessage = message => {
  console.log(message);
};
console.log(logMessage('Привет'));

* Если параметров нетб то ставим пустые скобки параметров.

const greet = () => {
  console.log('Привет');
};
greet();

// ----------------------------------------------------------
Явный (explicit) и Неявный (implicit) возврат (return).
// ----------------------------------------------------------
* Явный возврат. Это значит есть тело функции и в этом теле функции указан return и что возвращать.

const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

* Неявный возврат. Это если у стрелочной функции в теле выполняется всего одна инструкция возврата или одно значение какого - то выражения. 
* То тогда можно после стрелки поставить результат того выражения которое мы хотим вернуть, без тела функции { }. Это называется "Не явный возврат".

const add = (a, b) => a + b;

console.log(add(2, 3));

// ----------------------------------------------------------
Псевдо масив arguments.
// ----------------------------------------------------------
* У стрелок нету этой внутренней переменной arguments.

const add = () => {
  console.log(arguments);
};
add(2, 3, 4, 5, 6, 7); // Будет ошибка (ReferenceError: arguments is not defined)

* В этом случае используем операцию ...rest.
const add2 = (...args) => {
  console.log(args);
};
add2(2, 3, 4, 5, 6, 7); // Будет ошибка (ReferenceError: arguments is not defined)

// ----------------------------------------------------------
 * Контекст стрелки
 * Контекст внутри стрелки определяется местом ее объявления, а не вызова, и ссылается на контекст родительской функции.
// ----------------------------------------------------------

// ❌ Стрелочные функции не в блоке кода, а в глобальной области видимости всегда будут  undefined.

* Стелочная функция и this. (видео 10:10 / файл 02-context.js)

const showThis = () => {
  console.log('this in showThis: ', this);
};

showThis(); // this in showThis: window

const user = { name: 'Mango' };
user.showContext = showThis;

user.showContext(); // this in showThis: window

// ----------------------------------------------------------
Разница вызовов обычной функции и стрелочной функции внутри метода объекта.  (видео 12:34 / файл 02-context.js)
// ----------------------------------------------------------
const user = {
  fullName: 'Mango',
  showName() {
    console.log('this: ', this);
    console.log('this.fullName: ', this.fullName);

    // ❌ Обычная функция inner выдаст undefined потому что она объявлена(вызвана) внутри метода(функции showName) без какого либа объекта к которому она привязана.
    
    const inner = function () {
      console.log('this in inner: ', this);
    };                        

    // ✅ Стрелочная функция inner, ей не важно как ты её вызвал, она объявлена(вызвана) внутри метода(функции showName), который вызывается в контексте обьекта user и значит этот inner(стрелочная функция) тоже получит контекст этого метода(функции showName).
    
    const inner = () => {
      console.log('this in inner: ', this);
    };

    // ❌ Вызов обычной функции inner без объявления объекта. Она выдаст undefined.
    // ✅ Вызов стрелочной функции inner без объявления объекта(нормально). 

    inner();    // Вызов функции inner без привязки к кокому-то либо объекту.
  },
};

user.showName();

// ----------------------------------------------------------
// ❌ Ограничения. ❌
// ----------------------------------------------------------
* ❌ 💩 Стрелки как методы объекта.
// ----------------------------------------------------------
// Никогда не используйте стрелки как метод объекта.  (видео 15:15 / файл 02-context.js)

// ✅ Обычный метод объекта.
const user = {
  fullName: 'Mango',
  showName: function () {
    console.log('this: ', this);                         // this:  {fullName: 'Mango', showName: ƒ}
    console.log('this.fullName: ', this.fullName);       // this.fullName:  Mango
  },
};
user.showName(); // ✅

// ❌ 💩 Ниже код, никогда так не делайте! Не используйте стрелки как метод объекта. 
* Стрелки никогда не бывают методами объекта.
* Почему внутри этой стрелки будет undefined - Потому что это функция обьявлена в объекте, а объект (не блок кода) он находится в глобальной области видимости, и поэтому стрелка в глобальной области видимости находится тоже и навсегда запомнила undefined.

const user = {
  fullName: 'Mango',
  showName: () => {
    console.log('this: ', this);                         // ❌ this:  undefined
    console.log('this.fullName: ', this.fullName);       // ❌ TypeError: Cannot read properties of undefined (reading 'fullName')
  },
};
user.showName(); // 💩

// ----------------------------------------------------------
*  ❌ 💩 Стрелки не могут быть функциями конструкторами.
// ----------------------------------------------------------

const User = name => {
  this.name = name;
};

console.log(new User('Mango')); // ❌ TypeError: User is not a constructor

// ----------------------------------------------------------
*  Еще один более сложный пример со вложенными объектами. 
*  Почему нельзя использовать стрелки как метод объекта. (видео 23:50 / файл 02-context.js)
// ----------------------------------------------------------
* еще разок стрелка как метод обьекта.

// ✅ Вариант с обычной функцией.
const objA = {
  x: 5,
  showX() {
    console.log('this в objA.showX: ', this);              // this в objA.showX:  {x: 5, showX: ƒ}
    console.log(this.x);                                   // 5

    const objB = {
      y: 10,
      showThis() {
        console.log('this в objB.showThis: ', this);      // this в objB.showThis:  {y: 10, showThis: ƒ}
      },
    };

    objB.showThis();
  },
};

objA.showX();

// ❌ Вариант с стрелочной функцией.
const objA = {
  x: 5,
  showX() {
    console.log('this в objA.showX: ', this);                 // this в objA.showX:  {x: 5, showX: ƒ}
    console.log(this.x);                                      // 5

    const objB = {
      y: 10,
      // 💩
      showThis: () => {
        console.log('this в objB.showThis: ', this);         // this в objB.showThis:  {x: 5, showX: ƒ}  Это все еще ссылка на objA. ❌
      },
    };

    objB.showThis();
  },
};

objA.showX();

// =======================================================
refactoring (видео Cтрелочные функции Репета) (видео 27:50) (файл 03-refactoring.js) https://github.com/luxplanjay/js-18/blob/07-1-arrow-fns/js/03-refactoring.js
// =======================================================
* Цепочки вызовов - chaining
// -------------------------
const numbers = [1, 5, 2, 4, 3];

// Было.----- 
const greaterThenTwo = numbers.filter(function (num) {
  return num > 2;
});

// Стало.
const greaterThenTwo = numbers.filter(num => num > 2);

console.log(greaterThenTwo); // [5, 4, 3]

// -------------------------

// Было.-----
const multByTwo = greaterThenTwo.map(function(num) {
  return num * 3;
});

// Стало.
const multByTwo = greaterThenTwo.map(num => num * 3);
console.log(multByTwo);

// -------------------------

// Было.-----
const sorted = multByTwo.sort(function(a, b) {
  return a - b;
});

// Стало.
const sorted = multByTwo.sort((a, b) => a - b);
console.log(sorted);

// -------------------------

// Было.-----
const res = numbers
  .filter(function(num) {
    return num > 2;
  })
  .map(function(num) {
    return num * 3;
  })
  .sort(function(a, b) {
    return a - b;
  });

// Стало.
const res = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);

console.log(res);

// ------------------------------------------------------
* Сортируем тех кто онлайн по рангу
// ------------------------------------------------------

const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

// Было.-----
const onlineAndSorted = players
  .filter(function (player) {
    return player.isOnline;
  })
  .sort(function (prevPlayer, nextPlayer) {
    return prevPlayer.rank - nextPlayer.rank;
  });

// Стало.
const onlineAndSorted = players
  .filter(player => player.isOnline)
  .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

console.table(onlineAndSorted);

// ==============================================================================
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// ------------------------------------------------------
* Увеличиваем кол-во поинтов каждого игрока

// Было.-----
const upatedPlayers = players.map(function (player) {
  return {
    ...player,
    points: player.points + player.points * 0.1,
  };
});

// Стало. Вариант-1 явный возврат.
const upatedPlayers = players.map(player => {
  return {
    ...player,
    points: player.points + player.points * 0.1,
  };
});

// Стало. Вариант-2 явный возврат с скобками () выражения.
const upatedPlayers = players.map(player => ({
  ...player,
  points: player.points + player.points * 0.1,
}));

console.table(upatedPlayers);

// ------------------------------------------------------
* Увеличиваем кол-во часов игрока по id

const playerIdToUpdate = 'player-3';

// Было.-----
const updatedPlayers = players.map(function(player) {
  if (player.id === playerIdToUpdate) {
    return {
      ...player,
      timePlayed: player.timePlayed + 50,
    };
  }

  return player;
});

// Стало. Вариант-1 явный возврат.
const updatedPlayers = players.map(player => {
  if (player.id === playerIdToUpdate) {
    return {
      ...player,
      timePlayed: player.timePlayed + 50,
    };
  }

  return player;
});

// Стало. Вариант-2 явный возврат с тернарником.
const updatedPlayers = players.map(player => {
  return player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player;
});

// Стало. Вариант-3 неявный возврат с тернарником.
const updatedPlayers = players.map(player =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player
);

console.table(updatedPlayers);

|============================
*/
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Репета модуль-4 занятие-2 Методы масивов. видео часть-1 и часть-2 ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
/** Метод forEach
|============================
* Array.prototype.forEach(callback(currentValue, index, array), thisArg)
* - Поэлементо перебирает оригинальный массив
* - Ничего не возвращает
* - Заменяет классический for, если не нужно прерывать цикл

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number) {
  console.log('number', number);
});

console.log(numbers);
|============================
*/
// --------------------------
/** Метод map()
|============================
* Array.prototype.map()
* - Поэлементо перебирает оригинальный массив
* - Не изменяет оригинальный массив
* - Возвращает новый массив такой же длины

.map() - Всегда возвращает новый массив такой же длины, он не может делать что-то больше, меньше, что-то фильтровать или сортировать. 
.map() - Используется для обновления, вытянуть что-то или обновить, все или какой-то один!

const numbers = [5, 10, 15, 20, 25];

const doubledNums = numbers.map(number => {
  return number * 3;
});
console.log('numbers', numbers);
console.log('doubledNums', doubledNums);

// ----------------------------------------------

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// console.table(players);

// -------------------------------------
 * Получаем массив имён всех игроков

// ----- Явный возврат.
const playerNames = players.map(player => {
  return player.name;
});
console.log('playerNames:', playerNames); // playerNames: ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Chelsy']

// ----- Неявный возврат.
const playerNames = players.map(player => player.name);
console.log('playerNames', playerNames);

// -------------------------------------
 * Получаем массив id всех игроков

const playerIds = players.map(player => player.id);
console.log('playerIds', playerIds);

// -------------------------------------
 * Получаем массив объектов с некоторыми отдельными свойствами которые мы хотим вернуть из масива объектов всех игроков.

const res = players.map(({ name, online }) => ({ name, online }));
console.log('res', res);

// -------------------------------------
//  * Увеличиваем кол-во поинтов каждого игрока на 10%

// ----- Вариант-1
const upatedPlayers = players.map(player => {
  return {
    ...player,
    points: player.points * 1.1,
  };
});

// ----- Вариант-2
const upatedPlayers = players.map(player => ({
  ...player,
  points: player.points * 1.1,
}));

console.table(upatedPlayers);
console.log(upatedPlayers);

// ----------------------------------------------------------
//  * Увеличиваем кол-во часов у одного игрока по id

const playerIdToUpdate = 'player-3';

// ----- Вариант-1
const updatedPlayers = players.map(player => {
  if (playerIdToUpdate === player.id) {
    return {
      ...player,
      timePlayed: player.timePlayed + 100,
    };
  }

  return player;
});

// ----- Вариант-2 с тернарным оператором.
const updatedPlayers = players.map(player => {
  return playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player;
});

// ----- Вариант-3 с тернарным оператором болеее кратко.
const updatedPlayers = players.map(player =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player
);

// ---------------------------
console.table(updatedPlayers);

|============================
*/
// --------------------------
/** Метод filter() многие из колекции. Фильтрует.
|============================
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив

const numbers = [5, 10, 15, 20, 25];

// Ищем числа меньше 15 в масиве numbers.
const filteredNumbers1 = numbers.filter(number => {
  return number < 15;
});
console.log(filteredNumbers1);

// Ищем числа меньше 10 и больше 20 в масиве numbers.
const filteredNumbers2 = numbers.filter(number => number < 10 || number > 20);

console.log(filteredNumbers2);

// --------------------------------------------------

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

// --------------------------------------
//  * Получаем массив всех онлайн игроков

// Без деструктуризации.
const onlinePlayers = players.filter(player => player.online);

// С деструктуризацией.
const onlinePlayers = players.filter(({ online }) => online);
console.table(onlinePlayers);

// --------------------------------------
//  * Получаем массив всех оффлайн игроков

const offlinePlayers = players.filter(player => !player.online);
console.table(offlinePlayers);

// --------------------------------------
//  * Получаем список хардкорных игроков с временем больше 250

const hardcorePlayers = players.filter(player => player.timePlayed > 250);
console.table(hardcorePlayers);
|============================
*/
// --------------------------
/** Метод find() один из колекции.
|============================
* Array.prototype.find()
* - Поэлементо перебирает оригинальный массив
* - Возвращает первый элемент удовлетворяющий условию или undefined

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number === 10);
console.log(number);

// -----------------------------------------------------

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

// -----------------------------------------------------
* Ищем игрока по id

const playerIdToFind = 'player-3';

// Без деструктуризации.
const playerWithId = players.find(player => player.id === playerIdToFind);
console.log(playerWithId);

// С деструктуризацией.
const playerWithId = players.find(({ id }) => id === playerIdToFind);
console.log(playerWithId);

// ---------------------

// Без деструктуризации.
const finPlayerById = (allPlayer, playerId) => {
  return allPlayer.find(player => player.id === playerId);
};

// С деструктуризацией, явный возврат.
const finPlayerById = (allPlayer, playerId) => {
  return allPlayer.find(({ id }) => id === playerId);
};

// С деструктуризацией, неявный возврат.
const finPlayerById = (allPlayer, playerId) =>
  allPlayer.find(({ id }) => id === playerId);

// Вызов
console.log(finPlayerById(players, 'player-1'));
console.log(finPlayerById(players, 'player-4'));

// -----------------------------------------------------
* Ищем игрока по имени

const playerNameToFind = 'Poly';
const playerWithName = players.find(player => player.name === playerNameToFind);

console.log(playerWithName);
|============================
*/
// --------------------------
/** Методы every() и some()  /// .every()-Если все true-тогда true.  /.some()-Если хотябы один true-тогда true.  
|============================
* .every() - Если все true-тогда true, если хотябы один не true тогда false.
* .some() - Если хотябы один true-тогда true, если хотябы один не true, тогда false.

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

// -----------------------
 * Array.prototype.every()  Если все true - тогда true, если хотябы один не true тогда false.
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию

const isAllOnline = players.every(player => player.online);
console.log('isAllOnline: ', isAllOnline);

// -----------------------
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию

const isAnyOnline = players.some(player => player.online);
console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
console.log('anyHardcorePlayers: ', anyHardcorePlayers);
|============================
*/
// --------------------------
/** Метод reduce()
|============================
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 
 const numbers = [5, 10, 15, 20, 25];

// Явный возврат.
const total = numbers.reduce((acc, number) => {
  console.log('nnumber', number);
  console.log('acc', acc);

  return acc + number;
}, 0);

console.log(total);

// Неявный возврат.
const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

// ----------------------------------------------------
//  * Считаем общую зарплату

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);
console.log(totalSalary);

// ----------------------------------------------------
//  * Считаем общее количество часов

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);

console.log(totalTimePlayed);

// ----------------------------------------------------
//  * Считаем общую сумму товаров корзины

const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

// Вариант-1 Явный возврат без деструктуризации.
const totalAmount = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

// Вариант-2 Неявный возврат с деструктуризации.
const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);

console.log(totalAmount);

// ----------------------------------------------------
//  * Собираем все теги из твитов

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// Вариант-1 явный возврат.
const allTags = tweets.reduce((tags, tweet) => {
  // tags.push(...tweet.tags); // линк будет ругаться. (литер)
  // return tags;
  return [...tags, ...tweet.tags]; // так литер примет.
}, []);

// Вариант-2 неявный возврат.
const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// Что происходит под капотом.
// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

// ----------------------------------------------------
//  * Ведём статистику тегов. Посмотреть сколько какого тега поставили.

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1

// Вариант-1 Тут происходит изменение по ссылке. Мутабельный вариант. Линтеры не любят когда что-то изменяется по ссылке.
const tagsStats = allTags.reduce((acc, tag) => {
  console.log(acc);

  if (acc[tag]) {
    acc[tag] += 1;

    return acc;
  }

  acc[tag] = 1;

  return acc;
}, {});

// Вариант-2 Не мутабельный вариант решения. На каждой итерации нужно создать новый объект аккумулятора.
const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

// Вариант-3 (без return) Не мутабельный вариант решения. На каждой итерации нужно создать новый объект аккумулятора.
const tagsStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);

console.log(tagsStats);
|============================
*/
// --------------------------
/** Метод sort() Этот метод не выкидывает, он меняет местами - сортирует.
|============================
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)

const numbers = [1, 9, 6, 2, 3];
numbers.sort();
console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
console.log('letters', letters);

// --------------------------------------------------------------------
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
// --------------------------------------------------------------------
* Сортировка по увеличению и сортировка по уменьшению

const numbers = [1, 9, 6, 2, 3];

// Сортировка по возростанию.
numbers.sort((curEl, nextEl) => {
  return curEl - nextEl;
});
console.log(numbers); // [1, 2, 3, 6, 9]

// Сортировка по убыванию.
numbers.sort((curEl, nextEl) => {
  return nextEl - curEl;
});
console.log(numbers); // [9, 6, 3, 2, 1]

// --------------------------------------------------------------------
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
// --------------------------------------------------------------------

const numbers = [1, 9, 6, 2, 3];

const sortedNumbers = [...numbers].sort(); // Cортировка cтандартная по возрастанию.
const ascSortedNumbers = [...numbers].sort((a, b) => a - b); // Cортировка sort(compareFunction) по возрастанию. (перевод: ascending - восходящий)
const descSortedNumbers = [...numbers].sort((a, b) => b - a); // Cортировка sort(compareFunction) по убыванию.   (перевод: descending - нисходящий)

console.log('sortedNumbers', sortedNumbers); // sortedNumbers [1, 2, 3, 6, 9]
console.log('ascSortedNumbers', ascSortedNumbers); // ascSortedNumbers [1, 2, 3, 6, 9]
console.log('descSortedNumbers', descSortedNumbers); // descSortedNumbers [9, 6, 3, 2, 1]

console.log('реверс', [1, 2, 3, 4, 5].reverse()); // [5, 4, 3, 2, 1]

// --------------------------------------------------------------------
 * Кастомная сортировка сложных типов
// --------------------------------------------------------------------

// --------------------
* Сортировка по числам.
// --------------------

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По игровому времени. Сортировка объектов по значениям свойств.

// Сортируем объекты по убыванию значений свойств (timePlayed)
const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
console.table(sortedByBestPlayers);

// Сортируем объекты по возрастанию значений свойств (timePlayed)
const sortedByWorstPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortedByWorstPlayers);

// --------------------
* Сортировка по имени.
// --------------------

* Кастомная сортировка по первой букве.

const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});

console.table(byName);

// * Функция charCodeAt()
// ---------------------
console.log('abc'.charCodeAt(2));

|============================
*/
// --------------------------
/** Метод flat() и flatMap()
|============================
// ----------------------------------------------------------
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1
// ----------------------------------------------------------

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];

console.log(array.flat(1)); // [1, 2, 4, [5], 6, [7, 8, [9]]]  Розгладит на 1 глубину вложености.
console.log(array.flat(2)); // [1, 2, 4, 5, 6, 7, 8, [9]]      Розгладит на 2 глубины вложености.
console.log(array.flat(3)); // [1, 2, 4, 5, 6, 7, 8, 9]        Розгладит на 3 глубины вложености.

// ----------------------------------------------------------
* Array.prototype.flatMap(callback)
* - Комбинация map + flat
// ----------------------------------------------------------

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
// ----- Вариант-1 Этот вариант решение с прошлого урока по .reduce(), мы можем его заменить вариантом ниже .flatMap().
const stats1 = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(stats1); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// ----- Вариант-2 .map().flat()
// Проблема таких вызовов втом что их несколько, мы два раза ходим по одному и тому же масиву,
// и надо учитывать что при достаточном кол-ве таких методов производительность может упасть.

const tags = tweets.map(t => t.tags).flat();
console.log(tags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// ----- Вариант-3 .flatMap()
// Это полный аналог варианта.map().flat(), но только чучуть быстрее за счет того, что мы проходимся один раз по масиву.
// Делает тоже самое на глубину разглаживания 1.

const tags = tweets.flatMap(t => t.tags);
console.log(tags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// --------------------------------------------

// Дальше можем этим тегам дать кол-во сколько каких тегов.

// ----- Вариант явного возврата.
const stats = tags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

// ----- Вариант неявного возврата.
const stats = tweets
  .flatMap(tweet => tweet.tags)
  .reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {}
  );

console.log(stats);

|============================
*/
// --------------------------
/** Цепочки вызовов (Chaining) 
|============================
// ---------------------------------------------------------------
 * Цепочки вызовов - chaining
// ---------------------------------------------------------------
// Пример на масиве цифр.
// 1) Отфильтровать те которые больше 2.
// 2) Утроить значеения цифр (элементов) в масиве.
// 3) Оставшиеся отсортировать по возрастанию, или по убыванию.

const numbers = [1, 5, 2, 4, 3];

// ----- Вариант-1 (от него нужно избавляться / Хороший вариант это вариант-3 chaining)
const greaterThenTwo = numbers.filter(function (num) {
  return num > 2;
});
console.log(greaterThenTwo); // [5, 4, 3]

const multByThree = greaterThenTwo.map(function (num) {
  return num * 3;
});
console.log(multByThree); // [15, 12, 9]

const sorted = multByThree.sort(function (a, b) {
  return a - b;
});
console.log(sorted); // [9, 12, 15]

// ----- Вариант-2 (от него нужно избавляться  / Хороший вариант это вариант-3 chaining)

const greaterThenTwo = numbers.filter(num => num > 2);
console.log(greaterThenTwo); // [5, 4, 3]

const multByThree = greaterThenTwo.map(num => num * 3);
console.log(multByThree); // [15, 12, 9]

const sorted = multByThree.sort((a, b) => a - b);
console.log(sorted); // [9, 12, 15]

// ----- Вариант-3 (Цепочка вызовов - chaining) Цепочка предыдущих трёх (Правильны современный синтаксис решения!)
// Каждый из примененных методов создает новый масив, и на новом созданном масиве применяем следующий метод.
const sorted = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);

console.log(sorted);

// ---------------------------------------------------------------
 * Сортируем тех кто онлайн по рангу
 * - сначала фильтруем
 * - потом сортируем
// ---------------------------------------------------------------
const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
  { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 200 },
];

const onlineAndSorted = players
  .filter(player => player.isOnline)
  .sort((a, b) => a.rank - b.rank);

console.table(onlineAndSorted);

// ---------------------------------------------------------------
 * Chaining в методах объекта как jquery
// ---------------------------------------------------------------
const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;

    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;

    return this;
  },
};

element.toggleHovered().changeClass('open').toggleHovered();
console.log(element);

|============================
*/
// --------------------------
/** Библиотека lodash (библиотека готовых небольших методов, которые делают одну узко направленную свою задачу).
|============================
// Библиотеку обязательно нужно подкулючить в файле html. https://www.jsdelivr.com/package/npm/lodash
// В файле html подключили библиотеку lodash, этот скрипт  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

// (видео 1:13:07  https://www.youtube.com/watch?v=tJjxVHDQuwQ&t=11s)

// ------------------------------------------------------------
//  * isEmpty()  (видео 1:01:05)
// ------------------------------------------------------------

console.log(_.isEmpty({}));
console.log(_.isEmpty({ a: 1 }));

// ------------------------------------------------------------
 * get()      (видео 1:04:04)
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
// ------------------------------------------------------------

const user = {
  name: 'mango',
  location: {
    city: 'Lviv',
  },
};

console.log(_.get(user, 'location.city')); // синтаксис библиотеки.

console.log(user.location.city);

if (user && user.location && user.location.city) {
  console.log(user.location.city);
}

console.log(user?.location?.city); // Это новый синтаксис JS. (?.) - означает необязательное свойство. Оно говорит - если этого свойства нету, то дальше уже не ищи.

// ------------------------------------------------------------
 * _.union()  (видео 1:13:07)
// ------------------------------------------------------------
// ссылка на библиотеку https://lodash.com/docs/4.17.15#union

console.log(_.union([1, 2, 3], [3, 4, 5]));         // [1, 2, 3, 4, 5] обьединит два масива только уникальных элементов, повторяющихся элементов в масиве не будет.

// ------------------------------------------------------------
 * _.range()  (видео 1:14:50)
// ------------------------------------------------------------
// ссылка на библиотеку https://lodash.com/docs/4.17.15#range

// если к примеру нужно сделать масив к примеру от 3 до 10   _.range([start=0], end, [step=1])

// Правило _.range([start=0], end, [step=1])

console.log(_.range(10, 20));             // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] сделаем масив от start до end, невключая end.
console.log(_.range(10, 20, 2));          // [10, 12, 14, 16, 18] сделаем масив с шагом 2, от start до end, невключая end.

// ------------------------------------------------------------
 * sortBy()  (видео 1:17:00) 
// ------------------------------------------------------------
//  ссылка на библиотеку https://lodash.com/docs/4.17.15#sortBy

// ----- Пример из библиотеки
const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

_.sortBy(users, [
  function (o) {
    return o.user;
  },
]);
=> objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

_.sortBy(users, ['user', 'age']);
=> objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]

// ----- Пример Репета

console.log(_.sortBy(users, user => user.age));    // [{user: 'barney', age: 34}, {user: 'barney', age: 36}, {user: 'fred', age: 40}, {user: 'fred', age: 48}]
console.log(_.sortBy(users, ['user', 'age']));     // [{user: 'barney', age: 34}, {user: 'barney', age: 36}, {user: 'fred', age: 40}, {user: 'fred', age: 48}]

// ------------------------------------------------------------
 * sum() и sumBy()  (видео 1:19:45) 
// ------------------------------------------------------------
// ----- sum() Считает общую сумму чисел в масиве.

console.log(_.sum([1, 2, 3, 4, 5]));   // 15

// ----- sumBy() Работает с масивом обьектов. Считает общую сумму значений свойства объекта в масиве обьектов.
// Это тоже самое, что мы делали с методом reduce(). Считаем общее кол-во балов timePlayed.

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

console.log(_.sumBy(players, player => player.timePlayed));     // 1240

// ------------------------------------------------------------
 * uniq() и uniqBy()                 (видео 1:22:05) 
 * sortedUniq() и sortedUniqBy()       
// ------------------------------------------------------------
// ссылка на библиотеку https://lodash.com/docs/4.17.15#uniq

// ------------------------------------------------------------
 * random()
// ------------------------------------------------------------
// 

// ------------------------------------------------------------
 * min() и max()          (видео 1:22:40) 
 * minBy() и maxBy()
// ------------------------------------------------------------
//  ссылка на библиотеку https://lodash.com/docs/4.17.15#min

// ----- min() и max() Ищет минимальное и максимальное число в масиве чисел. -----

// Пример из JS
console.log(Math.min(...[1, 2, 3, 4, 5]));                   // 1

// Пример из lodash
console.log(_.min([1, 2, 3, 4, 5]));                         // 1
console.log(_.max([1, 2, 3, 4, 5]));                         // 5

// ----- minBy() Работает с масивом обьектов. -----

const objects = [{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }];

console.log(_.minBy(objects, minN => minN.n));              // {n: 1}

// Сокращение итерируемого объекта `_.property`.
console.log(_.minBy(objects, 'n'));                         // {n: 1}

// ----- Пример Репета.

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

console.log(_.minBy(players, player => player.timePlayed)); // {id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true}

// ------------------------------------------------------------
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase() (видео 1:24:30) 
// ------------------------------------------------------------

console.log(_.kebabCase(' a b c '));         // a-b-c
|============================
*/
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Артем модуль-4 занятие-1 callback-функции, Метод forEach, Стрелочные функции, Різновиди коду. ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
/** Callback функции.
|============================
// Пример из кахута.

function foo(callback) {
  callback(10);
  // в callback передается undefind из функции logger, поэтому будет ОШИБКА!
}

function logger(value) {
  console.log(value); // 5 // undefind
}

foo(logger(5));

// ------------------------------------------------------------------------
// Идеология callback. (Пример отличия кода, работы с обычными функциями и функциями callback)
// ------------------------------------------------------------------------

const arr = [2, 6, 1, 7, 3];

// ---------- Обычная.
function add(arr) {
  let total = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    total += arr[i];
  }

  return total;
}

console.log(add(arr));

// ---------- Обычная.
function sum(arr) {
  let total = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    total *= arr[i];
  }

  return total;
}

console.log(sum(arr));

// ---------- Обычная.
function division(arr) {
  let total = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    total /= arr[i];
  }

  return total;
}

// ------ Тоже самое но с callback функциями. ------

// ----- Функция высшего порядка.
function each(arr, callback) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    total = callback(total, arr[i]);
  }

  return total;
}

// Вызов.
console.log(each(arr, add));
console.log(each(arr, sum));
console.log(each(arr, division));

// ----- callback функция.
function add(first, second) {
  return first + second;
}
// ----- callback функция.
function sum(first, second) {
  return first * second;
}
// ----- callback функция.
function division(first, second) {
  return first / second;
}

|============================
*/
// --------------------------
/** метод forEach() (Видео 40:30)
|============================
const arr = [2, 6, 1, 7, 3];

// item -ітеруємий елемент  --------------- Обязательный параметр!
// idx -індекс поточного елемента --------- Необязательный параметр!
// arr - масив який ітеруємо -------------- Необязательный параметр!

arr.forEach(function (item, idx, arr) {
  console.log('item (елемент)', item);                         // item (елемент) 2
  console.log('idx (індекс елемента)', idx);                   // idx (індекс елемента) 0
  console.log('arr (масив який ітеруємо)', arr);               // arr (масив який ітеруємо) [2, 6, 1, 7, 3]
});

// -----------------

const arr = [2, 6, 1, 7, 3];

arr.forEach(function (item, idx, arr) {
  arr[idx] = item * 2;
});

console.log(arr); // [4, 12, 2, 14, 6]

// ---------------------------------------
// Если переменная item(элемент) не используется, ставин нижнее подчеркивание.
// ---------------------------------------
const arr = [2, 6, 1, 7, 3];

arr.forEach(function (_, idx) {
  console.log(idx);                                            // 0  // 1  // 2  // 3  // 4
});

console.log(arr);                                             // [2, 6, 1, 7, 3]

|============================
*/
// --------------------------
/** Стрелочные функции. (Видео 1:08:50)
|============================
// ---------------------------------------------------
// Типы существующих функций.
// ---------------------------------------------------

// ----- function declaration -----
// * Вызов возможет после оглашения и выше по коду!

foo();

function foo() {}

foo();

// ----- function expression -----
// * Вызов возможет только после оглашения.

const boo = function () {};

boo();

// ----- function arrow -----
// * Вызов возможет только после оглашения.
// * 99% используют в callback функциях.
// * arguments - відсутній;

//  синтаксис стрелочной функции.
const foo = (...rest) => {
  console.log(rest);
};

// синтаксис стрелочной callback функции.
() => {};

// Вызов
foo(1, 2, 3, 4, 5);
foo(1, 2, 3, 4, 21, 532, 5324, 5);

// ---------------------------------------------------
// Стрелочные функции и this.  Стрелочные функции не используют как метод объекта!
// ---------------------------------------------------

const user = {
  userName: 'Test user',

  // Обычная функция обращение через this.
  say() {
    console.log(`Hello ${this.userName}`);                    // Hello Test user
  },

  // Стрелочная функция с this не работает.
  sayHello1: () => {
    console.log(`Hello ${this.userName}`);                    // TypeError: Cannot read properties of undefined (reading 'userName')
  },

  // Стрелочная функция можно обратиться через имя объекта.
  sayHello2: () => {
    console.log(`Hello ${user.userName}`);                    // Hello Test user
  },
};

user.say();
user.sayHello1();
user.sayHello2();
|============================
*/
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Олег модуль-4 занятие-1 callback-функции, Метод forEach, Стрелочные функции, Різновиди коду. ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
/** callback-функции.
|============================

function callMe(callback) {
  if (true) {
    callback();
  }
}

callMe(function () {
  console.log('HELLO-1');
});
callMe(function () {
  console.log('HELLO-2');
});
callMe(function () {
  console.log('HELLO-3');
});
callMe(function () {
  console.log('HELLO-4');
});

// -------------------------------------------------------------

function validateValue(value, onSuccess, onError) {
  if (value !== null && value !== undefined && value !== '') {
    onSuccess('HELLO');
  } else {
    onError('GOOD BYE', value);
  }
}

// Вызов с обычной функцией callback
validateValue(
  100,
  function () {
    console.log('Number is correct');
  },
  function () {
    console.log('Number is incorrect');
  }
);

// Вызов с стрелочной функцией callback
validateValue(
  null,
  message => console.log(message, 'Number is correct'),
  (message, second) => console.log(message, second, 'Is incorrect')
);

// Вызов с обычной функцией callback
validateValue(
  '',
  function () {
    console.log('String is correct');
  },
  function () {
    console.log('String is incorrect');
  }
);

// -------------------------------------------------------------

// ---------- Функція вищого порядку синтаксис (Варіант-1)
function validateValue(value, onSuccess, onError) {
  if (value !== null && value !== undefined && value !== '') {
    onSuccess('HELLO');
  } else {
    onError('GOOD BYE', value);
  }
}
// ---------- Функція вищого порядку синтаксис (Варіант-2) Она же
function validateValue(value, onSuccess, onError) {
  if (value !== null && value !== undefined && value !== '') onSuccess('HELLO');
  else onError('GOOD BYE', value);
}

// ---------- Вызов с обычной функцией callback
validateValue(
  100,
  function () {
    console.log('Number is correct');
  },
  function () {
    console.log('Number is incorrect');
  }
);
// ---------- Вызов с обычной функцией callback
validateValue(
  '',
  function () {
    console.log('String is correct');
  },
  function () {
    console.log('String is incorrect');
  }
);

// ---------- Вызов с стрелочной функцией callback (Вариант-1)
validateValue(
  100,
  () => console.log('Number is correct'),
  () => console.log('Number is incorrect')
);

// ---------- Вызов с стрелочной функцией callback  (Вариант-2)
validateValue(
  null,
  message => console.log(message, 'Number is correct'),
  (message, second) => console.log(message, second, 'Is incorrect')
);
|============================
*/
// --------------------------
/** Метод forEach (видео 26:55)
|============================
const arr = [1, 2, 3];

// ---------- Обычный for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log('______');

// ---------- for of
for (const number of arr) {
  console.log(number);
}
console.log('______');

// ---------- forEach

// Пример-1
// arr.forEach(number => console.log(number));

// Пример-2
const customForEach = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
};

const b = () => 'HELLO';
const a = callback => {};

a(b);

customForEach(arr, number => console.log(number, 'HELLO'));
|============================
*/
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| Олег модуль-4 занятие-2 Перебираючі методи масиву. ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
/** Чисті функції
|============================
1. Не має змінювати параметри, які приходять в функцію;
2. Не має використовувати або змінювати глобальні значення;
3. Має повертати очікуваний результат;

const data = [
  { id: 1, name: "BMW" },
  { id: 2, name: "Mersedes" },
];

const showCarsInfo = (cars = []) => {
  cars.forEach((car, i) => {
    console.log(`${i}: ${car.id} -> ${car.name}`);
  });

  return cars.length;
}; // ${i}: ${id} -> ${name}

const count = showCarsInfo(data);

console.log(count);
|============================
*/
// --------------------------
/** Метод map()
|============================
const data = [
  { id: 1, name: 'BMW' },
  { id: 2, name: 'Mersedes' },
  { id: 3, name: 'Mersedes' },
];

const res = data.map(car => {
  if (car.id === 1) return { ...car, foundId: true };

  return { ...car, foundId: false };
});

console.log(res); // [{id: 1, name: 'BMW', foundId: true}, {id: 2, name: 'Mersedes', foundId: false}, {id: 3, name: 'Mersedes', foundId: false}]
|============================
*/
// --------------------------
/** Метод filter()
|============================
const data = [
  { id: 1, name: 'BMW', price: 100 },
  { id: 2, name: 'Mersedes', price: 100 },
  { id: 3, name: 'Mersedes', price: 500 },
  { id: 4, name: 'Mersedes', price: 300 },
  { id: 5, name: 'AUDI', price: 200 },
];

const res = data.filter(car => car.name !== 'Mersedes'); // Фильтруем машины, все кроме мерседес.

console.log(res); // [{id: 1, name: 'BMW', price: 100}, {id: 5, name: 'AUDI', price: 200}]
|============================
*/
// --------------------------
/** Метод reduce()
|============================
const data = [
  { id: 1, name: 'BMW', price: 100 },
  { id: 2, name: 'Mersedes', price: 100 },
  { id: 3, name: 'Mersedes', price: 500 },
  { id: 4, name: 'Mersedes', price: 300 },
  { id: 5, name: 'AUDI', price: 200 },
];

const total = data.reduce((total, car) => total + car.price, 0);

// 1. total -> 0; current {id: 1} => 0 + 100 = 100;
// 2. total -> 100; current {id: 2} => 100 + 100 = 200
// 3. total -> 200; current {id: 3} => 200 + 500 = 700;
// 4. total -> 700; current {id: 4} => 700 + 300 = 1000;
// 5. total -> 1000; current {id: 5} => 1000 + 200 = 1200;

console.log(total);
|============================
*/
// --------------------------
/** filter() + indexOf()
|============================
// Ищем уникальные числа.
const numbers = [10, 100, 1, 2, 2, 100, 10, 1];

const res = numbers.filter(
  (number, index) => numbers.indexOf(number) === index
);
console.log(res); // [10, 100, 1, 2]

// // 1. (10, 0) => 0 === 0 -> true -> [10]
// // 2. (100, 1) => 1 === 1 -> true -> [10, 100]
// // 3. (1, 2) => 2 === 2 -> true -> [10, 100, 1]
// // 4. (2, 3) => 3 === 3 -> true -> [10, 100, 1, 2]
// // 5. (2, 4) => 3 === 4 -> false -> [10, 100, 1, 2]
// // 6. (100, 5) => 1 === 5 -> false -> [10, 100, 1, 2]
// // 7. (10, 6) => 0 === 6 -> false -> [10, 100, 1, 2]
// // 8. (1, 7) => 2 === 7 -> false -> [10, 100, 1, 2]
|============================
*/
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| РЕШЕНИЕ ЗАДАЧ Артем и Олег: модуль-4 занятие-1 ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
/** Example 1 - Коллбек функції
|============================
// Example 1 - Коллбек функції
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id
// та викликає коллбек передаючи йому створений об'єкт.

// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
|============================
*/
// ---------------------------------------
/** Решение-Example 1 - Коллбек функції
|============================
// =================== Артем ===================

function createProduct(obj, callback) {
  const product = {
    id: Date.now(),
    ...obj,
  };
  callback(product);
}

// Коллбек функції
function logProduct(obj) {
  console.log(`Product ${obj.name}`);
}

function logTotalPrice({ price, quantity }) {
  console.log(`Total price ${price * quantity}`);
}

// Вызов
createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// =================== Олег ===================

// ---------- Вариант-1
function createProduct(obj, callback) {
  const newObj = {
    ...obj,
    id: Math.random,
  };
  callback(newObj);
}

// ---------- Вариант-2
const createProduct = (obj, callback) => {
  return callback({ ...obj, id: Math.random() });
};

// ---------- Вариант-3
const createProduct = (obj, callback) =>
  callback({ ...obj, id: Math.random() });

// Коллбек функції
const logProduct = product => console.log(product);
const logTotalPrice = product => console.log(product.price * product.quantity);

// Вызов
createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
|============================
*/
// ==========================================================================================
/** Example 2 - Коллбек функції (Видео 1:00:00)
|============================
// Додайте в об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), 
// де перший параметр це сума операції, а другий та третій - коллбеки.
// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.
// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
|============================
*/
// ---------------------------------------
/** Решение-Example 2 - Коллбек функції
|============================

// =================== Артем ===================

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`TRANSACTION_LIMIT: ${TRANSACTION_LIMIT}`);
      return;
    } else if (amount > this.balance) {
      onError('Not enough in the account');
      return;
    }
    this.balance -= amount;
    onSuccess(`Transaction complete ${amount}, balance: ${this.balance}`);
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`TRANSACTION_LIMIT: ${TRANSACTION_LIMIT}`);
      return;
    } else if (amount <= 0) {
      onError(`Nice try Bro 😉`);
      return;
    }
    this.balance += amount;
    onSuccess(`Added: ${amount}, balance ${this.balance}`);
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);

// =================== Олег ===================

const TRANSACTION_LIMIT = 1000;

const account = {
  balance: 1000,

  withdraw(amount, onSuccess, onError) {
    // ---------- Вариант-1 синтаксис
    if (amount <= 0) onError('Amount is less than zero');
    else if (amount > TRANSACTION_LIMIT) onError('Amount is more than limit');
    else if (amount > this.balance) onError('Amount is more than balance');
    else {
      this.balance -= amount;
      onSuccess('Withdraw is good! Balance: ' + this.balance);
    }
    // ---------- Вариант-2 синтаксис
    // if (amount <= 0) {
    //   onError('Amount is less than zero');
    // } else if (amount > TRANSACTION_LIMIT) {
    //   onError('Amount is more than limit');
    // } else if (amount > this.balance) {
    //   onError('Amount is more than balance');
    // } else {
    //   this.balance -= amount;
    //   onSuccess('Withdraw is good! Balance: ' + this.balance);
    // }
  },

  deposit(amount, onSuccess, onError) {
    if (amount <= 0) onError('Amount is less than zero');
    else if (amount > TRANSACTION_LIMIT) onError('Amount is more than limit');
    else {
      this.balance += amount;
      onSuccess('Deposit is good! Balance: ' + this.balance);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

// account.withdraw(-2000, handleSuccess, handleError);
// account.withdraw(1500, handleSuccess, handleError);
// account.withdraw(500, handleSuccess, handleError);
// account.withdraw(1000, handleSuccess, handleError);

// account.deposit(10000, handleSuccess, handleError);
// account.deposit(-10000, handleSuccess, handleError);
// account.deposit(500, handleSuccess, handleError);
// -----
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
|============================
*/
// ==========================================================================================
/** Example 3 - Коллбек функції
|============================
Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. 
// Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
);
|============================
*/
// ---------------------------------------
/** Решение-Example 3 - Коллбек функції
|============================

// =================== Артем ===================

// =================== Олег ===================

// ----------Вариант-1 Стрелочная функция синтаксис.
// const each = (arr, callback) => {
//   const result = [];
// };

// ----------Вариант-2 Обычная функция синтаксис.
function each(arr, callback) {
  const result = [];

  // -----Вариант-1 с for обычным.
  for (let i = 0; i < arr.length; i += 1) {
    const res = callback(arr[i]);
    result.push(res);
  }
  // -----Вариант-2 с forEach
  arr.forEach(function (number) {
    const res = callback(number);
    result.push(res);
  });
  // -----Вариант-3 с forEach
  arr.forEach(number => result.push(callback(number)));
  return result;
}

// ------ Вызов.
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
|============================
*/
// ==========================================================================================
/** Example 4 - Стрілочні функції
|============================
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

function createProduct(partialProduct, callback) {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice(product) {
  console.log(product.price * product.quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
|============================
*/
// ---------------------------------------
/** Решение-Example 4 - Стрілочні функції
|============================
// =================== Артем ===================

const createProduct = (partialProduct, callback) =>
  callback({ id: Date.now(), ...partialProduct });

const logProduct = product => console.log(product.name);

const logTotalPrice = ({ price, quantity }) => console.log(price * quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// =================== Олег ===================

const createProduct = (partialProduct, callback) => {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
};

const logProduct = product => console.log(product);

const logTotalPrice = product => console.log(product.price * product.quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
|============================
*/
// ==========================================================================================
/** Example 5 - Стрілочні функції
|============================
// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
|============================
*/
// ---------------------------------------
/** Решение-Example 5 - Стрілочні функції
|============================
// =================== Артем - Олег ===================

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

const handleSuccess = message => console.log(`✅ Success! ${message}`);

const handleError = message => console.log(`❌ Error! ${message}`);

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
|============================
*/
// ==========================================================================================
/** Example 6 - Інлайн стрілочні функції
|============================
// Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
);
|============================
*/
// ---------------------------------------
/** Решение-Example 6 - Інлайн стрілочні функції
|============================
// =================== Артем - Олег ===================

const each = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
};

console.log(each([64, 49, 36, 25, 16], value => value * 2));
console.log(each([64, 49, 36, 25, 16], value => value - 10));
console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
|============================
*/
// ==========================================================================================
/** Example 7 - Метод forEach
|============================
// Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

function logItems(items) {
  console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
|============================
*/
// ---------------------------------------
/** Решение-Example 7 - Інлайн стрілочні функції
|============================
// ----------Вариант-1 Артем
const logItems = arr =>
  arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));

// ----------Вариант-2 Олег
const logItems = items => {
  items.forEach((number, index) => console.log(`${index + 1} - ${number}`));
};

// ----------Вариант-3 Олег
const logItems = (items = []) => {
  items.forEach((item, i) => {
    console.log(`${i + 1} - ${item}`);
  });
};

// Вызов
logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
|============================
*/
// ==========================================================================================
/** Example 8 - Метод forEach
|============================
// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
|============================
*/
// ---------------------------------------
/** Решение-Example 8 - Метод forEach
|============================
// =================== Артем - Олег ===================
// ----------Вариант-1 Артем
const printContactsInfo = ({ names, phones }) => {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  nameList.forEach((item, idx) => console.log(`${item}: ${phoneList[idx]}`));
};
// ----------Вариант-2 Олег
function printContactsInfo({ names = '', phones = '' }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  nameList.forEach((item, i) => {
    console.log(`${item}: ${phoneList[i]}`);
  });
}
// ----- Вызов
printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
|============================
*/
// ==========================================================================================
/** Example 9 - Метод forEach
|============================
// Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

function calсulateAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i+= 1) {
    total += args[i];
  }
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
|============================
*/
// ---------------------------------------
/** Решение-Example 9 - Метод forEach
|============================
// ----------Вариант-1 Артем
const calсulateAverage = (...args) => {
  let total = 0;
  args.forEach(value => (total += value));
  return total / args.length;
};
// ----------Вариант-2 Олег
const calсulateAverage = (...args) => {
  let total = 0;
  args.forEach(item => (total += item));
  return total / args.length;
};
// ----- Вызов
console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
|============================
*/
// ------------------------------------------------------------------------------------------------
/* ! <<<<<<<<<<<<<<< ||| РЕШЕНИЕ ЗАДАЧ Олег: модуль-4 занятие-2(8) Перебираючі методи масиву ||| >>>>>>>>>>>>>>> ! */
// ------------------------------------------------------------------------------------------------
/** Колекція об'єктів для всіх прикладів з автомобілями (файл с задачками https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-08/uk.md)
|============================
файл с задачками - https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-08/uk.md

// Колекція об'єктів для всіх прикладів з автомобілями

// const cars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true, },
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true, },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false, },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true, },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false, },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false, },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true, },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true, },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true, },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false, },
// ];

// console.table(cars);
|============================
*/
// ==========================================================================================
/** Example 1 - Метод map
|============================
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

const getModels = cars => {};

console.table(getModels(cars));
|============================
*/
// --------------------------
/** Решение-Example 1
|============================
const getModels = cars => cars.map(car => car.model);

console.log(getModels(cars));        // ['CR-V', 'Accord', 'Mazda 6', 'CX-9', '4Runner', 'Sequoia', 'Tacoma', 'F-150', 'Fusion', 'Explorer']
|============================
*/
// ==========================================================================================
/** Example 2 - Метод map
|============================
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

const makeCarsWithDiscount = (cars, discount) => {};

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));
|============================
*/
// --------------------------
/** Решение-Example 2
|============================
// ----- Вариант-1 (неявный возврат)

const makeCarsWithDiscount = (cars, discount) =>
  cars.map(car => ({
    ...car,
    price: car.price - car.price * discount,
  }));

// ----- Вариант-2 (явный возврат + вариант-2 вычетания discount)

const makeCarsWithDiscount = (cars, discount) => {
  return cars.map(car => ({
    ...car,
    price: car.price * (1 - discount),
  }));
};

// Вызов
console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));
|============================
*/
// ==========================================================================================
/** Example 3 - Метод filter
|============================
// Нехай функція filterByPrice повертає масив автомобілів ціна,
// яких менша ніж значення параметра threshold.

const filterByPrice = (cars, threshold) => {};

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
|============================
*/
// --------------------------
/** Решение-Example 3
|============================

// ----- Вариант-1 (неявный возврат)
const filterByPrice = (cars, threshold) =>
  cars.filter(car => car.price < threshold);

// ----- Вариант-2 (явный возврат)
const filterByPrice = (cars, threshold) => {
  return cars.filter(car => car.price < threshold);
};

// Вызов
console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
|============================
*/
// ==========================================================================================
/** Example 4 - Метод filter
|============================
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

const getCarsWithDiscount = cars => {};

console.table(getCarsWithDiscount(cars));
|============================
*/
// --------------------------
/** Решение-Example 4
|============================
// ----- Вариант-1 (неявный возврат)
const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

// ----- Вариант-2 (явный возврат)
const getCarsWithDiscount = cars => {
  return cars.filter(car => car.onSale);
};

// Вызов
console.table(getCarsWithDiscount(cars));
|============================
*/
// ==========================================================================================
/** Example 5 - Метод filter
|============================
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

const getCarsWithType = (cars, type) => {};

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
|============================
*/
// --------------------------
/** Решение-Example 5
|============================
// ----- Вариант-1 (неявный возврат)
const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// ----- Вариант-2 (явный возврат)
const getCarsWithType = (cars, type) => {
  return cars.filter(car => car.type === type);
};

// Вызов
console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
|============================
*/
// ==========================================================================================
/** Example 6 - Метод find
|============================
// find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. 
// Тобто він шукає до першого збігу.

const getCarByModel = (cars, model) => {};

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));
|============================
*/
// --------------------------
/** Решение-Example 6
|============================
// ----- Вариант-1 (неявный возврат)
const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// ----- Вариант-2 (явный возврат)
const getCarByModel = (cars, model) => {
  return cars.find(car => car.model === model);
};

// Вызов
console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));
|============================
*/
// ==========================================================================================
/** Example 7 - Метод sort
|============================
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

const sortByAscendingAmount = cars => {};

console.table(sortByAscendingAmount(cars));
|============================
*/
// --------------------------
/** Решение-Example 7
|============================
// ----- Вариант-1 (неявный возврат)

const sortByAscendingAmount = cars =>
  cars.sort((carA, carB) => carA.amount - carB.amount);

// ----- Вариант-2 (явный возврат)

const sortByAscendingAmount = cars => {
  return cars.sort((carA, carB) => carA.amount - carB.amount);
};

// Вызов
console.table(sortByAscendingAmount(cars));
|============================
*/
// ==========================================================================================
/** Example 8 - Метод sort
|============================
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

const sortByDescendingPrice = cars => {};

console.table(sortByDescendingPrice(cars));
|============================
*/
// --------------------------
/** Решение-Example 8
|============================
const sortByDescendingPrice = cars => {
  return cars.sort((carA, carB) => carB.price - carA.price);
};

console.table(sortByDescendingPrice(cars));
|============================
*/
// ==========================================================================================
/** Example 9 - Метод sort
|============================
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, 
// в залежності від значення параметра order.

const sortByModel = (cars, order) => {};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
|============================
*/
// --------------------------
/** Решение-Example 9
|============================
const sortByModel = (cars, order) => {
  const copy = [...cars];
  switch (order) {
    case 'asc':
      return copy.sort((a, b) => a.model.localeCompare(b.model));
    case 'desc':
      return copy.sort((a, b) => b.model.localeCompare(a.model));

    default:
      return copy;
  }

  // Вариант нерешенный!
  // cars.sort((a, b) => {
  //   switch (order) {
  //     case 'asc':
  //       return a.model.localeCompare(b.model);
  //     case 'desc':
  //       return b.model.localeCompare(a.model);

  //     default:
  //       return 0;
  //   }
  // });
};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
|============================
*/
// ==========================================================================================
/** Example 10 - Метод reduce
|============================
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

const getTotalAmount = cars => {};

console.log(getTotalAmount(cars));
|============================
*/
// --------------------------
/** Решение-Example 10
|============================
// ----- Вариант-1 (неявный возврат)
const getTotalAmount = cars =>
  cars.reduce((total, car) => (total += car.amount), 0);

// ----- Вариант-2 (явный возврат)
const getTotalAmount = cars => {
  return cars.reduce((total, car) => (total += car.amount), 0);
};

// Вызов
console.log(getTotalAmount(cars));
|============================
*/
// ==========================================================================================
/** Example 11 - Ланцюжки методів 
|============================
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

const getAvailableCarNames = cars => {};

console.table(getAvailableCarNames(cars));
|============================
*/
// --------------------------
/** Решение-Example 11
|============================
// ----- Вариант-1 (неявный возврат)

// Вариант (цепочка методов, Chaining)
const getAvailableCarNames = cars =>
  cars.filter(car => car.onSale).map(car => car.model);

// ----- Вариант-2 явный возврат, отдельно прописаны опирации методов в отдельной строке.

// const getAvailableCarNames = cars => {
//   const carOnSale = cars.filter(car => car.onSale); // Нашли машины которые на распродаже.
//   const models = carOnSale.map(car => car.model);
//   return models;
// };

// Вызов
console.log(getAvailableCarNames(cars)); // ['CR-V', 'Accord', 'CX-9', 'Tacoma', 'F-150', 'Fusion']
|============================
*/
// ==========================================================================================
/** Example 12 - Ланцюжки методів
|============================
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

const getSortedCarsOnSale = cars => {};

console.table(getSortedCarsOnSale(cars));
|============================
*/
// --------------------------
/** Решение-Example 
|============================
// ----- Вариант-1 (неявный возврат)
const getSortedCarsOnSale = cars =>
  cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);

// ----- Вариант-2 (явный возврат)
const getSortedCarsOnSale = cars => {
  return cars.filter(car => cars.onSale).sort((a, b) => a.price - b.price);
};

// Вызов
console.table(getSortedCarsOnSale(cars));
|============================
*/
// ==========================================================================================
