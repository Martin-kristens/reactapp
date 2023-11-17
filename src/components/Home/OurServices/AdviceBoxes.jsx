import React from 'react'
import { Link } from 'react-router-dom'

const AdviceBoxes = ({title, description, url}) => {
  return (
    <div className="advice-boxes">
        <div className="top-line"></div>
        <div className="advice-boxes-text">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>                                              
        <Link className='arrow-bellow-text' to={url}><i className="fa-light fa-arrow-right"></i></Link>                   
    </div>
  )
}

export default AdviceBoxes