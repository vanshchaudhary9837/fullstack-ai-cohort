console.log("Hello, World!!");
console.log("Hello, World!");
console.log(42);
console.log(true);
console.log("My name is", "Aman", "and I am", 25, "years old");

console.log(" ");

console.log("Normal message");
console.warn("This is a warning");      // shown in yellow in browsers
console.error("This is an error");      // shown in red
console.table([1, 2, 3]);               // prints data as a table


console.log(" ");

var age = 25;
let name = "Aman";
const PI = 3.14159;

// - Use `const` by default.
// - Use `let` if you know the value will change.
// - Avoid `var` in modern code (we'll see why in Phase 3 — it has scoping quirks).

console.log(" ");

console.log(typeof "hello");      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object"  ← famous bug in JS!
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"  (arrays are objects)
console.log(typeof function(){}); // "function"


console.log(" ");

let str = "42";
let num = Number(str);     // converts "42" to 42
console.log(typeof num);   // "number"

let n = 100;
let s = String(n);         // converts 100 to "100"

let val = "hello";
let b = Boolean(val);      // true (non-empty string is truthy)


console.log(" ");

console.log("5" + 3);     // "53"   ← string concatenation
console.log("5" - 3);     // 2      ← number subtraction
console.log("5" * "2");   // 10
console.log(true + 1);    // 2      (true becomes 1)
console.log(false + 1);   // 1      (false becomes 0)
console.log(null + 1);    // 1      (null becomes 0)
console.log(undefined + 1); // NaN  (undefined becomes NaN)


if ("hello")  console.log("truthy");   // runs
if (0)        console.log("won't run");
if ([])       console.log("truthy");   // runs! empty array is truthy


let a = 10, b = 3;

console.log(a + b);   // 13   addition
console.log(a - b);   // 7    subtraction
console.log(a * b);   // 30   multiplication
console.log(a / b);   // 3.333... division
console.log(a % b);   // 1    modulus (remainder)
console.log(a ** b);  // 1000 exponentiation (10^3)

let x = 5;
x++;   // x is now 6 (post-increment)
++x;   // x is now 7 (pre-increment)
x--;   // x is now 6
--x;   // x is now 5

let x = 5;
let y = x++;   // y gets 5 (old value), THEN x becomes 6
let z = ++x;   // x becomes 7 first, THEN z gets 7

let x = 10;
x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6
x %= 4;   // x = x % 4 → 2

console.log(5 == "5");    // true   (loose equality — converts types)
console.log(5 === "5");   // false  (strict equality — checks type AND value)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true
console.log(5 > 3);       // true
console.log(5 <= 5);      // true

console.log(0 == false);        // true  ← surprising!
console.log("" == false);       // true  ← surprising!
console.log(null == undefined); // true  ← surprising!
console.log(0 === false);       // false ← sane

let a = true, b = false;

console.log(a && b);   // false   AND: both must be true
console.log(a || b);   // true    OR: at least one must be true
console.log(!a);       // false   NOT: flips the value

console.log("hello" && "world");  // "world"
console.log(0 && "hello");        // 0
console.log("" || "default");     // "default"
console.log("user" || "guest");   // "user"


let s = "Hello, World!";

console.log(s.length);              // 13
console.log(s.toUpperCase());       // "HELLO, WORLD!"
console.log(s.toLowerCase());       // "hello, world!"
console.log(s.indexOf("World"));    // 7  (position of "World")
console.log(s.includes("Hello"));   // true
console.log(s.slice(0, 5));         // "Hello"
console.log(s.substring(7, 12));    // "World"
console.log(s.replace("World", "JS"));   // "Hello, JS!"
console.log(s.split(", "));         // ["Hello", "World!"]
console.log("   hi   ".trim());     // "hi"
console.log("abc".repeat(3));       // "abcabcabc"
console.log(s.startsWith("Hello")); // true
console.log(s.endsWith("!"));       // true
console.log(s.charAt(0));           // "H"
console.log(s[0]);                  // "H" (also works)


let n = 3.14159;

console.log(n.toFixed(2));     // "3.14" (returns string!)
console.log(Number("42"));     // 42
console.log(Number("42abc"));  // NaN
console.log(parseInt("42px")); // 42 (parses what it can)
console.log(parseFloat("3.14kg")); // 3.14
console.log(isNaN("hello"));   // true
console.log(Number.isInteger(5));   // true
console.log(Number.isInteger(5.5)); // false


console.log(Math.PI);            // 3.14159...
console.log(Math.E);             // 2.71828...

console.log(Math.round(4.6));    // 5
console.log(Math.floor(4.9));    // 4 (always rounds down)
console.log(Math.ceil(4.1));     // 5 (always rounds up)
console.log(Math.abs(-7));       // 7
console.log(Math.max(1, 5, 3));  // 5
console.log(Math.min(1, 5, 3));  // 1
console.log(Math.pow(2, 10));    // 1024
console.log(Math.sqrt(16));      // 4
console.log(Math.random());      // random number between 0 and 1


let marks = 75;

if (marks >= 90) {
    console.log("A grade");
} else if (marks >= 75) {
    console.log("B grade");
} else if (marks >= 50) {
    console.log("C grade");
} else {
    console.log("Fail");
}


let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend coming!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Midweek day");
}



let x = 10;
do {
    console.log(x);
    x++;
} while (x < 5);
// Prints 10 once, even though condition is false


let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

let word = "Hello";
for (let char of word) {
    console.log(char);
}


let person = { name: "Aman", age: 25 };
for (let key in person) {
    console.log(key, ":", person[key]);
}



// Mini project 1

let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));

let result;
if (operator === "+") result = num1 + num2;
else if (operator === "-") result = num1 - num2;
else if (operator === "*") result = num1 * num2;
else if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
else result = "Invalid operator";

console.log("Result:", result);


for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}



let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

do {
    guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++;
    if (guess > secret) console.log("Too high!");
    else if (guess < secret) console.log("Too low!");
} while (guess !== secret);

console.log(`You got it in ${attempts} attempts!`);