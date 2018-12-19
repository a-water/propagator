import React, { Component } from 'react';

class ZineSubmission extends Component {
  // ------------------------------------------------------
  renderPrimary(data) {
    // TODO: check for primary template type
    return (
      <div className="zine-primary">
        <div className="split-template">
          <div className="split-left">
            <div className="text">
              <span>{ data.title }</span>
              <p>{ data.text }</p>
            </div>
          </div>
          <div className="split-right">
            image goes here
          </div>
        </div>
      </div>
    );
  }

  renderQuote(data) {
    return (
      <div className="zine-quote">
      </div>
    )
  }

  // ------------------------------------------------------
  renderSecondary(data) {
    return (
      <div className="zine-secondary">
      </div>
    );
  }

  // ------------------------------------------------------
  // submission data: this.sub
  render() {
    let primary = this.props.sub.content.primary;
    let secondary = this.props.sub.content.secondary;
    let tertiary = this.props.sub.content.tertiary;
    return (
      <div className="zine-submission">
        { this.renderPrimary(primary) }
      </div>
    )
  }
}

export default ZineSubmission;