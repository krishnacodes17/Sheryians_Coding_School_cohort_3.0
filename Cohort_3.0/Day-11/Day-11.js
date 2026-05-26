
console.log("Hellow Wold ")

console.log("Hello, World!");
console.log(42);
console.log(true);
console.log("My name is", "Aman", "and I am", 25, "years old");



console.log("Normal message");
console.warn("This is a warning");      // shown in yellow in browsers
console.error("This is an error");      // shown in red
console.table([1, 2, 3]);               // prints data as a table


// This is a single-line comment

/*
   This is a
   multi-line comment
*/

console.log("Hello"); // You can also comment at the end of a line

// vaiables decleation and inistilization
let a= 10 
let b = 5



let city;              // declared, value is undefined
console.log(city);     // undefined
city = "Bhopal";       // initialized now
console.log(city);     // Bhopal


console.warn("are you 18 +")

console.error("this is error ")


//  data types
let name = "Aman";         // string
let age = 25;              // number
let isStudent = true;      // boolean
let car = null;            // null - "no car right now, intentionally"
let job;                   // undefined - never assigned
let id = Symbol("uid");    // symbol
let bigNum = 12345678901234567890n; // bigint (note the 'n')


// null vs undefined — A Common Confusion
let a;            // undefined - JS gave it
let b = null;     // null - I gave it



//  types of opeators 

console.log(typeof "hello");      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object"  ← famous bug in JS!
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"  (arrays are objects)
console.log(typeof function(){}); // "function"

// yes, typeof null is "object". This is a bug from 1995 that was never fixed because too much code depends on it. Tell your students this story — they'll remember it forever.



// Type Conversion vs Type Coercion

//* Explicit Conversion (you do it on purpose)
let str = "42";
let num = Number(str);     // converts "42" to 42
console.log(typeof num);   // "number"

let n = 100;
let s = String(n);         // converts 100 to "100"

let val = "hello";
let b = Boolean(val);      // true (non-empty string is truthy)



// * Implicit Coercion (JS does it automatically — often surprisingly)

console.log("5" + 3);     // "53"   ← string concatenation
console.log("5" - 3);     // 2      ← number subtraction
console.log("5" * "2");   // 10
console.log(true + 1);    // 2      (true becomes 1)
console.log(false + 1);   // 1      (false becomes 0)
console.log(null + 1);    // 1      (null becomes 0)
console.log(undefined + 1); // NaN  (undefined becomes NaN)



// * Everything else is truthy — including "0", "false", [], {}.
if ("hello")  console.log("truthy");   // runs
if (0)        console.log("won't run");
if ([])       console.log("truthy");   // runs! empty array is truthy


//  arithemetic opeation 
console.log("the sum of a & b is : " , a+b)  
console.log("subtract of a and b " ,a - b)
console.log("multiplay : " ,a*b)
console.log("modulo" , a%b)

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


// * Difference between pre and post:

let x = 5;
let y = x++;   // y gets 5 (old value), THEN x becomes 6
let z = ++x;   // x becomes 7 first, THEN z gets 7


//  * Assignment Operators

let x = 10;
x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6
x %= 4;   // x = x % 4 → 2


//  * Comparison Operators

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



// * Logical Operators
let a = true, b = false;

console.log(a && b);   // false   AND: both must be true
console.log(a || b);   // true    OR: at least one must be true
console.log(!a);       // false   NOT: flips the value

console.log("hello" && "world");  // "world"
console.log(0 && "hello");        // 0
console.log("" || "default");     // "default"
console.log("user" || "guest");   // "user"