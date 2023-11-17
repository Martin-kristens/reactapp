import React from 'react'

const ContactInformation = ({ text, iconClass }) => {

  return (  
          <div className="content-box">
            <i className={iconClass}></i>{text}
          </div>
    
  )
}

export default ContactInformation