function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  // return uniqueArr
  return uniqueArr;
}

const input = [5, 3, 5, 2, 3, 1];
const output = removeDuplicates(input);
console.log(output);
