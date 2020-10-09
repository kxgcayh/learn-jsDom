// Create New Element
const newP = document.createElement("p");
const textNewP = document.createTextNode("New Paragraf");
// Save Text to Paragraf
newP.appendChild(textNewP);
// Save newP to end of Section A
const sectionA = document.getElementById("a"); // Get Parrents
sectionA.appendChild(newP);

// Create new li Element
const newLi = document.createElement("li");
const textNewLi = document.createTextNode("New li Item");
newLi.appendChild(textNewLi);
// Get Parrent
const ul = document.querySelector("section#b ul");
// Get specific li
const li2 = ul.querySelector("li:nth-child(2)"); // Child
// Insert li
ul.insertBefore(newLi, li2);

const ahref = document.getElementsByTagName("a")[0];
sectionA.removeChild(ahref);
