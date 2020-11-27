// document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "blue";
p4.style.fontSize = "25px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "green";

// document.querySelectorAll() -> nodeList
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length - 1; i++) {
  p[i].style.backgroundColor = "gray";
}

// Change node root
const sectionB = document.querySelector("section#b");
const para4 = sectionB.getElementsByTagName("p")[0];
para4.style.backgroundColor = "orange";
