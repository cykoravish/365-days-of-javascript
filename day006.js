// Task:
// Write a JavaScript program that takes a number and prints the factorial of that number.

// Example:

// Input → 5

// Output → 120 (because 5 × 4 × 3 × 2 × 1 = 120)

// solution-1 (using recursion)
function findFactorial(num) {
  if (num === 1 || num === 0) return 1;
  return num * findFactorial(num - 1);
}
console.log(findFactorial(5));

// solution 2 (using loop)`

function findFactorialLoop(num) {
  if (num < 0) return "Can't find factorial of negative numbers";
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i ;
  }
  return factorial;
}
console.log(findFactorialLoop(4));
