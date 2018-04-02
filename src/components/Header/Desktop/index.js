import React from 'react'
import Link from 'gatsby-link'
import { array, string } from 'prop-types'
import logo_light from '../../../data/images/logo_light2.svg'

import './desktop.scss'

const Desktop = ({ elements, color }) => (
  <div className="header-desktop-container">
    <Link className="header-desktop-logo-anchor" to="/">
      <img className="header-desktop-logo" src={logo_light} />
    </Link>
    <nav className="header-desktop-nav">
      <ul className="header-desktop-list">
        <li className="header-desktop-menu-item">
          <Link
            className="header-desktop-menu-link"
            to="/"
            style={{ color: color }}
          >
            Home
          </Link>
        </li>

        {elements.map(element => (
          <li className="header-desktop-menu-item">
            <Link
              className="header-desktop-menu-link"
              to={element.toLowerCase()}
              style={{ color: color }}
            >
              {element}
            </Link>
          </li>
        ))}
        <li className="header-desktop-menu-item">
          <Link
            className="header-desktop-menu-link"
            to={'/'}
            style={{ color: color }}
          >
            LT
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

Desktop.propTypes = {
  elements: array.isRequired,
  color: string.isRequired,
}

export default Desktop
