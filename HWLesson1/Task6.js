console.log('Task6');

let total = 0;
let value = prompt('Введите число. Для остановки процесса нажмите Cancel.');

while (value != null) {
  if (isNaN(parseInt(value))) {
    alert('Введено некорректное число!');
  } else {
    total += parseInt(value);
  }
  value = prompt('Введите число. Для остановки процесса нажмите Cancel.');
}

alert(`Общая сумма чисел равна ${total}`);
