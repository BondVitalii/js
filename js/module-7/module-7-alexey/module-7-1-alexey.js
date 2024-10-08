/** Погружение и Всплытие
|============================
const allElements = document.querySelectorAll('*');       // Выберет обсалютно все элементы на странице.

// console.dir(allElements);                              // Получим масив всех элементов на странице.

// ** Остановка всплытия, и остановка обработчиков на текущем элементе.
// ** Использовать эти штуки очень окуратно, чтоб ничего не сломать в коде.

// document.querySelector('span').addEventListener('click', event => {
//   event.stopPropagation();                             // Останавливаем всплытие выше spana.
//   event.stopImmediatePropagation();                    // Останавливаем все обработчики на текущем элементе.
// });

// Вешаем слушателя на el

for (const el of allElements) {
  //   console.dir(el);
  el.addEventListener(
    'click',
    event => alert(`Погружение: ${el.tagName}`),
    true
  );                                                       // Событие на погружение.
  el.addEventListener('click', event => alert(`Всплытие: ${el.tagName}`));
}
// -------------------------
// Разъяснение.

// el.addEventListener("click", () => {}, useCapture = true/false);
// el.addEventListener("click", () => {}, {

// ** capture: true - занурення, false - сплиття.
// ** once: true - подія спрацює тільки один раз, false - подія відпрацює до тих пір, поки ми не знімемо обробник.
// ** passive: true - забороняємо використовувати event.preventDefault(), false - можна

// });

|============================
*/
// =============================================================
/** (Видео 45:40) Практика. Створити калькулятор вартості продукту в залежності від ціни.
|============================
Створити калькулятор вартості продукту в залежності від ціни. При роботі з подіями використовувати делагування.

При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість
Завжди має відображатися валюта - гривня
Загальна сума відображається з копійками (2 знаки після коми)
В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
Кольорова підказка має змінювати своє значення при перетягувані повзунка.
В інпуті №2 мін і мах поріг встановлюєте самостійно.
При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

// -----------------------------------------------------------------------------
** Мікрозадача 1: зміна кількості кілограм під час зміни повзунка
1. отримати refs
2. повісити обробник подій на форму по події input
3. за допомогою таргету визначимо інпут для кількості мʼяса
4. зчитуємо велью інпуту і записуємо його у спан з кількістю кг

** Мікрозадача 2: отримати значення ціни за кг і вирахувати фінальну вартість
1. створення обʼєкту який буде зберігати значення полів та реалізує метод розрахунку фінальної вартості
2. заповнити поля обʼєкту значеннями з інпутів
3. вивести результат розрахунку на екран
// -----------------------------------------------------------------------------

const refs = {
  form: document.getElementById('form'),
  amount: document.getElementById('amount'),
  total: document.getElementById('total'),
  price: document.getElementById('price'),
  quantity: document.getElementById('quantity'),
};

const data = {
  price: 0,
  quantity: 0,

  calcTotalPrice() {
    return Number((this.price * this.quantity).toFixed(2));
  },
};

dataFill();
displayTotal();
updateAmount();

refs.form.addEventListener('input', handleFormInput);

function handleFormInput({ target }) {
  if (target.name === 'quantity') updateAmount();

  target.setAttribute('value', target.value);
  dataFill();
  displayTotal();
}

function dataFill() {
  data.price = Number(refs.price.value);
  data.quantity = Number(refs.quantity.value);
}

function displayTotal() {
  const totalPrice = data.calcTotalPrice();

  refs.total.textContent =
    (Number.isInteger(totalPrice) ? `${totalPrice}.00` : totalPrice) + ' грн';
}

function updateAmount() {
  refs.amount.textContent = quantity.value;
}

// ----------------------------------------------------------------------------
// Ниже тот же самый код, но с разъяснением!
// ----------------------------------------------------------------------------

const refs = {
  form: document.getElementById('form'),
  amount: document.getElementById('amount'),
  total: document.getElementById('total'),
  price: document.getElementById('price'),
  quantity: document.getElementById('quantity'),
};

// ** Создаем объект с свойствами и методом. Для умножения кол-ва на стоимость.
const data = {                    
  price: 0,
  quantity: 0,

  // ** Метод высчитывающий финальную стоимость продукта.
  calcTotalPrice() {                     
    return Number((this.price * this.quantity).toFixed(2));
  },
};

dataFill();
displayTotal();
updateAmount();

refs.form.addEventListener('input', handleFormInput);    // Вешаем слушателя на форму.

function handleFormInput({ target }) {                   // Деструктуризируем event.target в target.
  // console.log(target.name);
  if (target.name === 'quantity') updateAmount();        // Проверка, если клик пришел из инпута quantity,то...

  target.setAttribute('value', target.value);         // Изменение значения атрибута value в инпуте на текущее.
  dataFill();                                           // Вызов функции.
  displayTotal();                                       // Вызов функции.
}

// ** Функция заполнения свойств объекта data из соответствующих полей инпутов.
function dataFill() {
  data.price = Number(refs.price.value);      // Запись знач.поля(инпута price), в свойство price объекта data.
  data.quantity = Number(refs.quantity.value); // Запись знач.поля(инпута quantity), в свойство quantity объекта data.

  // console.log(data);             // Для проверки изменений в атрибутах инпута, при изменении в полях инпута.
}

// ** Функция показа результата умножения товара на стоимость.
function displayTotal() {
  const totalPrice = data.calcTotalPrice();              // Константа сохраняющая финальную цену.

  refs.total.textContent =
    (Number.isInteger(totalPrice) ? `${totalPrice}.00` : totalPrice) + ' грн';
    // Если число целое,то добавляем в конце два ноля, если не целое,то выводим его результат.
}

// ** Функция обновления показа кол-ва в span, соответствии с кол-вом в инпуте quantity.
function updateAmount() {
  refs.amount.textContent = quantity.value;
}
|============================
*/
// =============================================================
