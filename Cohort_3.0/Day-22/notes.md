# Day 22: Promises and Async/Await - Deep Dive Notes

---

## 1. Understanding Promises

### What is a Promise?
- **Definition**: Object representing eventual completion (or failure) of an async operation
- **Purpose**: Handle asynchronous operations with cleaner syntax than callbacks
- **Timing**: Operation completes in future, promise handles the result
- **Real-world**: Like booking a flight - you get a booking confirmation (promise), then get result later
- **Modern Standard**: Better alternative to callback hell

### Why Promises?

**Without Promises (Callback Hell):**
```javascript
getUser(userId, function(user) {
    getOrders(user.id, function(orders) {
        getOrderDetails(orders[0], function(details) {
            console.log(details);
        });
    });
});
// Hard to read, maintain, debug - "Pyramid of Doom"
```

**With Promises (Chain Pattern):**
```javascript
getUser(userId)
    .then(user => getOrders(user.id))
    .then(orders => getOrderDetails(orders[0]))
    .then(details => console.log(details))
    .catch(error => console.log(error));
// Clean, readable, maintainable
```

---

## 2. Three States of a Promise

### Promise States Diagram

```
                    ┌─────────────────┐
                    │    PENDING      │
                    │ (Waiting State) │
                    └────────┬────────┘
                             │
                    ┌────────┴────────┐
                    │                 │
            ┌───────▼────────┐  ┌────▼──────────┐
            │   RESOLVED     │  │   REJECTED    │
            │   (Success)    │  │   (Failure)   │
            │  .then() runs  │  │  .catch() runs│
            └────────────────┘  └───────────────┘
```

### State 1: PENDING
- **Description**: Promise is waiting, operation hasn't completed
- **Duration**: Initial state, lasts until resolved or rejected
- **No action**: Can't handle result yet

```javascript
let promise = new Promise((resolve, reject) => {
    // This promise is PENDING while setTimeout runs
    setTimeout(() => {
        resolve("Done!");  // Will change to RESOLVED
    }, 2000);
});

console.log(promise);  // Promise { <pending> }
```

### State 2: RESOLVED (Fulfilled)
- **Description**: Promise succeeded, operation completed successfully
- **Result**: Value passed to resolve()
- **Handling**: .then() method handles resolved promise
- **Irreversible**: Once resolved, cannot be rejected

```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");  // Promise becomes RESOLVED
    }, 1000);
});

promise.then((result) => {
    console.log(result);  // "Success!"
});
```

### State 3: REJECTED
- **Description**: Promise failed, operation encountered error
- **Error**: Value passed to reject()
- **Handling**: .catch() method handles rejected promise
- **Irreversible**: Once rejected, cannot be resolved

```javascript
let promise = new Promise((resolve, reject) => {
    let error = true;
    
    if (error) {
        reject("Something went wrong!");  // Promise becomes REJECTED
    }
});

promise.catch((error) => {
    console.log(error);  // "Something went wrong!"
});
```

---

## 3. Creating Promises

### Basic Promise Syntax

```javascript
let promise = new Promise((resolve, reject) => {
    // Executor function
    // resolve: function to call on success
    // reject: function to call on failure
    
    if (/* operation successful */) {
        resolve(value);  // Pass success value
    } else {
        reject(error);   // Pass error/reason
    }
});
```

### Simple Promise Example

```javascript
function willItWork() {
    return new Promise((resolve, reject) => {
        let success = true;
        
        if (success) {
            resolve("It works!");
        } else {
            reject("It doesn't work!");
        }
    });
}

// Using the promise
willItWork()
    .then((message) => {
        console.log(message);  // "It works!"
    })
    .catch((error) => {
        console.log(error);
    });
```

### Promise with Async Operation (Simulated)

```javascript
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulating async operation
        setTimeout(() => {
            if (userId > 0) {
                let user = {
                    id: userId,
                    name: "Ali",
                    email: "ali@example.com"
                };
                resolve(user);  // Success
            } else {
                reject("Invalid user ID");  // Failure
            }
        }, 2000);
    });
}

fetchUserData(1)
    .then((user) => {
        console.log("User:", user);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
```

---

## 4. Promise Methods: .then() and .catch()

### .then() Method
- **Purpose**: Handle successful promise (RESOLVED state)
- **Parameters**: Receives value from resolve()
- **Returns**: New promise (allows chaining)
- **Runs**: Only if promise resolves

```javascript
let promise = Promise.resolve("Success!");

promise.then((result) => {
    console.log(result);  // "Success!"
    return result.toUpperCase();
})
.then((upper) => {
    console.log(upper);  // "SUCCESS!"
});
```

### .catch() Method
- **Purpose**: Handle failed promise (REJECTED state)
- **Parameters**: Receives value from reject()
- **Returns**: New promise (allows chaining)
- **Runs**: Only if promise rejects

```javascript
let promise = Promise.reject("Something failed!");

promise.catch((error) => {
    console.log("Caught error:", error);  // "Caught error: Something failed!"
    return "Error handled";
})
.then((message) => {
    console.log(message);  // "Error handled"
});
```

### .finally() Method
- **Purpose**: Run code regardless of promise outcome
- **Always runs**: After .then() or .catch()
- **No parameters**: Doesn't receive value or error
- **Common use**: Cleanup, hiding loading spinners

```javascript
let promise = fetch("https://api.example.com/data");

promise
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => {
        console.log("Request complete (success or failure)");
        // Hide loading spinner
        // Close database connection
    });
```

---

## 5. Promise Chaining

### What is Promise Chaining?
- **Concept**: Connecting multiple async operations in sequence
- **Method**: Each .then() returns a new promise
- **Benefit**: Readable, sequential async flow
- **Alternative**: Better than callback nesting

### Simple Promise Chain

```javascript
fetch("https://api.example.com/user/1")
    .then(response => response.json())     // Step 1: Parse JSON
    .then(user => fetchUserOrders(user.id)) // Step 2: Get orders
    .then(orders => console.log(orders))   // Step 3: Show orders
    .catch(error => console.log(error));   // Handle any error
```

### Real-World Example: Food Ordering

```javascript
function orderFood() {
    // Step 1: Place order
    let orderPromise = new Promise((resolve, reject) => {
        console.log("📱 Placing order...");
        
        setTimeout(() => {
            console.log("✅ Order placed!");
            resolve({ orderId: 123, totalPrice: 500 });
        }, 2000);
    });
    
    // Step 2: Payment
    orderPromise.then((order) => {
        console.log("💳 Processing payment for ₹" + order.totalPrice);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("✅ Payment successful!");
                resolve(order);
            }, 2000);
        });
    })
    
    // Step 3: Delivery
    .then((order) => {
        console.log("🚗 Order is out for delivery");
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("✅ Order delivered!");
                resolve(order);
            }, 3000);
        });
    })
    
    // Step 4: Confirm
    .then((order) => {
        console.log("🎉 Thank you! Order #" + order.orderId);
    })
    
    .catch((error) => {
        console.log("❌ Error:", error);
    });
}

orderFood();
// Output (over ~7 seconds):
// 📱 Placing order...
// ✅ Order placed!
// 💳 Processing payment for ₹500
// ✅ Payment successful!
// 🚗 Order is out for delivery
// ✅ Order delivered!
// 🎉 Thank you! Order #123
```

### Returning Values in Chain

```javascript
Promise.resolve(5)
    .then(num => {
        console.log("First:", num);
        return num * 2;  // Returns 10
    })
    .then(num => {
        console.log("Second:", num);  // 10
        return num + 5;  // Returns 15
    })
    .then(num => {
        console.log("Third:", num);   // 15
        return num * 3;  // Returns 45
    })
    .then(result => {
        console.log("Final:", result); // 45
    });

// Output:
// First: 5
// Second: 10
// Third: 15
// Final: 45
```

---

## 6. Error Handling in Promises

### .catch() in Chain

```javascript
Promise.reject("First error")
    .then(() => {
        console.log("This doesn't run");
    })
    .catch((error) => {
        console.log("Caught:", error);  // "Caught: First error"
        return "Recovered";
    })
    .then((message) => {
        console.log(message);  // "Recovered"
    });
```

### Handling Specific Errors

```javascript
function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error("Cannot divide by zero"));
        } else {
            resolve(a / b);
        }
    });
}

divide(10, 0)
    .then(result => {
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log("Error:", error.message);  // "Error: Cannot divide by zero"
    });
```

### Multiple .catch() Handlers

```javascript
// First error handler
Promise.reject("Error 1")
    .catch((error) => {
        console.log("Catch 1:", error);
        throw new Error("Error 2");  // Throw new error
    })
    
    // Second error handler (for errors from first .catch())
    .catch((error) => {
        console.log("Catch 2:", error.message);
        return "Fixed!";
    })
    
    .then((message) => {
        console.log(message);  // "Fixed!"
    });
```

---

## 7. Async/Await: Modern Promise Syntax

### What is Async/Await?
- **Syntax**: Cleaner way to write promise-based code
- **Async**: Function that returns a promise
- **Await**: Pauses execution until promise settles
- **Readability**: Looks like synchronous code
- **Error Handling**: Uses try/catch like synchronous code
- **Modern**: ES2017 standard, widely supported

### Basic Async/Await

```javascript
// WITHOUT async/await (promises)
function getUser() {
    return fetch("https://api.example.com/user/1")
        .then(response => response.json())
        .then(user => console.log(user))
        .catch(error => console.log(error));
}

// WITH async/await (cleaner)
async function getUser() {
    try {
        let response = await fetch("https://api.example.com/user/1");
        let user = await response.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}
```

### Understanding Async Functions

```javascript
// async function always returns a promise
async function greet(name) {
    return `Hello, ${name}!`;
}

greet("Ali")
    .then(message => console.log(message))  // "Hello, Ali!"
    .catch(error => console.log(error));

// Equivalent to:
function greet(name) {
    return Promise.resolve(`Hello, ${name}!`);
}
```

### Understanding Await

```javascript
// await pauses execution until promise settles
async function getAndLogUser() {
    console.log("1. Starting...");
    
    // await pauses here until promise resolves
    let response = await fetch("https://api.example.com/user/1");
    console.log("2. Got response");
    
    let user = await response.json();
    console.log("3. Got user:", user);
    
    return user;
}

console.log("0. Before function");
getAndLogUser();
console.log("4. After function call");

// Output:
// 0. Before function
// 1. Starting...
// 4. After function call
// 2. Got response
// 3. Got user: {...}
```

### Real-World: Fetching Data

```javascript
async function fetchProductData() {
    try {
        console.log("Fetching products...");
        
        // Await API call
        let response = await fetch("https://fakestoreapi.com/products");
        
        // Await JSON parsing
        let products = await response.json();
        
        console.log("Products received:", products.length);
        return products;
        
    } catch (error) {
        console.log("Error fetching products:", error);
        return [];
    }
}

// Call async function
fetchProductData()
    .then(products => {
        console.log("Processing", products.length, "products");
    });
```

### Async/Await with Multiple Operations

```javascript
async function getUserAndOrders(userId) {
    try {
        // Fetch user
        let userResponse = await fetch(`https://api.example.com/users/${userId}`);
        let user = await userResponse.json();
        
        // Fetch orders for this user
        let ordersResponse = await fetch(`https://api.example.com/users/${userId}/orders`);
        let orders = await ordersResponse.json();
        
        console.log(`${user.name} has ${orders.length} orders`);
        
        return { user, orders };
        
    } catch (error) {
        console.log("Error:", error);
    }
}

getUserAndOrders(1);
```

---

## 8. Parallel Promises with Promise.all()

### What is Promise.all()?
- **Purpose**: Execute multiple promises in parallel
- **Returns**: Single promise that resolves when ALL complete
- **Order**: Results array matches input order
- **Failure**: Rejects if ANY promise rejects

### Promise.all() Example

```javascript
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log(results);  // [1, 2, 3]
    });
```

### Real-World: Fetching Multiple APIs

```javascript
async function getAllData() {
    try {
        // Fetch all in parallel
        let [users, products, orders] = await Promise.all([
            fetch("https://api.example.com/users").then(r => r.json()),
            fetch("https://api.example.com/products").then(r => r.json()),
            fetch("https://api.example.com/orders").then(r => r.json())
        ]);
        
        console.log("Users:", users.length);
        console.log("Products:", products.length);
        console.log("Orders:", orders.length);
        
    } catch (error) {
        console.log("Error:", error);
    }
}

getAllData();
```

### Promise.all() vs Sequential

```javascript
// ❌ Sequential (slow - 3 seconds total)
async function getDataSequential() {
    let data1 = await fetch("api/1").then(r => r.json());  // 1 second
    let data2 = await fetch("api/2").then(r => r.json());  // 1 second
    let data3 = await fetch("api/3").then(r => r.json());  // 1 second
    // Total: 3 seconds
}

// ✅ Parallel (fast - 1 second total)
async function getDataParallel() {
    let [data1, data2, data3] = await Promise.all([
        fetch("api/1").then(r => r.json()),  // All at once
        fetch("api/2").then(r => r.json()),
        fetch("api/3").then(r => r.json())
    ]);
    // Total: ~1 second
}
```

---

## 9. Other Promise Methods

### Promise.race()
- **Purpose**: Returns when FIRST promise settles
- **Use case**: Timeout, fallback options

```javascript
Promise.race([
    fetch("https://api.example.com/data").then(r => r.json()),
    new Promise((_, reject) => 
        setTimeout(() => reject("Timeout"), 5000)
    )
])
.then(data => console.log(data))
.catch(error => console.log("Error or timeout:", error));
```

### Promise.resolve()
- **Purpose**: Create immediately resolved promise
- **Use case**: Quick promise for compatibility

```javascript
Promise.resolve(42)
    .then(value => console.log(value));  // 42

// Equivalent to:
new Promise((resolve) => resolve(42));
```

### Promise.reject()
- **Purpose**: Create immediately rejected promise
- **Use case**: Error handling in async flows

```javascript
Promise.reject("Error!")
    .catch(error => console.log(error));  // "Error!"

// Equivalent to:
new Promise((_, reject) => reject("Error!"));
```

---

## 10. Fetch API - Real Example

### Simple Fetch Example

```javascript
// Using Promises
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(error => console.log("Error:", error));
```

### Fetch with Error Handling

```javascript
fetch("https://api.example.com/data")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error));
```

### Fetch with Async/Await

```javascript
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchData();
```

---

## 11. IIFE with Async (Immediately Invoked Async Function)

### What is IIFE with Async?
- **Pattern**: Execute async function immediately
- **Use case**: Run async code at module level
- **Syntax**: (async () => { ... })()

### IIFE Async Example

```javascript
// Execute async code immediately
(async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const post = await response.json();
        console.log(post.title);
        
    } catch (error) {
        console.log("Error:", error);
    }
})();
```

### Real-World: Initialization

```javascript
// Initialize application with data
(async () => {
    try {
        console.log("Loading app...");
        
        let config = await fetchConfig();
        let user = await getUser();
        let data = await loadData();
        
        console.log("App ready!");
        startApp(config, user, data);
        
    } catch (error) {
        console.log("Initialization failed:", error);
    }
})();
```

---

## 12. Common Patterns

### Pattern 1: Try/Catch with Async

```javascript
async function operation() {
    try {
        let result = await someAsyncOperation();
        return result;
    } catch (error) {
        console.log("Error:", error);
        return null;
    } finally {
        console.log("Operation complete");
    }
}
```

### Pattern 2: Loop with Async

```javascript
async function processItems(items) {
    for (let item of items) {
        try {
            let result = await processItem(item);
            console.log(result);
        } catch (error) {
            console.log("Error processing", item, ":", error);
        }
    }
}
```

### Pattern 3: Timeout with Promise.race()

```javascript
async function fetchWithTimeout(url, timeoutMs) {
    return Promise.race([
        fetch(url).then(r => r.json()),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), timeoutMs)
        )
    ]);
}

fetchWithTimeout("https://api.example.com/data", 5000)
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

---

## 13. Real-World Examples

### Example 1: Data Processing Pipeline

```javascript
async function processPipeline() {
    try {
        // Step 1: Fetch data
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        
        // Step 2: Filter data
        let filtered = data.filter(item => item.active);
        
        // Step 3: Transform data
        let transformed = filtered.map(item => ({
            id: item.id,
            name: item.name.toUpperCase()
        }));
        
        // Step 4: Save to database
        let saved = await saveToDatabase(transformed);
        
        console.log("Pipeline complete:", saved);
        
    } catch (error) {
        console.log("Pipeline error:", error);
    }
}
```

### Example 2: User Authentication

```javascript
async function authenticateUser(email, password) {
    try {
        // Step 1: Verify credentials
        let response = await fetch("https://api.example.com/login", {
            method: "POST",
            body: JSON.stringify({ email, password })
        });
        
        let result = await response.json();
        
        if (!result.token) {
            throw new Error("Invalid credentials");
        }
        
        // Step 2: Store token
        localStorage.setItem("token", result.token);
        
        // Step 3: Get user data
        let userResponse = await fetch("https://api.example.com/user", {
            headers: { Authorization: `Bearer ${result.token}` }
        });
        
        let user = await userResponse.json();
        
        return user;
        
    } catch (error) {
        console.log("Authentication failed:", error);
        return null;
    }
}
```

---

## 14. Common Mistakes

### Mistake 1: Not Using Await

```javascript
❌ async function getData() {
    let data = fetch("https://api.example.com/data");
    return data;  // Returns Promise, not data!
}

✅ async function getData() {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    return data;
}
```

### Mistake 2: Not Catching Errors

```javascript
❌ async function risky() {
    let data = await fetch("invalid-url");  // Can crash if not caught
}

✅ async function safe() {
    try {
        let data = await fetch("invalid-url");
    } catch (error) {
        console.log("Error handled:", error);
    }
}
```

### Mistake 3: Sequential Instead of Parallel

```javascript
❌ // Slow - waits for each
let user = await getUser();
let orders = await getOrders();
let payments = await getPayments();
// Total: ~3 seconds

✅ // Fast - all at once
let [user, orders, payments] = await Promise.all([
    getUser(),
    getOrders(),
    getPayments()
]);
// Total: ~1 second
```

### Mistake 4: Forgetting Return Statement

```javascript
❌ async function calculate() {
    let result = await someCalculation();
    result = result * 2;
    // Forgot return!
}

✅ async function calculate() {
    let result = await someCalculation();
    result = result * 2;
    return result;
}
```

---

## 15. Key Takeaways

### Promises ✅
- Three states: PENDING → RESOLVED/REJECTED
- .then(): Handle success
- .catch(): Handle errors
- .finally(): Cleanup code
- Chaining: Sequential async operations

### Async/Await ✅
- Modern syntax for promises
- `async` function returns promise
- `await` pauses until promise settles
- Try/catch for error handling
- Looks like synchronous code

### Best Practices ✅
- Always use try/catch with async/await
- Use Promise.all() for parallel operations
- Avoid callback hell with promises/async
- Handle errors gracefully
- Save Timer IDs for potential cancellation

---

## 16. Practice Exercises

```javascript
// Exercise 1: Simple Promise
function wait(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Waited ${seconds}s`), seconds * 1000);
    });
}

wait(2).then(msg => console.log(msg));

// Exercise 2: Promise Chain
Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 10)
    .then(num => console.log(num));  // 20

// Exercise 3: Error Handling
Promise.reject("Error occurred")
    .catch(error => console.log("Caught:", error))
    .then(() => console.log("Recovered"));

// Exercise 4: Async Function
async function greetAfterDelay(name) {
    await new Promise(r => setTimeout(r, 1000));
    return `Hello, ${name}!`;
}

greetAfterDelay("Ali").then(msg => console.log(msg));

// Exercise 5: Fetch API
async function getUserData(userId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let user = await response.json();
        console.log(user.name);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUserData(1);

// Exercise 6: Promise.all
async function loadMultiple() {
    let [users, posts, comments] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
        fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
        fetch("https://jsonplaceholder.typicode.com/comments").then(r => r.json())
    ]);
    
    console.log(`Loaded ${users.length} users, ${posts.length} posts, ${comments.length} comments`);
}

loadMultiple();
```

---

This completes the comprehensive notes for Day 22!
