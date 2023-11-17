import React from 'react'
import img_companylogo1 from '@images/company-logo-1.png'
import img_companylogo2 from '@images/company-logo-2.png'
import img_companylogo3 from '@images/company-logo-3.png'
import img_companylogo4 from '@images/company-logo-4.png'
import img_companylogo5 from '@images/company-logo-5.png'

const ClientsLogo = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="client-logo">
          <img src={img_companylogo1} alt="Company icon of Paperz company" />
          <img src={img_companylogo2} alt='Company icon of Dorfus company' />
          <img src={img_companylogo3} alt="Company icon of Martino company" />
          <img src={img_companylogo4} alt="Company icon of Square company" />
          <img src={img_companylogo5} alt="Company icon of Gobona company" />
        </div>
      </div>
  </div>
  )
}

export default ClientsLogo