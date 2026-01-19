// Write a JavaScript program that takes a string and returns the character that appears the most times in that string.

// Example:

// Input → "javascript"

// Output → "a" (appears the most times)

function mostTimeAppear(str) {
  if (!str) return null;

  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let highestFreq = Math.max(...Object.values(freq));

  for (let key in freq) {
    if (freq[key] === highestFreq) {
      return key;
    }
  }
}

console.log(mostTimeAppear("javascript"));
