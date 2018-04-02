import React from 'react'
import Link from 'gatsby-link'
import { slide as Menu } from 'react-burger-menu'
import { array } from 'prop-types'

import './mobile.scss'

import logo_dark from '../../../data/images/logo_dark2.svg'
import Social from '../../Social/'

const Mobile = ({ elements }) => (
  <Menu
    className="header-mobile-container"
    bodyClassName={'hidden'}
    right
    isOpen={false}
    width={'100%'}
  >
    <Link className="header-mobile-anchor" exact to="/">
      <img className="header-mobile-logo" src={logo_dark} />
    </Link>
    <hr className="header-mobile-hr" />
    <ul className="header-mobile-list">
      <li className="header-mobile-menu-item">
        <Link className="header-mobile-menu-link" to="/">
          Home
        </Link>
      </li>
      {elements.map(el => (
        <li className="header-mobile-menu-item">
          <Link className="header-mobile-menu-link" to={el.toLowerCase()}>
            {el}
          </Link>
        </li>
      ))}
    </ul>
    <div className="header-mobile-footer">
      <hr className="header-mobile-hr" />
      <Social color={'#000'} />
      <a className="header-mobile-email" href="">
        info@codewhile.com
      </a>
      <p className="header-mobile-copyright">
        © Codewhile, Inc 2013 - 2017. All rights reserved.
      </p>
    </div>
  </Menu>
)

Mobile.propTypes = {
    elements: array.isRequired
  };

export default Mobile
