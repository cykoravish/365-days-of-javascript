// Write a JavaScript program that takes a string and checks whether it contains only numbers.

// Example:

// Input → "12345" → Output → Only numbers

// Input → "12a3" → Output → Contains non-numeric characters

function checkString(str) {
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      console.log("Contains non-numeric characters");
      return;
    }
  }
  console.log("Only numbers");
}

checkString("12345"); // Only numbers
checkString("12a3");  // Contains non-numeric characters
checkString("jid");   // Contains non-numeric characters
