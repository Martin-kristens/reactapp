import React from 'react'
import img_backgroundlines from '@images/background-lines-showcase.svg'
import img_showcaseimage from '@images/showcase-image.png'
import SectionHeading from './SectionHeading'
import Button from '@components/Generics/Button'


const ShowcaseSection = () => {
  return (
    <section className="showcase">
      
      <div className="container">
        <div className="content">
            <SectionHeading title="We Provide The Best Business Solutions" description="Establish your vision and value proposition and turn them into testable prototypes." />          
            <div className='showcase-btn'>            
                <Button type="yellow" text="Get consulting" url="../services/" alt='' />
                <Button type="yellow" text="Learn More" url="/services"/>                                   
            </div> 
            <img className="background-lines" src={img_backgroundlines} alt=""/>                           
        </div>       
        <img src={img_showcaseimage} alt="a man in a suit with a tablet"/> 
      </div>      
    </section>
  )
}

export default ShowcaseSection