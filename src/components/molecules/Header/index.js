import React, { useState } from "react"
import './index.scss'
import logo from '../../../assets/images/GYKN.png'

function Header({ toggleModal }) {

  const [isMenuClosed, toggleMenu] = useState(true)
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" onClick={() => toggleMenu(state => !state)}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#top"><img src={logo} alt="GYKN Logo" /></a>
        </div>
        <div className={`navbar-collapse ${isMenuClosed ? 'collapse' : ''}`} id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a onClick={() => toggleMenu(true)} href="#our-policies">Our Policies</a></li>
            <li><a onClick={() => toggleMenu(true)} href="#footer">Contact Us</a></li>
            <li className="sign-up-btn"><button onClick={() => { toggleMenu(true); toggleModal(true) }}>Sign Up</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
