//Q. what is Encapsulation in javascript ?
// Encapsulation means wrapping data and methods together and restricting direct access to data.

class Account {
  #balance = 0;

  addMoney(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

// ➡️ Data (balance) is protected
// ➡️ Access only through methods