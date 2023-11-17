import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import ContactInformation from './NavSection/ContactInformation'
import NavigationMenu from './NavSection/NavigationMenu'
import img_logotype from '@images/Logo.svg'
import SocialLinks from '../SocialLinks'
import Menu from '../Menu'

const contactInformation = [
  { iconClass: "fa-solid fa-phone-volume", text: "+46 (8) 121 470 50" },
  { text: "info@crito.com", iconClass: "fa-regular fa-envelope"},
  { text: "Sveavägen 31, 111 34 STOCKHOLM", iconClass:"fa-solid fa-location-dot"}
]

const menuBar = [
  { url:"/", title:"Home"},
  { url:"/menuBar/services", title:"Services"},
  { url:"/menuBar/news", title:"News"},
  { url:"/menuBar/contact", title:"Contact"}
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState (false)

  return (
    <section className='nav-section'>
        <div className="container">         
          <div className="logotype"><Link to="/"><img src={img_logotype} alt="Crito logotype" /></Link></div>
          {menuOpen ? (<Menu />) : (<></>) }
          <button onClick={() => setMenuOpen(!menuOpen)} className="btn-menu-bars">
            {menuOpen ? <i className="fa-solid fa-xmark white-icon"></i> : <i className="fa-solid fa-bars-staggered"></i>}
          </button>

          <div className="contactinformation-bar">
            { contactInformation.map((contact, index) => (
              <ContactInformation key={index} iconClass={contact.iconClass} text={contact.text} />
            ))}            
          </div>
          
          <div className="socialmedia-bar">
            <SocialLinks />
          </div>

          <div className="menu-wrapper">            
          { menuBar.map((menuBar, index) => (
            <NavigationMenu key={index} url={menuBar.url} title={menuBar.title} />
              ))}

            <div className="login">
              <Button className="btn-login" type="yellow" text="Login" url="login"/>
            </div>
          </div>
          
          
        </div>
      </section>
  )
}

export default Header