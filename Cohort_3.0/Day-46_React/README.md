# Memoizaion  ...>> repet naa karna  
- memoization means saving something which needs continuouly

- its help to stop unwanted rerendering


## react.memo() hook

```
 
function App() {

  const [count , setCount] = useState(0)


console.log("App count " , count)

  return (
    <div>
      <h1>Memoization</h1>
      <button  onClick={()=> setCount(count + 1)} className='border px-4 py-1 m-3 cursor-pointer'>Increse</button>
      <About />
      <Contect />
    </div>
  )
}

``` 
- iss code me about aur contect component  rerender ho rahe hai jab bhi count change ho raha hai but about aur contect kaa use hi nahi ho raha hai too fir rerender karne ki kya jarurat hai isse bacchneke liye ham react.memo() hook ka use karenge

```

React.memo() is a higher order component. It will prevent the component from re-rendering if the props have not changed.

```
import React from 'react'

let About = ()=>{
    console.log("About rendering")
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default React.memo(About)    //! here its store refference   remmber here we store this function into variable  not with function keyword

// ! here function is reference data types so when its rerenderits change its valur(refference Value) so react memo() store its value anot update jabtak ussmekoi valueupdatenaa hoo 

```

### Rules of react.memo()
- its only memoize static ( jo change naa hoo components ke andat ) components
