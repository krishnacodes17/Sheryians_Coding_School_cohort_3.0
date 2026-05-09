# CSS Day 5: Display & Flexbox Layout

## Topics Overview

Day 5 covers:
1. CSS Display Property
2. Introduction to Flexbox
3. Flex Container Properties
4. Flex Item Properties
5. Practical Flexbox Examples

---

## 1. CSS Display Property

The `display` property controls how an element behaves in the layout.

### `display: block`

Element takes full available width and starts on new line.

```css
.box {
  display: block;
  width: 300px;
  height: 200px;
  margin: 20px;
}
```

**Characteristics:**
- Takes full width (or set width)
- Starts on new line
- Margin and padding work fully

**Default block elements:** `<div>`, `<p>`, `<h1>`, `<section>`, `<header>`, `<footer>`

---

### `display: inline`

Element only takes necessary space and flows with text.

```css
.span-text {
  display: inline;
  margin: 10px;     /* Left/right work, top/bottom don't */
  padding: 10px;    /* Left/right work, top/bottom don't */
  background: blue;
}
```

**Characteristics:**
- Takes only necessary width
- Flows inline with other inline elements
- Top/bottom margin/padding don't work
- Width/height ignored

**Default inline elements:** `<span>`, `<a>`, `<strong>`, `<em>`, `<button>`

---

### `display: inline-block`

Hybrid of inline and block - flows inline but respects width/height.

```css
.card {
  display: inline-block;
  width: 150px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  background: white;
  border: 1px solid #ddd;
}
```

**Characteristics:**
- Flows inline with other elements
- Respects width and height
- Margins and padding work fully
- Can have line-height gaps between elements

**Use When:** Grid layout before flexbox/grid was available

---

### `display: flex` (MOST IMPORTANT ✅)

Creates a flexible container for layout. Elements inside become flex items.

```css
.container {
  display: flex;
  width: 100%;
  height: 300px;
  gap: 10px;
}

.item {
  flex: 1;  /* Equal width */
}
```

**Characteristics:**
- Children are flexbox items
- Extremely powerful for layouts
- Solves many alignment problems
- Modern standard for layouts

**Use When:** Almost all layout situations!

---

### `display: grid`

Creates a grid container for 2D layouts.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  gap: 20px;
}
```

**Characteristics:**
- 2D grid layout
- Powerful for complex layouts
- More control than flexbox

**Use When:** Complex 2D layouts, magazine-style designs

---

### `display: none`

Element is completely hidden and takes no space.

```css
.hidden {
  display: none;  /* Element not rendered at all */
}
```

**Characteristics:**
- Element not rendered
- Takes no space in layout
- Different from `visibility: hidden` (which reserves space)

**Use When:** Hiding elements, toggling visibility with JavaScript

---

### Display Comparison Table

| Display | Width | Height | Line | Margin | Padding | Use |
|---------|-------|--------|------|--------|---------|-----|
| **block** | Full | Set | New | Yes | Yes | Sections |
| **inline** | Auto | No | Same | L/R | L/R | Text |
| **inline-block** | Set | Set | Same | Yes | Yes | Grid (old) |
| **flex** | Flexible | Flexible | Various | Yes | Yes | Layouts |
| **grid** | Flexible | Flexible | Various | Yes | Yes | Complex layouts |
| **none** | Hidden | Hidden | N/A | N/A | N/A | Hide |

---

## 2. Introduction to Flexbox

**Flexbox** is a modern CSS layout system that makes it easy to arrange, distribute, and align items.

### Why Flexbox?

Before flexbox, layouts were difficult:
- ❌ Floats were hacky
- ❌ Positioning broke responsive design
- ❌ Vertical centering was impossible

Flexbox solves all these problems!

### Basic Flexbox Setup

```html
<style>
  .container {
    display: flex;           /* Enable flexbox */
    width: 100%;
    height: 300px;
    background-color: #f0f0f0;
  }
  
  .item {
    width: 100px;
    height: 100px;
    background-color: blue;
    margin: 10px;
  }
</style>

<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

**What happens:**
- `.container` is the **flex container** (parent)
- `.item` are **flex items** (children)
- Items arrange horizontally by default

---

## 3. Flex Container Properties

Properties applied to the parent container.

### `flex-direction`

Controls direction of flex items.

```css
.container {
  display: flex;
  flex-direction: row;        /* Left to right (default) */
  /* flex-direction: column; */    /* Top to bottom */
  /* flex-direction: row-reverse; */    /* Right to left */
  /* flex-direction: column-reverse; */ /* Bottom to top */
}
```

**Values:**
- `row` - Left to right (default)
- `column` - Top to bottom
- `row-reverse` - Right to left
- `column-reverse` - Bottom to top

**Example:**
```html
<style>
  .row { display: flex; flex-direction: row; }
  .column { display: flex; flex-direction: column; }
  
  .item { width: 80px; height: 80px; background: blue; margin: 5px; }
</style>

<div class="row">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<div class="column">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

---

### `justify-content`

Aligns items along the main axis (horizontal by default).

```css
.container {
  display: flex;
  justify-content: center;  /* Center items */
}
```

**Values:**
- `flex-start` - Items at start (default)
- `flex-end` - Items at end
- `center` - Items centered
- `space-between` - Equal space between items
- `space-around` - Equal space around items
- `space-evenly` - Equal space everywhere

**Visual Examples:**
```
flex-start:    [Item1] [Item2] [Item3] [---Space---]
flex-end:      [---Space---] [Item1] [Item2] [Item3]
center:        [---Space] [Item1] [Item2] [Item3] [Space---]
space-between: [Item1] [--Space--] [Item2] [--Space--] [Item3]
space-around:  [Space] [Item1] [Space] [Item2] [Space] [Item3] [Space]
space-evenly:  [Space] [Item1] [Space] [Item2] [Space] [Item3] [Space]
```

**Example:**
```html
<style>
  .container {
    display: flex;
    justify-content: space-between;  /* Spread items out */
    width: 100%;
    height: 100px;
    background: #f0f0f0;
  }
  
  .item { width: 80px; height: 80px; background: blue; }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

---

### `align-items`

Aligns items along the cross axis (vertical by default).

```css
.container {
  display: flex;
  align-items: center;  /* Vertically center items */
  height: 300px;
}
```

**Values:**
- `flex-start` - Items at top
- `flex-end` - Items at bottom
- `center` - Items vertically centered
- `stretch` - Items stretch to fill height (default)
- `baseline` - Items aligned by text baseline

**Example:**
```html
<style>
  .container {
    display: flex;
    align-items: center;    /* Vertically center */
    justify-content: center; /* Horizontally center */
    width: 100%;
    height: 300px;
    background: #f0f0f0;
  }
  
  .item { 
    width: 100px; 
    height: 100px; 
    background: blue; 
  }
</style>

<div class="container">
  <div class="item">Centered!</div>
</div>
```

---

### `flex-wrap`

Controls whether items wrap to new line or shrink.

```css
.container {
  display: flex;
  flex-wrap: wrap;    /* Items wrap to next line */
  /* flex-wrap: nowrap; */  /* Items shrink to fit (default) */
  /* flex-wrap: wrap-reverse; */ /* Wrap in reverse order */
}
```

**Values:**
- `nowrap` - Items stay on one line, shrink if needed (default)
- `wrap` - Items wrap to next line
- `wrap-reverse` - Items wrap in reverse order

**Example:**
```html
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 400px;
    background: #f0f0f0;
    padding: 10px;
  }
  
  .item { 
    width: 150px; 
    height: 150px; 
    background: blue; 
    flex-shrink: 0;  /* Prevent shrinking */
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

---

### `gap`

Sets space between flex items.

```css
.container {
  display: flex;
  gap: 20px;           /* 20px space between items */
  /* gap: 10px 20px; */ /* 10px vertical, 20px horizontal */
}
```

**Example:**
```html
<style>
  .container {
    display: flex;
    gap: 15px;
    padding: 10px;
  }
  
  .item { 
    width: 80px; 
    height: 80px; 
    background: blue; 
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

---

### `align-content`

Aligns wrapped lines (when `flex-wrap: wrap`).

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;  /* Align wrapped lines */
  height: 500px;
}
```

**Values:**
- `flex-start` - Lines at top
- `flex-end` - Lines at bottom
- `center` - Lines centered
- `space-between` - Equal space between lines
- `space-around` - Equal space around lines
- `stretch` - Lines stretch to fill height (default)

---

## 4. Flex Item Properties

Properties applied to children inside flex container.

### `flex-grow`

How much an item grows to fill available space.

```css
.item {
  flex-grow: 1;  /* Grows equally with other items */
}

.item.large {
  flex-grow: 2;  /* Grows twice as much */
}
```

**Example:**
```html
<style>
  .container {
    display: flex;
    gap: 10px;
    width: 100%;
    height: 100px;
  }
  
  .item { 
    background: blue;
    flex-grow: 1;  /* Equal growth */
  }
  
  .item.large {
    flex-grow: 2;  /* Double growth */
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item large">2 (grows more)</div>
  <div class="item">3</div>
</div>
```

**Result:** Item 2 takes up twice as much space as items 1 and 3.

---

### `flex-shrink`

How much an item shrinks when space is limited.

```css
.item {
  flex-shrink: 1;  /* Shrinks normally (default) */
}

.item.important {
  flex-shrink: 0;  /* Doesn't shrink */
}
```

**Example:**
```html
<style>
  .container {
    display: flex;
    gap: 10px;
    width: 300px;
    overflow-x: auto;  /* Scroll if needed */
  }
  
  .item { 
    width: 150px;
    background: blue;
    flex-shrink: 0;  /* Don't shrink */
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

---

### `flex-basis`

Sets the default size of a flex item before space is distributed.

```css
.item {
  flex-basis: 100px;  /* Start at 100px, then grow/shrink */
}
```

**Example:**
```html
<style>
  .item { 
    flex-basis: 150px;  /* Start at 150px */
    flex-grow: 1;       /* Then grow equally */
  }
</style>
```

---

### `flex` Shorthand

Combines `flex-grow`, `flex-shrink`, and `flex-basis`.

```css
.item {
  flex: 1;              /* flex: 1 1 0 */
  /* flex: 1 1 100px; */ /* grow shrink basis */
}
```

**Common patterns:**
```css
flex: 1;           /* Grow equally, don't shrink, basis 0 */
flex: 1 1 auto;    /* Grow and shrink, basis auto */
flex: 0 0 150px;   /* Don't grow/shrink, fixed 150px */
```

---

### `align-self`

Aligns individual item (overrides container's `align-items`).

```css
.item {
  align-self: center;  /* Center this item vertically */
}

.item.top {
  align-self: flex-start;  /* Push this item to top */
}

.item.bottom {
  align-self: flex-end;    /* Push this item to bottom */
}
```

**Example:**
```html
<style>
  .container {
    display: flex;
    align-items: center;  /* Center all items */
    height: 200px;
  }
  
  .item { 
    width: 80px; 
    height: 50px; 
    background: blue; 
  }
  
  .item.top {
    align-self: flex-start;  /* This one goes to top */
  }
</style>

<div class="container">
  <div class="item">Normal</div>
  <div class="item top">Top</div>
  <div class="item">Normal</div>
</div>
```

---

### `order`

Changes the visual order of items (without changing HTML).

```css
.item { order: 1; }
.item.first { order: 0; }  /* Appears first */
.item.last { order: 2; }   /* Appears last */
```

**Example:**
```html
<style>
  .container { display: flex; }
  
  .item { order: 1; background: blue; }
  .item.first { order: 0; background: green; }  /* Appears first */
  .item.last { order: 2; background: red; }     /* Appears last */
</style>

<div class="container">
  <div class="item last">Third (in HTML)</div>
  <div class="item">Second (in HTML)</div>
  <div class="item first">First (in HTML)</div>
</div>
```

**Visual order:** First → Second → Third (despite HTML order)

---

## 5. Practical Flexbox Examples

### Example 1: Horizontal Navigation Bar

```html
<style>
  nav {
    display: flex;
    justify-content: space-between;  /* Space items out */
    align-items: center;
    background-color: navy;
    padding: 10px 20px;
    height: 60px;
  }
  
  nav .logo { 
    color: white; 
    font-size: 24px; 
    font-weight: bold;
  }
  
  nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }
  
  nav a {
    color: white;
    text-decoration: none;
  }
</style>

<nav>
  <div class="logo">MyApp</div>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

---

### Example 2: Card Grid

```html
<style>
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }
  
  .card {
    flex: 1 1 250px;  /* Grow, shrink, base 250px */
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
  }
</style>

<div class="grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```

**Responsive:** On small screens, cards stack. On large screens, multiple cards per row.

---

### Example 3: Horizontal Scrolling Container

```html
<style>
  .scroll-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 10px;
    padding: 10px;
    height: 300px;
    width: 100vw;
    background-color: red;
  }
  
  .item {
    width: 200px;
    height: 200px;
    background-color: cornsilk;
    flex-shrink: 0;  /* Don't shrink */
  }
</style>

<div id="box" class="scroll-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

**Result:** Horizontal scrolling carousel with fixed-width items.

---

### Example 4: Centered Content

```html
<style>
  .center {
    display: flex;
    justify-content: center;  /* Horizontal center */
    align-items: center;      /* Vertical center */
    width: 100%;
    height: 100vh;  /* Full viewport height */
  }
  
  .content {
    text-align: center;
  }
</style>

<div class="center">
  <div class="content">
    <h1>Welcome!</h1>
    <p>Perfectly centered</p>
  </div>
</div>
```

---

### Example 5: Two-Column Layout

```html
<style>
  .container {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
  
  .sidebar {
    flex: 0 0 250px;  /* Fixed 250px width */
  }
  
  .main {
    flex: 1;  /* Takes remaining space */
  }
</style>

<div class="container">
  <aside class="sidebar">
    <p>Sidebar (250px fixed)</p>
  </aside>
  <main class="main">
    <p>Main content (flexible)</p>
  </main>
</div>
```

---

## Flex Cheat Sheet

### Container Properties
```css
display: flex;
flex-direction: row | column | row-reverse | column-reverse;
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
align-items: flex-start | flex-end | center | stretch | baseline;
flex-wrap: nowrap | wrap | wrap-reverse;
gap: 10px;
```

### Item Properties
```css
flex: grow shrink basis;
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;
align-self: auto | flex-start | flex-end | center | stretch;
order: 0;
```

### Common Patterns
```css
/* Equal width items */
.item { flex: 1; }

/* Fixed width, flexible height */
.item { flex: 0 0 250px; }

/* Grow but don't shrink */
.item { flex: 1 0 auto; }

/* Horizontal scroll */
.item { flex: 0 0 200px; }

/* Sidebar layout */
.sidebar { flex: 0 0 250px; }
.main { flex: 1; }

/* Center content */
.container { 
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

## Key Takeaways

✅ `display: flex` is the modern way to do layouts  
✅ Use `justify-content` for horizontal alignment  
✅ Use `align-items` for vertical alignment  
✅ `flex-wrap` controls wrapping behavior  
✅ `gap` sets space between items  
✅ `flex: 1` makes items grow equally  
✅ `flex-shrink: 0` prevents items from shrinking  
✅ `flex-basis` sets the default size  
✅ `order` changes visual order without changing HTML  
✅ Flexbox is one-dimensional (row or column)  
✅ Use CSS Grid for 2D layouts  

---

## Practice Checklist

- [ ] Understand display: block, inline, flex, grid, none
- [ ] Know when to use flexbox vs grid
- [ ] Center content with flexbox
- [ ] Create responsive layouts with flex-wrap
- [ ] Use justify-content for spacing
- [ ] Use align-items for alignment
- [ ] Understand flex shorthand
- [ ] Create two-column layouts with flex
- [ ] Use gap property for spacing
- [ ] Make horizontal scrolling containers
- [ ] Understand flex-grow and flex-shrink
- [ ] Create responsive cards with flexbox
