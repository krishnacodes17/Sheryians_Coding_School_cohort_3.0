# Day - 61 backend (Day-2)

## creating a server & API endpoints

```
const http = require('http');

let server = http.createServer((req, res) => {
        res.end("You hit "/" routes (API endpoint ")
    }

        if(req.url === "/user"){
        res.end("You hit " + "/user" + " routes (API endpoint ) ")
    }

        if(req.url === "/post"){
        res.end("You hit " +  "/post" + " routes (API endpoint ")
    }

})
});


server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


```


## now we will create a server using express js

-  install express
```
 npm install express
 ```

## creating server with express js

```
 const express = require('express');
 const app = express();

 app.get("/",()=>{
    res.send("You hit "/" routes (API endpoint ) ")
 })

 app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
 });


 ```


---

# EXPRESS.JS — Detailed Notes

## Express.js Kya Hai?

> **Express.js** ek **web application framework** hai Node.js ke liye — jo server banana **easy, fast aur simple** bana deta hai.
>
> Simple mein: **Node.js ke upar ek layer hai jo kam code mein zyada kaam karne deta hai.**

### Bina Express ke (Node.js ka http module):
```javascript
// Bina Express ke — Bahut zyada code likhna padta hai
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page');
    } else if (req.url === '/contact' && req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact Page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000);
```

### Express ke saath:
```javascript
// Express ke saath — Bahut kam code!
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.post('/contact', (req, res) => {
    res.send('Contact Page');
});

app.listen(3000);
```

**Dekha? Express ne kaam aasan bana diya!**

---

## Express.js Kisne Banaya?

| Detail | Info |
|--------|------|
| **Banaya** | **TJ Holowaychuk** ne |
| **Release Date** | **22 May 2010** |
| **License** | MIT License |
| **Written In** | JavaScript |
| **Download** | `npm install express` |

---

## Express.js Kya Provide Karta Hai?

### 1. Routing System
```javascript
// Different routes handle karna easy hai
app.get('/users', (req, res) => { ... });     // GET request
app.post('/users', (req, res) => { ... });    // POST request
app.put('/users/:id', (req, res) => { ... }); // PUT request
app.delete('/users/:id', (req, res) => { ... }); // DELETE request
```

### 2. Middleware Support
```javascript
// Middleware = Function jo request ke beech mein kaam karta hai
app.use((req, res, next) => {
    console.log('Request aayi!');
    next(); // Agle step pe jao
});
```

### 3. Built-in Methods
```javascript
app.get()       // GET request handle karna
app.post()      // POST request handle karna
app.put()       // PUT request handle karna
app.delete()    // DELETE request handle karna
app.use()       // Middleware lagana
app.listen()    // Server start karna
```

### 4. Request/Response Object
```javascript
app.get('/user', (req, res) => {
    req.query       // URL parameters (?name=Rahul)
    req.params      // Route parameters (:id)
    req.body        // Request body (POST data)
    req.headers     // Request headers
    
    res.send()      // Response bhejna
    res.json()      // JSON response bhejna
    res.status()    // Status code set karna
});
```

### 5. Static Files Serve Karna
```javascript
// Public folder se files serve karna
app.use(express.static('public'));
// Ab images, CSS, JS files directly access ho sakti hain
```

---

## Express.js — Restaurant Example

> Express.js = Restaurant ka **manager** jo sabko coordinate karta hai

```
Customer (Browser)     Express Manager (app)     Kitchen (Backend)
      |                      |                        |
      |--- GET /menu ------->|--- Menu dikhao ------->|
      |                      |<-- Menu data -----------|
      |<-- Menu mil gaya ----|                        |
      
      |--- POST /order ------>|--- Order banao ------>|
      |   (Paneer chahiye)    |                       |
      |<-- Order confirm ----|<-- Order ready --------|
```

---

# API — Detailed Notes

## API Kya Hai?

> **API = Application Programming Interface**
>
> API ek **set of rules** hai jo batata hai — do software kaise ek dusre se baat karein.
>
> Simple mein: **API ek contract hai — "Tum mujhe yeh do, main tumhe woh doonga"**

### Restaurant Example:
```
API = MENU CARD of a restaurant
- Menu card mein likha hai:
  → "Paneer Butter Masala — ₹300"
  → "Dal Makhani — ₹200"
  → "Naan — ₹50"

- Aap (customer) ko nahi pata kitchen mein kya ho raha hai
- Aapko sirf menu card se pata hai — kya order kar sakte ho aur kitne mein

API bhi yahi karti hai:
- API batata hai — kya request kar sakte ho
- Aapko nahi pata backend mein kya ho raha hai
- Aapko sirf API endpoints pata hain
```

---

## API Ke Parts

### 1. Endpoint (URL)
```
https://api.example.com/users/123
              |              |     |
              |              |     +--- Resource ID (kaunsa user)
              |              +--- Resource (users = user ka data)
              +--- Base URL (kahan hai server)
```

### 2. HTTP Method (Kya karna hai?)
```
GET    = Data lena (padhna)         → Menu dekhna
POST   = Naya data dena (banana)    → Naya order dena
PUT    = Data update karna          → Order change karna
DELETE = Data delete karna          → Order cancel karna
```

### 3. Request (Aap kya bhej rahe ho?)
```javascript
// Request mein yeh jaata hai:
{
    method: "GET",           // Kya karna hai
    url: "/api/users",       // Kahan jaana hai
    headers: {               // Extra info
        "Content-Type": "application/json"
    },
    body: {                  // Data (POST/PUT ke liye)
        "name": "Rahul",
        "email": "rahul@gmail.com"
    }
}
```

### 4. Response (Server kya bhejta hai?)
```javascript
// Server yeh wapas bhejta hai:
{
    status: 200,             // Success ya error
    data: {                  // Actual data
        "id": 1,
        "name": "Rahul",
        "email": "rahul@gmail.com"
    }
}
```

---

## API Types

### 1. REST API (Most Common)
```
REST = Representational State Transfer
- HTTP methods use karta hai (GET, POST, PUT, DELETE)
- JSON format mein data exchange hota hai
- Example: GET /api/users — sab users ka data
```

### 2. GraphQL
```
- Aap specify karte ho — kya data chahiye
- Ek single endpoint se sab data mil jaata hai
- Example: query { users { name email } }
```

### 3. SOAP
```
- Purana hai — XML format use karta hai
- Bahut heavyweight hai
- Banks aur government websites abhi bhi use karti hain
```

---

## API Call Kaise Kaam Karti Hai — Step by Step

```
Step 1: Aap browser mein type karte ho → "google.com"
            |
            v
Step 2: Browser DNS se IP address dhundhta hai
            |
            v
Step 3: Browser Google ke server ko HTTP Request bhejta hai
            |   GET / HTTP/1.1
            |   Host: www.google.com
            v
Step 4: Google ka server request process karta hai
            |   (HTML, CSS, JS files ready karta hai)
            v
Step 5: Server HTTP Response bhejta hai
            |   HTTP/1.1 200 OK
            |   Content-Type: text/html
            |   <html>...Google homepage...</html>
            v
Step 6: Browser response ko render karta hai
            |   Aapke screen pe Google dikhta hai! ✅
```

---

## API Example — Express.js Mein

```javascript
const express = require('express');
const app = express();

// Middleware — JSON parse karna
app.use(express.json());

// GET API — Data lena
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Rahul', email: 'rahul@gmail.com' },
        { id: 2, name: 'Priya', email: 'priya@gmail.com' }
    ];
    res.json(users);
});

// POST API — Naya data daalna
app.post('/api/users', (req, res) => {
    const newUser = req.body;  // Client se data aaya
    // Database mein save karo
    res.status(201).json({ message: 'User created!', user: newUser });
});

// PUT API — Data update karna
app.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    res.json({ message: `User ${id} updated!` });
});

// DELETE API — Data delete karna
app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    res.json({ message: `User ${id} deleted!` });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

---

# PROTOCOL — Detailed Notes

## Protocol Kya Hai?

> **Protocol = Rules ka set** — kaise kaam karna hai
>
> Simple mein: **Jaise cricket ka rule book hai — har player ko follow karna padta hai**
> **Waise hi protocol hai — har device ko follow karna padta hai**

### Real Life Examples:
```
1. Driving Protocol:
   - Left side pe drive karo (India mein)
   - Red light pe ruko
   - Speed limit follow karo
   → Yeh sab RULES hain — inhe PROTOCOL kehte hain

2. Restaurant Protocol:
   - Pehle table pe baitho
   - Menu dekho
   - Order do
   - Payment karo
   → Yeh sab EKK sequence hai — protocol hai

3. Phone Call Protocol:
   - Phone uthao
   - "Hello" bolo
   - Baat karo
   - "Bye" bolo
   → Yeh sab RULES hain
```

---

## Internet Protocols

### TCP/IP — Internet Ka sabse bada protocol
```
TCP/IP = Transmission Control Protocol / Internet Protocol
- Internet ka FOUNDATION hai
- Data packets mein divide hota hai
- Har packet sahi address pe pahunchta hai

Restaurant Example:
TCP/IP = Restaurant ka SYSTEM
- Order aata hai → Kitchen mein jaata hai → Packet mein hota hai
- Har ingredient sahi jagah jaata hai
- Ek bhi ingredient missing ho toh customer complain karega
```

### DNS — Domain Name Protocol
```
DNS = Domain Name System
- google.com → 142.250.190.46
- Domain name ko IP address mein convert karta hai

Restaurant Example:
DNS = Phonebook
- "Rahul ka number kya hai?"
- Phonebook mein dhundho → Number mil gaya
- Ab call kar sakte ho
```

### FTP — File Transfer Protocol
```
FTP = File Transfer Protocol
- Files upload/download karne ke liye
- Computer se computer mein file bhejne ke liye

Restaurant Example:
FTP = Delivery System
- Kitchen se khana customer tak pahunchana
- File transfer = Khana transfer
```

### SMTP — Email Protocol
```
SMTP = Simple Mail Transfer Protocol
- Emails bhejne ke liye use hota hai
- Gmail, Outlook sab SMTP use karte hain

Restaurant Example:
SMTP = Courier Service
- Aap letter likhte ho → Courier se bhejte ho → Receiver ko milta hai
- Email = Digital letter
```

### SSH — Secure Shell Protocol
```
SSH = Secure Shell Protocol
- Remote server pe safely connect hone ke liye
- Password encrypted hota hai

Restaurant Example:
SSH = VIP Entry
- Special ID card se andar ja sakte ho
- Koi aur andar nahi ja sakta — sirf authorized log
```

---

# HTTP — Detailed Notes

## HTTP Kya Hai?

> **HTTP = HyperText Transfer Protocol**
>
> Web ka sabse important protocol — jo browser aur server ke beech **communication** karta hai.
>
> Simple mein: **HTTP ek language hai jo browser aur server mein baat karti hai**

### Restaurant Example:
```
HTTP = WAITER ka system
- Customer (Browser) waiter ko order deta hai
- Waiter (HTTP) order kitchen (Server) tak le jaata hai
- Kitchen response bhejti hai
- Waiter wapas customer ko deta hai

HTTP = MESSAGE FORMAT
- "Mujhe yeh chahiye" (Request)
- "Yeh lo" (Response)
```

---

## HTTP Request — Client Kya Bhejta Hai?

```
GET /api/users HTTP/1.1          ← Request Line
Host: www.example.com           ← Header
Content-Type: application/json  ← Data format
Authorization: Bearer token123  ← Authentication
                                 ← Empty line
{ "name": "Rahul" }             ← Body (POST/PUT mein)
```

### Request Line Ka Parts:
```
GET /api/users HTTP/1.1
|    |         |
|    |         +--- HTTP Version (1.1)
|    +--- URL/Path (kahan jaana hai)
+--- Method (kya karna hai)
```

---

## HTTP Response — Server Kya Bhejta Hai?

```
HTTP/1.1 200 OK                 ← Status Line
Content-Type: application/json  ← Header
                                 ← Empty line
{ "id": 1, "name": "Rahul" }   ← Body (actual data)
```

### Status Line Ka Parts:
```
HTTP/1.1 200 OK
|         |   |
|         |   +--- Status Text (OK, Not Found, etc.)
|         +--- Status Code (200, 404, 500, etc.)
+--- HTTP Version
```

---

## HTTP Status Codes — Complete List

### 2xx — Success (Kaam ho gaya!)
```
200 OK              → Sab theek hai
201 Created         → Naya resource ban gaya
204 No Content      → Kaam ho gaya, par data nahi bhejna
```

### 3xx — Redirect (Jagah badlo!)
```
301 Moved Permanently → URL permanently change ho gaya
302 Found             → Temporary redirect
304 Not Modified      → Cache se le lo
```

### 4xx — Client Error (Aapki galti!)
```
400 Bad Request     → Aapne galat data bheja
401 Unauthorized    → Login karo pehle
403 Forbidden       → Permission nahi hai
404 Not Found       → Woh page/resource nahi mila
405 Method Not Allowed → Woh method allowed nahi hai
```

### 5xx — Server Error (Server ki galti!)
```
500 Internal Server Error → Server crash ho gaya
502 Bad Gateway           → Server ko response nahi mila
503 Service Unavailable   → Server busy hai / down hai
504 Gateway Timeout       → Server bahut slow hai
```

---

## HTTP Methods — Detail Mein

### 1. GET — Data LENA
```
Purpose: Sirf data padhna / lena
- Safe hai (kuch change nahi hota)
- Idempotent hai (same request bar bar kar sakte ho)

Example:
  GET /api/users     → Sab users ka data chahiye
  GET /api/users/1   → Sirf user #1 ka data chahiye

Browser mein: 
  Aap google.com karte ho → Browser GET request bhejta hai
```

### 2. POST — Naya Data BHEJNA
```
Purpose: Naya resource banana
- Safe nahi hai (naya data create hota hai)
- Idempotent nahi hai (same request se naya record banega)

Example:
  POST /api/users    → Naya user banana
  Body: { "name": "Rahul", "email": "rahul@gmail.com" }

Restaurant Example:
  POST = Naya order dena — "Mujhe Paneer Chahiye"
```

### 3. PUT — Poora Data UPDATE Karna
```
Purpose: Existing resource ka poora data update karna
- Safe nahi hai (data change hota hai)
- Idempotent hai (same update bar bar kar sakte ho)

Example:
  PUT /api/users/1   → User #1 ka poora data update karo
  Body: { "name": "Rahul Kumar", "email": "rk@gmail.com" }

Restaurant Example:
  PUT = Order change karna — "Mujhe Dal Chahiye, Paneer Nahi"
```

### 4. PATCH — Thoda Data UPDATE Karna
```
Purpose: Existing resource ka kuch hi fields update karna
- PUT se zyada efficient

Example:
  PATCH /api/users/1 → Sirf email update karo
  Body: { "email": "newrahul@gmail.com" }

Restaurant Example:
  PATCH = Sirf quantity change — "Naan 2 ki jagah 4 kar do"
```

### 5. DELETE — Data HATANA
```
Purpose: Resource delete karna
- Safe nahi hai (data ud jaata hai)

Example:
  DELETE /api/users/1 → User #1 ko delete karo

Restaurant Example:
  DELETE = Order cancel — "Mujhe order nahi chahiye"
```

---

## HTTP Headers — Kya Hota Hai?

```
Headers = Extra information jo request/response ke saath jaati hai

Content-Type: application/json    → Data JSON mein hai
Content-Type: text/html           → Data HTML mein hai
Authorization: Bearer token123    → Yeh mera token hai (login proof)
Cache-Control: no-cache           → Cache mat karo
Accept: application/json          → Mujhe JSON chahiye
User-Agent: Chrome/91.0           → Main Chrome browser hoon
Cookie: sessionId=abc123          → Mera session ID hai
```

---

## HTTP vs HTTPS

```
HTTP  = HyperText Transfer Protocol (Insecure)
HTTPS = HyperText Transfer Protocol Secure (Secure)

HTTP:
- Data PLAIN jaata hai (bina lock ke)
- Koi bhi beech mein dekh sakta hai
- Password openly jaata hai — hack ho sakta hai

HTTPS:
- Data ENCRYPTED jaata hai (lock laga ke)
- SSL Certificate hota hai (green lock dikhta hai)
- Password secure jaata hai — hack mushkil hai

Restaurant Example:
HTTP  = Open kitchen — sab dekh sakte hain kya ho raha hai
HTTPS = Closed kitchen — sirf authorized log dekh sakte hain
```

---

## HTTP ka Poora Flow — Restaurant Example

```
Customer (Browser)         HTTP (Waiter)          Kitchen (Server)
      |                        |                        |
      |--- "Mujhe menu chahiye"|---> "GET /menu" ------>|
      |    (REQUEST)            |    (HTTP REQUEST)      |
      |                        |                        |
      |                        |<--- "Menu ready!" -----|
      |                        |    (HTTP RESPONSE)      |
      |<--- "Yeh lo menu" -----|                        |
      |    (200 OK + Data)      |                        |
```

---

## Summary Table

| Term | Kya Hai? | Restaurant Example |
|------|----------|-------------------|
| **Express.js** | Node.js framework — server easy banata hai | Restaurant ka Manager |
| **API** | Rules — do software kaise baat karein | Menu Card |
| **Protocol** | Rules ka set — kaise kaam karna hai | Restaurant ka Rule Book |
| **HTTP** | Browser-Server communication protocol | Waiter ka System |
| **GET** | Data lena | Menu dekhna |
| **POST** | Naya data dena | Naya order dena |
| **PUT** | Data update karna | Order change karna |
| **DELETE** | Data delete karna | Order cancel karna |
| **Status Code** | Result batata hai | Order status (Ready/Pending/Cancelled) |

-DONE-