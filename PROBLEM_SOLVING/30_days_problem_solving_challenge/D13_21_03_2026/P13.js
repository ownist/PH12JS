function countWords(str) {
  let count = 0;
  let inWord = false;

  for (const letter of str) {
    if (letter !== " ") {
      if (!inWord) {
        count++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }

  return count;
}

const input = "hello wolrd";
const output = countWords(input);
console.log(output);
