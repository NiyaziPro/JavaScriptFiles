const arr1 = [12, 56, 14, 33, 89, 67, 22];
const arr2 = [124, 342, 2, 56, 81, 1, 425];

const arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i] + arr2[i];
}

console.log(arr3);
