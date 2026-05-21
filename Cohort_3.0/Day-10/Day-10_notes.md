# Day 10 - CSS Variables, Pseudo-elements & Advanced CSS Concepts

## Overview
Today we explore three powerful CSS features that make your code more maintainable, reusable, and efficient:
1. **CSS Variables** — Reusable values throughout your stylesheet
2. **CSS Pseudo-elements** — ::before and ::after for creative effects
3. **CSS Frameworks** — Introduction to Tailwind CSS

---

## 1. CSS Variables (Custom Properties)

### What Are CSS Variables?
CSS Variables (also called Custom Properties) are placeholders for values that you can reuse throughout your stylesheet. They make your CSS more maintainable and easier to update.

### Why Use CSS Variables?

**Before (Repetitive):**
```css
button {
    background-color: #3b82f6;
    color: #ffffff;
    padding: 8px;
    border-radius: 6px;
}

.card {
    background-color: #3b82f6;
    padding: 8px;
    border-radius: 6px;
}

header {
    background-color: #3b82f6;
}
```

**After (Using Variables):**
```css
:root {
    --primary: #3b82f6;
    --spacing: 8px;
    --radius: 6px;
}

button {
    background-color: var(--primary);
    padding: var(--spacing);
    border-radius: var(--radius);
}

.card {
    background-color: var(--primary);
    padding: var(--spacing);
    border-radius: var(--radius);
}
```

✅ Now if you want to change the primary color, change it in ONE place!

### Defining CSS Variables

#### Global Variables (Using :root)
```css
:root {
    /* Colors */
    --primary: #3b82f6;
    --secondary: #10b981;
    --danger: #ef4444;
    --warning: #f59e0b;
    --text: #1f2937;
    --bg: #ffffff;
    
    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 20px;
    --radius-full: 9999px;
    
    /* Font Sizes */
    --font-xs: 12px;
    --font-sm: 14px;
    --font-md: 16px;
    --font-lg: 18px;
    --font-xl: 24px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15);
}
```

#### Using Global Variables
```css
button {
    background: var(--primary);
    color: var(--text);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    font-size: var(--font-md);
    box-shadow: var(--shadow-md);
}
```

### Local Variables (Scoped)
Define variables within a specific selector for local use:

```css
.card {
    --card-bg: #f3f4f6;
    --card-padding: 16px;
    
    background: var(--card-bg);
    padding: var(--card-padding);
    border-radius: var(--radius-md);
}

.card-header {
    padding: var(--card-padding);  /* ← Uses card's variable */
}
```

### Using CSS Variables

#### Basic Syntax
```css
var(--variable-name)
var(--variable-name, fallback-value)
```

#### Examples
```css
/* Simple usage */
.element {
    color: var(--primary);
}

/* With fallback */
.element {
    color: var(--primary, blue);  /* Use blue if --primary not defined */
}

/* With calculations */
.element {
    padding: calc(var(--spacing-md) * 2);  /* 16px * 2 = 32px */
}
```

### Real-World Example: Design System

```css
:root {
    /* Color Palette */
    --color-blue-50: #eff6ff;
    --color-blue-100: #dbeafe;
    --color-blue-500: #3b82f6;
    --color-blue-600: #2563eb;
    --color-blue-700: #1d4ed8;
    
    --color-green-500: #10b981;
    --color-green-600: #059669;
    
    --color-red-500: #ef4444;
    --color-red-600: #dc2626;
    
    --color-gray-900: #111827;
    --color-gray-800: #1f2937;
    --color-gray-700: #374151;
    --color-white: #ffffff;
    
    /* Typography */
    --font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-size-base: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 20px;
    --line-height-normal: 1.5;
    --line-height-tight: 1.25;
    
    /* Spacing Scale */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-6: 24px;
    --space-8: 32px;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    
    /* Shadows */
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Buttons */
.btn {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-base);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-primary {
    background: var(--color-blue-500);
    color: var(--color-white);
}

.btn-primary:hover {
    background: var(--color-blue-600);
}

.btn-danger {
    background: var(--color-red-500);
    color: var(--color-white);
}

.btn-danger:hover {
    background: var(--color-red-600);
}

/* Cards */
.card {
    background: var(--color-white);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}
```

### Responsive Variables (With Media Queries)

```css
:root {
    --font-size: 16px;
    --spacing: 16px;
    --columns: 1;
}

/* Tablet */
@media (min-width: 768px) {
    :root {
        --font-size: 18px;
        --spacing: 24px;
        --columns: 2;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    :root {
        --font-size: 20px;
        --spacing: 32px;
        --columns: 3;
    }
}

body {
    font-size: var(--font-size);
    padding: var(--spacing);
}

.grid {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
}
```

### Dynamic Variables with JavaScript

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        :root {
            --primary: #3b82f6;
            --spacing: 16px;
        }
        
        .box {
            background: var(--primary);
            padding: var(--spacing);
        }
    </style>
</head>
<body>
    <div class="box">Box with CSS Variables</div>
    
    <script>
        // Change CSS variable dynamically
        document.documentElement.style.setProperty('--primary', '#10b981');
        document.documentElement.style.setProperty('--spacing', '32px');
    </script>
</body>
</html>
```

### CSS Variables Best Practices

✅ **DO:**
- Define global variables in `:root`
- Use consistent naming convention
- Group related variables
- Use variables for colors, spacing, sizes, shadows
- Provide fallback values

❌ **DON'T:**
- Use CSS variables for one-time values
- Nest variables deeply
- Use variables for static values only

---

## 2. CSS Pseudo-elements (::before and ::after)

### What Are Pseudo-elements?
Pseudo-elements create fake elements that don't exist in HTML. They're pure CSS elements used for styling and content.

### ::before vs ::after

| Property | Description |
|----------|-------------|
| `::before` | Creates element BEFORE element's content |
| `::after` | Creates element AFTER element's content |

### Basic Syntax

```css
element::before {
    content: "text or nothing";
    /* Your CSS */
}

element::after {
    content: "text or nothing";
    /* Your CSS */
}
```

### The `content` Property

Required! Defines what appears in the pseudo-element.

```css
/* Text content */
::before {
    content: "→ ";
}

/* Empty (for decorative styling) */
::before {
    content: "";
}

/* Unicode character */
::before {
    content: "✓ ";
}

/* Using attr() to get HTML attribute */
::before {
    content: attr(data-label);
}
```

### Example 1: Add Text Before/After

```html
<h2>Hello World</h2>

<style>
h2::before {
    content: "🎉 ";
}

h2::after {
    content: " 🎉";
}
</style>

<!-- Result: 🎉 Hello World 🎉 -->
```

### Example 2: Decorative Lines

```css
h1 {
    position: relative;
    text-align: center;
    padding: 20px 0;
}

h1::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, #999, transparent);
    z-index: -1;
}

/* Result: ─────── TITLE ─────── */
```

### Example 3: Quotes

```css
blockquote {
    font-size: 18px;
    font-style: italic;
}

blockquote::before {
    content: '"';
    font-size: 48px;
    color: #999;
    line-height: 0;
    vertical-align: -0.45em;
}

blockquote::after {
    content: '"';
    font-size: 48px;
    color: #999;
    line-height: 0;
    vertical-align: -0.55em;
}
```

### Example 4: List Bullets

```css
.custom-list li::before {
    content: "▸ ";
    color: #e74c3c;
    font-weight: bold;
    margin-right: 10px;
}
```

### Example 5: Tooltip

```html
<span class="tooltip" data-tip="Save your work">💾</span>

<style>
.tooltip {
    position: relative;
    cursor: help;
}

.tooltip::after {
    content: attr(data-tip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #111;
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    white-space: nowrap;
    margin-bottom: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.tooltip:hover::after {
    opacity: 1;
}
```

### Example 6: Badge with Counter

```html
<button class="notification" data-count="5">Messages</button>

<style>
.notification {
    position: relative;
    padding: 10px 20px;
}

.notification::after {
    content: attr(data-count);
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ef4444;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
```

### Example 7: Animated Loading Dots

```css
.loader::after {
    content: "...";
    animation: dots 1.5s steps(3, end) infinite;
}

@keyframes dots {
    0%, 20% {
        color: rgba(0,0,0,0);
        text-shadow: 0.25em 0 0 rgba(0,0,0,0), 0.5em 0 0 rgba(0,0,0,0);
    }
    40% {
        color: #333;
        text-shadow: 0.25em 0 0 rgba(0,0,0,0), 0.5em 0 0 rgba(0,0,0,0);
    }
    60% {
        text-shadow: 0.25em 0 0 #333, 0.5em 0 0 rgba(0,0,0,0);
    }
    80%, 100% {
        text-shadow: 0.25em 0 0 #333, 0.5em 0 0 #333;
    }
}

<!-- Usage: <div class="loader">Loading</div> -->
```

### Example 8: Icon with ::before

```css
.icon-arrow::before {
    content: "→";
    margin-right: 8px;
    color: #3b82f6;
}

.icon-check::before {
    content: "✓";
    color: #10b981;
    font-weight: bold;
    margin-right: 8px;
}
```

### Advanced: Pseudo-element with :not()

```css
/* Add bullet to all list items except first */
li:not(:first-child)::before {
    content: "• ";
    color: blue;
}
```

---

## 3. Complete Example: Design System with Variables & Pseudo-elements

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Variables & Pseudo-elements</title>
    <style>
        :root {
            --primary: #3b82f6;
            --secondary: #10b981;
            --danger: #ef4444;
            --text: #1f2937;
            --border: #e5e7eb;
            --spacing: 16px;
            --radius: 8px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: var(--text);
            padding: var(--spacing);
            background: #f9fafb;
        }

        /* Buttons */
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: var(--radius);
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 14px;
            font-weight: 600;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background: #2563eb;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .btn-success {
            background: var(--secondary);
            color: white;
        }

        .btn-success:hover {
            background: #059669;
        }

        /* Badges */
        .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: var(--radius);
            font-size: 12px;
            font-weight: 600;
        }

        .badge-primary {
            background: #dbeafe;
            color: var(--primary);
        }

        .badge-success {
            background: #dcfce7;
            color: var(--secondary);
        }

        /* Cards */
        .card {
            background: white;
            padding: var(--spacing);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            margin-bottom: var(--spacing);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing);
            padding-bottom: var(--spacing);
            border-bottom: 1px solid var(--border);
        }

        .card-header h3::before {
            content: "📋 ";
            margin-right: 8px;
        }

        /* Lists */
        .list {
            list-style: none;
        }

        .list li {
            padding: 8px 0;
        }

        .list li::before {
            content: "✓ ";
            color: var(--secondary);
            font-weight: bold;
            margin-right: 8px;
        }

        /* Tooltips */
        .tooltip {
            position: relative;
            cursor: help;
            border-bottom: 1px dotted var(--primary);
        }

        .tooltip::after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: var(--text);
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            white-space: nowrap;
            margin-bottom: 8px;
            font-size: 12px;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }

        .tooltip:hover::after {
            opacity: 1;
        }

        /* Alert */
        .alert {
            padding: var(--spacing);
            border-radius: var(--radius);
            border-left: 4px solid;
            margin-bottom: var(--spacing);
        }

        .alert-info {
            background: #dbeafe;
            border-left-color: var(--primary);
            color: var(--primary);
        }

        .alert-success {
            background: #dcfce7;
            border-left-color: var(--secondary);
            color: var(--secondary);
        }

        .alert-danger {
            background: #fee2e2;
            border-left-color: var(--danger);
            color: var(--danger);
        }

        .alert::before {
            content: attr(data-icon);
            margin-right: 8px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>CSS Variables & Pseudo-elements Demo</h1>

    <!-- Buttons -->
    <section class="card">
        <div class="card-header">
            <h3>Buttons</h3>
        </div>
        <button class="btn btn-primary">Primary Button</button>
        <button class="btn btn-success">Success Button</button>
    </section>

    <!-- Badges -->
    <section class="card">
        <div class="card-header">
            <h3>Badges</h3>
        </div>
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-success">Success</span>
    </section>

    <!-- Lists -->
    <section class="card">
        <div class="card-header">
            <h3>Lists</h3>
        </div>
        <ul class="list">
            <li>Learn CSS Variables</li>
            <li>Learn Pseudo-elements</li>
            <li>Build projects</li>
            <li>Master CSS</li>
        </ul>
    </section>

    <!-- Tooltips -->
    <section class="card">
        <div class="card-header">
            <h3>Tooltips</h3>
        </div>
        <p>
            Hover over me:
            <span class="tooltip" data-tooltip="Save your changes">💾 Save</span>
            <span class="tooltip" data-tooltip="Delete this item">🗑️ Delete</span>
            <span class="tooltip" data-tooltip="Share with others">📤 Share</span>
        </p>
    </section>

    <!-- Alerts -->
    <section class="card">
        <div class="card-header">
            <h3>Alerts</h3>
        </div>
        <div class="alert alert-info" data-icon="ℹ">
            This is an info alert
        </div>
        <div class="alert alert-success" data-icon="✓">
            This is a success alert
        </div>
        <div class="alert alert-danger" data-icon="⚠">
            This is a danger alert
        </div>
    </section>
</body>
</html>
```

---

## 4. Quick Reference Cheat Sheet

### CSS Variables
```css
/* Define */
:root {
    --primary: #3b82f6;
    --spacing: 16px;
}

/* Use */
button {
    background: var(--primary);
    padding: var(--spacing);
}

/* Fallback */
color: var(--primary, blue);

/* Calculation */
padding: calc(var(--spacing) * 2);
```

### Pseudo-elements
```css
/* Before */
element::before {
    content: "text";
}

/* After */
element::after {
    content: attr(data-label);
}

/* Common content values */
content: "";              /* Empty */
content: "text";          /* Text */
content: "✓";             /* Unicode */
content: attr(data-x);    /* Attribute */
```

---

## 5. Summary

- ✅ **CSS Variables** = Reusable values
- ✅ Define in `:root` for global scope
- ✅ Use `var(--name)` to access
- ✅ **::before** = Creates element before content
- ✅ **::after** = Creates element after content
- ✅ `content` property is required
- ✅ Perfect for decorative elements and tooltips
- ✅ Combine with `attr()` for dynamic content
- ✅ Use variables for colors, spacing, sizes
- ✅ Maintain design consistency with variables

**Ready for Day 11?** You'll build complex responsive projects using all these concepts! 🚀
