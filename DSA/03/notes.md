# JavaScript: Math Object & Mathematical Calculations

## Question 1: What are the commonly used Math methods?

**Answer:**
The Math object provides useful methods for mathematical operations:

- **Math.abs()** - Returns the absolute value (removes negative sign)
- **Math.ceil()** - Rounds UP to the nearest integer
- **Math.floor()** - Rounds DOWN to the nearest integer
- **Math.round()** - Rounds to the nearest integer (standard rounding)
- **Math.trunc()** - Removes the decimal part (truncates)
- **Math.pow(base, exponent)** - Returns base raised to the power of exponent
- **Math.max()** - Returns the largest number
- **Math.min()** - Returns the smallest number
- **Math.random()** - Returns a random number between 0 (inclusive) and 1 (exclusive)

```javascript
console.log(Math.abs(-11));           // 11
console.log(Math.ceil(1.2));          // 2
console.log(Math.floor(10.6));        // 10
console.log(Math.round(10.5));        // 11 (rounds to nearest)
console.log(Math.trunc(110.25));      // 110 (removes decimal)
console.log(Math.pow(10, 2));         // 100
console.log(Math.max(19, 15, 45));    // 45
console.log(Math.random() * 10);      // Random between 0-10
```

---

## Question 2: How do you generate a random number in a specific range?

**Answer:**
To generate a random integer in a specific range, use this formula:

```
Math.trunc(Math.random() * (max - min + 1) + min)
```

For example, to generate a random number between 1000-9999 (4-digit OTP):

```javascript
let otp = Math.trunc(Math.random() * 9000 + 1000);
console.log(otp);  // Output: random number between 1000-9999
```

**Explanation:**
- `Math.random()` gives a decimal between 0 and 0.999...
- Multiply by 9000 to get range 0-8999
- Add 1000 to shift range to 1000-9999
- `Math.trunc()` removes the decimal part

---

## Question 3: What is Compound Interest and how do you calculate it?

**Answer:**
Compound Interest is the interest calculated on the principal plus any accumulated interest.

**Formula:**
$$A = P \times \left(1 + \frac{r}{100}\right)^t$$

Where:
- **A** = Final Amount
- **P** = Principal (initial amount)
- **r** = Rate of interest (per annum)
- **t** = Time (in years)
- **Compound Interest** = A - P

```javascript
let principle = 1000;      // Principal amount
let rate = 5;              // 5% per annum
let time = 2;              // 2 years

let amount = principle * Math.pow(1 + (rate / 100), time);
let compoundInterest = amount - principle;

console.log("Final Amount: " + amount);
console.log("Compound Interest: " + compoundInterest);
```

**Example:**
If Principal = ₹1000, Rate = 5%, Time = 2 years:
- Amount = 1000 × (1.05)² = ₹1102.50
- Compound Interest = 1102.50 - 1000 = ₹102.50

---

## Question 4: What is Heron's Formula and how do you calculate triangle area?

**Answer:**
Heron's Formula calculates the area of a triangle when all three sides are known:

$$s = \frac{a + b + c}{2}$$ (semi-perimeter)

$$\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}$$

However, if you only have base and height:

$$\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}$$

```javascript
// Method 1: Using base and height
let height = 10;
let base = 6;
let area = (1/2) * base * height;
console.log("Area: " + area);  // Output: 30

// Method 2: Using Heron's Formula (all three sides known)
let a = 5, b = 6, c = 7;
let s = (a + b + c) / 2;
let areaHeron = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log("Area (Heron): " + areaHeron);  // Output: 14.7
```

---

## Question 5: What's the difference between Math.trunc(), Math.floor(), and Math.round()?

**Answer:**
All three methods convert decimals to integers, but they work differently:

| Method | 10.2 | 10.5 | 10.9 | -10.5 |
|--------|------|------|------|-------|
| **Math.trunc()** | 10 | 10 | 10 | -10 |
| **Math.floor()** | 10 | 10 | 10 | -11 |
| **Math.round()** | 10 | 11 | 11 | -10 |
| **Math.ceil()** | 11 | 11 | 11 | -10 |

**Explanation:**
- **Math.trunc()** - Simply removes the decimal part (towards zero)
- **Math.floor()** - Always rounds DOWN (towards negative infinity)
- **Math.round()** - Rounds to NEAREST integer (standard rounding)
- **Math.ceil()** - Always rounds UP (towards positive infinity)

```javascript
console.log(Math.trunc(10.9));   // 10
console.log(Math.floor(10.9));   // 10
console.log(Math.round(10.9));   // 11
console.log(Math.ceil(10.9));    // 11

console.log(Math.trunc(-10.5));  // -10
console.log(Math.floor(-10.5));  // -11
console.log(Math.round(-10.5));  // -10
console.log(Math.ceil(-10.5));   // -10
```

---

## Question 6: How do you find the Maximum and Minimum values?

**Answer:**
Use `Math.max()` to find the largest value and `Math.min()` to find the smallest:

```javascript
console.log(Math.max(19, 15, 45));    // 45 (largest)
console.log(Math.min(19, 15, 45));    // 15 (smallest)

// Can also use with arrays (using spread operator)
let numbers = [19, 15, 45];
console.log(Math.max(...numbers));    // 45
console.log(Math.min(...numbers));    // 15
```

---

# 🎓 Board Class Important Rules (JAM-PACKED)

## 🔥 MUST REMEMBER RULES

### Rule 1: Math.random() Always Needs Modification
`Math.random()` gives a decimal between 0 and 0.9999..., **never use it directly for integers**.

```javascript
// ❌ WRONG - Will give 0.xxx
console.log(Math.random());

// ✅ CORRECT - For 0-10
console.log(Math.trunc(Math.random() * 10));

// ✅ CORRECT - For specific range (min to max)
let min = 50, max = 100;
let random = Math.trunc(Math.random() * (max - min + 1) + min);
```

---

### Rule 2: Four Rounding Methods are DIFFERENT

All round decimals, but **behave differently**:

| Method | Purpose | Example 10.5 |
|--------|---------|-------------|
| `Math.ceil()` | Always UP | 11 |
| `Math.floor()` | Always DOWN | 10 |
| `Math.round()` | Nearest | 11 |
| `Math.trunc()` | Remove decimal | 10 |

```javascript
// When to use which:
Math.ceil(10.2);      // 11 (round up)
Math.floor(10.8);     // 10 (round down)
Math.round(10.5);     // 11 (nearest - most common)
Math.trunc(10.9);     // 10 (just remove decimal)
```

---

### Rule 3: Negative Numbers Behave Differently!

With **negative numbers**, `Math.floor()` rounds DOWN (towards negative):

```javascript
console.log(Math.floor(10.5));    // 10 (DOWN towards 0)
console.log(Math.floor(-10.5));   // -11 (DOWN towards negative!)
console.log(Math.trunc(-10.5));   // -10 (towards 0)
console.log(Math.round(-10.5));   // -10 (rounds nearest)
```

**Key:** `Math.floor()` and `Math.ceil()` go towards infinity, not towards zero!

---

### Rule 4: Compound Interest Formula Must Be Exact

$$A = P \times (1 + \frac{r}{100})^t$$

Mistakes:
- ❌ `P * (1 + r/100) * t` (multiplies by time, WRONG!)
- ❌ `P * (1 + r)^t` (forgot to divide rate by 100, WRONG!)
- ✅ `P * Math.pow(1 + (r/100), t)` (CORRECT!)

```javascript
// CORRECT
let amount = 1000 * Math.pow(1 + (5/100), 2);  // 1102.50
let ci = amount - 1000;  // 102.50

// WRONG
let amount = 1000 * (1 + 5/100) * 2;  // This calculates simple interest!
```

---

### Rule 5: Triangle Area - Know Both Methods

**Method 1: Base & Height (Simple)**
```javascript
Area = (1/2) * base * height;
```

**Method 2: Heron's Formula (All 3 sides)**
```javascript
s = (a + b + c) / 2;
Area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
```

**When to use which:**
- If you have **base and height** → Use Method 1 (easier)
- If you have **all three sides** → Use Heron's Formula

---

### Rule 6: Math.pow() Must Have Parentheses

```javascript
// ❌ WRONG - Syntax error
Math.pow 2, 3

// ✅ CORRECT
Math.pow(2, 3)        // 8 (2^3)
Math.pow(10, 2)       // 100 (10^2)
```

---

### Rule 7: Spread Operator for Arrays with Math.max/min

```javascript
// ❌ WRONG - max/min need individual values
let numbers = [5, 10, 3];
Math.max(numbers);     // Returns NaN!

// ✅ CORRECT - Use spread operator
Math.max(...numbers);  // 10
Math.min(...numbers);  // 3
```

---

## ⚡ Quick Formula Reference

| Problem | Formula | Code |
|---------|---------|------|
| Absolute Value | \|x\| | `Math.abs(x)` |
| Power | x^n | `Math.pow(x, n)` |
| Square Root | √x | `Math.sqrt(x)` |
| Compound Interest | P(1+r/100)^t | `P * Math.pow(1 + (r/100), t)` |
| Triangle Area | (1/2) × b × h | `(1/2) * base * height` |
| Random Range | min to max | `Math.trunc(Math.random() * (max - min + 1) + min)` |
| OTP (4-digit) | 1000-9999 | `Math.trunc(Math.random() * 9000 + 1000)` |

---

## 💡 Golden Rules (MEMORIZE THIS!)

✅ **RULE 1:** Always use `Math.trunc()` with `Math.random()` for integers  
✅ **RULE 2:** Know the difference between `ceil()`, `floor()`, `round()`, `trunc()`  
✅ **RULE 3:** Compound interest formula has POWER (exponent), not multiplication  
✅ **RULE 4:** Triangle area = (1/2) × base × height (or Heron's if 3 sides)  
✅ **RULE 5:** Always use parentheses: `Math.pow(base, exponent)`  
✅ **RULE 6:** Use spread operator for arrays: `Math.max(...array)`  

---

## 🎯 Exam Level Questions

### Q7: What's the output?
```javascript
console.log(Math.trunc(Math.random() * 10));
```
**Answer:** Random integer from 0-9

### Q8: What's the output?
```javascript
let p = 5000, r = 8, t = 3;
let amount = p * Math.pow(1 + (r/100), t);
console.log(amount);
```
**Answer:** 6298.56 (approximately)

### Q9: What's the output?
```javascript
console.log(Math.floor(-5.5));
console.log(Math.trunc(-5.5));
```
**Answer:** -6 and -5 (floor goes DOWN to infinity, trunc goes to zero)

### Q10: What's the error?
```javascript
let arr = [23, 45, 12, 78];
console.log(Math.max(arr));
```
**Answer:** Returns NaN because max() doesn't accept array directly. Use `Math.max(...arr)` with spread operator

---

## 📌 Take Away

**Don't just memorize**, understand:
1. **Why** `Math.random()` needs modification
2. **When** to use each rounding method
3. **How** compound interest works step by step
4. **What** the spread operator does with arrays
