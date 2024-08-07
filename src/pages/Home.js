import React from 'react'
import {useEffect , useState  } from 'react'
import '../assets/css/all.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'
import bannerImg from '../assets/images/slider/10980-removebg-preview.png'; 
import donationImg from '../assets/images/slider/bd1.jpg';
import { Link } from 'react-router-dom';
import blog1 from '../assets/images/blog/blog_1.jpg'; // Adjust paths as necessary
import blog2 from '../assets/images/blog/blog_2.jpg';
import blog3 from '../assets/images/blog/blog_3.jpg';
import team1 from '../assets/images/team/1.jpg'; // Adjust paths as necessary
import team2 from '../assets/images/team/2.jpg';
import team3 from '../assets/images/team/3.jpg';
import team4 from '../assets/images/team/4.jpg';
import Achievements from '../Components/Counts/Achievements';
import Event from '../Components/Events/Event.js'

const Home = () => {

  useEffect(() => {
    const counters = document.querySelectorAll('.counting');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const speed = 200; // Adjust as necessary
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
      <main  className="charity-01-main">
               <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="wrapper">
              <div className="content">
                <h1>Together We Serve, Together We Grow</h1>
                <p>"Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has." </p>
                <div className="btn-002">
                <ul>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/follow-us">Follow Us</Link></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="img-wrapper">
              <div className="banner-img">
                <img src={bannerImg} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="bg-02-b">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="head-001">
              <h2>About Us Charity</h2>
              <p>With an intent to work towards societal betterment and to help the students maintain their socially traditional roots, Social Wing RAIT was founded in the year 2013. We are dedicated to providing a grass-roots outlook of societal issues to our student members and finding and working on solutions to these issues. Ever since its inception, Social Wing has become a significant part of RAIT and has observed increasing participation of students with each passing year.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="_do_er_xs">
              <div className="_kl_de_s">
                <img src={donationImg} alt="Donation" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="_do_er_xs">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation they ullamco.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation they ullamco.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Achievements/>
    <Event/>

    
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


{/* <section className="services-01">
<div className="container">
  <div className="row">
    <div className="col-12">
      <div className="head-01">
        <h2>Our Events</h2>
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
        <h3>Education for poor children</h3>
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
        <h3>Medical Facilities For Children</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt</p>
      </div>
    </div>
  </div>
</div>
</section> */}
{/* 
<section className="_ng_cs_we_rw">
<div className="container">
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
      <div className="_lk_bg_cd">
        <i className="fal fa-school"></i>
        <div style={{ color: '#fff', fontSize: '20px' }} className="counting" data-count="200">0</div>
        <h5>Primary Schools</h5>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
      <div className="_lk_bg_cd">
        <i className="fal fa-hospitals"></i>
        <div style={{ color: '#fff', fontSize: '20px' }} className="counting" data-count="107">0</div>
        <h5>Hospitals</h5>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
      <div className="_lk_bg_cd">
        <i className="fal fa-hands-helping"></i>
        <div style={{ color: '#fff', fontSize: '20px' }} className="counting" data-count="20">0</div>
        <h5>Volunteers</h5>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
      <div className="_lk_bg_cd">
        <i className="fal fa-trophy"></i>
        <div style={{ color: '#fff', fontSize: '20px' }} className="counting" data-count="123">0</div>
        <h5>Winning Awards</h5>
      </div>
    </div>
  </div>
</div>
</section> */}


<section className="bg-03">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="head-01">
              <h2>Latest news</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <article className="_kl_cd">
              <div className="_i-tr">
                <img src={blog1} alt="Brilliant After All, A New Album by Rebecca" />
              </div>
              <div className="_oi_er_we">
                <h3>Brilliant After All, A New Album by Rebecca: Help poor people</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor
                  nobis....</p>
              </div>
            </article>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <article className="_kl_cd">
              <div className="_i-tr">
                <img src={blog2} alt="South african pre primary school build for children" />
              </div>
              <div className="_oi_er_we">
                <h3>South african pre primary school build for children</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor
                  nobis....</p>
              </div>
            </article>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <article className="_kl_cd">
              <div className="_i-tr">
                <img src={blog3} alt="Provide pure water for syrian poor people" />
              </div>
              <div className="_oi_er_we">
                <h3>Provide pure water for syrian poor people</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor
                  nobis....</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>



         
      </main>
  );
};

export default Home;
