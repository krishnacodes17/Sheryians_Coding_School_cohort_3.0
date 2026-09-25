import React from 'react'
import { RouterProvider } from "react-router/dom";
import { Approutes } from './routes/appRoutes';

function App() {
  return (
    <RouterProvider router={Approutes}/>
  )
}

export default App