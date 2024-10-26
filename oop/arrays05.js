function plusOne(arr) {
  let i = arr.length - 1;
  let inHand = 1;
  while (inHand > 0 && i >= 0) {
    if (arr[i] === 9) {
      arr[i] = 0;
      if (i === 0) {
        arr.unshift(1);
        inHand = 0;
      }
    } else {
      arr[i] = arr[i] + inHand;
      inHand = 0;
    }
    i--;
  }
  return arr;
}

console.log(plusOne([9, 9, 9, 9, 9, 9, 9]));
console.log(plusOne([4, 5, 8, 7, 6, 12, 43]));
console.log(plusOne([49, 49, 49, 59, 69]));
