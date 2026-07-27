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
    fullBio: "i am a enthuzatic developer can full fill all requirements of the clint in the websight can intergrate AI services   i am a enthuzatic developer can full fill all requirements of the clint in the websight can intergrate AI services   i am a enthuzatic developer can full fill all requirements of the clint in the websight can intergrate AI services ",          
    skills: [    
        {title:"Graphic designing",decp:"i am a good grapic designer expert in all type of desing softwate as well as printing work"},
        {title:"frontend development",decp:"i am a exellent ui designer with extra ordinary skill because i am also a grapic designer i have god designing skills"},
        {title:"java",decp:"i have good problem solving skills and good concrpt of oops in java"},
        {title:"c++" ,decp:"same as java"} 
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
        element:<About detail={detail}/>
      },
      {
        path:"/contact",
        element:<Contact detail={detail}/>
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
