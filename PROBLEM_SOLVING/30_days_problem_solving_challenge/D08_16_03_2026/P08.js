function countCharacters(str) {
  const letterCountObj = {};

  for (let i = 0; i <= str.length - 1; i++) {
    const lowerLetter = str[i].toLowerCase();

    if (letterCountObj[lowerLetter]) {
      letterCountObj[lowerLetter] = letterCountObj[lowerLetter] + 1;
    } else {
      letterCountObj[lowerLetter] = 1;
    }
  }

  return letterCountObj;
}

const input = "Hello";
const output = countCharacters(input);
console.log(output);
