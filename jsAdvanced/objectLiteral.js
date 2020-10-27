// Object Literal
let student = {
  name: "Kautsar",
  energy: 10,
  breakfast: function (portion) {
    this.energy = this.energy + portion;
    console.log(
      `Happy Breakfast ${this.name}, energy gained is ${this.energy}`
    );
  },
};

let student2 = {
  name: "Fharhan",
  energy: 20,
  breakfast: function (portion) {
    this.energy = this.energy + portion;
    console.log(
      `Happy Breakfast ${this.name}, energy gained is ${this.energy}`
    );
  },
};
