import React from 'react';
import '../assets/css/all.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
// Ensure you have a CSS file for styling

const Services = () => {
  return (
    <main className="charity-01-main">
      {/* ============abt-01 Section  Start============ */}
      <section className="abt-01">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading-wrapper">
                <h3>Services</h3>
                <ol>
                  <li>Home<i className="far fa-angle-double-right"></i></li>
                  <li>Services</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== services started ========= */}
      <section className="services-01">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="head-01">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ser-box">
                <i className="fal fa-bone"></i>
                <h3>Raise Fund for Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ser-box">
                <i className="fal fa-graduation-cap"></i>
                <h3>Education for poor children </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ser-box">
                <i className="fal fa-child"></i>
                <h3>Promoting the Rights of Children</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ser-box">
                <i className="fal fa-box-heart"></i>
                <h3>Massive Donation to Poor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ser-box">
                <i className="fal fa-hands-heart"></i>
                <h3>Huge help to homeless pupil</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ser-box">
                <i className="fal fa-home"></i>
                <h3>Let’s build some homes.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ser-box">
                <i className="fal fa-hand-holding-water"></i>
                <h3>Pure Water For Poor People</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ser-box">
                <i className="fal fa-heartbeat"></i>
                <h3>Medical Facilities</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
