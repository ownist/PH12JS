// একটি অ্যারের মধ্যে সবচেয়ে ছোট সংখ্যাটি খুঁজে বের করো।

function findSmallestnumber(arr) {
  let smallNumber = arr[0];

  for (const n of arr) {
    if (n < smallNumber) {
      smallNumber = n;
    }
  }

  return smallNumber;
}

const input = [12, 25, 62, 6, 16, 67, 78];
const output = findSmallestnumber(input);
console.log(output);
