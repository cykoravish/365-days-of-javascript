// Write a JavaScript function that finds the first non-repeating character in a string.

// Rules:

// Return the character itself

// If none exists, return null

// Example:

// Input → "javascript" → Output → "j"

// Input → "aabbcc" → Output → null

function findnNonRepeat(str) {
  if (typeof str !== "string") return "not a valid string";

  let normalizeStr = str.toLowerCase().replaceAll(" ", "");
  const freq = {};

  for(let char of normalizeStr){
    freq[char] = (freq[char] || 0) + 1;
  }

  for(let key in freq){
    if(freq[key] == 1)return key;
  }
  return null;

}

console.log(findnNonRepeat("javascript"))