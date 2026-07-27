import React from 'react'
import Hero from './components/Hero'
import { Link } from 'react-router-dom'

function Home({detail}) {
    
  return (
    <div>
        <Hero name={detail.name} tag={detail.tag} sbio={detail.shortBio}></Hero>
        <Link to={'/about'}>Know more</Link>



    </div>
  )
}

export default Home