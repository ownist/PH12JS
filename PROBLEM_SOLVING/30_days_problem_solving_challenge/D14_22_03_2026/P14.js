// /---------------------- rejected code
// function findMissingNumber(arr) {
//   let actualArraySum = 0;
//   let totalSum = 0;

//   // actual output
//   for (let i = 0; i < arr.length; i++) {
//     actualArraySum += arr[i];
//   }

//   // total sum
//   for (let i = 1; i <= arr[arr.length - 1]; i++) {
//     totalSum += i;
//   }

//   return totalSum - actualArraySum;
// }

// clean code

function findMissingNumber(arr) {
  const n = arr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (const num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

const input = [1];
const output = findMissingNumber(input);
console.log(output);
