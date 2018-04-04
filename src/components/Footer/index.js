import React from 'react'
import "./footer.scss"
import services from '../../data/content/services.js'
import Information from '../Information/'
import Sitemap from '../Sitemap/'

const sublinks = services.map(service => {
  return service.heading
})

const links = ['About', 'Career', 'Contact']

const Footer = () => (
  <div className="footer-container">
    <div className="footer">
      <div className="footer-left">
        <Information />
      </div>
      <div className="footer-right">
        <Sitemap sublinks={sublinks} links={links} />
      </div>
    </div>
  </div>
)

export default Footer
