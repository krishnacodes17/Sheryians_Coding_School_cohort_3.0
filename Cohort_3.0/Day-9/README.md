# Day 9 - CSS Animations & Transitions

## Transitions vs Animations

| Feature | Transition | Animation |
|---------|-----------|-----------|
| **Trigger** | Needs state change (hover, click) | Runs automatically or on demand |
| **Keyframes** | From A → B (2 states) | Multiple steps (0% → 50% → 100%) |
| **Control** | Simple | Complex sequences |
| **When to Use** | Button hover, link color | Loading spinner, moving objects |

---

## CSS Transitions (Smooth State Changes)

### Syntax
```css
transition: property duration timing-function delay;
```

### Properties

| Property | What It Does | Example |
|----------|-------------|---------|
| `transition-property` | Which CSS to animate | `background-color` |
| `transition-duration` | How long (seconds) | `0.3s`, `1s` |
| `transition-timing-function` | Speed curve | `ease`, `linear`, `ease-in-out` |
| `transition-delay` | Wait time before start | `0s`, `0.5s` |

### Example
```css
button {
    background-color: blue;
    transition: all 0.3s ease;
}

button:hover {
    background-color: red;
    transform: scale(1.1);
}
```

### Timing Functions
- `linear` — Constant speed
- `ease` — Slow start/end (default)
- `ease-in` — Slow start
- `ease-out` — Slow end
- `ease-in-out` — Slow start and end

---

## CSS Animations (@keyframes)

### Syntax
```css
@keyframes animation-name {
    from {
        /* Start state */
    }
    to {
        /* End state */
    }
}

/* Or with percentages */
@keyframes animation-name {
    0% { }
    50% { }
    100% { }
}
```

### Animation Properties

| Property | What It Does | Example |
|----------|-------------|---------|
| `animation-name` | @keyframes to use | `slide`, `bounce` |
| `animation-duration` | How long | `1s`, `2.5s` |
| `animation-timing-function` | Speed curve | `ease`, `linear` |
| `animation-delay` | Wait before start | `0s`, `1s` |
| `animation-iteration-count` | How many times | `1`, `infinite` |
| `animation-direction` | Direction | `normal`, `alternate` |
| `animation-fill-mode` | State before/after | `forwards`, `both` |
| `animation-play-state` | Running or paused | `running`, `paused` |

### Animation Shorthand
```css
/* animation: name duration timing-function delay iteration-count direction fill-mode; */
animation: slide 2s ease 0s infinite alternate forwards;
```

---

## Common Transform Functions

```css
/* Move */
transform: translateX(100px);       /* Move right */
transform: translateY(-50px);       /* Move up */
transform: translate(100px, 50px);  /* Move both */

/* Scale */
transform: scale(1.5);              /* 150% size */
transform: scaleX(2);               /* 200% width */

/* Rotate */
transform: rotate(45deg);           /* 45 degrees */
transform: rotateX(90deg);          /* 3D rotation */

/* Skew */
transform: skew(20deg);
```

---

## Common Animation Examples

### Slide Animation
```css
@keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(300px); }
}

.box {
    animation: slide 2s ease-in-out infinite alternate;
}
```

### Bounce Animation
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-50px); }
}

.ball {
    animation: bounce 1s ease infinite;
}
```

### Spin/Rotate Animation
```css
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    animation: spin 1s linear infinite;
}
```

### Fade In Animation
```css
@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

.element {
    animation: fade-in 1s ease forwards;
}
```

### Pause on Hover
```css
.box {
    animation: slide 2s ease infinite;
}

.box:hover {
    animation-play-state: paused;  /* ← Pause on hover */
}
```

---

## Animation Direction Values

| Value | Effect |
|-------|--------|
| `normal` | Forward (default) |
| `reverse` | Backward |
| `alternate` | Forward → Backward → Forward |
| `alternate-reverse` | Backward → Forward → Backward |

---

## Fill Mode Values

| Value | Effect |
|-------|--------|
| `none` | No styles before/after |
| `forwards` | Keep final state |
| `backwards` | Use first keyframe state before start |
| `both` | Apply both |

---

## Performance Tips

✅ **DO:**
- Use `transform` for animations (GPU accelerated)
- Use `opacity` changes
- Keep animations short and purposeful
- Test on different devices

❌ **DON'T:**
- Animate `width`, `height`, `left`, `top`
- Use too many animations at once
- Make animations too long
- Ignore accessibility

---

## Performance: What to Animate

### ✅ Good (Fast)
```css
transform: translateX(100px);
opacity: 0.5;
```

### ❌ Bad (Slow)
```css
left: 100px;
width: 200px;
height: 300px;
```

---

## Accessibility

Respect user's reduced motion preference:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## Quick Reference

```css
/* Transition */
transition: all 0.3s ease 0s;

/* Animation Shorthand */
animation: name duration timing-function delay iteration-count direction fill-mode;

/* Common Animation */
animation: slide 2s ease infinite;

/* Pause Animation */
animation-play-state: paused;

/* Multiple Transforms */
transform: translateX(100px) rotate(45deg) scale(1.5);
```

---

## Summary

- ✅ **Transitions** = smooth state changes
- ✅ **Animations** = complex sequences
- ✅ Use `transform` for best performance
- ✅ `infinite` for continuous animations
- ✅ `alternate` for back-and-forth motion
- ✅ `paused` for interactive control
- ✅ `forwards` to keep final animation state

See [Day-9_notes.md](Day-9_notes.md) for detailed explanations, complete code examples, and practice tips!