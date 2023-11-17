import React from 'react'
import Header from '../components/Generics/Header/Header'
import NewsAndArticle from '../components/News/NewsAndArticle'
import FooterTop from '../components/Generics/Footer/FooterTop/FooterTop'
import FooterBottom from '../components/Generics/Footer/FooterBottom/FooterBottom'
import SubscribeSection from '../components/Home/Subscribe/SubscribeSection'
import ShowcaseComp from '../components/Generics/ShowcaseComp'

const NewsPage = () => {
  return (
    <div className='wrapper'>
        <Header />
        <ShowcaseComp title="News & Articles" linkUrl="/menuBar/news" linkText="News" />
        <main>
            <NewsAndArticle />
            <SubscribeSection />
        </main>
        <FooterTop />
        <FooterBottom />
    </div>
  )
}

export default NewsPage