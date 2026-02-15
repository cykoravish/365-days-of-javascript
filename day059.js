// “Imagine you are designing a simple banking system.
// Each bank account should have a balance, but for security reasons, the balance should not be directly accessible or modifiable from outside the class.

// I want you to design a class called BankAccount where the balance is private.
// You should provide methods to deposit money and withdraw money.
// Also, make sure that the balance never goes negative.

// This question is to evaluate your understanding of encapsulation and data protection in JavaScript.”

class BankAccount {
  #balance;
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount <= 0) return `invalid amount to deposit`;
    this.balance = this.balance + amount;
    return `${amount} submitted successfully`;
  }
  withdraw(amount) {
    if (amount <= 0) return `invalid amount to withdraw`;
    if (balance < amount) return `you don't have enough balance to withdraw`;
    this.balance = this.balance - amount;
    return `${amount} withdrawal successfully`;
  }
}

const ravishAc = new BankAccount("Ravish", 1000);
let x = ravishAc.deposit(100)
console.log(ravishAc)
console.log(x)
