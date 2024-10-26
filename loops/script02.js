let num = prompt("Enter your number");
let total = 0;

for (let i = 0; i < num.length; i++) {
  let present = Number(num.charAt(i));
  total += present;
  console.log(total);
}
console.log(total);
