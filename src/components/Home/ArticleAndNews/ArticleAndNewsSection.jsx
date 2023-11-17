import Articles from './Articles'
import Button from '@components/Generics/Button'
import SectionTitle from '@components/Generics/SectionTitle'
import img_dots from '@images/dot-1.png'
// import ArticleList from '../../News/ArticleList'


const ArticleAndNewsSection = () => {
      
  return (
    <section className="article-and-news">
        <div className="container">
            <div className="top-row">
                <div className="section-title">
                    <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
                </div>
                <div className="center-content">
                    <Button type="" text="Browser Team" url="/projects" />
                </div>
            </div>            
                <Articles />          
            <div className="center-content">
                <img src={img_dots} alt="dots on a row" />
            </div>
        </div>
  </section>
  )
}

export default ArticleAndNewsSection