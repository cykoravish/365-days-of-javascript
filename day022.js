// Write a JavaScript program that takes a string and capitalizes the first letter of every word in the sentence.

// Example:

// Input → "i love javascript"

// Output → "I Love Javascript"

function capitalizeFirst(str) {
  if (typeof str !== "string") {
    return "not a string";
  }
  str = str.split(" ");
  let capStr = str.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capStr.join(" ");
}
console.log(capitalizeFirst("i love javascript"));
