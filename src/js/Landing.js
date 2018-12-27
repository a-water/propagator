import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div id="landing-header">
          <div id="landing-about">
            <span id="landing-title">PROPAGATOR</span>
            <br/><span id="landing-description">is a collaborative zine, crafted by a community of peers working across creative disciplines such as art, design, and technology. Its inception came out of a need for time and space - for experimenting and engaging with different approaches to creating art, for expanding our horizons and creative practices, and most importantly, to develop a better understanding of ourselves and our place in the world.</span>
          </div>
        </div>
        <div id="issue-list">
          <Link to="/issue-01">
            <div className="issue-card">
              ISSUE 01: DREAM MACHINE
            </div>
          </Link>
        </div>
        <div id="landing-signup">
            <p>
              If you would like to get involved, please email us at <a href="mailto:propagator.zine@gmail.com">propagator.zine@gmail.com</a>.
            </p>
          </div>
      </div>
    );
  }
}

export default Landing;