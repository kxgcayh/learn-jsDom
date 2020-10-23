// 1. Object Litteral
// Dummy Ways
/* let employee = {
  name: "Kautsar Al Bana",
  energy: 10,
  // Method
  breakfast: function (portion) {
    this.energy = this.energy + portion;
    console.log(`Welcome ${this.name}, it is Object Litteral`);
    console.log(`Your energy is ${this.energy}`);
  },
};

let employee2 = {
  name: "Fharhan Amrin",
  energy: 5,
  // Method
  breakfast: function (portion) {
    this.energy = this.energy + portion;
    console.log(`Welcome ${this.name}, it is Object Litteral`);
    console.log(`Your energy is ${this.energy}`);
  },
}; */

// 2. Function Declaration
/* function Employee(name, energy) {
  // Create Object
  let employee = {};

  // Properties
  employee.name = name;
  employee.energy = energy;

  // Method
  employee.breakfast = function (portion) {
    this.energy += portion;
    console.log(`Welcome ${this.name}, it is Object Litteral`);
    console.log(`Your energy is ${this.energy}`);
  };

  employee.play = function (hour) {
    this.energy -= hour;
    console.log(`Welcome ${this.name}, it is Object Litteral`);
    console.log(`Your energy is ${this.energy}`);
  };

  return employee;
}
// How to Defined variable
let kautsar = Employee("Kautsar", 15);
// How to use Method inside Function
kautsar.breakfast(5); */

/* // 3. Constructor Function
function Employee(name, energy) {
  // Properties
  this.name = name;
  this.energy = energy;

  // Method
  this.breakfast = function (portion) {
    this.energy += portion;
    console.log(`Welcome ${this.name}, it is Object Litteral`);
    console.log(`Your energy is ${this.energy}`);
  };

  this.play = function (hour) {
    this.energy -= hour;
    console.log(`Welcome ${this.name}, it is Object Litteral`);
    console.log(`Your energy is ${this.energy}`);
  };
}
// How to Defined variable
let kautsar = new Employee("Kautsar", 15);
// How to use Method inside Function
kautsar.breakfast(5);
 */

// 2. Function Declaration
const methodEmployee = {
  breakfast: function (portion) {
    this.energy += portion;
    console.log(`Welcome ${this.name}, it is Object Litteral`);
    console.log(`Your energy is ${this.energy}`);
  },

  play: function (hour) {
    this.energy -= hour;
    console.log(`Welcome ${this.name}, it is Object Litteral`);
    console.log(`Your energy is ${this.energy}`);
  },

  sleep: function (hour) {
    this.energy += hour * 2;
    console.log(`Welcome ${this.name}, it is Object Litteral`);
    console.log(`Your energy is ${this.energy}`);
  },
};

function Employee(name, energy) {
  // Create Object
  let employee = Object.create(methodEmployee);

  // Properties
  employee.name = name;
  employee.energy = energy;

  return employee;
}
// How to Defined variable
let kautsar = Employee("Kautsar", 15);
// How to use Method inside Function
kautsar.breakfast(5);
