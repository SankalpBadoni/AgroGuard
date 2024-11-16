import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout/Layout'
import Home from './Pages/HomePage/Homepage'
import About from './Pages/About/About'
import Contact from './Pages/contact/Contact'

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
