// Abstraction in javascript
// Abstraction is the process of hiding implementation details and exposing only essential features to the user.

class PaymentService {
  pay(amount) {
    console.log(`Payment of ${amount} is successful`);
  }
}
const payment = new PaymentService();
payment.pay(100);

// User only calls pay()

// Internal logic (API calls, validations, DB) is hidden