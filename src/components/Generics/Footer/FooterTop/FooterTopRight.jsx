import React from 'react'
import { Link } from 'react-router-dom'

const FooterTopRight = ({title, links}) => {
  return (
    
        <div className="footer-top-right-links">
            <h3>{title}</h3>
            <ul> 
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.url} target={link.target || '_blank'}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default FooterTopRight