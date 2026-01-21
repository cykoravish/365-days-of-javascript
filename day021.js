// Write a JavaScript program that takes an array of numbers and checks whether the array is sorted in ascending order or not.

// Example:

// Input → [1, 2, 3, 4] → Output → Sorted

// Input → [3, 1, 4] → Output → Not sorted

function checkAscending(arr) {
  if (!Array.isArray(arr)) {
    return "not an array";
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return "Not sorted";
    }
  }

  return "Sorted";
}

console.log(checkAscending([1, 2, 3, 4]));
