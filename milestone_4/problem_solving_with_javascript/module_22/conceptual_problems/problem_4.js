function validProposal(p1, p2) {
  //edge case
  if (typeof p1 !== "object" || typeof p2 !== "object") return "Invalid";

  const diff = Math.abs(p1.age - p2.age);

  return p1.gender !== p2.gender && !(diff > 7);
}
const person1 = { name: "toya", gender: "female", age: 24 };
const person2 = { name: "bjoy", gender: "male", age: 32 };
const output = validProposal(person1, person2);
console.log(output);
