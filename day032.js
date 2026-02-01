// Write a JavaScript program that takes an array of numbers and finds the maximum difference between any two elements, where the larger number comes after the smaller number.

// Example:

// Input → [2, 3, 10, 6, 4, 8, 1]

// Output → 8 (10 − 2)

function maxDifference(arr) {
  let largestDiff = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      let diff = arr[j] - arr[i];
      if (largestDiff < diff) {
        largestDiff = diff;
      }
    }
  }
  return largestDiff;
}
console.log(maxDifference([2, 3, 10, 4, 8, 1]));
