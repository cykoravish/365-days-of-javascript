// Write a JavaScript program that takes an array of integers and finds the maximum product of two numbers in the array.

// Example:

// Input → [3, 5, 2, 8, 7]

// Output → 56 (7 × 8 OR 7 × 8 depending on logic)

function finMaxProd(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return "Array must contain at least two numbers";
  }

  let maxProd = arr[0] * arr[1];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const prod = arr[i] * arr[j];
      if (prod > maxProd) {
        maxProd = prod;
      }
    }
  }

  return maxProd;
}

console.log(finMaxProd([3, 5, 2, 8, 7]));
