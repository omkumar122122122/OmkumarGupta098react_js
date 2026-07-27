import React from 'react'
import Nav from '../../shared/components/Nav'

const Contact = () => {
    const [name,setname]=usestate("");
    const [email,setemai]=usestate("")
    const [pno,setpno]=usestate("");
    const [show,setshow]=usestate(false)
    const greet={
        pname:"",
        pemail:"",
        ppno:""
        
    }

    function handelclick(e){
        greet.pname=name;
        greet.pemail=email;
        greet.ppno=pno;

        setemai("")
        setname("")
        setpno("")


        

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
        
        
        </div>
  )
}

export default Contact