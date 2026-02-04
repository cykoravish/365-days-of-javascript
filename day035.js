// Write a JavaScript program that takes an array of integers and finds the length of the longest consecutive sequence.

// Example:

// Input → [100, 4, 200, 1, 3, 2]

// Output → 4 (sequence: 1, 2, 3, 4)

function findLongestSeq(arr) {
  const set = new Set(arr);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }

  return longest;
}

console.log(findLongestSeq([100, 4, 200, 1, 3, 2])); 
