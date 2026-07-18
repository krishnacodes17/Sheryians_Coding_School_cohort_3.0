# context API

- it is a higeher order functions 
- there are two things in context API
  - consumer  -> createContext() 
-   -  provider  -> Provider contextProvider = ({children}) => {
    const [state, setState] = useState(initialState);
    return (
        <Context.Provider value={{ state, setState }}>
            {children}
        </Context.Provider>
    );

# component lifecycle methods
- componentDidMount: This method is called after the component is rendered for the first time.
- componentDidUpdate: This method is called after the component is updated (re-rendered)
- componentWillUnmount: This method is called just before the component is removed from the DOM.


# Useeffect hook
-  useEffect is a hook that allows you to perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

-   - useEffect(()=> {
        // code to run on component mount or update
        return () => {
            // cleanup code to run on component unmount
        };
    }, [dependencies]); // optional array of dependencies that determine when the effect should run

# memory leak 
- A memory leak in React occurs when components are not properly cleaned up, leading to increased memory usage over time. This can happen when event listeners, timers, or subscriptions are not removed when a component unmounts.


# axios
- Axios is a popular JavaScript library used to make HTTP requests from the browser or Node.js 
