# JavaScript - Promises and Async/Await

## Topics Covered in Day 22

### 1. Understanding Promises Fundamentals
- What are Promises and their purpose
- Why Promises are better than callback hell
- Handling asynchronous operations cleanly
- Real-world analogy (booking confirmation)
- Promise vs Callback comparison

### 2. Three States of a Promise
- **PENDING**: Initial state, operation waiting
- **RESOLVED (Fulfilled)**: Operation succeeded, value available
- **REJECTED**: Operation failed, error available
- State transitions (one-way, irreversible)
- State diagram visualization
- Each state can only transition once

### 3. Creating Promises
- `new Promise((resolve, reject) => { })` syntax
- Executor function and its parameters
- resolve(): Call on success, pass result
- reject(): Call on failure, pass error
- Promise constructor usage
- Simple and async operation examples
- Real-world promise creation patterns

### 4. Promise Methods: .then() and .catch()
- **.then()**: Handle resolved promise
- Parameters: Receives value from resolve()
- Returns: New promise for chaining
- **.catch()**: Handle rejected promise
- Parameters: Receives error from reject()
- Returns: New promise for chaining
- **.finally()**: Run regardless of outcome
- Cleanup and resource management

### 5. Promise Chaining
- Connecting multiple async operations
- Sequential promise flow
- Each .then() returns new promise
- Readable, maintainable async code
- Alternative to callback nesting
- Returning values through chain
- Real-world example: Food ordering system

### 6. Error Handling in Promises
- .catch() in promise chains
- Handling specific errors
- Multiple .catch() handlers
- Error propagation through chain
- try/catch alternative patterns
- Error recovery strategies

### 7. Async Functions (async keyword)
- What are async functions
- Always returns a promise
- Cleaner syntax than traditional promises
- Making code look synchronous
- Declaring async functions
- Multiple ways to write async functions

### 8. Await Keyword
- What await does (pauses execution)
- Pauses until promise settles
- Returns resolved value
- Only works inside async functions
- Understanding execution flow with await
- Multiple awaits in sequence

### 9. Try/Catch with Async/Await
- Error handling with try/catch
- Catching promise rejections
- Multiple operations in try block
- .finally() for cleanup
- Better error handling than .catch()

### 10. Real-World Async/Await Patterns
- Fetching data from APIs
- Processing multiple operations
- Error handling in complex flows
- Sequential vs parallel operations
- Production-ready patterns

### 11. Parallel Promises with Promise.all()
- Purpose: Execute multiple promises in parallel
- Returns: Single promise resolving to array of results
- Order: Results array matches input order
- Failure: Rejects if any promise rejects
- Performance: Faster than sequential
- Real-world: Fetching multiple APIs

### 12. Other Promise Methods
- **Promise.race()**: First promise settles wins
- **Promise.resolve()**: Create resolved promise
- **Promise.reject()**: Create rejected promise
- **Promise.allSettled()**: Wait for all (not common)
- Use cases for each method

### 13. Fetch API Integration
- HTTP requests with fetch()
- Response handling and .json()
- Error checking with response.ok
- Combining with promises
- Async/await with fetch
- Real API examples

### 14. IIFE with Async (Immediately Invoked Async Function)
- Pattern: (async () => { ... })()
- Execute async code at module level
- Application initialization
- Encapsulation benefits
- Error handling at top level

### 15. Common Patterns and Best Practices
- Auto-retry logic
- Timeout handling with Promise.race()
- Debouncing async operations
- Loading states management
- Data transformation pipeline
- Error recovery strategies

### 16. Common Mistakes
- Not using await in async function
- Not catching errors properly
- Sequential instead of parallel operations
- Forgetting return statements
- Mixing callback and promise syntax
- Not checking response.ok in fetch

### 17. Real-World Applications
- Data processing pipelines
- User authentication flows
- Multi-step operations
- API integration
- Error handling and recovery
- Loading and caching data

### 18. Performance Optimization
- Sequential vs Parallel execution
- Promise.all() for speed
- Avoiding unnecessary awaits
- Resource cleanup with finally
- Memory management

### 19. Debugging Promises
- Understanding promise rejection
- Debugging async/await code
- Network request debugging
- Error stack traces
- Tracking promise state

### 20. Migration from Callbacks to Promises
- Replacing callback patterns
- Gradual adoption
- Benefits of migration
- Compatibility considerations

## Important Concepts to Remember

✅ **Promise States**: PENDING → RESOLVED/REJECTED (one-way)
✅ **Callbacks**: Functions passed to then/catch for handling results
✅ **.then()**: Handles successful promises (RESOLVED)
✅ **.catch()**: Handles failed promises (REJECTED)
✅ **.finally()**: Runs regardless of outcome
✅ **Async**: Function that returns a promise
✅ **Await**: Pauses execution until promise settles
✅ **Try/Catch**: Error handling in async code
✅ **Promise.all()**: Execute multiple promises in parallel
✅ **Promise.race()**: Returns when first promise settles
✅ **Fetch API**: Modern HTTP requests
✅ **Promise Chaining**: Sequential async operations
✅ **Callback Hell**: Problem that promises solve
✅ **Error Handling**: Crucial for async operations
✅ **IIFE Async**: Execute async code immediately

## Promise State Diagram

```
        ┌─────────────────┐
        │    PENDING      │
        │ (Initial State) │
        └────────┬────────┘
                 │
        ┌────────┴────────┐
        │                 │
  ┌─────▼──────┐    ┌────▼──────────┐
  │ RESOLVED   │    │   REJECTED    │
  │ (Success)  │    │   (Failure)   │
  │.then() runs│    │.catch() runs  │
  └────────────┘    └───────────────┘
```

## Async/Await Flow

```
Promise-based:
fetch() → .then(response) → response.json() → .then(data) → .catch(error)

Async/Await:
await fetch() → await response.json() → try/catch for errors
(Cleaner, looks synchronous)
```

## Best Practices

✅ Always handle errors with try/catch or .catch()
✅ Use Promise.all() for parallel operations (faster)
✅ Use await to make code readable
✅ Return promises from functions for flexibility
✅ Use finally() for cleanup operations
✅ Check response.ok in fetch calls
✅ Avoid mixing callbacks and promises
✅ Keep async functions focused and simple
✅ Document promise-based flows
✅ Test error paths thoroughly
✅ Use meaningful error messages
✅ Handle rejection in all promises
✅ Don't ignore unhandled promise rejections
