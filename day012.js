// Write a JavaScript program that takes an array of numbers and prints the largest number in the array.

// Example:

// Input → [3, 7, 1, 9, 4]

// Output → 9

// method one -- using Math.max
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([2, 4, 8, 6]));

// method two -- using loops
function getLargest(arr){
    let largestNum = arr[0];
    for(let i=1; i<arr.length; i++){
        if(largestNum < arr[i]){
            largestNum = arr[i]
        }
    }
    return largestNum;
}
console.log(getLargest([2, 4, 8, 6]));