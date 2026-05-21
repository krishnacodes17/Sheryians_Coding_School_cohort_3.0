# Day 10 - CSS Variables, Pseudo-elements & Advanced CSS

## 1. CSS Variables (Custom Properties)

### What Are They?
Placeholders for values you can reuse throughout your stylesheet. Makes CSS maintainable and easy to update.

### Define Global Variables
```css
:root {
    --primary: #3b82f6;
    --secondary: #10b981;
    --spacing: 16px;
    --radius: 8px;
}
```

### Use Variables
```css
button {
    background: var(--primary);
    padding: var(--spacing);
    border-radius: var(--radius);
}
```

### With Fallback
```css
color: var(--primary, blue);  /* Use blue if --primary not defined */
```

### With Calculations
```css
padding: calc(var(--spacing) * 2);  /* 16px * 2 = 32px */
```

### Real-World Design System
```css
:root {
    /* Colors */
    --color-primary: #3b82f6;
    --color-success: #10b981;
    --color-danger: #ef4444;
    
    /* Spacing */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    
    /* Shadows */
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15);
}
```

### Benefits of CSS Variables
✅ Change one value to update entire site
✅ Consistent design system
✅ Easy maintenance
✅ Responsive design with media queries
✅ Dynamic with JavaScript

---

## 2. CSS Pseudo-elements (::before and ::after)

### What Are They?
Pure CSS elements that don't exist in HTML. Used for styling and adding content.

### ::before vs ::after

| Pseudo-element | Position |
|---|---|
| `::before` | BEFORE element's content |
| `::after` | AFTER element's content |

### Syntax
```css
element::before {
    content: "required";
    /* Your styling */
}

element::after {
    content: "required";
    /* Your styling */
}
```

### The `content` Property (Required!)

```css
/* Text */
::before { content: "→ "; }

/* Empty (decorative) */
::before { content: ""; }

/* Unicode/Emoji */
::before { content: "✓ "; }

/* From HTML attribute */
::before { content: attr(data-label); }
```

---

## 3. Pseudo-element Examples

### Example 1: Add Decorative Text
```html
<h2>Hello World</h2>

<style>
h2::before { content: "🎉 "; }
h2::after { content: " 🎉"; }
</style>

<!-- Result: 🎉 Hello World 🎉 -->
```

### Example 2: Decorative Lines
```css
h1::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, #999, transparent);
}
```

### Example 3: List Bullets
```css
.custom-list li::before {
    content: "▸ ";
    color: #e74c3c;
    margin-right: 10px;
}
```

### Example 4: Tooltip (Interactive)
```html
<span class="tooltip" data-tooltip="Save your work">💾</span>

<style>
.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    background: #111;
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip:hover::after {
    opacity: 1;
}
</style>
```

### Example 5: Badge with Counter
```html
<button class="notification" data-count="5">Messages</button>

<style>
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
}
</style>
```

### Example 6: Quote Styling
```css
blockquote::before {
    content: '"';
    font-size: 48px;
    color: #999;
}

blockquote::after {
    content: '"';
    font-size: 48px;
    color: #999;
}
```

### Example 7: Icon with Content
```css
.icon-arrow::before {
    content: "→";
    margin-right: 8px;
}

.icon-check::before {
    content: "✓";
    color: #10b981;
}
```

---

## 4. Use Cases for CSS Variables

### 1. Color Scheme
```css
:root {
    --primary: #3b82f6;
    --secondary: #10b981;
    --danger: #ef4444;
}

button { background: var(--primary); }
.success { color: var(--secondary); }
.error { color: var(--danger); }
```

### 2. Spacing System
```css
:root {
    --space-1: 4px;
    --space-2: 8px;
    --space-4: 16px;
    --space-8: 32px;
}

.container { padding: var(--space-4); }
.card { margin: var(--space-2); }
```

### 3. Responsive Design
```css
:root {
    --font-size: 16px;
    --columns: 1;
}

@media (min-width: 768px) {
    :root {
        --font-size: 18px;
        --columns: 2;
    }
}

body { font-size: var(--font-size); }
.grid { grid-template-columns: repeat(var(--columns), 1fr); }
```

### 4. Dark Mode
```css
/* Light mode (default) */
:root {
    --bg: white;
    --text: #1f2937;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    :root {
        --bg: #1f2937;
        --text: white;
    }
}

body { background: var(--bg); color: var(--text); }
```

---

## 5. Use Cases for Pseudo-elements

✅ **Perfect For:**
- Decorative elements
- Tooltips
- Badges
- Icons
- Quotes
- Loading animations
- Borders/separators
- Numbered lists

❌ **Don't Use For:**
- Critical content (not in HTML)
- Main content (SEO issues)
- Accessibility features

---

## 6. Quick Reference

### CSS Variables
```css
/* Define */
:root {
    --primary: #3b82f6;
    --spacing: 16px;
    --radius: 8px;
}

/* Use */
button {
    background: var(--primary);
    padding: var(--spacing);
    border-radius: var(--radius);
}

/* Fallback */
color: var(--primary, blue);

/* Calculation */
margin: calc(var(--spacing) * 2);

/* Local scope */
.card {
    --card-padding: 24px;
    padding: var(--card-padding);
}

/* Dynamic with JavaScript */
document.documentElement.style.setProperty('--primary', '#10b981');
```

### Pseudo-elements
```css
/* Text before element */
element::before {
    content: "text";
}

/* Element after content */
element::after {
    content: attr(data-label);
}

/* Common patterns */
content: "";                /* Decorative */
content: "✓";              /* Unicode */
content: attr(data-x);     /* Attribute */

/* Styling */
position: absolute;
top: 0;
left: 0;
```

---

## 7. Complete Design System Pattern

```css
:root {
    /* Colors */
    --primary: #3b82f6;
    --secondary: #10b981;
    --danger: #ef4444;
    
    /* Spacing */
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    
    /* Sizing */
    --radius: 8px;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn {
    background: var(--primary);
    padding: var(--space-md);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.card {
    background: white;
    padding: var(--space-lg);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.card-title::before {
    content: "📋 ";
}
```

---

## 8. Summary

- ✅ CSS Variables = Reusable values across stylesheet
- ✅ Define in `:root` for global scope
- ✅ Access with `var(--name)`
- ✅ Support fallback values
- ✅ Work with calculations
- ✅ ::before = Element BEFORE content
- ✅ ::after = Element AFTER content
- ✅ `content` property is required
- ✅ Perfect for decorative elements
- ✅ Use `attr()` for dynamic content

See [Day-10_notes.md](Day-10_notes.md) for detailed explanations, complete working example, and advanced techniques!