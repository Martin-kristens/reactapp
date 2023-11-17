import React from 'react'

import Header from '@components/Generics/Header/Header'
import ShowcaseSection from '@components/Home/Showcase/ShowcaseSection';
import ClientsLogo from '@components/Home/ClientsLogo/ClientsLogo';
import FeaturesSection from '@components/Home/Features/FeaturesSection';
import AboutCompanySection from '@components/Home/AboutCompany/AboutCompanySection';
import OurServicesSection from '@components/Home/OurServices/OurServicesSection';
import WhyChooseUsSection from '@components/Home/WhyChooseUs/WhyChooseUsSection';
import ProjectAndCaseStudiesSection from '@components/Home/ProjectAndCasesStudies/ProjectAndCaseStudiesSection';
import MeetOurTeamSection from '@components/Home/MeetOurTeam/MeetOurTeamSection';
import TestimonialSection from '@components/Home/Testimonial/TestimonialSection';
import ArticleAndNewsSection from '@components/Home/ArticleAndNews/ArticleAndNewsSection';
import SubscribeSection from '@components/Home/Subscribe/SubscribeSection';
import FooterBottom from '@components/Generics/Footer/FooterBottom/FooterBottom';
import FooterTop from '@components/Generics/Footer/FooterTop/FooterTop';
 



// HÄR I LÄGGER MAN IN FRÅN KOMPONENTERNA

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <ShowcaseSection />    
        <ClientsLogo />
        <FeaturesSection />
        <AboutCompanySection />
        <OurServicesSection />
        <WhyChooseUsSection />
        <ProjectAndCaseStudiesSection />
        <MeetOurTeamSection />
        <TestimonialSection />
        <ArticleAndNewsSection />
        <SubscribeSection />  
      </main>
      <FooterTop />
      <FooterBottom />
    </>
  )
}

export default Home