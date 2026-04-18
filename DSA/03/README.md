# Day 3: JavaScript Math Object & Calculations

## 🎯 Quick Start

**Topics:** Math Methods | Random Numbers | Compound Interest | Heron's Formula  
**Time:** 1-2 hours  
**Difficulty:** Beginner  
**Status:** ✅ Complete

---

## 📂 Files in This Folder

| File | Purpose | Use When |
|------|---------|----------|
| **notes.md** | 📖 Detailed notes with explanations | You want DEEP understanding |
| **03.js** | 💻 Code examples & practice | You want to SEE the code |
| **README.md** | 📍 Quick guide (this file) | You need quick reference |

---

## 🚀 How to Learn (Step by Step)

### **Step 1: Quick Overview (5 minutes)**
Read the **Key Concepts** section below

### **Step 2: Deep Dive (30-40 minutes)**
Open `notes.md` and read sections:
1. Section 1: Math Methods
2. Section 2: Random Numbers
3. Section 3: Compound Interest
4. Section 4: Heron's Formula

### **Step 3: Code Practice (20 minutes)**
Run `03.js` in your terminal:
```bash
node 03.js
```

### **Step 4: Practice Problems (15 minutes)**
Solve the **Practice Questions** below

---

## 🔑 Key Concepts (One Line Each)

| Topic | Key Idea |
|-------|----------|
| **Math.abs()** | Removes the negative sign |
| **Math.ceil()** | Round UP to nearest integer |
| **Math.floor()** | Round DOWN to nearest integer |
| **Math.round()** | Standard rounding (nearest integer) |
| **Math.trunc()** | Remove decimal part entirely |
| **Math.pow()** | Base raised to power (exponent) |
| **Math.random()** | Random decimal between 0-1 |
| **Random Range** | `Math.trunc(Math.random() * range + min)` |
| **Compound Interest** | `A = P × (1 + r/100)^t` |
| **Triangle Area** | `Area = 1/2 × base × height` |

---

## 🎓 What You Should Know

After completing this day, you should be able to answer:

- [ ] What's the difference between `Math.ceil()` and `Math.floor()`?
- [ ] How do you generate a random 4-digit number?
- [ ] What is the compound interest formula?
- [ ] How do you calculate the area of a triangle?
- [ ] Why use `Math.trunc()` with `Math.random()`?
- [ ] What does `Math.pow(2, 3)` return?
- [ ] How do you find the largest number in a list?

---

## 💪 Practice Questions (6 Questions)

**Try** solving these WITHOUT looking at answers:

### Q1: Math Methods
```javascript
console.log(Math.ceil(7.2));      // ?
console.log(Math.floor(7.8));     // ?
console.log(Math.round(7.5));     // ?
console.log(Math.trunc(7.9));     // ?
```
**What's each output?**

### Q2: Random Number
```javascript
// Generate a random number between 50 and 100
let randomNum = ?;
console.log(randomNum);
```
**Fill in the blank**

### Q3: OTP Generation
```javascript
// Generate a 6-digit OTP (100000 to 999999)
let otp = ?;
console.log(otp);
```
**Fill in the blank**

### Q4: Max and Min
```javascript
let scores = [45, 78, 23, 92, 56];
console.log(Math.max(...scores));    // ?
console.log(Math.min(...scores));    // ?
```
**What's each output?**

### Q5: Compound Interest
If you invest ₹10,000 at 6% interest for 3 years, what is the final amount and compound interest earned?

**Formula:** A = P × (1 + r/100)^t

### Q6: Triangle Area
A triangle has a base of 8 cm and height of 5 cm. Find its area.

**Formula:** Area = 1/2 × base × height

---

## 🔗 Important Notes

- **Math object is BUILT-IN** - no need to import
- **All Math methods are FUNCTIONS** - use parentheses `()`
- **Math.random() needs modification** - multiply and add to get desired range
- **Order of operations matters** - Multiplication before Addition

---

## 📊 Common Mistakes to Avoid

❌ **Wrong:** `Math.random()*100` (might give 99.999...)  
✅ **Right:** `Math.trunc(Math.random()*100)` (gives whole number)

❌ **Wrong:** Forgetting parentheses `Math.pow 2,3`  
✅ **Right:** Using parentheses `Math.pow(2, 3)`

❌ **Wrong:** `Math.max(45, 23, 78)` (correct syntax, but no spread)  
✅ **Right:** `Math.max(...[45, 23, 78])` (use spread for arrays)

---

## 🎬 Quick Example

```javascript
// Generating random scores
for(let i = 0; i < 5; i++) {
  let score = Math.trunc(Math.random() * 100);
  console.log("Score " + (i+1) + ": " + score);
}

// Calculate average
let total = 450;
let average = total / 5;
console.log("Average: " + Math.round(average));
```

---

## 📊 Cheat Sheet

### Math Methods
```javascript
Math.abs(-10);           // 10
Math.ceil(10.2);         // 11
Math.floor(10.8);        // 10
Math.round(10.5);        // 11
Math.trunc(10.9);        // 10
Math.pow(2, 3);          // 8
Math.sqrt(16);           // 4
Math.max(5, 10, 3);      // 10
Math.min(5, 10, 3);      // 3
Math.random();           // 0.xxx to 0.999
```

### Random Number Generation
```javascript
// Random 0-10
Math.trunc(Math.random() * 10);

// Random 50-100
Math.trunc(Math.random() * 51 + 50);

// Random 4-digit OTP
Math.trunc(Math.random() * 9000 + 1000);
```

### Formulas
```javascript
// Compound Interest
A = P * Math.pow(1 + (r/100), t);
CI = A - P;

// Triangle Area (base & height)
Area = (1/2) * base * height;

// Triangle Area (Heron's - all 3 sides)
s = (a + b + c) / 2;
Area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
```

---

## ❓ Got Questions?

**I don't understand X:**
1. Open `notes.md` → find detailed explanation
2. Run `03.js` → see working examples
3. Add console.log() → debug step by step

**The code isn't working:**
- Check if you're using parentheses: `Math.pow(2, 3)`
- Remember to use spread for arrays: `Math.max(...array)`
- Don't forget Math.trunc with random: `Math.trunc(Math.random()*10)`

**Ready to move on?**
- Complete all practice questions ✅
- Answer the checklist in "What You Should Know" ✅
- Then start Day 4! 🚀

---

## 🔗 Related Files

**For Detailed Learning:** Open [notes.md](./notes.md)  
**For Code Examples:** Open [03.js](./03.js)

---

**Status:** ✅ Day 3 Complete  

