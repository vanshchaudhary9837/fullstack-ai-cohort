// function - Reusable block of code that performs a specific task.

// function declaration:
function greet(name){
    console.log("Hello, " + name);
}

greet("Aman");
greet("Priya");


// function expression:
const greet = function(name) {
    console.log("Hello, " + name);
};

greet("Aman");


//Anonymoud function: 
const sayHi = function() {
    console.log("Hi!");
};

//Arrow function:
// Regular function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function — same thing
const add = (a, b) => {
    return a + b;
};

// Default parameters: - If no argument is passed, use a default value:
function greet(name = "Guest"){
    console.log("Hello " + name)
}
greet("Aman");
greet();   // Hello, Guest


// Rest Parameters - Sometimes you don't know how many arguments will be passed. Use ... to collect them all into an array:
function sum(...num){
    let total = 0;
    for (const n of num) {
        total += n;
    }
    return total;
}

console.log(sum(4,3,2,1)); //10
console.log(sum(4,3,2,1,1,2,3,4)); //20


// Callback Function -  A callback is a function that is passed as an argument to another function, to be called later.

function processUser(name, callback) {
    console.log("Processing user: " + name);
    callback(name);
}

function welcome(name) {
    console.log("Welcome, " + name);
}

processUser("Aman", welcome);
// Processing user: Aman
// Welcome, Aman


// IIFE -  Immediately Invoked Function Expression - An IIFE is a function that runs the moment it's defined.
(function (){
    console.log("It's a IIFE Function");
})();