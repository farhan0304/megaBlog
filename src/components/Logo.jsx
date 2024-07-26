import React from 'react'
import logo from '../assets/TECHNO.png'
function Logo({width = '100px'}) {
  return (
    <div>
      <img style={{width}} src={logo} alt="Logo" />
    </div>
  )
}

export default Logo