// Enable Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Get Input Box Cheque Reader
const formScanner = document.getElementById("chqReader");
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
  formInputArr[0].value = "";
  formInputArr[1].value = "";
  formInputArr[2].value = "";
}

function chequeReader() {
  try {
    const scannedValue = this.value;
    let result = scannedValue.split(" ");
    return splitedValue(result);
  } catch (error) {
    return null;
  }
}

function splitedValue(result) {
  for (let i = 0; i < formInputArr.length; i++) {
    result[i];
  }
  return getDigitOnly(result);
}

function getDigitOnly(res) {
  let frmInput1 = formInputArr[0];
  let frmInput2 = formInputArr[1];
  let frmInput3 = formInputArr[2];

  const resLth = [];
  for (let i = 0; i < res.length; i++) {
    resLth[i] = res[i].replace(/\D/g, "").length;
  }
  // Get Digit Only
  frmInput1.value = res[0].replace(/\D/g, "");

  if (res[1].includes("t")) {
    // alert('ok');
    resX = res[1].split("t");
    frmInput2.value = resX[0].replace(/\D/g, "");
    frmInput3.value = resX[1].replace(/\D/g, "");
  } else {
    frmInput2.value = res[1].replace(/\D/g, "");
    frmInput3.value = res[2].replace(/\D/g, "");
  }

  if (res[2].length <= 2) {
  }
}
