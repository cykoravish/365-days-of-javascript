// Write a JavaScript program that takes a number and prints “Happy New Year 2026 🎉” if the number is even, otherwise print “Keep Coding in 2026 💻”.

// (Example: input → 4 → Happy New Year 2026 🎉)

//solution-1
const num = 5;

if (num % 2 === 0) {
  console.log("Happy New Year 2026 🎉");
} else {
  console.log("Keep Coding in 2026 💻");
}

//solution-2 alternative method (using ternary operator)
const numT = 4;
let text = numT % 2 === 0 ? "Happy New Year 2026 🎉" : "Keep Coding in 2026 💻";
console.log(text);
