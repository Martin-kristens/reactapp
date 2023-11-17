import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from '../../Generics/ArticleContext'

const Articles = () => {
  const { articles } = useArticles()
    
     
  return (
    <div className='article-item'>
      {articles.slice(0, 3).map((
        article => 
          <Link key={article.id} className="business-info" to={'/menuBar/news'}>           
            <div>
              <img src={article.imageUrl} alt="a picture from an office" />
              <p>{article.category}</p>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          </Link>
        )
      )}    
    </div>      
  );
}

export default Articles