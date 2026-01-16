// Write a JavaScript program that takes an array of numbers and finds the second largest number in the array.

// Example:

// Input → [10, 5, 20, 8]

// Output → 10

function findSecondLargest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return "invalid array";
  }

  arr.sort(function (a, b) {
    return b - a;
  });

  return arr[1];
}

console.log(findSecondLargest([9, 5, 19, 2, 1, 6])); // 9

