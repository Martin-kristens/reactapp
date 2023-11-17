import React from 'react'
import Consulting from './Consulting'
import SectionTitle from '@components/Generics/SectionTitle'
import img_thumbUp from '@images/thumb-up.png'
import img_pentagon from '@images/pentagon.png'
import img_scale from '@images/scale.png'
import img_brain from '@images/brain.png'
import img_twoladies from '@images/two-ladies.png'

const WhyChooseUsSection = () => {

    const consulting = [
        { img: img_thumbUp, title: "Process Excellence", text: "Lorem, ipsum dolor sit amet consectetur."},
        { img: img_pentagon, title: "Strategic Planning", text: "Lorem, ipsum dolor sit amet consectetur."},
        { img: img_scale, title: "Experience Design", text: "Lorem, ipsum dolor sit amet consectetur."},
        { img: img_brain, title: "Artificial Inteligence", text: "Lorem, ipsum dolor sit amet consectetur."}
      ]

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="left-side">         
          <div className="section-title">
            <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency" />
          </div>
          <div className="consulting-boxes">
            { consulting.map((consulting, index) => (
             <Consulting key={index} title={consulting.title} text={consulting.text} img={consulting.img} />
            ))}
          </div>  
        </div>
        <div className="right-side">
          <img src={img_twoladies} alt="two women talking" /> 
        </div>
      </div>
  </section>
  )
}

export default WhyChooseUsSection