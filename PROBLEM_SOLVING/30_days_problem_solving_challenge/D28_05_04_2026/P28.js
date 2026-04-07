/**
 * author: ownist
 */

function getLowestActiveScore(users) {
  let lowestUser = null;

  for (const user of users) {
    // edge case: invalid data skip
    if (typeof user.score !== "number" || typeof user.isActive !== "boolean")
      continue;

    if (!user.isActive) continue;

    if (!lowestUser || user.score < lowestUser.score) {
      lowestUser = user;
    }
  }

  return lowestUser;
}

const input = [
  { name: "A", score: 50, isActive: true },
  { name: "B", isActive: true },
  { name: "C", score: "30", isActive: true },
  { name: "D", score: 10, isActive: false },
];
const output = getLowestActiveScore(input);
console.log(output);
