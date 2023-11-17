import React, { useEffect } from 'react'
import { useArticles } from '../Generics/ArticleContext'
import { useParams } from 'react-router-dom'

const NewsDetailsArticle = () => {
    const { article, getArticle, clearArticle } = useArticles()
    const {id} = useParams()

    useEffect(() => {
        getArticle(id)

        return () => clearArticle()
    }, [])
    
  return (
    <div className='news-details-article'>
      {article && (
        <>
          <h2>{article.title}</h2>

          <div className='news-details-article-sub-headings'>
              <p>{article.published}</p>
              <i className="fa-solid fa-circle"></i>
              <p>{article.category}</p>
              <i className="fa-solid fa-circle"></i>
              <p>{article.author}</p>
          </div>
          
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.content}</p>

          <div className='news-details-article-tag-item'>
              <p>Digitalization</p>
              <p>School</p>
              <p>IT</p>
              <p>Design</p>
              <p>Work</p>
              <p>Tech</p>
          </div>
        </>
      )
        
      }
        
    </div>
  )
}

export default NewsDetailsArticle
