// using method 1
function countProperties(obj) {
  let objProp = 0;

  /**
   * safe method
   *
   * ```js
   * for (const prop in obj) {
   *    if (obj.hasOwnProperty(prop)) {
   *        objProp++;
   *    }
   * }
   * ```
   */
  for (const prop in obj) {
    objProp++;
  }
  // return objProp
  return objProp;
}

const input = {
  name: "Shahed",
  age: 25,
  city: "Dhaka",
};
const output = countProperties(input);
console.log(output);

// using method 2
function countObjProperties(obj) {
  let objProp = [];

  for (const prop in obj) {
    objProp.push(prop);
  }
  // return objProp length
  return objProp.length;
}

const result = countObjProperties(input);
console.log(result);
