console.log('Task4');

let credits = 23580;
const pricePerDroid = 3000;

const order = prompt(
  'Укажите количество дройдов, которое вы хотите приобрести.',
);

let message;
let totalPrice;
if (order == null) {
  message = 'Отменено пользователем!';
} else if (isNaN(parseInt(order))) {
  message = 'Введено некоректное число!';
} else {
  totalPrice = pricePerDroid * parseInt(order, 10);
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    credits -= totalPrice;
    message = `Вы купили ${order} дроидов, на счету осталось ${credits} кредитов.`;
  }
}

console.log(message);
