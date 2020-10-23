// Function Constructor
/* function Employee(name, energy) {
  // Properties
  this.name = name;
  this.energy = energy;
}

Employee.prototype.breakfast = function (portion) {
  this.energy += portion;
  return `Welcome ${this.name}, happy breakfast`;
};

Employee.prototype.play = function (hour) {
  this.energy -= hour;
  return `Welcome ${this.name}, please take a rest`;
};

Employee.prototype.sleep = function (hour) {
  this.energy += hour * 2;
  return `Welcome ${this.name}, happy sleep`;
};
// How to Defined variable
let kautsar = new Employee("Kautsar", 15); */

// Class Constructor
class Employee {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  breakfast(portion) {
    this.energy += portion;
    return `Welcome ${this.name}, happy breakfast`;
  }

  play(hour) {
    this.energy -= hour;
    return `Welcome ${this.name}, please take a rest`;
  }

  sleep(hour) {
    this.energy += hour * 2;
    return `Welcome ${this.name}, happy sleep`;
  }
}
// How to Defined variable
let kautsar = new Employee("Kautsar", 15);
