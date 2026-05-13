# Day 6 - CSS Grid Fundamentals

## Overview
CSS Grid is a powerful 2D layout system that allows you to control both **rows and columns** simultaneously. Unlike Flexbox (which is 1D), Grid gives you complete control over both dimensions at the same time.

---

## 1. Grid vs Flexbox (Quick Comparison)

| Feature | Flexbox | Grid |
|---------|---------|------|
| Dimensions | 1D (rows OR columns) | 2D (rows AND columns) |
| Best For | Simple layouts, components | Complex page layouts |
| Item Alignment | Sequential | Precise positioning |
| Control Level | Less precise | Very precise |

---

## 2. Basic Grid Terminology

### Grid Container
- The **parent element** with `display: grid`
- Contains and controls all grid items
- Properties applied here affect the entire grid layout

```css
.container {
  display: grid;
}
```

### Grid Items
- The **direct child elements** of the grid container
- Automatically placed in grid cells
- Can be moved to specific positions using grid properties

```html
<div class="container">
  <div class="item">1</div>  <!-- Grid Item -->
  <div class="item">2</div>  <!-- Grid Item -->
  <div class="item">3</div>  <!-- Grid Item -->
</div>
```

---

## 3. Grid Template Columns & Rows

### grid-template-columns
Defines the number and width of columns in the grid.

```css
/* 3 equal columns */
grid-template-columns: 1fr 1fr 1fr;

/* Different widths */
grid-template-columns: 200px 150px 100px;

/* Mixed units */
grid-template-columns: 100px 1fr 2fr;
```

### grid-template-rows
Defines the number and height of rows in the grid.

```css
/* 2 rows with fixed heights */
grid-template-rows: 80px 120px;

/* Auto height rows */
grid-template-rows: auto auto;
```

---

## 4. The `fr` Unit (Fractional Unit)

The **`fr`** unit represents a fraction of the available space in the grid container.

```css
/* 3 equal columns, each takes 1/3 of space */
grid-template-columns: 1fr 1fr 1fr;

/* First column takes 1/3, second takes 2/3 */
grid-template-columns: 1fr 2fr;

/* Can mix with fixed units */
grid-template-columns: 200px 1fr 1fr;
/* First column = 200px, remaining space split equally */
```

**Why use `fr`?**
- Responsive and flexible
- Automatically adjusts when container size changes
- Perfect for responsive layouts

---

## 5. The `repeat()` Function

The **`repeat()`** function helps avoid repetition when defining columns/rows.

### Syntax
```css
repeat(number-of-times, value)
```

### Examples

```css
/* Instead of: 1fr 1fr 1fr 1fr 1fr */
grid-template-columns: repeat(5, 1fr);

/* 3 columns: first 200px, others equal */
grid-template-columns: 200px repeat(2, 1fr);

/* For rows */
grid-template-rows: repeat(3, 100px);

/* Different pattern */
grid-template-columns: repeat(4, 100px 200px);
/* Creates: 100px 200px 100px 200px 100px 200px 100px 200px */
```

---

## 6. The `gap` Property

The **`gap`** property creates space between grid cells (both rows and columns).

```css
/* Same gap for rows and columns */
gap: 10px;

/* Different gaps: row-gap column-gap */
gap: 20px 10px;

/* Or use separate properties */
row-gap: 20px;
column-gap: 10px;
```

**Note:** Gap is space BETWEEN items, not around the entire grid.

---

## 7. Practical Example

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 80px 80px;
      gap: 10px;
      padding: 20px;
      background: #f0f0f0;
    }
    
    .box {
      background: #3498db;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
  </div>
</body>
</html>
```

This creates a **3-column × 2-row grid** with equal column widths and 10px gaps.

---

## 8. Grid Lines (Introduction)

Grid lines are the invisible lines that define grid rows and columns.

```
Column Lines: 0  1     2     3
              |  |     |     |
        0 ----+-----+-----+----
              |  1 |  2 |  3 |
        1 ----+-----+-----+----
              |  4 |  5 |  6 |
        2 ----+-----+-----+----
Row Lines
```

**Note:** We'll explore how to use grid lines for precise item placement in Day 7!

---

## 9. Common Grid Properties Summary

| Property | Purpose | Example |
|----------|---------|---------|
| `display: grid` | Create grid container | `display: grid;` |
| `grid-template-columns` | Define column layout | `repeat(3, 1fr)` |
| `grid-template-rows` | Define row layout | `100px 200px` |
| `gap` | Space between items | `10px` or `10px 20px` |
| `row-gap` | Space between rows | `20px` |
| `column-gap` | Space between columns | `10px` |

---

## 10. Important Concepts for Day 7

### What's Coming Next (CSS Grid Advanced):

1. **Grid Line Numbers** - Placing items using `grid-column` and `grid-row`
   - `grid-column: 1 / 3;` (span from line 1 to line 3)
   - `grid-row: 2 / 4;`

2. **Grid Area Names** - Using `grid-template-areas` for semantic layouts
   - Name regions like "header", "sidebar", "main", "footer"
   - Easier to visualize and manage complex layouts

3. **Auto-placement** - How items automatically fill the grid

4. **Spanning Items** - Making items take multiple rows/columns

5. **Responsive Grids** - Media queries with grid for mobile/tablet/desktop

---

## 11. Best Practices

✅ **DO:**
- Use `1fr` for flexible, responsive layouts
- Use `repeat()` to keep code DRY
- Use `gap` instead of margins for consistency
- Start with simple grids, then add complexity

❌ **DON'T:**
- Use `grid-template-columns` with too many different units (confusing)
- Forget about gap when calculating space
- Mix Grid and Flexbox unnecessarily (use one or the other)
- Use Grid for every single component (simple layouts use Flexbox)

---

## 12. Quick Reference Cheat Sheet

```css
/* Basic Setup */
.container {
  display: grid;
}

/* Columns */
grid-template-columns: 1fr 1fr 1fr;        /* 3 equal */
grid-template-columns: repeat(3, 1fr);    /* Same, less repetition */
grid-template-columns: 200px 1fr 1fr;     /* Mix fixed and flexible */

/* Rows */
grid-template-rows: 100px 200px;
grid-template-rows: repeat(4, 80px);

/* Spacing */
gap: 10px;                 /* All directions */
gap: 10px 20px;           /* rows, columns */

/* Shorthand (columns / rows) */
grid-template: repeat(3, 1fr) / repeat(2, 100px);
```

---

## 13. Practice Exercises for You

1. Create a 4-column grid with equal widths
2. Create a 2-row grid where first row is 100px, second is 200px
3. Add 15px gap between grid items
4. Mix fixed (150px) and flexible (1fr) columns
5. Create a grid with `repeat(6, 1fr)` and 6 items

---

## Summary

- ✅ Grid is 2D layout system (rows + columns)
- ✅ `fr` units are fractional and responsive
- ✅ `repeat()` reduces repetition in code
- ✅ `gap` creates space between items
- ✅ Grid lines enable precise positioning (for Day 7)
- ✅ Grid is perfect for complex, structured layouts

**Ready for Day 7?** You'll learn how to position items precisely using grid lines, create named areas, and make truly responsive layouts! 🚀
