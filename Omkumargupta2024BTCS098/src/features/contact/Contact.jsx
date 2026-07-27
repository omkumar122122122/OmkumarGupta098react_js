import React, { useState } from 'react'

import Nav from '../../shared/components/Nav'

const Contact = ({detail}) => {
    const [name,setname]=useState("")
    const [email,setemai]=useState("")
    const [pno,setpno]=useState("")
    const [show,setshow]=useState(false)
    const [pname,setpname]=useState("")

    function handelclick(e){
        e.preventDefault();
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

            <button  onClick={handelclick} >sent</button>
        </form>
        {show?<p>hlo {pname} youre email have been sent succes fully <br /> {detail.name} will contact you soon</p>:<p></p>}
        
        
        </div>
  )
}

export default Contact