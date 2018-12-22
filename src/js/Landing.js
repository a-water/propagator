import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div>
          <h2>PROPAGATOR.</h2>
        </div>
        <Link to="/issue-01">
          <div className="issue-card">
            ISSUE 01: DREAM MACHINE
          </div>
        </Link>
      </div>
    );
  }
}

export default Landing;