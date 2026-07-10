# map()
- The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array. It is commonly used to transform data in an array.

## keys in react
- In React, keys are a special string attribute that you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed, allowing for efficient updates to the UI.   

# Form Handeling in React
- Form handling in React involves managing the state of form inputs and handling user interactions. React provides controlled components, where the form data is handled by the component's state, allowing for better control and validation of user input. Event handlers are used to capture user input and update the state accordingly, ensuring that the UI reflects the current state of the form.


## how to take input value in react
- In React, you can take input values by using controlled components. This involves setting the value of the input field to a state variable and updating that state variable using an event handler. Here's a simple example:

```jsx
input type="text"  onChange={(e)=> e.taget.value} />
```

Note: jab tum handelEvent name kaa function bana ke events koo handel karte hoo iss case me yaad akhna ki humne input field me onChange event ka use kiya hai aur uske andar ek arrow function pass kiya hai jo event object ko receive karta hai. `e.target.value` se hum input field ka current value lete hain aur usko state me update karte hain
example:

```jsx
let handleInputChange = (e) => {
  setInputValue(e.target.value);
};

input type="text" onChange={handleInputChange} />
```

``` jsx
function handleInputChange(e) {
  setInputValue(e.target.value);
}
input type="text" onChange={(handleInputChange} />
```

## input handling have 3 methods
- brute force method    
- - issme ham jitne input field hai unke liye alag alag useState hook bana ke unko handle karte hai   example: Formhandeling Wala componets dekho 

- - this method is straightforward but can become cumbersome with many input fields, as it requires multiple state variables and handlers. its bad approach for large forms.

- better method     
- - issme ham ek hi useState hook bana ke usme object pass karte hai aur uske andar jitne input field hai unko handle karte hai example: Formhandeling Wala componets dekho

- best method       
- - issme ham saare input ko name attribute dege jo saae input ko unique banata hai aur uske basis pe hum input ko handle karte hai


<!-- impotant Point -->
<note> yeha koi bhi changeEvent tigger hoo raha hai too hamara components rerender hoo raha hai baar baar jo ki performance ko effect kar raha hai. iss problem ko solve karne ke liye hum useRef hook ka use karte hai

- - yeha hamne oneway binding kiya hai 
- - ham ek state ki help se duare state me changes kar sakte hai hamne do button wala example dekha hai jisme ham username ko change kar dete the but ui me upfdate nahi hota thaa but jaise hi ham increase button pe click karte the to ui me update ho jata thaa. kyu ki components update hota thaa 


<!-- imp -->

function App() {
  const [count, setCount] = useState(0);

  console.log("App Render");

  return (
    <>
      <Navbar />
      <Main count={count} />
      <Footer />
    </>
  );
}


function Navbar() {
  console.log("Navbar Render");

  return <h1>Navbar</h1>;
}

<!--  ? app chalega, console me kya aayega? -->
App Render
Navbar Render
Main Render
Footer Render



✅ App ki state change → App re-render hoga.
✅ Default behavior me App ke child components (Navbar, Main, Footer) bhi re-render honge.
✅ Child component ki apni useState reset nahi hoti; React us state ko preserve karta hai.
✅ Re-render ka matlab state dobara initialize hona nahi hota.
✅ React.memo use karne par unnecessary child re-renders ko roka ja sakta hai.

