import React from 'react'
import Projects from './Projects'
import Button from '../../Generics/Button'
import SectionTitle from '@components/Generics/SectionTitle'


const ProjectAndCaseStudiesSection = () => {

  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <SectionTitle title="Project & Case Studies" description="Let’s Looks Our Global Projects" />
            </div>
                <Projects text={'Read More'} iconClass={'fa-solid fa-arrow-up-right'}/>
            <div className="center-content">
                <Button type="dark" text="All Recent Projects" url="/services" />    
            </div>
        </div>
    </section>
  )
}

export default ProjectAndCaseStudiesSection