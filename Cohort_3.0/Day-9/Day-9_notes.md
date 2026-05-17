# Day 9 - CSS Animations & Transitions

## Overview
CSS Animations let you create smooth, engaging visual effects. They make your website feel more interactive and professional. Today we'll learn both **Transitions** and **Animations** - two powerful ways to bring movement to your site.

---

## 1. Transitions vs Animations

### What's the Difference?

| Feature | Transition | Animation |
|---------|-----------|-----------|
| **Trigger** | Needs a state change (hover, click, etc.) | Runs automatically or on demand |
| **Keyframes** | From A → B (start to end) | Multiple keyframes (start → middle → end) |
| **Control** | Simple, 2 states | Complex, multiple steps |
| **When to Use** | Simple state changes | Complex sequences |
| **Example** | Button color on hover | Loading spinner, moving objects |

---

## 2. CSS Transitions (Smooth State Changes)

### What is a Transition?
A transition smoothly animates a change from one CSS property to another when an element's state changes.

### Transition Properties

```css
/* All 4 properties together */
transition: property duration timing-function delay;
```

### Breaking Down Each Property

#### a) `transition-property`
Which CSS property to animate

```css
/* Single property */
transition-property: background-color;

/* Multiple properties */
transition-property: background-color, color, transform;

/* All properties */
transition-property: all;
```

#### b) `transition-duration`
How long the animation takes (seconds or milliseconds)

```css
transition-duration: 0.3s;      /* 300 milliseconds */
transition-duration: 1.5s;      /* 1.5 seconds */
transition-duration: 2s;        /* 2 seconds */
```

#### c) `transition-timing-function`
How the animation progresses

| Function | Effect |
|----------|--------|
| `linear` | Constant speed throughout |
| `ease` | Slow start, fast middle, slow end (default) |
| `ease-in` | Slow start |
| `ease-out` | Slow end |
| `ease-in-out` | Slow start and end |
| `cubic-bezier()` | Custom curve |

```css
transition-timing-function: ease;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
```

#### d) `transition-delay`
Wait time before animation starts (seconds)

```css
transition-delay: 0s;           /* Starts immediately */
transition-delay: 0.5s;         /* Wait 0.5 seconds */
transition-delay: 2s;           /* Wait 2 seconds */
```

### Transition Examples

#### Example 1: Simple Button Hover
```css
button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    
    /* Transition all properties in 0.3s */
    transition: all 0.3s ease;
}

button:hover {
    background-color: red;
    color: yellow;
    transform: scale(1.1);
}
```

#### Example 2: Multiple Properties with Different Timing
```css
.card {
    background-color: white;
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    transition: background-color 0.3s ease,
                transform 0.5s ease-in-out,
                box-shadow 0.3s ease;
}

.card:hover {
    background-color: #f0f0f0;
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

#### Example 3: Link Color Change
```css
a {
    color: blue;
    transition: color 0.3s ease;
}

a:hover {
    color: red;
}
```

---

## 3. CSS Animations (@keyframes)

### What are Animations?
Animations are sequences of changes that happen over time without needing a state trigger.

### @keyframes Syntax

```css
@keyframes animation-name {
    from {
        /* Starting state */
    }
    to {
        /* Ending state */
    }
}
```

Or with percentages:

```css
@keyframes animation-name {
    0% {
        /* Start */
    }
    50% {
        /* Middle */
    }
    100% {
        /* End */
    }
}
```

### Animation Properties

#### 1. `animation-name`
Name of the @keyframes animation

```css
animation-name: slide-in;
animation-name: bounce;
animation-name: fade-out;
```

#### 2. `animation-duration`
How long the animation takes

```css
animation-duration: 1s;
animation-duration: 2.5s;
animation-duration: 500ms;
```

#### 3. `animation-timing-function`
Speed curve (same as transition)

```css
animation-timing-function: ease;
animation-timing-function: linear;
animation-timing-function: ease-in-out;
```

#### 4. `animation-delay`
Delay before animation starts

```css
animation-delay: 0s;      /* Start immediately */
animation-delay: 1s;      /* Wait 1 second */
animation-delay: 0.5s;
```

#### 5. `animation-iteration-count`
How many times to play the animation

```css
animation-iteration-count: 1;        /* Play once */
animation-iteration-count: 3;        /* Play 3 times */
animation-iteration-count: infinite; /* Play forever */
```

#### 6. `animation-direction`
Direction of animation

| Value | Effect |
|-------|--------|
| `normal` | Forward (default) |
| `reverse` | Backward |
| `alternate` | Forward then backward |
| `alternate-reverse` | Backward then forward |

```css
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
```

#### 7. `animation-fill-mode`
What state element has before/after animation

| Value | Effect |
|-------|--------|
| `none` | No styles before/after (default) |
| `forwards` | Keep final keyframe state |
| `backwards` | Use first keyframe state before starting |
| `both` | Apply both forwards and backwards |

```css
animation-fill-mode: forwards;
```

#### 8. `animation-play-state`
Pause or play the animation

```css
animation-play-state: running;  /* Playing */
animation-play-state: paused;   /* Paused */
```

### Animation Shorthand

```css
/* animation: name duration timing-function delay iteration-count direction fill-mode; */

animation: slide 1s ease 0s infinite alternate;
animation: bounce 2s ease-in-out infinite;
animation: fade-in 0.5s linear forwards;
```

---

## 4. Animation Examples

### Example 1: Simple Slide Animation
```css
@keyframes slide {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(200px);
    }
}

.box {
    width: 100px;
    height: 100px;
    background-color: red;
    animation: slide 2s ease-in-out infinite alternate;
}
```

### Example 2: Fade In Animation
```css
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.element {
    animation: fade-in 1s ease-in forwards;
}
```

### Example 3: Bounce Animation (Multiple Keyframes)
```css
@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(0);
    }
}

.ball {
    width: 50px;
    height: 50px;
    background-color: blue;
    border-radius: 50%;
    animation: bounce 1s ease infinite;
}
```

### Example 4: Spin/Rotate Animation
```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid blue;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
```

### Example 5: Complex Multi-Step Animation
```css
@keyframes complex-animation {
    0% {
        transform: translateX(0) rotate(0deg);
        background-color: red;
        opacity: 1;
    }
    25% {
        transform: translateX(100px) rotate(90deg);
        background-color: yellow;
    }
    50% {
        transform: translateX(200px) rotate(180deg);
        background-color: green;
    }
    75% {
        transform: translateX(100px) rotate(270deg);
        background-color: blue;
    }
    100% {
        transform: translateX(0) rotate(360deg);
        background-color: red;
        opacity: 1;
    }
}

.element {
    width: 100px;
    height: 100px;
    animation: complex-animation 3s ease-in-out infinite;
}
```

### Example 6: Pause on Hover
```css
@keyframes move {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(300px);
    }
}

.box {
    width: 100px;
    height: 100px;
    background-color: red;
    animation: move 2s linear infinite;
}

.box:hover {
    animation-play-state: paused;  /* ← Pause animation on hover */
}
```

---

## 5. Transform Properties (Used in Animations)

### Common Transform Functions

```css
/* Move */
transform: translateX(100px);        /* Move right */
transform: translateY(-50px);        /* Move up */
transform: translate(100px, 50px);   /* Move right and down */

/* Scale */
transform: scale(1.5);               /* 150% size */
transform: scaleX(2);                /* 200% width */
transform: scaleY(0.5);              /* 50% height */

/* Rotate */
transform: rotate(45deg);            /* 45 degrees */
transform: rotateX(90deg);           /* 3D rotation */
transform: rotateY(180deg);

/* Skew */
transform: skew(20deg);              /* Skew on X axis */
transform: skew(20deg, 30deg);       /* Skew on both axes */

/* Multiple transforms */
transform: translateX(100px) rotate(45deg) scale(1.5);
```

---

## 6. Complete Working Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animations Demo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
            padding: 40px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        h2 {
            margin-top: 40px;
            margin-bottom: 20px;
            color: #333;
        }

        /* Transition Example */
        .button {
            background-color: blue;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 16px;
        }

        .button:hover {
            background-color: red;
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        /* Animation - Slide */
        @keyframes slide {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(300px);
            }
        }

        .slide-box {
            width: 100px;
            height: 100px;
            background-color: #FF6B6B;
            animation: slide 2s ease-in-out infinite alternate;
            margin-bottom: 20px;
        }

        /* Animation - Bounce */
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-50px);
            }
        }

        .bounce-ball {
            width: 50px;
            height: 50px;
            background-color: #4ECDC4;
            border-radius: 50%;
            animation: bounce 1s ease infinite;
            margin-bottom: 20px;
        }

        /* Animation - Spin */
        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .spinner {
            width: 80px;
            height: 80px;
            border: 8px solid #f3f3f3;
            border-top: 8px solid #4ECDC4;
            border-radius: 50%;
            animation: spin 2s linear infinite;
            margin-bottom: 20px;
        }

        /* Animation - Fade In */
        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .fade-element {
            background-color: #95E1D3;
            padding: 20px;
            border-radius: 5px;
            animation: fade-in 2s ease forwards;
            margin-bottom: 20px;
        }

        /* Animation - Color Change */
        @keyframes color-change {
            0% {
                background-color: red;
            }
            25% {
                background-color: yellow;
            }
            50% {
                background-color: green;
            }
            75% {
                background-color: blue;
            }
            100% {
                background-color: red;
            }
        }

        .color-box {
            width: 100px;
            height: 100px;
            animation: color-change 3s ease infinite;
            margin-bottom: 20px;
        }

        /* Pause on Hover */
        .pause-box {
            width: 100px;
            height: 100px;
            background-color: #FFB6C1;
            animation: slide 2s ease infinite;
            margin-bottom: 20px;
        }

        .pause-box:hover {
            animation-play-state: paused;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Animations & Transitions Demo</h1>

        <h2>1. Transition Example</h2>
        <button class="button">Hover Me!</button>

        <h2>2. Slide Animation</h2>
        <div class="slide-box"></div>

        <h2>3. Bounce Animation</h2>
        <div class="bounce-ball"></div>

        <h2>4. Spin/Rotate Animation</h2>
        <div class="spinner"></div>

        <h2>5. Fade In Animation</h2>
        <div class="fade-element">This fades in smoothly!</div>

        <h2>6. Color Change Animation</h2>
        <div class="color-box"></div>

        <h2>7. Pause Animation on Hover</h2>
        <div class="pause-box"></div>
    </div>
</body>
</html>
```

---

## 7. Performance Tips

### Do's ✅
- Use `transform` and `opacity` for smooth animations
- Keep animations short and purposeful
- Test on different devices
- Use `will-change` for complex animations

### Don'ts ❌
- Animate expensive properties like `width`, `height`, `left`, `top`
- Use too many simultaneous animations
- Make animations too long and distracting
- Forget about accessibility (provide pause options)

---

## 8. Performance-Optimized Animation

```css
/* ✅ Good - Uses transform (GPU accelerated) */
@keyframes good-animation {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100px);
    }
}

/* ❌ Bad - Uses left property (CPU heavy) */
@keyframes bad-animation {
    from {
        left: 0;
    }
    to {
        left: 100px;
    }
}

/* ✅ Performance boost */
.element {
    animation: good-animation 1s ease;
    will-change: transform;  /* Hint to browser */
}
```

---

## 9. Accessibility Considerations

### Respect Prefers Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

This respects user's preference for reduced motion.

---

## 10. Common Animation Patterns

### Loading Spinner
```css
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    animation: spin 1s linear infinite;
}
```

### Pulse Effect
```css
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.pulse {
    animation: pulse 1.5s ease-in-out infinite;
}
```

### Slide In
```css
@keyframes slide-in {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in {
    animation: slide-in 0.5s ease-out;
}
```

### Bounce
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-10px); }
    50% { transform: translateY(0); }
    75% { transform: translateY(-5px); }
}

.bounce {
    animation: bounce 1s ease infinite;
}
```

---

## 11. Quick Reference Cheat Sheet

```css
/* Transition */
transition: property duration timing-function delay;
transition: all 0.3s ease 0s;

/* Animation Shorthand */
animation: name duration timing-function delay iteration-count direction fill-mode;
animation: slide 2s ease 0s infinite alternate forwards;

/* Timing Functions */
linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier()

/* Transform */
translate(), scale(), rotate(), skew()
translateX(), translateY(), scaleX(), scaleY()
rotateX(), rotateY(), rotateZ()

/* Play State */
animation-play-state: running | paused;

/* Fill Mode */
fill-mode: none | forwards | backwards | both;
```

---

## 12. Summary

- ✅ **Transitions** = smooth state changes (hover, click, etc.)
- ✅ **Animations** = complex sequences with @keyframes
- ✅ Use `transform` for best performance
- ✅ Keep animations short and purposeful
- ✅ Always consider accessibility
- ✅ Test animations on different devices
- ✅ `animation-iteration-count: infinite` for continuous animations
- ✅ `animation-play-state: paused` for interactive control
- ✅ `animation-direction: alternate` for back-and-forth motion
- ✅ Combine with media queries for responsive animations

**Ready for Day 10?** You'll create complex, interactive animations and learn advanced techniques! 🚀
