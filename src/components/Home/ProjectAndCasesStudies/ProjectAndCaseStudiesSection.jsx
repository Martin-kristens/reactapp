import React from 'react'
import Projects from './Projects'
import Button from '../../Generics/Button'
import SectionTitle from '@components/Generics/SectionTitle'
import img_article1 from '@images/article-image-1.png'
import img_article2 from '@images/article-image-2.png'
import img_article3 from '@images/article-image-3.png'
import img_article4 from '@images/article-image-4.png'


const ProjectAndCaseStudiesSection = () => {

    const projects = [
        { url:"/services", img: img_article1, title: "Grow your business", text:"Read more", iconClass:"fa-solid fa-arrow-up-right"},
        { url:"/services", img: img_article2, title: "Why your client needs a responsive website", text:"Read more", iconClass:"fa-solid fa-arrow-up-right"},
        { url:"/services", img: img_article3, title: "Educate your employees to get better results", text:"Read more", iconClass:"fa-solid fa-arrow-up-right"},
        { url:"/services", img: img_article4, title: "Business Insights is a important piece of your business", text:"Read more", iconClass:"fa-solid fa-arrow-up-right"},
      ]

  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <SectionTitle title="Project & Case Studies" description="Let’s Looks Our Global Projects" />
            </div>
            <div className="project-and-cases">
                { projects.map((project, index) => (
                <Projects key={index} url={project.url} img={project.img} title={project.title} text={project.text} iconClass={project.iconClass} />
                ))}
            </div>
            <div className="center-content">
                <Button type="dark" text="All Recent Projects" url="/services" />    
            </div>
        </div>
    </section>
  )
}

export default ProjectAndCaseStudiesSection