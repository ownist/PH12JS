/**
 * author: ownist
 */

function getCategorySummary(items) {
  const summary = {};

  for (const item of items) {
    // edge case: invalid data handle skip kortese
    if (typeof item.category !== "string" || typeof item.price !== "number")
      continue;

    const category = item.category;

    // check: jodi category ta age theke summary object er vetore na thake tahole prothombar initialize koro
    if (summary[category] === undefined) {
      summary[category] = {
        totalItems: 0,
        totalPrice: 0,
      };
    }

    // category gulor property er value update kore ditese
    summary[category].totalItems++;
    summary[category].totalPrice += item.price;
  }

  return summary;
}

const input = [
  { name: "Apple", category: "Fruit", price: 10 },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: 123, price: 7 },
  { name: "Tomato", category: "Vegetable", price: "20" },
];
const output = getCategorySummary(input);
console.log(output);
