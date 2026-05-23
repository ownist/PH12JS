// rev a string
function revStr(str) {
  return `"${str}" er reverse version holo: "${str.split("").reverse().join("")}"`;
}

console.log(revStr("shahed"));
console.log(revStr("ownist"));

console.log("\n"); // for new empty line

// find the largest number
function largestNumber(arr) {
  let num = arr[0];

  for (const n of arr) {
    if (n > num) num = n;
  }

  return `${arr} er moddhe largest number holo ${num}`;
}

console.log(largestNumber([2, 5, 8, 9, 6, 5, 8]));

console.log("\n"); // for new empty line

// check even or odd
function checkEvenOrOdd(num) {
  if (num % 2 === 0) return `${num} is even.`;
  return `${num} is odd.`;
}

console.log(checkEvenOrOdd(52));
