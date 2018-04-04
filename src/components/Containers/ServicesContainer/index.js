import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link'

import Link from 'gatsby-link'
import './servicescontainer.scss'
import Section from '../../Section'
import services from '../../../data/content/services.js'
import Breadcrumb from '../../Breadcrumb'

class ServicesContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    let servicesGrid = services.map(service => {
      return (
        <Section
          key={service.id}
          heading={service.heading}
          description={service.description}
          comments={service.comments}
          image={service.image}
        />
      )
    })
    let servicesLinks = services.map(service => {
      return (
        <li className="services-intro-link">
          <Link
            className="services-intro-link-anchor"
            to={`services#${service.heading.toLowerCase().replace(' ', '-')}`}
          >
            {' '}
            {service.heading}
          </Link>
        </li>
      )
    })
    return (
      <div className="services-container">
        <Breadcrumb title={'02. What we do'} />
        <div className="services-wrapper">
          <div className="section-wrapper">
            <div className="services-grid-container">{servicesGrid}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServicesContainer
