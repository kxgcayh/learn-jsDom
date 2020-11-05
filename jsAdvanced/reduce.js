const number = [-1, 5, 6, 7, -8, 2, 3, 4, -9, 10];

// Jumlah semua angka pada array
const newNumber = number.reduce(
  (accumulate, currentVal) => accumulate + currentVal,
  9
);
console.log(newNumber);

// Method Chaining
const result = number
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur);
console.log(result);
