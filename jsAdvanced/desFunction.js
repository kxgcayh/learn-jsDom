// Destructuring function in Array
console.log("1. Destructuring function in Array");
function calculate(a, b) {
  return [a + b, a - b, a * b, a / b];
}
// Jika destructuring menggunakan Array, maka urutan harus terstruktur.
const [plus, minus, multiple, division = "none"] = calculate(3, 6);
console.log(`Hasil dari array = ${minus}`);

// Destructuring function in Object
console.log("2. Destructuring function in Object");
function calculate0(a, b) {
  return {
    plus0: a + b,
    minus0: a - b,
    multiple0: a * b,
    division0: a / b,
  };
}
const { minus0, plus0, multiple0, division0 } = calculate0(3, 8);
console.log(minus0);

// Destructuring function arguments
console.log("3. Destructuring function arguments");
const emp0 = {
  name: "Kautsar",
  age: 20,
  email: "email@val.com",
  // Nesting Object
  score: {
    task: 80,
    uts: 85,
    uas: 83,
  },
};

function printEmp({
  name,
  age,
  // Nesting
  score: { task, uts, uas },
}) {
  return `Hello, my name is ${name}, and I\'m ${age} years old. My score task is ${task}, ${uts}, and ${uas}`;
}

console.log(printEmp(emp0));
