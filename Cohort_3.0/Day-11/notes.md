# Day 11: JavaScript Fundamentals - Phase 1 - Deep Notes

---

## 1. JavaScript (JS) History & Overview

### What is JavaScript?
- **Definition**: A lightweight, interpreted, dynamically-typed, object-oriented programming language
- **Primary Purpose**: Originally designed to run in web browsers to provide interactivity
- **Modern Scope**: Now runs everywhere - browsers, servers (Node.js), mobile apps, desktops
- **Type**: Client-side scripting language (though can run server-side too)

### Brief History Timeline

#### **1995 - Birth of JavaScript**
- Created by **Brendan Eich** in just 10 days
- Original name: **LiveScript** (created using Mocha language)
- Renamed to **JavaScript** as a marketing move (no relation to Java)
- First implemented in Netscape Navigator browser

#### **First Browser**
- **Netscape Navigator** - First browser to support JavaScript
- Used for simple DOM manipulation and form validation

#### **First Website Using JavaScript**
- **Info.cen.com** - Example of early JavaScript adoption
- Used for basic interactivity and user feedback

#### **1996 - Microsoft's Version**
- Microsoft created **JScript** for Internet Explorer
- Their own implementation of JavaScript
- This created compatibility issues across browsers

#### **2008 - V8 Engine Revolution**
- Google created **V8 Engine** for Chrome
- High-performance JavaScript engine that compiles to machine code
- Changed JavaScript from slow to fast, enabling Node.js

#### **Modern Era (2009 - Present)**
- **2009**: Node.js created by Ryan Dahl - JavaScript on servers
- **2015**: ES6 (ECMAScript 2015) - Major language improvements
- **Present**: Yearly ECMAScript updates with new features
- JavaScript dominates web development

---

## 2. Variables - Deep Dive

### Fundamental Concepts

#### **What are Variables?**
- Named containers for storing data values
- Think of them as labeled boxes holding information
- Allow you to reuse values throughout your code
- Essential for dynamic programming

#### **Declaration vs Initialization vs Reinitialization**

**1. Declaration**
```javascript
var name;        // Declaring without value
let age;         // Declaring without value
const city;      // ERROR! const MUST be initialized
```
- Tells JavaScript that the variable exists
- Variable gets default value `undefined` (for var)
- For let/const, enters Temporal Dead Zone

**2. Initialization**
```javascript
var name = "Ali";           // Declared and initialized in one line
let age = 25;               // Declared and initialized
const city = "Karachi";     // Declared and initialized (required for const)
```
- Assigning a value to a variable for the first time
- Must do this for `const` at declaration
- Best practice: always initialize when declaring

**3. Reinitialization**
```javascript
var name = "Ali";
name = "Ahmed";             // Reinitialization (allowed with var/let)

let age = 25;
age = 30;                   // Reinitialization (allowed with let)

const city = "Karachi";
city = "Lahore";            // ERROR! Cannot reinitialization const
```
- Assigning a new value to an already-declared variable
- Not allowed with `const` (immutable binding)
- Allowed with `var` and `let`

### Variable Declaration Methods: var, let, const

#### **1. VAR - Old Approach (Avoid in Modern Code)**

```javascript
var count = 0;
var message = "Hello";
```

**Characteristics:**
- **Scope**: Function scope (NOT block scope)
- **Hoisting**: Hoisted with value `undefined`
- **Redeclaration**: ✅ Allowed - can declare same variable twice
- **Reassignment**: ✅ Allowed
- **Temporal Dead Zone**: ❌ No - can use before declaration

**Examples:**

```javascript
// Hoisting with var
console.log(x); // Output: undefined (not ReferenceError!)
var x = 5;

// Function scope demonstration
function example() {
    var localVar = "inside function";
    console.log(localVar); // Works
}
console.log(localVar); // ReferenceError - not in global scope

// Block scope doesn't work with var
if (true) {
    var blockVar = "I'm in a block";
}
console.log(blockVar); // Output: "I'm in a block" (leaked out!)

// Redeclaration allowed
var user = "Ali";
var user = "Ahmed"; // No error - overwrites
```

**Why Avoid VAR?**
- ❌ Function scope confuses developers used to other languages
- ❌ Can accidentally overwrite variables
- ❌ Hoisting behavior can hide bugs
- ❌ Pollutes global scope

---

#### **2. LET - Modern Choice for Changing Values**

```javascript
let count = 0;
let message = "Hello";
```

**Characteristics:**
- **Scope**: Block scope (confined to `{ }` blocks)
- **Hoisting**: Hoisted but NOT initialized (Temporal Dead Zone)
- **Redeclaration**: ❌ NOT allowed
- **Reassignment**: ✅ Allowed
- **Temporal Dead Zone**: ✅ Yes - cannot use before declaration

**Examples:**

```javascript
// Block scope demonstration
if (true) {
    let blockScoped = "inside if block";
    console.log(blockScoped); // Works
}
// console.log(blockScoped); // ReferenceError - outside scope

// Loop scope - each iteration gets its own 'i'
for (let i = 0; i < 3; i++) {
    console.log(i);
}
// console.log(i); // ReferenceError

// Redeclaration NOT allowed
let user = "Ali";
// let user = "Ahmed"; // SyntaxError: Identifier 'user' has already been declared

// Reassignment IS allowed
let count = 0;
count = 5; // ✅ Allowed
console.log(count); // 5

// Temporal Dead Zone
// console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;
console.log(age); // 25

// Different scopes = different variables
let x = "outer";
{
    let x = "inner";
    console.log(x); // "inner"
}
console.log(x); // "outer"
```

**When to Use LET:**
- ✅ Loop counters
- ✅ Variables that will change
- ✅ Local scope requirements

---

#### **3. CONST - Modern Choice for Constant Values**

```javascript
const PI = 3.14159;
const URL = "https://example.com";
```

**Characteristics:**
- **Scope**: Block scope
- **Hoisting**: Hoisted but NOT initialized (Temporal Dead Zone)
- **Redeclaration**: ❌ NOT allowed
- **Reassignment**: ❌ NOT allowed (binding is immutable)
- **Temporal Dead Zone**: ✅ Yes
- **Can modify contents**: ✅ Yes (if it's an object/array)

**Examples:**

```javascript
// Basic const
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable

// Block scope (same as let)
if (true) {
    const message = "inside if";
    console.log(message); // Works
}
// console.log(message); // ReferenceError

// Temporal Dead Zone
// console.log(MAX); // ReferenceError
const MAX = 100;

// Modifying object CONTENTS is allowed
const user = { name: "Ali", age: 25 };
user.name = "Ahmed";      // ✅ Allowed - modifying properties
user.age = 30;            // ✅ Allowed
console.log(user); // { name: "Ahmed", age: 30 }

// But reassigning the variable is NOT allowed
// user = { name: "Sara" }; // TypeError

// Array contents can be modified
const colors = ["red", "blue"];
colors.push("green");     // ✅ Allowed - modifying contents
colors[0] = "yellow";     // ✅ Allowed
console.log(colors); // ["yellow", "blue", "green"]

// But reassigning the array is NOT allowed
// colors = ["purple"]; // TypeError

// Difference between const and const object
const x = 5;
const y = { value: 5 };

// x = 10;           // Error - can't reassign primitive
// y = { value: 10 }; // Error - can't reassign object reference

y.value = 10; // OK - can modify object's properties
```

**When to Use CONST:**
- ✅ Mathematical constants (PI, gravity, etc.)
- ✅ Configuration values
- ✅ Values that shouldn't change
- ✅ Best practice: use by default

---

### Comparison Table: var vs let vs const

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Scope** | Function | Block | Block |
| **Hoisting** | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| **Redeclaration** | ✅ Yes | ❌ No | ❌ No |
| **Reassignment** | ✅ Yes | ✅ Yes | ❌ No |
| **Temporal Dead Zone** | ❌ No | ✅ Yes | ✅ Yes |
| **Can modify contents** | N/A | N/A | ✅ Yes (objects/arrays) |
| **Use in Modern JS** | ❌ Avoid | ✅ When needed | ✅ Default choice |

---

### Scope Explanation

**Scope** = The region where a variable is accessible

#### **Global Scope**
```javascript
const globalConstant = "I'm global";
let globalVariable = "Also global";

function anyFunction() {
    console.log(globalConstant); // ✅ Accessible
    console.log(globalVariable); // ✅ Accessible
}

anyFunction();
console.log(globalConstant); // ✅ Accessible outside
```

#### **Function Scope (only var)**
```javascript
function myFunction() {
    var functionScoped = "Only inside this function";
    let blockVar = "Block scoped";
    
    console.log(functionScoped); // ✅ Works
    console.log(blockVar);       // ✅ Works
}

// console.log(functionScoped); // ❌ ReferenceError
// console.log(blockVar);       // ❌ ReferenceError
```

#### **Block Scope (let, const)**
```javascript
// Example 1: if block
if (true) {
    let blockScoped = "Inside if block";
    const alsoBlock = "Also inside if block";
    
    console.log(blockScoped); // ✅ Works
    console.log(alsoBlock);   // ✅ Works
}

// console.log(blockScoped); // ❌ ReferenceError
// console.log(alsoBlock);   // ❌ ReferenceError

// Example 2: loop block
for (let i = 0; i < 5; i++) {
    console.log(i); // ✅ Works (i scoped to loop)
}
// console.log(i); // ❌ ReferenceError

// Example 3: nested blocks
{
    let outer = "outer";
    {
        let inner = "inner";
        console.log(outer); // ✅ Can access outer
        console.log(inner); // ✅ Can access inner
    }
    // console.log(inner); // ❌ Can't access inner
    console.log(outer);     // ✅ Can access outer
}
```

---

### Hoisting Explained

**Hoisting** = JavaScript moves declarations to the top of their scope before execution

#### **VAR Hoisting**
```javascript
// What you write:
console.log(x); // What does this print?
var x = 5;
console.log(x);

// How JavaScript interprets it:
var x;              // Declaration hoisted to top
console.log(x);     // undefined (declaration exists, but no value yet)
x = 5;              // Assignment stays in place
console.log(x);     // 5
```

**Key Point:** The **declaration** is hoisted, but the **assignment** stays in place.

#### **LET/CONST Hoisting**
```javascript
// What you write:
console.log(y); // Error!
let y = 5;

// What happens:
// let y;           // Hoisted to top, enters Temporal Dead Zone
// console.log(y);  // ReferenceError: Cannot access 'y' before initialization
// y = 5;           // Assignment here, TDZ ends
```

**Key Point:** let/const are hoisted but not initialized - causes Temporal Dead Zone.

#### **Function Hoisting**
```javascript
// Function declarations are fully hoisted with body
sayHi(); // "Hello!" - works fine

function sayHi() {
    console.log("Hello!");
}

// Function expressions are NOT hoisted
// greet(); // TypeError: greet is not a function

const greet = function() {
    console.log("Hi!");
};
```

---

### Temporal Dead Zone (TDZ)

**TDZ** = The zone between start of scope and where variable is declared

```javascript
function example() {
    // ┌─── TEMPORAL DEAD ZONE STARTS ───┐
    // │ x exists in memory but is uninitialized
    // │ Accessing x here causes ReferenceError
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    // │
    // └─── TEMPORAL DEAD ZONE ENDS ─────┘
    
    let x = 5;  // Now x is initialized, TDZ is over
    console.log(x); // 5 ✅
}
```

**Why TDZ Exists:**
- Prevents bugs from var hoisting
- Forces declaration before use
- Makes code safer and more predictable

**Examples:**
```javascript
// TDZ with let
if (true) {
    // x is in TDZ here
    // console.log(x); // ReferenceError
    let x = 5;
    console.log(x); // 5
}

// TDZ with const
{
    // y is in TDZ here
    // console.log(y); // ReferenceError
    const y = 10;
    console.log(y); // 10
}

// TDZ with function parameter
function test(x = y, y = 5) {
    // Error: y used in TDZ
}
// test(); // ReferenceError: Cannot access 'y' before initialization
```

---

### Best Practices for Variable Declaration

#### **1. Use CONST by Default**
```javascript
✅ const userAge = 25;
✅ const userName = "Ali";
✅ const maxAttempts = 3;

❌ let userAge = 25; // Only if you know it will change
❌ var userName = "Ali"; // Never in modern code
```

**Why?**
- Prevents accidental modification
- Shows intent: this shouldn't change
- Better performance optimization
- Safer code

#### **2. Use LET When Value Must Change**
```javascript
✅ let counter = 0;
   counter = counter + 1;

✅ for (let i = 0; i < 10; i++) { }

❌ let PI = 3.14; // Should be const
```

#### **3. Never Use VAR in Modern Code**
```javascript
❌ var x = 5;        // Avoid!
❌ var name = "Ali"; // Avoid!

✅ const x = 5;
✅ let name = "Ali";
```

#### **4. Use Meaningful, Descriptive Names**
```javascript
✅ const userData = { name: "Ali", age: 25 };
✅ let loginAttempts = 0;
✅ const MAX_PASSWORD_LENGTH = 20;

❌ const x = { name: "Ali", age: 25 };
❌ let a = 0;
❌ const m = 20;
```

**Naming Conventions:**
- camelCase for variables/functions: `userName`, `getUserData`
- UPPER_SNAKE_CASE for constants: `MAX_RETRIES`, `API_KEY`
- Descriptive: `isLoggedIn` not `flag`

#### **5. One Declaration Per Line**
```javascript
✅ const firstName = "Ali";
   const lastName = "Khan";
   const age = 25;

❌ const firstName = "Ali", lastName = "Khan", age = 25;
```

---

## 3. Operators in JavaScript

### A. Arithmetic Operators

Used for mathematical calculations.

| Operator | Name | Example | Result | Notes |
|----------|------|---------|--------|-------|
| `+` | Addition | `10 + 5` | `15` | Also used for string concatenation |
| `-` | Subtraction | `10 - 5` | `5` | |
| `*` | Multiplication | `10 * 5` | `50` | |
| `/` | Division | `10 / 5` | `2` | Returns float: `10 / 3` = `3.333...` |
| `%` | Modulus | `10 % 3` | `1` | Returns remainder |
| `**` | Exponentiation | `2 ** 3` | `8` | Power/exponent: 2^3 |
| `++` | Increment | `x++` | Adds 1 | Pre vs post matters |
| `--` | Decrement | `x--` | Subtracts 1 | Pre vs post matters |

#### **Basic Arithmetic**
```javascript
const a = 20;
const b = 6;

console.log(a + b);  // 26 (addition)
console.log(a - b);  // 14 (subtraction)
console.log(a * b);  // 120 (multiplication)
console.log(a / b);  // 3.333... (division)
console.log(a % b);  // 2 (modulus: 20 ÷ 6 = 3 remainder 2)
console.log(a ** 2); // 400 (20 squared)
console.log(2 ** 3); // 8 (2 cubed)
```

#### **Increment (++)**
```javascript
let counter = 5;

// Post-increment (counter++)
// Returns current value, THEN increments
console.log(counter++); // Output: 5
console.log(counter);   // Output: 6

// Pre-increment (++counter)
// Increments FIRST, THEN returns value
console.log(++counter); // Output: 7
console.log(counter);   // Output: 7

// Practical difference in assignments
let x = 10;
let y = x++;  // y = 10, x = 11 (post-increment)

let a = 10;
let b = ++a;  // a = 11, b = 11 (pre-increment)
```

#### **Decrement (--)**
```javascript
let num = 10;

// Post-decrement
console.log(num--); // Output: 10
console.log(num);   // Output: 9

// Pre-decrement
console.log(--num); // Output: 8
console.log(num);   // Output: 8
```

#### **Modulus (%) - Common Use Cases**
```javascript
// Check if number is even or odd
const num = 10;
if (num % 2 === 0) {
    console.log("Even");  // Output: Even
}

// Get remainder
console.log(17 % 5); // 2 (17 = 3*5 + 2)
console.log(20 % 3); // 2 (20 = 6*3 + 2)

// Cycling through values
let day = 7;
let dayOfWeek = day % 7; // 0 (cycles 0-6)
```

---

### B. Comparison Operators

Compare two values and return `true` or `false`.

| Operator | Name | Example | Returns | Type |
|----------|------|---------|---------|------|
| `==` | Loose Equal | `5 == "5"` | `true` | Loose (type coercion) |
| `!=` | Loose Not Equal | `5 != "5"` | `false` | Loose (type coercion) |
| `===` | Strict Equal | `5 === "5"` | `false` | Strict (no coercion) |
| `!==` | Strict Not Equal | `5 !== "5"` | `true` | Strict (no coercion) |
| `>` | Greater Than | `10 > 5` | `true` | |
| `<` | Less Than | `10 < 5` | `false` | |
| `>=` | Greater Than or Equal | `10 >= 10` | `true` | |
| `<=` | Less Than or Equal | `10 <= 5` | `false` | |

#### **Understanding == vs ===**

**== (Loose Equality)**
```javascript
// == compares VALUES after type coercion

5 == "5"        // true (string "5" coerced to number 5)
0 == false      // true (false coerced to 0)
1 == true       // true (true coerced to 1)
null == undefined // true (special case)
"" == false     // true (empty string coerced to false)
"0" == false    // true (both coerce to falsy)

// String concatenation with +
5 + "5"         // "55" (number coerced to string)
5 - "5"         // 0 (string coerced to number)
```

**=== (Strict Equality)**
```javascript
// === compares VALUE AND TYPE (no coercion)

5 === "5"        // false (different types: number vs string)
0 === false      // false (different types: number vs boolean)
1 === true       // false (different types: number vs boolean)
null === undefined // false (different types)
"" === false     // false (different types)
"0" === false    // false (different types)

// Same types = strict equality works like loose
5 === 5          // true
"hello" === "hello" // true
```

**BEST PRACTICE:**
```javascript
✅ Always use === and !== in modern code
❌ Avoid == and != (can cause unexpected behavior)
```

#### **Comparison Operators in Conditions**
```javascript
const x = 10;
const y = 20;
const z = "10";

// Greater than / Less than
console.log(x > y);    // false (10 > 20)
console.log(x < y);    // true (10 < 20)

// Greater than or equal / Less than or equal
console.log(x >= 10);  // true
console.log(x <= 20);  // true

// Equality
console.log(x == z);   // true (loose - coercion)
console.log(x === z);  // false (strict - types different)
console.log(x != z);   // false (loose - coercion)
console.log(x !== z);  // true (strict - types different)

// In conditionals
if (x === 10) {
    console.log("x is 10");  // Runs
}

if (x >= 5 && x <= 15) {
    console.log("x is between 5 and 15"); // Runs
}
```

---

### C. Logical Operators

Combine or negate boolean values to create complex conditions.

| Operator | Name | Syntax | Description |
|----------|------|--------|-------------|
| `&&` | AND | `a && b` | True if BOTH are true |
| `\|\|` | OR | `a \|\| b` | True if AT LEAST ONE is true |
| `!` | NOT | `!a` | Reverses the boolean value |

#### **AND Operator (&&)**

Truth Table:
```
true && true    → true    ✅
true && false   → false   ❌
false && true   → false   ❌
false && false  → false   ❌

In short: Both must be true
```

Examples:
```javascript
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");  // Runs (true && true = true)
}

const income = 30000;
if (age >= 18 && hasLicense && income > 20000) {
    console.log("Can drive with good income");  // Runs
}

// Short-circuit evaluation - stops at first false
let result = false && (console.log("This won't print"), true);
// console.log doesn't execute because && stops at false
```

#### **OR Operator (||)**

Truth Table:
```
true || true    → true    ✅
true || false   → true    ✅
false || true   → true    ✅
false || false  → false   ❌

In short: At least one must be true
```

Examples:
```javascript
const age = 12;
const hasPermission = false;

if (age >= 18 || hasPermission) {
    console.log("Can attend");  // Doesn't run (false || false = false)
}

const isWeekend = true;
const hasFreetime = false;

if (isWeekend || hasFreetime) {
    console.log("Can go out");  // Runs (true || false = true)
}

// Short-circuit evaluation - stops at first true
let result = true || (console.log("This won't print"), false);
// console.log doesn't execute because || stops at true
```

#### **NOT Operator (!)**

```
!true   → false
!false  → true

Reverses the boolean value
```

Examples:
```javascript
const isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in");  // Runs (!false = true)
}

const hasError = true;
if (!hasError) {
    console.log("No errors");  // Doesn't run (!true = false)
}

// Toggling values
let isVisible = true;
isVisible = !isVisible;  // Now false
isVisible = !isVisible;  // Now true again

// Double negation (not common, avoid)
console.log(!!1);        // true (converts to boolean)
console.log(!!"hello");  // true
console.log(!!"");       // false
```

#### **Complex Logical Expressions**

```javascript
const user = {
    age: 25,
    hasLicense: true,
    income: 50000,
    isBanned: false
};

// Complex condition for loan eligibility
if ((user.age >= 21 && user.income > 30000) || user.hasCollateral) {
    console.log("Eligible for loan");
}

// Access control example
if (user.age >= 18 && user.hasLicense && !user.isBanned) {
    console.log("Can drive");
}

// Multiple OR conditions
if (user.role === "admin" || user.role === "moderator" || user.isSuperUser) {
    console.log("Has elevated privileges");
}

// Combining AND/OR
if ((user.age < 18 && user.hasParentPermission) || 
    (user.age >= 18 && user.hasConsent)) {
    console.log("Can proceed");
}
```

#### **Short-Circuit Evaluation**

```javascript
// AND short-circuit
let x = 5;
let result = false && (x = 10);
console.log(x); // 5 (x = 10 never executed)

// OR short-circuit
let y = 5;
let result = true || (y = 10);
console.log(y); // 5 (y = 10 never executed)

// Practical use: Default values
const name = userInput || "Guest";  // If userInput is falsy, use "Guest"

// Practical use: Conditional execution
isLoggedIn && displayUserMenu();    // Only run if isLoggedIn is true
```

---

## 4. Operator Precedence

Order in which operators are evaluated:

```javascript
// Without precedence awareness, this is confusing
const result = 2 + 3 * 4;  // 14, not 20
// Because * has higher precedence than +

// Use parentheses for clarity
const result = 2 + (3 * 4);  // 14 (same result, clearer intent)
const result = (2 + 3) * 4;  // 20 (different result)

// Logical operator precedence: NOT > AND > OR
const a = true;
const b = false;
const c = true;

const result = !a || b && c;
// Evaluated as: (!a) || (b && c)
// = false || (false && true)
// = false || false
// = false
```

---

## 5. Type Coercion

JavaScript automatically converts types in some situations:

```javascript
// String concatenation forces string conversion
console.log("Price: $" + 100);      // "Price: $100"
console.log("5" + 5);               // "55" (number becomes string)
console.log("5" - 2);               // 3 (string becomes number)
console.log("10" * "2");            // 20 (both strings become numbers)

// Boolean conversion
console.log(Boolean(0));            // false
console.log(Boolean(1));            // true
console.log(Boolean(""));           // false
console.log(Boolean("hello"));      // true
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false

// Falsy values: 0, "", null, undefined, NaN, false
// Truthy values: everything else
```

---

## 6. Common Mistakes & How to Avoid Them

### Mistake 1: Using VAR
```javascript
❌ var x = 5;
   var user = "Ali";

✅ const x = 5;
   const user = "Ali";
```

### Mistake 2: Using == Instead of ===
```javascript
❌ if (input == "5") { }  // Could be "5" (string) or 5 (number)

✅ if (input === "5") { } // Must be exactly "5" (string)
```

### Mistake 3: Reassigning CONST
```javascript
❌ const PI = 3.14;
   PI = 3.14159;  // Error!

✅ const PI = 3.14159;
   // Don't change it
```

### Mistake 4: Using Variables Before Declaration
```javascript
❌ console.log(x);
   let x = 5;  // ReferenceError

✅ let x = 5;
   console.log(x);  // 5
```

### Mistake 5: Confusing Post and Pre Increment
```javascript
❌ let a = 5;
   console.log(a++);  // 5 (not 6)
   console.log(a);    // 6

✅ // Understand the difference and use consciously
   let b = 5;
   console.log(++b);  // 6
   console.log(b);    // 6
```

### Mistake 6: Not Understanding Scope
```javascript
❌ if (true) {
       let x = 5;
   }
   console.log(x);  // ReferenceError - x is block scoped

✅ let x;
   if (true) {
       x = 5;
   }
   console.log(x);  // 5
```

---

## 7. Key Takeaways

### Variables ✅
- Use `const` by default
- Use `let` when value changes
- Avoid `var` in modern code
- Understand scope (block vs function)
- Be aware of hoisting and Temporal Dead Zone

### Arithmetic Operators ✅
- `+` `-` `*` `/` `%` `**` for math
- `++` and `--` for increment/decrement
- Understand pre vs post increment difference

### Comparison Operators ✅
- Always use `===` not `==`
- Know comparison returns boolean (true/false)
- Useful in conditionals

### Logical Operators ✅
- `&&` (AND): both must be true
- `||` (OR): at least one must be true
- `!` (NOT): reverses boolean
- Use for complex conditions
- Understand short-circuit evaluation

### Best Practices ✅
- Write clear, readable code
- Use meaningful variable names
- Prefer `const`, then `let`, never `var`
- Use `===` for strict equality
- Combine operators wisely
- Use parentheses for clarity

---

## 8. Practice Examples

```javascript
// Example 1: User authentication
const isLoggedIn = true;
const hasPermission = false;
const isAdmin = false;

if (isLoggedIn && (hasPermission || isAdmin)) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
// Output: "Access denied"

// Example 2: Grade calculation
const score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
}

console.log(grade);  // "B"

// Example 3: Loop with increment
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Example 4: Checking conditions
const age = 25;
const drivingAge = 18;
const hasCar = true;

if (age >= drivingAge && hasCar) {
    console.log("Ready to drive!");
} else {
    console.log("Not ready");
}
// Output: "Ready to drive!"
```

---

This concludes the comprehensive notes for Day 11!
