/**
 * author: ownist
 *
 * day 22 of solving js problem
 */

function groupCharacters(str) {
  const charGroupCount = {};

  for (const letter of str) {
    // make it lowercase
    const char = letter.toLowerCase();

    // edge case: invalid data skip kortese
    // if (typeof char !== "string" || char === char.toUpperCase()) continue;
    if (char < "a" || char > "z") continue;

    charGroupCount[char] = (charGroupCount[char] || 0) + 1;
  }

  return charGroupCount;
}

const input = "a1 b!a";
const output = groupCharacters(input);
console.log(output);
