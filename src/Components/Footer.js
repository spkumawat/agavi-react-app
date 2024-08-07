import React from 'react';
import '../assets/css/all.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
 // Ensure you have a CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
            <div className="_kl_ds_we">
              <div className="head-footer">
                <h3>Smart Charitables</h3>
                <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.</p>
                <ol>
                  <li><i className="fab fa-facebook-square"></i></li>
                  <li><i className="fab fa-instagram"></i></li>
                  <li><i className="fab fa-twitter-square"></i></li>
                  <li><i className="fab fa-linkedin"></i></li>
                </ol>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
            <div className="_kl_ds_we">
              <div className="head-footer">
                <h3>Services</h3>
                <ul>
                  <li><i className="fas fa-chevron-right"></i>Huge Help To Homeless Pupil</li>
                  <li><i className="fas fa-chevron-right"></i>Education For Poor Children</li>
                  <li><i className="fas fa-chevron-right"></i>Medical Facilities</li>
                  <li><i className="fas fa-chevron-right"></i>Raise Fund For Healthy Food</li>
                  <li><i className="fas fa-chevron-right"></i>Let’S Build Some Homes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
            <div className="_kl_ds_we">
              <div className="head-footer">
                <h3>Quick links</h3>
                <ul>
                  <li><i className="fas fa-chevron-right"></i>Home</li>
                  <li><i className="fas fa-chevron-right"></i>About Us</li>
                  <li><i className="fas fa-chevron-right"></i>Services</li>
                  <li><i className="fas fa-chevron-right"></i>Blog</li>
                  <li><i className="fas fa-chevron-right"></i>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
            <div className="_kl_ds_we">
              <div className="head-footer">
                <h3>Find Us</h3>
                <ul className="un-hover">
                  <li><i className="far fa-location"></i>Marthandam</li>
                  <li><i className="fas fa-mobile-alt"></i>+91 9751791203</li>
                  <li><i className="far fa-envelope"></i>sales@smarteyeapps.com</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-12">
            <div className="row _pl_we_sq">
              <div className="col-12">
                <div className="last-01">
                  <p>2015 @ All Rights Reserved Designed and developed by 
                    <a href="https://www.smarteyeapps.com">SmarteyeTechnologies</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
