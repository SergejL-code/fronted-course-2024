let bankAccount = {
  accountNumber: "111111",
  accountHolderName: "Alice",
  balance: 0,
};

bankAccount.deposit = function (sum) {
  sum >= 5 && sum <= 5000
    ? (this.balance = this.balance + sum)
    : alert("Некорректная сумма пополнения!");
};
bankAccount.withdraw = function (sum) {
  //*Бизнес - логика
  sum <= this.balance && sum > 0
    ? (this.balance = this.balance - sum)
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
  console.log("bank", bank);
}

function showAccounts() {
  const accountList = document.getElementById("accountList");

  accountList.innerHTML = "";

  bank.forEach((account, index) => {
    accountList.innerHTML += `<li>${index + 1}. ID:${
      account.accountNumber
    } Name:${account.accountHolderName} Balance:${account.balance}</li>`;
  });
}

//! ДЕБЕТОВАЯ КАРТА (карта не уходящая в минус!)

const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");

deposit.onclick = function () {
  operation("deposit");
};

withdraw.onclick = function () {
  operation("withdraw");
};

function operation(operator) {


  const accountIdInput = document.getElementById("accountId");
  const amountInput = document.getElementById("amount");

  const accountId = accountIdInput.value.trim();
  const amount = +amountInput.value.trim();

  const accountFind = bank.find((e) => e.accountNumber.toString() === accountId); 

  if (accountFind) {
    if (operator === "deposit") {
      accountFind.deposit(amount);
    } else {
      accountFind.withdraw(amount);
    }
  } else {
    alert("Account not found");
  }

  accountIdInput.value = "";
  amountInput.value = "";
}




