/**
 * author: ownist
 *
 * day 21 of solving js problem
 */

function countActiveAdults(users) {
  let activeAdults = 0;

  for (const user of users) {
    // edge case: invalid data skip kortese
    if (typeof user.age !== "number" || typeof user.isActive !== "boolean")
      continue;

    if (user.age >= 18 && user.isActive === true) {
      activeAdults++;
    }
  }

  return activeAdults;
}

const input = [
  { name: "A", age: 20, isActive: true },
  { name: "B", age: "30", isActive: true },
  { name: "C", age: 25 },
  { name: "D", age: 40, isActive: "true" },
];
const output = countActiveAdults(input);
console.log(output);
