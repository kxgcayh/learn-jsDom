/*
  Jika mau looping property dari object, gunakan for in.
  Jika mau looping isi array dan iterables object, gunakan for of
*/

// Array
const emp = ["Kautsar", "Tobias", "Fharhan"];

// For
console.log("1. Loop use For");
for (let i = 0; i < emp.length; i++) {
  console.log(emp[i]);
}

// ForEach Loop - Khusus untuk Array
console.log("\n2.1 ForEach Loop");
emp.forEach((e) => console.log(e));
// Get Index
console.log("\n2.2 ForEach Loop with Index");
emp.forEach((e, i) => {
  console.log(`${e} adalah employee ke-${i}`);
});

// For .. Of Loop - Tidak memiliki Index
console.log("\n3.1 ForOf Loop");
for (const e of emp) {
  console.log(e);
}
// Other way to get index in for of is Entries
console.log("\n3.2 For Of Index(entries)");
for (const [i, f] of emp.entries()) {
  console.log(`${f} adalah employee ke-${i + 1}`);
}

// NodeList
const liName = document.querySelectorAll(".name");
// Node List For Each Loop
console.log("\n4.1 NodeList ForEach Loop");
liName.forEach((n) => {
  console.log(n.textContent);
});
// NodeList for of loop
console.log("\n4.2 NodeList ForOf Loop");
for (const ln of liName) {
  console.log(ln.innerHTML);
}

// Arguments
console.log("\n5. Looping Arguments");
function countNumber() {
  // Arguments below is not an array
  // // return arguments.reduce((a, i) => a + i);
  let count = 0;
  // // arguments.forEach((a) => (count += a));

  for (a of arguments) {
    count += a;
  }
  return count;
}
console.log(countNumber(1, 2, 3, 4, 5));

// For In Loop
console.log("\n6. For In Loop");
const emp0 = {
  name: "Kautsar",
  age: 20,
  email: "kautsar@val.com",
};

console.log("Get Object Property using for in");
for (e0 in emp0) {
  console.log(e0);
}
console.log("\nGet Object Value using for in ");
for (e0 in emp0) {
  console.log(emp0[e0]);
}
