/**
 * author: ownist
 */

function getTotalActivePrice(users) {
  let sum = 0;

  for (const user of users) {
    // edge case: invalid data handle
    if (typeof user.isActive !== "boolean" || !Array.isArray(user.products))
      continue;

    if (user.isActive === true) {
      for (const product of user.products) {
        // edge case: invalid data skip
        if (typeof product.price !== "number") continue;

        sum += product.price;
      }
    }
  }

  return sum;
}

const input = [
  {
    name: "A",
    isActive: true,
    products: [{ name: "p1", price: 10 }, { name: "p2" }],
  },
  {
    name: "B",
    isActive: "true",
    products: [{ name: "p3", price: 50 }],
  },
  {
    name: "C",
    isActive: true,
    products: "not array",
  },
];
const output = getTotalActivePrice(input);
console.log(output);
