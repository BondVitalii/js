/** Палітра кольорів (Делегування подій module-7-1) 
|============================
Палітра кольорів
Будемо створювати палітру кольорів з можливістю вибрати колір по кліку і відображенням обраного кольору.
Замість того, щоб призначати обробник кожному елементу палітри, яких може бути дуже багато, повісимо один слухач на загального предка div.color - palette.
В обробнику події кліка використовуємо event.target, щоб отримати елемент, на якому відбулася подія і пов'язаний з ним колір, який будемо зберігати в атрибуті data-color.
Цікаво
Обов'язково перевіряємо мету кліка, щоб це точно була кнопка, тому що ми не хочемо обробляти кліки в елемент-контейнері. 
Для перевірки типу елемента використовуємо властивість nodeName.
// --------------
const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

// Вот тут-то и происходит «волшебство» делегирования
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Некоторые вспомогательные функции для рендеринга элементов палитры
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item');
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
|============================
*/
