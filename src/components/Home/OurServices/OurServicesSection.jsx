import React from 'react'
import AdviceBoxes from './AdviceBoxes'
import SectionTitle from '@components/Generics/SectionTitle'
import Button from '@components/Generics/Button'
import img_backgroundlines from '@images/background-lines-our-services.svg'

const OurServicesSection = () => {

    const services = [
        { title:"Business Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/businessadvice"},
        { title:"Startup Business", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/startupbusiness"},
        { title:"Financial Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/financialadvice"},
        { title:"Risk Management", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/riskmanagement"}
      ]

  return (
    <section className="our-services">
      <img className="background-lines-our-services" src={img_backgroundlines} alt="winding lines"/>
      <div className="container">  
        <div className='section-title'>
          <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting" />
        </div>
       
        <div className="advices">         
          { services.map((service, index) => (
                <AdviceBoxes key={index} title={service.title} description={service.description} url={service.url} /> 
          ))}
        </div>
        <div className="center-content">
          <Button type="" text="Browse Services" url="/services"/>
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection