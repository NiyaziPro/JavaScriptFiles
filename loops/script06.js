let row = 10;
let star = "";

for (let i = 0; i < row; i++) {
  for (let k = 0; k <= row + i; k++) {
    if (i + k >= row) {
      star += "* ";
    } else {
      star += "  ";
    }
  }
  star += "\n";
}
console.log(star);
