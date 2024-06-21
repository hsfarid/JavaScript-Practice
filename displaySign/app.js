//define variables
const x = Number(prompt("Enter first number"));
const y = Number(prompt("Enter second number"));
const z = Number(prompt("Enter third number"));

if (x > 0 && y > 0 && z > 0) {
  alert("The sign of the product is +");
} else if (x < 0 && y < 0 && z > 0) {
  alert("The sign of the product is +");
} else if (x < 0 && y > 0 && z < 0) {
  alert("The sign of the product is +");
} else if (x > 0 && y < 0 && z < 0) {
  alert("The sign of the product is +");
} else {
  alert("The sign of the product is -");
}
