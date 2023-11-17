import React from 'react'
import { Link } from 'react-router-dom'

const NavigationMenu = ({url, title}) => {
  return (
    <div className="menu-item">
      <Link to={url}>{title}</Link>    
    </div>
  )
}

export default NavigationMenu