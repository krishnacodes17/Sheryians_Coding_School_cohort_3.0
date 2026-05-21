# Day 12: Control Flow & Loops - Deep Dive Notes

---

## 1. Conditional Statements

### A. IF Statement

**Basic Syntax:**
```javascript
if (condition) {
    // Code runs only if condition is TRUE
}
```

**Examples:**
```javascript
const age = 25;

if (age >= 18) {
    console.log("You are an adult");  // Runs (25 >= 18 is true)
}

// With variable
const isRaining = true;
if (isRaining) {
    console.log("Take an umbrella");  // Runs
}

// With comparison
const temperature = 40;
if (temperature > 35) {
    console.log("It's very hot");     // Runs
}
```

**How It Works:**
1. JavaScript evaluates the condition
2. If condition is truthy, code block runs
3. If condition is falsy, code block is skipped

**Truthy vs Falsy:**
```javascript
// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy

if (0) {
    console.log("Won't print");  // 0 is falsy
}

if (1) {
    console.log("Will print");   // 1 is truthy
}

if ("") {
    console.log("Won't print");  // "" is falsy
}

if ("hello") {
    console.log("Will print");   // "hello" is truthy
}
```

---

### B. IF...ELSE Statement

**Syntax:**
```javascript
if (condition) {
    // Code if condition is TRUE
} else {
    // Code if condition is FALSE
}
```

**Examples:**
```javascript
const age = 15;

if (age >= 18) {
    console.log("Can vote");
} else {
    console.log("Too young to vote");  // Runs
}

// With variables
const score = 45;
if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");  // Runs
}

// Login example
const isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in");  // Runs
}
```

**Flow Diagram:**
```
          ┌─── Condition ───┐
          │                 │
        TRUE              FALSE
         │                  │
    Execute IF          Execute ELSE
    code block           code block
         │                  │
          └─────┬───────────┘
              Continue
```

---

### C. IF...ELSE IF...ELSE Statement

**Syntax:**
```javascript
if (condition1) {
    // Code if condition1 is TRUE
} else if (condition2) {
    // Code if condition1 is FALSE but condition2 is TRUE
} else if (condition3) {
    // Code if condition1 & condition2 are FALSE but condition3 is TRUE
} else {
    // Code if all conditions are FALSE
}
```

**Examples:**
```javascript
const score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");    // Runs
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
```

**Real-World Examples:**

**Example 1: Age Groups**
```javascript
const age = 25;

if (age < 13) {
    console.log("Child");
} else if (age < 18) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult");        // Runs
} else {
    console.log("Senior");
}
```

**Example 2: Time-Based Greeting**
```javascript
const hour = 15;

if (hour < 12) {
    console.log("Good morning");
} else if (hour < 18) {
    console.log("Good afternoon");  // Runs (15 < 18)
} else {
    console.log("Good evening");
}
```

**Example 3: Weather Based Activity**
```javascript
const temperature = 28;
const isRaining = false;

if (temperature > 30) {
    console.log("Too hot, stay indoors");
} else if (temperature < 10 || isRaining) {
    console.log("Cold or rainy, take jacket");
} else {
    console.log("Perfect weather for outdoor activity");  // Runs
}
```

**Important Rules:**
- ✅ First TRUE condition runs, rest are skipped
- ✅ `else` always runs last if all conditions are FALSE
- ✅ `else if` only checked if previous conditions were FALSE
- ✅ Only ONE block executes in if-else if-else chain

---

### D. Nested IF Statements

```javascript
const age = 20;
const hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("Can drive");  // Runs (both true)
    } else {
        console.log("Get a license first");
    }
} else {
    console.log("Too young to drive");
}
```

**More Complex Example:**
```javascript
const country = "USA";
const age = 25;
const hasPassport = true;

if (country === "USA") {
    if (age >= 18) {
        if (hasPassport) {
            console.log("Can travel internationally");  // Runs
        } else {
            console.log("Get a passport");
        }
    } else {
        console.log("Too young");
    }
} else {
    console.log("Check your country's rules");
}
```

---

## 2. Switch Statement

**Syntax:**
```javascript
switch (expression) {
    case value1:
        // Code if expression === value1
        break;
    case value2:
        // Code if expression === value2
        break;
    case value3:
        // Code if expression === value3
        break;
    default:
        // Code if no cases match
}
```

**How It Works:**
1. Expression is evaluated once
2. Compared with each case value
3. If match found, code runs from that case onwards
4. `break` stops execution (prevent fall-through)
5. `default` runs if no cases match

### Example 1: Day of Week
```javascript
const day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";   // Matches
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);  // "Wednesday"
```

### Example 2: Browser Detection
```javascript
const browser = "Chrome";
let engine;

switch (browser) {
    case "Chrome":
        engine = "V8";
        break;
    case "Firefox":
        engine = "SpiderMonkey";
        break;
    case "Safari":
        engine = "WebKit";
        break;
    default:
        engine = "Unknown";
}

console.log(engine);  // "V8"
```

### Example 3: Multiple Cases (Fall-Through)
```javascript
const grade = "B";
let feedback;

switch (grade) {
    case "A":
    case "B":
        feedback = "Excellent work!";  // Runs for both A and B
        break;
    case "C":
        feedback = "Good effort";
        break;
    case "D":
    case "F":
        feedback = "Need improvement";
        break;
    default:
        feedback = "Invalid grade";
}

console.log(feedback);  // "Excellent work!"
```

### Important Notes:
- ✅ Uses strict equality (===)
- ✅ `break` is crucial (prevents fall-through)
- ✅ Default case is optional
- ✅ Good for checking ONE variable against multiple values
- ❌ Avoid switch if conditions are complex

---

## 3. Ternary Operator

**Syntax:**
```javascript
condition ? valueIfTrue : valueIfFalse
```

**Simple Examples:**
```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

// Without ternary (longer)
let status2;
if (age >= 18) {
    status2 = "Adult";
} else {
    status2 = "Minor";
}

// With ternary (shorter)
const status3 = age >= 18 ? "Adult" : "Minor";
```

**Real-World Examples:**

**Example 1: Gender-Based Greeting**
```javascript
const isMale = true;
const pronoun = isMale ? "He" : "She";
console.log(`${pronoun} is here`);  // "He is here"
```

**Example 2: Login State**
```javascript
const isLoggedIn = false;
const message = isLoggedIn ? "Welcome!" : "Please log in";
console.log(message);  // "Please log in"
```

**Example 3: Price Discount**
```javascript
const isMember = true;
const price = 100;
const finalPrice = isMember ? price * 0.9 : price;
console.log(finalPrice);  // 90
```

**Nested Ternary (Be Careful!):**
```javascript
const score = 85;

const grade = score >= 90 ? "A" 
            : score >= 80 ? "B" 
            : score >= 70 ? "C" 
            : "F";

console.log(grade);  // "B"

// This is harder to read. Better as if-else if-else:
let grade2;
if (score >= 90) {
    grade2 = "A";
} else if (score >= 80) {
    grade2 = "B";
} else if (score >= 70) {
    grade2 = "C";
} else {
    grade2 = "F";
}
```

**Best Practice:**
- ✅ Use for simple, one-line conditions
- ❌ Avoid nesting multiple ternary operators (hard to read)

---

## 4. Loops

### A. FOR Loop

**Syntax:**
```javascript
for (initialization; condition; increment) {
    // Code runs repeatedly
}
```

**How It Works:**
1. Initialization: `let i = 0` (runs once at start)
2. Condition: `i < 5` (checked before each iteration)
3. Code runs if condition is TRUE
4. Increment: `i++` (happens after each iteration)
5. Repeat steps 2-4 until condition is FALSE

**Example 1: Basic Counting**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

**Example 2: Print 1 to 10**
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

**Example 3: Countdown**
```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

**Example 4: Print Even Numbers**
```javascript
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
```

**Example 5: Multiplication Table**
```javascript
const num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ... and so on
```

**Flowchart:**
```
      START
        │
        ▼
   i = 0 (initialization)
        │
        ▼
   i < 5? (condition)
   │         │
  NO        YES
   │         │
   │         ▼
   │     Execute code
   │         │
   │         ▼
   │      i++ (increment)
   │         │
   └─────────┘
        │
        ▼
      END
```

---

### B. WHILE Loop

**Syntax:**
```javascript
while (condition) {
    // Code runs while condition is TRUE
}
```

**Important:** Condition checked BEFORE code runs

**Example 1: Basic While Loop**
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Output: 0, 1, 2, 3, 4
```

**Example 2: User Input Simulation**
```javascript
let password = "";
while (password !== "secret") {
    password = "secret";  // Simulating user input
    console.log("Trying password...");
}
console.log("Access granted!");
```

**Example 3: Sum Numbers**
```javascript
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);  // 55 (1+2+3+...+10)
```

**Comparison: FOR vs WHILE**
```javascript
// FOR Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// WHILE Loop (equivalent)
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Both produce same output: 0, 1, 2, 3, 4
```

**When to Use:**
- ✅ Use WHILE when you don't know how many iterations
- ✅ Use FOR when you know exact number of iterations

---

### C. DO...WHILE Loop

**Syntax:**
```javascript
do {
    // Code runs at least ONCE
} while (condition);
```

**Important:** Code runs FIRST, then condition checked

**Example 1: Basic Do-While**
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// Output: 0, 1, 2, 3, 4
```

**Example 2: Menu System (runs at least once)**
```javascript
let choice;
do {
    console.log("Menu: 1. Start  2. Exit");
    choice = 1;  // Simulating user choice
    console.log("You chose: " + choice);
} while (choice !== 2);
```

**Example 3: Guaranteed Execution**
```javascript
let x = 10;
do {
    console.log("This runs even though condition is false");
} while (x < 5);  // x = 10, so condition is false
// Output: "This runs even though condition is false" (prints once!)
```

**Important Difference:**
```javascript
// WHILE: May not run at all
let x = 10;
while (x < 5) {
    console.log("Won't print");  // Condition false, doesn't run
}

// DO-WHILE: Always runs at least once
do {
    console.log("Prints once");  // Runs before checking condition
} while (x < 5);
```

---

### D. FOR...OF Loop

**Syntax:**
```javascript
for (const element of iterable) {
    // element gets each value from iterable
}
```

**Works with:** Arrays, strings, and other iterables

**Example 1: Array Iteration**
```javascript
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}
// Output:
// Apple
// Banana
// Orange
```

**Example 2: String Iteration**
```javascript
const word = "Hello";

for (const char of word) {
    console.log(char);
}
// Output:
// H
// e
// l
// l
// o
```

**Example 3: Calculate Sum**
```javascript
const numbers = [10, 20, 30, 40];
let sum = 0;

for (const num of numbers) {
    sum += num;
}
console.log(sum);  // 100
```

**Difference from FOR Loop:**
```javascript
// FOR Loop (with index)
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);  // Prints index and value
}

// FOR...OF Loop (direct values)
for (const element of arr) {
    console.log(element);    // Prints only value, not index
}
```

---

### E. FOR...IN Loop

**Syntax:**
```javascript
for (const key in object) {
    // key gets each property name
}
```

**Works with:** Objects and arrays (not recommended for arrays)

**Example 1: Object Iteration**
```javascript
const user = {
    name: "Ali",
    age: 25,
    city: "Karachi"
};

for (const key in user) {
    console.log(key + ": " + user[key]);
}
// Output:
// name: Ali
// age: 25
// city: Karachi
```

**Example 2: Object with Methods**
```javascript
const student = {
    name: "Ahmed",
    marks: 85,
    grade: "B"
};

for (const prop in student) {
    console.log(`${prop}: ${student[prop]}`);
}
```

**Difference from FOR...OF:**
```javascript
// FOR...IN (property names/keys)
for (const key in user) {
    console.log(key);  // Prints: "name", "age", "city"
}

// FOR...OF (property values)
for (const value of Object.values(user)) {
    console.log(value);  // Prints: "Ali", 25, "Karachi"
}
```

---

## 5. Break and Continue

### BREAK Statement

**Syntax:**
```javascript
break;
```

**Purpose:** Exit/stop the loop immediately

**Example 1: Stop at Target**
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exit loop when i equals 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4
```

**Example 2: Find Item in Array**
```javascript
const numbers = [10, 20, 30, 40, 50];
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 30) {
        found = true;
        break;  // Stop searching after finding
    }
}
console.log(found);  // true
```

**Example 3: Search with Break**
```javascript
const users = ["Ali", "Ahmed", "Sara", "Fatima"];

for (const user of users) {
    if (user === "Sara") {
        console.log("Found!");
        break;  // Stop searching
    }
    console.log("Checking: " + user);
}
// Output:
// Checking: Ali
// Checking: Ahmed
// Found!
```

---

### CONTINUE Statement

**Syntax:**
```javascript
continue;
```

**Purpose:** Skip current iteration, continue with next

**Example 1: Skip Odd Numbers**
```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
        continue;  // Skip odd numbers
    }
    console.log(i);
}
// Output: 0, 2, 4, 6, 8 (only even numbers)
```

**Example 2: Skip Specific Item**
```javascript
const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (const fruit of fruits) {
    if (fruit === "Mango") {
        continue;  // Skip Mango
    }
    console.log(fruit);
}
// Output:
// Apple
// Banana
// Orange
```

**Example 3: Print Multiples**
```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 3 !== 0) {
        continue;  // Skip if not divisible by 3
    }
    console.log(i);
}
// Output: 3, 6, 9, 12, 15, 18
```

---

### BREAK vs CONTINUE

| Feature | BREAK | CONTINUE |
|---------|-------|----------|
| **Action** | Stops loop completely | Skips to next iteration |
| **Loop continues?** | No | Yes |
| **Use case** | Found what you're looking for | Skip invalid items |

**Side-by-side:**
```javascript
// BREAK Example
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// Output: 0, 1, 2

// CONTINUE Example
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Output: 0, 1, 2, 4
```

---

## 6. Loop Comparison

| Loop Type | When to Use | Syntax |
|-----------|-----------|--------|
| **FOR** | Know exact number of iterations | `for (init; cond; incr)` |
| **WHILE** | Unknown number of iterations | `while (condition)` |
| **DO-WHILE** | Must run at least once | `do { } while (cond)` |
| **FOR...OF** | Iterate array values | `for (const val of array)` |
| **FOR...IN** | Iterate object properties | `for (const key in object)` |

---

## 7. Nested Loops

**Example 1: Multiplication Table**
```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
// Output:
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
```

**Example 2: Star Pattern**
```javascript
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
        stars += "* ";
    }
    console.log(stars);
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *
```

**Example 3: 2D Array**
```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9
```

---

## 8. Common Loop Mistakes

### Mistake 1: Infinite Loop
```javascript
❌ while (true) {
       console.log("This never stops!");
   }

✅ while (condition) {
       console.log("Eventually stops");
       condition = false;
   }
```

### Mistake 2: Wrong Increment
```javascript
❌ for (let i = 0; i < 5; i--) {
       console.log(i);  // Infinite loop! (i keeps decreasing)
   }

✅ for (let i = 0; i < 5; i++) {
       console.log(i);  // Correct
   }
```

### Mistake 3: Forgetting to Update Variable
```javascript
❌ let i = 0;
   while (i < 5) {
       console.log(i);  // Infinite loop! (i never changes)
   }

✅ let i = 0;
   while (i < 5) {
       console.log(i);
       i++;  // Update variable
   }
```

### Mistake 4: Using Wrong Loop Variable
```javascript
❌ for (let i = 0; i < 5; i++) {
       console.log(j);  // ReferenceError: j not defined
   }

✅ for (let i = 0; i < 5; i++) {
       console.log(i);  // Correct
   }
```

### Mistake 5: FOR...IN with Arrays
```javascript
❌ const arr = ["a", "b", "c"];
   for (const index in arr) {
       console.log(typeof index);  // "string" - not number!
   }

✅ for (const item of arr) {
       console.log(typeof item);   // "string" - correct
   }
```

---

## 9. Real-World Examples

### Example 1: Grade Checker
```javascript
const scores = [45, 78, 92, 58, 88];

for (const score of scores) {
    if (score >= 90) {
        console.log(`${score}: A`);
    } else if (score >= 80) {
        console.log(`${score}: B`);
    } else if (score >= 70) {
        console.log(`${score}: C`);
    } else if (score >= 60) {
        console.log(`${score}: D`);
    } else {
        console.log(`${score}: F`);
    }
}
```

### Example 2: Even Number Finder
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (const num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}
console.log(evenNumbers);  // [2, 4, 6, 8, 10]
```

### Example 3: Password Validator
```javascript
let password = "pass";
let isValid = false;

while (!isValid) {
    if (password.length >= 8) {
        isValid = true;
    } else {
        console.log("Password too short");
        password = "password123";  // Simulate retry
    }
}
console.log("Password accepted");
```

### Example 4: Sum Calculator
```javascript
const transactions = [100, -50, 200, -30, 150];
let balance = 0;

for (const amount of transactions) {
    if (amount > 0) {
        balance += amount;
    } else {
        balance -= Math.abs(amount);
    }
}
console.log(`Final balance: ${balance}`);
```

### Example 5: Find Duplicate
```javascript
const items = ["a", "b", "c", "b", "d", "a"];
const duplicates = [];

for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
        if (items[i] === items[j] && !duplicates.includes(items[i])) {
            duplicates.push(items[i]);
        }
    }
}
console.log(duplicates);  // ["a", "b"]
```

---

## 10. Key Takeaways

### Conditional Statements ✅
- Use `if` for single condition
- Use `if...else` for two alternatives
- Use `if...else if...else` for multiple options
- Use `switch` for checking ONE variable against many values
- Use ternary operator for simple one-line conditions

### Loops ✅
- **FOR**: When you know exact iterations
- **WHILE**: When condition changes unpredictably
- **DO-WHILE**: When code must run at least once
- **FOR...OF**: For array values
- **FOR...IN**: For object properties (not arrays)

### Control Flow ✅
- `break`: Exit loop immediately
- `continue`: Skip to next iteration
- Nested loops for complex patterns
- Avoid infinite loops

### Best Practices ✅
- Keep conditions simple and readable
- Use meaningful variable names
- Prevent infinite loops
- Choose appropriate loop type
- Use break/continue wisely

---

## 11. Practice Exercises

```javascript
// Exercise 1: Even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Exercise 2: Sum of 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);  // 5050

// Exercise 3: Print 5 times "Hello"
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

// Exercise 4: Grade based on score
const score = 75;
switch (Math.floor(score / 10)) {
    case 10:
    case 9:
        console.log("A");
        break;
    case 8:
        console.log("B");  // Runs
        break;
    case 7:
        console.log("C");
        break;
    default:
        console.log("F");
}

// Exercise 5: Find number in array
const nums = [5, 10, 15, 20, 25];
const target = 15;
let found = false;

for (const num of nums) {
    if (num === target) {
        found = true;
        break;
    }
}
console.log(found ? "Found!" : "Not found");  // "Found!"
```

---

This completes the comprehensive notes for Day 12!
