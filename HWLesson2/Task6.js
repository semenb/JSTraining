let input = prompt('Введите число. Для остановки процесса нажмите Cancel.');
const numbers = [];
let total = 0;

while (input != null) {
  if (isNaN(parseInt(input))) {
    alert('Введено некорректное число!');
  } else {
    numbers.push(parseInt(input));
  }
  input = prompt('Введите число. Для остановки процесса нажмите Cancel.');
}

if (numbers.length !== 0) {
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
