const numbers = [12, 56, 14, 67, 89, 33, 22];

numbers.sort();
console.log(numbers[numbers.length - 1]);
numbers.reverse();
console.log(numbers[0]);
console.log(typeof numbers[0]);

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

const avg = total / numbers.length;
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (avg > numbers[i]) {
    count++;
  }
}

console.log("Average = " + avg + ", Count = " + count);
