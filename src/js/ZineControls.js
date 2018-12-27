import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ZineControls extends Component {

  // ------------------------------------------------------
  constructor(props) {
    super(props);

    this.state = {
      navigateTo: null
    }
    // bind this once here so that it can be un-binded correctly in componentWillUnmount
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  // ------------------------------------------------------
  handleOnKeyDown(e) {
    if (e.keyCode === 37) {
      e.preventDefault();
      this.setState({ navigateTo: this.props.isPrevDisabled ? null : this.props.linkToPrev });
    } else if (e.keyCode === 39) {
      e.preventDefault();
      this.setState({ navigateTo: this.props.isNextDisabled ? null : this.props.linkToNext });
    }
  }

  // ------------------------------------------------------
  componentDidMount() {
    if (this.props.className !== "zine-controls-bottom") {
      window.addEventListener('keydown', this.handleOnKeyDown);
    }
  }

  // ------------------------------------------------------
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleOnKeyDown);
  }

  // ------------------------------------------------------
  render() {
    if (this.state.navigateTo) {
      return <Redirect to={ this.state.navigateTo } />
    }

    return (
      <div className={ this.props.className }>
        <Link className={ this.props.isPrevDisabled ? "zine-ctrl-link disabled" : 'zine-ctrl-link' } to={ this.props.isPrevDisabled ? "#" : this.props.linkToPrev }>
          <div
            disabled={ this.props.isPrevDisabled }
            id="prev-btn"
            className={ this.props.isPrevDisabled ? "zine-controls-btn zine-controls-btn-disabled" : "zine-controls-btn"}
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

          <Link disabled={ this.props.isNextDisabled } className={ this.props.isNextDisabled ? "zine-ctrl-link disabled" : 'zine-ctrl-link' } to={ this.props.isNextDisabled ? "#" : this.props.linkToNext }>
            <div
              disabled={ this.props.isNextDisabled }
              id="next-btn"
              className={ this.props.isNextDisabled ? "zine-controls-btn zine-controls-btn-disabled" : "zine-controls-btn"}
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