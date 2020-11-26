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
    const scannedValue = this.value;
    const trimValue = scannedValue.replace(/\s/g, "");

    // Declare Separator
    let firstValue = trimValue.search("o");
    let secondValue = trimValue.indexOf("o", firstValue + 1);
    let thirdValue = trimValue.indexOf("t", secondValue);

    let input1 = trimValue.substr(firstValue, secondValue + 1);
    let input2 = trimValue.substr(input1.length, thirdValue - input1.length);
    let input3 = trimValue.substr(thirdValue, trimValue.length);

    const form1Value = input1.replace(/\D/g, "");
    const form2Value = input2.replace(/\D/g, "");
    const form3Value = input3.replace(/\D/g, "");
    // Insert into Input Box 1
    formInputArr[0].value = form1Value;
    formInputArr[1].value = form2Value;
    formInputArr[2].value = form3Value;
  } catch (error) {
    return null;
  }
}
