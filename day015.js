// Write a JavaScript program that takes a string and returns the first non-repeating character in it.

// Example:

// Input → "javascript"

// Output → "j"

function findNonRepeating(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(findNonRepeating("javascript"))
