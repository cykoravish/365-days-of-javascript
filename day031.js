// Write a JavaScript program that takes a string and compresses it by counting consecutive repeating characters.

// Example:

// Input → "aaabbc"

// Output → "a3b2c1"

function compressStr(str) {
  if (!str) return "";

  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result;
}

console.log(compressStr("aaabbc"));
console.log(compressStr("aabbaa"));  
