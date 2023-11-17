import React from 'react'
import { Link } from 'react-router-dom';
import img_backgroundlines from '../../assets/images/background-lines-showcase.svg'

const ShowcaseComp = ({ linkText, linkUrl, title }) => {
  return (
    <div className='news-and-articles-sub-heading'>
      <img className="background-lines" src={img_backgroundlines} alt=""/>
        <div className='news-and-articles-sub-heading-link'>
            <Link to='/' >Home</Link>
            <Link to={linkUrl} >{linkText}</Link>
        </div>            
        <h2>{title}</h2>
    </div>
  )
}

export default ShowcaseComp