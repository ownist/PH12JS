// Group by Role: একদল ইউজারের অ্যারে থেকে শুধু 'admin' রোল যাদের, তাদের আলাদা একটি অ্যারেতে নাও।

function groupByRole(users) {
  const admins = [];

  for (const u of users) {
    if (u.role === "admin") admins.push(u);
  }

  return admins;
}

const input = [
  {
    name: "shahed",
    role: "admin",
  },
  {
    name: "salim",
    role: "user",
  },
  {
    name: "sabbir",
    role: "super user",
  },
  {
    name: "rihan",
    role: "admin",
  },
];

const output = groupByRole(input);
console.log(output);
