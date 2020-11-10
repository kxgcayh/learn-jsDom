// Callback

// Syncronous
// function helo(name) {
//   alert(`Hello ${name}`);
// }

/* function showMsg(par) {
  const name = prompt("Insert your name: ");
  par(name);
}

// showMsg(helo);
showMsg((name) => {
  alert(`Halo ${name}`);
}); */

// Asynchronous Callback - Vannila
/* function getDataEmployee(url, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 400) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}

console.log("start");
getDataEmployee(
  "data/employee.json",
  (results) => {
    // console.log(JSON.parse(results));
    const emp = JSON.parse(results);
    emp.forEach((v) => console.log(v.name));
  },
  () => {
    //
  }
);
console.log("finish"); */

// Jquery
$.ajax({
  url: "data/employee.json",
  success: (emp) => {
    console.log(emp);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
