import React from 'react'
import Mypic from './Mypic.png'

const Hero = (props) => {
  return (
    <div>
        <div className='detail'>
        <h1>WELCOME</h1>
        <h2>I am {props.name}</h2>
        <h4>{props.tag}</h4>
        <p>{props.sbio}</p>
        </div>
        <div className='pic'>
            <img src={Mypic} alt="" srcset="" />
        </div>

    </div>
  )
}

export default Hero