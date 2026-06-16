# Day 25: Advanced DOM Manipulation and Event Handling - Deep Dive Notes

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
