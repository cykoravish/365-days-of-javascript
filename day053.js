// 🟠 Coding Question 9 (OOP – Classes Practice)
// Create a class Employee with:
// name
// salary
// method getSalary()
// Then create a class Manager that:
// extends Employee
// adds department
// overrides getSalary() to return salary + 20% bonus

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getSalary() {
    return this.salary + this.salary * 0.2;
  }
}

const ravish = new Manager("Ravish", 200, "Tech");
console.log(ravish.getSalary()); // 240
