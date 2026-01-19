// Write a JavaScript program that takes an array of numbers and rotates it to the right by one position.

// Example:

// Input → [1, 2, 3, 4]

// Output → [4, 1, 2, 3]

function rotateArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "imvalid array";
  }
  let last = arr.pop();
  let un = arr.unshift(last);
  return arr;
}
console.log(rotateArr([1, 2, 3, 4]));
