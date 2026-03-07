/**
 * Object array থেকে cheapest product বের করো
 *
 * ```js
 * const products = [
 * {name:"phone", price:500},
 * {name:"laptop", price:1000},
 * {name:"tablet", price:300}
 * ];
 * ```
 *
 * Expected: {name:"tablet", price:300}
 */

const products = [
  { name: "phone", price: 500 },
  { name: "laptop", price: 1000 },
  { name: "tablet", price: 300 },
];
let cheapestProduct = products[0];

products.forEach((product) => {
  if (product.price < cheapestProduct.price) {
    cheapestProduct = product;
  }
});

console.log(cheapestProduct);
