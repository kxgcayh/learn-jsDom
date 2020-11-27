// Looping
/* const mhs = [
  {
    name: "Kautsar Al Bana",
    email: "kautsaralbana@gmail.com",
  },
  {
    name: "Tobias",
    email: "teletobies@tob.com",
  },
];

const element = `<div class="mhs">
  ${mhs
    .map(
      (m) => `<ul>
      <li>${m.name}</li>
      <li>${m.email}</li>
    </ul>`
    )
    .join("")}
</div>`; */

document.body.innerHTML = element;
