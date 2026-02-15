// Create a class UserAccount with:

// private property #password

// constructor to set the password

// method checkPassword(inputPassword) that returns true or false

class UserAccount{
    #password;
    constructor(password){
        this.#password = password;
    }
    checkPassword(inputPassword){
     return inputPassword === this.#password;
    }
}
const user = new UserAccount("1234");
console.log(user.checkPassword("1234"));