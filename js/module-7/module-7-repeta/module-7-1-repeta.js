/** Распространение событий (Всплытие событий - Bubbling Phase).
|============================
 * Всплытие событий
 * event.target - целевой (исходный) элемент
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие
// --------------------------------------
// Всплытие событий (Bubbling Phase).
// --------------------------------------
// Не все события всплывают, focus и blur не всплывают.

const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(evt) {
  console.log('onParentClick');
  console.log('onParentClick -> evt.target', evt.target);
  console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}

function onChildClick(evt) {
  console.log('onChildClick');
  console.log('onChildClick -> evt.target', evt.target);
  console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
}

function onInnerChildClick(evt) {
  console.log('onInnerChildClick');
  console.log('onInnerChildClick -> evt.target', evt.target);
  console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget);
}

// --------------------------------------
// Делегирование событий. (Видео 14:50)
// --------------------------------------
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика


|============================
*/

// -------------------------------------------------------------------------------

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  console.log(evt.target.textContent);
}

// * Код добавления кнопок

const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}
