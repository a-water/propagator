import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// ------------------------------------------------------
// Top most navigation component for a zine, with link
// back to landing page and the current issue title.
// ------------------------------------------------------
class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-inner">
          <Link id="propagator-title" to="/">PROPAGATOR</Link>
          <div className="current-issue-meta">
            <span className="issue-title">DREAM MACHINE</span><br/>
            <span className="issue-num">ISSUE 01</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;