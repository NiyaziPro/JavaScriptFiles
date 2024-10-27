// let count = 0;
// for (var i = 0; i <= 10; i++) {
//   console.log("Count : " + count);
//   count++;
// }



let total = 0;
let i=1;
for( i=1;i<=4;i++){
    let num = Number(prompt("Enter "+i+"number"))
    total +=num;
    console.log(num)
}

let average = total/(i-1);
console.log(average)
