/**
 * author: ownist
 */

function getCategorySummary(items) {
  const summary = {};

  for (const item of items) {
    if (typeof item.category === "string" && typeof item.price === "number") {
      const category = item.category;

      // jodi category ta age theke object er modde na thake tahole inistalize koro
      if (!summary[category]) {
        summary[category] = {
          totalItems: 0,
          totalPrice: 0,
        };
      }

      summary[category].totalItems += 1;
      summary[category].totalPrice += item.price;
    }
  }

  // return
  return summary;
}

const input = [
  { name: "Apple", category: "Fruit", price: 10 },
  { name: "Banana", category: "Fruit", price: 5 },
  { name: "Carrot", category: "Vegetable", price: 7 },
];
const output = getCategorySummary(input);
console.log(output);
