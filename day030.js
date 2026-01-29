// Write a JavaScript program that takes an array of numbers and finds all pairs whose sum is equal to a given number.

// Example:

// Input → [1, 2, 3, 4, 5], target = 5

// Output → [[1,4], [2,3]]

function findPair(arr, target) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "not a valid array";
  }

  let pairedArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairedArr.push([arr[i], arr[j]]);
      }
    }
  }

  return pairedArr;
}

console.log(findPair([1, 2, 3, 4, 5], 5));

