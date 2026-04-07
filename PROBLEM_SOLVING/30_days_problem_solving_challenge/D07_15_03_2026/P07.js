function getTotalPrice(products) {
  let total_price = 0;

  for (let i = 0; i < products.length; i++) {
    if (products[i].price !== undefined) {
      total_price += products[i].price;
    }
  }

  return total_price;
}

const input = [{ name: "Bag" }, { name: "Shoes", price: 2000 }];
const output = getTotalPrice(input);
console.log(output);
