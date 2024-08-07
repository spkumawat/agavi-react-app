import React from 'react';
import Count from './Count';
import './assets/css/animate.css'
import './assets/css/style.css'
import './assets/css/bootstrap.min.css' // Adjust the import path as necessary

const Achievements = () => {
  return (
    <div className="doctor-message">
      <div className="inner-lay">
        <div className="container">
          <div className="row session-title">
            <h2>Our Achievements in Numbers</h2>
            <p>
              We can talk for a long time about the advantages of our Dental clinic
              before other medical treatment facilities. But you can read the following
              facts to make sure of all the pluses of our clinic:
            </p>
          </div>
          <div className="row">
            <Count number={12} text="YEARS OF EXPERIENCE" />
            <Count number={1812} text="HAPPY CHILDREN" />
            <Count number={52} text="EVENTS" />
            <Count number={48} text="FUNDS RAISED" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
