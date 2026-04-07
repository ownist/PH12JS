/** ChatGpt theke copy marchilam..
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}
*/

// eita ekhon nije nije claud er theke buje buje kortachi
// function findSecondLargest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }

//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (const num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num !== largest) {
//       secondLargest = num;
//     }
//   }

//   return secondLargest === -Infinity ? null : secondLargest;
// }

// const input = [10, 5, 8, 20, 15];
// const output = findSecondLargest(input);
// console.log(output);

// // find using sort method
// const find_second_largest_number = (nums) => {
//   const numbers = nums.sort((a, b) => b - a);
//   return numbers[1];
// };

// const result = find_second_largest_number(input);
// console.log(result);

// day 9 er problem er logic ta ami bujte perechi. ami eita ekhn nije nije kortechi. maneeee ki bolbo, eita matha khaya felsilo. sesh mesh bujte parchi
function findSecondLargest(numbers) {
  // edge case 1: jodi number na tahke othoba number er length 2 er theke kom hoy
  if (!numbers || numbers.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > largest) {
      secondLargest = largest;
      largest = numbers[index];
    }
    // jodi number ta largest er theke boro na hoy tahole
    else if (numbers[index] > secondLargest && numbers[index] !== largest) {
      secondLargest = numbers[index];
    }
  }

  // jodi kono karone secondLargest number ta -Infinity hoy tahole. muloto jodi kono array of number er value duplicate thake tahole ieta hobe
  if (secondLargest === -Infinity) {
    return null;
  }

  return secondLargest;
}

const input = [10, 5, 8, 20, 15, 5];
const output = findSecondLargest(input);
console.log(output);

/**
 * day nine problem again recap
 */

const find_second_largest_number = (numbers) => {
  // edge case: jodi array ta na thake othoba array er length jodi 2 er kom hoy tahole
  if (!numbers || numbers < 2) {
    return null;
  }

  let largest_number = -Infinity;
  let second_largest_number = -Infinity;

  for (const num of numbers) {
    if (num > largest_number) {
      second_largest_number = largest_number;
      largest_number = num;
    }
    // jodi number ta boro na hoy tahole
    else if (num > second_largest_number && num !== largest_number) {
      second_largest_number = num;
    }
  }

  return second_largest_number === -Infinity ? null : second_largest_number;
};

const array_of_numbers = [20, 12, 54, 62, 89];
const final_output = find_second_largest_number(array_of_numbers);
console.log(final_output);
