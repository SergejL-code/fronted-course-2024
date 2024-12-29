alert("Вы выбрали Home work 14")
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
       accountHolderName: name,
     });
     //  сообщаем , что аккаунт создан
     alert("Account created successfully");
  } else {
     alert("Please, enter a valid name");
   }
   // обнуляется  строка ввода
   nameInput.value = "";
   console.log("bank",bank);
 }
 //объявляем функцию, которая показывает все аккаунты
 function showAccounts() {
  // получаем ссылку
const accountList = document.getElementById("accountList");
// очищаем список перед каждым вызовом
accountList.innerHTML='';

//for (const account of bank) {   //for Object
 // account.balance
 //создали элемент
//const li = document.createElement('li');
//заполнили элемент
// li.textContent = `ID:${account.accountNumber} Name:${account.accountHolderName} Balance:${account.balance}`
 //добавили элемент "li" на 
// accountList.append("li")


//создание элемента "li"-`<li>ID:${account.accountNumber} Name:${account.accountHolderName} Balance:${account.balance}</li>`

//добавление элемента "li" - "innerHTML"
//accountList.innerHTML += `<li>ID:${account.accountNumber} Name:${account.accountHolderName} Balance:${account.balance}</li>`;
//}
//* loop foreach //(_,index) только второй параметр //
bank.forEach((account,index)=> {
  accountList.innerHTML += `<li>${index+1}. ID:${account.accountNumber} Name:${account.accountHolderName} Balance:${account.balance}</li>`;
}

);}
 //*with for
 //for (let i = 0; i < bank.length; i++) {
 // const account = bank[i];}






   

 
  

   
  
 
