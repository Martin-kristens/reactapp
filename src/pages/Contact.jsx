import React from 'react'
import Header from '@components/Generics/Header/Header'
import FooterBottom from '@components/Generics/Footer/FooterBottom/FooterBottom';
import FooterTop from '@components/Generics/Footer/FooterTop/FooterTop';
import ContactInfo from '../components/ContactPage/ContactInfo';
import ShowcaseComp from '../components/Generics/ShowcaseComp';




const Contact = () => {


  return (
    <div className='wrapper'>
      <Header />
      <ShowcaseComp title="Let´s Contact" linkUrl="/menuBar/contact" linkText="Contacts" />
      <main>
        <ContactInfo />
      </main>
      <FooterTop />
      <FooterBottom />
    </div>
  )
}

export default Contact