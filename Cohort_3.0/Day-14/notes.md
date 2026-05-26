# Day-14 Notes: Functions in JavaScript

## Overview
Day-14 covers functions in JavaScript - how to declare them, use them, and understand their power as first-class citizens.

---

## 1. Why Do We Need Functions?

### Big Benefits of Using Functions:
- **Reusability**: Write once, use multiple times
- **Modularity**: Break code into smaller, manageable pieces
- **Maintainability**: Easier to update and debug
- **Readability**: Code becomes clearer and more organized
- **Avoiding Repetition**: DRY (Don't Repeat Yourself) principle

### Example:
```javascript
function calculateArea(length, breadth) {
    return length * breadth;
}

console.log(calculateArea(5, 3));   // 15
console.log(calculateArea(10, 4));  // 40
console.log(calculateArea(7, 2));   // 14
```

---

## 2. Types of Functions

### A. Function Declaration
- **Most traditional way** to define a function
- Can be called **before it's declared** (hoisting)
- Syntax: `function name(parameters) { ... }`

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

greet("Aman");    // Hello, Aman
greet("Priya");   // Hello, Priya
```

---

### B. Function Expression
- Function stored in a **variable**
- Can be **named** or **anonymous**
- NOT hoisted - cannot be called before declaration

```javascript
let greet = function greet(name) {
    console.log("Hello, " + name);
}

greet("Krishna");
```

---

### C. Anonymous Functions
- Function **without a name**
- Usually stored in a variable or passed as an argument
- Syntax: `function() { ... }`

```javascript
const sayHi = function() {
    console.log("Hi!");
};

sayHi();  // Hi!
```

---

### D. Arrow Functions (Modern & Preferred)
- **Concise syntax** introduced in ES6
- Implicit return for single expressions
- Shorter than function expressions

#### Comparison:
```javascript
// Regular function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function - same thing
const add = (a, b) => {
    return a + b;
};
```

#### Shorthand Rules:

1. **Single expression → implicit return** (no braces, no return keyword)
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3));  // 5
```

2. **Single parameter → parentheses optional**
```javascript
const square = x => x * x;
console.log(square(4));  // 16
```

3. **No parameters → empty parentheses required**
```javascript
const greet = () => console.log("Hello");
greet();  // Hello
```

4. **Multi-line body → braces and explicit return required**
```javascript
const add = (a, b) => {
    const sum = a + b;
    return sum;
};
```

---

## 3. Parameters: Defaults, Rest, and Edge Cases

### Default Parameters
- Set **default value** if parameter is not provided
- Syntax: `function(param = defaultValue)`

```javascript
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Aman");    // Hello, Aman
greet();          // Hello, Guest
```

### Parameters vs Arguments
- **Parameters**: Variables in function definition
- **Arguments**: Actual values passed to function

```javascript
function add(a, b) {      // a, b are PARAMETERS
    return a + b;
}

add(5, 10);              // 5, 10 are ARGUMENTS
```

### Rest Parameters (...args)
- Collect **multiple arguments** into an array
- Always comes **last** in parameter list
- Syntax: `function(...rest)`

```javascript
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

sum(1, 2, 3);        // 6
sum(10, 20, 30, 40); // 100
```

### Edge Cases
```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5));        // NaN  (5 + undefined)
console.log(add(5, 10, 20)); // 15  (the 20 is ignored)
```

---

## 4. Return Values

- **return statement** sends a value back from the function
- Function stops executing after return
- If no return, function returns `undefined`

```javascript
function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result);   // 20
```

---

## 5. Functions as First-Class Citizens

Functions in JavaScript can be:
1. **Stored in variables**
2. **Passed as arguments** to other functions
3. **Returned from other functions**

### Example:
```javascript
// 1. Store in a variable
const sayHi = function() { 
    console.log("Hi"); 
};

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
```

---

## 6. Higher-Order Functions

- Functions that **take functions as arguments** OR **return functions**
- Enable powerful programming patterns

```javascript
// Function that takes a function as argument
function processNumbers(numbers, operation) {
    for (let num of numbers) {
        operation(num);
    }
}

processNumbers([1, 2, 3], (x) => console.log(x * 2));
// 2, 4, 6

// Function that returns a function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5));  // 10
```

---

## 7. Callback Functions

- Function **passed as an argument** to another function
- Gets **executed inside** that other function

```javascript
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
```

### Real-World Example:
```javascript
function fetchData(url, onSuccess, onError) {
    // Simulated fetch
    if (url) {
        onSuccess("Data loaded");
    } else {
        onError("URL required");
    }
}

fetchData("api.com", 
    (data) => console.log(data), 
    (error) => console.log(error)
);
```

---

## 8. IIFE — Immediately Invoked Function Expression

- Function that **runs immediately** after being defined
- Creates its own scope
- Syntax: `(function() { ... })()`

```javascript
(function() {
    console.log("I run immediately!");
})();
// Output: I run immediately!

// With parameters
(function(name) {
    console.log("Hello, " + name);
})("Aman");
// Output: Hello, Aman
```

### Use Cases:
- Avoid polluting global scope
- Initialize code that runs once
- Create private variables

```javascript
(function() {
    let privateVar = "secret";
    console.log(privateVar);  // secret
})();

console.log(typeof privateVar);  // undefined (not accessible)
```

---

## 9. Pure vs Impure Functions

### Pure Functions
- **Same input = Same output** always
- No **side effects** (doesn't modify external data)
- Predictable and testable

```javascript
function add(a, b) {
    return a + b;
}
// Pure: add(2, 3) is always 5. Nothing outside changes.
console.log(add(2, 3));  // 5
console.log(add(2, 3));  // 5 (consistent)
```

### Impure Functions
- Output depends on **external state**
- Has **side effects** (modifies global variables, DOM, etc.)
- Unpredictable

```javascript
let total = 0;

function addToTotal(n) {
    total += n;       // side effect — changes outer variable
    return total;
}

console.log(addToTotal(5));   // 5
console.log(addToTotal(5));   // 10 (different result!)
```

### Best Practice:
Write **pure functions** when possible for code that's easier to test and debug.

---

## 10. Recursion (Basics)

- Function that **calls itself**
- Must have a **base case** (stopping condition) to avoid infinite loop
- Useful for problems that have **self-similar structure**

### Basic Example:
```javascript
function countDown(n) {
    if (n === 0) {              // base case
        console.log("Done!");
        return;
    }
    console.log(n);
    countDown(n - 1);           // recursive call
}

countDown(3);
// 3, 2, 1, Done!
```

### Factorial Example:
```javascript
function factorial(n) {
    if (n === 0 || n === 1) {   // base case
        return 1;
    }
    return n * factorial(n - 1); // recursive call
}

console.log(factorial(5));  // 120  (5 * 4 * 3 * 2 * 1)
```

### Fibonacci Example:
```javascript
function fibonacci(n) {
    if (n <= 1) {           // base case
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);  // recursive call
}

console.log(fibonacci(6));  // 8
```

### Key Points:
✅ Always have a **base case** to stop recursion  
✅ Each recursive call should get **closer to base case**  
✅ Useful for **tree structures**, **factorial**, **fibonacci**

---

## Quick Function Types Comparison

| Type | Syntax | Hoisted | Use Case |
|------|--------|---------|----------|
| **Function Declaration** | `function name() {}` | Yes | General use |
| **Function Expression** | `const fn = function() {}` | No | Callbacks, stored values |
| **Anonymous Function** | `function() {}` | No | Callbacks |
| **Arrow Function** | `(args) => {}` | No | Modern, concise code |

---

## Key Takeaways

✅ Functions are **reusable blocks** of code  
✅ **Function Declaration** vs **Expression** have different hoisting behavior  
✅ **Arrow functions** are modern and preferred  
✅ **Default parameters**, **rest parameters** improve flexibility  
✅ Functions can be **stored**, **passed**, **returned** (first-class citizens)  
✅ **Callbacks** allow functions to work together  
✅ **IIFE** creates isolated scopes  
✅ **Pure functions** are predictable and testable  
✅ **Recursion** solves self-similar problems  
✅ Always **return a value** from functions for better reusability
