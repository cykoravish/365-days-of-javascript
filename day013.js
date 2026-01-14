// Write a JavaScript program that takes an array of numbers and removes all duplicate values.

// Example:

// Input → [1, 2, 2, 3, 4, 4, 5]

// Output → [1, 2, 3, 4, 5]

// method - 1 using set
function removeDublicate(arr) {
  return [... new Set(arr)];
}
const removedDublicate = removeDublicate([2, 4, 2, 6, 6, 8, 9, 2]);
console.log(removedDublicate);

// method-2 using loop 
function removeDub(arr){
    const removedDub = [];
    for(let i = 0; i<arr.length; i++){
        if(!removedDub.includes(arr[i])){
            removedDub.push(arr[i])
        }
    }
    return removedDub;
}
console.log(removeDub([2, 4, 2, 6, 6, 8, 9, 2]))