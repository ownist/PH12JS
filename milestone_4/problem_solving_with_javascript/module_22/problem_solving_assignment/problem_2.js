function onlyCharacter(str) {
  // edge case
  if (typeof str !== "string") return "Invalid";

  const trimStr = str.trim().toUpperCase();
  let myStr = "";

  for (const char of trimStr) {
    if (char === " ") continue;
    myStr += char;
  }

  return myStr;
}

const input = "  h e llo wor   ld";
const output = onlyCharacter(input);
console.log(output);
