import React from 'react'
import Staff from './Staff'
import Button from '@components/Generics/Button'
import SectionTitle from '@components/Generics/SectionTitle'
import img_Kristine from '@images/Kristine-palmer.png'
import img_Mark from '@images/Mark-aubri.png'
import img_Kimberly from '@images/Kimberly-hansen.png'
import img_Justind from '@images/Justin-willoman.png'
import img_dot2 from '@images/dot-2.png'


const MeetOurTeamSection = () => {

    const staff = [
        { img: img_Kristine, title:"Kristine Palmer", text:"Chef Operation Officer"},
        { img: img_Mark, title:"Mark Aubri", text:"Senior Consultant"},
        { img: img_Kimberly, title:"Kimberly Hansen", text:"Senior Consultant"},
        { img: img_Justind, title:"Justin Willoman", text:"Senior Tech Consultant"}
      ]

  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="top-row">
                <div className="section-title">
                    <SectionTitle title="Meet Our Team" description="Experience Team Members" />
                </div>
                <div className="center-content">
                    <Button type="" text="Browser Team" url="/services"/>             
                </div>
            </div>

            <div className="bottom-row">
                { staff.map((staff, index) => (
                    <Staff key={index} img={staff.img} title={staff.title} text={staff.text} /> 
                ))}
            </div>

            <div className="center-content">
                <img src={img_dot2} alt="dots on a row" />
            </div>
        </div>
    </section>
  )
}

export default MeetOurTeamSection