
// map - Transform
// filter - to filter
// reduce - to reduce into one value

// forEach - for iteration. It is a Higher order function.
var arr = [10,20,30,40,50];

arr.forEach(function(elem){   // normally print element only.
    console.log(elem);
})

arr.forEach(function(elem, idx){ // first argument is for element and 2nd one is for index
    console.log(elem, idx);
})

arr.forEach((value, index, array) => {        // callback can also receive index and the whole array
    console.log(index, value, array);
});

arr.forEach(n => console.log(n * 2));   // with arrow function

// NOTE: forEach does NOT return anything (it returns undefined). It's just for side effects.




// map - It is also a HOF. But it return new array unlike forEach. it can't change the size of array even it has to give undefined

var arr2 = arr.map(function(elem){
    return elem*2
})
console.log("this is old arr: " + arr);
console.log("this is mapped arr: " + arr2);



// filter - to filter the array according to condition and keep only elements that pass a condition. It can reduced the size unlike map.

var arr = [5,9,2,4,33,8];

let evens = arr.filter(n => n % 2 === 0);
console.log("this is filtered arr: " + evens); 


// NOTE: map = modify with same size, filter = remove/keep so size can change
// You can also combine them:

const result = [1, 2, 3, 4]
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(result);   // [20, 40]


// reduce - to reduce into one value. here we need to provide 2 arguments
// - `acc` = accumulator (the running result)
// - `n` = current element
// - `0` = initial value of acc

var arr = [10, 20, 30, 40];
var sum = arr.reduce((acc, val)=>{
    return acc + val
},0)

console.log(sum);


// find — return the first matching element
let users = [{name: "A", age: 20}, {name: "B", age: 30}];
let user = users.find(u => u.age > 25);
console.log(user);   // {name: "B", age: 30}

// findIndex — return the index of the first match
let nums = [10, 20, 30, 40];
let idx = nums.findIndex(n => n > 25);
console.log(idx);   // 2

// some — does AT LEAST ONE match?
let nums = [1, 2, 3];
console.log(nums.some(n => n > 2));   // true
console.log(nums.some(n => n > 10));  // false

// every — do ALL match?
let nums = [1, 2, 3];
console.log(nums.every(n => n > 0));   // true
console.log(nums.every(n => n > 2));   // false