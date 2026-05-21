// Valid Email Checker: একটি স্ট্রিং ইমেইল কি না তা যাচাই করো (সিম্পল লজিক: @ এবং . আছে কি না)।

function isEmail(str) {
  return str.includes("@") && str.includes(".");
}

const input = "ownist@gmail.com";
const output = isEmail(input);
console.log(output);
