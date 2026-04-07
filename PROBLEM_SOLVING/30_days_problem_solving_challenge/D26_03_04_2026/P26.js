/**
 * author: ownist
 */

function getCleanUsernames(users) {
  const uniqueUsers = [];

  // loop
  for (const user of users) {
    // edge case: invalid data skip
    if (typeof user.username !== "string" || typeof user.isActive !== "boolean")
      continue;

    // jodi isActive false hoy tahole skip
    if (!user.isActive) continue;

    // make toLowerCase
    const username = user.username.toLowerCase();

    // duplicate check
    if (!uniqueUsers.includes(username)) {
      uniqueUsers.push(username);
    }
  }

  return uniqueUsers;
}

const input = [
  { username: "A", isActive: true },
  { username: 123, isActive: true },
  { username: "B", isActive: "true" },
  { isActive: true },
];
const output = getCleanUsernames(input);
console.log(output);
