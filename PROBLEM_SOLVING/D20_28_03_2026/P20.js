function getUserSummary(users) {
  const allUsers = [];

  /**
  for (const user of users) {
    // edge case: skip invalid data
    if (typeof user.age !== "number") continue;

    const userObj = {
      name: user.name,
      isAdult: user.age >= 18,
    };

    allUsers.push(userObj);
  }
    */

  /** for better and cleaner code */
  for (const user of users) {
    // edge case: invalid data skip kortese
    if (typeof user.age !== "number") continue;

    allUsers.push({
      name: user.name,
      isAdult: user.age >= 18,
    });
  }

  return allUsers;
}

const input = [
  { name: "A", age: 17 },
  { name: "B" },
  { name: "C", age: "20" },
  { name: "D", age: 25 },
];
const output = getUserSummary(input);
console.log(output);
