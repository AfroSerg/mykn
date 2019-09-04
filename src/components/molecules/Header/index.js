import React from "react"
import './index.scss'
import logo from '../../../assets/images/GYKN.png'

function Header({ toggleModal }) {

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html"><img src={logo} alt="GYKN Logo" /></a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#our-policies">Our Policies</a></li>
            <li><a href="#footer">Contact Us</a></li>
            <li className="sign-up-btn"><button onClick={() => toggleModal(true)}>Sign Up</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
