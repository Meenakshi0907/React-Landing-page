import React from 'react'
import logLogo from "../assets/log.png"; 

function Navigation() {
  return (
    <div>
        <nav>
          <div className='logo'>
            <img src={logLogo} width={50}/> 
          </div>
          <ul>
            <li ><a href="#">Menu</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Content</a></li>
          </ul>
          <button>Log in</button>
        </nav>
    </div>
  )
}

export default Navigation
