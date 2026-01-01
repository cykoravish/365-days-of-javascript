// Day 001 – Easy
// Question:
// Write a JavaScript function that takes a person’s name
// and returns: "Happy New Year 2026, <name>! 🎉"

// Solution 1 – Template Literals (Recommended)
function wishNewYear(name) {
  return `Happy New Year 2026, ${name}! 🎉`;
}
console.log(wishNewYear("Khizra"));

// ---------------------------------------------

// Solution 2 – String Concatenation
function wishNewYearConcat(name) {
  return "Happy New Year 2026, " + name + "! 🎉";
}
console.log(wishNewYearConcat("Khizra"));

// ---------------------------------------------

// Solution 3 – Arrow Function
const wishNewYearArrow = (name) => `Happy New Year 2026, ${name}! 🎉`;
console.log(wishNewYearArrow("Khizra"));
