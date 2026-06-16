
# JavaScript - DOM Manipulation and Event Handling

## Topics Covered in Day 25

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
