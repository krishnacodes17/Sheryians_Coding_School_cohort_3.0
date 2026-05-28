# Day-16 Notes: Array Methods & Destructuring

## Overview
Day-16 covers powerful array methods and modern JavaScript destructuring syntax for working with arrays efficiently.

---

## 1. Array Loop Methods

### A. forEach — Execute Function on Each Element

- **Runs a function** on each element
- **Does not return** a new array (returns `undefined`)
- **Cannot break** the loop early
- Use when you want **side effects** (logging, updating DOM, etc.)

```javascript
let nums = [1, 2, 3];
nums.forEach(function(n) {
    console.log(n * 2);
});
// 2, 4, 6

// With arrow function (more concise):
nums.forEach(n => console.log(n * 2));
```

### Index & Array Parameters:
```javascript
let fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit, index, array) => {
    console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: banana
// 2: mango
```

---

### B. map — Transform Each Element

- **Creates a new array** with transformed elements
- **Original array unchanged**
- Returns array of **same length**
- Use for **data transformation**

```javascript
let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
console.log(doubled);   // [2, 4, 6, 8]
console.log(nums);      // [1, 2, 3, 4] ← original unchanged
```

### Practical Examples:
```javascript
// Extract property from objects
let users = [{name: "A", age: 20}, {name: "B", age: 30}];
let names = users.map(u => u.name);
console.log(names);  // ["A", "B"]

// Convert strings to numbers
let strings = ["1", "2", "3"];
let numbers = strings.map(s => parseInt(s));
console.log(numbers);  // [1, 2, 3]

// Square each number
let squared = [1, 2, 3, 4].map(n => n ** 2);
console.log(squared);  // [1, 4, 9, 16]
```

---

### C. filter — Keep Only Matching Elements

- **Creates new array** with elements that pass a **condition**
- Original array **unchanged**
- Returns array of **same or smaller length**
- Use for **selecting data**

```javascript
let nums = [1, 2, 3, 4, 5, 6];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens);   // [2, 4, 6]
console.log(nums);    // [1, 2, 3, 4, 5, 6] ← unchanged
```

### Practical Examples:
```javascript
// Filter adults (age >= 18)
let people = [{name: "A", age: 16}, {name: "B", age: 25}, {name: "C", age: 17}];
let adults = people.filter(p => p.age >= 18);
console.log(adults);  // [{name: "B", age: 25}]

// Filter out empty strings
let words = ["hello", "", "world", "", "javascript"];
let nonEmpty = words.filter(w => w !== "");
console.log(nonEmpty);  // ["hello", "world", "javascript"]

// Filter numbers greater than 10
let numbers = [5, 15, 8, 20, 12];
let large = numbers.filter(n => n > 10);
console.log(large);  // [15, 20, 12]
```

---

### D. reduce — Boil Array Down to Single Value

- **Accumulates values** into a **single result**
- Starts with **initial value** (or first element)
- Returns **one value** (not an array)
- Use for **calculations, aggregations**

#### Syntax:
```javascript
array.reduce((accumulator, currentValue) => {
    // logic
    return newAccumulator;
}, initialValue);
```

### Basic Example:
```javascript
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);   // 10
```

### Step-by-step:
```
acc = 0,  n = 1 → 0 + 1 = 1
acc = 1,  n = 2 → 1 + 2 = 3
acc = 3,  n = 3 → 3 + 3 = 6
acc = 6,  n = 4 → 6 + 4 = 10
```

### Practical Examples:
```javascript
// Product of all numbers
let nums = [2, 3, 4];
let product = nums.reduce((acc, n) => acc * n, 1);
console.log(product);  // 24

// Count occurrences
let words = ["apple", "banana", "apple", "cherry", "apple"];
let count = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});
console.log(count);  // {apple: 3, banana: 1, cherry: 1}

// Find maximum value
let nums = [5, 2, 9, 1, 7];
let max = nums.reduce((acc, n) => acc > n ? acc : n);
console.log(max);  // 9
```

---

### E. find — Return First Matching Element

- Returns the **first element** that matches condition
- Returns the **element itself** (not index)
- Returns `undefined` if **no match found**
- Use when you need **one specific element**

```javascript
let users = [{name: "A", age: 20}, {name: "B", age: 30}, {name: "C", age: 25}];
let user = users.find(u => u.age > 25);
console.log(user);   // {name: "B", age: 30}

// Find first even number
let nums = [1, 3, 5, 4, 2];
let firstEven = nums.find(n => n % 2 === 0);
console.log(firstEven);  // 4
```

---

### F. findIndex — Return Index of First Match

- Returns the **index** (position) of first matching element
- Returns `-1` if **no match found**
- Use when you need the **position** not the element

```javascript
let nums = [10, 20, 30, 40];
let idx = nums.findIndex(n => n > 25);
console.log(idx);   // 2 (index of 30)

let fruits = ["apple", "banana", "mango", "cherry"];
let idx = fruits.findIndex(f => f.startsWith("b"));
console.log(idx);   // 1 (index of "banana")
```

---

### G. some — Does AT LEAST ONE Match?

- Returns **true** if **at least one** element matches
- Returns **false** if **none** match
- **Stops early** when it finds a match
- Use for **existence checks**

```javascript
let nums = [1, 2, 3];
console.log(nums.some(n => n > 2));   // true (3 is > 2)
console.log(nums.some(n => n > 10));  // false (no element > 10)

// Check if user is admin
let users = [{name: "A", role: "user"}, {name: "B", role: "admin"}];
let hasAdmin = users.some(u => u.role === "admin");
console.log(hasAdmin);  // true
```

---

### H. every — Do ALL Match?

- Returns **true** if **all** elements match
- Returns **false** if **any** don't match
- **Stops early** when it finds a non-match
- Use for **validation checks**

```javascript
let nums = [1, 2, 3];
console.log(nums.every(n => n > 0));   // true (all > 0)
console.log(nums.every(n => n > 2));   // false (1 and 2 are not > 2)

// Check if all students passed (score >= 50)
let scores = [75, 60, 55, 80];
let allPassed = scores.every(s => s >= 50);
console.log(allPassed);  // true
```

---

## 2. Array Destructuring

### What is Destructuring?
- **Unpack values** from arrays into variables
- **Cleaner syntax** than accessing by index
- Works with **modern JavaScript** (ES6+)

### Basic Destructuring:
```javascript
let arr = [10, 20, 30];

// Old way
let a = arr[0];
let b = arr[1];

// New way (destructuring)
let [x, y, z] = arr;
console.log(x, y, z);   // 10 20 30
```

### Skip Elements:
```javascript
let [first, , third] = [1, 2, 3];
console.log(first, third);   // 1 3
// Note: middle element (2) is skipped with comma
```

### Default Values:
```javascript
let [a = 10, b = 20] = [5];
console.log(a, b);   // 5 20
// a gets 5 from array, b uses default 20
```

### Rest in Destructuring:
```javascript
let [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [2, 3, 4, 5]
```

### Swap Variables (Elegant!):
```javascript
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);   // 2 1
// No temp variable needed!
```

### Practical Examples:
```javascript
// Extract from function return
function getCoordinates() {
    return [10, 20];
}
let [lat, lon] = getCoordinates();
console.log(lat, lon);  // 10 20

// Destructure with renamed variables
let [min, max] = [5, 100];

// Nested destructuring
let [[a, b], [c, d]] = [[1, 2], [3, 4]];
console.log(a, b, c, d);  // 1 2 3 4
```

---

## 3. Spread Operator with Arrays

### What is Spread?
- **Expands array elements** individually
- Useful for **copying, combining, passing arguments**
- Syntax: `...array`

### Spread in Array Literals:
```javascript
let nums = [1, 2, 3];
let more = [0, ...nums, 4];
console.log(more);   // [0, 1, 2, 3, 4]
```

### Copy an Array (Shallow Copy):
```javascript
let original = [1, 2, 3];
let copy = [...original];
copy.push(4);
console.log(original);  // [1, 2, 3] ← unchanged
console.log(copy);      // [1, 2, 3, 4]
```

### Combine Multiple Arrays:
```javascript
let combined = [...[1, 2], ...[3, 4], ...[5, 6]];
console.log(combined);  // [1, 2, 3, 4, 5, 6]
```

### Pass Array Elements as Function Arguments:
```javascript
let nums = [5, 3, 9, 1, 2];
console.log(Math.max(...nums));   // 9
console.log(Math.min(...nums));   // 1
// Same as Math.max(5, 3, 9, 1, 2)
```

---

## 4. Rest Parameters with Arrays

### Collect Into Array:
```javascript
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));      // 10
console.log(sum(10, 20));          // 30
```

### Mix Regular & Rest Parameters:
```javascript
function describe(first, second, ...rest) {
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Rest:", rest);
}

describe("A", "B", "C", "D", "E");
// First: A
// Second: B
// Rest: ["C", "D", "E"]
```

---

## 5. Multi-Dimensional Arrays (2D Arrays)

### Creating 2D Arrays:
```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

### Accessing Elements:
```javascript
console.log(matrix[0][0]);   // 1 (row 0, col 0)
console.log(matrix[1][2]);   // 6 (row 1, col 2)
console.log(matrix[2][1]);   // 8 (row 2, col 1)
```

### Loop Through 2D Array:
```javascript
for (let row of matrix) {
    for (let val of row) {
        console.log(val);
    }
}
// Prints: 1, 2, 3, 4, 5, 6, 7, 8, 9
```

### Using map on 2D Arrays:
```javascript
// Double each element
let matrix = [[1, 2], [3, 4]];
let doubled = matrix.map(row => row.map(val => val * 2));
console.log(doubled);  // [[2, 4], [6, 8]]
```

### Real-World Example (Game Board):
```javascript
let board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

// Check if player at position [1][1] is "X"
console.log(board[1][1]);  // X
```

---

## Quick Comparison Table

| Method | Returns | Purpose | Example |
|--------|---------|---------|---------|
| **forEach** | undefined | Run function on each element | `arr.forEach(fn)` |
| **map** | New array | Transform elements | `arr.map(x => x*2)` |
| **filter** | New array | Keep matching elements | `arr.filter(x => x>5)` |
| **reduce** | Single value | Accumulate into one value | `arr.reduce((a,b)=>a+b)` |
| **find** | Element | Get first match | `arr.find(x => x>10)` |
| **findIndex** | Index | Get position of first match | `arr.findIndex(x => x>10)` |
| **some** | Boolean | Is ANY match true? | `arr.some(x => x>10)` |
| **every** | Boolean | Are ALL matches true? | `arr.every(x => x>0)` |

---

## Key Takeaways

✅ **forEach** - Just loop without returning  
✅ **map** - Transform to new array  
✅ **filter** - Keep only matching elements  
✅ **reduce** - Accumulate to single value  
✅ **find** - Get first matching element  
✅ **findIndex** - Get position of first match  
✅ **some** - Check if at least one matches  
✅ **every** - Check if all match  
✅ **Destructuring** - Unpack arrays into variables cleanly  
✅ **Spread (...)** - Expand array elements  
✅ **Rest (...)** - Collect arguments into array  
✅ **Multi-dimensional arrays** - Arrays of arrays  

### When to Use Each:
- Need to **loop**: `forEach` or `for...of`
- Need **new transformed array**: `map`
- Need **filtered array**: `filter`
- Need **single accumulated value**: `reduce`
- Need **one specific element**: `find`
- Need **to check existence**: `some` or `every`
- Need **clean variable assignment**: destructuring
- Need **to pass array to function**: spread operator
