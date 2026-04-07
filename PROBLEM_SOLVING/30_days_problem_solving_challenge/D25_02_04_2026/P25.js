/**
 * author: ownist
 */

function getUserProductSummary(users) {
  const groups = {};

  for (const user of users) {
    // egde case: invalid data handle
    if (typeof user.isActive !== "boolean") continue;

    // edge case: only active user gulo nibe
    if (!user.isActive) continue;

    // check: prodcuts prop er value ta array kina
    if (!Array.isArray(user.products)) continue;

    // products er opor loop
    for (const product of user.products) {
      // edge case: invalid data handle
      if (
        typeof product.category !== "string" ||
        typeof product.price !== "number"
      )
        continue;

      const category = product.category;

      // product ta jodi age theke na thake
      if (groups[category] === undefined) {
        groups[category] = {
          totalItems: 0,
          totalPrice: 0,
        };
      }

      groups[category].totalItems++;
      groups[category].totalPrice += product.price;
    }
  }

  return groups;
}

const input = [
  {
    name: "A",
    isActive: true,
    products: [
      { name: "p1", category: "Fruit", price: 10 },
      { name: "p2", category: 123, price: 20 },
      { name: "p3", category: "Vegetable" },
    ],
  },
  {
    name: "B",
    isActive: "true",
    products: [{ name: "p4", category: "Fruit", price: 50 }],
  },
];
const output = getUserProductSummary(input);
console.log(output);
