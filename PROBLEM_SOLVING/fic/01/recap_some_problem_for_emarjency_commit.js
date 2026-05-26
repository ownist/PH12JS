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

console.log("\n");

// count character
function countChar(str) {
  const totalChar = {};

  for (const char of str) {
    totalChar[char] = (totalChar[char] || 0) + 1;
  }

  return totalChar;
}

console.log(countChar("shahed"));

console.log("\n");

// find most freq numbers
function findMostFreqNumbers(nums) {
  const freqNums = {};

  for (const n of nums) {
    freqNums[n] = (freqNums[n] || 0) + 1;
  }

  let largestFreqNumber = 0;

  for (const key in freqNums) {
    if (freqNums[key] > largestFreqNumber) {
      largestFreqNumber = freqNums[key];
    }
  }

  return largestFreqNumber;
}
const input = [5, 5, 5, 2, 2];
console.log(findMostFreqNumbers(input));

console.log("\n");

// even or odd group
function evenOrOddGroup(numbers) {
  const group = {
    even: [],
    odd: [],
  };

  for (const n of numbers) {
    if (typeof n !== "number") continue;

    if (n % 2 === 0) {
      group.even.push(n);
    } else {
      group.odd.push(n);
    }
  }

  return group;
}
console.log(evenOrOddGroup([1, 2, 3, 4, 5, 6]));

console.log("\n");

// counting words
function countWord(sentence) {
  const words = sentence.split(" ");
  let totalWord = 0;

  for (const word of words) {
    totalWord++;
  }

  return totalWord;
}
console.log(countWord("heh, i am ownist"));

console.log("\n");

// ১. জোড় নাকি বিজোড় সংখ্যা (Even or Odd Number)
function isEvenOrIsOdd(num) {
  if (num % 2 === 0) {
    return `${num} is even`;
  }

  return `${num} is odd`;
}
console.log(isEvenOrIsOdd(42));

console.log("\n");

// Find the Largest of Three Numbers
function findTheLargestofThreeNumbers(x, y, z) {
  if (x > y && x > z) {
    return `${x} is bigger than ${y} and ${z}`;
  } else if (y > x && y > z) {
    return `${y} is bigger than ${x} and ${z}`;
  } else {
    return `${z} is bigger than ${x} and ${y}`;
  }
}
console.log(findTheLargestofThreeNumbers(5, 26, 9));

console.log("\n");

// Celsius to Fahrenheit
function cToF(c) {
  // formula: F = (C * 9/5) + 32
  return (c * 9) / 5 + 32;
}
console.log(cToF(30));

console.log("\n");

// Sum of Array Elements
function sumOfArrElmnt(arr) {
  let sum = 0;

  for (const n of arr) {
    sum += n;
  }

  return sum;
}
console.log(sumOfArrElmnt([1, 2, 3, 4, 5]));
// using for loop
function sumOfArrElmntUsingForLoop(arr) {
  let totalSum = 0;

  // loop array
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  // then return totalSum
  return totalSum;
}
console.log(sumOfArrElmntUsingForLoop([1, 2, 3, 4, 5]));

console.log("\n");

// Reverse a String
function reverseString(str) {
  let revStr = "";

  for (let i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }

  return revStr;
}

console.log(reverseString("hello"));

console.log("\n");

// social media hastag generator
function hashTagGenerator(str) {
  if (str.length > 140 || str === "" || str.length === 0 || str === " ")
    return false;

  return (
    "#" +
    str
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("")
  );
}
console.log(hashTagGenerator("i am ownist"));

console.log("\n");

// Duplicate Runner Tracker
function duplicateRunnerTracker(arr) {
  const duplicateRunnerTrackers = [];

  for (const name of arr) {
    if (!duplicateRunnerTrackers.includes(name)) {
      duplicateRunnerTrackers.push(name);
    } else {
      duplicateRunnerTrackers.push(`${name} (Duplicate)`);
    }
  }

  return duplicateRunnerTrackers;
}
console.log(duplicateRunnerTracker(["Anik", "Rahul", "Anik", "Sumi", "Rahul"]));
