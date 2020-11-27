// Declare Function
function Student(name, energy) {
  let student = {};
  student.name = name;
  student.energy = energy;

  student.breakfast = function (portion) {
    this.energy += portion;
    console.log(
      `Happy Breakfast ${this.name}, energy increased to ${this.energy}`
    );
  };

  student.play = function (portion) {
    this.energy -= portion;
    console.log(
      `Happy Breakfast ${this.name}, energy decreased to ${this.energy}`
    );
  };

  return student;
}

// Instance variable
let kautsar = Student("Kautsar", 10);
let fharhan = Student("Fharhan", 15);
