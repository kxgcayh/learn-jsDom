/* function init() {
  function displayName(name) {
    console.log(name);
  }
  return displayName;
}

let callName = init();
callName("Kautsar"); */

// Factory Function
function sayHello(time) {
  return function (name) {
    console.log(`Hello ${name}, Good ${time}`);
  };
}

let morning = sayHello("Morning");
let afternoon = sayHello("Afternoon");
let night = sayHello("Evening");

// Private variable
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
