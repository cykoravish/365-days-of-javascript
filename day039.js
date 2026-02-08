// Write a JavaScript function that checks whether two strings are anagrams of each other.

// Rules:

// Ignore spaces and letter case.

// Example:

// Input → "listen", "silent" → Output → true

// Input → "Hello", "World" → Output → false


// solution 1
// function checkAnagram(str1, str2) {
//   if (str1.length !== str2.length) return "not an anagram";

//   const sortedStr1 = str1.split("").sort().join("");
//   const sortedStr2 = str2.split("").sort().join("");

//   return sortedStr1 === sortedStr2 ? "strings are anagram" : "not an anagram"

// }
// console.log(checkAnagram("listen", "silent"))

// solution2
// function checkAnagram(str1, str2) {
//   if (str1.length !== str2.length) return "not an anagram";

//   const freq1 = {};
//   const freq2 = {};
//   for (let i = 0; i < str1.length; i++) {
//     freq1[str1[i]] = 1 + (freq1[str1[i]] || 0);
//   }
//   for (let i = 0; i < str2.length; i++) {
//     freq2[str2[i]] = 1 + (freq2[str2[i]] || 0);
//   }

//   for (let key in freq1) {
//     if (freq1[key] !== freq2[key]) return "strings are not anagram";
//   }
//   return "strings are anagram";
// }
// console.log(checkAnagram("listen", "silent"));

// solution 3
function checkAnagram(str1, str2) {
  str1 = str1.toLowerCase().replaceAll(" ", "");
  str2 = str2.toLowerCase().replaceAll(" ", "");

  if (str1.length !== str2.length) return false;

  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");

  return s1 === s2;
}

console.log(checkAnagram("listen", "silent")); 