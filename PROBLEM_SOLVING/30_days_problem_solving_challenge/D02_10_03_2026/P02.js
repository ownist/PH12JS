function reverseString(str) {
  let revStr = "";

  for (let i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }
  return revStr;
}

const input = "Hello World";
const output = reverseString(input);
console.log(output);

// use alternative logi based on performance
const revString = (str) => {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  // return revStr
  return revStr;
};

const result = revString(input);
console.log(result);
