import React, { Component } from 'react';

// ------------------------------------------------------
// A navigation component for a zine, includes controls
// to paginate through submissions. This component recieves 
// data through props from Zine.js, such as the current
// page submission author's name and other metadata.
// ------------------------------------------------------
class ZineNav extends Component {
  render() {
    return (
      <div className="zine-nav">
        <div className="zine-nav-inner">
          <div className="contributor-meta">
            <span className="contributor-name">Contributor Name</span><br/>
            <span className="contributor-creds">Title 1, title 2, & title 3</span>
          </div>
          <div className="zine-controls">
            <button className="zine-controls-btn" id="prev-btn">PREV</button>
            <button className="zine-controls-btn" id="next-btn">NEXT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ZineNav;