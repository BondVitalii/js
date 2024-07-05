// :::::::::::::::||| Autocheck модуль-2 Масивы, Функции. |||:::::::::::::::

/** Задача-:
|============================

// ================== Решение ==================

// =========== Вариант-1 ===========

// =========== Вариант-2 ===========

// --------------------

// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================

|============================
*/
// ===========================================================================================
/** Задача-25: Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
|============================
Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

* Объявлена функция getCommonElements(array1, array2)
* Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
* Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
* Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
* Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
* Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
* Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
* В цикле for использовались методы includes и push

function getCommonElements(array1, array2) {

}

// ================== Решение ==================
// =========== Вариант-1 ===========
function getCommonElements(array1, array2) {
  const newArr = [];
  for (const arr of array1) {
    if (array2.includes(arr)) {
      newArr.push(arr);
    }
  }
  return newArr;
}

// =========== Вариант-2 ===========
function getCommonElements(array1, array2) {
  const newArr = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArr.push(array1[i]);
    }
  }
  return newArr;
}

// --------------------
console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает []

|============================
*/
// ===========================================================================================
/** Задача-26: Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки.
|============================
Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
* Объявлена функция calculateTotalPrice(order)
* Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
* Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
* Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
* Вызов функции calculateTotalPrice([]) возвращает 0
* Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму

function calculateTotalPrice(order) {
  let total = 0;

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  return total;
}

// ================== Решение ==================

function calculateTotalPrice(order) {
  let total = 0;

  for (const item of order) {
    total += item;
  }
  return total;
}
// Вызов ---------------------
console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138
console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116
console.log(calculateTotalPrice([])); // возвращает 0

// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. 
Тело цикла будет выполняться для значения каждого элемента. 
Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

for (const variable of iterable) {
  // тело цикла
}
variable — переменная, которая будет хранить значение элемента на каждой итерации
iterable — коллекция, которая имеет перечислимые элементы, например массив
const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}
|============================
*/
// ===========================================================================================
/** Задача-27: Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
|============================
Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
* Объявлена функция filterArray(numbers, value)
* Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
* Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
* Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
* Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
* Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
* Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
* Функция filterArray() использует цикл for..of

function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}

// ================== Решение ==================

function filterArray(numbers, value) {
  const filteredNumbers = [];

  for(const number of numbers){
    if(number > value){
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}

// Вызов --------------------
console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает []
|============================
*/
// ===========================================================================================
/** Задача-28: Дополни выражения остатка от деления так, чтобы код проходил тесты.
|============================
Дополни выражения остатка от деления так, чтобы код проходил тесты.
* Объявлена переменная a
* Значение переменной a это число 0
* Объявлена переменная b
* Значение переменной b это число 1
* Объявлена переменная c
* Значение переменной c это число 3
* Объявлена переменная d
* Значение переменной d это число 5
* Объявлена переменная e
* Значение переменной e это число 2

const a = 3 % ;
const b = 4 % ;
const c = 11 % ;
const d = 12 % ;
const e = 8 % ;

// ================== Решение ==================

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

// --------------------
console.log(a); // 0
console.log(b); // 1
// ___________________________________________________________________________________________
// ======= Теория к задаче-28 ================================================================
Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает целочисленный остаток от деления двух чисел - делимого и делителя.

5 % 1 = 0;
// 5, разделенное на 1, равно 5, а остаток - 0

5 % 2 = 1;
//  5, разделенное на 2, равно 2, а остаток - 1

5 % 3 = 2;
//  5, разделенное на 3, равно 1, а остаток - 2

5 % 4 = 1;
//  5, разделенное на 4, равно 1, а остаток - 1

5 % 5 = 0;
//  5, разделенное на 5, равно 1, а остаток - 0
|============================
*/
// ===========================================================================================
/** Задача-29: Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
|============================
Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).
* Объявлена функция getEvenNumbers(start, end)
* Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
* Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
* Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
* Вызов функции getEvenNumbers(8, 8) возвращает [8]
* Вызов функции getEvenNumbers(7, 7) возвращает []
* Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

function getEvenNumbers(start, end) {}

// ================== Решение ==================

function getEvenNumbers(start, end) {
  const arr = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

// Вызов ---------------------------
console.log(getEvenNumbers(2, 5)); // возвращает [2, 4]
console.log(getEvenNumbers(3, 11)); // возвращает [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); // возвращает [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); // возвращает [8]
console.log(getEvenNumbers(7, 7)); // возвращает []
|============================
*/
// ===========================================================================================
/** Задача-30: Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
|============================
Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
* Объявлена переменная start со значением 6
* Объявлена переменная end со значением 27
* Объявлена переменная number без инициализации
* Итоговое значение переменной number равно 10
* В цикле for используется break для выхода до завершения всех итераций цикла

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
  }
}

// ================== Решение ==================

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
// --------------------
console.log(number); // равно 10

// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
Прервать выполнение цикла можно в любой момент. Для этого существует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}

console.log("Лог после цикла");
|============================
*/
// ===========================================================================================
/** Задача-31: Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:...
|============================
Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
* возвращала первое число от start до end, которое делится на divisor без остатка
* не использовала оператор break
* не использовала переменную number
* Объявлена функция findNumber(start, end, divisor)
* Вызов findNumber(2, 6, 5) возвращает 5
* Вызов findNumber(8, 17, 3) возвращает 9
* Вызов findNumber(6, 9, 4) возвращает 8
* Вызов findNumber(16, 35, 7) возвращает 21
* Вызов findNumber() со случайным набором чисел возвращает верный результат
* В цикле for не должен использоваться break для выхода до завершения всех итераций цикла

function findNumber(start, end, divisor) {
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      break;
    }
  }
  return number;
}

// ================== Решение ==================

function findNumber(start, end, divisor) {
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return number = i;
    }
  }
}

// --------------------
console.log(findNumber(2, 6, 5)); // возвращает 5
console.log(findNumber(8, 17, 3)); // возвращает 9
console.log(findNumber(6, 9, 4)); // возвращает 8
console.log(findNumber(16, 35, 7)); // возвращает 21

// ___________________________________________________________________________________________
// ======= Теория к задаче-31 ================================================================

Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return.

В примере ищем число 3. Как только выполнится условие if, делаем возврат, который прервёт выполнение цикла и функции.

function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
      return i;
    }
  }

  // Этот console.log не выполнится
  console.log("Лог после цикла в теле функции");
}

const result = fn();
console.log("Лог после выхода из функции");
console.log(`Результат выполнения функции ${result}`);
|============================
*/
// ===========================================================================================
/** Задача-32: Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет...
|============================
Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
* При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
* Объявлена функция includes(array, value)
* Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
* Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
* Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
* Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
* Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
* Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
* Вызов includes() для случайного массива со случайным value возвращает верный boolean
* В функции includes используется for, return, но не метод массива includes

function includes(array, value) {}

// ================== Решение ==================

function includes(array, value) {
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}
// Вызов --------------------
console.log(includes([1, 2, 3, 4, 5], 3)); // возвращает true
console.log(includes([1, 2, 3, 4, 5], 17)); // возвращает false
console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')); // возвращает true
console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')); // возвращает false
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum')); // возвращает true
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')); // возвращает false
|============================
*/

// :::::::::::::::||| Autocheck модуль-3  Объекти, Деструктуризація та spread/rest|||:::::::::::::::

/** Задача-1: / Объект /
|============================
Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:
* imgUrl - фотография, значение "https://via.placeholder.com/640x480";
* descr - описание, значение "Spacious apartment in the city center";
* rating - рейтинг, значение 4;
* price - цена, значение 2153;
* tags - метаинформация, массив ["premium", "promoted", "top"].
* Объявлена переменная apartment
* Значение переменной apartment это объект
* В объекте есть свойство imgUrl
* Значение свойства imgUrl это строка "https://via.placeholder.com/640x480"
* В объекте есть свойство descr
* Значение свойства descr это строка "Spacious apartment in the city center"
* В объекте есть свойство rating
* Значение свойства rating это число 4
* В объекте есть свойство price
* Значение свойства price это число 2153
* В объекте есть свойство tags
* Значение свойства tags это массив ["premium", "promoted", "top"]

const apartment = ;
// ================== Решение ==================

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
// --------------------
console.log(apartment); // Объект
console.log(apartment.imgUrl); // https://via.placeholder.com/640x480
console.log(apartment.descr); // Spacious apartment in the city center

// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================

Объекты позволяют описать и сгруппировать характеристики объектов реального мира - пользователя, книги, продукта магазина, чего угодно. Объекты ещё называют словарями, то есть они содержат термины (свойства) и их определения (значения).

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

Для объявления используются фигурные скобки {} - литерал объекта. При создании объекту можно добавить свойства, каждое из которых описывается парами ключ:значение. Ключ ещё называют именем свойства и это всегда строка. Значением свойства могут быть любые типы: примитивы, массивы, объекты, були, функции и т. п. Свойства разделяются запятой.
|============================
*/
// ===========================================================================================
/** Задача-2: Значением свойства может быть другой объект. Это используется для хранения вложенных и группированных данных.
|============================

Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

* name - имя владельца, значение "Henry";
* phone - телефон, значение "982-126-1588";
* email - почта, значение "henry.carter@aptmail.com".
* Объявлена переменная apartment
* Значение переменной apartment это объект
* У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
* В объекте apartment есть свойство owner
* Значение свойства owner это объект
* В объекте owner есть свойство name
* Значение свойства name это "Henry"
* В объекте owner есть свойство phone
* Значение свойства phone это "982-126-1588"
* В объекте owner есть свойствао email
* Значение свойства email это "henry.carter@aptmail.com"

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// ================== Решение ==================

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
// ------------------------------------
console.log(apartment); // Объект apartment
console.log(apartment.rating); // 4
console.log(apartment.owner); // {name: 'Henry', phone: '982-126-1588', email: 'henry.carter@aptmail.com'}
console.log(apartment.owner.name); // Henry


// ___________________________________________________________________________________________
// ======= Теория к задаче-2 ================================================================
Значением свойства может быть другой объект. Это используется для хранения вложенных и группированных данных.

Например, статистика пользователя социальной сети состоит из количества последователей, просмотров и лайков, и хранить эти данные удобнее всего в виде объекта. Тоже самое с местоположением, отдельно страна и город.

В будущем это можно будет использовать для поиска пользователей по стране, городу, минимальному или максимальному количеству последователей и т. д.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
|============================
*/
// ===========================================================================================
/** Задача-3: Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства. Синтаксис «через точку» используется в большинстве случаев и подходит тогда, когда мы заранее знаем имя (ключ) свойства к которому хотим получить доступ.
|============================
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
* aptRating - рейтинг;
* aptDescr - описание;
* aptPrice - цена;
* aptTags - теги.
* Объявлена переменная apartment
* Значение переменной apartment это объект
* У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
* Объявлена переменная aptRating
* Значение переменной aptRating это число 4
* Объявлена переменная aptDescr
* Значение переменной aptDescr это строка "Spacious apartment in the city center"
* Объявлена переменная aptPrice
* Значение переменной aptPrice это число 2153
* Объявлена переменная aptTags
* Значение переменной aptTags это массив строк ["premium", "promoted", "top"]

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment;
const aptDescr = apartment;
const aptPrice = apartment;
const aptTags = apartment;

// ================== Решение ==================

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// -------------------------------
const aptRating = apartment.rating;
console.log(aptRating); // 4

console.log(apartment.rating); // 4

const aptDescr = apartment.descr;
console.log(aptDescr); // Spacious apartment in the city center
const aptPrice = apartment.price;
console.log(aptPrice); // 2153
const aptTags = apartment.tags;
console.log(aptTags); // ['premium', 'promoted', 'top']

// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства. Синтаксис «через точку» используется в большинстве случаев и подходит тогда, когда мы заранее знаем имя (ключ) свойства к которому хотим получить доступ.

На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined
|============================
*/
// ===========================================================================================
/** Задача-4: Получение доступа к вложенным свойствам объекта через точку, к масиву в объекте через точку и квадратные скобки.
|============================
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
* ownerName - имя владельца;
* ownerPhone - телефон владельца;
* ownerEmail - почта владельца;
* numberOfTags - количество элементов массива в свойстве tags;
* firstTag - первый элемент массива в свойстве tags;
* lastTag - последний элемент массива в свойстве tags.
* Объявлена переменная apartment с помощью const
* Значение переменной apartment это объект
* Объявлена переменная ownerName с помощью const
* Значение переменной ownerName это строка "Henry"
* Объявлена переменная ownerPhone с помощью const
* Значение переменной ownerPhone это "982-126-1588"
* Объявлена переменная ownerEmail с помощью const
* Значение переменной ownerEmail это "henry.carter@aptmail.com"
* Объявлена переменная numberOfTags с помощью const
* Значение переменной numberOfTags это 3
* Объявлена переменная firstTag с помощью const
* Значение переменной firstTag это "premium"
* Объявлена переменная lastTag с помощью const
* Значение переменной lastTag это "top"

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment;
const ownerPhone = apartment;
const ownerEmail = apartment;
const numberOfTags = apartment;
const firstTag = apartment;
const lastTag = apartment;

// ================== Решение ==================

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

const ownerName = apartment.owner.name;
console.log(ownerName);                            // Henry
const ownerPhone = apartment.owner.phone;
console.log(ownerPhone);                          // 982-126-1588
const ownerEmail = apartment.owner.email;
console.log(ownerEmail);                          // henry.carter@aptmail.com
const numberOfTags = apartment.tags.length;
console.log(numberOfTags);                        // 3
const firstTag = apartment.tags[0];
console.log(firstTag);                           // premium
const lastTag = apartment.tags[2];
console.log(lastTag);                            // top

// ___________________________________________________________________________________________
// ======= Теория к задаче-4 ================================================================
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};
Для доступа к вложенным свойствам используется цепочка обращений «через точку». Например, если необходимо получить значение страны пользователя, записываем user.location.country, где user.location это обращение (путь) к объекту в свойстве location, а user.locaton.country обращение к свойству country в этом объекте. То есть, «точка» указывает следующую вложенность.

const location = user.location;
console.log(location); // Объект location

const country = user.location.country;
console.log(country); // "Jamaica"
Если значение свойства это массив, то в нашем примере user.hobbies - обращение к этому массиву. Далее, можно получить доступ к его элементам через квадратные скобки и индекс или использовать свойства и методы.

const hobbies = user.hobbies;
console.log(hobbies); // ["swiming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swiming"

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3
|============================
*/
// ===========================================================================================
/** Задача-5: Получение доступа - Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]
|============================
Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».
* aptRating - рейтинг;
* aptDescr - описание;
* aptPrice - цена;
* aptTags - теги.
* Объявлена переменная apartment
* Значение переменной apartment это объект
* Объявлена переменная aptRating
* Значение переменной aptRating это 4
* Объявлена переменная aptDescr
* Значение переменной aptDescr это "Spacious apartment in the city center"
* Объявлена переменная aptPrice
* Значение переменной aptPrice это 2153
* Объявлена переменная aptTags
* Значение переменной aptTags это ["premium", "promoted", "top"]

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment;
const aptDescr = apartment;
const aptPrice = apartment;
const aptTags = apartment;
// Change code above this line

// ================== Решение ==================

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// -----------------------------------------
console.log(aptRating); // 4
console.log(aptDescr); // Spacious apartment in the city center
console.log(aptPrice); // 2153
console.log(aptTags); // ['premium', 'promoted', 'top']

// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче-5 ================================================================
Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]. Похоже на обращение к элементу массива с отличием в том, что в скобках указывается не индекс элемента, а имя свойства как строка.

Синтаксис «квадратных скобок» используется значительно реже. Как правило в случаях когда имя свойства заранее неизвестно или оно хранится в переменной (как значение параметра функции, например).

На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book["genres"];
console.log(bookGenres); // ["historical prose", "adventure"]

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // "Bernard Cornwell"
|============================
*/
// ===========================================================================================
/** Задача-6: Изменение свойств объекта.
|============================
Дополни код обновив значения свойств объекта apartment:
* цену в свойстве price на 5000;
* рейтинг квартиры в свойстве rating на 4.7;
* имя владельца во вложенном свойстве name на "Henry Sibola";
* массив тегов в свойстве tags добавив в конец строку "trusted".
* Объявлена переменная apartment
* Значение переменной apartment это объект
* Значение вложенного свойства price это число 5000
* Значение вложенного свойства rating это число 4.7
* Значение вложенного свойства name это строка "Henry Sibola"
* Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"]

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// ================== Решение ==================

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push('trusted');

// ___________________________________________________________________________________________
// ======= Теория к задаче-6 ================================================================
После того, как объект создан, значение его свойств можно изменить. Для этого необходимо обратиться к ним по имени, например, «через точку», и присвоить новое значение.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

book.rating = 9;
book.public = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.public); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]
|============================
*/
// ===========================================================================================
/** Задача-7: Добавление свойств в объект.
|============================
Добавь объекту apartment несколько новых свойств:
* area - площадь в квадратных метрах, число 60;
* rooms - количество комнат, число 3;
* location - местоположение квартиры, обьект со следующими вложенными свойствами;
* country - страна, строка "Jamaica";
* city - город, строка "Kingston".
* Объявлена переменная apartment
* Значение переменной apartment это объект
* Значение вложенного свойства area это число 60
* Значение вложенного свойства rooms это число 3
* Значение вложенного свойства location это объект
* Значение вложенного свойства location.country это строка "Jamaica"
* Значение вложенного свойства location.city это строка "Kingston"

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// ================== Решение ==================

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {country: "Jamaica", city: "Kingston"};

// ___________________________________________________________________________________________
// ======= Теория к задаче-7 ================================================================
Операция добавления нового свойства после создания объекта ничем не отличается от изменения значения уже существующего свойства. Если при записи значения по имени, такого свойства в объекте нет, оно будет создано.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]
|============================
*/
// ===========================================================================================
/** Задача-8: Синтаксис коротких свойств (shorthand properties). Иногда, при создании объекта, значение свойства необходимо взять из переменной или параметра функции с таким же именем, как и само свойство.
|============================
Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

* Объявлена переменная product
* Значение переменной product это объект
* Значение вложенного свойства name это строка "Repair Droid"
* Значение вложенного свойства price это число 2500
* Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
* Значение вложенного свойства tags это массив ["on sale", "trending", "best buy"]

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {

};

// ================== Решение ==================

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче-8 ================================================================
Иногда, при создании объекта, значение свойства необходимо взять из переменной или параметра функции с таким же именем, как и само свойство.
Синтаксис в следующем примере слишком громоздкий, потому что приходится дублировать имя свойства и имя переменной, в которой хранится необходимое значение.

const name = "Генри Сибола";
const age = 25;

const user = {
  name: name,
  age: age,
};

console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25

Синтаксис коротких свойств (shorthand properties) решает эту проблему, позволяя использовать имя переменной как имя свойства, а её значение как значение свойства.

const name = "Генри Сибола";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25

То есть, при объявлении объекта достаточно указать только имя свойства, а значение будет взято из переменной с аналогичным именем.
|============================
*/
// ===========================================================================================
/** Задача-9: Синтаксис вычисляемых свойств (computed properties).  Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с именем, которое мы заранее не знаем, потому что оно хранится как значение переменной или как результат выполнения функции.
|============================
Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
* Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".
* Объявлена переменная credentials
* Значение переменной credentials это объект
* В объекте credentials есть свойство email
* Значение вложенного свойства email это строка "henry.carter@aptmail.com"
* В объекте credentials есть свойство password
* Значение вложенного свойства password это строка "jqueryismyjam"

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {

};

// ================== Решение ==================

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
[emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam",
};

// ___________________________________________________________________________________________
// ======= Теория к задаче-9 ================================================================
Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с именем, которое мы заранее не знаем, потому что оно хранится как значение переменной или как результат выполнения функции.

Раньше для этого необходимо было сначала создать объект, а потом добавлять свойства через квадратные скобки, что не совсем удобно.

const propName = "name";
const user = {
  age: 25
};

user[propName] = "Генри Сибола";
console.log(user.name); // "Генри Сибола"
Синтаксис вычисляемых свойств (computed properties) помогает избежать лишнего кода и в некоторых случаях упростить его. Значением вычисляемого свойства может быть любое валидное выражение.

const propName = "name";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола"
};

console.log(user.name); // "Генри Сибола"
|============================
*/
// ===========================================================================================
/** Задача-10: Цикл for...in
|============================
Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
* Объявлена переменная apartment
* Значение переменной apartment это объект
* Объявлена переменная keys
* Значение переменной keys это массив ["descr", "rating", "price"]
* Объявлена переменная values
* Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

// ================== Решение ==================

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for(const key in apartment){
  keys.push(key);
  values.push(apartment[key]);
}

// ___________________________________________________________________________________________
// ======= Теория к задаче-10 ================================================================
В отличии от массива или строки, объект - это не итерируемая сущность, то есть его нельзя перебрать циклами for или for...of. Для перебора объектов используется специальный цикл for...in, который перебирает ключи объекта object.

for (key in object) {
  // инструкции
}
Переменная key доступная только в теле цикла. На каждой итерации в неё будет записано значение ключа (имя) свойства. Для того чтобы получить значение свойства с таким ключом (именем), используется синтаксис квадратных скобок.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}
|============================
*/
// ===========================================================================================
/** Задача-11: Цикл for...in проверка на собственное свойство.
|============================
Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
* Объявлена переменная advert.
* Значение переменной advert это объект.
* Объявлена переменная apartment.
* Значение переменной apartment это объект.
* Объявлена переменная keys.
* Значение переменной keys это массив ["descr", "rating", "price"].
* Объявлена переменная values.
* Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].

const keys = [];
const values = [];

const advert = {
  service: "apt",
};

const apartment = Object.create(advert);

apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

// ================== Решение ==================

const keys = [];
const values = [];

const advert = {
  service: 'apt',
};

const apartment = Object.create(advert);

apartment.descr = 'Spacious apartment in the city center';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
}

// ======= Теория к задаче-11 ================================================================

Разберём концепцию собственных и несобственных свойств объекта и научимся правильно использовать цикл for...in.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4
Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет в объекте dog - это несобственное свойство из объекта animal.

Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта. Эта особенность мешает, так как мы всегда хотим перебрать только собственные свойства. Для того чтобы узнать есть в объекте собственное свойство или нет, используется метод hasOwnProperty(key), который возвращает true или false.

// ❌ Возвращает true для всех свойств
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Возвращает true только для собственных свойств
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false
Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Если это собственное свойство - выполняем тело if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Если это не собственное свойство - ничего не делаем
}
|============================
*/
// ===========================================================================================
/** Задача-12: Функцию countProps(object), считает и возвращает количество собственных свойств объекта.
|============================
Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. 
Используй переменную propCount для хранения количества свойств объекта.
* Объявлена функция countProps(object)
* Вызов countProps({}) возвращает 0
* Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
* Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
* Функция подсчитывает только собственные свойства объекта

function countProps(object) {
  let propCount = 0;

  return propCount;
}

// ================== Решение ==================

function countProps(object) {
  let propCount = 0;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}

console.log(countProps({})); // возвращает 0
console.log(countProps({ name: 'Mango', age: 2 })); // возвращает 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // возвращает 3
|============================
*/
// ===========================================================================================
/** Задача-13: / метод Object.keys() и цикл for...of. / Перебери объект apartment используя метод Object.keys() и цикл for...of.
|============================
Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
* Объявлена переменная apartment.
* Значение переменной apartment это объект.
* Объявлена переменная keys.
* Значение переменной keys это массив ["descr", "rating", "price"].
* Значение переменной keys получено с помощью метода Object.keys().
* Объявлена переменная values.
* Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
* Значение переменной values получено с помощью цикла for...of.

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];

const keys = apartment;

// ================== Решение ==================

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const values = [];

const keys = Object.keys(apartment);

for (const key of Object.keys(apartment)) {
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);

// ======= Теория к задаче-13 ================================================================
У встроенного класса Object есть несколько полезных методов для работы с объектами. 
Первый из них это Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств. 
Если в объекте нет свойств, метод вернёт пустой массив.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта, 
не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

const book = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}
Мы перебираем массив ключей объекта и на каждой итерации получаем значение свойства с таким ключом.
|============================
*/
// ===========================================================================================
/** Задача-14: / метод Object.keys() / Выполни рефакторинг функции countProps(object) используя метод Object.keys()
|============================
Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.
* Объявлена функция countProps(object)
* Вызов countProps({}) возвращает 0
* Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
* Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
* Функция подсчитывает только собственные свойства объекта
* Функция использует метод Object.keys() и, возможно, цикл for...of

function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}

// ================== Решение ==================

function countProps(object) {
  let propCount = 0;
  
  // =========== Вариант-1 ===========

  const keys = Object.keys(object);

  for (const key of keys) {
    propCount += 1;
  }

  // =========== Вариант-2 ===========

  for (const key of Object.keys(object)) {
    propCount += 1;
  }
  return propCount;
}

console.log(countProps({})); // возвращает 0
console.log(countProps({ name: 'Mango', age: 2 })); // возвращает 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // возвращает 3

|============================
*/
// ===========================================================================================
/** Задача-15: / метод Object.values(obj) / Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. 
|============================
Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. 
Используй методы Object.keys() и Object.values().

* Объявлена переменная apartment
* Значение переменной apartment это объект
* Объявлена переменная keys
* Значение переменной keys это массив ["descr", "rating", "price"]
* Объявлена переменная values
* Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
* Для получения массива ключей объекта apartment используется Object.keys()
* Для получения массива значений объекта apartment используется Object.values()

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = apartment;
const values = apartment;

// ================== Решение ==================

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys);
console.log(values);

// ======= Теория к задаче-15 ================================================================

Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, 
то метод Object.values(obj) возвращает массив значений его собственных свойств. 
Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

Массив значений свойств также можно перебрать циклом for...of, например для получения общей суммы числовых значений.

|============================
*/
// ===========================================================================================
/** Задача-16: Напиши функцию принимающую объект зарплат, где ключ это имя сотрудника, значение это зарплата. Функция расчитывает общую сумму зарплат и возвращает её.
|============================
Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, 
где имя свойства это имя сотрудника, а значение свойства это зарплата. 
Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. 
Используй переменную totalSalary для хранения общей суммы зарплаты.

* Объявлена функция countTotalSalary(salaries)
* Вызов countTotalSalary({}) возвращает 0
* Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
* Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
* Функция учитывает только собственные свойства объекта

function countTotalSalary(salaries) {
  let totalSalary = 0;

  return totalSalary;
}

// ================== Решение ==================

// =========== Вариант-1 =========== (for in) и (.hasOwnProperty())

function countTotalSalary(salaries) {
  let totalSalary = 0;

  for(const key in salaries){
    if(salaries.hasOwnProperty(key)){
      totalSalary += salaries[key];
    }
  }

  return totalSalary;
}

// =========== Вариант-2 =========== (Object.keys()) и (for of)

function countTotalSalary(salaries) {
  let totalSalary = 0;

  for(const key of Object.keys(salaries)){
    totalSalary += salaries[key];
  }

  return totalSalary;
}

// =========== Вариант-3 =========== (Object.keys()) и (for of)

function countTotalSalary(salaries) {
  let totalSalary = 0;

  const keys = Object.keys(salaries);

  for (const key of keys) {
    totalSalary += salaries[key];
  }

  return totalSalary;
}

// --------
console.log(countTotalSalary({})); // возвращает 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // возвращает 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // возвращает 400
|============================
*/
// ===========================================================================================
/** Задача-17: / Перебор масива объектов циклом for...of / Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
|============================

Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
* Объявлена переменная colors
* Значение переменной colors это массив
* Объявлена переменная hexColors
* Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
* Объявлена переменная rgbColors
* Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

// ================== Решение ==================

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

// ======= Теория к задаче-17 ================================================================

В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. Это значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];
Для перебора такого массива используется стандартный цикл for...of. Значения свойств каждого объекта можно получить используя синтаксис «через точку», так как в каждом объекте набор свойств и их имена будут одинаковые, отличаются только значения.

for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
|============================
*/
// ===========================================================================================
/** Задача-18: Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
|============================
Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. 
Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). 
Если продукт с таким названием не найден, функция должна возвращать null.
* Объявлена функция getProductPrice(productName).
* Вызов getProductPrice("Radar") возвращает 1300.
* Вызов getProductPrice("Grip") возвращает 1200.
* Вызов getProductPrice("Scanner") возвращает 2700.
* Вызов getProductPrice("Droid") возвращает 400.
* Вызов getProductPrice("Engine") возвращает null.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
}

// ================== Решение ==================

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}

console.log(getProductPrice('Radar')); // возвращает 1300.
console.log(getProductPrice('Grip')); // возвращает 1200.
console.log(getProductPrice('Scanner')); // возвращает 2700.
console.log(getProductPrice('Droid')); // возвращает 400.
console.log(getProductPrice('Engine')); // возвращает null.
|============================
*/
// ===========================================================================================
/** Задача-19: Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
|============================
Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. 
Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. 
Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
* Объявлена функция getAllPropValues(propName)
* Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
* Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
* Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
* Вызов getAllPropValues("category") возвращает []

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {

}

// ================== Решение ==================
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

// =========== Вариант-1 ===========

function getAllPropValues(propName) {
  const arr = [];

  for (const product of products) {
    if (product[propName]) {
      arr.push(product[propName]);
    }
  }
  return arr;
}

// =========== Вариант-2 ===========

function getAllPropValues(propName) {
  const newArry = [];

  for (const product of products) {
    const value = product[propName];
    if (value) {
      newArry.push(value);
    }
  }
  return newArry;
}

// Вызов ----------
console.log(getAllPropValues('name')); // возвращает ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues('quantity')); // возвращает [4, 3, 7, 9]
console.log(getAllPropValues('price')); // возвращает [1300, 2700, 400, 1200]
console.log(getAllPropValues('category')); // возвращает []
|============================
*/
// ===========================================================================================
/** Задача-20: Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
|============================
Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. 
Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

* Объявлена функция calculateTotalPrice(productName)
* Вызов calculateTotalPrice("Blaster") возвращает 0
* Вызов calculateTotalPrice("Radar") возвращает 5200
* Вызов calculateTotalPrice("Droid") возвращает 2800
* Вызов calculateTotalPrice("Grip") возвращает 10800
* Вызов calculateTotalPrice("Scanner") возвращает 8100

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {

}

// ================== Решение ==================

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}

// Вызов ----------
console.log(calculateTotalPrice('Blaster')); // возвращает 0
console.log(calculateTotalPrice('Radar')); // возвращает 5200
console.log(calculateTotalPrice('Droid')); // возвращает 2800
console.log(calculateTotalPrice('Grip')); // возвращает 10800
console.log(calculateTotalPrice('Scanner')); // возвращает 8100
|============================
*/
// ===========================================================================================
/** Задача-21: / Деструктуризация объекта /
|============================
Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.
* Объявлена переменная highTemperatures
* Значение переменной highTemperatures это объект
* Объявлена переменная yesterday с помощью деструктуризации
* Значение переменной yesterday это число 28
* Объявлена переменная today с помощью деструктуризации
* Значение переменной today это число 26
* Объявлена переменная tomorrow с помощью деструктуризации
* Значение переменной tomorrow это число 33
* Объявлена переменная meanTemperature
* Значение переменной meanTemperature это число 29
* Используется синтаксис деструктуризации объекта highTemperatures

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;

const meanTemperature = (yesterday + today + tomorrow) / 3;

// ================== Решение ==================

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(yesterday);
console.log(today);
console.log(tomorrow);
console.log(meanTemperature);

// ___________________________________________________________________________________________
// ======= Теория к задаче-21 ================================================================

Сложные данные всегда представлены объектом. Множественные обращения к свойствам объекта визуально загрязняют код.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const accessType = book.public ? "публичном" : "закрытом";
const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;

Деструктуризация позволяет «распаковать» значения свойств объекта в локальные переменные. Это делает код в месте их использования менее «шумным».

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

// Деструктуризируем
const { title, author, public, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = public ? "публичном" : "закрытом";
const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;

Деструктуризация всегда находится в левой части операции присвоения. Переменным внутри фигурных скобок присваиваются значения свойств объекта. Если имя переменной и имя свойства совпадают, то происходит присваивание, в противном случае ей будет присвоено undefined. Порядок объявления переменных в фигурных скобках не важен.
|============================
*/
// ===========================================================================================
/** Задача-22: / Деструктуризация объекта с добавлением значения по умолчанию /
|============================
В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
* Объявлена переменная highTemperatures
* Значение переменной highTemperatures это объект
* Объявлена переменная highTemperatures
* Значение переменной highTemperatures это объект
* Объявлена переменная yesterday с помощью деструктуризации
* Значение переменной yesterday это число 28
* Объявлена переменная today с помощью деструктуризации
* Значение переменной today это число 26
* Объявлена переменная tomorrow с помощью деструктуризации
* Значение переменной tomorrow это число 33
* Объявлена переменная icon с помощью деструктуризации
* Значение переменной icon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
* Используется деструктуризация объекта

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;
const icon = highTemperatures.icon;

const meanTemperature = (yesterday + today + tomorrow) / 3;

// ================== Решение ==================

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

// --------------------------------
console.log(meanTemperature); // 29

// ___________________________________________________________________________________________
// ======= Теория к задаче- ==================================================================

Для того чтобы избежать присвоения undefined при деструктуризации несуществующих свойств, можно задать переменным значения по умолчанию, которые будут присвоены только в случае когда в объекте нет свойства с таким именем.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Добавим картинку обложки если её нет в объекте книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480"
|============================
*/
// ===========================================================================================
/** Задача-23: / Деструктуризация объекта с изменением имён свойств и добавлением значения по умолчанию /
|============================
Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
* Объявлена переменная highTemperatures
* Значение переменной highTemperatures это объект
* Объявлена переменная highYesterday
* Значение переменной highYesterday это число 28
* Объявлена переменная highToday
* Значение переменной highToday это число 26
* Объявлена переменная highTomorrow
* Значение переменной highTomorrow это число 33
* Объявлена переменная highIcon
* Значение переменной highIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
* Используется деструктуризация объекта

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};


const highYesterday = highTemperatures.yesterday;
const highToday = highTemperatures.today;
const highTomorrow = highTemperatures.tomorrow;
const highIcon = highTemperatures.icon;


const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ================== Решение ==================

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ----------------
console.log(meanTemperature); 29;

// ___________________________________________________________________________________________
// ======= Теория к задаче-23 ================================================================
При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства. Сначала пишем имя свойства из которого хотим получить значение, после чего ставим двоеточие и пишем имя переменной в которую необходимо поместить значение этого свойства.

const firstBook = {
  title: "Последнее королевство",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // Последнее королевство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смешного человека",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смешного человека
console.log(secondCoverImage); // https://via.placeholder.com/640/480
Такая запись читается как «Создать переменную firstTitle, в которую поместить значение свойства title из объекта firstBook» и т. д.
|============================
*/
// ===========================================================================================
/** Задача-24: / Деструктуризация объекта в цикле for...of /
|============================
Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
* Объявлена переменная colors
* Значение переменной colors это массив
* Объявлена переменная hexColors
* Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
* Объявлена переменная rgbColors
* Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
* Для перебора массива используется цикл for...of
* В цикле for...of используется деструктуризация объекта

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

// ================== Решение ==================

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

// =========== Вариант-1 ===========

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
// =========== Вариант-2 ===========

for (const color of colors) {
  const { hex, rgb } = color;
  hexColors.push(hex);
  rgbColors.push(rgb);
}
// ------------
console.log(hexColors);
console.log(rgbColors);

// ___________________________________________________________________________________________
// ======= Теория к задаче-24 ================================================================

При переборе массива объектов циклом for...of получаются множественные обращения к свойствам объекта.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}
Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}
Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}
|============================
*/
// ===========================================================================================
/** Задача-25: / Глубокая деструкеуризация обьекта / 
|============================
Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. 
Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. 
Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
* Объявлена переменная forecast
* Значение переменной forecast это объект
* Объявлена переменная highToday с помощью деструктуризации
* Значение переменной highToday это число 32
* Объявлена переменная lowToday с помощью деструктуризации
* Значение переменной lowToday это число 28
* Объявлена переменная todayIcon с помощью деструктуризации
* Значение переменной todayIcon это строка "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
* Объявлена переменная highTomorrow с помощью деструктуризации
* Значение переменной highTomorrow это число 31
* Объявлена переменная lowTomorrow с помощью деструктуризации
* Значение переменной lowTomorrow это число 27
* Объявлена переменная tomorrowIcon с помощью деструктуризации
* Значение переменной tomorrowIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
* Используется синтаксис деструктуризации объекта highTemperatures

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};


const highToday = forecast.today.high;
const lowToday = forecast.today.low;
const todayIcon = forecast.today.icon;

const highTomorrow = forecast.tomorrow.high;
const lowTomorrow = forecast.tomorrow.low;
const tomorrowIcon = forecast.tomorrow.icon;

// ================== Решение ==================

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

// -------------------
console.log(highToday);
console.log(lowToday);
console.log(todayIcon);
console.log(highTomorrow);
console.log(lowTomorrow);
console.log(tomorrowIcon);

// ___________________________________________________________________________________________
// ======= Теория к задаче-25 ================================================================

Для деструктуризации свойств вложенных объектов используются те же принципы, что и в трёх предыдущих упражнениях.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
|============================
*/
// ===========================================================================================
/** Задача-26: / Паттерн «Объект настроек» / Патерн «Объєкт параметров» /
|============================
Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.
* Объявлена функция calculateMeanTemperature(forecast)
* В теле функции используется деструктуризация объекта
* В теле функции объявлена переменная todayHigh с помощью деструктуризации
* В теле функции объявлена переменная todayLow с помощью деструктуризации
* В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
* В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
* Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5
* Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37

function calculateMeanTemperature(forecast) {
  const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// ================== Решение ==================

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
// ----------------------------
console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
); // возвращает 28.5
console.log(
  calculateMeanTemperature({
    today: { low: 37, high: 40 },
    tomorrow: { low: 33, high: 38 },
  })
); // возвращает 37

// ___________________________________________________________________________________________
// ======= Теория к задаче-26 ================================================================
Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности что передавать. В результате получается очень неочевидный код в месте её вызова.

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Делаем что-то с параметрами
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// ❌ Что такое 736? Что такое 10283? Что такое true?
doStuffWithBook("Последнее королевство", 736, 10283, 8.38, true);
Паттерн «Объект настроек» помогает решить эту проблему, заменяя набор параметров всего одним - объектом с именованными свойствами.

function doStuffWithBook(book) {
  // Делаем что-то со свойствами объекта
  console.log(book.title);
  console.log(book.numberOfPages);
  // И так далее
}
Тогда во время её вызова передаём один объект с необходимыми свойствами.

// ✅ Всё понятно
doStuffWithBook({
  title: "Последнее королевство",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
});
Ещё один плюс в том, что можно деструктуризировать объект в параметре book.

// Это можно сделать в теле функции.
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// Или в сигнатуре (подписи), разницы нет.
function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}
|============================
*/
// ===========================================================================================
/** Задача-27: / Синтаксис ... (spread) / метод Math.max(), метод Math.min()
|============================
В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.
* Объявлена переменная scores
* Значение переменной scores это массив [89, 64, 42, 17, 93, 51, 26]
* Объявлена переменная bestScore
* Значение переменной bestScore это число 93
* Объявлена переменная worstScore
* Значение переменной worstScore это число 17
* Для передачи аргументов методу Math.max() используется синтаксис ... на массиве scores
* Для передачи аргументов методу Math.min() используется синтаксис ... на массиве scores

const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = scores;
const worstScore = scores;

// ================== Решение ==================

const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

// ----------------------------
console.log(bestScore); // 93
console.log(worstScore); // 17

// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче-27 ================================================================

Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где ожидается набор отдельных значений. Конечно есть некоторые ограничения, например нельзя распылить массив в объект и наоборот.

Можно привести аналогию с ящиком яблок. Поставив ящик на пол не вынимая из него яблоки, получим аналог массива значений. Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.

Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается копия каждого элемента. После распыления останется и ящик полный яблок, и копия каждого яблока на полу.

Например, метод Math.max(аргументы) ищет и возвращает самый большой из аргументов (чисел), то есть ожидает не массив значений, а произвольное количество аргументов.

const temps = [14, -4, 25, 8, 11];

// В консоли будет массив
console.log(temps);
// ❌ Так не сработает, потому что передаём целый массив
console.log(Math.max(temps)); // NaN

// В консоли будет набор отдельных чисел
console.log(...temps);
// ✅ Распылим коллекцию элементов как отдельные аргументы
console.log(Math.max(...temps)); // 25
То есть запись Math.max(...[14, -4, 25, 8, 11]), после интерпретации превращается в Math.max(14, -4, 25, 8, 11) - синтаксис ... возвращает распакованный массив, то есть распыляет его элементы как отдельные аргументы.
|============================
*/
// ===========================================================================================
/** Задача-28: / Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. /
|============================
В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:
* В переменной allScores хранился массив всех результатов от первой до третьей группы.
* В переменной bestScore был самый высокий общий балл.
* В переменной worstScore был самый низкий общий балл.
* Объявлена переменная firstGroupScores
* Значение переменной firstGroupScores это массив [64, 42, 93]
* Объявлена переменная secondGroupScores
* Значение переменной secondGroupScores это массив [89, 14, 51, 26]
* Объявлена переменная thirdGroupScores
* Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81]
* Объявлена переменная allScores.
* Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
* Объявлена переменная bestScore
* Значение переменной bestScore это число 97
* Объявлена переменная worstScore
* Значение переменной worstScore это число 14
* При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива
* Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores
* Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [];
const bestScore = allScores;
const worstScore = allScores;

// ================== Решение ==================

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];

const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// --------------------------
console.log(firstGroupScores); // [64, 42, 93]
console.log(secondGroupScores); // [89, 14, 51, 26]
console.log(thirdGroupScores); // [29, 47, 18, 97, 81]
console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
console.log(bestScore); // 97
console.log(worstScore); // 14

// ___________________________________________________________________________________________
// ======= Теория к задаче-28 ================================================================

Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать тоже самое в более краткой форме.

const temps = [14, -4, 25, 8, 11];

// Это точная, но независимая копия массива temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]
В примере выше у нас есть ящик яблок temps и мы хотим сделать его точную копию. Берём пустой ящик и пересыпаем в него яблоки из исходного ящика temps - распыляем его в другую коллекцию. При этом ящик temps не изменится, в нём все ещё будут яблоки, а в новом ящике - их точные копии.

В следующем примере мы ссыпаем яблоки из двух ящиков в один новый. Оригинальные ящики (массивы) не изменятся, а в новом будут копии всех их яблок (элементов). Порядок распыления важен - он влияет на порядок элементов в новой коллекции.

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]
|============================
*/
// ===========================================================================================
/** Задача-29: / Переопределение / Операция spread позволяет распылить свойства произвольного количества объектов в один новый. 
|============================
В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

Объявлена переменная defaultSettings
Значение переменной defaultSettings это объект
Объявлена переменная overrideSettings
Значение переменной overrideSettings это объект
Объявлена переменная finalSettings
Значение переменной finalSettings это объект
Значение свойства finalSettings.theme равно "light"
Значение свойства finalSettings.public равно "false"
Значение свойства finalSettings.withPassword равно "true"
Значение свойства finalSettings.minNumberOfQuestions равно 10
Значение свойства finalSettings.timePerQuestion равно 30
При присваивании значения переменной finalSettings используется синтаксис ...

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {};

// ================== Решение ==================

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};

const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };

console.log(finalSettings.theme); // "light"
console.log(finalSettings.public); // "false"
console.log(finalSettings.withPassword); // "true"
console.log(finalSettings.minNumberOfQuestions); // 10
console.log(finalSettings.timePerQuestion); // 30

// ___________________________________________________________________________________________
// ======= Теория к задаче-29 ================================================================

Операция spread позволяет распылить свойства произвольного количества объектов в один новый.

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

Порядок распыления имеет значение. Имена свойств объекта уникальные, поэтому свойства распыляемого объекта могут перезаписать значение уже существующего свойства, если их имена совпадают.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

Если бы яблоки в ящике имели наклейки с метками, то в одном ящике не может быть двух яблок с одинаковыми метками. Поэтому при пересыпании второго ящика, все яблоки, метки которых совпадут с теми что уже есть в новом, заменят те что уже есть.

Во время распыления можно добавлять свойства в произвольное место. Главное помнить про уникальность имени свойства и о том, что его значение может быть перезаписано.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
|============================
*/
// ===========================================================================================
/** Задача-30: / Переопределение / Операция spread /
|============================
Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
* text - текст задачи.
* category - категория задачи.
* priority - приоритет задачи.
* Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.
* В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.
* Объявлена функция makeTask(data)
* Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
* Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает { category: "Homemade", priority: "Low", text: "Take out * the trash", completed: false }
* Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
* Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
* Вызов makeTask({ text: "Buy bread" }) возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

}

// ================== Решение ==================

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';

  const newArr = { category, priority, completed: completed, ...data };
  return newArr;
}

// ------------------------
console.log(makeTask({})); // { category: "General", priority: "Normal", completed: false }
console.log(
  makeTask({
    category: 'Homemade',
    priority: 'Low',
    text: 'Take out the trash',
  })
); // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
console.log(makeTask({ category: 'Finance', text: 'Take interest' })); //{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }
console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' })); // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
console.log(makeTask({ text: 'Buy bread' })); // { category: "General", priority: "Normal", text: "Buy bread", completed: false }

|============================
*/
// ===========================================================================================
/** Задача-31: / Операция ... (rest) /
|============================
Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
* Объявлена функция add
* Функция add использует параметр args
* Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest)
* Вызов add(15, 27) возвращает 42
* Вызов add(12, 4, 11, 48) возвращает 75
* Вызов add(32, 6, 13, 19, 8) возвращает 78
* Вызов add(74, 11, 62, 46, 12, 36) возвращает 241

function add() {

}

// ================== Решение ==================

function add(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(add(15, 27)); //возвращает 42
console.log(add(12, 4, 11, 48)); //возвращает 75
console.log(add(32, 6, 13, 19, 8)); //возвращает 78
console.log(add(74, 11, 62, 46, 12, 36)); //возвращает 241

// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию. Синтаксически это близнец операции распыления, но отличить их просто - распыление это когда ... находится в правой части операции присваивания, а сбор это когда ... находится в её левой части.

Вернёмся к аналогии с яблоками. Если на полу лежат яблоки и у нас есть пустой ящик, то операция rest позволит «собрать» яблоки в ящик. При этом оригинальные яблоки останутся на полу, а в ящике будет копия каждого яблока.

Одна из областей применения операции rest это создание функций которые могут принимать произвольное количество аргументов.

// Как объявить параметры функции так,
// чтобы можно было передать любое кол-во аргументов?
function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
Если убрать весь «синтаксический шум» и посмотреть на аргументы и параметры функции, то аргументы находятся в правой части операции присваивания, а параметры в левой, потому что значения аргументов присваиваются объявленным параметрам. Значит можно «собрать» все аргументы функции в один параметр используя операцию rest.

function multiply(...args) {
  console.log(args); // массив всех аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
Имя параметра может быть произвольным. Чаще всего его называют args, restArgs или otherArgs, сокращённое от arguments.
|============================
*/
// ===========================================================================================
/** Задача-32: / Операция ... (rest) /
|============================
Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.
* Объявлена функция addOverNum()
* Вызов addOverNum(50, 15, 27) возвращает 0
* Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71
* Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51
* Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218


function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

// ================== Решение ==================

function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > number) {
      total += arg;
    }
  }
  return total;
}

console.log(addOverNum(50, 15, 27)); // возвращает 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // возвращает 71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); // возвращает 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // возвращает 218

// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче-32 ================================================================
Операция ... (rest) также позволяет собрать в массив только ту часть аргументов, которая необходима, объявив параметры до «сбора».

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

Все аргументы, для которых будут объявлены параметры, передадут им свои значения, остальные аргументы будут помещены в массив. Операция rest собирает все оставшиеся аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.
|============================
*/
// ===========================================================================================
/** Задача-33: / Операция ... (rest) /
|============================
Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.
* Объявлена функция findMatches()
* Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2]
* Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2]
* Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41]
* Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает []

function findMatches() {
  const matches = [];

  return matches;
}

// ================== Решение ==================

function findMatches(arr, ...args) {
  const matches = [];

  for (const arg of args) {
    if (arr.includes(arg)) {
      matches.push(arg);
    }
  }

  return matches;
}
// -----------
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // [1, 2]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // [17, 89, 2]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // [24, 9, 41]
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // []
|============================
*/
// ===========================================================================================
/** Задача-34: / Методы объекта /
|============================
Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).
Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.
Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.
* Объявлена переменная bookShelf
* Значение переменной bookShelf это объект
* Значение свойства bookShelf.getBooks это метод объекта
* Вызов метода bookShelf.getBooks() возвращает строку "Returning all books"
* Значение свойства bookShelf.addBook это метод объекта
* Вызов метода bookShelf.addBook("Haze") возвращает строку "Adding book Haze"
* Значение свойства bookShelf.removeBook это метод объекта
* Вызов метода bookShelf.removeBook("Red sunset") возвращает строку "Deleting book Red sunset"
* Значение свойства bookShelf.updateBook это метод объекта
* Вызов метода bookShelf.updateBook("Sands of dune", "Dune") возвращает строку "Updating book Sands of dune to Dune"

const bookShelf = {
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
};

// ================== Решение ==================

const bookShelf = {
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};

console.log(bookShelf.getBooks()); // "Returning all books"
console.log(bookShelf.addBook('Haze')); // "Adding book Haze"
console.log(bookShelf.removeBook('Red sunset')); // "Deleting book Red sunset"
console.log(bookShelf.updateBook('Sands of dune', 'Dune')); // "Updating book Sands of dune to Dune"

// ___________________________________________________________________________________________
// ======= Теория к задаче-34 ================================================================

До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных, например информация о книге и т. п. Объекты-хранилища обычно находятся в массиве таких же объектов, который представляет коллекцию однотипных элементов.

Объекты могут хранить не только данные, но и функции для работы с этими данными - методы. Если значение свойства это функция, такое свойство называется методом объекта.

// ✅ Логиески и синтаксически сгруппированные сущности
const bookShelf = {
  books: ["Последнее королевство", "Страж снов"],
  // Это метод объекта
  getBooks() {
    console.log("Этот метод будет возвращать все книги - свойство books");
  },
  // Это метод объекта
  addBook(bookName) {
    console.log("Этот метод будет добавлять новую книгу в свойство books");
  },
};

// Вызовы методов
bookShelf.getBooks();
bookShelf.addBook("Новая книга");
Такие объекты можно назвать «моделями». Они связывают данные и методы для работы с этими данными. Например, можно было объявить переменную books и две функции getBooks() и addBook(bookName), но тогда это были бы три независимые сущности без явной синтаксической, и со слабой логической связями.

// ❌ Слабосвязанные, независмые сущности
const books = [];
function getBooks() {}
function addBook() {}
|============================
*/
// ===========================================================================================
/** Задача-35: / ключевое слово this /
|============================
Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
* Объявлена переменная bookShelf
* Значение переменной bookShelf это объект
* Значение свойства bookShelf.updateBook это метод объекта
* После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
* После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
  },
};

// ================== Решение ==================

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const index = this.books.indexOf(oldName);
    this.books.splice(index, 1, newName);
    console.log(this.books);
  },
};

bookShelf.updateBook('Haze', 'Dungeon chronicles'); // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
bookShelf.updateBook('The last kingdom', 'Dune'); // ["Dune", "Haze", "The guardian of dreams"]

// ___________________________________________________________________________________________
// ======= Теория к задаче-35 ================================================================

Методы используются для работы со свойствами объекта, их изменения. Для доступа к объекту в методе используется не имя переменной, например bookShelf, а ключевое слово this - контекст. Значением this будет объект перед «точкой», то есть объект который вызвал этот метод, в нашем случае это ссылка на объект bookShelf.

const bookShelf = {
  books: ["Последнее королевство"],
  getBooks() {
    console.log(this);
  },
};

// Перед точкой стоит объект bookShelf, поэтому при вызове метода, this будет хранить ссылку на него.

bookShelf.getBooks();                // {books: ["Последнее королевство"], getBooks: f}

Для того, чтобы получить доступ к свойствам объекта в методах, мы обращаемся к нему через this и дальше как обычно - «через точку» к свойствам.

const bookShelf = {
  books: ["Последнее королевство"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks());                         // ["Последнее королевство"]
bookShelf.addBook("Мгла");
bookShelf.addBook("Страж снов");
console.log(bookShelf.getBooks());                         // ["Последнее королевство", "Мгла", "Страж снов"]
bookShelf.removeBook("Мгла");
console.log(bookShelf.getBooks());                         // ["Последнее королевство", "Страж снов"]

Будет логично задуматься - почему бы не использовать при обращении к свойствам имя объекта, ведь мы явно не собираемся его менять. Дело в том, что имя объекта штука не надежная, методы одного объекта можно копировать в другой (с другим именем), а в будущем узнаем, что часто, при создании объекта мы заранее вовсе не знаем имени. Использование this гарантирует, что метод работает именно с тем объектом, который его вызвал.
|============================
*/
// ===========================================================================================
/** Задача-36: / Добавление свойства в объект /
|============================
К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.
* Объявлена переменная atTheOldToad
* Значение переменной atTheOldToad это объект
* Значение свойства atTheOldToad.potions это массив []

const atTheOldToad = {

};

// ================== Решение ==================

const atTheOldToad = {
  potions: [],
};
// ---------
console.log(atTheOldToad); // {potions: Array(0)}
console.log(atTheOldToad.potions); // []
|============================
*/
// ===========================================================================================
/** Задача-37: / Добавление метода в объект /
|============================
Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
* Объявлена переменная atTheOldToad
* Значение переменной atTheOldToad это объект
* Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
* Значение свойства atTheOldToad.getPotions это метод объекта
* Вызов метода atTheOldToad.getPotions() возвращает ["Speed potion", "Dragon breath", "Stone skin"]

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],

};

// ================== Решение ==================

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
};
atTheOldToad.getPotions();
console.log(atTheOldToad.getPotions()); // ["Speed potion", "Dragon breath", "Stone skin"]

|============================
*/
// ===========================================================================================
/** Задача-38: / Метод объекта добавляет елемент масива /
|============================
Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
* Объявлена переменная atTheOldToad
* Значение переменной atTheOldToad это объект
* Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
* Значение свойства atTheOldToad.addPotion это метод объекта
* После первого вызова метода atTheOldToad.addPotion("Invisibility"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
* После второго вызова метода atTheOldToad.addPotion("Power potion"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {

  },
};
// ================== Решение ==================

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};
// ------------------
atTheOldToad.addPotion('Invisibility');
console.log(atTheOldToad.potions); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]

atTheOldToad.addPotion('Power potion');
console.log(atTheOldToad.potions); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

|============================
*/
// ===========================================================================================
/** Задача-39: / Метод объекта удаляет елемент масива /
|============================
Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
* Объявлена переменная atTheOldToad
* Значение переменной atTheOldToad это объект
* Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
* Значение свойства atTheOldToad.removePotion это метод объекта
* После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив ["Speed potion", Stone skin"]
* После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив ["Stone skin"]

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {

  },
};

// ================== Решение ==================

// =========== Вариант-1 ===========

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    const index = this.potions.indexOf(potionName);
    this.potions.splice(index, 1);
  },
};

// =========== Вариант-2 ===========

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    this.potions.splice(potionName, 1);
  },
};
// ------------------
atTheOldToad.removePotion('Dragon breath');
console.log(atTheOldToad.potions); // ["Speed potion", Stone skin"]

atTheOldToad.removePotion('Speed potion');
console.log(atTheOldToad.potions); // ["Stone skin"]

|============================
*/
// ===========================================================================================
/** Задача-40: / Метод объекта обновляет елемент масива /
|============================
Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
* Объявлена переменная atTheOldToad
* Значение переменной atTheOldToad это объект
* Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
* Значение свойства atTheOldToad.updatePotionName это метод объекта
* После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
* После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {

  },
};

// ================== Решение ==================

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    const index = this.potions.indexOf(oldName);
    this.potions.splice(index, 1, newName);
  },
};

// ---------------------
atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
console.log(atTheOldToad.potions); // ["Speed potion", "Polymorth", "Stone skin"]

atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
console.log(atTheOldToad.potions); // ["Speed potion", "Polymorth", "Invisibility"]

|============================
*/
// ===========================================================================================
/** Задача-41: / Комплексная задача / Такие объекты можно назвать «моделями». Они связывают данные и методы для работы с этими данными.
|============================
Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
{
  name: "Dragon breath",
  price: 700
}
* Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

* getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
* addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
* removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
* updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
* Объявлена переменная atTheOldToad
* Значение переменной atTheOldToad это объект
* Значение свойства atTheOldToad.getPotions это метод объекта
* Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
* Значение свойства atTheOldToad.addPotion это метод объекта.
* Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в массиве potions последним элементом будет этот объект
* Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в массиве potions последним элементом будет этот объект
* Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода
* Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект
* Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), массив potions не изменяется
* Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не изменяется
* Для исходного объекта вызов atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), возвращает строку "Error! Potion Dragon breath is already in your inventory!"
* Для исходного объекта вызов atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), возвращает строку "Error! Potion Stone skin is already in your inventory!"
* Значение свойства atTheOldToad.removePotion это метод объекта
* Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
* Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
* Значение свойства atTheOldToad.updatePotionName это метод объекта
* Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
* Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },

};

// ================== Решение ==================

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        return this.potions.splice(i, 1);
      }
    }
    return `No such name ${oldName} found`;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return;
      }
    }
    return `No such name ${oldName} found`;
  },
};
// ------------------------------------------------------------
// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions());
//
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }); // в массиве potions последним элементом будет этот объект
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 }); // в массиве potions последним элементом будет этот объект
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }); // массив potions не изменяется
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }); // массив potions не изменяется
//
// atTheOldToad.removePotion('Dragon breath'); // в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.removePotion('Speed potion'); // в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
//
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
//
// console.log(atTheOldToad.getPotions());

|============================
*/

// :::::::::::::::||| Autocheck модуль-4  Коллбеки та стрілочні функції, Перебираючі методи масиву|||:::::::::::::::

/** Задача-1: 
|============================


// ================== Решение ==================


// ------------------------------------------------------------

// ___________________________________________________________________________________________
// ======= Теория к задаче- ==================================================================


|============================
*/
// ===========================================================================================
/** Задача-4: Callback
|============================
Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

* Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
* Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

Метод order объявляет три параметра
- Вызов pizzaPalace.order("Smoked", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Smoked."
- Вызов pizzaPalace.order("Four meats", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Four meats."
- Вызов pizzaPalace.order("Big Mike", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Big Mike in the assortment."
- Вызов pizzaPalace.order("Vienna", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Vienna in the assortment."

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName) {},
};


// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

// ================== Решение ==================

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],

// --------------- Вариант-1 с тернарным оператором.
  order(pizzaName, onSuccess, onError) {
    return this.pizzas.includes(pizzaName) 
      ? onSuccess(pizzaName) 
      : onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
  },

// --------------- Вариант-2
  order(pizzaName, onSuccess, onError) {
    if(this.pizzas.includes(pizzaName)){
      return onSuccess(pizzaName);
    }else{
      return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
    }
  },
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// ___________________________________________________________________________________________
// ======= Теория к задаче-4 ================================================================
Функция может принимать произвольное количество колбэков. Например, представим что мы пишем логику принятия звонков для телефона. Программа должна включить автоответчик если абонент недоступен, или соединить звонок в противном случае. Доступность абонента будем имитировать генератором случайного числа, чтобы между разными вызовами функции можно было получить различные результаты.

function processCall(recipient) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
    // Логика активации автоответчика
  } else {
    console.log(`Соединяем с ${recipient}, ожидайте...`);
    // Логика принятия звонка
  }
}

processCall("Mango");
Проблема такого подхода в том, что функция processCall делает слишком много и привязывает проверку доступности абонента к двум заранее определённым действиям. Что если в будущем вместо автоответчика нужно будет оставлять голограмму?

Мы могли бы написать функцию так, чтобы она возвращала какое-то значение и потом по результату её выполнения делать проверки и выполнять нужный код. Но проверки не относятся к внешнему коду и будут его засорять.

Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.

function processCall(recipient, onAvailable, onNotAvailable) {
  // Имитируем доступеность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
  // Логика принятия звонка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
  // Логика активации автоответчика
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
  // Логика записи голограммы
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);
Колбэки применяются для обработки действий пользователя на странице, при обработке запросов на сервер, выполнения заранее неизвестных функций и т. п. В этом и заключается их суть - это функции предназначенные для отложенного выполнения.


|============================
*/
// ===========================================================================================
/** Задача-5: метод forEach.
|============================
Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
- Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
Объявлена функция calculateTotalPrice(orderedItems)
Для перебора массива orderedItems использован метод forEach
* Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
* Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
* Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
* Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }

  return totalPrice;
}

// ================== Решение ==================

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function(number) {
    totalPrice += number;
  })

  return totalPrice;
}

// ------------------------------------------------------------
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ___________________________________________________________________________________________
// ======= Теория к задаче-5 ==================================================================

Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.

массив.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
});
Поэлементно перебирает массив.
Вызывает коллбек-функцию для каждого элемента массива.
Ничего не возвращает.
Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});
Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, это задачи с прерыванием выполнения цикла. Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.
|============================
*/
// ===========================================================================================
/** Задача-6: метод forEach.
|============================
Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Объявлена функция filterArray(numbers, value)
Для перебора массива numbers использован метод forEach
* Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
* Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
* Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
* Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
* Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
* Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }

  return filteredNumbers;
}

// ================== Решение ==================

function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function(number) {
    if(number > value){
      filteredNumbers.push(number)
    }
  })
  
  return filteredNumbers;
}

// ------------------------------------------------------------
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
|============================
*/
// ===========================================================================================
/** Задача-7: метод forEach.
|============================
Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
- Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
Объявлена функция getCommonElements(firstArray, secondArray)
Для перебора параметра (массива) использован метод forEach
* Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
* Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
* Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
* Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
* Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
* Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  for (let i = 0; i < firstArray.length; i += 1) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  }
  return commonElements;
}

// ================== Решение ==================

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function(item){
    if(secondArray.includes(item)){
      commonElements.push(item);
    }
  })
  return commonElements;
}

// ------------------------------------------------------------
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
|============================
*/
// ===========================================================================================
/** Задача-8: стрелочная функция
|============================
Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

Объявлена переменная calculateTotalPrice
Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
* Вызов calculateTotalPrice(5, 100) возвращает 500
* Вызов calculateTotalPrice(8, 60) возвращает 480
* Вызов calculateTotalPrice(3, 400) возвращает 1200
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function calculateTotalPrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
}

// ================== Решение ==================

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}

// ------------------------------------------------------------
console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
// ___________________________________________________________________________________________
// ======= Теория к задаче-8 =================================================================

Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или если она используется как коллбек.

Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.

// Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, за которыми следует символ => и тело функции.

Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.

const add = (a, b, c) => {
  return a + b + c;
};
Если параметр один, его объявление может быть без круглых скобок.

const add = a => {
  return a + 5;
};
Если параметров нет, то обязательно должны быть пустые круглые скобки.

const greet = () => {
  console.log("Привет!");
};
|============================
*/
// ===========================================================================================
/** Задача-9: 
|============================
Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

Объявлена переменная calculateTotalPrice
Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
В функции использован неявный возврат
* Вызов calculateTotalPrice(5, 100) возвращает 500
* Вызов calculateTotalPrice(8, 60) возвращает 480
* Вызов calculateTotalPrice(3, 400) возвращает 1200
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

// ================== Решение ==================

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ___________________________________________________________________________________________
// ======= Теория к задаче-9 ==================================================================

В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными скобками и без них.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return. Это называется явный возврат (explicit return). Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.

const add = (a, b, c) => a + b + c;
Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется неявный возврат (implicit return). В примере вернётся результат выражения сложения параметров a, b и c.

Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, но подходит только в случае когда в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// После
const arrowAdd = (a, b, c) => a + b + c;
|============================
*/
// ===========================================================================================
/** Задача-10: 
|============================

Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

Объявлена переменная calculateTotalPrice
Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems)
Для перебора массива orderedItems использован метод forEach
* Коллбек для метода forEach это стрелочная функция
* Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
* Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
* Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
* Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}
// ================== Решение ==================

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach(item => totalPrice += item);

  return totalPrice;
}

// ___________________________________________________________________________________________
// ======= Теория к задаче-10 ==================================================================

Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из-за более краткого синтаксиса объявления, особенно если не нужно тело функции.

const numbers = [5, 10, 15, 20, 25];

// Объявление функции
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

// Анонимная стрелочная функция
numbers.forEach((number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
});
Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку. Это стоит делать если одна функция используется в нескольих местах программы или если она громоздкая.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers.forEach(logMessage);
|============================
*/
// ===========================================================================================
/** Задача-: 
|============================


// ================== Решение ==================


// ------------------------------------------------------------

// ___________________________________________________________________________________________
// ======= Теория к задаче-11 ================================================================


|============================
*/
// ===========================================================================================
/** Задача-: 
|============================


// ================== Решение ==================


// ------------------------------------------------------------

// ___________________________________________________________________________________________
// ======= Теория к задаче- ==================================================================


|============================
*/
// ===========================================================================================
/** Задача-13: Чистая функция (pure function)
|============================
Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
Объявлена функция changeEven(numbers, value)
Функция changeEven не изменяет значение параметра numbers
* Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5]
* Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16]
* Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142]
* Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function changeEven(numbers, value) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
}

// ================== Решение ==================

// ----- Вариант-1 (forEach + тернарный оператор)

function changeEven(numbers, value) {
  const newArr = [];

  numbers.forEach(number => {
    number % 2 === 0 ? newArr.push(number + value) : newArr.push(number);
  });
  return newArr;
}

// ----- Вариант-2 (forEach + if else)

function changeEven(numbers, value) {
const newArr = [];

numbers.forEach(number => {
 if(number % 2 === 0){
  newArr.push(number + value);
  }else{
   newArr.push(number);
  }
})
return newArr;
}

// ----- Вариант-3 (Обычный for of + тернарный оператор)

function changeEven(numbers, value) {
  const newArr = [];

  for(const number of numbers){
    number % 2 === 0 ? newArr.push(number + value) : newArr.push(number);
  }
  return newArr;
}

// ----- Вариант-4 (Обычный for + ...rest + if)

function changeEven(numbers, value) {

  const newArr = [...numbers];

  for (let i = 0; i < newArr.length; i += 1) {
    if (newArr[i] % 2 === 0) {
      newArr[i] = newArr[i] + value;
    }
  }
  return newArr;
}
// ------------------------------------------------------------
console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]

// ___________________________________________________________________________________________
// ======= Теория к задаче-13 ==================================================================
Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Произошла мутация исходных данных - массива numbers
console.log(numbers); // [2, 4, 6, 8, 10]
Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. Она изменяет (мутирует) исходный массив по ссылке.

Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов. При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не изменяя исходный.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
|============================
*/
// ===========================================================================================
/** Задача-14: Метод map()
|============================
Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

Объявлена переменная planets
Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
Объявлена переменная planetsLengths
Значение переменной planetsLengths это массив [5, 4, 5, 7]
Для перебора массива планет использован метод map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets;

// ================== Решение ==================

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);

// ------------------------------------------------------------
console.log(planetsLengths); // [5, 4, 5, 7]

// ___________________________________________________________________________________________
// ======= Теория к задаче-14 ================================================================

Большинство перебирающих методов массива это чистые функции. Они создают новый массив, заполняют его, применяя к значению каждого элемента указанную коллбек-функцию, после чего возвращают этот новый массив.

Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.

массив.map((element, index, array) => {
  // Тело коллбек-функции
});
Поэлементно перебирает оригинальный массив.
Не изменяет оригинальный массив.
Результат работа коллбек-функции записывается в новый массив.
Возвращает новый массив такой же длины.
Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный массив используется как эталон, на базе которого можно сделать другую коллекцию.

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригинальный массив не изменился
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
Использование анонимных стрелочных функций с неявным возвратом сильно сокращает «шум» объявления коллбек-функции, делая код чище и проще для восприятия.

|============================
*/
// ===========================================================================================
/** Задача-15: Метод map()
|============================
Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

Объявлена переменная books
Значение переменной books это массив
Объявлена переменная titles
Значение переменной titles это массив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
Для перебора массива books используется метод map() как чистая функция

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books;

// ================== Решение ==================

const titles = books.map(book => book.title);

// ------------------------------------------------------------
console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

// ___________________________________________________________________________________________
// ======= Теория к задаче- ==================================================================
Мы уже знаем что повседневная задача это манипуляция массивом объектов. Например, получить массив значений свойства из всех объектов. Есть массив студентов, а нужно получить отдельный массив их имён.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.

|============================
*/
// ===========================================================================================
/** Задача-16: Метод flatMap()
|============================
Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

Объявлена переменная books
Значение переменной books это массив объектов
Объявлена переменная genres
Значение переменной genres это массив [ "adventure", "history", "fiction", "horror", "mysticism" ]
Для перебора массива books используется метод flatMap()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books;

// ================== Решение ==================

const genres = books.flatMap(book => book.genres);
// ------------------------------------------------------------

console.log(genres); // [ "adventure", "history", "fiction", "horror", "mysticism" ]

// ___________________________________________________________________________________________
// ======= Теория к задаче- ==================================================================
Метод flatMap(callback) аналогичен методу map(), но применяется в случаях, когда результат это многомерный массив который необходимо «разгладить».

массив.flatMap((element, index, array) => {
  // Тело коллбек-функции
});
В массиве students хранится список студентов со списком предметов, которые посещает студент, в свойстве courses. Несколько студентов могут посещать один и тот же предмет. Необходимо составить список всех предметов, которые посещает эта группа студентов, пока даже повторяющихся.

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

students.map(student => student.courses);
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив. Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице (одна вложенность). Этот разглаженный массив и есть результат работы flatMap().

|============================
*/
// ===========================================================================================
/** Задача-17: Метод map()
|============================
Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
Объявлена переменная getUserNames
Переменной getUserNames присвоена стрелочная функция с параметром (users).
Для перебора параметра users используется метод map()
* Вызов функции с указанным массивом пользователей возвращает массив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
* Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserNames = users => {
    
};

// ================== Решение ==================

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users)); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
|============================
*/
// ===========================================================================================
/** Задача-18: Метод map()
|============================
Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

Объявлена переменная getUserNames
Переменной getUserNames присвоена стрелочная функция с параметром (users)
Для перебора параметра users используется метод map()
Вызов функции с указанным массивом пользователей возвращает массив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

const getUserEmails = users => {
  
};

// ================== Решение ==================
const getUserEmails = users => {
  return users.map(user => user.email);
};
// ------------------------------------------------------------
console.log(getUserEmails(users));               // ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
|============================
*/
// ===========================================================================================
/** Задача-19: Метод filter()
|============================
Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

Объявлена переменная numbers
Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73]
Объявлена переменная evenNumbers
Значение переменной evenNumbers это массив [24, 82, 36, 18, 52]
Объявлена переменная oddNumbers
Значение переменной oddNumbers это массив [17, 61, 47, 73]
Для перебора массива numbers использован метод filter()

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers;
const oddNumbers = numbers;

// ================== Решение ==================
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 === 1);;

// ------------------------------------------------------------
console.log(evenNumbers);              // [24, 82, 36, 18, 52]
console.log(oddNumbers);               // [17, 61, 47, 73]

// ___________________________________________________________________________________________
// ======= Теория к задаче-19 ==================================================================

Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.

массив.filter((element, index, array) => {
  // Тело коллбек-функции
});
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает новый массив.
Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
Если коллбек вернул true элемент добавляется в возвращаемый массив.
Если коллбек вернул false элемент не добавляется в возвращаемый массив.
Если ни один элемент не удовлетворил условию, возвращает пустой массив.
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// Оригинальный массив не изменился
console.log(values); // [51, -3, 27, 21, -68, 42, -37]
То есть метод filter вызывает коллбек-функцию для каждого элемента исходного массива и если результат её выполнения true, текущий элемент добавляет в новый массив.

|============================
*/
// ===========================================================================================
/** Задача-20: Метод filter() + indexOf() Уникальные элементы
|============================
Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

Объявлена переменная books
Значение переменной books это массив объектов
Объявлена переменная allGenres
Значение переменной allGenres это массив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
Объявлена переменная uniqueGenres
Значение переменной uniqueGenres это массив ["adventure", "history", "fiction", "mysticism", "horror"]
Для вычисления значения переменной allGenders использован метод flatMap()
Для вычисления значения переменной uniqueGenres использован метод filter()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];

const allGenres = books;
const uniqueGenres = allGenres;

// ================== Решение ==================

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];

const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);


// ------------------------------------------------------------
console.log(allGenres); // ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
console.log(uniqueGenres);  // ["adventure", "history", "fiction", "mysticism", "horror"]
// ___________________________________________________________________________________________
// ======= Теория к задаче-20 ==================================================================

Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. Этот приём работает только с массивом примитивных значений - не объектов.

Вернёмся к группе студентов и массиву всех посещаемых предметов, которые мы получили методом flatMap().

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const allCourses = students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться. Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы, то есть без повторений.

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс в оригинальном массиве всех курсов. В параметре index хранится индекс текущего элемента course при переборе массива методом filter.

Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

# Массив всех курсов
["mathematics", "physics", "science", "mathematics", "physics", "biology"];
Для элемента "mathematics" под индексом 0:

indexOf() вернёт 0, потому что ищет первое совпадение.
Значение параметра index будет 0.
Они равны, значит это уникальный элемент.
Для элемента "mathematics" под индексом 3:

indexOf() вернёт 0, потому что ищет первое совпадение.
Значение параметра index будет 3.
Они не равны, значит это повторяющийся - не уникальный элемент.

|============================
*/
// ===========================================================================================
/** Задача-21: 
|============================
Используя метод filter() дополни код так, чтобы:

В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
Объявлена переменная books
Значение переменной books это массив объектов
Объявлена переменная MIN_RATING
Значение переменной MIN_RATING это число 8
Объявлена переменная AUTHOR
Значение переменной AUTHOR это строка "Bernard Cornwell"
Объявлена переменная topRatedBooks
Значение переменной topRatedBooks это массив книг с рейтингов выше 8
Объявлена переменная booksByAuthor
Значение переменной booksByAuthor это массив книг автор которых "Bernard Cornwell"
Для перебора массива books использован метод filter()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books;
const booksByAuthor = books;

// ================== Решение ==================

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

// ------------------------------------------------------------
console.log(topRatedBooks);
console.log(booksByAuthor);
// ___________________________________________________________________________________________
// ======= Теория к задаче-21 ==================================================================
При работе с массивом объектов выполняется фильтрация по значению какого-то свойства. В результате получается новый массив отфильтрованных объектов.

Например, есть массив студентов с баллами за тест. Необходимо отфильтровать лучших (балл выше 80), худших (балл ниже 50) и средних студентов (балл от 50 до 80).

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Mango и Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Ajax

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Массив объектов с именами Poly и Houston

|============================
*/
// ===========================================================================================
/** Задача-22: 
|============================
Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

Объявлена переменная getUsersWithEyeColor
Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color)
Для перебора параметра users используется метод filter()
Если значение параметра color это "blue", функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr
Если значение параметра color это "green", функция возвращает массив объектов пользователей с именами Ross Vazquez и Elma Head
Если значение параметра color это "brown", функция возвращает массив объектов пользователей с именами Blackburn Dotson и Sheree Anthony
Если значение параметра color это любая другая строка, функция возвращает пустой массив
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const getUsersWithEyeColor = (users, color) => {
 
};

// ================== Решение ==================

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

// ------------------------------------------------------------
console.log();
|============================
*/
// ===========================================================================================
