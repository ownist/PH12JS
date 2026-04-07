function sumOfEvenNumbers(arr) {
  let evenSum = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    }
  }

  return evenSum;
}

const input = [10, 15, 20];
const output = sumOfEvenNumbers(input);
console.log(output);
