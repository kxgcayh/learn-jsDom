// Constructor Function
const Employee = function () {
  // Lexical Scope
  this.name = "Kautsar";
  this.age = 20;
  this.sayHello = function () {
    console.log(`My name is ${this.name}, and I\'m ${this.age}`);
  };

  setInterval(() => {
    // Arrow Function tidak memiliki konsep `this`, maka this akan mencari di Lexical Scope
    console.log(this.age++);
  }, 500);
};

const kautsar = new Employee();
