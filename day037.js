// Write a JavaScript program that takes an array of numbers and finds the longest increasing subarray (continuous).

// Example:

// Input → [1, 2, 2, 3, 4, 1, 2, 3, 4, 5]

// Output → 5 (subarray: 1, 2, 3, 4, 5)

function longestIncreasingSubarray(arr) {
  if (arr.length === 0) return 0;

  let maxLen = 1;
  let currLen = 1;

  let start = 0;       
  let bestStart = 0;   

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currLen++;
    } else {
      currLen = 1;
      start = i;
    }

    if (currLen > maxLen) {
      maxLen = currLen;
      bestStart = start;
    }
  }

  const subarray = arr.slice(bestStart, bestStart + maxLen);
  return { length: maxLen, subarray };
}

const input = [1, 2, 2, 3, 4, 1, 2, 3, 4, 5];
const result = longestIncreasingSubarray(input);

console.log(result.length);   
console.log(result.subarray); 
