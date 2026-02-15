//Q. what is Inheritance in javscript

// Inheritance allows a class to reuse properties and methods of another class.

class User {
  login() {
    console.log("User logged in");
  }
}

class Admin extends User {
  deleteUser() {
    console.log("User deleted");
  }
}

const admin = new Admin();
admin.login(); // inherited

// Inheritance promotes code reusability using the extends keyword.