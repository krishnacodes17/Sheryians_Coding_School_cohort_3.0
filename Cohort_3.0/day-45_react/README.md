# Data approacch in react-router-js

- data approach inside no components accept one (Router Provider) 

- create browser router  for creating router

## how we create router in decelarative approach vs data apporach 
### Decelarative approach
```
 //* in our main.js file we wrap our app with BrowserRouter *//
    <BrowserRouter>
        <App / >
    </BrowserRouter>

 //* in our app.js file we create our routes for components rendering *//

    function App() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        );
    }

    export default App;

```

### Data approach

``` 
/* in our main.js we normaly render our routerfile where we write our routes  */

 createRoot(document.getElementById("root")).render(
    // ! here we direct use our router components
    <AppRoutes />
);



/* in our router file we create our routes inside our createBrowserRouter([{}]) as a array of objects */

import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contect"


function AppRoutes() {

    let router = createBrowserRouter([
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/contact",
            element:<Contact />
        }
    ])


  return <RouterProvider  router={router}/>
}

export default AppRoutes


```

###  here we only render components not components and Home.jsx , About.jsx, Contact.jsx are pages not components because they are not reusable and we only render them in our router file. components are reusable and we can use them in multiple places but pages are not reusable and we only render them in our router file.


# Layout in
- when we use data approach we create a layout and inside our layout we render our Pages

## Note
<Note> when we use react-router in seme case where we create router components where we create our routes  so remember that we use  Link for navigate that link always came inside router components because router components are the only components that can use Link for navigation. if we use Link outside router components it will not work because Link is a part of react-router and it needs to be inside router components to work properly. so always remember that Link should be used inside router components only.




## Interseptor for axios api calls
- we can use interseptor for axios api calls to handle errors and responses globally in our application. This allows us to manage API responses and errors in a centralized manner, making our code cleaner and easier to maintain.

``` import axios from "axios"

export const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com",

})

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("in interceptors >>", response)
        // return []
        return response
    },
    (error)=>{
        console.log(error)
    }
)
 ```