# Day-13 Notes: Loops in JavaScript

## Overview
Day-13 covers different types of loops in JavaScript and how to control their flow using break and continue statements.

---

## 1. For Loop
- Most common loop used when you **know the number of iterations in advance**
- Syntax: `for (let i = 0; i < limit; i++)`
- Consists of: **initialization**, **condition**, **increment/decrement**

### Example:
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
}
// Prints: 0, 1, 2, 3, 4
```

---

## 2. While Loop
- Use when you **don't know in advance how many times to loop**
- Checks condition **before** executing the loop body
- Syntax: `while (condition) { ... }`

### Example:
```javascript
let count = 0;
while(count < 5) {
    console.log("count value:", count);
    count++;
}
```

---

## 3. Do...While Loop
- **Executes at least once** because condition is checked at the end
- Useful when you need to run the code before checking the condition
- Syntax: `do { ... } while (condition);`

### Example:
```javascript
let x = 10;
do {
    console.log(x);
    x++;
} while (x < 5);
// Prints 10 once, even though condition is false
```

---

## 4. For...Of Loop
- Used to iterate over **arrays and strings**
- Gives you the **value** directly (not the index)
- Syntax: `for (let element of iterable) { ... }`

### Example:
```javascript
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

let word = "Hello";
for (let char of word) {
    console.log(char);
}
```

---

## 5. For...In Loop
- Used to iterate over **objects (key-value pairs)**
- Gives you the **keys** of the object
- Syntax: `for (let key in object) { ... }`

### Example:
```javascript
let person = { name: "Aman", age: 25 };
for (let key in person) {
    console.log(key, ":", person[key]);
}
// Output: name: Aman, age: 25
```

---

## 6. Break Statement
- **Exits/terminates the loop** immediately
- Used when a condition is met and you want to stop looping

### Example:
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// Prints: 1, 2, 3, 4 (stops at 5)
```

---

## 7. Continue Statement
- **Skips the current iteration** and moves to the next one
- Does not exit the loop, just skips that particular cycle

### Example:
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Prints: 1, 2, 4, 5 (3 is skipped)
```

---

## Practical Examples

### Example 1: Count Vowels in a String
```javascript
let str = "kaisan baa hoo kaeja";
let vowels = "aeiou";
let count = 0;

for (let char of str) {
    if (vowels.includes(char)) count++;
}

console.log(`Number of vowels: ${count}`);
```

### Example 2: Temperature Converter
```javascript
let temp = Number(prompt("Enter temperature:"));
let unit = prompt("Is it in C or F?").toUpperCase();

if (unit === "C") {
    console.log(`${temp}°C = ${(temp * 9/5) + 32}°F`);
} else if (unit === "F") {
    console.log(`${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C`);
} else {
    console.log("Invalid unit");
}
```

---

## Quick Comparison Table

| Loop Type | When to Use | Returns | Example |
|-----------|------------|---------|---------|
| **for** | Know # of iterations | - | `for(let i=0; i<5; i++)` |
| **while** | Don't know # of iterations | - | `while(condition)` |
| **do...while** | Execute at least once | - | `do { } while(condition)` |
| **for...of** | Iterate arrays/strings | Value | `for(let x of array)` |
| **for...in** | Iterate objects | Key | `for(let key in object)` |

---

## Key Takeaways
✅ Use **for loop** for known iterations  
✅ Use **while loop** for unknown iterations  
✅ Use **do...while** when code must run at least once  
✅ Use **for...of** for arrays and strings  
✅ Use **for...in** for objects  
✅ **break** exits the entire loop  
✅ **continue** skips to the next iteration
