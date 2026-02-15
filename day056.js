// Create a class Payment with method pay()
// Then create:

// CreditCardPayment

// UPIPayment

// Both should override pay() and print different messages.

class Payment {
  pay() {}
}

class CreditCardPayment extends Payment {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  pay() {
    console.log(`Paid ₹${this.amount} using Credit Card`);
  }
}

class UPIPayment extends Payment {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  pay() {
    console.log(`Paid ₹${this.amount} using UPI`);
  }
}
