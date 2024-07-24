/** Ответы на задачи.
|============================
// -------------------------------------------------------------------------------
// Відповідь - Завдання 1 (Коллбэк)
// -------------------------------------------------------------------------------

// ---------- Вариант-1

function letMeSeeYourName(callback) {
  const name = prompt('Введите имя');
  if (name === true) {
    callback(name);
    return;
  }
  console.log('Ви не ввели імʼя');
}

function greet(name) {
  console.log(`Привіт ${name}`);
}

// ---------- Вариант-2 (мой вариант) 

function letMeSeeYourName(callback) {
  const name = prompt('Введите имя');
  if (!name || name === ' ') {
    // console.log('Ви не ввели імʼя');
    alert('Ви не ввели імʼя');
  } else {
    greet(name);
  }
}

function greet(name) {
  // console.log(`Привіт ${name}`);
  alert(`Привіт ${name}`);
}

// Вызов --------------

letMeSeeYourName(greet);

// -------------------------------------------------------------------------------
// Відповідь - Завдання 2 (Коллбэк)
// -------------------------------------------------------------------------------

// ---------- Мой вариант
function makeProduct(name, price, callback) {
  const product = {
    id: new Date().getTime(),
    name,
    price,
  };
  callback(product);
}

function showProduct(product) {
  console.log(product);
}

makeProduct('Fish', 350, showProduct);

// ---------- Вариант видео
function makeProduct(name, price, callback) {
  const product = {
    id: new Date().getTime(),
    name,
    price,
  };
  callback(product);
}

function showProduct(product) {
  for (const item in product) {
    console.log(`${item}: ${product[item]}`);
  }
}

makeProduct('Fish', 350, showProduct);

// -------------------------------------------------------------------------------
// Відповідь - Завдання 3  (Замыкания)
// -------------------------------------------------------------------------------

function makeShef(shefName) {
  return function makeDish(dish) {
    console.log(`${shefName} is cooking ${dish}`);
  };
}

let shefMango = makeShef('Mango');

shefMango('apple pie');
shefMango('muffins');

console.log('------------------');

let shefPoly = makeShef('Poly');

shefPoly('apple pie');
shefPoly('muffins');

// -------------------------------------------------------------------------------
// Відповідь - Завдання 4
// -------------------------------------------------------------------------------

//++++++++++++++++++ Рішення (function declaration) ++++++++++++++++++
const array = [3, 5, 6, 34, 8, 83, 12, 34];

function each(array, callback) {
  const newArr = [];
  
  // ------- Вариант-1  (for of)
  for (const item of array) {
    const res = multiply(item);
    newArr.push(res);
  }

  // ------- Вариант-2  (обычный for)
  // for (let i = 0; i < array.length; i += 1) {
  //   newArr.push(callback(array[i]));
  // }

  return newArr;
}

function multiply(value) {
  return value * 2;
}

console.log(each(array, multiply)); // [6, 10, 12, 68, 16, 166, 24, 68]

//++++++++++++++++++ Рішення (arrow function) ++++++++++++++++++
const array = [3, 5, 6, 34, 8, 83, 12, 34];

// -------- Вариант-3  (arrow function - callback-функция)
function each(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    newArr.push(callback(array[i]));
  }
  return newArr;
};

// -------- Вариант-4  (arrow function обе функции)
const each = (array, callback) => {
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    newArr.push(callback(array[i]));
  }
  return newArr;
};

console.log(each(array, value => value * 2)); // [6, 10, 12, 68, 16, 166, 24, 68]

// -------------------------------------------------------------------------------
// Відповідь - Завдання 5
// -------------------------------------------------------------------------------
//++++++++++++++++++ Рішення function declaration ++++++++++++++++++

function makeCounter(callback) {
  let count = 0;
  return function counter() {
    count += 1;
    console.log(`makeCounter was called ${count} times`);
  };
}

//++++++++++++++++++ Рішення arrow function ++++++++++++++++++

function makeCounter(callback) {
  let count = 0;
  return () => {
    count += 1;
    console.log(`makeCounter was called ${count} times`);
  };
}

// Вызов --------------------------
const counter = makeCounter();

counter();
counter();
counter();
counter();
counter();

// -------------------------------------------------------------------------------
// Відповідь - Завдання 6
// -------------------------------------------------------------------------------

function savePassword(password) {
  return function checkPassword(input) {
    if (input === password) {
      return `Збережений пароль: ${password} збігається з введеним паролем ${input}`;
    }
    return `Збережений пароль: ${password} не збігається з введеним паролем ${input}`;
  };
}

const enteredPassword = savePassword('qwerty');

console.log(enteredPassword('qwerty'));
console.log(enteredPassword('asdfgh'));

// ===============================================================================
// Ответы на новые задачи.
// -------------------------------------------------------------------------------
// Відповідь - Завдання 1 .map()
// -------------------------------------------------------------------------------
function getUserNames(users) {
  return users.map(user => user.name);
  // console.log(user);
}
console.log(getUserNames(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// -------------------------------------------------------------------------------
// Відповідь - Завдання 2 .filter()
// -------------------------------------------------------------------------------
function getUsersWithEyeColor(users, eyeColor) {
  return users.filter(user => user.eyeColor === eyeColor);
  }
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
// -------------------------------------------------------------------------------
// Відповідь - Завдання 3 .filter()
// -------------------------------------------------------------------------------
function getUsersWithGender(users, gender) {
  return users.filter(user => user.gender === gender);
}

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// -------------------------------------------------------------------------------
// Відповідь - Завдання 4 .filter()
// -------------------------------------------------------------------------------
function getInactiveUsers(users) {
  return users.filter(user => user.isActive === false);
}
console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
// -------------------------------------------------------------------------------
// Відповідь - Завдання 5 .find()
// -------------------------------------------------------------------------------
function getUserWithEmail(users, email) {
  return users.find(user => user.email === email);
}
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
// -------------------------------------------------------------------------------
// Відповідь - Завдання 6 .filter()
// -------------------------------------------------------------------------------
function getUsersWithAge(users, min, max) {
  return users.filter(user => user.age >= min && user.age <= max);
}

console.log(getUsersWithAge(users, 20, 30)); //[об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); //[об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
// -------------------------------------------------------------------------------
// Відповідь - Завдання 7 .reduce()
// -------------------------------------------------------------------------------
function calculateTotalBalance(users) {
  return users.reduce((total, user) => (total += user.balance), 0);
}

console.log(calculateTotalBalance(users)); // 20916
// -------------------------------------------------------------------------------
// Відповідь - Завдання 8
// -------------------------------------------------------------------------------

|============================
*/
// -------------------------------------------------------------------------------------------
