function isPalindrome(str) {
  let palindromeStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    palindromeStr += str[i];
  }

  if (palindromeStr.toLowerCase() === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

const input = "madam";
const output = isPalindrome(input);
console.log(output);

// for better logic
const check_is_palindrome = (str) => {
  const lower_str = str.toLowerCase();

  for (let i = 0; i < lower_str.length / 2; i++) {
    if (lower_str[i] !== lower_str[lower_str.length - 1 - i]) {
      return false;
    }
  }

  // other ways return true
  return true;
};

const input_str = "RaceCar";
const result = check_is_palindrome(input_str);
console.log(result);
