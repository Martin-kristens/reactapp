import React from 'react'
import {  NavLink } from 'react-router-dom'

const Menu = () => {
    
  return (
    <nav className='main-menu'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/menuBar/services'>Services</NavLink>
        <NavLink to='/menuBar/news'>News</NavLink>
        <NavLink to='/menuBar/contact'>Contact</NavLink>
    </nav>
  )
}

export default Menu