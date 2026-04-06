// 8. comma operator

let x = 5;

x = (x++, x);
console.log(x);

let y = (2, 4);
console.log(y);

// using complex
let array = [[1, 2, 3, 4], [5, 8, 9, 4, 7], [2, 7, 9], [4]];

for (let i = 0, j = 3; i <= 3; i++, j--) {
  console.log(`a[${i}][${j}] = ${array[i][j]}`);
}
