import React, { useState } from 'react';
import '../assets/css/all.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
// import '../assets/scss/component/home/header.scss'
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="my-nav">
        <div className="container">
          <div className="row">
            <div className="nav-items">
              <div className="menu-toggle" onClick={handleMenuToggle}>
                <div className={`menu-hamburger ${isActive ? 'active' : ''}`}> </div>
              </div>
              <div className="logo">
                <img src={logo} alt="Logo" style={{ maxWidth: '30%' }} />
              </div>
              <div className="menu-items" >
                <div className={ `menu ${isActive ? 'active' : ''}`}>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/services">Events</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/gallary">Gallery</Link></li>
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



// import React, { useState } from 'react';
// import '../assets/css/all.min.css';
// import '../assets/css/bootstrap.min.css';
// import '../assets/css/style.css';
// import logo from '../assets/images/logo.png';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleMenuToggle = () => {
//     setIsActive(!isActive);
//     console.log("Menu isActive state:", !isActive);
//   };

//   return (
//     <header>
//       <div className="my-nav">
//         <div className="container">
//           <div className="row">
//             <div className="nav-items">
//               {/* Hamburger Menu */}
//               <div className="menu-toggle" onClick={handleMenuToggle} style={{ cursor: 'pointer' }}>
//                 <div className={`menu-hamburger ${isActive ? 'active' : ''}`}></div>
//               </div>

//               {/* Logo */}
//               <div className="logo">
//                 <img src={logo} alt="Logo" style={{ maxWidth: '30%' }} />
//               </div>

//               {/* Menu Items */}
//               <div
//                 className="menu-items"
//                 style={{
//                   display: isActive ? 'block' : 'none',
//                   opacity: isActive ? 1 : 0,
//                   visibility: isActive ? 'visible' : 'hidden',
//                   transition: 'opacity 0.5s ease, visibility 0.5s ease',
//                   position: 'absolute',
//                   top: '100%', // Adjust this based on your navbar height
//                   left: 0,
//                   right: 0,
//                   backgroundColor: '#fff', // Or any color that fits your design
//                   zIndex: 999,
//                 }}
//               >
//                 <div className="menu">
//                   <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about-us">About Us</Link></li>
//                     <li><Link to="/services">Events</Link></li>
//                     <li><Link to="/blog">Blog</Link></li>
//                     <li><Link to="/gallary">Gallery</Link></li>
//                     <li><Link to="/contact-us">Contact Us</Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

