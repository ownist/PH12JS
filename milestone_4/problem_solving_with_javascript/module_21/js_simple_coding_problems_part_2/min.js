const numbers = [2000, 1000, 5000, 90, 3000];

function getMin(nums) {
  let min = nums[0];

  for (const n of nums) {
    if (n < min) {
      min = n;
    }
  }

  return min;
}

const result = getMin(numbers);
console.log(result);
