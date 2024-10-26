// Nested Loop

let row = 5;
let column = 10;
let star = "";

for (let i = 0; i < row; i++) {
  for (let k = 0; k < column; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

