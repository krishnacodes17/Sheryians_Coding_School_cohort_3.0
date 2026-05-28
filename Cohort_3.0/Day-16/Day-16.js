//   * loops on arrays 

// *  forEach — just run a function on each element
// let nums = [1, 2, 3];
// nums.forEach(function(n) {
//     console.log(n * 2);
// });
// // 2, 4, 6

// //  ? With arrow function:
// nums.forEach(n => console.log(n * 2));


//  * map — transform each element into something new
// let nums = [1, 2, 3, 4];
// let doubled = nums.map(n => n * 2);
// console.log(doubled);   // [2, 4, 6, 8]
// console.log(nums);      // [1, 2, 3, 4] ← unchanged



//  * filter — keep only elements that pass a condition
// let nums = [1, 2, 3, 4, 5, 6];
// let evens = nums.filter(n => n % 2 === 0);
// console.log(evens);   // [2, 4, 6]
// console.log(nums)     // [ 1, 2, 3, 4, 5, 6 ]




//  * reduce — boil the array down to a single value

// let nums = [1, 2, 3, 4];
// let sum = nums.reduce((acc, n) => acc + n, 0);
// console.log(sum);   // 10




//  * find — return the first matching element
// let users = [{name: "A", age: 20}, {name: "B", age: 30}];
// let user = users.find(u => u.age > 25);
// console.log(user);   // {name: "B", age: 30}




//  * findIndex — return the index of the first match
// let nums = [10, 20, 30, 40];
// let idx = nums.findIndex(n => n > 25);
// console.log(idx);   // 2



// * some — does AT LEAST ONE match?

// let nums = [1, 2, 3];
// console.log(nums.some(n => n > 2));   // true
// console.log(nums.some(n => n > 10));  // false



//  * every — do ALL match?
// let nums = [1, 2, 3];
// console.log(nums.every(n => n > 0));   // true
// console.log(nums.every(n => n > 2));   // false




//  *  Array Destructuring

let arr = [10, 20, 30];

// Old way
let a = arr[0];
let b = arr[1];

// New way
let [x, y, z] = arr;
console.log(x, y, z);   // 10 20 30

//  * Skip elements:
 let [first, , third] = [1, 2, 3];
console.log(first, third);   // 1 3

//  * Default values:
let [a = 10, b = 20] = [5];
console.log(a, b);   // 5 20

//  * Swap variables (elegant!):
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