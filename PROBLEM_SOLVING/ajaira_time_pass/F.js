// Find Object by ID: একটি ইউজার লিস্ট (Array of Objects) থেকে নির্দিষ্ট একটি ID দিয়ে ওই ইউজারের পুরো তথ্য বের করো।

function findUser(arr, id) {
  for (const user of arr) {
    if (user.id === id) {
      return user;
    }
  }

  return `${id} not found!`;
}

const input = [
  {
    id: 1,
    name: "ownist",
  },
  {
    id: 2,
    name: "jihad",
  },
  {
    id: 3,
    name: "rachel",
  },
  {
    id: 4,
    name: "tomjid",
  },
];
const output = findUser(input, 1);
console.log(output);
