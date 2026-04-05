// how to flattern(single array) a multidimensional array
const mdarr = [
  "lokkhiti-amr",
  ["chummu", "pappi"],
  "care",
  "cry",
  ["haha", "sad", "f$ck"],
];

console.log(mdarr.flat());

const scndMdArr = [
  "lokkhiti-amr",
  ["chummu", ["shiny", "angry"], "pappi"],
  "care",
  "cry",
  ["haha", "sad", "f$ck"],
];

console.log(scndMdArr.flat(Infinity));
