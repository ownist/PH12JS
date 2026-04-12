// remove duplicate items from an array

function removeDuplicate(items) {
  const unique = [];

  for (const item of items) {
    const lower = item.toLowerCase();

    if (!unique.includes(lower)) {
      unique.push(item);
    }
  }

  return unique;
}

const input = ["shahed", "wahid", "shahed", "sabbir", "Shahed", "Rachel kaka"];
const output = removeDuplicate(input);
console.log(output);

// for using numbers
const rm_duplicate = (numbers) => {
  const uniqueNums = [];

  for (const n of numbers) {
    if (!uniqueNums.includes(n)) {
      uniqueNums.push(n);
    }
  }

  return uniqueNums;
};

console.log(rm_duplicate([2, 1, 5, 2, 3, 3, 3, 4]));
