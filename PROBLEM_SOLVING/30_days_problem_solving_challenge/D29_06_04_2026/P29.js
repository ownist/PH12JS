/**
 * author: ownist
 */

function getMostFrequentCategory(items) {
  // edge case: jodi empty array hoy
  /**
   * ```js
  if (items.length === 0) {
    return null;
  }
*/

  // micro improvment: safer check, bcz jodi data api theke ase tahole onek time e data array naw hote pare
  if (!Array.isArray(items) || items.length === 0) return null;

  const categoryObj = {};
  let maxCount = 0;
  let resultCategory = null;

  // loop array
  for (const item of items) {
    // edge case: inavild data skip
    if (typeof item.category !== "string") continue;

    const category = item.category;

    categoryObj[category] = (categoryObj[category] || 0) + 1;

    // maxCount track
    if (categoryObj[category] > maxCount) {
      maxCount = categoryObj[category];
      resultCategory = category;
    }
  }

  return resultCategory;
}

const input = [
  { name: "A", category: "Fruit" },
  { name: "B" },
  { name: "C", category: 123 },
  { name: "D", category: "Fruit" },
];
const output = getMostFrequentCategory(input);
console.log(output);
