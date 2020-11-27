const title = document.getElementsByTagName("h1")[0];
title.setAttribute("name", "judulH1");

const ig = document.querySelector("section#a a");
ig.setAttribute("href", "instagram.com/kautsaralbana");

const p2 = document.querySelector(".p2");
p2.setAttribute("class", "para2"); // Merubah class yang ada

const para2 = document.getElementsByClassName("para2")[0];
para2.setAttribute("class", "p2"); // Merubah kembali class para2

p2.classList.add("p3", "p4", "p5"); // Menambahkan tanpa merubah
p2.classList.remove("p5"); // Menghapus yang tersedia
p2.classList.toggle("p5"); // Jika tidak ada ditambahkan == true, sebaliknya == false
