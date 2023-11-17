import React, { useEffect, useState } from 'react'
import BusinessAdvice from './BusinessAdvice'
import SectionTitle from '@components/Generics/SectionTitle'
import Button from '@components/Generics/Button'
import img_advices1 from '@images/hands.svg'
import img_advices2 from '@images/lampicon.svg'
import img_advices3 from '@images/stats.svg'
import img_advices4 from '@images/riskicon.svg'

const mockAdvices = [
  { title: 'Business Advice', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', iconClass: 'fa-solid fa-plus', img: img_advices1 },
  { title: 'Startup Business', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', iconClass: 'fa-solid fa-plus', img: img_advices2 },
  { title: 'Financial Advice', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', iconClass: 'fa-solid fa-plus', img: img_advices3 },
  { title: 'Risk Management', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', iconClass: 'fa-solid fa-plus', img: img_advices4 }
  ]

const FeaturesSection = () => {
  const [advices, setAdvices] = useState([])

  useEffect(() => {
    setAdvices(mockAdvices);
  }, []);


  return (
    <section className="features">
      <div className="container border">
        
        <div className="section-title">
          <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies" />
          <Button type="yellow" text="Learn More" url="/services" />
        </div>

        <div className="business-advice">
          { advices.map((advice, index) => (
            <BusinessAdvice key={index} advice={advice} />
          ))}
         
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection