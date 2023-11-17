import React from 'react'
import { useArticles } from '../Generics/ArticleContext'
import { Link } from 'react-router-dom'

const RecentPostsCategory = () => {
    const { articles } = useArticles ()

  return (
    <div>
        {articles.slice(0, 4).map((
            article => 
                <Link key={article.id} className='recent-posts' to={`/menuBar/news/${article.id}`}>
                    <div className='recent-posts-articles' key={article.id}>
                        <h5>{article.content}</h5>
                        <p>{article.published}</p>
                    </div>
                </Link>
        ))}
                        
    </div>
  )
}

export default RecentPostsCategory