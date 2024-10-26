function factorial(number) {
  let num = 1;
  for (let i = number; i > 0; i--) {
    num *= i;
  }
  return num;
}

function calcWithFactorial(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += 1 / factorial(i);
  }
  return result;
}

console.log(calcWithFactorial(5));

function betweenNumber(x, y) {
  let count = 0;
  for (let i = 1; i <= x; i++) {
    if (i % y === 0) {
      count++;
    }
  }
  return count;
}

console.log(betweenNumber(5000, 21));
