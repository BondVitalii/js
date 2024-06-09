// :::::::::::::::||| Autocheck модуль-3 занятие-Об'єкти, занятие-Деструктуризація та spread/rest |||:::::::::::::::

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
/** Задача-13: Перебери объект apartment используя метод Object.keys() и цикл for...of.
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
/** Задача-14: Выполни рефакторинг функции countProps(object) используя метод Object.keys()
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
/** Задача-15: метод Object.values(obj). Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. 
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
/** Задача-17: Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
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

console.log(calculateTotalPrice('Blaster')); // возвращает 0
console.log(calculateTotalPrice('Radar')); // возвращает 5200
console.log(calculateTotalPrice('Droid')); // возвращает 2800
console.log(calculateTotalPrice('Grip')); // возвращает 10800
console.log(calculateTotalPrice('Scanner')); // возвращает 8100

// Вызов ----------
console.log(calculateTotalPrice('Blaster')); // возвращает 0
console.log(calculateTotalPrice('Radar')); // возвращает 5200
console.log(calculateTotalPrice('Droid')); // возвращает 2800
console.log(calculateTotalPrice('Grip')); // возвращает 10800
console.log(calculateTotalPrice('Scanner')); // возвращает 8100
|============================
*/
// ===========================================================================================
