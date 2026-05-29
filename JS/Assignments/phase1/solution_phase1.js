// # Console & Basics

console.log("Hello JavaScript");
let name = "Vansh";
let age = 24;
let city = "Noida";
console.log(`My name is ${name}. I'm ${age} years old and lives in ${city}.`);

console.warn("This is warning!!");
console.error("Here is an error, please note.");
console.table([5,4,3,2,1]);



//  Variables

let studentName = "Student Vansh";
age = 24;  // as we decalare the age variable above, we can't re-declare in same scope! - JS Basics
console.log(`My name is ${studentName}. I'm ${age} years old and lives in ${city}.`);
let a = 3, b = 5;
console.log(a);
console.log(b);
let c = a;
a = b;
b = c; 
console.log(a);
console.log(b);

const fixedVar = Math.PI;
console.log(fixedVar);

let onlyDeclareVar;
console.log(onlyDeclareVar);

let score = 1;
score += 10;
console.log(score);

let firstName = "Brian";
let lastName = "O'conner";
let fullName = firstName + " " + lastName;
console.log(fullName);


// Data Types

let dataString = "This is a string data type";
let dataNum = 30;
let isStudent = true;
let job = null;
let color;
let num = 6257763918;
let dataBigNum = 12345678901234567890n;

console.log(typeof(dataString));
console.log(typeof(dataNum));
console.log(typeof(isStudent));
console.log(typeof(job));
console.log(typeof(color));
console.log(typeof(num));
console.log(typeof(dataBigNum));
console.log(dataBigNum);



// # Type Conversion & Coercion

var newString = "50";
var newNum = 100;
var booleanString = "true";

console.log(Number(newString));
console.log(String(newNum));
console.log(Boolean(booleanString));

console.log(typeof(Number(newString)));
console.log(typeof(String(newNum)));
console.log(typeof(Boolean(booleanString)));

console.log("5" + 3);     // "53"   ← string concatenation
console.log("5" - 3);     // 2      ← number subtraction
console.log("5" * "2");   // 10
console.log(true + 1);    // 2      (true becomes 1)
console.log(false + 1);   // 1      (false becomes 0)
console.log(null + 1);    // 1      (null becomes 0)
console.log(undefined + 1); // NaN  (undefined becomes NaN)

var x = "123abc";
console.log(Number(x));     // NaN

console.log(parseInt("500px"));    // 500


// Operators

console.log(a + b);
console.log(25%4);
console.log(6**2);
console.log(++a);
console.log(--a);
console.log(a += 20);
console.log("10"==10);
console.log("10"===10);
 var y = true;
 var z = false;
 console.log(y && z);
 console.log(y || z);
 console.log(y != z);

 

// Strings

console.log(studentName.length);
console.log(studentName.toUpperCase());
console.log(studentName.toLowerCase());
console.log(studentName.includes("Javascript"));
var word = "Hello World apple";
console.log(word.substring(6, 11));
console.log(word.replace("apple", "mango"));
const str = "HTML,CSS,JS";
const arr = str.split(",");
console.log(arr); // ["HTML", "CSS", "JS"]



//Numbers
 console.log(Math.round(4.7));
 console.log(Math.sqrt(81));
 console.log(Math.max(10, 20, 5, 99));
 console.log(Math.min(10, 20, 5, 99));
console.log(parseInt("99.99"));
console.log(Number.isInteger(25));
let n = 3.14159;
console.log(n.toFixed(2));


 

// Conditionals

if (n > 0){
    console.log("n is a positive number");
} else if(n<0){
    console.log("n is a negative number");
} else{
    console.log("n is a zero");
}

const num1 = 10;
const num2 = 5;
const operator = "+"; // +, -, *, /

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    break;

  default:
    result = "Invalid operator";
}

console.log(result);


// truthy and Falsy

let value = "Hello"; // try: "", 0, null, undefined, false

if (value) {
  console.log("Valid");
} else {
  console.log("Invalid");
}



// Logical Thinking Questions

// 1. 
let num3 = 20;
let num4 = 14;

if (num3 > num4){
    console.log(`${num3} is greater than ${num4}`);
} else if(num3 < num4){
    console.log(`${num4} is greater than ${num3}`);
} else{
    console.log(`${num3} is equal to ${num4}`);
}


// 2.
if (num3 > 10 && num3 < 50){
    console.log(`${num3} is under limit`);
} else console.log("Outside of limit")