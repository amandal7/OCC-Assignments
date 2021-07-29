let myForm = document.getElementById("formwrapper");
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  var formData = new FormData(myForm),
    result = {};

  for (var entry of formData.entries()) {
    result[entry[0]] = entry[1];
  }
  result = JSON.stringify(result);
  console.log(result);
});

// console.log(document.getElementsByClassName(""));
// console.log(document.getElementsByTagName("form"));
