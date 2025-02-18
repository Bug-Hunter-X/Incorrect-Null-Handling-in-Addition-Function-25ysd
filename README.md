# Incorrect Null Handling in Addition Function

This repository demonstrates a common JavaScript error involving incorrect null value handling within a simple addition function. The function `foo` is designed to add two numbers, but it returns 0 if either input is null.  This behavior is likely unintended, as a more robust approach would handle null values gracefully, such as by treating null as 0.

The `bug.js` file contains the buggy implementation, and `bugSolution.js` shows the corrected version.

## Bug
The core problem lies in the `if` statement within the `foo` function.  The statement `if (a === null || b === null)` returns 0. This produces incorrect results when one or both arguments are null, while the user expects null values to be treated as 0.

## Solution
The solution replaces the incorrect `return 0` with code that explicitly handles null values by treating them as 0 before performing the addition.