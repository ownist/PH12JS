/**
 * author: ownist
 *
 * recap day 16 problem
 */

function findTopStudent(students) {
  // edge case: jodi array empty hoy tahol null return korbe
  if (students.length === 0) {
    return null;
  }

  let top_student = null;

  for (const student of students) {
    // edge case: jodi invalid data hoy tahole skip korbe
    if (typeof student.marks !== "number") continue;

    // jodi valid data pay tahole prothombar top student set korbe
    if (top_student === null) {
      top_student = student;
    } else if (student.marks > top_student.marks) {
      top_student = student;
    }
  }

  // return top student
  return top_student;
}

const input = [
  { name: "A", marks: 50 },
  { name: "B" },
  { name: "C", marks: "80" },
  { name: "D", marks: 70 },
];
const output = findTopStudent(input);
console.log(output);
