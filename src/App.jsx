import './App.css';
import './Scss/style.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactPage from './pages/Contact'
import Services from './pages/Services'
import NotFound from './pages/NotFound';
import NewsDetailsPage from './pages/NewsDetails';
import { ArticleProvider } from './components/Generics/ArticleContext';
import NewsPage from './pages/News';

// import AutoScrollToTop from './components/Generics/AutoScrollToTop';
import ScrollToTop from './components/Generics/ScrollToTop';

function App() {
  // DENNA STYR MAN DE OLIKA SIDORNA MED

  return (
    <div className='wrapper'>
      <BrowserRouter>
      {/* <AutoScrollToTop /> */}
      <ScrollToTop />
        <ArticleProvider>
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/menuBar/services' element={<Services />} />
            <Route path='/menuBar/news' element={<NewsPage />} />
            <Route path='/menuBar/news/:id' element={<NewsDetailsPage />} />
            <Route path='/menuBar/contact' element={<ContactPage />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </ArticleProvider>
      </BrowserRouter>
    </div>
    
  )
}

export default App
