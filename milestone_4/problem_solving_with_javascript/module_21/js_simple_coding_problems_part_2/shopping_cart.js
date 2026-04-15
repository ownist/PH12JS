const products = [
  { name: "shampo", price: 2, quantity: 10 },
  { name: "shirt", price: 300, quantity: 4 },
  { name: "pant", price: 500, quantity: 3 },
  { name: "chironi", price: 50, quantity: 8 },
];

function getShoppingTotal(products) {
  let total = 0;

  for (const p of products) {
    const productCost = p.price * p.quantity;
    total += productCost;
  }

  return total;
}

const totalCost = getShoppingTotal(products);
console.log(totalCost);
