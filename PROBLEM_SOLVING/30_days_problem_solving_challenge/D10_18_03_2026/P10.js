function getAdults(people) {
  const adults = [];

  for (const person of people) {
    if (person.age !== undefined && person.age >= 18) {
      adults.push(person);
    }
  }

  return adults;
}

const input = [
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 25 },
  { name: "Jamal", age: 30 },
];
const output = getAdults(input);
console.log(output);
