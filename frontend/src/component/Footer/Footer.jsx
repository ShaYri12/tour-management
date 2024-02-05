import React from 'react'
import { Link } from "react-router-dom";
import './footer.css';
import logo from '../../assets/images/logo.png'
const Footer = () => {
  const year = new Date().getFullYear();

  return (
      <footer className="container-fluid text-center text-lg-start  text-muted footer-section">
        <section className="footer-section pb-1 ">
          <div className="container text-center text-md-start ">
            <div className="row ">
              <footer className="text-center text-lg-start text-muted">
                <section className="footer-columns">
                  <div className="container-fluid text-center text-md-start">
                    <div className="row ">              
                        <div className="col-md-3 col-lg-3 footer-logo mx-auto mb-4 mt-2">
                          <img className='img-fluid ' src={logo} alt=""/>
                          <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.</p>
                        
                          <div className='social-links d-flex align-itms-center justify-content-md-start justify-content-center gap-4'>
                            <span>
                              <Link to="#"><i className='ri-youtube-line'></i></Link>
                            </span>
                            <span>
                              <Link to="#"><i className='ri-github-fill'></i></Link>
                            </span>
                            <span>
                              <Link to="#"><i className='ri-facebook-circle-line'></i></Link>
                            </span>
                            <span>
                              <Link to="#"><i className='ri-instagram-line'></i></Link>
                            </span>
                          </div>
                      </div>
                      <div className="col-md-2 col-lg-3 mx-auto mb-4 footer-quick-links">
                        <h6 className="text-uppercase footer-heading footer-link-title fw-bold mb-4 ">Discover</h6>
                        <p>
                          <Link to="/" className="text-reset">Home</Link>
                        </p>
                        <p>
                          <Link to="/tours" className="text-reset">Tours </Link>
                        </p>
                        <p>
                          <Link to="/about" className="text-reset">About </Link>
                        </p>
                      </div>

                      <div className="col-md-2 col-lg-3  mx-auto mb-4">
                        <h6 className="footer-link-title text-uppercase fw-bold mb-4 footer-heading">
                        Quick Links
                        </h6>
                        <p>
                          <a href="/home/#gallery-section" className="text-reset">Gallery</a>
                        </p>
                        <p>
                          <Link to="/login" className="text-reset">Login </Link>
                        </p>
                        <p>
                          <Link to="register" className="text-reset">Register </Link>
                        </p>
                      </div>

                      <div className="col-md-4 col-lg-3 mx-auto contact-info">
                        <h6 className="footer-link-title text-uppercase fw-bold mb-4 footer-heading">Contact</h6>
                        <p className=" gap-2">
                          <i className="ri-map-pin-line"></i> <b className="para-highlight"> Address: </b> Lyari, Karachi
                        </p>
                        <p className=" gap-2">
                          <i className="ri-mail-line"></i> <b className="para-highlight overflow-show"> Email: </b> xyz@example.com
                        </p>
                        <p className=" gap-2">
                          <i className="ri-phone-fill"></i> <b className="para-highlight"> Phone: </b> +0123456788
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="col-lg-12 d-flex justify-content-center">
                <p className="copyright"> Copyright {year}, design & develop by Sharjeel. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </footer>
  )
}

export default Footer