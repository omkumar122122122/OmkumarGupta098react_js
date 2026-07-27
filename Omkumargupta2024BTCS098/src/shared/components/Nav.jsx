import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <div className="logo">
            <h1>OM KUMAR</h1>
        </div>
        <div className="links">
            <Link to={'/about'} >About</Link>
            <Link to={'/contact'} >Contact</Link>
        </div>
    </div>
  )
}

export default Nav