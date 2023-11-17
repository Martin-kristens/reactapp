import React from 'react'

const Review = ({starImgList, testimonialImgList, text, title, description}) => {
  return (
            <div className="review-box">
                {starImgList.map((img, index) => (
                    <img key={index} src={img} alt={`Image ${index}`} className='stars' />
                ))}           
                <p>{text}</p>
                <div className="person-testimonial">
                    {testimonialImgList.map((img, index) => (
                        <img key={index} src={img} alt={`Image ${index}`} />
                    ))}
                    <div className="img-text">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
  )
}

export default Review