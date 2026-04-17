# Day 2: JavaScript Fundamentals - Variables & Type Coercion

## 🎯 Quick Start

**Topics:** `var` vs `let` vs `const` | Type Coercion | Variable Swapping  
**Time:** 1-2 hours  
**Difficulty:** Beginner  
**Status:** ✅ Complete

---

## 📂 Files in This Folder

| File | Purpose | Use When |
|------|---------|----------|
| **notes.md** | 📖 Detailed notes with explanations | You want DEEP understanding |
| **02.js** | 💻 Code examples & practice | You want to SEE the code |
| **README.md** | 📍 Quick guide (this file) | You need quick reference |

---

## 🚀 How to Learn (Step by Step)

### **Step 1: Quick Overview (5 minutes)**
Read the **Key Concepts** section below

### **Step 2: Deep Dive (30-40 minutes)**
Open `notes.md` and read sections:
1. Section 1: Variable Declaration
2. Section 2: Type Coercion
3. Section 3: Order of Operations
4. Board Class Rules

### **Step 3: Code Practice (20 minutes)**
Run `02.js` in your terminal:
```bash
node 02.js
```

### **Step 4: Practice Problems (15 minutes)**
Solve the **Practice Questions** below

---

## 🔑 Key Concepts (One Line Each)

| Topic | Key Idea |
|-------|----------|
| **`const`** | Use by default - value cannot change |
| **`let`** | Use when you need to reassign |
| **`var`** | ❌ AVOID - old and causes bugs |
| **Type Coercion** | `"10" + 5 = "105"` (string wins!) |
| **Order of Ops** | Evaluate LEFT to RIGHT |
| **Parentheses** | Always use for clarity `(a+b)` |
| **Variable Swap** | 3 methods exist - pick one |

---

## 🎓 What You Should Know

After completing this day, you should be able to answer:

- [ ] Why use `const` instead of `var`?
- [ ] What is the difference between `var` and `let` scope?
- [ ] Why does `"10" + 5` give `"105"` and not `15`?
- [ ] How do you swap two variables? (3 ways)
- [ ] What happens when you do `"20" - "5"`?
- [ ] Why use parentheses in `(a + b) + " total"`?

---

## 💪 Practice Questions (5 Questions)

**Try** solving these WITHOUT looking at answers:

### Q1
```javascript
let x = 5;
console.log(x + 5 + " miles");
```
**What's the output?** (Hint: order matters)

### Q2
```javascript
let a = "10";
console.log(a - 5);
```
**What's the output?** (Hint: - operator)

### Q3
```javascript
console.log("5" * "2" + "3");
```
**What's the output?** (Hint: think step by step)

### Q4: Swap Variables
```javascript
let num1 = 100;
let num2 = 200;
// Write 3 different methods to swap them
```

### Q5
```javascript
console.log("10" + 10 - 5);
```
**What's the output?** (Hint: order of operations)

---

## 📊 Cheat Sheet

### Variable Declaration
```javascript
const x = 10;    // ✅ Use this by default
let y = 20;      // ✅ Use if you need to change it
var z = 30;      // ❌ Don't use (old)
```

### Type Coercion Rules
```javascript
"5" + 10        // "510" (String + Number = String)
"10" - 5        // 5 (String - Number = Number)
10 + 5 + "m"    // "15m" (numbers add first)
"5" * "2"       // 10 (both convert to numbers)
```

### Variable Swap (Pick One)
```javascript
// Method 1: Temp variable
let temp = a; a = b; b = temp;

// Method 2: Arithmetic
a = a + b; b = a - b; a = a - b;

// Method 3: Array
let arr = [a, b]; a = arr[1]; b = arr[0];
```

---

## ❓ Got Questions?

**I don't understand X:**
1. Open `notes.md` → find detailed explanation
2. Run `02.js` → see working examples  
3. Add console.log() → debug step by step

**The code isn't working:**
- Step through line by line
- Print values with `console.log()`
- Check for syntax errors

**Ready to move on?**
- Complete all practice questions ✅
- Answer the checklist above ✅
- Then start Day 3! 🚀

---

## 🔗 Related Files

**For Detailed Learning:** Open [notes.md](./notes.md)  
**For Code Examples:** Open [02.js](./02.js)

---

**Status:** ✅ Day 2 Complete  
**Next:** Day 3 - Functions & Scope  
**Completed:** April 17, 2026

---

*Remember: Struggling is part of learning. Keep debugging! 💪*

let temp_array = [a, b];
a = temp_array[1];  // a gets b
b = temp_array[0];  // b gets original a

console.log(a, b);  // 20, 10 ✅
```

---

## 🔥 Board Class Important Rules (Master These!)

### Golden Rules

1. **The `+` operator is SPECIAL** - If ANY operand is String, result is String
2. **Other operators (+, -, *, /) convert Strings to Numbers**
3. **Always evaluate LEFT to RIGHT**
4. **Use Parentheses `()` to control order**
5. **Non-numeric strings become `NaN`**

---

## 💻 Files in This Folder

| File | Purpose |
|------|---------|
| `notes.md` | Comprehensive study notes with examples |
| `02.js` | Code examples and practice problems |
| `README.md` | This file - learning guide |

---

## 📝 How to Use These Files

### 1. **Read the Notes First**
```bash
Open: notes.md
Read sections in order:
- let, var, const
- Type Coercion Rules
- Order of Operations
- Board Class Rules
```

### 2. **Study the Code Examples**
```bash
Open: 02.js
Understand each example:
- Type coercion scenarios
- Variable swapping methods
```

### 3. **Run the Code**
```bash
node 02.js
```

---

## 🏆 Practice Questions (Exam Level)

Try solving these without looking at solutions:

### Q1: What will be the output?
```javascript
let x = 5;
let y = 10;
console.log(x + y + " hello");
```
**Answer:** `"15 hello"`

### Q2: What will be the output?
```javascript
let a = "10";
let b = 20;
console.log(a + b - 5);
```
**Answer:** `1015` (because "10" + 20 = "1020", then "1020" - 5 = 1015)

### Q3: What will be the output?
```javascript
console.log("5" * "2" + "3");
```
**Answer:** `"103"` (because "5" * "2" = 10, then 10 + "3" = "103")

### Q4: What will be the output?
```javascript
console.log("10" + 5 * 2);
```
**Answer:** `"1010"` (multiplication happens first, then concatenation)

### Q5: Swap these variables using 3 methods
```javascript
let num1 = 100;
let num2 = 200;
// Complete using all 3 methods
```
