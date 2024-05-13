// _________________________________________________________________________________________
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// Репета модуль-3 занятие 1 Обьекты
// ==================================
/** Теория Обьекты Репета
|============================
// Что такое обьект.
const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

console.log(playlist);
// _______________________________________________________
// Литерал объекта. как его отличить от других сущьностей.

const x = {};                   // 1) Присваиваем литерал обьекта в переменную.

const fn = function (myObject) {
  console.log(myObject);
};

fn({ a: 1, b: 2 });             // 2) Передаем аргумент в функцию. Это тоже литерал объекта.

const rtfm = function () {
  return { a: 5 };              // 3) Возврат из функции. Тщ же литарал обьекта.
};

console.log(rtfm());

|============================
*/
// _______________________________________________________
/** Вазов объекта и Доступ к свойствам объекта.
|============================
// Вазов объекта

const fn = function (myObject) {
  console.log(myObject);
};

fn({ a: 1, b: 2 });                // Вызов обьекта.

// Доступ к свойствам объекта.
// ---------------------------
// Обращение к свойству. 2-ва варианта (через точку и через ключ).

// 1й вариант через точку. // console.log(playlist.rating); // 5
// 2й вариант через ключь, ключ передаем как строку. // console.log(playlist['rating']); // 5

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

console.log(playlist);               // {name: 'Мой супер плейлист', rating: 5, tracks: Array(3), trackCount: 3}
console.log(playlist.rating);        // 5  // (1й вариант)
console.log(playlist['rating']);     // 5  // (2й вариант)

console.log(playlist.name);                // Мой супер плейлист
console.log(playlist['name']);             // Мой супер плейлист

console.log(playlist.trackCount);         // 3
console.log(playlist['trackCount']);      // 3

console.log(playlist.tracks);             // ['трек-1', 'трек-2', 'трек-3']
console.log(playlist['tracks']);          // ['трек-1', 'трек-2', 'трек-3']

// ---------------
// Случаи когда имя свойства хранится в переменной.
const propertyName = 'tracks';

console.log(playlist.propertyName); // undefined // Такое свойство не найдено.
console.log(playlist[propertyName]); // ['трек-1', 'трек-2', 'трек-3']
console.log(playlist['tracks']); // ['трек-1', 'трек-2', 'трек-3']
|============================
*/
// _______________________________________________________
/** Бывают случаи когда нам нужно создать объект в котором ключ динамический.
|============================

//  * Короткая запись свойств (сокращение)

const username = 'Mango';
const email = 'mango@mail.com';

// ------- Вариант обычное.

const signupData = {
  username: username,
  email: email,
};

// ------- Вариант сокращение.

// Если имя свойства должно называться также как имя переменной в которой лежит это значение, то можно сократить.Пример ниже.

const signupData = {
  username,
  email,
};

console.log(signupData);
|============================
*/
// _______________________________________________________
/** Вычисляемые свойства
|============================
//  * Вычисляемые свойства

//  <input name="color" value="tomato" >

const inputName = 'color';
const inputValue = 'tomato';

// Запись в квадратных скобках [inputName] буквально говорит: иди найди переменную с таким именем и её значение используй как клуч.
const colorPickerData = {
  //   inputName: inputValue, // {inputName: 'tomato'}
  [inputName]: inputValue, // {color: 'tomato'}
};

console.log(colorPickerData);
|============================
*/
// _______________________________________________________
/** Добавление елементов в объект. Переопределение уже существующего свойства в объекте
|============================

// Добавление елементов в объект. 
// Переопределение уже существующего свойства в объекте

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

playlist.qwe = 5;       // Добавление свойства в объект.
playlist.rating = 10;   // Если свойство уже есть, то оно переопредилиться.

console.log(playlist);
|============================
*/
// _______________________________________________________
/** Ссылочный тип {} === {}
|============================
//  * Ссылочный тип {} === {}

// console.log({ a: 1 } === { a: 1 }); // Это условие всегда будет возвращать 'false', так как JavaScript сравнивает объекты по ссылке, а не по значению.

// console.log([] === []); // Это условие всегда будет возвращать 'false', так как JavaScript сравнивает объекты по ссылке, а не по значению.

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a); // true

a.hello = 100;
b.hello = 150;

console.log(a); // {x: 1, y: 2, hello: 150}
console.log(b); // {x: 1, y: 2, hello: 150}
|============================
*/
// _______________________________________________________
/** Массивы и функции это объекты
|============================
// * Массивы и функции это объекты

const a = [1, 2, 3];

a.hello = ':)';

console.log(a);                   // [1, 2, 3, hello: ':)']

const fn = function () {
  console.log('hello');
};

fn.hello = ';)';

console.dir(fn.hello);           // ;)
|============================
*/
// _______________________________________________________
/** Методы объекта и this при обращении к свойствам в методах
|============================
// * Методы объекта и this при обращении к свойствам в методах
//  *
//  * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
//  * - changeName
//  * - addTrack
//  * - updateRating
//  * - getTrackCount
// _______________________________________________________
// Функция внутри объекта-называется метод объекта.

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],

  getName(a) {                                 // Это современный вариант синтаксиса.
    console.log('Ага это getName :)', a);
  },

  getName: function () {                      // Это OldShool вариант синтаксиса.
    console.log('Ага это getName :)');
  },

};

playlist.getName(5);                         // Ага это getName :) 5 Это вызов метода объекта.

|============================
*/
// _______________________________________________________
/** Добавление, изменение, переименование эелементов в объекте.
|============================
// Добавление, изменение, переименование эелементов в объекте.

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  changeName(newName) {
    // console.log('this внутри changeName: ', this);
    this.name = newName;          // Меняем имя в объекте.('Мой супер плейлист' на 'Новое имя')
  },
  addTrack(track) {
    this.tracks.push(track);               // Добовляем новый трек.
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

playlist.changeName('Новое имя');          // Меняем имя в объекте.

playlist.addTrack('новый трек 1');         // Добавляем новый трек.
playlist.addTrack('новый трек 2');

playlist.updateRating(4);                  // Добавляем новый рейтинг.

console.log(playlist.getTrackCount());

console.log(playlist);
|============================
*/
// _______________________________________________________
/** Перебор объекта.
|============================
// Перебор объекта.
// * Перебор через for...in и Object.keys|values|entries
// -------------------------------------------

// Перебор Object.keys Возвращает масив ключей.

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

const keys = Object.keys(feedback);                 // Получи масив ключей из объекта feedback

console.log(keys);                       // ['good', 'neutral', 'bad'] Возвращает масив ключей.

for (const key of keys) {
  console.log(key);                            // Получаем доступ к перебору ключей объекта.
  console.log(feedback[key]);                  // Получаем доступ к значениям свойств: 5  10  3

  totalFeedback += feedback[key];
}

console.log('totalFeedback: ', totalFeedback);      // totalFeedback:  18

// -------------------------------------------

// Перебор значений Object.values  Возвращает масив значений.

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

const values = Object.values(feedback);

console.log(values);                               // [5, 10, 3] // Возвращает масив значений.

for (const value of values) {
  console.log(value);

  totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback);     // totalFeedback:  18
|============================
*/
// _______________________________________________________
/** Работа с коллекцией (массивом объектов)
|============================
// * Работа с коллекцией (массивом объектов)

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

console.table(friends);

for (const friend of friends) {
  console.log(friend);               // Перебор объектов, в масиве.
  
  console.log(friend.name);          // Перебор свойств обьектов, в масиве.

  console.log(friend.online);

  friend.newprop = 555;             // Добавляем новое свойство newprop с значением 555.
}
console.table(friends);
|============================
*/
// _______________________________________________________
/** Работем с коллекцией товаров в корзине:
|============================
// * Работем с коллекцией товаров в корзине:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }

const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// // console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// // console.table(cart.getItems());

// cart.remove('🍎');
// // console.table(cart.getItems());

// // cart.clear();
// // console.table(cart.getItems());

// // cart.increaseQuantity('🍎');
// // console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());

// // console.log('Total: ', cart.countTotalPrice());
|============================
*/
// _______________________________________________________
// =======================================================
// Решаем задачи Репета
// --------------------
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];
// ___________________________________________
/** Задача-1  * Ищем друга по имени
|============================
const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);

    if (friend.name === friendName) {
      return 'НАШЛИ!!!';
    }
  }

  return 'НЕ НАШЛИ :(';
};
// --------------------------
console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));
|============================
*/
// ------------
// ___________________________________________
/** Задача-2  * Получаем имена всех друзей
|============================
const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    // console.log(friend.name);
    names.push(friend.name);
  }
  return names;
};
console.log(getAllNames(friends));
|============================
*/
//
// ___________________________________________
/** Задача-3  * Получаем имена только друзей которые онлайн
|============================
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends));
|============================
*/
//
// ___________________________________________
/** Задача-4  * Получаем имена только друзей которые офлайн
|============================
const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

console.log(getOfflineFriends(friends));
|============================
*/
//
// ___________________________________________
/** Задача-5 * создать 2 массива онлайн и офлайн?
|============================
// * создать 2 массива онлайн и офлайн?
// * если тру - в первый, если нет - во второй
// -------------------------------------------
const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));
|============================
*/
//
// ___________________________________________
/** Задача-6 Как узнать сколько свойств в єтом обьекте?
|============================
const x = {
  a: 1,
  b: 2,
  c: 50,
  d: 100,
};
console.log(Object.keys(x).length); // 4
|============================
*/
//
// _________________________________________________________________________________________
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// Олег модуль-3 занятие 1 Обьекты
// ==================================
/** Теория Объекты Олег
|============================
// Доступ до свойства (ключа) объекта.
const user = {
  email: 'some.email@gmail.com',
  password: '***',
  name: 'Sergiy',
  book: {
    name: 'H P',
  },
};

console.log(user.book.name); // H P
console.log(user.book); // {name: 'H P'}
console.log(user); //{email: 'some.email@gmail.com', password: '***', name: 'Sergiy', book: {…}}
// ___________________________________________
// Эти записи одинакоый результат дают (user.password;) (user['password'];)

user.password;
user['password'];

// В эту запись (user['password'];) можно вставить переменную. Пример ниже.
let field = 'password';

user[field];
// ___________________________________________
// Методы обьекта Object.keys(), Object.values(), Object.entries()

// * Object.keys() - Перебор свойств(ключей) объекта.
// * Object.values() - Перебор значений объекта.
// * Object.entries() - Масив в масиве.

const user1 = {
  email: 'some.email@gmail.com',
  password: '*****',
  name: 'Sergiy',
};

console.log(Object.keys(user1)); // ['email', 'password', 'name']
console.log(Object.values(user1)); // ['some.email@gmail.com', '*****', 'Sergiy']
console.log(Object.entries(user1)); // [Array(2), Array(2), Array(2)]
// ___________________________________________
// Функции в объекте и вызов их.
const user = {
  email: 'some.email@gmail.com',
  password: '*****',
  name: 'Sergiy',
  book: {
    name: 'H P',
  },

  getName() {
    return 'SOME NAME';
  },
};
user.getName();                    // Вызов функции
console.log(user.getName());       // SOME NAME
// ___________________________________________
// Масив объектов
const users = [
  {
    email: 'some.email@gmail.com',
    password: '*****',
  },
  {
    email: 'some2.email@gmail.com',
    password: '***awdwd**',
  },
  {
    email: 'some3.email@gmail.com',
    password: '**awdwd***',
  },
];
|============================
*/
// _______________________________________________________
// =======================================================
// Решаем задачи Олег
// _______________________________________________________
// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:
// * додає поле mood зі значенням 'happy'
// * замінює значення hobby на 'skydiving'
// * замінює значення premium на false
// * виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// -------------
/** Решение:
|============================
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
|============================
*/
// _______________________________________________________
// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390.
// Якщо об'єкт salaries порожній, то результат має бути 0.
// --------------
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// -------------
/** Решение:
|============================
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;

for (const value of Object.values(salaries)) {
  sum += value;
}

console.log(sum);
|============================
*/
// _______________________________________________________
// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName),
// яка приймає масив об'єктів та рядок з назвою каменю.
// Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
// -------------
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Смарагд', price: 1000, quantity: 2 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Сапфір', price: 100, quantity: 15 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];
// -------------
/** Решение:
|============================
// 1) Вариант-1 Когда у каждого камня одна цена.

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }
  return 0;
}
const res = calcTotalPrice(stones, 'Діамант');
console.log(res);                                    // 8100
const res2 = calcTotalPrice(stones, 'qweqwe');
console.log(res2);                                   // 0
console.log(calcTotalPrice(stones, 'Смарагд'));      // 5200

// ---------------------------------------------------------

//  Вариант-2 Когда у одного камня две разных цены.

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Смарагд', price: 1000, quantity: 2 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Сапфір', price: 100, quantity: 15 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  const foundStones = [];

  for (const stone of stones) {
    if (stone.name === stoneName) {
      foundStones.push(stone);
    }
  }

  let sum = 0;

  for (const stone of foundStones) {
    sum += stone.price * stone.quantity;
  }
  return sum;
}

const res = calcTotalPrice(stones, 'Смарагд');
console.log(res);                                  // 7200
const res1 = calcTotalPrice(stones, 'Сапфір');
console.log(res1);                                 // 4300
console.log(calcTotalPrice(stones, 'Діамант'));    // 8100

|============================
*/
// _______________________________________________________
// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// //  * Кожна транзакція це об'єкт із властивостями: id, type та amount

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   //  * Метод створює та повертає об'єкт транзакції.
//   //  * Приймає суму та тип транзакції.

//   createTransaction(amount, type) {},

//   //  * Метод, що відповідає за додавання суми до балансу.
//   //  * Приймає суму транзакції.
//   //  * Викликає createTransaction для створення об'єкта транзакції
//   //  * після чого додає його до історії транзакцій

//   deposit(amount) {},

//   //  * Метод, що відповідає за зняття суми з балансу.
//   //  * Приймає суму транзакції.
//   //  * Викликає createTransaction для створення об'єкта транзакції
//   //  * після чого додає його до історії транзакцій.
//   //  *
//   //  * Якщо amount більше ніж поточний баланс, виводь повідомлення
//   //  * про те, що зняття такої суми не можливе, недостатньо коштів.

//   withdraw(amount) {},

//   //  * Метод повертає поточний баланс

//   getBalance() {},

//   //  * Метод шукає та повертає об'єкт транзакції по id

//   getTransactionDetails(id) {},

//   //  * Метод повертає кількість коштів
//   //  * певного типу транзакції з усієї історії транзакцій

//   getTransactionTotal(type) {},
// };

// -------------------------------------------------------
/** Решение Олег решение 1-вое
|============================
const OPERATION_TYPES = {
  DEPOSIT: 'DEPOSIT',
  WITHDRAW: 'WITHDRAW',
};

const account = {
  limit: 10000,
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transactions = {
      id: Math.random().toString(16).substring(2),
      type,
      amount,
    };
    return transactions;
  },

  deposit(amount) {
    const newTransaction = this.createTransaction(
      amount,
      OPERATION_TYPES.DEPOSIT
    );

    if (amount > this.limit) {
      console.error('LIMIT ERROR');
    } else {
      this.balance += amount;
      this.transactions.push(newTransaction);
    }
  },

  withdraw(amount) {
    const newTransaction = this.createTransaction(
      amount,
      OPERATION_TYPES.WITHDRAW
    );

    if (this.balance < amount) {
      console.error('NOT ENOUGHT MONEY');
    } else if (amount > this.limit) {
      console.error('LIMIT ERROR');
    } else {
      this.balance -= amount;
      this.transactions.push(newTransaction);
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let sum = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }

    return sum;
  },
};

account.deposit(5000);
console.log(account.getBalance());
console.log(account.transactions);

account.withdraw(3500);
account.withdraw(500);
account.withdraw(250);
console.log(account.getBalance());
console.log(account.transactions);

console.log(account.getTransactionDetails(account.transactions[0].id));

console.log(account.getTransactionTotal(OPERATION_TYPES.WITHDRAW));
console.log(account.getTransactionTotal(OPERATION_TYPES.DEPOSIT));
|============================
*/
// -------------------------------------------------------
/** Решение: Олег решение 2 полное с дополнением
|============================
// const OPERATION_TYPES = {
//   DEPOSIT: 'DEPOSIT',
//   WITHDRAW: 'WITHDRAW',
// };

// const account = {
//   limit: 10000,
//   balance: 0,
//   hideMoney: false,
//   transactions: [],

//   createTransaction(amount, type) {
//     const transactions = {
//       id: Math.random().toString(16).substring(2),
//       type,
//       amount,
//     };

//     return transactions;
//   },

//   deposit(amount) {
//     const newTransaction = this.createTransaction(
//       amount,
//       OPERATION_TYPES.DEPOSIT
//     );

//     if (amount > this.limit) {
//       console.error('LIMIT ERROR');
//     } else {
//       this.balance += amount;
//       this.transactions.push(newTransaction);
//     }
//   },

//   withdraw(amount) {
//     const newTransaction = this.createTransaction(
//       amount,
//       OPERATION_TYPES.WITHDRAW
//     );

//     if (this.balance < amount) {
//       console.error('NOT ENOUGHT MONEY');
//     } else if (amount > this.limit) {
//       console.error('LIMIT ERROR');
//     } else {
//       this.balance -= amount;
//       this.transactions.push(newTransaction);
//     }
//   },

//   getBalance() {
//     return this.hideMoney ? ':)' : this.balance;
//   },

//   toggleBalanceVisabillity() {
//     this.hideMoney = !this.hideMoney;
//   },

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }
//   },

//   getTransactionTotal(type) {
//     let sum = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }

//     return sum;
//   },
// };

// account.deposit(5000);
// console.log(account.getBalance());
// console.log(account.transactions);

// account.withdraw(3500);
// account.withdraw(500);
// account.withdraw(250);
// console.log(account.getBalance());
// console.log(account.transactions);

// console.log(account.getTransactionDetails(account.transactions[0].id));

// console.log(account.getTransactionTotal(OPERATION_TYPES.DEPOSIT));

// console.log(account.getBalance());
// account.toggleBalanceVisabillity();
// console.log(account.getBalance());
// account.toggleBalanceVisabillity();
// console.log(account.getBalance());

|============================
*/
// _______________________________________________________

// _______________________________________________________
// -------------
