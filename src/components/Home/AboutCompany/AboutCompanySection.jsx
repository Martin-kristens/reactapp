import React from 'react'
import PictureText from './PictureText'
import img_woman from '@images/women-paper.png'
import SectionTitle from '@components/Generics/SectionTitle'
import Button from '@components/Generics/Button'
import Circle from '@components/Generics/Circle'

const AboutCompanySection = () => {
  return (
    <section className="about-section">
        <div className="container">
            <div className="women-image">
               <img src={img_woman} alt="women with a tablet in a hall"/>
              <div className="pic-text">
                <PictureText title="Samantha Brown, Founder" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
              </div>
            </div>

            <div className="section-title">
              <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />              
              <p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam officiis quas assumenda esse obcaecati? Ex esse error
                  voluptates iure vel totam eos.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  esse quasi incidunt adipisci accusantium libero provident
                  voluptate amet.
                </span>
              </p>
            
              <div className="right-content">
                <Button type="dark" text="Learn More" url="/services" />
                <Circle url="/services" iconClass="fa-solid fa-play" />
                <p>Intro Video</p>
              </div>
            </div>
        </div>
      </section>
  )
}

export default AboutCompanySection