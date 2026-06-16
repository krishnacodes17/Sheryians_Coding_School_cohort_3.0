
 # Events in DOM

 ## Types of Events
- **Mouse Events**: click, dblclick, mouseenter, mouseleave, mousemove
 - **Keyboard Events**: keydown, keyup, keypress
 - **Form Events**: focus, blur, change, input, submit
 - **Window Events**: load, resize, scroll
- **input Events**: input, change, submit
- **Touch Events**: touchstart, touchmove, touchend


# Event Propogation
- **Event Bubbling**: Events propagate from the target element up to the root of the DOM tree.

- **Event Capturing**: Events propagate from the root of the DOM tree down to the target eleme
nt.
can you make on this topic notes  in details 
# Events in DOM

## Types of Events

1. **Mouse Events**:
    - `click`: Triggered when a mouse button is clicked on an element.
    - `dblclick`: Triggered when a mouse button is double-clicked on an element.
    - `mouseenter`: Triggered when the mouse pointer enters an element.
    - `mouseleave`: Triggered when the mouse pointer leaves an element.
    - `mousemove`: Triggered when the mouse pointer moves within an element.

2. **Keyboard Events**:
    - `keydown`: Triggered when a key is pressed down while an element has focus.
    - `keyup`: Triggered when a key is released while an element has focus.
    - `keypress`: Triggered when a key is pressed and released while an element has focus 
(this event is deprecated in modern JavaScript).

3. **Form Events**:
    - `focus`: Triggered when an input or form element gains focus.
    - `blur`: Triggered when an input or form element loses focus.
    - `change`: Triggered when the value of an input or form element changes and the element 
is blurred.
    - `input`: Triggered whenever the value of an input or textarea changes, but it fires 
before the element is blurred.
    - `submit`: Triggered when a form is submitted.

4. **Window Events**:
    - `load`: Triggered when the entire page is fully loaded.
    - `resize`: Triggered when the browser window is resized.
    - `scroll`: Triggered when the user scrolls through an element (or the whole page).

5. **Input Events**:
    - `input`: Similar to `change`, this event fires as soon as the value of an input or 
textarea changes, but it does not require the element to be blurred.
    - `submit`: Also similar to form events, this triggers when a form is submitted.

6. **Touch Events**:
    - `touchstart`: Triggered when a finger touches the screen.
    - `touchmove`: Triggered when a finger moves on the screen.
    - `touchend`: Triggered when a finger leaves the screen.

## Event Propagation

Event propagation refers to the way events are passed through the DOM tree. There are two 
phases of event propagation:

1. **Event Capturing**:
    - Events propagate from the root of the DOM tree down to the target element.
    - This phase allows capturing and handling events at higher levels in the DOM hierarchy 
before they reach the actual target.

2. **Event Bubbling**:
    - Events propagate from the target element up to the root of the DOM tree.
    - This is the default phase where most event listeners are attached, allowing you to 
handle events on child elements that bubble up to their parent elements.

### Example of Event Propagation

Consider the following HTML structure:

```html
<div id="outer">
  <div id="inner">Click me</div>
</div>
```

And the following JavaScript code:

```javascript
document.getElementById('outer').addEventListener('click', function() {
  console.log('Outer div clicked');
});

document.getElementById('inner').addEventListener('click', function(event) {
  event.stopPropagation(); // Prevents further propagation
  console.log('Inner div clicked');
}, true); // Use capture phase
```

When you click on the inner div, the output will be:
1. `Inner div clicked` (from the `true` useCapture option)
2. No additional output (because of `event.stopPropagation()`)

If `event.stopPropagation()` is removed, the output will be:
1. `Inner div clicked`
2. `Outer div clicked`

This demonstrates how events propagate from the inner to the outer element and how capturing 
phase can prevent further propagation if desired.