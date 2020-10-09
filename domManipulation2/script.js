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
// Remove
const ahref = document.getElementsByTagName("a")[0];
sectionA.removeChild(ahref);
// Replace
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
const newH2 = document.createElement("h2");
const textNewH2 = document.createTextNode("New Title");
newH2.appendChild(textNewH2);
// Change p4 to newH2
sectionB.replaceChild(newH2, p4);
