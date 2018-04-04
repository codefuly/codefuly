import React from 'react'
import Link from 'gatsby-link'
import './sitemap.scss'
import { array } from 'prop-types'

const Sitemap = ({ sublinks, links }) => (
  <div className="sitemap-container">
    <div className="sitemap-sublinks-container">
      <Link className="sitemap-link" to="/services">
        Services
      </Link>
      <ul className="sitemap-sublinks-list">
        {sublinks.map(sublink => (
          <li className="sitemap-sublink-item">
            <Link
              className="sitemap-sublink"
              to={`services#${sublink.toLowerCase().replace(' ', '-')}`}
              scroll={el => el.scrollIntoView(true)}
            >
              {sublink}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="sitemap-links-container">
      <Link className="sitemap-link" to="/">
        Home
      </Link>
      {links.map(link => (
        <Link className="sitemap-link" to={link}>
          {link}
        </Link>
      ))}
    </div>
  </div>
)

Sitemap.propTypes = {
  elements: array.isRequired,
}

export default Sitemap
