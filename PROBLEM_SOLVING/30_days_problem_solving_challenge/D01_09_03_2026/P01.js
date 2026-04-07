function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    return "Array is empty";
  }

  let largestNumber = numbers[0];
  // comparing using for loop
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  // return largestNumber
  return largestNumber;
}

const input = [10, 22, 8, 45, 3];
const output = findLargestNumber(input);
console.log(output);
