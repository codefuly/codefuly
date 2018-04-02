import React from 'react'
import './header.scss'
import Desktop from './Desktop/'
import Mobile from './Mobile/'

const menuList = ['About', 'Services', 'Career', 'Contact']

const Header = ({ elements }) => (
  <div className="header-container">
    <div className="header">
      <Desktop elements={menuList} color={'#fff'} />
      <Mobile elements={menuList} />
    </div>
  </div>
)

export default Header
