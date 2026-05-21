const arr = [25, 45, 85, 12, 3, 65, 85, 17, 56, 94, 52];

function sumOfEvenNumbers(arr) {
  let sum = 0;

  console.log(`array = ${arr}`);
  console.log("----------");

  for (const n of arr) {
    if (n % 2 === 0) {
      console.log(
        `sum er ager value: ${sum}, and bortoman even value: ${n}. rnow "${sum} + ${n}" = ${(sum += n)}`,
      );
    }
  }

  console.log("\n----------------");

  return `total sum of even numbers are: ${sum}.`;
}

const output = sumOfEvenNumbers(arr);
console.log(output);
