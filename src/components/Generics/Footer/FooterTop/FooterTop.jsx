import React from 'react'
import { Link } from 'react-router-dom'
import FooterTopRight from './FooterTopRight'
import img_backgroundlines from '@images/background-lines-sumup-information.svg'
import img_logoService from '@images/logo-service.png'


const FooterTop = () => {

    const companylinks = [
        { title:"Company", 
          links: [
            { url: '/companylinks/about', label:'About'},
            { url: '/companylinks/features', label:'Features'},
            { url: '/companylinks/works', label:'Works'},
            { url: '/companylinks/career', label:'Career'}
          ],
        },
        { title:"Help", 
          links: [
            { url: '/companylinks/support', label:'Customer Support'},
            { url: '/companylinks/delivery', label:'Delivery Details'},
            { url: '/companylinks/terms', label:'Terms & Conditions'},
            { url: '/companylinks/privacy', label:'Privacy Policy'}
          ],
        },
        { title:"Resources", 
          links: [
            { url: '/companylinks/ebooks', label:'Free eBooks'},
            { url: '/companylinks/tutorials', label:'Development Tutorial'},
            { url: '/companylinks/blog', label:'How to - Blog'},
            { url: 'https://www.youtube.com', label:'Privacy Policy'}
          ],
        },
        { title:"Link", 
          links: [
            { url: '/companylinks/ebooks', label:'Free eBooks'},
            { url: '/companylinks/tutorials', label:'Development Tutorial'},
            { url: '/companylinks/blog', label:'How to - Blog'},
            { url: 'https://www.youtube.com', label:'Privacy Policy'}
          ],
        }   
      ]

  return (
    <section className="footer-top">
          <img className="background-lines-sumup-information" src={img_backgroundlines} alt="winding lines"/>
          <div className="container">

            <div className="footer-top-left">
              <div className="footer-top-left-img">
               <Link to="/"> <img src={img_logoService} alt="crito logo" /></Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                obcaecati voluptas voluptates! Voluptates laborum nam ratione
                minus necessitatibus, iure praesentium.
              </p>
            </div>
            
            <div className="footer-top-right">
              { companylinks.map((link, index) => (
                <FooterTopRight key={index} title={link.title} links={link.links} />
              ))}
              
            </div>
          </div>
        </section>
  )
}

export default FooterTop