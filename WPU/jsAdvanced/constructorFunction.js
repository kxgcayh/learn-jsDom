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
  let student = {};
  student.name = name;
  student.energy = energy;
  student.breakfast = methodStudent.breakfast;
  student.play = methodStudent.play;
  student.sleep = methodStudent.sleep;

  return student;
}

// Instance variable
let kautsar = Student("Kautsar", 10);
let fharhan = Student("Fharhan", 15);
