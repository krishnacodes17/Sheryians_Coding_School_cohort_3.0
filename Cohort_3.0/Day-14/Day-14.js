//  *  Functions

function calculateArea(length, breadth) {
    return length * breadth;
}

console.log(calculateArea(5, 3));   // 15
console.log(calculateArea(10, 4));  // 40
console.log(calculateArea(7, 2));   // 14



//  types of functions 

//  * function Declaration

function greet(name) {
    console.log("Hello, " + name);
}

greet("Aman");    // Hello, Aman
greet("Priya");   // Hello, Priya



//  * Function Expression
let greet = function greet (name){
    console.log("hellow ," ,name )
}

greet("kishna")




//  * Anonymous Functions 
const sayHi = function() {
    console.log("Hi!");
};




// *  Arrow Functions (Modern, Preferred)
// Regular function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function — same thing
const add = (a, b) => {
    return a + b;
};


// ? Shorthand rules:
// Single expression → implicit return (no braces, no return keyword)
const add = (a, b) => a + b;

// Single parameter → parentheses optional
const square = x => x * x;

// No parameters → empty parentheses required
const greet = () => console.log("Hello");

// Multi-line body → braces and explicit return required
const add = (a, b) => {
    const sum = a + b;
    return sum;
};



//  *  Parameters: Defaults, Rest, and Edge Cases
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Aman");    // Hello, Aman
greet();          // Hello, Guest


// *   Rest Parameters

function add(a, b) {
    return a + b;
}

console.log(add(5));        // NaN  (5 + undefined)
console.log(add(5, 10, 20)); // 15  (the 20 is ignored)




// *  Return Values

function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result);   // 20



//  * Functions as First-Class Citizens

// 1. Store in a variable
const sayHi = function() { console.log("Hi"); };

// 2. Pass as argument
function callTwice(fn) {
    fn();
    fn();
}
callTwice(sayHi);   // Hi  Hi

// 3. Return from a function
function makeGreeter(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    };
}
const helloGreeter = makeGreeter("Hello");
helloGreeter("Aman");   // Hello, Aman




// * Callback Functions

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




// *  IIFE — Immediately Invoked Function Expression
(function() {
    console.log("I run immediately!");
})();


//  Pure vs Impure Functions
function add(a, b) {
    return a + b;
}
// Pure: add(2, 3) is always 5. Nothing outside changes.


let total = 0;
function addToTotal(n) {
    total += n;       // side effect — changes outer variable
    return total;
}