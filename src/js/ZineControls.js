import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ZineControls extends Component {
  render() {
    return (
      <div className={ this.props.className }>
        <Link className={ this.props.isPrevDisabled ? "zine-ctrl-link disabled" : 'zine-ctrl-link' } to={ this.props.linkToPrev }>
          <div
            disabled={ this.props.isPrevDisabled }
            id="prev-btn"
            className="zine-controls-btn"
          >
            { 
              this.props.className === 'zine-controls-bottom' ? 
              <img
                className="zine-controls-icon icon-left" 
                alt="ctlbtn"
                src={ require(`../assets/caret-left.png`) } 
              /> : "PREV"
            }
            </div>           
          </Link>

          <span className="page-indicator-label">
            { (this.props.currentPageNum) + "/" + (this.props.maxPagesNum) }
          </span>

          <Link className={ this.props.isNextDisabled ? "zine-ctrl-link disabled" : 'zine-ctrl-link' } to={ this.props.linkToNext }>
            <div
              disabled={ this.props.isNextDisabled }
              id="next-btn"
              
              className="zine-controls-btn"
            >
            { 
              this.props.className === 'zine-controls-bottom' ? 
              <img
                className="zine-controls-icon icon-right" 
                alt="ctlbtn"
                src={ require(`../assets/caret-right.png`) } 
              /> : "NEXT"
            }
          </div>
        </Link>
      </div>
    );
  }
}

export default ZineControls;