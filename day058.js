// “Suppose you are designing a system for an online shopping application.
// There are different types of products, but all products share some common behavior.

// I want you to create a base class called Product that contains common properties such as name and price, and a method called getPrice().

// Then, create a subclass called DiscountedProduct that inherits from Product. This subclass should apply a discount to the price and override the getPrice() method to return the discounted price.

// This question is to test your understanding of inheritance and method overriding in JavaScript.”

// ✅ What you need to do (clear steps)
// Create a Product class
// constructor: name, price
// method: getPrice() → returns price
// Create DiscountedProduct class
// extends Product
// extra property: discount (percentage)
// override getPrice() to apply discount

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getPrice(){
        return `price: ${this.price}`;
    }
}

class DiscountedProduct extends Product{
    constructor(name, price, discount){
        super(name,price);
        this.discount = discount;
    }
    getPrice(){
         return `price: ${this.price - (this.price * (20/100))}`; 
    }
}

const prod = new Product("Book", 100);
const DiscountProd = new DiscountedProduct("Book", 100);
console.log(prod.getPrice());
console.log(DiscountProd.getPrice());