function splitIt(value) {
  console.log(this);
  var res = value.split(" ");
  // $("#ChqNumber").val(res[0]);
  const input1 = document.getElementById("inputOne");
  input1.value(res[0]);
  // $("#BSB").val(res[1]);
  const input2 = document.getElementById("inputTwo");
  input2.value(res[1]);
  // $("#AcctNumber").val(res[2]);
  const input3 = document.getElementById("inputThree");
  input3.value(res[2]);

  // var question = confirm(`Is ${input1} ok?`);
  // let txt;
  // if (question == true) {
  //   txt = input1 + " " + input2 + " " + input3;
  // } else {
  //   txt = "Value is invalid";
  // }

  // swalWithBootstrapButtons
  //   .fire({
  //     title: "AmountPldg : " + amountplg.toString() + "<br>Is this correct?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes",
  //     cancelButtonText: "No",
  //     reverseButtons: false,
  //   })
  //   .then((result) => {
  //     console.log("result", result);
  //     if (result.value) {
  //       updateData();
  //       // swalWithBootstrapButtons.fire(
  //       //     'Deleted!',
  //       //     'Your file has been deleted.',
  //       //     'success'
  //       // );
  //     } else if (
  //       /* Read more about handling dismissals below */
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       $("#ChqNumber").val(ChqNumber);
  //       $("#BSB").val(BSB);
  //       $("#AcctNumber").val(AcctNumber);
  //     }
  //   });
}
