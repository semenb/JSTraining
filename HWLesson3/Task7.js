const TransactionType = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: Math.floor(Math.random() * 100),
      // id: 1,
      type,
      amount,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const trans = this.createTransaction(amount, TransactionType.DEPOSIT);
    this.transactions.push(trans);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const trans = this.createTransaction(amount, TransactionType.WITHDRAW);
    this.transactions.push(trans);
    if (amount > this.balance) {
      console.log(
        'Сума снятия средств превышает допустимый баланс. Операция отменена.',
      );
      return;
    }
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  // Странный метод. Мы не задаем ID. Значит, генерируется он случайно. Как же нам узнать ID, что бы по нему получить транзакцию?
  getTransactionDetails(id) {
    const result = this.transactions.find(element => element.id === id);
    return result;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const arrType = this.transactions.filter(element => element.type === type);
    const arrAmount = arrType.map(element => element.amount);
    return arrAmount.reduce(
      (accumulator, currValue) => accumulator + currValue,
    );
  },
};

console.log(account.getBalance());
account.deposit(1500);
account.deposit(500);
console.log(account.getBalance());
account.withdraw(3000);
account.withdraw(700);
// console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(TransactionType.DEPOSIT));
console.log(account.getTransactionTotal(TransactionType.WITHDRAW));
