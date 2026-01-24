// Write a JavaScript program that takes an array of numbers and returns a new array containing only the unique elements, without using Set.

// Example:

// Input → [1, 2, 2, 3, 4, 4]

// Output → [1, 2, 3, 4]

function filterUnique(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
console.log(filterUnique([1, 2, 3, 1]));
