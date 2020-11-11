/* // Example  1
console.log("\n1. Promise 1");
let ditepati = true;
// let ditepati = false;
const promise1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji telah ditepati");
  } else {
    reject("Ingkar janji");
  }
});
promise1
  .then((response) => console.log("Ok: " + response))
  .catch((response) => console.log("Not Ok: " + response)); */

// Example 2
let ditepati = true;
console.log("2. Promise 2");
const promise2 = new Promise((reslove, reject) => {
  if (ditepati) {
    setTimeout(() => {
      reslove("Ditepati setelah 2 detik");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Tidak ditepati setelah 3 detik");
    }, 3000);
  }
});
console.log("start");
// console.log(promise2.then(() => console.log(promise2)));
promise2
  .finally(() => console.log("Menunggu selesai"))
  .then((response) => console.log("Ok: " + response))
  .catch((response) => console.log("Not Ok: " + response));
console.log("finish");
