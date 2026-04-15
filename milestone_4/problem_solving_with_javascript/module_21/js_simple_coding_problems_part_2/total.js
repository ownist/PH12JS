const products = [
  { name: "shampo", price: 2 },
  { name: "shirt", price: 300 },
  { name: "pant", price: 500 },
  { name: "chironi", price: 50 },
];

function getTotal(products) {
  let total = 0;

  for (const p of products) {
    total += p.price;
  }

  return total;
}

const total = getTotal(products);
console.log(total);
