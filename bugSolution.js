function foo(a, b) {
  // Handle null values by treating them as 0
  a = (a === null) ? 0 : a;
  b = (b === null) ? 0 : b;
  return a + b;
}

console.log(foo(1, null)); // Expected output 1, Actual output 1
console.log(foo(null, 1)); // Expected output 1, Actual output 1
console.log(foo(1, 2)); // Expected output 3, Actual output 3
console.log(foo(null, null)); // Expected output 0, Actual output 0