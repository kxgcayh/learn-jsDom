// Enable Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Get Input Box Cheque Reader
const formScanner = document.getElementById("stCheque");
// Add keyup function to formScanner
formScanner.addEventListener("keyup", chequeReader);
// Get Form Input on Nodelist
const formInput = document.querySelectorAll(".form-input");
// Convert Nodelist to Array
let formInputArr = Array.from(formInput);

for (let i = 0; i < formInput.length; i++) {
  formInput[i].addEventListener("keyup", chequeReader);
}

function reload() {
  window.location.reload();
  formScanner.value = "";
  formInputArr[0].value = "";
  formInputArr[1].value = "";
  formInputArr[2].value = "";
}

function chequeReader() {
  try {
    // Get Cheque Reader Inputbox Value
    const scannedValue = this.value;
    // Trim Cheque Reader Value
    const trimValue = scannedValue.replace(/\s/g, "");

    // Declare Separator
    let firstO = trimValue.search("o");
    let secondO = trimValue.indexOf("o", firstO + 1);
    let firstT = trimValue.indexOf("t", secondO);

    let bsb = trimValue.substr(firstO, secondO + 1);
    let acctNum = trimValue.substr(bsb.length, firstT - bsb.length);
    let cheque = trimValue.substr(firstT, trimValue.length);

    const bsbVal = bsb.replace(/\D/g, "");
    const aactNumVal = acctNum.replace(/\D/g, "");
    const chequeVal = cheque.replace(/\D/g, "");
    // Insert into Input Box 1
    formInputArr[0].value = bsbVal;
    formInputArr[1].value = aactNumVal;
    formInputArr[2].value = chequeVal;
  } catch (error) {
    return null;
  }
}
