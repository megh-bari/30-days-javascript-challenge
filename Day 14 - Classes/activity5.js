// ! Activity 5: Private Fields

// * Task 9

class Account {
  #balance;
  constructor(initialDeposit) {
    this.#balance = initialDeposit;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.log("Deposite amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        console.log("Insufficient Funds!");
      }
    } else {
      console.log("Withdrawal amount must be positive");
    }
  }
  getbalance() {
    return this.#balance;
  }
}

// *  Task 9

const myAccount = new Account(1000);
myAccount.deposit(100);
myAccount.withdraw(500);
console.log(`Balance: ${myAccount.getbalance()}`);

// * Task 10

const newAccount = new Account(2000);
console.log(`Initial Balance: ${newAccount.getbalance()}`);

newAccount.deposit(1000);
console.log(`Balance after depositing 1000: ${newAccount.getbalance()}`);

newAccount.withdraw(2500);
console.log(`Balance after withdrawing 2500: ${newAccount.getbalance()}`);

console.log(`Current Balance: ${newAccount.getbalance()}`);
