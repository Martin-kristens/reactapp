import React from 'react'
import { Link } from 'react-router-dom'

const Projects = ({url, img, title, text, iconClass}) => {
  return (
    <>
        <Link className="project" to={url}>
            <img src={img} alt="a mans hand reading a business paper"/>
            <h3>{title}</h3>
            <div className="read-more">{text} <i className={iconClass}></i></div>
        </Link>
    </>
  )
}

export default Projects