function inBackGround(name, energy) {
  // What happened in js background?
  /* let this = Object.create(inBackGround.prototype);

  this.name = name;
  this.energy = energy;

  return this; */
}

// Object Litteral
// Object ini hanya disimpan satu kali di dalam memory dan tidak dibuat ulang
const methodStudent = {
  breakfast: function (portion) {
    this.energy += portion;
    console.log(
      `Happy Breakfast ${this.name}, energy increased to ${this.energy}`
    );
  },

  play: function (times) {
    this.energy -= times;
    console.log(
      `Happy Breakfast ${this.name}, energy decreased to ${this.energy}`
    );
  },

  // Permasalahan muncul ketika membutuhkan method baru, maka harus mendaftarkannya juga pada function.

  sleep: function (times) {
    this.energy -= times * 2;
    console.log(
      `Happy Breakfast ${this.name}, energy decreased to ${this.energy}`
    );
  },
};

// Declare Object Function
function Student(name, energy) {
  this.name = name;
  this.energy = energy;
}

Student.prototype.breakfast = function (portion) {
  this.energy += portion;
  return `Happy Breakfast ${this.name}, energy increased to ${this.energy}`;
};

Student.prototype.play = function (times) {
  this.energy -= times;
  return `Happy Breakfast ${this.name}, energy decreased to ${this.energy}`;
};

Student.prototype.sleep = function (times) {
  this.energy += times * 2;
  return `Happy Breakfast ${this.name}, energy increased to ${this.energy}`;
};

// Instance variable
let kautsar = new Student("Kautsar", 10);
let fharhan = new Student("Fharhan", 15);
