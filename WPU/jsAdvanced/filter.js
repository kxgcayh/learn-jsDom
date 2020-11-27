const number = [-1, 5, 6, 7, -8, 2, 3, 4, -9, 10];

// For
const loopByFor = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] >= 3) {
    // Push value to empty Array Object
    loopByFor.push(number[i]);
  }
}
console.log(`Get filtered data with for \n`, loopByFor);

// Filter
const filterByConst = number.filter(function (data) {
  return data >= 3;
});
console.log(`Filter data with Constructor \n`, filterByConst);

// Filter with Arrow Function
const filterByArrow = number.filter((data) => data >= 3);
console.log(`Filter data with Arrow Function \n`, filterByArrow);
