// Task:
// Write a JavaScript program that takes a number and prints how many digits are in that number.

// Example:

// Input → 2026

// Output → 4

//solution 1
function findDigits(num) {
  return String(num).length;
}
console.log(findDigits(2026));

// solution 2
function findDigitsUsingReg(num) {
  return String(num).replace(/[^0-9]/g, "").length;
}

console.log(findDigits(2026));  
console.log(findDigits(-2026));  
console.log(findDigits(12.345)); 
console.log(findDigits(-0.98));  
