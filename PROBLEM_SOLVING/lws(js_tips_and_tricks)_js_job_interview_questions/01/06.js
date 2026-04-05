// replace all occurrances of a string

const quote =
  "React is a JS framework & this framework is the most popular frontend framework right now";

// replace all occurances of 'framework' with 'library'
console.log(quote.replaceAll("framework", "library"));

// using regx
console.log(quote.replace(/framework/g, "library"));
