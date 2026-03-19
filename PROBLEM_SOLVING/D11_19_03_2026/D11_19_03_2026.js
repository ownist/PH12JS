function findMostFrequent(arr) {
  // edge case: jodi array empty hoy tahole
  if (arr.length === 0) {
    return null;
  }

  const frequency = {};

  // count kortesi
  for (const num of arr) {
    if (frequency[num] !== undefined) {
      frequency[num] = frequency[num] + 1;
    } else {
      frequency[num] = 1;
    }
  }

  let maxCount = 0;
  let result = null;

  // max khuje ber kortesi
  for (const key in frequency) {
    if (frequency[key] > maxCount) {
      maxCount = frequency[key];
      result = parseInt(key);
    }
  }

  return result;
}

const input = [5, 5, 5, 2, 2];
const output = findMostFrequent(input);
console.log(output);


// for understanding
console.log(undefined || 0); // 0
console.log(5 || 0); // 5
console.log(0 || 10); // 10
