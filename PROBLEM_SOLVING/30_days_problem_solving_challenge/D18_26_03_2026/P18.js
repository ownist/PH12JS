function groupByCategory(items) {
  const categoryGroup = {};

  for (const item of items) {
    if (item.category && typeof item.category === "string") {
      const category = item.category;

      if (!categoryGroup[category]) {
        categoryGroup[category] = [];
      }

      categoryGroup[category].push(item);
    }
  }

  return categoryGroup;
}

const input = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot" },
  { name: "Banana", category: 123 },
];
const output = groupByCategory(input);
console.log(output);
