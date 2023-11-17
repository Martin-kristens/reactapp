import React from 'react'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
  return (
    <>
        <Link to='https://facebook.com'><i className="fa-brands fa-facebook"></i></Link>
        <Link to="https://twitter.com"><i className="fa-brands fa-x-twitter"></i></Link>
        <Link to="https://instagram.se"><i className="fa-brands fa-instagram"></i></Link>
        <Link to="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></Link>
    </>
      
      
  )
}

export default SocialLinks