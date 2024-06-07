// :::::::::::::::||| Autocheck модуль-3 занятие-Об'єкти, занятие-Деструктуризація та spread/rest |||:::::::::::::::
/** Задача-19:
|============================
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {}

// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []
|============================
*/
// ------------------------------
/** Решение:
|============================
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

// ===== Вариант-1 =====
function getAllPropValues(propName) {
  const arr = [];

  for (const product of products) {
    if (product[propName]) {
      arr.push(product[propName]);
    }
  }
  return arr;
}

// ===== Вариант-2 =====
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

// Вызов
console.log(getAllPropValues('name')); // возвращает ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues('quantity')); // возвращает [4, 3, 7, 9]
console.log(getAllPropValues('price')); // возвращает [1300, 2700, 400, 1200]
console.log(getAllPropValues('category')); // возвращает возвращает []
|============================
*/
// -------------------------------------------------------------------------------------------
/** Задача-20:
|============================
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. 
// Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {}

// Вызов calculateTotalPrice("Blaster") возвращает 0
// Вызов calculateTotalPrice("Radar") возвращает 5200
// Вызов calculateTotalPrice("Droid") возвращает 2800
// Вызов calculateTotalPrice("Grip") возвращает 10800
// Вызов calculateTotalPrice("Scanner") возвращает 8100
|============================
*/
// ------------------------------
/** Решение:
|============================
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

// ===== Вариант-1 =====
function calculateTotalPrice(productName) {

  for (const item of products) {
    if (item.name === productName) {
      return item.price * item.quantity;
    }
  }
  return 0;

}

// ===== Вариант-2 =====


console.log(calculateTotalPrice('Blaster')); // возвращает 0
console.log(calculateTotalPrice('Radar')); // возвращает 5200
console.log(calculateTotalPrice('Droid')); // возвращает 2800
console.log(calculateTotalPrice('Grip')); // возвращает 10800
console.log(calculateTotalPrice('Scanner')); // возвращает 8100
|============================
*/
// -------------------------------------------------------------------------------------------
/** Задача-
|============================

|============================
*/
// ------------------------------
/** Решение:
|============================

|============================
*/
// -------------------------------------------------------------------------------------------

// ===========================================================================================
