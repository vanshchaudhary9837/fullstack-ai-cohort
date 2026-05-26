# JavaScript Beginner Practice Questions (Phase - 2)  
## Sheet - 1

---

# Part 1 — Functions Basics (1–20)

## Beginner Level

1. Create a function named `greet` that prints `"Hello World"`.
2. Create a function `add(a, b)` that returns the sum.
3. Write a function to calculate the square of a number.
4. Create a function that checks whether a number is even or odd.
5. Write a function that converts Celsius to Fahrenheit.
6. Create a function with default parameter `"Guest"`.
7. Write a function that returns the greater of two numbers.
8. Create a function to calculate area of rectangle.
9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
10. Create a function to reverse a string.

## Intermediate Level

11. Write a function expression for multiplication.
12. Convert a normal function into an arrow function.
13. Create a function that accepts unlimited numbers and returns their sum using rest operator.
14. Write a function that counts vowels in a string.
15. Create a function that checks if a string is palindrome.
16. Write a callback function example using `setTimeout`.
17. Create a higher-order function that executes another function twice.
18. Write a function that returns another function.
19. Create a pure function for subtraction.
20. Create an impure function using global variable modification.

---

# Part 2 — Advanced Functions (21–35)

21. Write a recursive function for factorial.
22. Write recursive Fibonacci function.
23. Create a function that finds power using recursion.
24. Create an IIFE that prints `"Executed"`.
25. Write a function that memoizes factorial calculation.
26. Create a closure counter function.
27. Write a function currying example for addition.
28. Create debounce function logic.
29. Create throttle function logic.
30. Write a function that executes only once.
31. Create custom implementation of `map`.
32. Create custom implementation of `filter`.
33. Create custom implementation of `reduce`.
34. Create custom `forEach`.
35. Explain output:

```js
function test() {
    return;
    console.log("Hello");
}

console.log(test());
```

---

# Part 3 — Arrays Basics (36–55)

## Beginner

36. Create an array of 5 fruits.
37. Print first and last element of array.
38. Find length of array.
39. Add element at end using `push`.
40. Remove last element using `pop`.
41. Add element at beginning using `unshift`.
42. Remove first element using `shift`.
43. Reverse an array.
44. Sort numbers ascending.
45. Sort numbers descending.

## Intermediate

46. Use `splice` to remove elements.
47. Use `splice` to insert elements.
48. Use `slice` to copy array.
49. Find index of an element.
50. Check if array contains a value.
51. Join array elements with `"."`
52. Merge two arrays using spread operator.
53. Copy array using spread operator.
54. Find maximum value using `Math.max`.
55. Swap two variables using destructuring.

---

# Part 4 — Array Iteration Methods (56–75)

56. Use `forEach` to print all numbers doubled.
57. Use `map` to square all numbers.
58. Use `filter` to get even numbers.
59. Use `reduce` to calculate sum.
60. Use `reduce` to find maximum number.
61. Use `find` to get first even number.
62. Use `findIndex` to locate number > 50.
63. Use `some` to check if any number is negative.
64. Use `every` to check if all numbers are positive.
65. Create array of names and convert all to uppercase.
66. Filter all students with marks > 80.
67. Calculate average using `reduce`.
68. Count occurrences of numbers in array.
69. Flatten nested arrays using `flat`.
70. Remove duplicates using `Set`.
71. Sort array of objects by age.
72. Find total price of shopping cart.
73. Group users by age.
74. Chain `filter` and `map`.
75. Explain difference between `map` and `forEach`.

---

# Part 5 — Objects Basics (76–90)

76. Create object for a student.
77. Access properties using dot notation.
78. Access properties using bracket notation.
79. Add new property dynamically.
80. Update existing property.
81. Delete a property.
82. Create object method.
83. Use `this` keyword inside method.
84. Create nested object.
85. Access deeply nested property.
86. Destructure object properties.
87. Rename variables while destructuring.
88. Add default values during destructuring.
89. Copy object using spread operator.
90. Merge two objects.

---

# Part 6 — Advanced Objects + Real Logic (91–100)

91. Use `Object.keys()` on object.
92. Use `Object.values()`.
93. Use `Object.entries()`.
94. Loop through object using `for...in`.
95. Freeze an object and test modification.
96. Seal an object and test modification.
97. Create array of objects for users.
98. Find user with highest age.
99. Build a mini TODO app using arrays + objects.
100. Build a shopping cart system with:
   - Add item
   - Remove item
   - Calculate total
   - Quantity update

---

# Notes

These questions are optional, but if you want to improve your JavaScript and logic building skills, then try solving them.

Take help from ChatGPT, Google, or YouTube if needed, but understand the logic instead of copying answers.

---

# Bonus Hard Questions

## Debugging Questions

### 101

```js
const arr = [1,2,3];
arr[10] = 5;

console.log(arr.length);
```

### 102

```js
console.log(typeof []);
```

### 103

```js
console.log([] == false);
```

### 104

```js
console.log([1,2] + [3,4]);
```

### 105

```js
function x(a,b){
   return a+b;
}

console.log(x(2));
```

---

# Ultra Advanced Practice

1. Build custom `Array.prototype.map`.
2. Build custom `Array.prototype.filter`.
3. Build custom `Array.prototype.reduce`.
4. Implement deep clone function.
5. Create student management system.
6. Create library management system.
7. Create expense tracker logic.
8. Build inventory management system.
9. Create function composition utility.
10. Build calculator using objects and methods.

---

# Scenario-Based Questions

1. You have an array of users. Return only active users.
2. Calculate total revenue from orders array.
3. Find second largest number in array.
4. Find missing number in array.
5. Check whether two objects are equal.

---

# Interview-Level Questions

## Difference between:

- Function declaration
- Function expression
- Arrow function

## Difference between:

- `slice`
- `splice`

## Difference between:

- `map`
- `filter`
- `reduce`

## Difference between:

- `for...in`
- `for...of`

## Difference between:

- Shallow copy
- Deep copy

---

# Logic Building Questions

1. Rotate array by `k` positions.
2. Find frequency of characters in string.
3. Find longest word in sentence.
4. Check if two strings are anagrams.
5. Capitalize first letter of every word.
6. Remove falsy values from array.
7. Convert array into object.
8. Convert object into array.
9. Find duplicate elements.
10. Merge two sorted arrays.

---

# Real World Practice

1. Create authentication validation functions.
2. Create OTP generator.
3. Create password strength checker.
4. Build leaderboard system.
5. Create attendance management logic.

---

# Advanced Functional Programming

1. Implement `compose` function.
2. Implement `pipe` function.
3. Create custom event emitter.
4. Build promise-like function logic.
5. Create retry mechanism function.

---

# Final Challenge Questions

1. Build complete Notes App logic.
2. Build Student Dashboard logic.
3. Build Quiz App data handling.
4. Build E-commerce Cart System.
5. Build Mini Netflix Watchlist System.