import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <Link to="/issue-01">Issue 01: DREAM MACHINE</Link>
      </div>
    );
  }
}

export default Landing;