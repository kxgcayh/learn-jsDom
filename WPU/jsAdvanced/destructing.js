// Destructing Variable/Assignment

// Destructing Array
console.log("1. Destructing Array");
const desArray = ["Halo", "my", "name", "is", "Kautsar Al Bana"];
const [halo, my, name, is, kautsar] = desArray;
console.log(halo);

// Skipping Array
console.log("2. Skipping Array");
const skipArray = ["It", "is", "can", "skip", "array"];
const [, , , skip, array] = skipArray;
console.log(`${skip}  ${array}`);

// Swap Items
console.log(`3. Swap Items`);
let swapA = 1,
  swapB = 2;
console.log(`Hasil variable sebelum swap adalah ${swapB}`);
[swapA, swapB] = [swapB, swapA];
console.log(`Hasil variable setelah swap adalah ${swapB}`);

// Return Value to Function
console.log(`4. Return Value to Function`);
function retValToFun() {
  return [1, 2];
}

const [a, b] = retValToFun();
console.log(b);

// Rest Parameter
console.log(`5. Rest Parameter`);
const [restA, ...restValues] = [1, 2, 3, 4, 5];
console.log(`Tampil array pertama ${restA}`);
console.log(`Tampil kumpulan array ${restValues}`);

// Destructuring Object
console.log("6. Destructuring Object");
const desObj0 = {
  objName0: "Kautsar",
  objAge0: 20,
};

const { objName0, objAge0 } = desObj0;
console.log(objName0);

// Assignment without Variable
console.log("7. Assignment without Variable");
({ objName1, objAge1 } = { objName1: "Kautsar Al Bana", objAge1: 20 });
console.log(objName1);

// Assign to New Variable
console.log("8. Assign to New Variable");
const desObj2 = {
  objName2: "Kautsar",
  objAge2: 20,
};

const { objName2: nm, objAge2: ag } = desObj2;
console.log(ag);

// Give default Value
console.log("9. Give default Value");
const desObj3 = {
  objName3: "Kautsar",
  objAge3: 20,
  // objEmail3: "changed@value.com", // Uncomment for change default Value
};

const {
  objName3: nm3,
  objAge3: ag3,
  objEmail3: em3 = "test@default.com",
} = desObj3;
console.log(em3);

// Get field from Object, then return to parameter for function
console.log("10. Get field from Object, then return to parameter for function");
const desObj4 = {
  objId4: 21,
  objName4: "Kautsar",
  objAge4: 20,
  objEmail4: "test@objval.com",
};

// Get selected value 'id', 'name', or 'email'
function getIdDesObj4({ objId4, objName4 }) {
  return objId4 + objName4;
}
// 1. Send All Object
console.log(getIdDesObj4(desObj4));
