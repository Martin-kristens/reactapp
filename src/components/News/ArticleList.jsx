import React from 'react'
import { useArticles } from '../Generics/ArticleContext'
import { Link } from 'react-router-dom'

const ArticleList = () => {
    const { articles } = useArticles()
    
    return (
        <div className='articles'>
            {
                articles.map(article => (
                    <Link key={article.id} className="business-info" to={`/menuBar/news/${article.id}`}>                          
                        <img src={article.imageUrl} alt="" />
                        <p>{article.category}</p>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        {/* <p>{article.author}</p> */}
                        <p>{article.published}</p>                           
                    </Link>
                ))
            } 
        </div>
    )
}

export default ArticleList