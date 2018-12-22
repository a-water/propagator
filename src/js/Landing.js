import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div>
          <h2>PROPAGATOR.</h2>
        </div>
        <div className="issue-card">
          <Link to="/issue-01">ISSUE 01: DREAM MACHINE</Link>
        </div>
      </div>
    );
  }
}

export default Landing;