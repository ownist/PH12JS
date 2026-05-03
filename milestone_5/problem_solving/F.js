// একটি স্ট্রিংয়ের মধ্যে কয়টি ভাওয়েল (a, e, i, o, u) আছে তা গণনা করো।

function countVowel(str) {
  let totalVowel = 0;

  for (const char of str) {
    if (
      char === "a" ||
      char == "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      totalVowel++;
    }
  }

  return totalVowel;
}

const input = "ownist";
const output = countVowel(input);
console.log(output);
