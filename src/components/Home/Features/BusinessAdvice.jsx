import React from 'react'

const BusinessAdvice = ({advice}) => {
  const {title, description, iconClass, img} = advice
  return (
    
        <div className="business">
          <div className="plus-sign1">
            <i className={iconClass}></i>
          </div>   
          <div className="plus-sign2">
            <i className={iconClass}></i>
          </div>  
          <div className="plus-sign3">
            <i className={iconClass}></i>
          </div>                           
          <img src={img} alt="two hands shaking" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
  )
}

export default BusinessAdvice