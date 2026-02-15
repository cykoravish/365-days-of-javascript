//Q.  Create a JavaScript object user with:

// name

// email

// a method getInfo() that returns "name - email"

const obj = {
  name: "ravish",
  email: "cykoravish@gmail.com",
  getInfo() {
    return `name is ${this.name} and email is ${this.email}`;
  },
};
console.log(obj);
