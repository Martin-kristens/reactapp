import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const AutoScrollToTop = () => {
    const location = useLocation()
    useEffect(() =>{
        window.scrollTo({ to: 0, behavior: 'smooth'})
    }, [location.pathname])


  return null;
}

export default AutoScrollToTop