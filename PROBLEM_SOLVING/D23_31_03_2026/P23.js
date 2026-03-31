/**
 * author: ownist
 */

function getCategorySummary(items) {
  const summary = {};

  for (const item of items) {
    // সঠিক ডাটা ভ্যালিডেশন: category স্ট্রিং এবং price নাম্বার হতে হবে
    if (typeof item.category === "string" && typeof item.price === "number") {
      const category = item.category;

      // যদি এই ক্যাটাগরি আগে থেকে summary অবজেক্টে না থাকে, তবে ইনিশিয়ালাইজ করো
      if (!summary[category]) {
        summary[category] = {
          totalItems: 0,
          totalPrice: 0
        };
      }

      // increment + sum
      summary[category].totalItems += 1;
      summary[category].totalPrice += item.price;
    }
  }

  return summary;
}

// Example 1 টেস্ট
const data1 = [
  { name: "Apple", category: "Fruit", price: 10 },
  { name: "Banana", category: "Fruit", price: 5 },
  { name: "Carrot", category: "Vegetable", price: 7 },
];
console.log(getCategorySummary(data1));

// Edge Case টেস্ট
const data2 = [
  { name: "Apple", category: "Fruit", price: 10 },
  { name: "Banana", category: "Fruit" }, // price নেই
  { name: "Carrot", category: 123, price: 7 }, // category স্ট্রিং নয়
  { name: "Tomato", category: "Vegetable", price: "20" }, // price স্ট্রিং
];
console.log(getCategorySummary(data2));

