// Write a JavaScript program that takes a string and counts how many vowels (a, e, i, o, u) are present in it.

// Example:

// Input → "javascript"

// Output → 3

function checkVowelCount(str) {
  if (typeof str !== "string") {
    return "please enter a valid string";
  }
  let vowels = "aeiou";
  let vovelsCount = 0;
  str.toLowerCase().split("").forEach((e) => {
    if (vowels.includes(e)) {
      vovelsCount++;
    }
  });
  return vovelsCount;
}
console.log(checkVowelCount("Javascript"));
