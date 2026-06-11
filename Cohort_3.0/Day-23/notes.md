# Day 23: DOM (Document Object Model) - Deep Dive Notes

---

## 1. Introduction to DOM

### What is the DOM?
- **Definition**: Hierarchical tree representation of HTML document in browser
- **Purpose**: Interface between JavaScript and HTML/CSS
- **Reality**: In-memory representation of webpage structure
- **Access**: JavaScript can read, modify, create, and delete DOM elements
- **Dynamic**: Changes reflect immediately in browser
- **API**: Methods and properties to interact with page

### DOM vs HTML
```javascript
// HTML (Static, file content)
<div id="app">
    <h1>Hello</h1>
    <p>World</p>
</div>

// DOM (Dynamic, in-memory tree)
// Same structure but can be modified:
document.getElementById("app").innerHTML = "Changed!";
// Now shows "Changed!" instead of original HTML
```

### Why DOM Matters?
- **Interaction**: React to user events (clicks, input, etc.)
- **Updates**: Change page content without reload
- **Validation**: Check user input in real-time
- **Styling**: Modify CSS dynamically
- **Performance**: Direct DOM access is fastest
- **Animation**: Smooth transitions and effects
- **Real-world**: Every interactive website uses DOM

---

## 2. How Browser Works: Complete Pipeline

### The Complete Browser Rendering Pipeline

```
┌─────────────────────────────────────────────────────────────┐
│           BROWSER RECEIVES RESPONSE (HTML/CSS/JS)          │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
    ┌───▼────┐                   ┌───▼────┐
    │  HTML  │                   │  CSS   │
    └───┬────┘                   └───┬────┘
        │                             │
    ┌───▼────────────┐            ┌──▼──────────────┐
    │ Tokenization   │            │ CSS Parser      │
    │ & Parsing      │            │ & Parsing       │
    └───┬────────────┘            └──┬──────────────┘
        │                             │
    ┌───▼─────────────────────────────▼────┐
    │     DOM Tree Creation                 │
    │  (Hierarchical object structure)      │
    └───┬──────────────────────────┬────────┘
        │                          │
        │                      ┌───▼──────────┐
        │                      │ CSSOM Tree   │
        │                      │ (CSS Object  │
        │                      │  Model)      │
        │                      └───┬──────────┘
        │                          │
        └──────────────┬───────────┘
                       │
                   ┌───▼──────────────┐
                   │  Render Tree     │
                   │ (DOM + CSSOM)    │
                   │ (Visible only)   │
                   └───┬──────────────┘
                       │
                   ┌───▼──────────────┐
                   │  Layout          │
                   │ (Calculate size  │
                   │  & position)     │
                   └───┬──────────────┘
                       │
                   ┌───▼──────────────┐
                   │  Paint           │
                   │ (Draw pixels)    │
                   └───┬──────────────┘
                       │
                   ┌───▼──────────────┐
                   │  Composite       │
                   │ (Combine layers) │
                   └───┬──────────────┘
                       │
                   ┌───▼──────────────┐
                   │  Display on      │
                   │  Screen          │
                   └──────────────────┘
```

---

## 3. Parsing and Tokenization

### HTML Parsing Process

```javascript
// Original HTML
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <div id="app">
            <h1>Hello</h1>
            <p>World</p>
        </div>
    </body>
</html>

// Browser Tokenizer breaks it into tokens:
StartTag: <html>
StartTag: <head>
StartTag: <title>
Text: "My Page"
EndTag: </title>
EndTag: </head>
StartTag: <body>
StartTag: <div id="app">
StartTag: <h1>
Text: "Hello"
EndTag: </h1>
StartTag: <p>
Text: "World"
EndTag: </p>
EndTag: </div>
EndTag: </body>
EndTag: </html>

// Then Parser creates DOM tree from tokens
```

### What is Tokenization?
- **Breaking**: HTML string split into meaningful tokens
- **Tokens**: Opening tags, closing tags, text content
- **Sequential**: Happens left-to-right, top-to-bottom
- **Error Recovery**: Browser fixes malformed HTML

### DOM Tree Construction

```
HTML Document
│
├── DOCTYPE
├── <html>
│   ├── <head>
│   │   ├── <title>
│   │   │   └── Text: "My Page"
│   │   └── <meta>
│   └── <body>
│       ├── <h1>
│       │   └── Text: "Hello"
│       ├── <p>
│       │   └── Text: "World"
│       └── <footer>
│           └── Text: "Footer"
```

```javascript
// In JavaScript, access tree nodes:
document.documentElement          // <html>
document.head                     // <head>
document.body                     // <body>
document.querySelector("h1")      // <h1> element
```

---

## 4. Render Tree and CSSOM

### What is CSSOM?
- **Definition**: CSS Object Model tree
- **Purpose**: Represents all CSS rules and their relationships
- **Creation**: Browser parses CSS into structured tree
- **Merge**: Combines with DOM to create Render Tree

### CSSOM Example

```css
body {
    font-family: Arial;
    color: black;
}

h1 {
    color: blue;
    font-size: 32px;
}

.highlight {
    background-color: yellow;
}
```

```
Browser creates CSSOM tree:
├── body
│   ├── font-family: Arial
│   └── color: black
├── h1
│   ├── color: blue
│   └── font-size: 32px
└── .highlight
    └── background-color: yellow
```

### Render Tree (DOM + CSSOM)

```
Render Tree combines:
- DOM Tree structure
- CSSOM styles
- Only VISIBLE elements (not display:none)

Example:
html
├── body
│   ├── h1 (blue, 32px)
│   ├── p (black, Arial)
│   └── .highlight (yellow bg)

Hidden elements (display:none) NOT in Render Tree
```

### What's NOT in Render Tree?
```javascript
// These are in DOM but NOT in Render Tree:

// 1. display: none
<div style="display: none;">Hidden</div>

// 2. <head> section (no visual content)
<head>
    <title>Title</title>
    <script>...</script>
</head>

// 3. <style> and <script> tags
<style>/* CSS rules */</style>
<script>// JavaScript</script>

// visibility: hidden IS in Render Tree (takes space)
<div style="visibility: hidden;">Takes space but invisible</div>
```

---

## 5. Layout and Paint Process

### Layout (Reflow)
- **Purpose**: Calculate exact position and size of each element
- **Output**: Coordinates (x, y, width, height) for each element
- **When**: Initial render, window resize, DOM changes
- **Impact**: Expensive operation, should minimize

```javascript
// Layout Example
// Before Layout:
// - Know HTML structure
// - Know CSS rules
// - DON'T know positions

// After Layout:
// - Know exact pixel position of every element
// - Example:
  h1 {
    x: 0,
    y: 10,
    width: 500,
    height: 40
  }
  
  p {
    x: 0,
    y: 60,
    width: 500,
    height: 20
  }
```

### Paint (Rasterization)
- **Purpose**: Draw pixels for each element on screen
- **What**: Colors, borders, shadows, text, etc.
- **When**: After layout
- **Impact**: GPU accelerated in modern browsers

```javascript
// Paint Example
// For each element, browser draws:
// 1. Background colors
// 2. Borders
// 3. Text
// 4. Shadows
// 5. Other decorations

// Modern optimization:
// - Paint layers are cached
// - Only repaint changed parts
// - GPU acceleration for smooth animations
```

### Composite
- **Purpose**: Combine paint layers into final image
- **Layers**: Separate layers for different stacking contexts
- **Performance**: Very fast on modern GPUs

---

## 6. Selecting DOM Elements

### Method 1: getElementById()

```javascript
// SELECT by ID
let element = document.getElementById("nav");

// Returns: Single element or null if not found
// Performance: Fastest (direct lookup)

// HTML:
<nav id="nav">...</nav>

// JavaScript:
let nav = document.getElementById("nav");
console.log(nav);  // <nav> element
```

### Method 2: getElementsByClassName()

```javascript
// SELECT by class
let elements = document.getElementsByClassName("card");

// Returns: HTMLCollection (live, updates automatically)
// Multiple elements with same class

// HTML:
<div class="card">...</div>
<div class="card">...</div>
<div class="card">...</div>

// JavaScript:
let cards = document.getElementsByClassName("card");
console.log(cards.length);  // 3
console.log(cards[0]);      // First card

// Loop through
for (let card of cards) {
    console.log(card);
}
```

### Method 3: getElementsByTagName()

```javascript
// SELECT by tag name
let headings = document.getElementsByTagName("h1");
let buttons = document.getElementsByTagName("button");

// Returns: HTMLCollection (live)
// All elements of specific tag

// HTML:
<h1>Title 1</h1>
<h1>Title 2</h1>
<h1>Title 3</h1>

// JavaScript:
let h1s = document.getElementsByTagName("h1");
console.log(h1s.length);  // 3

// Add class to all h1s
for (let h1 of h1s) {
    h1.classList.add("highlight");
}
```

### Method 4: querySelector()

```javascript
// SELECT using CSS selector (ONE element)
let element = document.querySelector("selector");

// Returns: First matching element or null

// Examples:
document.querySelector("#nav");              // ID selector
document.querySelector(".card");             // Class selector
document.querySelector("h1");                // Tag selector
document.querySelector("div.highlight");     // Tag + class
document.querySelector("[data-id='5']");     // Attribute selector
document.querySelector("div > h1");          // Child selector
document.querySelector("ul li:first-child"); // Pseudo-selector

// Real example:
let mainCard = document.querySelector(".card.main");
console.log(mainCard);  // First element with class "card main"
```

### Method 5: querySelectorAll()

```javascript
// SELECT using CSS selector (ALL matching elements)
let elements = document.querySelectorAll("selector");

// Returns: NodeList (static snapshot, not live)
// All matching elements

// Examples:
document.querySelectorAll(".card");              // All with class
document.querySelectorAll("button");             // All buttons
document.querySelectorAll("div.container p");    // Nested selector
document.querySelectorAll("[data-type='user']"); // Attribute

// Real examples:
let cards = document.querySelectorAll(".card");
console.log(cards.length);  // How many cards

// Loop through
cards.forEach((card) => {
    card.style.backgroundColor = "blue";
});

// Convert to Array (for array methods)
let cardsArray = Array.from(cards);
// or
let cardsArray = [...cards];
```

### Comparison Table

| Method | Selector | Returns | Live? | Performance |
|--------|----------|---------|-------|-------------|
| getElementById() | ID only | Element/null | No | Fastest ✅ |
| getElementsByClassName() | Class only | HTMLCollection | Yes | Fast |
| getElementsByTagName() | Tag only | HTMLCollection | Yes | Fast |
| querySelector() | Any CSS | Element/null | No | Slower |
| querySelectorAll() | Any CSS | NodeList | No | Slower |

```javascript
// Performance comparison:
// ✅ Fastest: getElementById()
// ✅ Fast: getElementsByClassName(), getElementsByTagName()
// ⚠️ Slower: querySelector(), querySelectorAll()
// → Use simpler selectors when possible

// For performance-critical code:
let fastWay = document.getElementById("app");          // Fast
let slowerWay = document.querySelector("#app");        // Slower
```

---

## 7. HTMLCollection vs NodeList

### HTMLCollection
- **Type**: Live collection
- **Updates**: Changes automatically when DOM changes
- **Index**: Numeric indexes
- **Methods**: length, item(), namedItem()
- **Methods available**: forEach NOT available (older)
- **From**: getElementsByClassName(), getElementsByTagName()

```javascript
// HTMLCollection is LIVE
let divs = document.getElementsByTagName("div");
console.log(divs.length);  // 3

// Add new div
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

console.log(divs.length);  // 4 - automatically updated!

// Loop through HTMLCollection
for (let i = 0; i < divs.length; i++) {
    console.log(divs[i]);
}

// Careful: Don't add/remove while looping!
// ❌ Wrong: Collection changes during iteration
for (let div of divs) {
    divs.removeChild(div);  // Can skip elements
}

// ✅ Correct: Convert to Array first
let divsArray = Array.from(divs);
divsArray.forEach(div => {
    divs.removeChild(div);
});
```

### NodeList
- **Type**: Static snapshot (mostly)
- **Updates**: Doesn't automatically change
- **Index**: Numeric indexes
- **Methods**: length, item()
- **Methods available**: forEach() available
- **From**: querySelectorAll()

```javascript
// NodeList is STATIC
let paragraphs = document.querySelectorAll("p");
console.log(paragraphs.length);  // 3

// Add new paragraph
let newP = document.createElement("p");
document.body.appendChild(newP);

console.log(paragraphs.length);  // Still 3 - not updated!

// Loop through NodeList (forEach available)
paragraphs.forEach((p, index) => {
    console.log(index, p);
});

// Convert to Array
let paragraphsArray = Array.from(paragraphs);
```

### Key Differences

```javascript
// HTML
<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div>

// HTMLCollection (LIVE)
let htmlCol = document.getElementsByClassName("item");
console.log(htmlCol.length);  // 3

let newDiv = document.createElement("div");
newDiv.className = "item";
document.body.appendChild(newDiv);
console.log(htmlCol.length);  // 4 - updated!

// NodeList (STATIC)
let nodeList = document.querySelectorAll(".item");
console.log(nodeList.length);  // 3

document.body.appendChild(newDiv);
console.log(nodeList.length);  // Still 3 - NOT updated

// Practical: Convert to Array for safety
let items = Array.from(document.querySelectorAll(".item"));
items.forEach(item => {
    console.log(item);
});
```

---

## 8. Accessing and Modifying Elements

### Reading Element Properties

```javascript
let element = document.getElementById("app");

// Text content
console.log(element.textContent);  // All text, no HTML
console.log(element.innerText);    // Visible text only

// HTML content
console.log(element.innerHTML);    // Inner HTML string

// Attributes
console.log(element.id);           // "app"
console.log(element.className);    // Class names
console.log(element.getAttribute("data-id"));  // Custom attributes

// Style
console.log(element.style.color);  // Inline style
console.log(element.style.fontSize);  // Inline style

// Size and position
console.log(element.offsetWidth);  // Including border and padding
console.log(element.offsetHeight);
console.log(element.offsetLeft);   // Position from parent
console.log(element.offsetTop);
```

### Modifying Element Content

```javascript
let element = document.getElementById("app");

// 1. Using textContent (safe, no HTML parsing)
element.textContent = "New text";
// Sets: <div>New text</div>

// 2. Using innerHTML (parses HTML)
element.innerHTML = "<h1>New</h1><p>Content</p>";
// Sets: <div><h1>New</h1><p>Content</p></div>

// 3. Using innerText (visible text)
element.innerText = "Visible text";

// ⚠️ Security Note:
// innerHTML can have XSS vulnerabilities
let userInput = "<img src=x onerror='alert(\"Hacked!\")'>";
element.innerHTML = userInput;  // ❌ DANGEROUS
element.textContent = userInput; // ✅ Safe
```

### Modifying Attributes

```javascript
let button = document.querySelector("button");

// Set attribute
button.setAttribute("disabled", "true");
button.setAttribute("data-id", "123");

// Get attribute
let id = button.getAttribute("data-id");  // "123"

// Remove attribute
button.removeAttribute("disabled");

// Check if has attribute
if (button.hasAttribute("disabled")) {
    console.log("Button is disabled");
}

// Direct property access (for common attributes)
button.id = "btn1";
button.className = "primary";
button.disabled = true;
```

### Modifying Classes

```javascript
let element = document.getElementById("card");

// Add single class
element.classList.add("highlight");

// Add multiple classes
element.classList.add("active", "visible");

// Remove class
element.classList.remove("highlight");

// Toggle class (add if not present, remove if present)
element.classList.toggle("highlight");

// Check if has class
if (element.classList.contains("active")) {
    console.log("Element is active");
}

// Replace class
element.classList.replace("old-class", "new-class");

// HTML result:
<div id="card" class="highlight active visible">...</div>
```

### Modifying Styles

```javascript
let element = document.getElementById("box");

// Set inline styles
element.style.color = "red";
element.style.backgroundColor = "blue";  // camelCase for CSS properties
element.style.fontSize = "20px";
element.style.padding = "10px 15px";

// Get inline style
console.log(element.style.color);  // "red"

// Set multiple styles
element.style.cssText = "color: red; background: blue; font-size: 20px;";

// Complex styling
element.style.borderRadius = "8px";
element.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";

// HTML result:
<div id="box" style="color: red; background: blue; font-size: 20px;"></div>

// Note: Inline styles have high specificity
// Better approach: Use CSS classes + JavaScript toggles
```

---

## 9. Creating and Removing Elements

### Creating Elements

```javascript
// Create element
let newDiv = document.createElement("div");
newDiv.textContent = "Hello";
newDiv.id = "new-element";
newDiv.className = "card";

// Create element with properties
let newButton = document.createElement("button");
newButton.textContent = "Click me";
newButton.setAttribute("type", "button");
newButton.classList.add("btn", "primary");

// Create text node (plain text)
let textNode = document.createTextNode("Some text");

// Create from HTML string (alternative)
let container = document.createElement("div");
container.innerHTML = `
    <h1>Title</h1>
    <p>Description</p>
    <button>Click</button>
`;
```

### Adding Elements to DOM

```javascript
let parent = document.getElementById("app");
let newElement = document.createElement("div");
newElement.textContent = "New content";

// 1. appendChild (add at end)
parent.appendChild(newElement);
// Result: <div id="app">...existing...<div>New content</div></div>

// 2. insertBefore (add at specific position)
let firstChild = parent.firstChild;
parent.insertBefore(newElement, firstChild);
// Result: <div id="app"><div>New content</div>...existing...</div>

// 3. append (modern, multiple elements)
parent.append(newElement, "text", anotherElement);

// 4. prepend (add at beginning)
parent.prepend(newElement);

// 5. insertAdjacentHTML (add HTML near element)
let element = document.getElementById("target");
element.insertAdjacentHTML("beforebegin", "<h1>Before</h1>");
element.insertAdjacentHTML("afterbegin", "<p>Start</p>");
element.insertAdjacentHTML("beforeend", "<p>End</p>");
element.insertAdjacentHTML("afterend", "<h1>After</h1>");

// Result:
// <h1>Before</h1>
// <div id="target">
//   <p>Start</p>
//   ...existing...
//   <p>End</p>
// </div>
// <h1>After</h1>
```

### Removing Elements

```javascript
// Remove element from DOM
let element = document.getElementById("card");
element.remove();  // Modern way

// Or using parent
let parent = element.parentElement;
parent.removeChild(element);

// Remove all children
let container = document.getElementById("app");
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

// Modern way to clear
container.innerHTML = "";  // ⚠️ Can have security issues

// Safe way to clear
container.textContent = "";

// Remove multiple elements
document.querySelectorAll(".temp").forEach(el => {
    el.remove();
});
```

---

## 10. Event Listeners and Handling

### Adding Event Listeners

```javascript
let button = document.querySelector("button");

// 1. addEventListener (Recommended)
button.addEventListener("click", function() {
    console.log("Clicked!");
});

// With arrow function
button.addEventListener("click", () => {
    console.log("Clicked!");
});

// With named function
function handleClick() {
    console.log("Clicked!");
}
button.addEventListener("click", handleClick);

// 2. Inline (NOT recommended)
// <button onclick="handleClick()">Click</button>

// 3. Property assignment (can be overwritten)
button.onclick = function() {
    console.log("Clicked!");
};
```

### Common Events

```javascript
// Mouse Events
element.addEventListener("click", (event) => {});
element.addEventListener("dblclick", (event) => {});
element.addEventListener("mouseenter", (event) => {});
element.addEventListener("mouseleave", (event) => {});
element.addEventListener("mousemove", (event) => {});

// Keyboard Events
document.addEventListener("keydown", (event) => {});
document.addEventListener("keyup", (event) => {});
document.addEventListener("keypress", (event) => {});

// Form Events
input.addEventListener("change", (event) => {});
input.addEventListener("input", (event) => {});  // Real-time
form.addEventListener("submit", (event) => {});

// Window Events
window.addEventListener("resize", (event) => {});
window.addEventListener("scroll", (event) => {});
window.addEventListener("load", (event) => {});

// Focus Events
input.addEventListener("focus", (event) => {});
input.addEventListener("blur", (event) => {});
```

### Event Object

```javascript
button.addEventListener("click", (event) => {
    console.log(event.type);           // "click"
    console.log(event.target);         // Element clicked
    console.log(event.currentTarget);  // Element with listener
    console.log(event.clientX);        // Mouse X position
    console.log(event.clientY);        // Mouse Y position
    console.log(event.key);            // Key pressed (keyboard)
    console.log(event.preventDefault()); // Stop default action
});

// Prevent default action
form.addEventListener("submit", (event) => {
    event.preventDefault();  // Don't submit form
    // Do custom submission
});

// Stop event propagation
button.addEventListener("click", (event) => {
    event.stopPropagation();  // Don't bubble up
});
```

### Removing Event Listeners

```javascript
function handleClick() {
    console.log("Clicked!");
}

let button = document.querySelector("button");

// Add listener (need reference to function)
button.addEventListener("click", handleClick);

// Remove listener (must use same reference)
button.removeEventListener("click", handleClick);

// ❌ Won't work (different function reference)
button.removeEventListener("click", () => {
    console.log("Clicked!");
});
```

---

## 11. Event Delegation

### What is Event Delegation?
- **Concept**: Handle events on parent instead of individual elements
- **Benefit**: Dynamically added elements are handled automatically
- **Performance**: Fewer event listeners = faster
- **Real-world**: Used in all modern frameworks

### Event Delegation Example

```javascript
// ❌ Without delegation (problem with dynamic elements)
let buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
    btn.addEventListener("click", handleClick);
});
// New buttons added to DOM are NOT handled!

// ✅ With delegation
let container = document.getElementById("app");
container.addEventListener("click", (event) => {
    // Check if clicked element is a button
    if (event.target.classList.contains("btn")) {
        handleClick(event);
    }
});
// All current AND future buttons are handled!

function handleClick(event) {
    console.log("Button clicked!", event.target);
}
```

### Real-World: Todo App

```javascript
// HTML
<ul id="todoList">
    <li data-id="1">
        <span>Buy milk</span>
        <button class="delete">Delete</button>
    </li>
    <li data-id="2">
        <span>Buy bread</span>
        <button class="delete">Delete</button>
    </li>
</ul>

// JavaScript - Single listener handles all delete buttons
let todoList = document.getElementById("todoList");

todoList.addEventListener("click", (event) => {
    // Check if delete button clicked
    if (event.target.classList.contains("delete")) {
        let todoItem = event.target.parentElement;
        let todoId = todoItem.dataset.id;
        
        // Delete from database
        deleteTodo(todoId);
        
        // Remove from DOM
        todoItem.remove();
    }
});

// When new todo is added, delete still works without adding new listener!
function addTodo(text) {
    let li = document.createElement("li");
    li.dataset.id = generateId();
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete">Delete</button>
    `;
    todoList.appendChild(li);
    // Delete button works immediately due to event delegation!
}
```

---

## 12. DOM Traversal

### Parent and Child Navigation

```javascript
let element = document.getElementById("card");

// Parent elements
console.log(element.parentElement);     // Immediate parent
console.log(element.parentNode);        // Parent node (same for elements)
console.log(element.closest("div"));    // Closest ancestor matching selector

// Children
console.log(element.children);          // HTMLCollection of element children
console.log(element.childNodes);        // NodeList including text nodes
console.log(element.firstChild);        // First child (can be text node)
console.log(element.firstElementChild); // First element child
console.log(element.lastChild);         // Last child (can be text node)
console.log(element.lastElementChild);  // Last element child

// Siblings
console.log(element.nextSibling);       // Next sibling (can be text node)
console.log(element.nextElementSibling);// Next element sibling
console.log(element.previousSibling);   // Previous sibling
console.log(element.previousElementSibling); // Previous element sibling
```

### Tree Navigation Example

```javascript
// HTML
<div id="app">
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article id="article1">
            <h1>Title</h1>
            <p>Content</p>
        </article>
    </main>
</div>

// Navigation
let link = document.querySelector("a");

// Go up
link.parentElement           // <li>
link.parentElement.parentElement  // <ul>
link.closest("header")       // <header>
link.closest("div")          // <div id="app">

// Go down and across
let article = document.getElementById("article1");
let title = article.firstElementChild;  // <h1>
let content = title.nextElementSibling; // <p>

// Go up and across
let para = document.querySelector("p");
let header = para.closest("main").previousElementSibling; // <header>
```

---

## 13. Common Mistakes

### Mistake 1: Not Waiting for DOM Ready

```javascript
❌ // Script runs before elements exist
<head>
    <script>
        let button = document.querySelector("button");
        button.addEventListener("click", () => {});  // Error: button is null
    </script>
</head>
<body>
    <button>Click</button>
</body>

✅ // Solution 1: Put script at end of body
<body>
    <button>Click</button>
    <script>
        let button = document.querySelector("button");
        button.addEventListener("click", () => {});  // Works!
    </script>
</body>

✅ // Solution 2: Wait for DOM load
<head>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            let button = document.querySelector("button");
            button.addEventListener("click", () => {});  // Works!
        });
    </script>
</head>
```

### Mistake 2: Modifying While Looping HTMLCollection

```javascript
❌ // Looping HTMLCollection while modifying
let divs = document.getElementsByTagName("div");
for (let div of divs) {
    document.body.removeChild(div);  // Can skip elements!
}

✅ // Solution: Convert to Array first
let divs = document.getElementsByTagName("div");
let divsArray = Array.from(divs);  // Static copy
divsArray.forEach(div => {
    document.body.removeChild(div);
});
```

### Mistake 3: Using innerHTML with User Input

```javascript
❌ // XSS vulnerability
let userInput = '<img src=x onerror="alert(\'Hacked!\')">';
element.innerHTML = userInput;  // Dangerous!

✅ // Use textContent for user input
element.textContent = userInput;  // Safe

✅ // Or sanitize HTML
element.innerHTML = sanitizeHTML(userInput);
```

### Mistake 4: Performance: Accessing offsetHeight in Loop

```javascript
❌ // Triggers layout recalculation for each iteration
let elements = document.querySelectorAll(".card");
for (let el of elements) {
    console.log(el.offsetHeight);  // Layout recalculation! (Slow)
}

✅ // Cache values
let elements = document.querySelectorAll(".card");
let heights = Array.from(elements).map(el => el.offsetHeight);
for (let height of heights) {
    console.log(height);
}

✅ // Or batch DOM reads and writes
let elements = document.querySelectorAll(".card");
let heights = [];
// Read phase
elements.forEach(el => heights.push(el.offsetHeight));
// Write phase
elements.forEach((el, i) => {
    el.style.height = heights[i] + "px";
});
```

### Mistake 5: Event Listener Not Removed

```javascript
❌ // Memory leak: listener not removed
function setupListener() {
    button.addEventListener("click", handleClick);
    // When component removed, listener still exists!
}

✅ // Properly remove listener
function setupListener() {
    button.addEventListener("click", handleClick);
}

function cleanup() {
    button.removeEventListener("click", handleClick);
}
```

---

## 14. Performance Best Practices

### Batch DOM Operations

```javascript
❌ // Inefficient: Many layout recalculations
let fragment = [];
for (let i = 0; i < 1000; i++) {
    let div = document.createElement("div");
    div.textContent = i;
    document.body.appendChild(div);  // Triggers layout each time!
}

✅ // Efficient: Use DocumentFragment
let fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    let div = document.createElement("div");
    div.textContent = i;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);  // Single layout!

✅ // Or use innerHTML
let html = "";
for (let i = 0; i < 1000; i++) {
    html += `<div>${i}</div>`;
}
document.body.innerHTML = html;
```

### Lazy Queries

```javascript
❌ // Query DOM multiple times
function processCards() {
    console.log(document.querySelectorAll(".card").length);
    document.querySelectorAll(".card").forEach(card => {
        card.style.color = "red";
    });
    document.querySelectorAll(".card").forEach(card => {
        card.classList.add("active");
    });
}

✅ // Query once, reuse
function processCards() {
    let cards = document.querySelectorAll(".card");
    console.log(cards.length);
    cards.forEach(card => {
        card.style.color = "red";
        card.classList.add("active");
    });
}
```

### Use Classes Instead of Inline Styles

```javascript
❌ // Inline styles for animations (triggers reflow)
for (let i = 0; i < 100; i++) {
    element.style.left = i + "px";  // Layout recalc each time!
}

✅ // Use CSS animations
// CSS
.animate {
    animation: slide 1s ease-out;
}

@keyframes slide {
    from { left: 0; }
    to { left: 100px; }
}

// JavaScript
element.classList.add("animate");
```

---

## 15. Real-World Applications

### Application 1: Form Validation

```javascript
let form = document.getElementById("myForm");
let emailInput = document.getElementById("email");
let emailError = document.getElementById("emailError");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Invalid email";
        emailError.style.display = "block";
        return;
    }
    
    emailError.style.display = "none";
    form.submit();
});

function validateEmail(email) {
    return email.includes("@");
}
```

### Application 2: Dynamic Todo List

```javascript
let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
    if (!todoInput.value.trim()) return;
    
    let li = document.createElement("li");
    li.innerHTML = `
        <span>${todoInput.value}</span>
        <button class="deleteBtn">Delete</button>
    `;
    
    todoList.appendChild(li);
    todoInput.value = "";
});

todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn")) {
        event.target.parentElement.remove();
    }
});
```

### Application 3: Live Search

```javascript
let searchInput = document.getElementById("search");
let results = document.getElementById("results");

let data = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" }
];

searchInput.addEventListener("input", (event) => {
    let query = event.target.value.toLowerCase();
    
    let filtered = data.filter(item =>
        item.name.toLowerCase().includes(query)
    );
    
    results.innerHTML = filtered
        .map(item => `<div>${item.name}</div>`)
        .join("");
});
```

---

## 16. Key Takeaways

### DOM Basics ✅
- DOM is in-memory tree representation of HTML
- JavaScript can read, modify, create, delete DOM elements
- Browser renders HTML → Tokenize → Parse → DOM Tree → CSSOM → Render Tree → Layout → Paint

### Selection Methods ✅
- getElementById(): Fastest for single element
- getElementsByClassName/TagName(): Fast for multiple
- querySelector/querySelectorAll(): Flexible CSS selectors

### Modification ✅
- textContent: Set plain text (safe)
- innerHTML: Set HTML (can have security issues)
- setAttribute/getAttribute: Manage attributes
- classList: Manage CSS classes
- style: Modify inline styles

### Events ✅
- addEventListener: Recommended way to handle events
- Event delegation: Handle events on parent, works for dynamic elements
- Remove listeners: Prevent memory leaks

### Performance ✅
- Batch DOM operations
- Avoid repeated queries
- Use classes instead of inline styles for animations
- Minimize reflows and repaints

---

## 17. Practice Exercises

```javascript
// Exercise 1: Element Selection
let heading = document.querySelector("h1");
let cards = document.querySelectorAll(".card");
let button = document.getElementById("btn");

// Exercise 2: Modify Elements
let title = document.querySelector("h1");
title.textContent = "New Title";
title.classList.add("highlight");
title.style.color = "blue";

// Exercise 3: Create and Add Elements
let newCard = document.createElement("div");
newCard.className = "card";
newCard.textContent = "New Card";
document.querySelector(".container").appendChild(newCard);

// Exercise 4: Event Listener
let button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log("Button clicked!");
    button.classList.toggle("active");
});

// Exercise 5: Event Delegation
let list = document.getElementById("myList");
list.addEventListener("click", (event) => {
    if (event.target.classList.contains("item")) {
        console.log("Item clicked:", event.target.textContent);
    }
});

// Exercise 6: DOM Traversal
let card = document.querySelector(".card");
let parent = card.parentElement;
let siblings = card.parentElement.children;
siblings.forEach(sibling => {
    console.log(sibling);
});

// Exercise 7: Dynamic List
let input = document.getElementById("input");
let list = document.getElementById("list");
let addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
});

list.addEventListener("click", (event) => {
    event.target.remove();
});
```

---

This completes the comprehensive DOM notes for Day 23!
