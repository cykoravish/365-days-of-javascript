// Write a JavaScript program that takes a string and returns the number of times each character appears in it.

// Example:

// Input → "hello"

// Output → { h: 1, e: 1, l: 2, o: 1 }

function findFreq(str) {
  if (typeof str !== "string" || str.length === 0) {
    console.log("invalid string");
  }
  let freq = {};
  for(let char of str){
    freq[char] = (freq[char] || 0) + 1;
  };
  return freq;
}

console.log(findFreq("hello"));
