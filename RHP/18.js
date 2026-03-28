/**
 * author: ownist
 * 
 * recap day 18 problem bcz this problem is hard for me
 */
function groupByCategory(items) {
  const category_groups = {};

  for (const item of items) {
    // edge case: skip invalid data
    if (typeof item.category !== "string") continue;

    const category = item.category;

    // check kortese je bortomane jei key ta paise oita object er moddhe na thake tahole ei key er name e ekta prop generate koro and value ekta empty array set koro.. that mean's ekta array create koro
    if (!category_groups[category]) {
      category_groups[category] = [];
    }

    // and jodi alrady sei category ta tahke tahole push koro
    category_groups[category].push(item);
  }

  // object ta return koro
  return category_groups;
}

const input = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot" },
  { name: "Banana", category: 123 },
];
const output = groupByCategory(input);
console.log(output);
