// Check Empty Input: একটি ফাংশন লেখো যা চেক করবে ইউজারের দেওয়া ইনপুটটি ফাঁকা (Empty string বা শুধু স্পেস) কি না।

function checkEmpty(str) {
  return str === " " || str.length === 0;
}

const input = " ";
const output = checkEmpty(input);
console.log(output);
