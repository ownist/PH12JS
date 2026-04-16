function resultReport(marks) {
  // edge case
  if (!Array.isArray(marks)) return "Invalid";

  const score = {
    finalScore: 0,
    pass: 0,
    fail: 0,
  };

  let sum = 0;

  for (const n of marks) {
    sum += n;
  }

  score.finalScore = Math.round(sum / marks.length);

  for (const n of marks) {
    if (n >= 40) {
      score.pass++;
    } else {
      score.fail++;
    }
  }

  return score;
}

const input = [99, 87, 67, 12, 87];
const output = resultReport(input);
console.log(output);
