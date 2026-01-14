// Write a JavaScript program that takes an array of numbers and prints how many even and how many odd numbers are in the array.

// Example:

// Input → [1, 2, 3, 4, 5, 6]

// Output → Even: 3, Odd: 3

function findEvenOdd(arr) {
  if (!Array.isArray(arr)) return "not an array";
  let evenArr = [];
  let oddArr = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
        evenArr.push(arr[i])
    }else{
        oddArr.push(arr[i])
    }
  }
  return `Even : ${evenArr.length}, Odd: ${oddArr.length}`
}
console.log(findEvenOdd([1, 2, 3, 4, 5, 6]));