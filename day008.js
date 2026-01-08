// Write a JavaScript program that takes a number n and prints the Fibonacci series up to n terms.

// Example:

// Input → 5

// Output → 0 1 1 2 3

function fibonacciSeries(n) {
  let a = 0, b = 1;

  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

fibonacciSeries(5);