class Student {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  breakfast(portion) {
    this.energy += portion;
    return `Happy Breakfast ${this.name}, energy increased to ${this.energy}`;
  }

  play(times) {
    this.energy -= times;
    return `Happy Breakfast ${this.name}, energy decreased to ${this.energy}`;
  }

  sleep(times) {
    this.energy += times * 2;
    return `Happy Breakfast ${this.name}, energy increased to ${this.energy}`;
  }
}

let kautsar = new Student("Kautsar", 10);
let fharhan = new Student("Fharhan", 15);
