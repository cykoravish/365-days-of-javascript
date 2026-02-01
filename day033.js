// Write a JavaScript program that takes a string and checks whether it is a valid palindrome, ignoring spaces, punctuation, and letter case.

// Example:

// Input → "A man, a plan, a canal: Panama"

// Output → Palindrome

function checkPalindrome(str) {
  if (typeof str !== "string" || str.trim().length === 0)
    return "Not a valid string";

  let cleanStr = "";
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";

  for (let char of str) {
    let lower = char.toLowerCase();
    if (alphabets.includes(lower) || numbers.includes(lower)) {
      cleanStr += lower;
    }
  }

  let reversed = cleanStr.split("").reverse().join("");

  return cleanStr === reversed ? "Palindrome" : "Not a Palindrome";
}

console.log(checkPalindrome("A man, a plan, a canal: Panama"));

