/**
 * author: ownist
 */

function getTopScorer(users) {
  let topScorer = null;

  for (const user of users) {
    // edge case: invalid data skip
    if (typeof user.name !== "string" || typeof user.score !== "number")
      continue;

    /**
     * ```js
    if (topScorer === null) {
      topScorer = user;
    } else if (user.score > topScorer.score) {
      topScorer = user;
    }
      ```
    */

    // eita gpt mmh diche.. eivabew kora jai. lees code and cleaner
    if (!topScorer || user.score > topScorer.score) {
      topScorer = user;
    }
  }

  return topScorer;
}

const input = [
  { name: "A", score: 50 },
  { name: "B" },
  { name: "C", score: "80" },
  { name: "D", score: 70 },
];
const output = getTopScorer(input);
console.log(output);
