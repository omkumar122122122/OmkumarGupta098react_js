import React from 'react'
import Nav from '../../shared/components/Nav'

const About = ({detail}) => {
  return (
    <div>
        <Nav></Nav>
        <div className="bio">

        </div>
        {detail.fullBio}
        </div>
  )
}

export default About