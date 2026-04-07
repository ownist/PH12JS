/**
 * author: ownist
 */

function getFinalReport(users) {
  const categoryGroup = {};

  // loop users
  for (const user of users) {
    // edge case
    if (typeof user.isActive !== "boolean") continue;
    if (!user.isActive) continue;

    // check order is array or not
    if (!Array.isArray(user.orders)) continue;

    for (const item of user.orders) {
      // edge case
      if (typeof item.category !== "string" || typeof item.price !== "number")
        continue;

      const category = item.category;

      // jodi category ta age na thake tahole
      if (!categoryGroup[category]) {
        categoryGroup[category] = {
          totalOrders: 0,
          totalRevenue: 0,
        };
      }

      categoryGroup[category].totalOrders++;
      categoryGroup[category].totalRevenue += item.price;
    }
  }

  return categoryGroup;
}

const input = [
  {
    name: "A",
    isActive: true,
    orders: [
      { category: "Food", price: 100 },
      { category: 123, price: 50 },
      { category: "Tech" },
    ],
  },
  {
    name: "B",
    isActive: "true",
    orders: [{ category: "Food", price: 500 }],
  },
  {
    name: "C",
    isActive: true,
    orders: "invalid",
  },
];

const output = getFinalReport(input);
console.log(output);
