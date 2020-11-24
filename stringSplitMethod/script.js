/* Cheque Reader Result:
o24581997 o032d854t600210107o 9
o002265 o082d691 50976d7765o
o102443 o112d879 063560793o
o002754o 062d201  0048d0177o
*/
// Enable Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Get Input Box Cheque Reader
const formScanner = document.getElementById("chqReader");
// Add keyup function to formScanner
formScanner.addEventListener("keyup", scanResult);
// Get Form Input on Nodelist
const formInput = document.querySelectorAll(".form-input");
// Convert Nodelist to Array
let formInputArr = Array.from(formInput);

function scanResult() {
  try {
    const scannedValue = this.value;
    var result = scannedValue.split(" ");
    return getInputValue(result);
  } catch (error) {
    return null;
  }
}

function getInputValue(resultScan) {
  for (let i = 0; i < formInputArr.length; i++) {
    resultScan[i];
  }
  return insertInputValue(resultScan);
}

function insertInputValue(res) {
  for (let i = 0; i < formInputArr.length; i++) {
    formInput[i].value = res[i].replace(/\D/g, "");
  }
}
