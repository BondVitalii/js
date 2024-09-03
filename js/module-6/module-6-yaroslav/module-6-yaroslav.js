// Решение задач (видео 1:28:45)
//TODO:==============================================
/* ** Завдання 1 При натисканні на кнопку "SHOW ME" в консоль має виводити значення з поля введення 
Завдання 1
При натисканні на кнопку "SHOW ME" в консоль має виводити значення
з поля введення (дивіться на елементи в html-розмітці)

const btn = document.querySelector('#alertButton');
const input = document.querySelector('#alertInput');

btn.addEventListener('click', event => {
  //   console.dir(input);
  console.log(input.value);
});

** Завдання 1-2
При натисканні на кнопку "SHOW ME" в консоль має виводити значення параграфа "ЗАДАЧА 1".

// Вариант-1

const btn = document.querySelector('#alertButton');
const input = document.querySelector('#alertInput');

btn.addEventListener('click', event => {
  console.log(btn.previousElementSibling.textContent);
});

// Вариант-2

const btn = document.querySelector('#alertButton');
// const input = document.querySelector('#alertInput');
const text = document.querySelector('.taskTitle');

btn.addEventListener('click', event => {
  console.log(text.textContent);
});
*/
//TODO:==============================================
/* ** Завдання 2 Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

const btn = document.querySelector('#swapButton');
const input1 = document.querySelector('#leftSwapInput');
const input2 = document.querySelector('#rightSwapInput');

function changeContent() {
  const temp = input1.value; // Временная переменная.

  input1.value = input2.value;
  input2.value = temp;
}

btn.addEventListener('click', changeContent);

*/
//TODO:==============================================
/* ** Завдання 3 Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", при повторному натисканні текст знову стає доступним і кнопка набуває початкового вигляду.

Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

const input = document.querySelector('#passwordInput');
const btn = document.querySelector('#passwordButton');

btn.addEventListener('click', () => {
  // Проверяем какой тип данных возвращает getAttribute.
  //   console.log(input.getAttribute('type'));  

//   ----- Вариант-1 (Патерн раннй возврат)
    if (input.getAttribute('type') === 'text') {
      input.setAttribute('type', 'password');
      btn.textContent = 'Розкрити';
      return;
    }
    input.setAttribute('type', 'text');
    btn.textContent = 'Приховати';
  });

  // ----- Вариант-2
  if (input.getAttribute('type') === 'text') {
    input.setAttribute('type', 'password');
    btn.textContent = 'Приховати';
  } else {
    input.setAttribute('type', 'text');
    btn.textContent = 'Розкрити';
  }
});
*/
//TODO:==============================================
/* ** Завдання 4 (видео 2:00:00) Уменьшение и увеличивание квадрата кнопками 
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів. Використай інструкцію switch

// ========== Вариант-1 switch() ==========

const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
const boxEl = document.querySelector('#box');

decreaseBtn.addEventListener('click', changeBoxSize);
increaseBtn.addEventListener('click', changeBoxSize);

function changeBoxSize(event) {
  // console.log(event.target);                    // Скажет нам на каком элементе сработал обработчик событий.
  // console.log(event.target.getAttribute('id')); // increase или decrease. Где клик.

  const btnType = event.target.getAttribute('id'); // Сохраняет строку (кнопки у которой клик).
  const width = boxEl.offsetWidth;                 // Переменные для (исходных-начальных) размеров бокса.
  const height = boxEl.offsetHeight;               // Переменные для (исходных-начальных) размеров бокса.

  switch (btnType) {
    case 'decrease':                               // если тут true-то выполняется это тело, если false-то двигаемся дальше.
      //   console.log('this is case decrease');   // this is case decrease
      boxEl.style.width = `${width - 10}px`;       // Увелич. ширину бокса при каждом клике на 10px.
      boxEl.style.height = `${height - 10}px`;     // Увелич. высоту бокса при каждом клике на 10px.
      break;
    case 'increase':                               // если тут true-то выполняется это тело, если false-то двигаемся дальше.
      //   console.log('this is case increase');   // this is case increase
      boxEl.style.width = `${width + 10}px`;       // Увелич. ширину бокса при каждом клике на 10px.
      boxEl.style.height = `${height + 10}px`;     // Увелич. высоту бокса при каждом клике на 10px.
      break;
  }
}

// ========== Вариант-2 ==========

const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
const boxEl = document.querySelector('#box');

// console.dir(boxEl.nodeName);               // DIV
// console.log(boxEl.offsetWidth);            // 50   Получаем размер ширины бокса.
// console.log(boxEl.offsetHeight);           // 50   Получаем размер высоты бокса.

// boxEl.style.width = '50px';                // Возможночть задать размер.
// boxEl.style.heigth = '50px';               // Возможночть задать размер.

decreaseBtn.addEventListener('click', decreaseСhangeBoxSize);
increaseBtn.addEventListener('click', increaseСhangeBoxSize);

// * Уменьшаем.

function increaseСhangeBoxSize() {
  const width = boxEl.offsetWidth;            // Переменные для (исходных-начальных) размеров бокса.
  const height = boxEl.offsetHeight;          // Переменные для (исходных-начальных) размеров бокса.
  //   console.log(width, heigth);            //  50 50

  boxEl.style.width = `${width + 10}px`;      // Увелич. ширину бокса при каждом клике на 10px.
  boxEl.style.height = `${height + 10}px`;    // Увелич. высоту бокса при каждом клике на 10px.
}

// * Увеличиваем.

function decreaseСhangeBoxSize() {
  const width = boxEl.offsetWidth;            // Переменные для (исходных-начальных) размеров бокса.
  const height = boxEl.offsetHeight;          // Переменные для (исходных-начальных) размеров бокса.
  //   console.log(width, heigth);            //  50 50

  boxEl.style.width = `${width - 10}px`;      // Увелич. ширину бокса при каждом клике на 10px.
  boxEl.style.height = `${height - 10}px`;    // Увелич. высоту бокса при каждом клике на 10px.
}
*/
//TODO:==============================================
/* 
Завдання 5
Додайде слухач кліку до сторінки і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
В консоль виводь наступну повідомлення:
1. 'Клік відбувся всередині елемента з id "place".'
2. "Клік відбувся поза зоною елемента js."
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

//TODO:==============================================
/* ** Завдання 6 (видео 2:53:40) Натиснувши кнопку "Подвоювати", збільшити значення у кожному елементі списку у 2 рази
** Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази

const btn = document.querySelector('#double');
const items = document.querySelectorAll('.listItem');

btn.addEventListener('click', double);

function double() {
    items.forEach(item => {
        item.textContent *= 2;
      // console.log(item.textContent * 2);      // Просто умножаем на 2
      // console.log((item.textContent *= 2));   // Перезаписываем результат умножения
    });
}
*/
//TODO:==============================================
/*
Завдання 7
При кліку на коло воно повинно слідувати за курсором.
При повторному подвійному кліку воно стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

//TODO:==============================================
/* ** Завдання 8 (видео 3:09:10) При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.

const buttons = document.querySelectorAll('.calcButton');
const resultBtn = document.querySelector('#resultButton');
const result = document.querySelector('#resultSection');
let total = 0;
const clickedValues = {};

buttons.forEach(button => {
  button.addEventListener('click', handleBtnsClick);
});

resultBtn.addEventListener('click', handleStat);

function handleStat() {
  let markup = '';

  for (const key in clickedValues) {
    markup += `${key} was clicked ${clickedValues[key]} times <br>`;
  }
  result.innerHTML = `
   <h2>Total: ${total}</h2>
   <p>${markup}</p>
  `;
}

function handleBtnsClick(event) {
  total += Number(event.target.dataset.number);
  const btnName = event.target.textContent;

  clickedValues[btnName] = clickedValues[btnName]
    ? (clickedValues[btnName] += 1)
    : (clickedValues[btnName] = 1);
}
*/
//TODO:==============================================
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

//TODO:==============================================
/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/

//TODO:==============================================
/*
Завдання 11
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/

//TODO:==============================================
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення на
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

//TODO:==============================================
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

//TODO:==============================================
/*
Завдання 14
Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
Додати класи на список eventList, на елементи eventCode та eventKey
*/

//TODO:==============================================
/*
Завдання 15
Створіть HTML сторінку з табличкою,
яка містить список продуктів.Кожен рядок у
табличці повинен містити назву продукту та його ціну.
При натисканні на будь-який рядок у табличці відобразіть
повідомлення з назвою продукту та його ціною.
*/

//TODO:==============================================
/*
Завдання 16
 Створіть HTML сторінку з формою,
 яка містить поле введення для введення
 імені користувача та кнопку. При натисканні
 на кнопку відобразіть повідомлення з привітанням з іменем користувача.
*/
