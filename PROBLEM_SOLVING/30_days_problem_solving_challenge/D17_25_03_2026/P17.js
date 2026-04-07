function findLongestStreak(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const numSet = new Set(arr);
  let longest = 0;

  for (const num of arr) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let streak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        streak++;
      }

      if (streak > longest) {
        longest = streak;
      }
    }
  }

  return longest;
}

const input = [1, 2, 3, 5, 6];
const output = findLongestStreak(input);
console.log(output);
