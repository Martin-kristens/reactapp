import React from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from '../../Generics/ArticleContext'

const Projects = ({text, iconClass}) => {
  const { articles } = useArticles()

  return (
    <div className='project-and-cases'>
      {articles.slice(0, 4).map((
        article =>
        <Link key={article.id} className='project' to={'/menuBar/news'}>
          <div>
            <img  src={article.imageUrl} />
            <h3>{article.title}</h3>
            <div className="read-more">{text} <i className={iconClass}></i></div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Projects
