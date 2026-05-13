# Day 6 - CSS Grid Basics

## Key Concepts Covered

### What is CSS Grid? 
- CSS Grid is a **2D layout system** - control both rows and columns simultaneously
- Flexbox = 1D (rows OR columns)
- Grid = 2D (rows AND columns)

### Grid Container & Items
- **Grid Container** — parent element with `display: grid`
- **Grid Items** — direct child elements placed inside

### Core Properties

#### grid-template-columns
Defines column structure using `fr` units or fixed sizes
```css
grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
```

#### grid-template-rows  
Defines row structure
```css
grid-template-rows: 80px 80px;  /* 2 rows of 80px each */
```

#### fr Unit (Fractional)
- Represents a fraction of available space
- Example: `1fr 2fr` = first column gets 1/3, second gets 2/3
- Responsive and flexible

#### repeat() Function
Avoid repetition when defining columns/rows
```css
repeat(3, 1fr)      /* Same as: 1fr 1fr 1fr */
```

#### gap Property
Creates space between grid items
```css
gap: 10px;          /* 10px between all items */
gap: 20px 10px;     /* 20px rows, 10px columns */
```

### Grid Lines
- Invisible lines that define rows and columns
- Numbered starting from 1
- Used for precise item placement (Day 7)

---

## What You Can Build with CSS Grid

- Dashboard layouts
- Card layouts
- Magazine/newspaper layouts
- Responsive page structures
- Photo galleries
- Complex 2D arrangements

---
