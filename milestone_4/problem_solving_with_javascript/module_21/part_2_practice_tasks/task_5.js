const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary(emps) {
  let total = 0;

  for (const e of emps) {
    const salaryWithExp = e.increment * e.experience;
    const presentSalary = salaryWithExp + e.starting;
    total += presentSalary;
  }

  return total;
}

const total = totalSalary(employees);
console.log(total);
