// Use getElementById to get the two numbers and store them in variables

// Create a function called multiplyNumbers
// In the function use getElementById to change the ? to the answer of the equation

// If you get that working, create new forms for the other arithmetic operators

// // Adding Event Listeners in JavaScript
// document.getElementById("multEqual").addEventListener("click", function () {
//   math();
// });

// function math() {
//   //
//   var num1 = document.getElementById("inputNum1").value;
//   var num2 = document.getElementById("inputNum2").value;
//   var total = num1 * num2;

//   document.getElementById("multiplyAnswer").innerHTML = total;
//   console.log(total);
// }

// Adding Event Listeners in JavaScript
document.getElementById("multEqual").addEventListener("click", function () {
  var num1 = document.getElementById("inputNum1").value;
  var num2 = document.getElementById("inputNum2").value;
  var total = num1 * num2;

  document.getElementById("multiplyAnswer").innerHTML = total;
  console.log(total);
});
