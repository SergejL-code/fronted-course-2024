//alert("Вы выбрали Class work 15")
let bankAccount = {
  accountNumber: "111111",
  accountHolderName: "Alice",
  balance: 0,
};

bankAccount.deposit = function (sum) {
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

//создаем пустой массив
const bank = [];
// объявляем функцию, которая создаёт аккаунт
function createAccount() {
  // через document обращаемся к методу getElementById("name")  и сохраняем в переменной "nameInput" значение type"text"
  const nameInput = document.getElementById("name");
  //  сохраняем в переменной "name"  введенное имя с поля "Input"
  const name = nameInput.value.trim();
  //falsy-ложные(null,'', 0, undefined,NaN)
  // if(name!== '' && name !== null) aber ende sobes
  if (name) {
    //если имя true, тогда создаем объект с
    bank.push({
      // добавляем  6 ключей( 4 неменяющиеся и 2 меняющихся)
      ...bankAccount,
      accountNumber: bank.length + 1, // т.к. индекс начинается с 0 пишем +1
      // accountNumber: (bank.length + 1).toString // идеально на работе

      accountHolderName: name,
    });
    //  сообщаем , что аккаунт создан
    alert("Account created successfully");
  } else {
    alert("Please, enter a valid name");
  }
  // обнуляется  строка ввода
  nameInput.value = "";
  console.log("bank", bank);
}
//объявляем функцию, которая показывает все аккаунты
function showAccounts() {
  // получаем ссылку
  const accountList = document.getElementById("accountList");
  //Очищаем accountList перед циклом:
  accountList.innerHTML = "";
  //* loop foreach
  //(_,index) только второй параметр
  bank.forEach((account, index) => {
    accountList.innerHTML += `<li>${index + 1}. ID:${
      account.accountNumber
    } Name:${account.accountHolderName} Balance:${account.balance}</li>`;
  });
}
//получили ссылку на кнопку deposit
const deposit = document.getElementById("deposit");

deposit.onclick = function () {
  //Описание действия при нажатия на кнопку deposit

  //получили ссылку на элемент поля ввода "accountId
  const accountIdInput = document.getElementById("accountId");
  //получаем ссылку на элемент  поля ввода суммы "input" через "amount"
  const amountInput = document.getElementById("amount");

  //считывание значений, написанных в input
  // //*input.value - значение  всегда String; поставив плюс переводим из "String" в число или Number('0') или parseInt() parseFloat() или eval('10+10-5') или  +'0'
  const accountId = accountIdInput.value.trim(); //здесь String
  const amount = +amountInput.value.trim(); // здесь number

  // const accountId = +accountIdInput.value.trim();//number(число или NaN)
  //isNaN()-метод NaN,возвращает true, если передать значение NaN и  false  в остальных случаях
  //сравниваем значение accountNumber с введенным
  //let account;
  //bank.forEach(e=> {if(e.accountNumber===accountId){account=e;return;}})
  //bank.forEach(e=> {if(e.accountNumber===accountId){e.balance;return;}}) // без переменной снаружи

  // метод find возвращаем искомый элемент или undefined

  const accountFind = bank.find(
    (e) => e.accountNumber.toString() === accountId
  ); // привели number в String
  //const accountFind = bank.find(e => e.accountNumber === accountId);

  // метод findIndex возвращаем  индекс искомого элементы или -1
  // const accountIndexFind = bank.findIndex((e) => e.accountNumber.toString === accountId);
  if (accountFind) {
    accountFind.deposit(amount);
  } else {
    const answer = prompt("Great Account?");
    if (answer) {
      createAccount();
    }
  // const answer = prompt("Введите Ваше имя");
// if (typeof answer === "string") {
 // String
// }
// if (answer) { // String (кроме пустой строки)
// }
  }
  //очищаем поле ввода
  accountIdInput.value = "";
  amountInput.value = "";
};

//получили ссылку на кнопку
const withdraw = document.getElementById("withdraw");
withdraw.onclick = function () {
  const accountIdInput = document.getElementById("accountId");

  const amountInput = document.getElementById("amount");

  const accountId = accountIdInput.value.trim();
  const amount = +amountInput.value.trim();

  const accountFind = bank.find(
    (e) => e.accountNumber.toString() === accountId ); //
  if (accountFind) {
    accountFind.withdraw(amount);
  } else {
    const answer = prompt("Great Account?");
    if (answer) {
      createAccount;
    }

    accountIdInput.value = "";
    amountInput.value = "";
  }
};
