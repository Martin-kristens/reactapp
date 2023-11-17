import React from 'react'
import FooterBottom from '../components/Generics/Footer/FooterBottom/FooterBottom'
import img_astronaut from '../assets/images/Astronaut-big.png'
import Button from '../components/Generics/Button'

const NoFound = () => {
  return (
    <div className='wrapper'>
        <main>
          <h1>404 PAGE NOT FOUND</h1>
          <img src={img_astronaut} alt='a picture of an astronaut lost in space' />
          <Button className="center-content" type="yellow" text="Back Home" url="/" />
        </main>

        <FooterBottom />

    </div>
  )
}

export default NoFound