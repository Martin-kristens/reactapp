import React from 'react'

const Consulting = ({img, title, text}) => {
  return (
        <div className="consulting">
            <div className="icon">
                <img src={img} alt="thumb up" />
            </div>
            <div className="h3-p">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
  )
}

export default Consulting