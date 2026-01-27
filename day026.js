// Write a JavaScript program that takes an array of numbers and finds the missing number from a sequence of numbers from 1 to n.

// Example:

// Input → [1, 2, 3 4, 6, 7]

// Output → 5

function findMissingNumber(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i - 1] + 1;
    }
  }
}

console.log(findMissingNumber([1,2,4,5]))
