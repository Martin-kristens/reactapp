import React from 'react'
import { useArticles } from '../Generics/ArticleContext'
import { Link } from 'react-router-dom'

const Categories = () => {
    const { articles } = useArticles ()

  return (
    <div className='categories-container'>
        {
            articles.slice(0, 6).map((
                article => 
                    <Link key={article.id} className='recent-posts' to={`/menuBar/news/${article.id}`}>
                        <div className='recent-posts-articles'>
                            <div className='categories'>
                                <p>{article.category}</p>
                                <p className='categories-line'>-</p>
                                <p>{Math.floor(Math.random() * 41)}</p>
                                <p> posts</p>
                            </div>
                            
                        </div>
                    </Link>
            ))
        }
    </div>
  )
}

export default Categories