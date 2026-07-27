import React, { useState } from 'react'

const Cards = ({title,decp}) => {
    const [show,setshow]=useState(false);
    console.log(title,decp)
  return (
    <div>
        <h2>{title}</h2>
        
        {show && <p>{decp}</p>}
        <button onClick={()=>{
            if(show){
                setshow(false)
            }
            else{
                setshow(true)
            }
        }}>{show?"hide":"show"}</button>
    </div>
  )
}

export default Cards