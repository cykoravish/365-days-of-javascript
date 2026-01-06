// Write a JavaScript program that takes a number and checks whether it is a prime number or not.

// Example:

// Input → 7 → Output → Prime number

// Input → 10 → Output → Not a prime number

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
