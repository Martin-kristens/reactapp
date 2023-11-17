import React from 'react'
import { Link } from 'react-router-dom'

const Circles = ({url, iconClass}) => {
  return (
   
        <Link className="circle-play" to={url}><i className={iconClass}></i></Link>                    
    
  )
}

export default Circles