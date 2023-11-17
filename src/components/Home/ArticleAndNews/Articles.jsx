import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from '../../Generics/ArticleContext'

const Articles = () => {
  const { articles } = useArticles()
    // const [articles, setArticles] = useState(null)

    // useEffect(() => {
    //   // denna koden hämtar artiklar från ett api, vad vi vill att den ska göra
    //     getArticles()
    //     // return är valfritt
    // }, []); 
    // // dependency array 

    // //  kolla detta stycke och se om man inte bara kan importera från useContext komponenten
    // const getArticles = async () => {
    //     const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
    //     setArticles(await result.json())
    // }

    // if (!articles) {
    //       return <p>Loading</p> 
    // }
    
     
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