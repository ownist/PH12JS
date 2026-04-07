function findFirstNonRepeating(str) {
  // edge case: jodi empty string hoy tahole
  if (str.length === 0) {
    return null;
  }

  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = "swiss";
const output = findFirstNonRepeating(input);
console.log(output);
