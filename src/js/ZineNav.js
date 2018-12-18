import React, { Component } from 'react';

// ------------------------------------------------------
// A navigation component for a zine, includes controls
// to paginate through submissions. This component recieves 
// data through props from Zine.js, such as the current
// page, submission author's name and other metadata. 
// ------------------------------------------------------
class ZineNav extends Component {

  render() {
    return (
      <div className="zine-nav">
        <div className="zine-nav-inner">
          <div className="contributor-meta">
            <span className="contributor-name">
              { this.props.author }
            </span><br/>
            <span className="contributor-creds">
              { this.props.creds }
            </span>
          </div>
          <div className="zine-controls">  
            <button
              disabled={ this.props.currentPage === 0 }
              id="prev-btn"
              className="zine-controls-btn"
              onClick={ this.props.handleDecrementPage }
            >PREV</button>
            <span className="page-indicator-label">{ (this.props.currentPage + 1) + "/" + (this.props.numPages + 1) }</span>
            <button
              disabled={ this.props.currentPage === this.props.numPages }
              id="next-btn"
              className="zine-controls-btn"
              onClick={ this.props.handleIncrementPage }
            >NEXT</button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default ZineNav;