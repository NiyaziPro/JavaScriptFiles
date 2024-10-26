let personal = [
  { name: "David", birthday: 1990, salary: 5000 },
  { name: "Jack", birthday: 1977, salary: 7000 },
  { name: "Steve", birthday: 1975, salary: 9000 },
  { name: "John", birthday: 1985, salary: 4500 },
];

console.log(personal.length);

const currentDate = new Date().getFullYear();
console.log(currentDate);

let totalAge = 0;
for (let i = 0; i < personal.length; i++) {
  const age = currentDate - personal[i].birthday;
  totalAge += age;
}
const averageAges = totalAge / personal.length;

console.log(averageAges);
