/* Dom Selection  Part 1*/
// document.getElementById() -> elemnt
const title = document.getElementById("judul");
title.style.color = "white";
title.style.backgroundColor = "gray";
title.innerHTML = "Hello Kautsar";

// document.getElementsByTagName -> HTMLCollections
const p = document.getElementsByTagName("p");
let blueLight = "lightblue";
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = blueLight;
}

// Convert HTMLCollections to Element by defined specific index
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "25px";

// document.getElemetsByClassName -> HTMLCollections
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "This text changed by Javascript";
