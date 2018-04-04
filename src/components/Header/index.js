import React from 'react'
import { array } from "prop-types";
import './header.scss'
import Desktop from './Desktop/'
import Mobile from './Mobile/'

const menuList = ['About', 'Services', 'Career', 'Contact']

const Header = () => (
  <div className="header-container">
    <div className="header">
      <Desktop elements={menuList} color={'#fff'} />
      <Mobile elements={menuList} />
    </div>
  </div>
)

export default Header
