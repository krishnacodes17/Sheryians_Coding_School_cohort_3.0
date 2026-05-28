//  Array 

//  * Creating Arrays
let fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["Aman", 25, true, null];   // arrays can hold any types
let empty = [];




// *  Accessing Elements (Zero-Indexed)

let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);   // "apple"
console.log(fruits[1]);   // "banana"
console.log(fruits[2]);   // "mango"
console.log(fruits[3]);   // undefined (doesn't exist)

//  ? Negative indices don't work like in Python. fruits[-1] is undefined.



//  * Array Length
let arr = [10, 20, 30, 40];
console.log(arr.length);   // 4




// * Mutating Methods (Change the Original)
let arr = [2, 3, 4];

arr.push(5);          // [2, 3, 4, 5]
arr.unshift(1);       // [1, 2, 3, 4, 5]
let last = arr.pop(); // [1, 2, 3, 4], last = 5
let first = arr.shift(); // [2, 3, 4], first = 1

arr.reverse();        // [4, 3, 2]
arr.sort();           // [2, 3, 4]



let arr = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1
arr.splice(1, 2);     // arr is now [1, 4, 5]

// Insert without removing: count = 0
let arr2 = [1, 2, 5];
arr2.splice(2, 0, 3, 4);   // arr2 is now [1, 2, 3, 4, 5]

// Replace: remove + insert
let arr3 = [1, 2, 99, 4];
arr3.splice(2, 1, 3);      // arr3 is now [1, 2, 3, 4]




//  ? Important gotcha with sort(): By default, sort converts everything to strings and sorts alphabetically.
[10, 1, 5, 100].sort();   // [1, 10, 100, 5]  ← surprising!

// ? For numeric sorting, pass a compare function:
[10, 1, 5, 100].sort((a, b) => a - b);   // [1, 5, 10, 100]  ascending
[10, 1, 5, 100].sort((a, b) => b - a);   // [100, 10, 5, 1]  descending




//  * Non-Mutating Methods (Return New Array)
let arr = [1, 2, 3, 4, 5];

arr.slice(1, 4);              // [2, 3, 4]  (original unchanged)
arr.concat([6, 7]);           // [1, 2, 3, 4, 5, 6, 7]
arr.includes(3);              // true
arr.indexOf(3);               // 2
arr.indexOf(99);              // -1 (not found)
arr.join("-");                // "1-2-3-4-5"


//  ? Critical distinction: slice (non-mutating, makes a copy) vs splice (mutating, modifies original). They look similar but are very different. This trips up everyone.


//   Iteration Methods (The Powerful Ones)


//  * forEach — just run a function on each element

let nums = [1, 2, 3];
nums.forEach(function(n) {
    console.log(n * 2);
});
// 2, 4, 6


nums.forEach(n => console.log(n * 2));


//  *  map — transform each element into something new

let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
console.log(doubled);   // [2, 4, 6, 8]
console.log(nums);      // [1, 2, 3, 4] ← unchanged


//  * filter — keep only elements that pass a condition
let nums = [1, 2, 3, 4, 5, 6];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens);   // [2, 4, 6]


//  * find — return the first matching element
let users = [{name: "A", age: 20}, {name: "B", age: 30}];
let user = users.find(u => u.age > 25);
console.log(user);   // {name: "B", age: 30}



// * findIndex — return the index of the first match
let nums = [10, 20, 30, 40];
let idx = nums.findIndex(n => n > 25);
console.log(idx);   // 2


//  * some — does AT LEAST ONE match?
let nums = [1, 2, 3];
console.log(nums.some(n => n > 2));   // true
console.log(nums.some(n => n > 10));  // false


//  * every — do ALL match? 
let nums = [1, 2, 3];
console.log(nums.every(n => n > 0));   // true
console.log(nums.every(n => n > 2));   // false





//  * Array Destructuring
let arr = [10, 20, 30];

// Old way
let a = arr[0];
let b = arr[1];

// New way
let [x, y, z] = arr;
console.log(x, y, z);   // 10 20 30



// Skip elements 
let [first, , third] = [1, 2, 3];
console.log(first, third);   // 1 3


//  Default values
let [a = 10, b = 20] = [5];
console.log(a, b);   // 5 20

//  Swap variables (elegant!) 
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);   // 2 1





//  *  Spread and Rest with Arrays
let nums = [1, 2, 3];
let more = [0, ...nums, 4];
console.log(more);   // [0, 1, 2, 3, 4]

// Copy an array (shallow)
let copy = [...nums];

// Combine arrays
let combined = [...[1, 2], ...[3, 4]];   // [1, 2, 3, 4]

// Pass as function arguments
console.log(Math.max(...[5, 3, 9, 1]));   // 9



//  * Rest — collect into an array


function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));   // 10






//  * Multi-Dimensional Arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]);   // 6 (row 1, column 2)

// Loop through a 2D array
for (let row of matrix) {
    for (let val of row) {
        console.log(val);
    }
}