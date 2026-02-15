// Create a class Shape with method area()
// Then create:

// Rectangle class → returns length * width

// Circle class → returns π * r * r

// 👉 Use method overriding (area() in each class).

class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const rect = new Rectangle(2, 5);
const cir = new Circle(3);

console.log(rect.area());
console.log(cir.area()); 
