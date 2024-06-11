// :::::::::::::::||| Autocheck модуль-3 занятие-Об'єкти, занятие-Деструктуризація та spread/rest |||:::::::::::::::
/** Задача-:
|============================
// ================== Решение ==================
// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
|============================
*/
// ===========================================================================================
/** Задача-:
|============================
// ================== Решение ==================
// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
|============================
*/
// ===========================================================================================
/** Задача-:
|============================
// ================== Решение ==================
// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
|============================
*/
// ===========================================================================================
/** Задача-:
|============================
// ================== Решение ==================
// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
|============================
*/
// ===========================================================================================
/** Задача-:
|============================
// ================== Решение ==================
// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
|============================
*/
// ===========================================================================================
/** Задача-:
|============================
// ================== Решение ==================
// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
|============================
*/
// ===========================================================================================
/** Задача-:
|============================
// ================== Решение ==================
// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
|============================
*/
// ===========================================================================================
/** Задача-:
|============================
// ================== Решение ==================
// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
|============================
*/
// ===========================================================================================
/** Задача-:
|============================
// ================== Решение ==================
// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
|============================
*/
// ===========================================================================================
/** Задача-:
|============================
// ================== Решение ==================
// =========== Вариант-1 ===========
// ___________________________________________________________________________________________
// ======= Теория к задаче- ================================================================
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
// ===========================================================================================
