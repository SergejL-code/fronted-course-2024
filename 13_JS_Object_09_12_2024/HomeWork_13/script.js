//создаем заполненный объект "bankAccount"


let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
};
console.log(bankAccount);
//объявляем функций
// приветствие клиента и сообщение номера счёта 
bankAccount.user = function() {console.log(`Добро пожаловать: ${this.accountHolderName} Ваш номер счёта ${this.accountNumber}`);
}

bankAccount.user();
//добавляем сумму на счёт
function deposit(bankAccount, sum) {
  bankAccount.balance += sum;
}

//удаляем сумму со счёта
function withdraw(bankAccount, sum) {
  if (bankAccount.balance >= sum && sum > 0) {
    bankAccount.balance -= sum;
  } else {
    console.log("Wrong");
  }
}

// проверяем баланс счёта
function checkBalance(bankAccount) {
  console.log(bankAccount.balance);
}

deposit(bankAccount,100);
checkBalance(bankAccount);

withdraw(bankAccount,50)
checkBalance(bankAccount);