import React from 'react'
import Button from '../../Generics/Button'
import img_backgroundlines from '@images/background-lines-submit.svg'

const SubscribeSection = () => {
  return (
    <section className="subscribe">
        <img className="background-lines-submit" src={img_backgroundlines} alt="winding lines"/>
        <div className="container">
          <h2>Get News Updates By Signup</h2>
          <form method="post">
            <div className="input-boxes">
              <input className="username" type="text" name="mail" placeholder="username@domain.com"/>
              <Button type="yellow" text="Subscribe" url="/subscribe" />
            </div>            
          </form>
        </div>
      </section>
  )
}

export default SubscribeSection