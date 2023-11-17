import React from 'react'

const Staff = ({img, title, text}) => {
  return (
    <div className="staff">
        <img src={img} alt="women in suit smiling"/>
        <h3>{title}</h3>  
        <p>{text}</p>                  
    </div>
  )
}

export default Staff