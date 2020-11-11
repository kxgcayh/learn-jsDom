/* const test = new Promise((resolve) => {
  setTimeout(() => {
    resolve("finish");
  }, 2000);
}); */
// console.log(test);
// test.then(() => console.log(test));

function testPromise() {
  return new Promise((resolve, reject) => {
    // const time = 3000;
    const time = 9000;
    if (time < 5000) {
      setTimeout(() => {
        resolve("finish");
      }, 2000);
    } else {
      reject("too late");
    }
  });
}

// const test = testPromise();
// test.then((test) => console.log(test));

async function testAsync() {
  try {
    const test = await testPromise();
    console.log(test);
  } catch (error) {
    console.error(error);
  }
}

testAsync();
