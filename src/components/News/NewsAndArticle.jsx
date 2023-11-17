import React from 'react'
import ArticleList from './ArticleList'

const NewsAndArticle = () => {
  return (
    <section className='article-section'>
      <div className='container'>
        <h1>Our News & Articles</h1>
        <ArticleList />
      </div>        
    </section>
  )
}

export default NewsAndArticle