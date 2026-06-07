# Day 18: How JavaScript Works Under the Hood - Deep Dive Notes

---

## 1. How JavaScript Works - Fundamental Concepts

### JavaScript is Single-Threaded
- **Meaning**: JavaScript executes one task at a time, line by line
- **No Parallelism**: Can't run multiple things simultaneously
- **Synchronous by Default**: Code runs in order

```javascript
console.log("1");   // Runs first
console.log("2");   // Runs second
console.log("3");   // Runs third
// Output:
// 1
// 2
// 3
```

### JavaScript is Synchronous
- **Synchronous**: Operations complete in order before moving to next
- **Wait for Each**: Must finish one task before starting next
- **Blocking**: Long operations block subsequent code

```javascript
// Synchronous example
console.log("Start");

function slowTask() {
    // Imagine this takes 5 seconds
    for (let i = 0; i < 1000000000; i++) {}
    console.log("Task completed");
}

slowTask();  // Blocks until complete
console.log("End");

// Output:
// Start
// Task completed  (after 5 seconds)
// End
```

### JavaScript is Interpreted and JIT-Compiled
- **Interpretation**: JavaScript engine reads code line by line
- **JIT Compilation**: Hot code (frequently used) gets compiled to machine code
- **Optimization**: Modern engines optimize frequently-called functions

```javascript
// This function might be JIT-compiled if called many times
function add(a, b) {
    return a + b;
}

// First call - interpreted
add(2, 3);

// Called many times - gets JIT compiled for faster execution
for (let i = 0; i < 1000000; i++) {
    add(i, i + 1);
}
```

---

## 2. JavaScript Engines

### What is a JavaScript Engine?
- Software that reads and executes JavaScript code
- Different browsers/environments have different engines
- Converts JavaScript to machine-executable code

### Popular JavaScript Engines
| Engine | Browser/Environment | Language |
|--------|------------------|----------|
| V8 | Chrome, Node.js | C++ |
| SpiderMonkey | Firefox | C++ |
| JavaScriptCore | Safari | C++ |
| Chakra | Edge (old) | C++ |

### How JavaScript Engines Work
```
JavaScript Code
       ↓
   [Parsing] → Reads and validates syntax
       ↓
   [Compilation] → Converts to optimized code
       ↓
   [Execution] → Runs the code
```

### Engine Workflow Example
```javascript
let x = 5;              // Parser reads this
let y = 10;             // Validates syntax
let z = x + y;          // Compiles to optimized code
console.log(z);         // Executes and outputs
```

---

## 3. Execution Context (EC)

### What is Execution Context?
- **Definition**: Environment where JavaScript code executes
- **Contains**: Variables, functions, values, references
- **Scope**: Determines what variables are accessible

### Three Types of Execution Context

#### 1. Global Execution Context (GEC)
- Created when JavaScript program starts
- One per program
- Global scope accessible everywhere

```javascript
// Global Execution Context
var globalVar = "I'm global";

function myFunction() {
    console.log(globalVar);  // Accessible from global context
}

myFunction();  // "I'm global"
```

#### 2. Function Execution Context (FEC)
- Created when a function is called
- One created per function call
- Function-specific scope

```javascript
var name = "Global";

function greet() {
    // New Execution Context created here
    var name = "Local";
    console.log(name);  // "Local" (function's own context)
}

greet();
console.log(name);  // "Global" (global context)
```

#### 3. Eval Execution Context (rarely used)
- Created when `eval()` is executed
- Generally avoided in modern code

```javascript
var x = 5;
eval("console.log(x)");  // 5
// Creates its own execution context (avoid in practice)
```

### The Two Phases of Every Execution Context

**Phase 1: Creation Phase (Memory Allocation)**
```javascript
// Phase 1: Memory is allocated
// - Variables get "undefined" (for var)
// - Functions get stored in memory
// - "this" is set

var age;               // undefined (hoisted)
var name;              // undefined (hoisted)
function sayHi() { }   // Fully hoisted with body
```

**Phase 2: Execution Phase (Code Runs)**
```javascript
// Phase 2: Code actually runs
age = 25;              // Now age becomes 25
name = "Ali";          // Now name becomes "Ali"
sayHi();               // Function executes
```

### Example: Complete Execution Flow
```javascript
// Creation Phase: Memory allocation
// a → undefined
// b → undefined
// add → function stored in memory

var a = 5;             // Execution Phase: Assign 5
var b = 10;            // Execution Phase: Assign 10

function add() {
    console.log(a + b);
}

add();                 // Call function → "15"

// Timeline:
// 1. Creation: Variables declared as undefined, functions stored
// 2. Execution: Values assigned, functions called
```

---

## 4. The Call Stack

### What is Call Stack?
- **Data Structure**: LIFO (Last In First Out) stack
- **Purpose**: Tracks which function is currently executing
- **Operations**: Functions are pushed when called, popped when return
- **Visualization**: Shows execution order of functions

### How Call Stack Works

```javascript
function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
    third();
}

function third() {
    console.log("Third");
}

first();
```

**Call Stack Timeline:**
```
Step 1: first() called
│
├─ Stack: [main, first]
└─ Executes: "First"

Step 2: Inside first(), second() called
│
├─ Stack: [main, first, second]
└─ Executes: "Second"

Step 3: Inside second(), third() called
│
├─ Stack: [main, first, second, third]
└─ Executes: "Third"

Step 4: third() returns
│
├─ Stack: [main, first, second]
└─ Goes back to second()

Step 5: second() returns
│
├─ Stack: [main, first]
└─ Goes back to first()

Step 6: first() returns
│
├─ Stack: [main]
└─ Program ends
```

### Real Example with Stack Visualization
```javascript
var a = 1;

function add(a, b) {
    var sum = a + b;
    return sum;
}

var result = add(5, 3);
console.log(result);

// Call Stack visualization:
// Stack grows ↑
//
// Step 1: Global code starts
// ┌──────────┐
// │ main     │ ← Call Stack
// └──────────┘
//
// Step 2: add(5, 3) called
// ┌──────────┐
// │ add      │
// │ main     │ ← Call Stack
// └──────────┘
//
// Step 3: add returns, back to global
// ┌──────────┐
// │ main     │ ← Call Stack
// └──────────┘
```

### Understanding Execution Order
```javascript
console.log("1");       // Runs: logs "1"

function A() {
    console.log("2");
    B();
    console.log("5");
}

function B() {
    console.log("3");
    C();
    console.log("4");
}

function C() {
    console.log("Running C");
}

A();
console.log("6");

// Output order (based on Call Stack):
// 1 → A called
// 2 → B called from A
// 3 → C called from B
// Running C
// 4 → Back to B, finishes
// 5 → Back to A, finishes
// 6 → Back to global
```

---

## 5. Stack Overflow - What Causes It?

### What is Stack Overflow?
- **Error Type**: RangeError
- **Cause**: Call Stack grows too large and exceeds limit
- **Common Cause**: Infinite recursion
- **Message**: "Maximum call stack size exceeded"

### Infinite Recursion Example (CAUSES STACK OVERFLOW)
```javascript
❌ function infiniteLoop() {
    console.log("Running");
    infiniteLoop();  // Calls itself infinitely
}

infiniteLoop();
// Error: RangeError: Maximum call stack size exceeded

// Stack visualization:
// [infiniteLoop, infiniteLoop, infiniteLoop, ...]
// Stack keeps growing until it runs out of memory!
```

### Recursion with Base Case (SAFE)
```javascript
✅ function countdown(n) {
    if (n === 0) {
        console.log("Done!");
        return;  // Base case - stops recursion
    }
    console.log(n);
    countdown(n - 1);  // Recursive call
}

countdown(5);
// Output: 5, 4, 3, 2, 1, Done!

// Stack grows and shrinks safely:
// [countdown(5)]
// [countdown(5), countdown(4)]
// [countdown(5), countdown(4), countdown(3)]
// ... then shrinks back as functions return
```

### Common Stack Overflow Scenario
```javascript
❌ function a() {
    b();
}

function b() {
    a();  // Calls a, which calls b, which calls a...
}

a();
// RangeError: Maximum call stack size exceeded

// Stack keeps growing:
// [main, a, b, a, b, a, b, a, b, ...]
```

---

## 6. Memory Heap

### What is Memory Heap?
- **Data Structure**: Unordered collection of memory
- **Purpose**: Stores objects and complex data
- **Allocation**: Memory allocated as needed
- **Cleanup**: Garbage collection removes unused data

### Stack vs Heap

| Aspect | Stack | Heap |
|--------|-------|------|
| **Type** | Ordered LIFO | Unordered collection |
| **Stores** | Primitives, references | Objects, arrays |
| **Size** | Limited, fixed | Large, dynamic |
| **Speed** | Fast | Slower |
| **Cleanup** | Automatic (scope) | Garbage collection |

### Memory Allocation Example
```javascript
// Stack: Stores primitive value
let age = 25;

// Stack: Stores reference
// Heap: Stores the actual object
let user = {
    name: "Ali",
    age: 25
};

// Visualization:
//
// Stack                 Heap
// ┌─────────────┐      ┌──────────────────────┐
// │ age: 25     │      │ {name: "Ali",       │
// │ user: ─────────→   │  age: 25}           │
// └─────────────┘      └──────────────────────┘
```

### Garbage Collection
```javascript
// Object created - takes memory
let obj = { data: "important" };

// Reference removed - object can be garbage collected
obj = null;

// JavaScript engine will clean up memory
// (Implementation depends on engine)
```

### Memory Leak Example
```javascript
❌ // Memory leak - object never gets cleaned
let globalRef = null;

function createUser() {
    let largeObject = new Array(1000000);
    globalRef = largeObject;  // Keeps reference
    // largeObject never cleaned even if function ends
}

// Better approach:
✅ function createUser() {
    let largeObject = new Array(1000000);
    return largeObject;
    // Auto cleaned when no longer referenced
}
```

---

## 7. Hoisting

### What is Hoisting?
- **Definition**: JavaScript moves declarations to top of scope
- **Declaration vs Assignment**: Only declaration is hoisted, not assignment
- **Applies to**: `var`, function declarations
- **Does NOT Apply to**: `let`, `const` (they have TDZ)

### Variable Hoisting with VAR
```javascript
// What you write:
console.log(x);  // What gets printed?
var x = 5;
console.log(x);

// How JavaScript interprets it:
var x;              // Declaration hoisted
console.log(x);     // undefined
x = 5;              // Assignment stays in place
console.log(x);     // 5
```

### Function Hoisting
```javascript
// Function declarations are fully hoisted

sayHi();  // ✅ Works! Function is already in memory

function sayHi() {
    console.log("Hello!");
}

// vs Function Expression (NOT hoisted)

// sayBye();  // ❌ Error! sayBye is undefined
var sayBye = function() {
    console.log("Bye!");
};
sayBye();  // ✅ Now it works
```

### Hoisting in Practice
```javascript
// Example 1: var hoisting
console.log(a);  // undefined (hoisted, not assigned)
var a = 10;
console.log(a);  // 10

// Example 2: Function hoisting
printName();  // ✅ "John" - works
function printName() {
    console.log("John");
}

// Example 3: Variable shadowing with hoisting
var name = "Global";
function test() {
    console.log(name);  // undefined (TDZ for var!)
    var name = "Local";
    console.log(name);  // "Local"
}
test();
```

---

## 8. Temporal Dead Zone (TDZ)

### What is Temporal Dead Zone?
- **Definition**: Period between start of scope and declaration
- **Applies to**: `let` and `const`
- **Behavior**: Can't access variable - causes ReferenceError
- **Reason**: Forces declaration before use (safer code)

### TDZ Visualization
```javascript
function example() {
    // ─── TEMPORAL DEAD ZONE START ───
    // console.log(x);  // ❌ ReferenceError
    // Variable x is hoisted but not initialized
    // ────── TDZ END HERE ──────
    
    let x = 5;  // Initialization - TDZ ends
    console.log(x);  // ✅ 5
}
```

### TDZ Examples

**Example 1: let variable**
```javascript
// console.log(age);  // ReferenceError: Cannot access 'age' before initialization
let age = 25;
console.log(age);  // ✅ 25
```

**Example 2: const variable**
```javascript
// console.log(PI);  // ReferenceError
const PI = 3.14159;
console.log(PI);  // ✅ 3.14159
```

**Example 3: TDZ in blocks**
```javascript
let x = "outer";
{
    // TDZ for x from { to let x = "inner"
    // console.log(x);  // ReferenceError (not using outer x)
    let x = "inner";
    console.log(x);  // ✅ "inner"
}
```

### var vs let/const hoisting

```javascript
// VAR - hoisted with undefined
console.log(a);  // undefined
var a = 5;

// LET - hoisted but not initialized (TDZ)
// console.log(b);  // ReferenceError
let b = 10;

// const - hoisted but not initialized (TDZ)
// console.log(c);  // ReferenceError
const c = 15;
```

---

## 9. Lexical Scope

### What is Lexical Scope?
- **Definition**: Variables accessible based on **where function is written**, not where called
- **"Lex"**: Related to source code structure
- **Inner functions**: Can access outer function variables
- **Immutable**: Determined at definition time

### Lexical Scope Example
```javascript
let global = "global";

function outer() {
    let outerVar = "outer";
    
    function inner() {
        let innerVar = "inner";
        
        // inner can see:
        console.log(global);     // ✅ "global" (from global scope)
        console.log(outerVar);   // ✅ "outer" (from outer function)
        console.log(innerVar);   // ✅ "inner" (own scope)
    }
    
    inner();
    
    // outer can see:
    console.log(global);     // ✅ "global"
    console.log(outerVar);   // ✅ "outer"
    // console.log(innerVar);   // ❌ ReferenceError
}

outer();

// global can see:
console.log(global);     // ✅ "global"
// console.log(outerVar);   // ❌ ReferenceError
// console.log(innerVar);   // ❌ ReferenceError
```

### Lexical Scope is About Code Location
```javascript
let name = "Global";

function printName() {
    console.log(name);  // Looks in outer scope (lexical parent)
}

function test() {
    let name = "Inside test";
    printName();  // Still prints "Global" - not "Inside test"
}

printName();  // "Global"
test();       // "Global" (because printName is written outside test)

// printName's scope chain is determined by WHERE IT'S WRITTEN
// Not WHERE IT'S CALLED
```

---

## 10. Scope Chain

### What is Scope Chain?
- **Definition**: Series of scopes JavaScript searches for variables
- **Search Order**: Inner → Outer → Global
- **Stops At**: First match found
- **Direction**: Always outward, never inward

### Scope Chain Visualization
```javascript
var a = "Global";

function first() {
    var b = "First";
    
    function second() {
        var c = "Second";
        
        function third() {
            var d = "Third";
            
            // Scope chain for third():
            // [third scope] → [second scope] → [first scope] → [global scope]
            
            console.log(d);  // ✅ "Third" (own scope)
            console.log(c);  // ✅ "Second" (second scope)
            console.log(b);  // ✅ "First" (first scope)
            console.log(a);  // ✅ "Global" (global scope)
        }
        
        third();
    }
    
    second();
}

first();
```

### Scope Chain: Variable Lookup
```javascript
let global = "global";

function outer() {
    let outer_var = "outer";
    
    function inner() {
        let inner_var = "inner";
        
        // Looking up a variable:
        console.log(inner_var);   // Found immediately in inner scope ✅
        console.log(outer_var);   // Not in inner, look in outer scope ✅
        console.log(global);      // Not in outer, look in global scope ✅
    }
    
    inner();
}

outer();
```

### Scope Chain with Shadowing
```javascript
let x = "global";

function outer() {
    let x = "outer";  // Shadows global x
    
    function inner() {
        let x = "inner";  // Shadows outer x
        
        console.log(x);  // "inner" (uses innermost x)
    }
    
    inner();
    console.log(x);  // "outer" (uses outer x)
}

outer();
console.log(x);  // "global" (uses global x)
```

---

## 11. Block Scope

### What is Block Scope?
- **Definition**: Variables confined to `{ }` block
- **Applies to**: `let` and `const`
- **Does NOT Apply to**: `var` (function scope)
- **Examples**: if, for, while, { } blocks

### Block Scope with let/const
```javascript
{
    let blockVar = "inside block";
    const blockConst = "inside block";
    console.log(blockVar);    // ✅ "inside block"
}

// console.log(blockVar);     // ❌ ReferenceError
// console.log(blockConst);   // ❌ ReferenceError
```

### Block Scope in Loops
```javascript
// let - block scope (each iteration)
for (let i = 0; i < 3; i++) {
    console.log(i);  // 0, 1, 2
}
// console.log(i);  // ❌ ReferenceError

// var - function scope (bleeds out)
for (var j = 0; j < 3; j++) {
    console.log(j);  // 0, 1, 2
}
console.log(j);  // ✅ 3 (var leaked out!)
```

### Block Scope in if Statement
```javascript
if (true) {
    let ifVar = "inside if";
    var varVar = "inside if";
}

// console.log(ifVar);   // ❌ ReferenceError
console.log(varVar);     // ✅ "inside if"
```

---

## 12. Closures

### What is a Closure?
- **Definition**: Function that "remembers" variables from outer scope
- **Persistence**: Inner function keeps reference to outer variables
- **Memory**: Outer variables stay in memory as long as closure exists
- **Powerful**: Enables data privacy and function factories

### Simple Closure Example
```javascript
function counter() {
    let count = 0;           // Outer variable
    
    return function() {      // Inner function (closure)
        count++;             // Accesses outer variable
        return count;
    };
}

const increment = counter();
console.log(increment());  // 1
console.log(increment());  // 2
console.log(increment());  // 3

// The returned function "remembers" count even after counter() finished
```

### Closure Breakdown
```javascript
function makeMultiplier(multiplier) {
    // Outer function variable
    return function(number) {
        // Inner function - this is a CLOSURE
        // It remembers 'multiplier' from outer scope
        return number * multiplier;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));   // 10 (5 * 2)
console.log(triple(5));   // 15 (5 * 3)

// Each closure has its own 'multiplier' variable
// double remembers 2
// triple remembers 3
```

### Closure Use Case: Private Variables
```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;  // Private variable
    
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            balance -= amount;
            return balance;
        },
        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.getBalance());     // 1000
console.log(myAccount.deposit(500));     // 1500
console.log(myAccount.withdraw(200));    // 1300

console.log(myAccount.balance);          // undefined (private!)
// balance is truly private - can't access directly
```

### Closure in Loops (Common Mistake)
```javascript
// ❌ Problem: Loop variable not captured properly
var functions = [];
for (var i = 0; i < 3; i++) {
    functions.push(function() {
        console.log(i);
    });
}

functions[0]();  // 3 (not 0!)
functions[1]();  // 3 (not 1!)
functions[2]();  // 3 (not 2!)

// ✅ Solution 1: Use let
let functions2 = [];
for (let i = 0; i < 3; i++) {
    functions2.push(function() {
        console.log(i);
    });
}

functions2[0]();  // 0
functions2[1]();  // 1
functions2[2]();  // 2

// ✅ Solution 2: Create closure with IIFE
var functions3 = [];
for (var i = 0; i < 3; i++) {
    functions3.push((function(j) {
        return function() {
            console.log(j);
        };
    })(i));
}

functions3[0]();  // 0
functions3[1]();  // 1
functions3[2]();  // 2
```

### Real-World Closure: Guessing Game
```javascript
function createGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    return function(guess) {
        attempts++;
        
        if (guess === secretNumber) {
            return `Correct! Found in ${attempts} attempts`;
        } else if (guess < secretNumber) {
            return "Too low, try again";
        } else {
            return "Too high, try again";
        }
    };
}

const game = createGuessingGame();
console.log(game(50));   // "Too low, try again"
console.log(game(75));   // "Too high, try again"
console.log(game(60));   // "Correct! Found in 3 attempts"

// The game function is a closure that remembers secretNumber and attempts
```

---

## 13. Types of Errors

### SyntaxError
- **When**: Code has invalid syntax
- **Runtime**: Caught during parsing (before execution)
- **Fix**: Check code structure

```javascript
// ❌ SyntaxError: Missing closing parenthesis
console.log("Hello"

// ❌ SyntaxError: Unexpected token
let x = ;

// ❌ SyntaxError: Invalid token
var 123abc = 5;

// ✅ Correct
console.log("Hello");
let x = 5;
var myVar = 5;
```

### ReferenceError
- **When**: Variable/function doesn't exist or not in scope
- **Runtime**: Thrown during execution
- **Common Causes**: Typo, variable not declared, TDZ

```javascript
// ❌ ReferenceError: x is not defined
console.log(x);

// ❌ ReferenceError: Cannot access 'y' before initialization (TDZ)
console.log(y);
let y = 5;

// ❌ ReferenceError: function not defined
unknownFunction();

// ✅ Correct
let x = 5;
console.log(x);

function myFunc() {}
myFunc();
```

### TypeError
- **When**: Operation applied to wrong data type
- **Runtime**: Thrown during execution
- **Common Causes**: Calling non-function, wrong method, etc.

```javascript
// ❌ TypeError: x is not a function
let x = 5;
x();  // Can't call a number

// ❌ TypeError: Cannot read property 'name' of null
let obj = null;
console.log(obj.name);

// ❌ TypeError: Cannot read property 'length' of undefined
let arr = undefined;
console.log(arr.length);

// ✅ Correct
let func = function() {};
func();

let obj = { name: "Ali" };
console.log(obj.name);

let arr = [1, 2, 3];
console.log(arr.length);
```

### Other Common Errors

**RangeError**: Value out of acceptable range
```javascript
❌ // RangeError: Invalid array length
let arr = new Array(-5);

❌ // RangeError: Maximum call stack size exceeded (infinite recursion)
function loop() {
    loop();
}
loop();
```

**Error Hierarchy:**
```
Error (base)
├── SyntaxError
├── ReferenceError
├── TypeError
├── RangeError
└── Others...
```

---

## 14. Function Declarations vs Function Expressions

### Function Declarations
```javascript
// Function declaration is hoisted completely
sayHi();  // ✅ Works!

function sayHi() {
    console.log("Hello!");
}

// Declaration is moved to top during creation phase
```

### Function Expressions
```javascript
// Function expression is NOT hoisted
// sayBye();  // ❌ ReferenceError

const sayBye = function() {
    console.log("Goodbye!");
};

sayBye();  // ✅ Works after declaration
```

### Comparison Table

| Feature | Declaration | Expression |
|---------|-------------|-----------|
| **Hoisted** | Yes (fully) | No (TDZ for let/const) |
| **Can call before** | Yes | No |
| **Name required** | Yes | No (anonymous ok) |
| **Flexibility** | Less | More |

```javascript
// Declaration - must have name
function add(a, b) {
    return a + b;
}

// Expression - can be anonymous
const multiply = function(a, b) {
    return a * b;
};

// Expression - can have name (optional)
const divide = function division(a, b) {
    return a / b;
};
```

---

## 15. Scope and Call Stack Relationship

### Connection: How They Work Together

```javascript
var global = "global";

function first() {
    var first_var = "first";
    
    function second() {
        var second_var = "second";
        console.log(global);      // Scope chain
        console.log(first_var);   // Scope chain
        console.log(second_var);  // Own scope
    }
    
    second();
}

first();

// Call Stack:
// [main] → [first] → [second]
//
// Scope Chain (when in second):
// second scope → first scope → global scope
```

---

## 16. Key Takeaways

### Understanding JavaScript Internals ✅
- Single-threaded, synchronous execution
- Engines parse, compile, and execute code
- Execution Context provides scope and variable binding

### Execution Flow ✅
- Global Execution Context created first
- Function Execution Context created per function call
- Call Stack tracks execution order

### Memory Management ✅
- Stack: Primitives and references
- Heap: Objects and arrays
- Garbage Collection: Cleans unused memory

### Variable Accessibility ✅
- Hoisting: `var` and functions hoisted
- Temporal Dead Zone: `let`/`const` cannot be used before declaration
- Lexical Scope: Variables accessible based on code structure
- Scope Chain: JavaScript searches outward for variables

### Advanced Concepts ✅
- Closures: Inner functions remember outer variables
- Block Scope: `let`/`const` confined to blocks
- Errors: SyntaxError, ReferenceError, TypeError

---

## 17. Practice Examples

```javascript
// Practice 1: Understanding Call Stack
function a() {
    console.log("A");
    b();
}

function b() {
    console.log("B");
    c();
}

function c() {
    console.log("C");
}

a();
// Output: A, B, C
// Stack: [a] → [a,b] → [a,b,c] → [a,b] → [a] → []

// Practice 2: Closure Counter
function makeCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = makeCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1

// Practice 3: Scope Chain
let x = "global";
function outer() {
    let x = "outer";
    function inner() {
        let x = "inner";
        console.log(x);  // "inner"
    }
    inner();
    console.log(x);  // "outer"
}
outer();
console.log(x);  // "global"

// Practice 4: Error Identification
// console.log(y);  // ReferenceError
// let y = 5;       // y is in TDZ

// 123 = 5;         // SyntaxError

let z = "string";
// z();             // TypeError - z is not a function

// Practice 5: Hoisting Behavior
console.log(a);  // undefined (hoisted)
var a = 5;

sayHi();  // "Hi!" (function hoisted)
function sayHi() {
    console.log("Hi!");
}
```

---

This completes the comprehensive notes for Day 18!
