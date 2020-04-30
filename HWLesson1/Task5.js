console.log('Task5');

const country = prompt();
let deliveryCost;
let message;
let upperCountry;

if (country != null) {
  upperCountry = country.toUpperCase();
}

switch (upperCountry) {
  case 'КИТАЙ':
    deliveryCost = 100;
    break;
  case 'ЧИЛИ':
    deliveryCost = 250;
    break;
  case 'АВСТРАЛИЯ':
    deliveryCost = 170;
    break;
  case 'ИНДИЯ':
    deliveryCost = 80;
    break;
  case 'ЯМАЙКА':
    deliveryCost = 120;
    break;
  default:
    deliveryCost = -1;
}

if (country == null) {
  message = 'Пользователь отменнил ввод страны для доставки!';
} else if (deliveryCost === -1) {
  message = `В вашей стране ${country} доставка не доступна`;
} else {
  message = `Доставка в ${country} будет стоить ${deliveryCost} кредитов`;
}

alert(message);
