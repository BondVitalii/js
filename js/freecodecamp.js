// freecodecamp модуль -1 задача-62
const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  const spaces = '.'.repeat(rowCount - rowNumber);
  return spaces + character.repeat(rowNumber * 2 - 1) + spaces;
}

// console.log(padRow(1, count));

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
  result = result + '\n' + row;
}

console.log(result);
