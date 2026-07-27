import React from 'react'
import Cards from './components/Cards'
import Nav from '../../shared/components/Nav'
import Projects from './components/Projects'
Projects

const About = ({detail}) => {
  return (
    <div>
        <Nav></Nav>
        <div className="bio">
        {detail.fullBio}

        </div>

        
            <div className="skill">
            {
            detail.skills.map(skill=>

                <Cards title={skill.title} decp={skill.decp}/>

            )

            }
            </div>
            <div className="project">

                <h1>my projects</h1>
                {detail.projects.map(pro=>

                <Projects title={pro.title} bio={pro.bio} tag={pro.tags}/>

                )}
            </div>
        
        </div>
        
  )
}

export default About