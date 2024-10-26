let row = 19;
let star = "";

for (let i = 0; i < row; i++) {
  for (let k = 0; k <= i; k++) {
    if (i === k) {
      star += "*";
    } else {
      star += " ";
    }
  }
  star += "\n";
}
console.log(star);
