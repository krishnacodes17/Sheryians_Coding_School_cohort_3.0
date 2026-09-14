import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router/AppRouter'

function AppRouter() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default AppRouter