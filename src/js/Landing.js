import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

  subscribeOnSubmit() {
    window.open('https://tinyletter.com/propagator-zine', 'popupwindow', 'scrollbars=yes,width=800,height=600');
    return true;
  }

  render() {
    return (
      <div className="landing">
        <div className="landing-left">
          <div id="landing-about">
            <h1 id="landing-title">PROPAGATOR</h1>
            <p id="landing-description">is a collaborative zine, crafted by a community of peers working across creative disciplines such as art, design, and technology.
            <br/><br/>Its inception came out of a need for time and space – for experimenting and engaging with different approaches to creating art, for expanding our horizons and creative practices, and most importantly, to develop a better understanding of ourselves and our place in the world.</p>
          </div>

          <div id="subscribe-area">
            <p id="subscribe-title">Subscribe to our newsletter for updates, opportunities, & open calls.</p>
            <form id="subscribe-form" action="https://tinyletter.com/propagator-zine" method="post" target="popupwindow" onSubmit={this.subscribeOnSubmit}>
              <input type="text" placeholder="email address" name="email" id="tlemail"></input>
              <input className="form-btn" type="submit" value="submit"></input>
            </form>
          </div>
        </div>

        <div className="landing-right">
          <div id="right-background">
            <img
              id="right-background-img"
              alt="right side background image"
              src={ require(`../assets/landing-bg.png`) }
            />
          </div>

          <div id="issue-section">
            <div id="issue-section-details">
              <h3 id="issue-number">Issue 01</h3>
              <span id="issue-title">Dream Machine</span>
              <div id="line-divider"></div>
              <span id="issue-contributors">Ann Chen // Lynn Hu // James Proctor // Alex Chan // Michaela Costello // Odbol // Yousif Al-Yousifi // ILOVECOMPUTERS // Ashwath ANAND</span>
            </div>
          </div>
          <div id="issue-link">
            <Link to="/issue-01">
              <span id="issue-read-link">Click to read</span>
              <img
                id="issue-link-img"
                alt="Open Issue 01 Arrow"
                src={ require(`../assets/arrow-right.png`) }
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;