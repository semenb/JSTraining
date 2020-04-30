console.log('Task3');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const USER_PASSWOR = prompt();

if (USER_PASSWOR == null) {
  message = 'Отменено пользователем!';
} else if (USER_PASSWOR === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
