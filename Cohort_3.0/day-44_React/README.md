# Dynamic routing in React
- Dynamic routing is a technique used in React applications to create routes that can change based on the data or user interactions. Unlike static routing, where routes are predefined and fixed, dynamic routing allows for more flexibility and can adapt to different scenarios.


### Key Concepts of Dynamic Routing
1. **Route Parameters**: Dynamic routes often include parameters that can be used to capture values from the URL. For example, a route like `/user/:id` can capture the `id` parameter from the URL, allowing you to fetch and display data specific to that user.

2. **Nested Routes**: Dynamic routing can also support nested routes, where a parent route can have child routes that are rendered based on the current URL. This allows for more complex navigation structures within an application.

3. **Conditional Rendering**: Dynamic routing can be combined with conditional rendering to display different components or content based on the current route or user state. This enables developers to create personalized experiences for users.

## here we learn react Routing and its two mode of routing in react
- declarative approach 
- - here we get predefined components and we use them to create routes in react
- - here we get BrowserRouter, Routes, Route, Link, NavLink, Navigate, Outlet, useParams, useNavigate, useLocation

- Data approach
- - we learnabout in next session

## today we learn about declarative routing in react


# different between declarative and data approach
- api call after rendering component in declarative approach
- api call before rendering component in data approach


# Protected Routes
- Protected routes are a way to restrict access to certain parts of a React application based on user authentication or authorization. They ensure that only authorized users can access specific routes, while unauthorized users are redirected to a login page or an error page.