// THIS Keyword -  Basically refer to something

console.log(this);  // Global level - it gives window object


// Types of Error:-
// 1. Syntax error
// 2. Reference error.  - in which something doesn't exist
// 3. typeerror - like reassigning the value to the const variable

'use strict'

// use strict - 

a = 10; // it works as it is like var a = 10 under the hood
// But if we apply 'use strict' at the top of file -  it gives you the ref error

// This i OBJ

var obj = {
    fname: 'Paul',
    lname: 'Walker',
    age: 40,
    getIntro:  function(){
        console.log(obj.lname);
        console.log(this);   // gives you exact whole obj that call this
        console.log(this.fname);
         
    }
}
obj.getIntro();

var obj = {
    fname: 'Paul',
    lname: 'Walker',
    age: 40,
    getIntro:  () => {
        console.log(obj.lname);
        console.log(this);   // gives you window obj - Due to lexical context
         
    }
}
obj.getIntro();

// Solution to above prob
var obj = {
    fname: 'Paul',
    lname: 'Walker',
    age: 40,
    getIntro: function(){
        const sayName = () => {
        console.log(obj.lname);
        console.log(this); 
        console.log(this.fname);
    }    
    sayName();
    }
}
obj.getIntro();


// call, apply, bind -  Use for function sharing

var student1 = {
    fname :'Rohan',
    lname : 'Mehra',
    getInfo : function(city, state){
        console.log(this.fname + " " + this.lname);
    }
}

var student2 = {
    fname : 'Yash',
    lname : 'Mehra',
}

student1.getInfo.call(student2); // function sharing.



// prototype - 

var arr = [10,20,30,40];

console.log(arr);
arr.push(50);   // this is one of the inbuilt method of array which you can find in prototypes
console.log(arr);
console.log(Array.__proto__);


// OOPs

let song1 = {
    songName : 'Cry on me',
    albumName : 'Hurry up tomorrow',
    singer : 'Weekend',
    duration : 3.5,
    isLiked : true
}

// Now there are multiple songs out there, which have same keys but diff values. 
// There is no sense to make diff obj for all those songs - not an efficient way
