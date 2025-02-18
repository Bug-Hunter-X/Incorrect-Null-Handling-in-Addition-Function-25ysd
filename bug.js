function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This is wrong if you are expecting to add/subtract null values
  }
  return a + b;
}

console.log(foo(1, null)); // Expected output 1, Actual output 0
console.log(foo(null, 1)); // Expected output 1, Actual output 0
console.log(foo(1, 2)); // Expected output 3, Actual output 3