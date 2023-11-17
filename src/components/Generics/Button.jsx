import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({url, text, type}) => {

  

    const getButtonClassName = () => {
        switch (type) {
          case 'yellow':
            return 'btn-yellow'
          case 'dark':
            return 'btn-black'
          default:
            return 'btn-transparent'
        }
      }

  return (
    <Link className={getButtonClassName()} to={url}>{text}<i className="fa-solid fa-arrow-up-right"></i></Link>
  )
}

export default Button