import React from 'react'
import ContactBoxes from './ContactBoxes'
import img_map from '../../assets/images/map.png'
import ContactMessage from './ContactMessage'


const ContactInfo = () => {
  
    const contactBoxes = [
        {iconClass:"fa-solid fa-location-dot", title: "Visit us", text: ["Sveavägen 31", "111 34 STOCKHOLM"]},
        {iconClass: "fa-solid fa-phone-volume", title: "Call us", text: ["+46 (8) 121 470 50", "+46 (8) 121 470 50"]},
        {iconClass: "fa-regular fa-envelope", title: "Email us", text: ["info@crito.com", "support@crito.com"]}
        ]

  return (
    <div className='wrapper'>
        <main>
            <section className="contact-us">
                <div className="container">
                    {contactBoxes.map((contact, index) => (
                        <ContactBoxes key={index} iconClass={contact.iconClass} title={contact.title} text={contact.text} />
                    ))}
                </div>
            </section>

            <section className="leave-message-box">
                <div className="container">
                    <div className='leave-message-box'>
                        <h3>Leave us a message for any information</h3>
                        <ContactMessage />
                    </div>
                </div>
            </section>      

                <div className="map">
                    <img src={img_map} alt="a picture of a map" />
                </div>
        </main>         
    </div>
    
  )
}

export default ContactInfo