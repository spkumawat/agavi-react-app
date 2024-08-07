import React from 'react'
import '../assets/css/all.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import logo from '../assets/images/logo.png';
import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="my-nav">
        <div className="container">
          <div className="row">
            <div className="nav-items">
              <div className="menu-toggle">
                <div className="menu-hamburger"></div>
              </div>
              <div className="logo" >
                <img src={logo} alt="Logo" style={{ maxWidth: '30%' }} />
              </div>
              <div className="menu-items">
                <div className="menu">
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/services">Events</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li> <Link to= "/gallary" > Gallary </Link> </li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                 </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
