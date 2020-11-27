// Spread Operator, memecah iterables menjadi single element
console.log(`Spread Operator, memecah iterables menjadi single element`);

const emp0 = ["Kautsar", "Al", "Bana"];
const emp1 = ["Dody", "Hendra", "Rifky"];
// Array
console.log(emp0);
// Spreaded = K a u t s a r
console.log(emp0[0]);

// Menggabungkan 2 Array
console.log("\n1.1 Combine 2 Array");
// //const empY = emp0.concat(emp1);
// Spread can insert value inside combined array
const empX = [...emp0, ...emp1];
console.log(empX);
// Insert Value inside combined Array
console.log("\n1.2 Insert Value inside combined Array");
const empZ = [...emp0, "Budi", "Doremi", ...emp1];
console.log(empZ);

// Copy Array
console.log("\n2. Copy Array");
// Dibawah ini adalah cara yang salah karena menimpa array sebelumnya
// // emp0[0] = "Udin";
const emp3 = [...emp0];
emp0[0] = "Udin";
console.log(emp3);

// Get Spread NodeList Array
console.log("\n3. Get Spread NodeList Array");
const liEmp = document.querySelector(".name");
// Old Way
// //const loopEmp = [];
// //for (let i = 0; i < liEmp.length; i++) {
// //  loopEmp.push(liEmp[i].textContent);
// //}
// //console.log(loopEmp);
const alphabet = [...liEmp.textContent]
  .map((a) => `<span>${a}</span>`)
  .join("");
// console.log(alphabet);
liEmp.innerHTML = alphabet;
