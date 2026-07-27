import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './features/Home/Home'
import About from './features/About/About';
import Contact from './features/contact/Contact';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const detail={
    name: "Om Kumar Gupta",
    tag: "Software Developer",      
    shortBio: "i am a enthuzatic developer can full fill all",  
    fullBio: "i am a enthuzatic developer can full fill all requirements of the clint in the websight can intergrate AI services",          
    skills: [    
        { title: "tech Skills", items: ["Graphic designing", " frontend development"] },  
    ],
    projects: [    
        { title: "...", bio: "...", tags: ["...", "..."] },  
    ],
}
  const route=createBrowserRouter(
    [
      {path:"/",
        element:<Home detail={detail}/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  )


  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
