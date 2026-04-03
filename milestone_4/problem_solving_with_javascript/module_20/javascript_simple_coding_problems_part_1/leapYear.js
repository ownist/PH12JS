function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  }

  return false;
}

const isLipi = isLeapYear(2034);
console.log(isLipi);

function checkIsLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const isleap1 = checkIsLeapYear(2100);
const isleap2 = checkIsLeapYear(2400);
const isleap3 = checkIsLeapYear(1900);
const isleap4 = checkIsLeapYear(5200);

console.log(isleap1, isleap2, isleap3, isleap4);
