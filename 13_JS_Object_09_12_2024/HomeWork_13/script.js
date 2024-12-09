//создаем заполненный объект "bankAccount"


let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
};
console.log(bankAccount);
//объявляем функцию

//добавляем сумму на счёт
function deposit(bankAccount, sum) {
  bankAccount.balance += sum;
}

//удаляем сумму со счёта
function withdraw(bankAccount, sum) {
  if (bankAccount.balance >= sum) {
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