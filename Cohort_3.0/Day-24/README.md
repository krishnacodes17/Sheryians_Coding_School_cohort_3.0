
# JavaScript - DOM Manipulation and Event Handling

## Topics Covered in Day 24

### 1. classList Object - Advanced Class Management
- What is classList and why use it
- classList.add(): Add single or multiple classes
- classList.remove(): Remove single or multiple classes
- classList.contains(): Check if element has class
- classList.toggle(): Add/remove class dynamically
- classList.replace(): Replace one class with another
- DOMTokenList properties (length, item())
- Advantages over className property
- Performance benefits of classList

### 2. Understanding element.style Property
- Accessing inline styles with element.style
- CSS property naming (camelCase vs kebab-case)
- Common CSS properties in JavaScript
- Setting colors, sizes, spacing, borders
- Setting text properties, display, positioning
- Setting opacity and transforms
- Background properties
- Multiple style assignment methods
- cssText for batch style updates
- Object.assign for style updates

### 3. Getting and Computing Styles
- element.style (inline only)
- window.getComputedStyle() for all styles
- Computed styles include CSS rules
- Practical use cases for computed styles
- Getting specific properties from computed style
- Performance considerations

### 4. Event Listeners and addEventListener
- addEventListener syntax and advantages
- Named functions vs arrow functions
- Multiple listeners on same element
- Event object and its properties
- event.type: Type of event
- event.target: Element that triggered event
- event.currentTarget: Element with listener
- event.clientX/Y: Mouse position from viewport
- event.pageX/Y: Mouse position from page
- event.key and event.code for keyboard
- event.shiftKey, event.ctrlKey, event.altKey for modifiers

### 5. Common Event Types
- Mouse events: click, dblclick, mouseenter, mouseleave, mousemove, mousedown, mouseup
- Keyboard events: keydown, keyup, keypress
- Form events: focus, blur, change, input, submit
- Window events: load, resize, scroll
- Touch events: touchstart, touchmove, touchend
- When to use each event type

### 6. Event Methods
- event.preventDefault(): Stop default action
- event.stopPropagation(): Stop event bubbling
- event.stopImmediatePropagation(): Stop propagation and other handlers
- Real-world use cases
- Form submission handling
- Link navigation prevention

### 7. Event Bubbling and Event Propagation
- What is event bubbling (events propagate up)
- Event flow (capture → target → bubble)
- Practical example of bubbling
- Stopping propagation with stopPropagation()
- When to stop bubbling
- Event delegation alternative

### 8. State Management with Flags
- What is a flag variable
- Boolean flags for state tracking
- Simple ON/OFF patterns
- Multiple flags for complex state
- Object-based state management
- State consistency with UI
- Updating state properly

### 9. Light Bulb Toggle Project (Real-World Example)
- Project structure (HTML, CSS, JavaScript)
- HTML setup for toggle button and light
- CSS styling for light bulb appearance
- JavaScript event listener setup
- Flag management (ON/OFF state)
- Changing text content
- Changing inline styles
- CSS class usage for state
- Transitions and animations
- Improved version with classList

### 10. Common DOM Manipulation Patterns
- Button click toggle pattern
- Show/hide element pattern
- Color changing pattern
- Input validation pattern
- Counter app pattern
- List item selection pattern
- Modal dialog pattern
- Tab switcher pattern

### 11. Event Delegation
- Concept: Handle events on parent
- Benefits: Fewer listeners, handles dynamic elements
- Identifying target element
- Conditional handling based on target
- Real-world todo app example
- Performance advantages

### 12. Best Practices for DOM Manipulation
- Cache element references (query once)
- Use classList instead of style property
- Use CSS classes for styling
- Separate CSS from JavaScript
- Proper variable naming conventions
- Use event delegation for lists
- Centralize state management
- Avoid inline styles when possible

### 13. Common Mistakes and Pitfalls
- Using onclick instead of addEventListener
- Modifying className as string
- Using inline styles for everything
- Forgetting state management
- Assuming elements exist
- Not preventing default actions
- Not stopping event propagation when needed
- Memory leaks from forgotten listeners

### 14. Performance Optimization
- Query DOM once, reuse results
- Lazy loading event listeners
- Debouncing input events (delay action)
- Throttling scroll events (limit frequency)
- Batch DOM operations
- Minimize style recalculations
- Use requestAnimationFrame for animations
- Profile with DevTools

### 15. Real-World Applications
- Light bulb toggle (Day 24 project)
- Theme switcher (light/dark mode)
- Dropdown menus
- Modal dialogs
- Image galleries
- Infinite scroll
- Form validation
- Todo list application

### 16. Combining Multiple Techniques
- classList + event listeners
- State management + DOM update
- Event delegation + classList
- Flags + conditional rendering
- classList.toggle() for clean toggling
- Multiple event types together

### 17. Advanced Patterns
- Custom state management
- Component-based DOM manipulation
- Utility functions for common tasks
- Event delegation with complex selectors
- Debouncing and throttling utilities
- Element factory functions

### 18. Debugging and DevTools
- Inspecting elements in DevTools
- Checking classes and styles
- Testing event listeners
- Console logging for state
- Breakpoints in JavaScript
- Performance profiling

### 19. CSS Integration Best Practices
- Define states in CSS classes
- Use data attributes for state
- CSS variables (custom properties)
- CSS transitions for smooth changes
- CSS animations triggered by classes
- Hover and focus states
- Responsive design with classList

### 20. Modern Alternatives and Future
- Web Components and Shadow DOM
- Custom elements
- Template elements
- Frameworks (React, Vue) abstractions
- Web standards evolution

## Important Concepts to Remember

✅ **classList Methods**: add(), remove(), contains(), toggle(), replace()
✅ **classList vs className**: Use classList (more robust and flexible)
✅ **element.style**: Access inline CSS styles
✅ **CSS Property Names**: Use camelCase (backgroundColor not background-color)
✅ **addEventListener**: Modern, recommended way to handle events
✅ **Event Object**: Contains useful info (target, type, clientX/Y, key, etc.)
✅ **Event Bubbling**: Events propagate up from child to parent
✅ **stopPropagation()**: Stop event from bubbling up
✅ **preventDefault()**: Stop default behavior (form submit, link navigation)
✅ **Flags**: Boolean variables to track state (ON/OFF, show/hide)
✅ **State Management**: Keep track of UI state and update accordingly
✅ **Event Delegation**: Handle events on parent, benefits for dynamic elements
✅ **Toggle Pattern**: Add/remove class or switch between two states
✅ **Performance**: Query DOM once and reuse, use classList not style
✅ **Separation of Concerns**: CSS in stylesheets, JavaScript for logic

## classList Quick Reference

| Method | Purpose | Example |
|--------|---------|---------|
| add() | Add class(es) | `el.classList.add("active")` |
| remove() | Remove class(es) | `el.classList.remove("active")` |
| contains() | Check if has class | `if (el.classList.contains("active"))` |
| toggle() | Add/remove class | `el.classList.toggle("active")` |
| replace() | Replace class | `el.classList.replace("old", "new")` |

## Common Events Quick Reference

| Event | Trigger | Example |
|-------|---------|---------|
| click | Element clicked | Button, link |
| dblclick | Double clicked | Image, text |
| input | Form input value changed | Text input, textarea |
| change | Form value finalized | Select, checkbox, radio |
| focus | Element focused | Input field |
| blur | Element loses focus | Input field |
| keydown | Key pressed down | Keyboard input |
| submit | Form submitted | Form element |
| load | Page/resource loaded | Window, image |
| scroll | Page scrolled | Window |

## State Management Patterns

```
Simple Toggle:
isOpen = true  →  toggle  →  isOpen = false

Complex State:
state = { isOpen, isDark, isLoading }

Update pattern:
state changes → UI updates → Reflects new state
```

## Event Handling Flow

```
User Action
    ↓
Event triggered on element
    ↓
Event bubbles up (child → parent)
    ↓
Listener catches event
    ↓
Event handler function runs
    ↓
UI updates if needed
```

## Best Practices Summary

✅ Use **classList** for class management (not className)
✅ Cache element references to avoid repeated queries
✅ Use CSS classes for styling, not inline styles
✅ Use **addEventListener** (not onclick property)
✅ Always track state when toggling
✅ Use **event delegation** for dynamic lists
✅ **preventDefault()** to stop default actions
✅ **stopPropagation()** to stop event bubbling when needed
✅ Keep event handlers focused and simple
✅ Separate CSS from JavaScript logic
✅ Use meaningful variable names
✅ Profile performance with DevTools
✅ Remove event listeners when elements are destroyed
✅ Use **cssText** for batch style updates
✅ Consider accessibility with keyboard events

## Light Bulb Toggle Project Components

```
HTML: Button + Circle (light bulb)
CSS: Light (white, glowing) vs Dark (black, no glow)
JavaScript: 
- Listen for click
- Track state with flag
- Update text content
- Update styles or classes
- Toggle between ON/OFF states
```

## Debugging Checklist

✅ Check if element exists in DOM
✅ Verify CSS classes are applied
✅ Check inline styles in DevTools
✅ Console log state changes
✅ Verify event listeners are attached
✅ Check event propagation with stopPropagation()
✅ Test event delegation selectors
✅ Verify state matches UI appearance
✅ Use DevTools to inspect computed styles
