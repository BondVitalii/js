// :::::::::::::::||| Ярослав модуль-1 Дополнительное занятие. |||:::::::::::::::

/** Задача-1: Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть.
|============================
TODO:===================================
Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть.
|============================
*/
// --------------------------
/** Решение задачи-1
|============================
// вариант-1 ----------------

const a = 10;

let res = a === 10 ? 'Вірно' : 'Невірно';

console.log(res);

// вариант-2 ----------------

const a = 10;
let res = '';

if (a === 10) {
  res = 'Вірно';
} else {
  res = 'Невірно';
}
console.log(res);

// вариант-3 ----------------

const a = 10;

if (a === 10) {
  console.log('Вірно');
} else {
  console.log('Невірно');
}
|============================
*/
// ===========================================================================================
/** Задача-2: Змінна num може набувати 4 значення: 1, 2, 3 або 4.
|============================
//TODO:===================================
Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
значення '1', то у змінну result запишемо 'зима', якщо має значення '2' - 'весна' і так далі. 
Розв'яжіть завдання через switch-case.
|============================
*/
// --------------------------
/** Решение задачи-2
|============================
// вариант-1 ----------------

const season = 1;
let result;

switch (season) {
  case 1:
    result = 'зима';
    break;
  case 2:
    result = 'весна';
    break;
  case 3:
    result = 'літо';
    break;
  case 4:
    result = 'осінь';
    break;
  default:
    result = 'Нет такого времени года';
}
console.log(result);

// вариант-2 ----------------

const season = 1;
let result = '';

if (season === 1) {
  result = 'зима';
} else if (season === 2) {
  result = 'весна';
} else if (season === 3) {
  result = 'літо';
} else if (season === 4) {
  result = 'осінь';
} else {
  result = 'Нет такого времени года';
}
console.log(result);
|============================
*/
// ===========================================================================================
/** Задача-3: Скористайтесь циклом while та виведіть у консоль числа від 0 до 50
|============================
TODO:===================================
Скористайтесь циклом while та виведіть у консоль числа від 0 до 50
|============================
*/
// --------------------------
/** Решение задачи-3
|============================
let i;
const max = 50;

while (i <= max) {
  console.log(i);
  i += 1;
}
|============================
*/
// ===========================================================================================
/** Задача-4: Використовуючи конструкцію if...else, напишіть код, який запитуватиме: "Яка офіційна назва JavaScript?"
|============================
TODO:===================================
Використовуючи конструкцію if...else, напишіть код, який запитуватиме: "Яка офіційна назва JavaScript?"
Якщо користувач вводить "ECMAScript", показати через alert: "Вірно!" інакше відобразити: "Не знаєте? ECMAScript!"

const question = prompt('Яка офіційна назва JavaScript?');
|============================
*/
// --------------------------
/** Решение задачи-4
|============================
// вариант-1 ----------------

const question = prompt('Яка офіційна назва JavaScript?');

if (question === 'ECMAScript') {
  alert('Вірно!');
} else {
  alert('Не знаєте? ECMAScript!');
}

// вариант-2 ----------------

const question = prompt('Яка офіційна назва JavaScript?');

let user = question === 'ECMAScript' ? alert('Вірно!') : alert('Не знаєте? ECMAScript!');

// вариант-3 ----------------

const question =
  prompt('Яка офіційна назва JavaScript?') === 'ECMAScript'
    ? alert('Вірно!')
    : alert('Не знаєте? ECMAScript!');
|============================
*/
// ===========================================================================================
/** Задача-5: Напишіть програму, яка отримає від користувача число (кількість хвилин)
|============================
TODO:===================================
Напишіть програму, яка отримає від користувача число (кількість хвилин)
і виведе у консоль рядок у форматі годин і хвилин
70 === 01:10
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
|============================
*/
// --------------------------
/** Решение задачи-5
|============================
// вариант-1 ----------------

let str = '70';
str = Number(str);
// console.log(typeof str);
let hours = Math.floor(str / 60);
let minutes = str % 60;

hours = String(hours).padStart(2, 0);
minutes = String(minutes).padStart(2, 0);

const time = `${hours}:${minutes}`;

console.log(time);

// вариант-2 ----------------

let str = '70';
str = Number(str);
// console.log(typeof str);
let hours = Number.parseInt(str / 60);
let minutes = str % 60;

hours = String(hours).padStart(2, 0);
minutes = String(minutes).padStart(2, 0);

const time = `${hours}:${minutes}`;

console.log(time);

// вариант-3 (Моё решение) ----------------

let userTime = Number(70);
let hours = Math.floor(userTime / 60);
let minutes = userTime % 60;

hours = String(hours).padStart(2, 0);
minutes = String(minutes).padStart(2, 0);

const result = `${hours}:${minutes}`;
console.log(result);
|============================
*/
// ===========================================================================================
/** Задача-6: Напишіть цикл, який виводить у консоль числа від max до min за спаданням
|============================
TODO:===================================
Напишіть цикл, який виводить у консоль числа від max до min за спаданням

const max = 50;
const min = 23;
|============================
*/
// --------------------------
/** Решение задачи-6
|============================
// вариант-1 ----------------

const max = 50;
const min = 23;
let total = 0;

for (let i = max; i >= min; i -= 1) {
  console.log(i);
  total = max - 1;
}


// вариант-2 ----------------

const max = 50;
const min = 23;

for (let i = max; i >= min; i -= 1) {
  console.log(i);
}

// вариан-3 (решение Михаил while)----

let max = 50;
const min = 23;
let isTrue = true;

while (isTrue) {
  console.log(max);
  max = max - 1;
  if (max < min) {
    isTrue = false;
  }
}
|============================
*/
// ===========================================================================================
/** Задача-7: За допомогою циклу for додайте всі парні числа від min до max
|============================
//TODO:===================================
За допомогою циклу for додайте всі парні числа від min до max

const max = 50;
const min = 23;
|============================
*/
// --------------------------
/** Решение задачи-7
|============================
const max = 50;
const min = 23;
let sum = 0;

// вариант-1 ----------------

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

// вариант-2 (расписанный)----

for (let i = min; i <= max; i += 1) {
  // console.log(i);

  if (i % 2 === 0) {
    console.log(`Парное число ${i}`);
    sum += i;
    console.log(`сумма каждого добавления ${sum}`);
  }
}
console.log(`Общая сумма ${sum}`);
|============================
*/
// ===========================================================================================
/** Задача-8: За допомогою циклу for виведіть парні числа від 2 до 10.
|============================
TODO:===================================
За допомогою циклу for виведіть парні числа від 2 до 10.
|============================
*/
// --------------------------
/** Решение задачи-8
|============================
// вариант-1 ----------------

const min = 2;
const max = 10;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
|============================
*/
// ===========================================================================================
/** Задача-9: Напишіть код, який запитуватиме логін за допомогою prompt і логуватиме результат в консоль браузера
|============================
TODO:===================================
Напишіть код, який запитуватиме логін за допомогою prompt і логуватиме результат в консоль браузера
Якщо відвідувач вводить "Адмін", то prompt запитує пароль.
Якщо нічого не ввели або натиснута клавіша Esc вивести рядок "Скасовано"
Інакше вивести рядок "Я вас не знаю"
Пароль перевіряти так:
Якщо введено пароль "Я головний", то вивести рядок "Доброго дня!" інакше виводити рядок "Невірний пароль!"
|============================
*/
// --------------------------
/** Решение задачи-9
|============================
// вариант-1 ----------------

const userProfile = prompt('Введи логин');

if (userProfile === 'Адмін') {
  const userPassword = prompt('Введи пароль');
  if (userPassword === 'Я головний') {
    alert('Доброго дня!');
  } else {
    alert('Невірний пароль!');
  }
} else if (userProfile === null || userProfile === '') {
  alert('Скасовано');
} else {
  alert('Я вас не знаю');
}

// вариант-2 ----------------

const userAnswerLogin = prompt('Введи логин');

if (userAnswerLogin === 'Адмін') {
  const userAnswerPassword = prompt('Введи пароль');
  userAnswerPassword === 'Я головний'
    ? alert('Доброго дня!')
    : alert('Невірний пароль!');
} else if (userAnswerLogin === null || userAnswerLogin === '') {
  console.log('Скасовано');
} else {
  console.log('Я вас не знаю');
}
|============================
*/
// --------------------------
/** Решение Олег
|============================

// вариант-1 ----------------

const login = prompt('Enter your login:');

if (login === 'Admin') {
  alert('Admin');
  const password = prompt('Enter your password:');
  if (password === "I'm admin") {
    console.log('I know you');
  } else {
    console.log("I don't you");
  }
} else if (!login) {
  alert('Скасовано');
} else {
  alert('Я вас не знаю');
}

// вариант-2 ----------------

const login = prompt('Enter your login:');

if (login === 'Admin') {
  alert('Admin');
  const password = prompt('Enter your password:');
  const answer = `I ${password === "I'm admin" ? '' : "don't "}know you!`;
  console.log(answer);
} else if (!login) {
  alert('Скасовано');
} else {
  alert('Я вас не знаю');
}

// вариант-3 ----------------

const login = prompt('Enter your login:');

if (login === 'Admin') {
  alert('Admin');
  const password = prompt('Enter your password:');
  const answer = `I ${password === "I'm admin" ? '' : "don't "}know you!`;
  console.log(answer);
} else {
  alert(login ? 'Я вас не знаю' : 'Скасовано');
}

// вариант-4 Oleh ----------------

const login = prompt("Enter your login:");

if (login === "Admin") {
  alert("Admin!");
  const password = prompt("Enter your password:");
  const answer = `I ${password === "I'm admin" ? "" : "don't "}know you!`;
  console.log(answer);
} else {
  alert(login ? "I don't know you!" : "Calceled!");
}

const password = "I'm admin"; // "I'm admin" => true

// Шаблонные строки
const result = "I " + (password === "I'm admin" ? "" : "don't ") + "know you";
// console.log(result);
const result2 = `I ${password === "I'm admin" ? "" : "don't "}know you!`;

console.log(result2);

|============================
*/
// ===========================================================================================
/** Задача-10: При завантаженні сторінки користувачеві пропонується в prompt ввести число.
|============================
TODO:===================================
При завантаженні сторінки користувачеві пропонується в prompt ввести число.
Введення додається до значення змінної total.
Операція введення числа триває до того часу, поки користувач не натисне кнопку Cancel в prompt.
Після того, як користувач припинив введення натиснувши на кнопку Cancel,
показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
Робити перевірку,що користувач ввів саме число, а не довільний набір символів, не потрібно.
Використайте цикл while
|============================
*/
// --------------------------
/** Решение задачи-10
|============================
// вариант-1 ----------------

let check = true;
let total = 10;
let num = Number(prompt('Введите число'));

while (check) {
  if (num) {
    total += num;
    num = Number(prompt('Введите число'));
  } else {
    check = false;
    console.log(`Загальна сума введених чисел дорівнює ${total}.`);
  }
}

// вариант-2 ----------------

let num;
let total = 0;

do {
  num = Number(prompt('Введите число'));
  total += num;
} while (num);

alert(`Загальна сума введених чисел дорівнює ${total}.`);
|============================
*/
// ===========================================================================================
/** Задача-11: Напишіть цикл, який пропонує ввести число більше 100 через prompt.
|============================
TODO:===================================
Напишіть цикл, який пропонує ввести число більше 100 через prompt.
Якщо відвідувач ввів інше число - попросити ввести ще раз і так далі.
Цикл має питати число, поки відвідувач не
введе число більше 100, або натисне кнопку скасування в prompt
Передбачається, що відвідувач вводить лише числа.
|============================
*/
// --------------------------
/** Решение задачи-11
|============================
// вариант-1 (Мой вариант) -------

const number = 100;
let userNumber = 50;

do {
  userNumber = Number(prompt(`Введи число більше ${number}`));

  if (!userNumber) {
    alert('Скасовано!');
  } else if (userNumber <= number) {
    userNumber = Number(prompt(`Введи число більше ${number}`));
  } else {
    alert('Ви ввели число більше ста');
  }
} while (userNumber < number && userNumber);
|============================
*/
// ===========================================================================================
/** Задача-12: У змінній min лежить число від 0 до 59. Визначте, в яку чверть години потрапляє це число(у першу, другу, третю чи четверту).
|============================
TODO:===================================
У змінній min лежить число від 0 до 59. 
Визначте, в яку чверть години потрапляє це число(у першу, другу, третю чи четверту).
|============================
*/
// --------------------------
/** Решение задачи-12
|============================
// вариант-1 (Мой вариант) -------

let type = 15;

if (type <= 15) {
  console.log('Перша чверть години');
} else if (type > 15 && type <= 30) {
  console.log('Друга чверть години');
} else if (type > 30 && type <= 45) {
  console.log('Третя чверть години');
} else if (type > 45 && type <= 60) {
  console.log('Четверта чверть години');
} else {
  console.log('Більше години');
}
|============================
*/
// ===========================================================================================
/** Задача-13: Даний рядок, що складається із символів, наприклад, 'abcde'.
|============================
//TODO:===================================
Даний рядок, що складається із символів, наприклад, 'abcde'.
Перевірте, що першим символом цього рядка є буква 'a'.
Якщо це так - виведіть 'так', інакше виведіть 'ні'.
|============================
*/
// --------------------------
/** Решение задачи-13
|============================
const string = 'abcde';

// вариант-1 (Мой вариант) --------

if (string[0] === 'a') {
  alert('Так');
} else {
  alert('Ні');
}

// вариант-2 (Мой вариант) -------

string[0] === 'a' ? console.log('Так') : console.log('Ні');
|============================
*/
// ===========================================================================================
/** Задача-14: Якщо число ділитися на 3 повертати fizz
|============================
TODO:===================================
Якщо число ділитися на 3 повертати fizz
якщо ділитися на 5 повертати buzz
Якщо ділитися на 3 і на 5 повернути fizzbuzz
let num;
fizzBuzz(24);
function fizzBuzz() {
  if (fizzBuzz / 3 === 0) {
    console.log('fizz');
  } else if (fizzBuzz / 5 === 0) {
    console.log('buzz');
  } else if (fizzBuzz / 3 === 0 && fizzBuzz / 5 === 0) {
    console.log('fizzbuzz');
  }
}
console.log(fizzBuzz(24));
|============================
*/
// --------------------------
/** Решение задачи-14
|============================
fizzBuzz(24);
function fizzBuzz(num) {
}

// вариант-1 (Мой вариант) --------



// вариант-2 (Мой вариант) -------
|============================
*/
// ===========================================================================================
/** Задача-15: Напишіть if..else, що відповідає наступному switch:
|============================
//TODO:===================================
Напишіть if..else, що відповідає наступному switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
|============================
*/
// --------------------------
/** Решение задачи-15
|============================
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// вариант-1 (Мой вариант) --------

let browser = 'Chrome';

if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera'
) {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}
|============================
*/
// ===========================================================================================
/** Задача-16: Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
|============================
TODO:===================================
Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
приклад: ф-ція fillArray(3, 'a') повинна повертати масив ['a', 'a', 'a']
|============================
*/
// --------------------------
/** Решение задачи-16
|============================

|============================
*/
// ===========================================================================================
/** Задача-17: Написати ф-цію,яка прибиратиме з масиву всі значення, які перетворюються на false,undefined,null,false,'',0,NaN
|============================
TODO:===================================
Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false, undefined, null, false, '', 0, NaN
const array = [1, 0, 54, "doc", null, "jpg", undefined, "", "png", "exe", false, "mp4", NaN, "hbs"];
|============================
*/
// --------------------------
/** Решение задачи-17
|============================

|============================
*/
// ===========================================================================================
/** Задача-18: Перевірити два масива і дізнатися, чи вони рівні за вмістом
|============================
TODO:===================================
Перевірити два масива і дізнатися, чи вони рівні за вмістом

const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

|============================
*/
// --------------------------
/** Решение задачи-18
|============================

|============================
*/

// :::::::::::::::||| Ярослав модуль-(2-3) Дополнительное занятие. |||:::::::::::::::

/** Задача-1: Напиши функцію, яка перебирає масив логінів і перевіряє чи є ім'я введене в інпут у цьому масиві і у разі...
|============================
Напиши функцію, яка перебирає масив логінів і перевіряє чи є ім'я введене в інпут у цьому масиві і у разі,
якщо є - виводить повідомлення "Доступ дозволено"

const res = prompt('Input your name');
const str = ['Peter', 'John', 'Igor', 'Sasha'];
|============================
*/
// --------------------------
/** Решение задачи-1
|============================
const res = prompt('Input your name');
const array = ['Peter', 'John', 'Igor', 'Sasha'];

// Вариант-1 -------------------------------------
function check(string) {
  for (const item of array) {
    if (item === string) {
      console.log('Доступ дозволено');
      return 'Доступ дозволено';
    }
  }
  // return 'Доступу немає!';
}
// ---------------------
check(res);
// console.log(check(res));

// Вариант-2 -------------------------------------

const checkExpr = function (string, array) {
  for (const item of array) {
    if (item === string) {
      // console.log('Доступ дозволено');
      return 'Доступ дозволено';
    }
  }
  return 'Доступу немає!';
};
// ---------------------
// checkExpr(res);
console.log(checkExpr(res, array));

|============================
*/
// ===========================================================================================
/** Задача-2: Напишіть функцію min(a, b), яка повертає менше із чисел a і b.
|============================
TODO:==============================
Напишіть функцію min(a, b), яка повертає менше із чисел a і b.
|============================
*/
// --------------------------
/** Решение задачи-2
|============================
// Вариант-1 -------------------------------------

function min(a, b) {
  return a < b ? a : b;
}

// Вариант-2 -------------------------------------

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
// ----------------------------------------------
// min(a, b);
console.log(min(5, 10));
|============================
*/
// ===========================================================================================
/** Задача-3: Напишіть функцію min(a, b), яка повертає менше з чисел a, b. Потрібно додати перевірку, що функція отримує числа
|============================
// TODO:==========================
Напишіть функцію min(a, b), яка повертає
менше з чисел a, b
Потрібно додати перевірку, що функція отримує числа
|============================
*/
// --------------------------
/** Решение задачи-3
|============================
// Вариант-1 -------------------------------------
function min(a, b) {
  if (!Number.isNaN(a) && !Number.isNaN(b)) {
    return a < b ? a : b;
  }
  return 'Не число';
}
// -------------------------
// min(a, b);
console.log(min(5, 10));

// Вариант-2 -------------------------------------
function min2(a, b) {
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    return 'Не число';
  }
  return a < b ? a : b;
}
// -------------------------
// min2(a, b);
console.log(min2(5, 'qwe'));
|============================
*/
// ===========================================================================================
/** Задача-4: Сложный тип данных присваивается по ссылке.
|============================
// TODO:==============================
// Що виведе наступний код?
let fruits = ['Яблука', 'Груша', 'Апельсин'];
// Додаємо нове значення в "копію"
let shoppingCart = fruits;
shoppingCart.push('Банан');
// що у fruits?
console.log(fruits.length);
|============================
*/
// --------------------------
/** Решение задачи-4
|============================
// Що виведе наступний код?
let fruits = ['Яблука', 'Груша', 'Апельсин'];
// Додаємо нове значення в "копію"
let shoppingCart = fruits;

console.log(fruits); // ['Яблука', 'Груша', 'Апельсин']
console.log(shoppingCart); // ['Яблука', 'Груша', 'Апельсин']

shoppingCart.push('Банан');
// що у fruits?
console.log(fruits.length); // 4

console.log(fruits); //['Яблука', 'Груша', 'Апельсин', 'Банан']
console.log(shoppingCart); // ['Яблука', 'Груша', 'Апельсин', 'Банан']
|============================
*/
// ===========================================================================================
/** Задача-5: Добавление, удаление, замена элементов масива.
|============================
// TODO:===========================
* Створіть масив styles з елементами «Джаз» та «Блюз».
* Додайте «Рок-н-рол» в кінець.
* Замініть значення «Блюз» на «Класика».
* Видалить перший елемент масиву і виведіть його в консоль.
* Вставте «Реп» і «Реггі» на початок масиву.

const styles = ['jazz', 'blues'];
|============================
*/
// --------------------------
/** Решение задачи-5
|============================
// // Створіть масив styles з елементами «Джаз» та «Блюз».
const styles = ['jazz', 'blues'];
console.log('Изночальный масив', styles);
console.log('--------------------');

// // Додайте «Рок-н-рол» в кінець.
styles.push('Рок-н-рол');
console.log('Добавляем Рок--рол в конец масива', styles);
console.log('--------------------');

// // 1) Замініть значення «Блюз» на «Класика».
styles.splice(styles.indexOf('blues'), 1, 'Класика');
console.log('Меняем значение blues на Класика', styles);
// // 2)Замініть значення «Блюз» на «Класика».
const index = styles.indexOf('jazz');
styles.splice(index, 1, 'Фальклёр');
console.log('Меняем значение blues на Класика вариант-2', styles);
console.log('--------------------');

// // Видалить перший елемент масиву і виведіть його в консоль.
const firstElDel = styles.shift();
console.log('Удаляем первый элемент из масив', firstElDel);
console.log(styles);
console.log('--------------------');

// // 1) Вставте «Реп» і «Реггі» на початок масиву. Вариант-1
styles.splice(0, 0, 'Реп', 'Реггі');
console.log('Добавляем в начало мвсива Реп и Реггі. Вариант-1', styles);
// // 2) Вставте «Реп» і «Реггі» на початок масиву. Вариант-1
styles.unshift('Попса', 'Рок');
console.log('Добавляем в начало мвсива Попса и Рок. Вариант-2', styles);
|============================
*/
// ===========================================================================================
/** Задача-6: нет на видеоэтой этой задачи. ?????
|============================
// TODO:==============================
Напишіть функцію pow(x,n), яка повертає x до ступеня n.
Інакше висловлюючись, множить x він n разів і повертає результат.

function pow(x, n) {
}
console.log(pow(2, 8));
|============================
*/
// --------------------------
/** Решение задачи-6
|============================
function pow(x, n) {
  return x * n;
}
console.log(pow(2, 8));
|============================
*/
// ===========================================================================================
/** Задача-7: нет на видеоэтой этой задачи. ?????
|============================
// TODO:==============================
Напишіть функцію яка сумуватиме сусідні числа і пушитиме їх в новий масив
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];


|============================
*/
// --------------------------
/** Решение задачи-7
|============================

|============================
*/
// ===========================================================================================
/** Задача-8: нет на видеоэтой этой задачи. ?????
|============================
// TODO:==========================
Напишіть функцію logItems(array), яка приймає масив та використовує цикл for, який для кожного
елемента масиву виводитиме повідомлення у форматі <номер елемента> - <значення елемента>
Нумерація елементів має починатися з першого.
['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
[{name: 'Джаз', engl: "jazz", number: 1}, {name: 'Блюз', engl: "blues", number: 2}, {name: 'Рок-н-рол', engl: "rock 'n' roll", number: 3}, {name: 'Реггі', engl: "reggae", number: 4}, {name: 'Реп', engl: "rap", number: 5} ]
|============================
*/
// --------------------------
/** Решение задачи-8
|============================

|============================
*/
// ===========================================================================================
/** Задача-9: Напиши функцію findSmallerNumber(numbers) яка шукає найменше число в масиві.
|============================
// TODO:==========================
Напиши функцію findSmallerNumber(numbers) яка шукає найменше число в масиві.
Додай перевірку що функція отримує масив

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
|============================
*/
// --------------------------
/** Решение задачи- 9
|============================
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// Вариант-1 -------------------------------------------
// * Проверка на масив выполняется с помощью instanceof (универсальный вариант, можно проверить все что угодно - объекты, масивы и т.д. !)

function findSmallerNumber(numbers) {
  if (numbers instanceof Array) {
    return Math.min(...numbers);
  }
}

// Вариант-2 -------------------------------------------
// * Проверка на масив выполняется с помощью Array.isArray()

function findSmallerNumber(numbers) {
  if (Array.isArray(numbers)) {
    return Math.min(...numbers);
  }
}

// Вариант-3 -------------------------------------------
// * Проверка на масив выполняется с помощью Array.isArray()

function findSmallerNumber(numbers) {
  if (Array.isArray(numbers)) {
    const min = Math.min(...numbers);
    return min;
  }
}

// Вариант-4 -------------------------------------------
// * Проверка на масив выполняется с помощью Array.isArray()

function findSmallerNumber(numbers) {
  if (Array.isArray(numbers)) {
    const min = numbers[0];
    for (const number of numbers) {
      if (number < min) {
        min = number;
      }
    }
    return min;
  }
}

// Вызов -----------------------------------------------
console.log(findSmallerNumber([2, 5, 35, 56, 12, 24, 7, 80, 3]));
|============================
*/
// ===========================================================================================
/** Задача-10: Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо...
|============================
TODO:==============================
Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його,
якщо довжина перевищує значення параметрі maxLength.

formatMessage("Curabitur ligula sapien", 16); //Повертає 'Curabitur ligula...'.
formatMessage("Curabitur ligula sapien", 23); //Повертає 'Curabitur ligula sapien'.
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //Повертає 'Nunc sed turpis...'.
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.
|============================
*/
// --------------------------
/** Решение задачи-10
|============================
// Вариант-1 --------------------------------

function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  }
  return message.slice(0, maxLength) + '...';
}

// Вариант-1 --------------------------------

function formatMessage(message, maxLength) {
  return message.length <= maxLength
    ? message
    : message.slice(0, maxLength) + '...';
}

// Вызов -------------------------------------------------------------------------
formatMessage('Curabitur ligula sapien', 16); //Повертає 'Curabitur ligula...'.
formatMessage('Curabitur ligula sapien', 23); //Повертає 'Curabitur ligula sapien'.
formatMessage('Nunc sed turpis a felis in nunc fringilla', 15); //Повертає 'Nunc sed turpis...'.
formatMessage('Nunc sed turpis a felis in nunc fringilla', 41); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.

console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
|============================
*/
// ===========================================================================================
/** Задача-11: Напишіть функцію caclculateAverage(), яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
|============================
TODO:==========================
Напишіть функцію caclculateAverage(), яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
Додати перевірку, що аргументи це числа.

function calculateAverage() {
}
|============================
*/
// --------------------------
/** Решение задачи-11
|============================

|============================
*/
// ===========================================================================================
/** Задача-12: Напиши функцію findLongestWord(string) яка приймає довільний рядок...
|============================
TODO:==========================
Напиши функцію findLongestWord(string) яка приймає довільний рядок що складається лише з розділених слів пробілом (параметр string) 
і повертає найдовше слово у цьому рядку
|============================
*/
// --------------------------
/** Решение задачи-12
|============================

|============================
*/
// ===========================================================================================
/** Задача-13: Напишіть функції для роботи з масивом add(name) додає курс до кінця колекції...
|============================
TODO:==========================
Напишіть функції для роботи з масивом add(name) додає курс до кінця колекції
removeCourse(name) видаляє курс із колекції
updateCourse(oldName, newName) змінює ім'я на нове
|============================
*/
// --------------------------
/** Решение задачи-13
|============================

|============================
*/
// ===========================================================================================
/** Задача-14: Напишіть код для пошуку пароля в масиві
|============================
TODO:==========================
Напишіть код для пошуку пароля в масиві
Через include і тернарний оператор

const passwords = ['ajax123', 'polly456', 'mango789', 'semiBold'];
const password = 'semiBold';
|============================
*/
// --------------------------
/** Решение задачи-14
|============================

|============================
*/
// ===========================================================================================
/** Задача-15: Напишіть скрипт, який замінює регістр кожного символу...
|============================
TODO:==========================
Напишіть скрипт, який замінює регістр кожного символу у рядку на протилежний
Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'
|============================
*/
// --------------------------
/** Решение задачи-15
|============================

|============================
*/
// ===========================================================================================
/** Задача-16: Напишіть функцію unique(arr), яка повертає масив, який містить лише унікальні елементи arr.
|============================
TODO:============================
Напишіть функцію unique(arr), яка повертає масив, який містить лише унікальні елементи arr.

const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
"Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];
|============================
*/
// --------------------------
/** Решение задачи-16
|============================

|============================
*/
// ===========================================================================================
/** Задача-17: Привести масив до одного рівня
|============================
TODO:==============================
Привести масив до одного рівня

const arr = [
[23, 11, ["hello", "world", "Vasya"]]
|============================
*/
// --------------------------
/** Решение задачи-17
|============================

|============================
*/
// ===========================================================================================
/** Задача-18: * Працюємо з колекцією товарів у кошику:
|============================
TODO:==============================
 * Працюємо з колекцією товарів у кошику:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
  { name: '🍎', price: 50 }
  { name: '🍇', price: 70 }
  { name: '🍋', price: 60 }
  { name: '🍓', price: 110 }

const cart = {};
|============================
*/
// --------------------------
/** Решение задачи-18
|============================
const market = {
  cart: [{ name: '🍎', price: 50 }],

  getItems() {
    return this.cart;
  },

  add(product) {
    //   Вариант-1 ----------
    return this.cart.push(product);

    //   Вариант-2 ----------
    // if (product.name !== this.cart.name) {
    //   return this.cart.push(product);
    // }
  },

  remove(productName) {
    for (const item of this.cart) {
      if (item.name === productName) {
        // return this.cart.splice(this.cart.indexOf(item), 1);
        this.cart.splice(this.cart.indexOf(item), 1);
      }
    }
  },

  clear() {
    //   Вариант-1 ----------
    // this.cart.length = 0;

    //   Вариант-2 ----------
    this.cart = [];
  },

  countTotalPrice() {
    let totalSum = 0;

    //   Вариант-1 ----------
    for (const item of this.cart) {
      totalSum += item.price;
    }
    return totalSum;

    //   Вариант-2 ----------
    // for (let i = 0; i < this.cart.length; i += 1) {
    //   totalSum += this.cart[i].price;
    // }
    // return totalSum;
  },

  increaseQuantity(productName) {
    for (const item of this.cart) {
      if (item.name === productName) {
        if (item.quantity === undefined) {
          item.quantity = 1;
          continue;
        }
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.cart) {
      if (item.name === productName) {
        if (item.quantity === undefined) {
          item.quantity = 0;
          //   console.log('Sold out');
          continue;
        }
        if (item.quantity === 0) {
          continue;
        }
        item.quantity -= 1;
      }
    }
  },
};

// ------------------------
// console.log('Итого в корзине:', '🍎');
//
market.add({ name: '🍇', price: 70 });
market.add({ name: '🍋', price: 60 });
market.add({ name: '🍋', price: 60 });
market.add({ name: '🍓', price: 110 });

// console.log(
//   '🍇',
//   '🍋',
//   '🍋',
//   'Добавляем.',
//   'Итого в корзине:',
//   '🍎',
//   '🍇',
//   '🍋',
//   '🍋'
// );
//
market.remove('🍋');
// console.log('🍋', 'Удаляем.', 'Итого в корзине:', '🍎', '🍇', '🍋');
//
// market.clear();
// console.log('Удаляем все из корзины.', 'Итого в корзине: []');
//
market.countTotalPrice();
// console.log(market.countTotalPrice());
// console.log('Сумма товаров в корзине:', market.countTotalPrice());
//
market.increaseQuantity('🍎');
market.increaseQuantity('🍎');
console.log(market.increaseQuantity());
//
market.decreaseQuantity('🍎');
market.decreaseQuantity('🍎');
console.log(market.decreaseQuantity());
//
console.log(market.getItems());
|============================
*/
// ===========================================================================================
