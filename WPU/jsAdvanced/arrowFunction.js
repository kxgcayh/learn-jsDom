let employee = ["Kautsar Al Bana", "Fharhan Amrin", "Tobias"];

// Function Expression
/* let countLength = employee.map(function (name) {
  return name.length;
});
console.log(countLength); */

// Arrow Function
/* let countLength = employee.map((name) => name.length);
console.log(countLength); */

// Arrow Function return to Obj
let countLength = employee.map((name) => ({
  // name: name, | atau, seperti:
  name,
  jmlHuruf: name.length,
}));
// console.log(countLength);
console.table(countLength);
