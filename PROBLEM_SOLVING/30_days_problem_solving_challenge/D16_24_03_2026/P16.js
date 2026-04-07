/**
 * author: ownist
 */

/** ei code thik ache but real world solution nh
function findTopStudent(students) {
  // edge case: jodi array of objects empty hoy tahole
  if (students.length === 0) {
    return null;
  }

  // dhore nicchi prothom tai top student
  let topStudent = students[0];

  for (const student of students) {
    if (student.marks !== undefined && typeof student.marks === "number") {
      if (student.marks > topStudent.marks) {
        topStudent = student;
      }
    }
  }

  return topStudent;
}
*/

// real wolrd solution without any bug
function findTopStudent(students) {
  // edge case: jodi array empty hoy tahole
  if (students.length === 0) {
    return null;
  }

  let topStudent = null;

  for (const student of students) {
    // egde case: jodi student er marks prop ta na thake othoba marks er value ta number type er na hoy tahole seita skip koro
    if (student.marks === undefined || typeof student.marks !== "number")
      continue;

    // prothombar valid data paile first student set koro
    if (topStudent === null) {
      topStudent = student;
    }
    // ar jodi null na hoy orthat jodi valid student thake tahole compare koro
    else if (student.marks > topStudent.marks) {
      topStudent = student;
    }
  }

  // return kore deu
  return topStudent;
}

const input = [
  { name: "B" },
  { name: "C", marks: "80" },
  { name: "A", marks: 50 },
  { name: "D", marks: 70 },
];
const output = findTopStudent(input);
console.log(output);
