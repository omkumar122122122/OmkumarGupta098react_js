import React, { useState } from 'react'

const Projects = (props) => {
    const [show,setshow]=useState(false)
    function hclick(){
        show?setshow(false):setshow(true)
    }
    if(show){
        return (

            <div>
                <h2>{props.title}</h2>
                <p>{props.bio}</p>
                <h5>tech stack</h5>
                {props.tag.map(tag=>
                    <p>{tag}</p>
                )}
                <button onClick={hclick}>hide</button>
                
                
            </div>
          )

    }
    else{
        return(
            <div>
            <h2>{props.title}</h2>

                <button onClick={hclick}>show</button>
            </div>
        )
    }
  
}

export default Projects

