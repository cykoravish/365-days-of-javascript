// Write a JavaScript program that takes a string and checks whether all characters are unique (no repeated characters).

// Example:

// Input → "abcde" → Output → All characters are unique

// Input → "hello" → Output → Duplicate characters found

function checkUniqueChar(str) {
  let strArr = str.split("");
  let strFreq = {};
  strArr.forEach((e) => {
    if (strFreq[e]) {
      strFreq[e] += 1;
    } else {
      strFreq[e] = 1;
    }
  });
  for (let key in strFreq) {
    if (strFreq[key] > 1) {
      return "Duplicate characters found";
    }
  }
  return "All characters are unique";
}
console.log(checkUniqueChar("Ravish"));

//another optimized solution
function checkUniqueCharacter(str) {
  let seen = {};

  for (let char of str) {
    if (seen[char]) {
      return "Duplicate characters found";
    }
    seen[char] = true;
  }

  return "All characters are unique";
}
console.log(checkUniqueCharacter("baby"));
