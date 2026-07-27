import React from 'react'
import Hero from './components/Hero'

function Home() {
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
  return (
    <div>
        <Hero name={detail.name} tag={detail.tag} sbio={detail.shortBio}></Hero>


    </div>
  )
}

export default Home