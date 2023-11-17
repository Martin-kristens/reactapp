import React from 'react'

const SectionHeading = ({ title, description}) => {
  return (
          <div className="section-heading">
              <h1>{title}</h1>
              <p>{description}</p>
          </div> 
  )
}

export default SectionHeading