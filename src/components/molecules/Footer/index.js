import React from "react"
import './index.scss'

const Footer = () => (
    <footer id="footer" className="footer">
        <div className="container">

            <div className="header-section">
                <h2>Contact Us</h2>
                <p>Have a query? Drop us a message</p>
            </div>

            <form action="" method="post" className="contactForm">
                <div className="col-md-6 col-sm-6 col-xs-12 left">
                    <div className="form-group">
                        <input type="text" name="name" className="form-control form" id="name" placeholder="Your Name"
                            data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validation"></div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email"
                            data-msg="Please enter a valid email" />
                        <div className="validation"></div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                            data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validation"></div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12 right">
                    <div className="form-group">
                        <textarea className="form-control textarea" name="message" rows="5" data-rule="required"
                            data-msg="Please write something for us" placeholder="Message"></textarea>
                        <div className="validation"></div>
                    </div>
                </div>

                <div className="col-xs-12">

                    <button type="submit" id="submit" name="submit"
                        className="form contact-form-button light-form-button oswald light">Send</button>
                </div>
            </form>

            <ul className="social-links">
                <li><a href="https://facebook.com/gyknlife"><i className="fa fa-facebook fa-fw"></i></a></li>
                <li><a href="https://instagram.com/gyknlife"><i className="fa fa-instagram fa-fw"></i></a></li>
                <li><a href="https://twitter.com/gyknlife"><i className="fa fa-twitter fa-fw"></i></a></li>
            </ul>
            <p className="footer-stuff">© {new Date().getFullYear()} GYKN Life (PTY) Ltd Juristic Representative. 2019/329894/07 | Suite 8, 8 Pieter Str, Q-Kon Building, Highveld Techno Park, Centurion | 012 665 1469 | info@gyknlife.co.za</p>
        </div>
    </footer>

)

export default Footer
