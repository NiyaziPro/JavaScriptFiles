const num1 = Number(prompt("Enter first number"));
const num2 = Number(prompt("Enter second number"));
const num3 = Number(prompt("Enter third number"));

const average = (num1 + num2 + num3) / 3;

if (average > num1) {
  alert("Profit" + average);
} else {
  alert("Loss" + average);
}
