// * fo loops 

for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
}
// Prints: 0, 1, 2, 3, 4


//  * while Loop
// ? Use while when you don't know in advance how many times to loop.
let count = 0 
while(count < 5){
    console.log("count value : ", count)
    count ++
}


//  do...while Loop
//  ? Like while, but runs at least once (because the condition is checked at the end).

let x = 10;
do {
    console.log(x);
    x++;
} while (x < 5);
// Prints 10 once, even though condition is false



//  * for...of Loop (for arrays and strings)
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

let word = "Hello";
for (let char of word) {
    console.log(char);
}



//  * for...in Loop (for objects — brief intro)

let person = { name: "Aman", age: 25 };
for (let key in person) {
    console.log(key, ":", person[key]);
}


//  * break and continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// Prints: 1, 2, 3, 4

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Prints: 1, 2, 4, 5  (3 is skipped)




// ? Count Vowels in a String
// let str = prompt("Enter a string:").toLowerCase();
let str = "kaisan baa hoo kaeja "
let vowels = "aeiou";
let coun = 0;

for (let char of str) {
    if (vowels.includes(char)) coun++;
}

console.log(`Number of vowels: ${coun}`); 





//  ? Temperature Converter
let temp = Number(prompt("Enter temperature:"));
let unit = prompt("Is it in C or F?").toUpperCase();

if (unit === "C") {
    console.log(`${temp}°C = ${(temp * 9/5) + 32}°F`);
} else if (unit === "F") {
    console.log(`${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C`);
} else {
    console.log("Invalid unit");
}