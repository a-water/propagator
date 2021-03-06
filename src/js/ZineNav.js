import React, { Component } from 'react';
import ZineControls from './ZineControls';

// ------------------------------------------------------
// A navigation component for a zine, includes controls
// to paginate through submissions. This component recieves 
// data through props from Zine.js, such as the current
// page, submission author's name and other metadata. 
// ------------------------------------------------------
class ZineNav extends Component {
  // ------------------------------------------------------
  render() {
    return (
      <div className="zine-nav">
        <div className="zine-nav-inner">
          <div className="contributor-meta">
            <span className="contributor-name">
              { this.props.author }
              {this.props.portfolioUrl ? 
                <a href={this.props.portfolioUrl} rel="noopener noreferrer" target="_blank">
                  <div className="zine-nav-link">
                    <img
                      id="zine-link-img"
                      alt="Portfolio Link"
                      src={ require(`../assets/link-icon.png`)}
                    />
                  </div>
                </a>
              :
                null
              }
            </span><br/>
            <span className="contributor-creds">
              { this.props.creds.toLowerCase() }
            </span>
          </div>
          
          <ZineControls
            className="zine-controls"
            linkToPrev={`/issue-01/${ this.props.previousSubmissionTitle.replace(/ /g, "_") }`}
            linkToNext={`/issue-01/${ this.props.nextSubmissionTitle.replace(/ /g, "_") }`}
            isPrevDisabled={ this.props.currentPage === 0 }
            isNextDisabled={ this.props.currentPage === this.props.numPages }
            onClickPrev={ this.props.handleDecrementPage }
            onClickNext={ this.props.handleIncrementPage }
            currentPageNum={ this.props.currentPage + 1 }
            maxPagesNum={ this.props.numPages + 1 }
          />
        </div>
      </div>
    );
  }
}

export default ZineNav;