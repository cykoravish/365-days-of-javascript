// Write a JavaScript program that takes an array of numbers and groups them into even numbers and odd numbers in separate arrays.

// Example:

// Input → [1, 2, 3, 4, 5, 6]

// Output → { even: [2, 4, 6], odd: [1, 3, 5] }

function filterArr(arr) {
  let evenNumArr = [];
  let oddNumArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumArr.push(arr[i]);
    } else {
      oddNumArr.push(arr[i]);
    }
  }
  return { even: evenNumArr, odd: oddNumArr };
}
console.log(filterArr([1, 2, 3, 4, 5, 6]));
