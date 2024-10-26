const students = ["David", "Steve", "Jack", "Emily"];

console.log(students);

console.log(typeof students); // object

console.log(students[2]);

students[3] = "Denis";

console.log(students);

console.log(students[1].length);
console.log(students.length);

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

console.log("=======================");
students.forEach((t) => console.log(t));

let total = 0;
const numbers = [12, 56, 14, 67, 89, 33, 22];

console.log("=======================");
numbers.forEach((element) => {
  total += element;
});
console.log(total);
console.log("=======================");
total = 0;
numbers.forEach((t) => (total += t));
console.log(total);
console.log("=======================");

total = 0;
total = numbers.reduce((acc, t) => acc + t, 0);
console.log(total);
