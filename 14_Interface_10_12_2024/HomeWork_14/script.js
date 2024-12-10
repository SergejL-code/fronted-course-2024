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
  const bank = [];
  function createAccount() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();
    //falsy-ложные(null,'', 0, undefined,NaN)
    // if(name!== '' && name !== null) aber ende sobes
    if (name) {
      bank.push({
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
  