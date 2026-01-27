// Write a JavaScript program that takes a string and checks whether it is an anagram of another string.

// Example:

// Input → "listen", "silent"

// Output → Anagram

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return "not an anagram";
  }
  let sortedStr1 = str1.toLowerCase().split("").sort().join("");
  let sortedStr2 = str2.toLowerCase().split("").sort().join("");

  if (sortedStr1 !== sortedStr2) {
    return "not an anagram";
  }
  return "it's a anagram";
}
checkAnagram("listen", "silent");
