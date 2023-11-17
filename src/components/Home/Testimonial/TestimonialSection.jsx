import React from 'react'
import Review from './Review'
import Button from '@components/Generics/Button'
import SectionTitle from '@components/Generics/SectionTitle'
import img_stars from '@images/Star.png'
import img_cassandra from '@images/cassandra-warren.png'
import img_amanda from '@images/amanda-tulling.png'
import img_jack from '@images/jack-mcdogglas.png'


const TestimonialSection = () => {

    const reviews = [
        {
          starImgList: [img_stars ],
          testimonialImgList: [img_cassandra],
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
          title:"Cassandra Warren",
          description:"Business Manager, Dorfus",
        },
        {
          starImgList: [img_stars ],
          testimonialImgList: [img_amanda],
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
          title:"Amanda Tulling",
          description:"Senior Developer, Square",
        },
        {
          starImgList: [img_stars],
          testimonialImgList: [img_jack],
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
          title:"Jack McDogglas",
          description:"Key Account Manager, Gobana"
        }
      ]

  return (
    <section className="testimonial">
        <div className="container">
            <div className="section-title">
                <SectionTitle title="Testimonial" description="What Our Client Says" />
            </div>
            <div className="review">
                {reviews.map((review, index) => (
                <Review key={index} starImgList={review.starImgList} text={review.text} testimonialImgList={review.testimonialImgList} title={review.title} description={review.description} />
                ))}                
            </div>
            <div className="button-black">
                <Button type="" text="All Reviews" url="/reviews" />
            </div>        
        </div>
    </section>
  )
}

export default TestimonialSection