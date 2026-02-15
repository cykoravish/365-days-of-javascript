// Q. what is Polymorphism in javscript ?

// Polymorphism means same method name but different behavior, depending on the object.

class User {
  role() {
    console.log("Normal user");
  }
}

class Admin extends User {
  role() {
    console.log("Admin user");
  }
}

const u = new User();
const a = new Admin();

u.role(); // Normal user
a.role(); // Admin user

// Polymorphism allows methods to behave differently in different classes.