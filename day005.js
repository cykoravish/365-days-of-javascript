// 🚀 Day 5 – JavaScript Challenge (Alternate)

// Task:
// Write a JavaScript program that takes a number and checks whether it is a palindrome or not.

// Example:

// Input → 121 → Output → Palindrome

// Input → 2026 → Output → Not Palindrome

function checkIsNumPalindrome(num) {
  let revStr = String(num).split("").reverse().join("");
  if (Number(revStr) === num) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}

console.log(checkIsNumPalindrome(121))
console.log(checkIsNumPalindrome(2026))
