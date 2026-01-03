// Write a JavaScript program that takes a year as input and checks whether it is a leap year or not.

// Output format:

// If it is a leap year → print “2026 is NOT a leap year ❌”

// If it is a leap year → print “2024 is a leap year ✅”

// (Hint: A leap year is divisible by 4, but not by 100 unless also divisible by 400.)

function checkLeapYear(year) {
  if (year % 4 === 0 || year % 400 === 0) {
    return `${year} is the leap year`;
  }else{
    return `${year} is not a leap year`;
  }
}

console.log(checkLeapYear(2026));
console.log(checkLeapYear(2028));
