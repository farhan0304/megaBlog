import React from 'react'
import logo from '../assets/logo.png'
function Logo({width = '150px'}) {
  return (
    <div>
      <img style={{width}} src={logo} alt="Logo" />
    </div>
  )
}

export default Logo