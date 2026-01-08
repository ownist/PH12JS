// using while loop
let num = 1;

while (num <= 10) {
  if (num % 2 === 0) {
    console.log(`even number: ${num}`);
  } else {
    console.log(`odd number: ${num}`);
  }
  num++;
}

console.log("\n"); // for create a new line

// using for loop
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
