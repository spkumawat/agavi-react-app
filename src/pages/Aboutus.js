import React from 'react'
import '../assets/css/all.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import donationImage from '../assets/images/slider/donation-01.png';
import team1 from '../assets/images/team/1.jpg';
import team2 from '../assets/images/team/2.jpg';
import team3 from '../assets/images/team/3.jpg';
import team4 from '../assets/images/team/4.jpg';

const Aboutus = () => {
  return (
    <main className="charity-01-main">
      {/* ============abt-01 Section  Start============ */}
      <section className="abt-01">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading-wrapper">
                <h3>About Us</h3>
                <ol>
                  <li>Home<i className="far fa-angle-double-right"></i></li>
                  <li>About Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== bg-02-b started ========= */}
      <section className="bg-02-b">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="head-001">
                <h2>About Us Charity</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="_do_er_xs">
                <div className="_kl_de_s">
                  <img src={donationImage} alt="Donation" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="_do_er_xs">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation they ullamco.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation they ullamco.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========bg-05 started ========= */}
      <section className="bg-05">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <h2>Our Team</h2>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="team-wrapper">
                <div className="team-img">
                  <img src={team1} alt="James" />
                </div>
                <div className="team-content">
                  <h3>James</h3>
                  <p>Designer</p>
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="team-wrapper">
                <div className="team-img">
                  <img src={team3} alt="Albert" />
                </div>
                <div className="team-content">
                  <h3>Albert</h3>
                  <p>Art Designer</p>
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="team-wrapper">
                <div className="team-img">
                  <img src={team2} alt="Johns" />
                </div>
                <div className="team-content">
                  <h3>Johns</h3>
                  <p>SEO</p>
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="team-wrapper">
                <div className="team-img">
                  <img src={team4} alt="Smith" />
                </div>
                <div className="team-content">
                  <h3>Smith</h3>
                  <p>Developer</p>
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Aboutus;
