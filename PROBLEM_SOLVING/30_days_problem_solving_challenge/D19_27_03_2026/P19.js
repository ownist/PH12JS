function getActiveUsers(users) {
  // active users collection
  const activeUser = [];

  // loop users
  for (const user of users) {
    // edge case: jodi invalid data hoy tahole
    if (user.isActive === undefined || typeof user.isActive !== "boolean")
      continue;

    // valid data filtering kore push kora hocche
    if (user.isActive === true) {
      activeUser.push(user);
    }
  }

  // return activeUser
  return activeUser;
}

const input = [
  { name: "A", isActive: true },
  { name: "B" },
  { name: "C", isActive: "true" },
  { name: "D", isActive: false },
];
const output = getActiveUsers(input);
console.log(output);
