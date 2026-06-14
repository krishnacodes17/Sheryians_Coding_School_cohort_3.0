# Day 24: Advanced DOM Manipulation and Event Handling - Deep Dive Notes

---

## 1. classList Object - Class Management

### What is classList?
- **Purpose**: Manage CSS classes on HTML elements
- **Advantages**: Better than string manipulation of className
- **Methods**: add(), remove(), contains(), toggle(), replace()
- **Return Type**: DOMTokenList object
- **Performance**: Optimized by browsers
- **Modern Standard**: Supported in all modern browsers

### classList.add() - Add Classes

```javascript
// Single class
let element = document.querySelector("h1");
element.classList.add("highlight");

// HTML becomes:
// <h1 class="highlight">Title</h1>

// Multiple classes at once
element.classList.add("active", "bold", "text-center");

// HTML becomes:
// <h1 class="highlight active bold text-center">Title</h1>

// Adding duplicate doesn't add twice
element.classList.add("highlight");
// Still: <h1 class="highlight">Title</h1>

// Real-world example
let card = document.querySelector(".card");
card.classList.add("selected");
card.classList.add("expanded");
card.classList.add("visible");
```

### classList.remove() - Remove Classes

```javascript
let element = document.querySelector("h1");

// Remove single class
element.classList.remove("highlight");

// Multiple classes
element.classList.remove("active", "bold");

// Removing non-existent class doesn't error
element.classList.remove("non-existent");
// No error thrown!

// Real example
let card = document.querySelector(".card");
card.classList.remove("expanded");
card.classList.remove("selected");

// Remove all classes
element.className = "";  // Alternative but less clean
```

### classList.contains() - Check Classes

```javascript
let element = document.querySelector("h1");

// Check single class
if (element.classList.contains("highlight")) {
    console.log("Has highlight class");
}

// Conditional styling based on class
let button = document.querySelector("button");
if (button.classList.contains("disabled")) {
    button.disabled = true;
}

// Real example: Toggle feature based on class
let card = document.querySelector(".card");
if (card.classList.contains("premium")) {
    showPremiumFeatures();
} else {
    showBasicFeatures();
}

// Multiple checks
let element = document.querySelector("div");
let isActive = element.classList.contains("active");
let isVisible = element.classList.contains("visible");

if (isActive && isVisible) {
    console.log("Element is active and visible");
}
```

### classList.toggle() - Add or Remove

```javascript
// Toggle single class (add if not present, remove if present)
let element = document.querySelector("h1");
element.classList.toggle("highlight");

// If class doesn't exist: adds it
// <h1>Title</h1> → <h1 class="highlight">Title</h1>

// If class exists: removes it
// <h1 class="highlight">Title</h1> → <h1>Title</h1>

// Click again: adds it back
// <h1>Title</h1> → <h1 class="highlight">Title</h1>

// Toggle with force parameter
let isActive = true;
element.classList.toggle("active", isActive);  // Adds if true
element.classList.toggle("active", false);     // Removes

// Multiple toggles
element.classList.toggle("light-mode");
element.classList.toggle("dark-mode");

// Real example: Menu toggle
let menu = document.querySelector(".menu");
let menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");  // Show/hide menu
});

// Another example: Theme switcher
let body = document.body;
let themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // If dark-mode: removes it → light mode
    // If no dark-mode: adds it → dark mode
});
```

### classList.replace() - Replace Class

```javascript
// Replace one class with another
let element = document.querySelector("h1");
element.classList.replace("old-class", "new-class");

// Before: <h1 class="old-class">Title</h1>
// After:  <h1 class="new-class">Title</h1>

// Replacing with other classes still present
let card = document.querySelector(".card");
// Before: <div class="card theme-light active">
card.classList.replace("theme-light", "theme-dark");
// After:  <div class="card theme-dark active">

// If source class doesn't exist: no change
element.classList.replace("non-existent", "new-class");
// No error, element unchanged

// Real example: Status indicator
let status = document.querySelector(".status");

// When checking
status.classList.replace("status-pending", "status-checking");

// When complete
status.classList.replace("status-checking", "status-done");

// Another example: Button states
let button = document.querySelector("button");

button.classList.replace("btn-default", "btn-hover");  // On hover
button.classList.replace("btn-hover", "btn-default");  // On leave
```

### classList Reference

```javascript
// Getting DOMTokenList
let classes = element.classList;
console.log(classes);  // DOMTokenList ['highlight', 'active', 'visible']
console.log(classes.length);  // 3
console.log(classes[0]);      // "highlight"

// Iterate through classes
for (let className of element.classList) {
    console.log(className);
}

// Check specific index
if (element.classList.item(0) === "highlight") {
    console.log("First class is highlight");
}
```

---

## 2. Inline Styles and Style Property

### Understanding element.style

```javascript
let element = document.querySelector("div");

// Setting styles
element.style.color = "red";
element.style.backgroundColor = "blue";  // camelCase
element.style.fontSize = "20px";
element.style.padding = "10px 15px";
element.style.marginTop = "20px";

// Getting inline styles
console.log(element.style.color);  // "red"
console.log(element.style.backgroundColor);  // "blue"

// CSS properties with hyphens become camelCase
element.style.border-radius = "5px";  // ❌ Wrong
element.style.borderRadius = "5px";   // ✅ Correct

element.style.font-size = "16px";     // ❌ Wrong
element.style.fontSize = "16px";      // ✅ Correct
```

### Common CSS Properties in JavaScript

```javascript
let element = document.querySelector("div");

// Colors
element.style.color = "#333";
element.style.backgroundColor = "rgb(255, 0, 0)";
element.style.borderColor = "blue";

// Size
element.style.width = "100px";
element.style.height = "50px";
element.style.minWidth = "20px";
element.style.maxHeight = "500px";

// Spacing
element.style.padding = "10px";
element.style.margin = "20px";
element.style.paddingLeft = "15px";
element.style.marginTop = "30px";

// Border
element.style.border = "2px solid black";
element.style.borderRadius = "10px";
element.style.borderWidth = "3px";

// Text
element.style.fontSize = "18px";
element.style.fontWeight = "bold";
element.style.fontFamily = "Arial";
element.style.textAlign = "center";
element.style.lineHeight = "1.5";

// Display and positioning
element.style.display = "block";
element.style.position = "absolute";
element.style.top = "0";
element.style.left = "0";
element.style.zIndex = "10";

// Opacity and transforms
element.style.opacity = "0.5";
element.style.transform = "rotate(45deg)";
element.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";

// Background
element.style.backgroundImage = "url('image.jpg')";
element.style.backgroundSize = "cover";
element.style.backgroundPosition = "center";
```

### Setting Multiple Styles

```javascript
// Method 1: Individual assignments
let button = document.querySelector("button");
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

// Method 2: Using cssText (all at once)
button.style.cssText = `
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

// Method 3: Object approach (better)
Object.assign(element.style, {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px"
});
```

### Getting Computed Styles

```javascript
let element = document.querySelector("div");

// Inline styles only
console.log(element.style.color);  // Works only if inline

// Computed styles (including CSS)
let computedStyle = window.getComputedStyle(element);
console.log(computedStyle.color);
console.log(computedStyle.backgroundColor);
console.log(computedStyle.fontSize);

// Get specific property
let width = window.getComputedStyle(element).width;
console.log(width);  // e.g., "500px"

// Real example
let element = document.querySelector(".card");
let bgColor = window.getComputedStyle(element).backgroundColor;

if (bgColor === "rgb(255, 0, 0)") {
    console.log("Background is red");
}
```

---

## 3. Event Listeners Deep Dive

### addEventListener Basics

```javascript
let button = document.querySelector("button");

// Basic syntax
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
});

// With arrow function
button.addEventListener("click", (event) => {
    console.log("Button clicked!");
});

// With named function
function handleClick(event) {
    console.log("Button clicked!");
}
button.addEventListener("click", handleClick);

// Multiple listeners on same element
button.addEventListener("click", () => {
    console.log("First listener");
});

button.addEventListener("click", () => {
    console.log("Second listener");
});
// Both run when clicked!
```

### Event Object

```javascript
element.addEventListener("click", (event) => {
    // Event information
    console.log(event.type);        // "click"
    console.log(event.target);      // Element clicked
    console.log(event.currentTarget); // Element with listener
    
    // Mouse position
    console.log(event.clientX);     // X from viewport
    console.log(event.clientY);     // Y from viewport
    console.log(event.pageX);       // X from page
    console.log(event.pageY);       // Y from page
    
    // Time
    console.log(event.timeStamp);   // When event occurred
    
    // Keyboard
    console.log(event.key);         // "Enter", "a", etc.
    console.log(event.code);        // "KeyA", "Enter", etc.
    console.log(event.shiftKey);    // true if Shift pressed
    console.log(event.ctrlKey);     // true if Ctrl pressed
    console.log(event.altKey);      // true if Alt pressed
});
```

### Common Events

```javascript
// Mouse Events
element.addEventListener("click", () => {});        // Single click
element.addEventListener("dblclick", () => {});     // Double click
element.addEventListener("mouseenter", () => {});   // Mouse enters
element.addEventListener("mouseleave", () => {});   // Mouse leaves
element.addEventListener("mousemove", () => {});    // Mouse moves
element.addEventListener("mousedown", () => {});    // Mouse button down
element.addEventListener("mouseup", () => {});      // Mouse button up
element.addEventListener("contextmenu", (e) => {    // Right click
    e.preventDefault();
});

// Keyboard Events
document.addEventListener("keydown", (e) => {});    // Key pressed
document.addEventListener("keyup", (e) => {});      // Key released
document.addEventListener("keypress", (e) => {});   // Character typed

// Form Events
input.addEventListener("focus", () => {});          // Focus gained
input.addEventListener("blur", () => {});           // Focus lost
input.addEventListener("change", () => {});         // Value changed
input.addEventListener("input", () => {});          // Real-time typing
form.addEventListener("submit", (e) => {});         // Form submitted

// Window Events
window.addEventListener("load", () => {});          // Page loaded
window.addEventListener("resize", () => {});        // Window resized
window.addEventListener("scroll", () => {});        // Page scrolled

// Touch Events (Mobile)
element.addEventListener("touchstart", () => {});   // Touch starts
element.addEventListener("touchmove", () => {});    // Touch moves
element.addEventListener("touchend", () => {});     // Touch ends
```

### Event Methods

```javascript
element.addEventListener("click", (event) => {
    // Prevent default action
    event.preventDefault();
    // Useful for: form submit, link navigation, context menu
    
    // Stop event bubbling (don't go to parent)
    event.stopPropagation();
    
    // Stop both
    event.stopImmediatePropagation();
});
```

---

## 4. State Management with Flags

### What is a Flag?
- **Definition**: Boolean variable to track state
- **Purpose**: Remember current state of UI
- **Usage**: Toggle between two states
- **Common Pattern**: ON/OFF, show/hide, active/inactive

### Simple Flag Example

```javascript
let isOpen = false;

function toggleMenu() {
    if (isOpen) {
        // Menu is open, close it
        menu.style.display = "none";
        isOpen = false;
    } else {
        // Menu is closed, open it
        menu.style.display = "block";
        isOpen = true;
    }
}

button.addEventListener("click", toggleMenu);
```

### Light Bulb Toggle Example (Day 24 Project)

```javascript
let circle = document.querySelector(".circle");
let button = document.querySelector("button");
let flag = true;  // true = ON (light), false = OFF (dark)

button.addEventListener("click", () => {
    if (flag) {
        // Currently ON, turn OFF
        button.innerText = "OFF";
        circle.style.backgroundColor = "white";
        flag = false;
    } else {
        // Currently OFF, turn ON
        button.innerText = "ON";
        circle.style.backgroundColor = "";  // Reset to CSS
        flag = true;
    }
});

// OR more cleanly with toggle:
button.addEventListener("click", () => {
    flag = !flag;  // Flip the flag
    
    if (flag) {
        button.innerText = "ON";
        circle.style.backgroundColor = "";
    } else {
        button.innerText = "OFF";
        circle.style.backgroundColor = "white";
    }
});
```

### Multiple Flags

```javascript
let isLoggedIn = false;
let isDarkMode = false;
let isLoading = false;

function updateUI() {
    if (isLoggedIn) {
        showUserProfile();
    } else {
        showLoginForm();
    }
    
    if (isDarkMode) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
    
    if (isLoading) {
        showSpinner();
    } else {
        hideSpinner();
    }
}

// Event handlers
loginButton.addEventListener("click", () => {
    isLoggedIn = true;
    updateUI();
});

themeButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    updateUI();
});
```

### Better: Using Object for State

```javascript
// Better than multiple flags
let state = {
    isLoggedIn: false,
    isDarkMode: false,
    isLoading: false,
    userName: ""
};

function updateUI() {
    if (state.isLoggedIn) {
        console.log(`Welcome ${state.userName}`);
    }
    
    document.body.classList.toggle("dark", state.isDarkMode);
    
    if (state.isLoading) {
        showSpinner();
    }
}

// Update state
state.isLoggedIn = true;
state.userName = "Ali";
updateUI();
```

---

## 5. Event Bubbling and Event Delegation

### What is Event Bubbling?

```javascript
// HTML
<div class="parent">
    <button class="child">Click me</button>
</div>

// Events bubble up from child to parent
let parent = document.querySelector(".parent");
let button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button clicked");
});

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

// When button clicked:
// 1. Button event fires: "Button clicked"
// 2. Event bubbles up to parent: "Parent clicked"
// Output:
// Button clicked
// Parent clicked
```

### Stopping Bubbling

```javascript
button.addEventListener("click", (event) => {
    event.stopPropagation();  // Stop bubble
    console.log("Button clicked");
});

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

// Now when button clicked:
// Only: "Button clicked"
// (Parent listener NOT triggered)
```

### Event Delegation Pattern

```javascript
// HTML
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

// ❌ Old way (add listener to each item)
let items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("click", () => {
        console.log(item.textContent);
    });
});
// Problem: New items added later won't have listener!

// ✅ New way (delegation)
let list = document.getElementById("myList");
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});
// Benefit: Works for current AND future items!
```

---

## 6. Common DOM Manipulation Patterns

### Pattern 1: Button Click Toggle

```javascript
let button = document.querySelector("button");
let isActive = false;

button.addEventListener("click", () => {
    isActive = !isActive;
    
    if (isActive) {
        button.classList.add("active");
        button.innerText = "Active";
    } else {
        button.classList.remove("active");
        button.innerText = "Inactive";
    }
});
```

### Pattern 2: Show/Hide Element

```javascript
let toggleButton = document.querySelector(".toggle-btn");
let content = document.querySelector(".content");

toggleButton.addEventListener("click", () => {
    if (content.style.display === "none") {
        content.style.display = "block";
        toggleButton.innerText = "Hide";
    } else {
        content.style.display = "none";
        toggleButton.innerText = "Show";
    }
});

// Better with classList
toggleButton.addEventListener("click", () => {
    content.classList.toggle("hidden");
});
```

### Pattern 3: Color Changing

```javascript
let colorButton = document.querySelector("button");
let box = document.querySelector(".box");
let colors = ["red", "blue", "green", "yellow"];
let colorIndex = 0;

colorButton.addEventListener("click", () => {
    box.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});
```

### Pattern 4: Input Validation

```javascript
let input = document.querySelector("input");
let error = document.querySelector(".error");

input.addEventListener("input", (e) => {
    let value = e.target.value;
    
    if (value.length < 3) {
        error.style.display = "block";
        error.innerText = "At least 3 characters";
    } else {
        error.style.display = "none";
    }
});
```

### Pattern 5: Counter App

```javascript
let count = 0;
let display = document.querySelector(".count");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");

incrementBtn.addEventListener("click", () => {
    count++;
    display.innerText = count;
});

decrementBtn.addEventListener("click", () => {
    count--;
    display.innerText = count;
});
```

---

## 7. Real-World Project: Light Bulb Toggle

### HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>Light Bulb Toggle</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
        <div class="bulb-wrapper">
            <div class="circle"></div>
            <button>ON</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Styling

```css
.wrapper {
    width: 100vw;
    height: 100vh;
    background-color: #000;
}

.bulb-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
}

.circle {
    width: 300px;
    height: 300px;
    border: 3px solid #fff;
    border-radius: 50%;
    background-color: #fff;  /* Default: ON (white light)*/
    transition: background-color 0.3s ease;
}

button {
    font-size: 2em;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #fff;
    color: #000;
}
```

### JavaScript Logic

```javascript
let circle = document.querySelector(".circle");
let button = document.querySelector("button");

let flag = true;  // true = ON, false = OFF

button.addEventListener("click", () => {
    if (flag) {
        // Turn OFF
        button.innerText = "OFF";
        circle.style.backgroundColor = "black";  // Dark light
        flag = false;
    } else {
        // Turn ON
        button.innerText = "ON";
        circle.style.backgroundColor = "white";  // Bright light
        flag = true;
    }
});

// Or with classList
button.addEventListener("click", () => {
    flag = !flag;
    button.innerText = flag ? "ON" : "OFF";
    circle.classList.toggle("off");
});
```

### Improved Version with classList

```css
.circle.off {
    background-color: #1a1a1a;
    box-shadow: 0 0 0 3px #555;
}

.circle {
    background-color: #ffd700;
    box-shadow: 0 0 50px #ffd700;
}
```

```javascript
let circle = document.querySelector(".circle");
let button = document.querySelector("button");
let isOn = true;

button.addEventListener("click", () => {
    isOn = !isOn;
    
    if (isOn) {
        button.innerText = "ON";
        button.classList.remove("off");
        circle.classList.remove("off");
    } else {
        button.innerText = "OFF";
        button.classList.add("off");
        circle.classList.add("off");
    }
});
```

---

## 8. Best Practices

### 1. Cache Element References

```javascript
❌ // Querying every time
button.addEventListener("click", () => {
    document.querySelector(".message").style.display = "block";
});

✅ // Query once
let message = document.querySelector(".message");
button.addEventListener("click", () => {
    message.style.display = "block";
});
```

### 2. Use classList Instead of Style

```javascript
❌ // Inline styles (mixing concerns)
element.style.color = "red";
element.style.fontSize = "20px";
element.style.fontWeight = "bold";

✅ // CSS classes (separation of concerns)
element.classList.add("error");
element.classList.add("large");
element.classList.add("bold");
```

### 3. Proper Event Handling

```javascript
❌ // Multiple similar listeners
button1.addEventListener("click", handleClick);
button2.addEventListener("click", handleClick);
button3.addEventListener("click", handleClick);

✅ // Event delegation
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        handleClick(e);
    }
});
```

### 4. State Management

```javascript
❌ // Scattered state
let isOpen, isLoggedIn, isLoading;

✅ // Centralized state
let state = {
    isOpen: false,
    isLoggedIn: false,
    isLoading: false
};
```

### 5. Meaningful Variable Names

```javascript
❌ // Unclear
let f = true;
let x = document.querySelector("div");

✅ // Clear
let isLightOn = true;
let lightCircle = document.querySelector(".circle");
```

---

## 9. Common Mistakes

### Mistake 1: Not Using addEventListener

```javascript
❌ // Old way (can be overwritten)
button.onclick = function() { console.log("1"); };
button.onclick = function() { console.log("2"); };  // Overwrites!
// Only logs "2"

✅ // Modern way
button.addEventListener("click", () => { console.log("1"); });
button.addEventListener("click", () => { console.log("2"); });
// Both run!
```

### Mistake 2: Modifying Class Names as String

```javascript
❌ // String manipulation (fragile)
element.className = element.className + " active";
element.className = element.className.replace("active", "");

✅ // Using classList (robust)
element.classList.add("active");
element.classList.remove("active");
```

### Mistake 3: Inline Styles for Everything

```javascript
❌ // Hard to maintain
element.style.color = "red";
element.style.fontSize = "20px";
element.style.fontWeight = "bold";
element.style.textAlign = "center";

✅ // Use CSS classes
element.classList.add("error-text");
// CSS file:
// .error-text { color: red; font-size: 20px; font-weight: bold; text-align: center; }
```

### Mistake 4: Forgetting State Management

```javascript
❌ // Assuming state
button.addEventListener("click", () => {
    element.style.display = "block";  // Always shows
});

✅ // Track state
let isVisible = true;
button.addEventListener("click", () => {
    isVisible = !isVisible;
    element.style.display = isVisible ? "block" : "none";
});
```

---

## 10. Performance Tips

### 1. Lazy Load Event Listeners

```javascript
// Don't add listeners until needed
let isListenerAdded = false;

window.addEventListener("scroll", () => {
    if (!isListenerAdded && isNearBottom()) {
        addLoadMoreListener();
        isListenerAdded = true;
    }
});
```

### 2. Debounce Input Events

```javascript
let timeout;
input.addEventListener("input", (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        searchAPI(e.target.value);
    }, 300);
});
```

### 3. Throttle Scroll Events

```javascript
let isThrottled = false;
window.addEventListener("scroll", () => {
    if (!isThrottled) {
        updateProgressBar();
        isThrottled = true;
        
        setTimeout(() => {
            isThrottled = false;
        }, 100);
    }
});
```

---

## 11. Key Takeaways

### classList Methods ✅
- **add()**: Add one or more classes
- **remove()**: Remove one or more classes
- **contains()**: Check if has class
- **toggle()**: Add if missing, remove if present
- **replace()**: Replace one class with another

### Style Manipulation ✅
- Use **style** property for inline styles
- Use **classList** for CSS classes (better)
- CSS properties with hyphens → camelCase in JS
- **cssText** for multiple styles at once

### Event Handling ✅
- **addEventListener**: Modern, recommended way
- **Event object**: Contains useful information
- **Event bubbling**: Events propagate up the DOM
- **stopPropagation()**: Prevent bubbling
- **preventDefault()**: Prevent default action

### State Management ✅
- Use **flags** (boolean) to track state
- Use **objects** for complex state
- Keep state consistent with UI
- Update UI when state changes

### Patterns ✅
- **Toggle**: ON/OFF, show/hide
- **Toggle**: Switch between two states
- **Event delegation**: Handle events on parent
- **Debouncing**: Delay action until user stops
- **Throttling**: Limit frequency of action

---

## 12. Practice Exercises

```javascript
// Exercise 1: Simple Toggle
let toggleBtn = document.querySelector(".toggle");
let content = document.querySelector(".content");

toggleBtn.addEventListener("click", () => {
    content.classList.toggle("hidden");
});

// Exercise 2: Counter
let count = 0;
let display = document.querySelector(".count");
let buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => {
    count++;
    display.innerText = count;
});

buttons[1].addEventListener("click", () => {
    count--;
    display.innerText = count;
});

// Exercise 3: Color Picker
let colors = ["red", "blue", "green"];
let colorBtn = document.querySelector(".color-btn");
let box = document.querySelector(".box");
let colorIndex = 0;

colorBtn.addEventListener("click", () => {
    box.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

// Exercise 4: Form Validation
let input = document.querySelector("input");
let error = document.querySelector(".error");
let submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", (e) => {
    if (input.value.length < 3) {
        error.style.display = "block";
        e.preventDefault();
    } else {
        error.style.display = "none";
    }
});

// Exercise 5: Tab Switcher
let tabs = document.querySelectorAll(".tab");
let panels = document.querySelectorAll(".panel");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        // Remove active from all
        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));
        
        // Add active to clicked
        tab.classList.add("active");
        panels[index].classList.add("active");
    });
});

// Exercise 6: Theme Switcher
let themeBtn = document.querySelector(".theme-btn");
let isDarkMode = false;

themeBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
    themeBtn.innerText = isDarkMode ? "Light Mode" : "Dark Mode";
});

// Exercise 7: Button State
let button = document.querySelector("button");
let isDisabled = false;

button.addEventListener("click", () => {
    button.disabled = true;
    button.innerText = "Loading...";
    isDisabled = true;
    
    // Simulate API call
    setTimeout(() => {
        button.disabled = false;
        button.innerText = "Click me";
        isDisabled = false;
    }, 2000);
});
```

---

This completes the comprehensive DOM manipulation and event handling notes for Day 24!
