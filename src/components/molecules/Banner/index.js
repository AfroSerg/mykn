import React from "react"
import './index.scss'

function Banner({ toggleModal }) {

  return (
    <div className="banner">
      <div className="bg-color">
        <div className="container">
          <div className="row">
            <div className="banner-text">
              <div className="text-border">
                <h1 className="text-dec">Your Future, Today</h1>
              </div>
              <div className="intro-para quote">
                <p className="small-text">GYKN LIFE is an Authorised Juristic Representative working under license with an
                  Authorised Financial Services Provider. We offer you a dignified funeral plan to cover yourself
                  and up to 12 family
                members. Our policies pays out your valid claim with 48 hours.</p>
                <div className="btn-group">
                  <a href="#footer" className="btn btn-2 get-quote">Contact Us</a>
                  <button onClick={() => toggleModal(true)} className="btn get-quote">Sign Up</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
