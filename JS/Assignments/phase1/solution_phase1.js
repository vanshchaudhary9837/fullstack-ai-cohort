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

