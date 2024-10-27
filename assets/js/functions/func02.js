function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}

console.log(sum(4, 4435));

function average(num1, num2, num3) {
  const result = Number((num1 + num2 + num3) / 3);
  return result;
}

let avg = average(134, 56, 2);
console.log(avg);

function factorial(number) {
  let num = 1;
  for (let i = number; i > 0; i--) {
    num *= i;
  }
  return num;
}

alert(factorial(10));
alert(factorial(5));
