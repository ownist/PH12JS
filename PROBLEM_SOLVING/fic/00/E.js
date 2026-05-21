// Calculate Total Price: একটি শপিং কার্টের অ্যারে আছে যেখানে অবজেক্ট হিসেবে নাম এবং দাম আছে। মোট দাম হিসেব করো।

function totalCart(arr) {
  let sum = 0;

  for (const p of arr) {
    sum += p.price;
  }

  return sum;
}

const input = [
  {
    name: "honor",
    price: 150,
  },
  {
    name: "iphone",
    price: 45,
  },
  {
    name: "money bag",
    price: 120,
  },
];

const output = totalCart(input);
console.log(output);
