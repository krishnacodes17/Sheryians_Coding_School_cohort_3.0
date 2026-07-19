# React-Router-Dom
- React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

- install react-router-dom using npm or yarn

## this is Declarative routing

```bash
npm install react-router-dom
```

- setup the router in your application by wrapping your app component with BrowserRouter in index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
``` 

- routing 

```javascript
import { Route, Routes } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

- navigation

```javascript
import { Link } from 'react-router-dom';
<nav>
  <Link to="/">Home</Link> 
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
</nav>
````

- nested routes

```javascript
<Routes>
  <Route path="/" element={<Home />}>
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>

```

- access nested routes

```javascript
import { Outlet } from 'react-router-dom';
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
        <Outlet />
      </div>
    );
}
````

-useNavigate hook

```javascript
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate('/about');
  };
  return (
    <div>
      <h1>Home Page</h1>
        <button onClick={goToAbout}>Go to About</button>
        </div>
    );
}
```