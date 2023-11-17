import React from 'react'

const ContactBoxes = ({title, text}) => {
  return (
    <div className="contact-us-box">
        <div className="i-h5">
            <i className="fa-solid fa-location-dot"></i>
            <h5>{title}</h5>
        </div> 
        {text.map((line, index) => (
            <p key={index}>{line}</p>
        ))}
    </div>
  )
}

export default ContactBoxes