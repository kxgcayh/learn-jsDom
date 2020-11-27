// Declare Constant Variable
const box = document.querySelector(".box");
// Create onClick event
box.addEventListener("click", function () {
  let satu = "size",
    dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  // console.log(this);
  this.classList.toggle("size");
  setTimeout(() => {
    // console.log(this);
    this.classList.toggle("caption");
  }, 600);
});
