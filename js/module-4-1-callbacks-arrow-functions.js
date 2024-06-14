// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

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
