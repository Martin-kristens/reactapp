import React from 'react'
import Header from '../components/Generics/Header/Header'
import ShowcaseComp from '../components/Generics/ShowcaseComp'
import FooterTop from '../components/Generics/Footer/FooterTop/FooterTop'
import FooterBottom from '../components/Generics/Footer/FooterBottom/FooterBottom'
import NewsDetailsOverview from '../components/NewsDetails/NewsDetailsOverview'
import NewsDetailsArticle from '../components/NewsDetails/NewsDetailsArticle'
import ArticleAndNewsSection from '../components/Home/ArticleAndNews/ArticleAndNewsSection'


const NewsDetailsPage = () => {
  return (
    <div className='wrapper'>
        <Header />
        <ShowcaseComp title="News & Articles" linkUrl="/menuBar/news" linkText="News" />
        <main>
          <div className='news-details-page-wrapper'>
            <NewsDetailsArticle />
            <NewsDetailsOverview />
          </div>
          <div className='articleAndNews-news-details'>
            <ArticleAndNewsSection />
          </div>
        </main>
        <FooterTop />
        <FooterBottom />
    </div>
  )
}

export default NewsDetailsPage