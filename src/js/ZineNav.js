import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// ------------------------------------------------------
// A navigation component for a zine, includes controls
// to paginate through submissions. This component recieves 
// data through props from Zine.js, such as the current
// page, submission author's name and other metadata. 
// ------------------------------------------------------
class ZineNav extends Component {

  // ------------------------------------------------------
  handleOnKeyDown(e) {
    e.preventDefault();
    if (e.keyCode === 39) {
      // right arrow
      console.log(this);
      this.props.handleIncrementPage();
    } 
    
    if (e.keyCode === 37) {
      // left arrow
      this.props.handleDecrementPage();
    }
  }

  // ------------------------------------------------------
  render() {
    return (
      <div className="zine-nav">
        <div className="zine-nav-inner">
          <div className="contributor-meta">
            <span className="contributor-name">
              { this.props.author }
            </span><br/>
            <span className="contributor-creds">
              { this.props.creds.toLowerCase() }
            </span>
          </div>
          
          <div className="zine-controls">
            <Link to={`/issue-01/${ this.props.previousSubmissionTitle.replace(/ /g, "_") }`}>
              <button
                disabled={ this.props.currentPage === 0 }
                id="prev-btn"
                className="zine-controls-btn"
                onClick={ this.props.handleDecrementPage }
              >PREV</button>
            </Link>

            <span className="page-indicator-label">{ (this.props.currentPage + 1) + "/" + (this.props.numPages + 1) }</span>

            <Link to={`/issue-01/${ this.props.nextSubmissionTitle.replace(/ /g, "_") }`}>
              <button
                disabled={ this.props.currentPage === this.props.numPages }
                id="next-btn"
                className="zine-controls-btn"
                onClick={ this.props.handleIncrementPage }
              >NEXT</button>
            </Link>
            
          </div>
        </div>
      </div>
    );
  }
}

export default ZineNav;