//создаем объект "bankAccount"
let bankAccount = {
  /* ключ*/  accountNumber: /* значение*/ "111111",
  accountHolderName: "Alice",
  balance: 0,
};

/*объект*/bankAccount./*свойство*/deposit = /*действие*/function /*параметр*/(sum) {
  sum >= 5 && sum <= 5000
    ? (this.balance = this.balance + sum)
    : alert("Некорректная сумма пополнения!"); //this.balance= += sum;
};
bankAccount.withdraw = function (sum) {
  //*Бизнес - логика
  sum <= this.balance && sum > 0
    ? (this.balance = this.balance - sum) // this.balance -= sum
    : alert("Некорректная сумма списания!");
};

//*Просмотр баланса
bankAccount.checkBalance = function () {
  console.log(`Баланс вашего аккаунта равен: ${this.balance}`);
};
//создаем массив , где всё хранится
const bank = [];
//
function createAccount() {
//получаем ссылку на элемент "input", в котором введено имя клиента
//создаем константу с именем "nameInput" передаем значение по id "name" через "document" с помощью метода "getElementById("name")
 const nameInput = document.getElementById("name"); 
//получаем через "nameInput" имя клиента.т.е. значение которое написано в input  и сохраняем в константе "name"
  const name = nameInput.value.trim();// trim() отрезает пробелы спереди и сзади
  //*falsy-ложные(null,'', 0, undefined,NaN-тип number)
  // if(name!== '' && name !== null) // !sonst ende sobes
  if (name) {
    bank.push({//добавляем с помощью метода push через spread новый объект с ключами : свойствами  accountNumber:  , accountHolderName:  в массив "bank".
      ...bankAccount,
      accountNumber: bank.length + 1,
      accountHolderName: name,
    });
    alert("Account created successfully");
  } else {
    alert("Please, enter a valid name");
  }
  nameInput.value = "";
  console.log(bank);
}
function showAccounts() {}
