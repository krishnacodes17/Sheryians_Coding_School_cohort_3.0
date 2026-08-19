# Debounceing in React
- Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In React, debouncing is often used in scenarios like search input fields, where you want to limit the number of API calls made as the user types.

# Throttling in react
- Throttling is another programming practice that limits the number of times a function can be called over time. Unlike debouncing, which delays the execution of a function until a certain amount of time has passed since the last time it was invoked, throttling ensures that a function is called at regular

# code splitting in react
- Code splitting is a technique used in React to split your code into smaller chunks, which can then be loaded on demand. This can improve the performance of your application by reducing the initial load time



# LAzy hook 
- ye import statement kopromise me convert kar deta hai aur jab component render hota hai tab ye component ko load karta hai.

``` 
let HomePages = lazy(()=> import("../pages/HomePages"))
```

# Suspense hook
- Suspense is a React component that allows you to display a fallback UI (like a loading spinner) while waiting for a component to load. It is often used in conjunction with the lazy hook  (ye lazy hook ke sath use hota hai) to handle the loading state of dynamically imported components.

```