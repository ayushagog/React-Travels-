import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import DestinationCard from './pages/Destinations'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Packages from './pages/Packages'



export default function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/about',
          element:<About />
        },{
          path:'/destinations',
          element:<DestinationCard />
        },{
          path:'/contact',
          element:<Contact />
        },{
          path:'/packages',
          element:<Packages />
        }

      ]
    }
    
  ])
  return (
 <>
<RouterProvider router={router} />



 </>
  )
}
