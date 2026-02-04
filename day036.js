// Write a JavaScript program that takes a string and checks whether all brackets are balanced.

// Example:

// Input → "(a + b) * [c - d]"

// Output → Balanced

// Input → "(a + b"

// Output → Not balanced

function checkBrackets(str) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<'
  };

  for (let char of str) {
    // if opening bracket → push
    if (Object.values(pairs).includes(char)) {
      stack.push(char);
    }
    // if closing bracket → check
    else if (pairs[char]) {
      if (stack.pop() !== pairs[char]) {
        return "Not balanced";
      }
    }
  }

  return stack.length === 0 ? "Balanced" : "Not balanced";
}
