import React, { useEffect } from 'react'
import { useArticles } from '../Generics/ArticleContext'
import { useParams } from 'react-router-dom'
import RecentPostsCategory from './RecentPostsCategory'
import Categories from './Categories'


const NewsDetailsOverview = () => {
  const { article, getArticle, clearArticle } = useArticles()
  const {id} = useParams()

  useEffect(() => {
      getArticle(id)

      return () => clearArticle()
  }, [])

  return (
    <div className='recent-posts-and-categories'>
      <div className='input-search'>
         <input placeholder='Type to search...' />
      </div>

         <div className='recent-posts border'>
            <h3>Recent post</h3> 
            <RecentPostsCategory /> 
         </div>

         <div className='recent-posts-categories border'>
            <h3>Categories</h3>
            <Categories />
         </div>
    </div>

  )
}

export default NewsDetailsOverview

