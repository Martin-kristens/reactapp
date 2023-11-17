import React from 'react'
import OurServices from '../components/Home/OurServices/OurServicesSection'
import Header from '../components/Generics/Header/Header'
import FooterTop from '../components/Generics/Footer/FooterTop/FooterTop'
import FooterBottom from '../components/Generics/Footer/FooterBottom/FooterBottom'
import ShowcaseComp from '../components/Generics/ShowcaseComp';

const Services = () => {
  return (
    <div className='wrapper'>
      <Header />
      <ShowcaseComp title="Services" linkUrl="/menuBar/services" linkText="Services" />
      <main>
        <OurServices />
      </main>
      <FooterTop />
      <FooterBottom />
    </div>
  )
}

export default Services