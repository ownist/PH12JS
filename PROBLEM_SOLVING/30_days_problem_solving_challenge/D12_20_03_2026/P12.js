function groupEvenOdd(arr) {
  const obj = {
    even: [],
    odd: [],
  };

  for (const num of arr) {
    if (typeof num === "number") {
      if (num % 2 === 0) {
        obj.even.push(num);
      } else {
        obj.odd.push(num);
      }
    }
  }

  return obj;
}

const input = [1, "a", 2, null, 3];
const output = groupEvenOdd(input);
console.log(output);

/**
 * for better and clean version
 */

const group_even_odd = (arr) => {
  // delclear object structure
  const grouped = {
    even: [],
    odd: [],
  };

  for (const num of arr) {
    // edge case: value ta jodi number type na hoy tahole
    if (typeof num !== "number") continue;

    if (num % 2 === 0) {
      grouped.even.push(num);
    } else {
      grouped.odd.push(num);
    }
  }

  // return grouped object
  return grouped;
};

const result = group_even_odd(input);
console.log(result);
