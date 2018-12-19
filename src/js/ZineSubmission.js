import React, { Component } from 'react';

class ZineSubmission extends Component {
  renderSplitParas(content) {
    return { __html: content };
  }

  // ------------------------------------------------------
  renderPrimary(data) {
    // TODO: check for primary template type
    let primaryTemplate = data.primary.template;

    if (primaryTemplate.style === 'split') {
      return (
        <div className="zine-primary">
          <div className="split-template">
            <div className="split-left">
              <div className="text">
                <span className="submission-title">{ data.title }</span>
                <p dangerouslySetInnerHTML={ this.renderSplitParas(primaryTemplate.text) }className="primary-content"></p>
              </div>
            </div>
            <div className="split-right">
              <img src={ 
                require(`../assets/${ data.assetDir }/${ primaryTemplate.img }`)
              } />
            </div>
          </div>
        </div>
      );
    } else if (primaryTemplate.style === 'full') {
      return (
        <div>other template thingy</div>
      )
    } else {
      console.log('unknown template style: ', primaryTemplate.style);
      return null;
    }
  }

  // ------------------------------------------------------
  renderQuote(content) {
    return (
      <div className="zine-quote">
        <div className="zine-quote-inner">
          <p>"{ content.quote }"</p>
        </div>
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
    let content = this.props.sub.content;
    return (
      <div className="zine-submission">
        { this.renderPrimary(content) }
        { this.renderQuote(content) }
      </div>
    )
  }
}

export default ZineSubmission;