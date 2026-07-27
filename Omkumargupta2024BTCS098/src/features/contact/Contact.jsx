import React, { useState } from 'react'

import Nav from '../../shared/components/Nav'

const Contact = ({detail}) => {
    const [name,setname]=usestate("")
    const [email,setemai]=usestate("")
    const [pno,setpno]=usestate("")
    const [show,setshow]=usestate(false)
    const [pname,setpname]=useState("")

    function handelclick(e){
        setpname(name);

        setemai("")
        setname("")
        setpno("")
        setshow(true)


        

    }
  return (
    <div>
        <Nav></Nav>

        <form action="">
            <input type="text" value={name} placeholder='enter your name' onChange={(e)=>setname(e.target.value)} />
            <input type="text" value={email} placeholder='enter your email' onChange={(e)=>setemai(e.target.value)} />
            <input type="text" value={pno}  placeholder='enter your phone number' onChange={(e)=>setpno(e.target.value)} />

            <button type="submit" >sent</button>
        </form>
        {show?<p>hlo {greet.pname} youre email have been sent succes fully <br /> {detail.name} will contact you soon</p>:<p></p>}
        
        
        </div>
  )
}

export default Contact