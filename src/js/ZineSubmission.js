import React, { Component } from 'react';

class ZineSubmission extends Component {
  renderSplitParas(content) {
    return { __html: content };
  }

  // ------------------------------------------------------
  renderPrimary(data) {
    let primaryTemplate = data.primary.template;

    if (primaryTemplate.style === 'split') {
      return (
        <div className="zine-section">
          { /* TODO: Move below to SplitTemplate component */ }
          <div className="split-template">
            <div className="split-left">
              <div className="text">
                <span className="submission-title">{ data.title }</span>
                <p dangerouslySetInnerHTML={ this.renderSplitParas(primaryTemplate.text) }></p>
              </div>
            </div>
            <div className="split-right">
              <img 
                alt="primary"
                src={ 
                  require(`../assets/${ data.assetDir }/${ primaryTemplate.img }`)
                } 
              />
            </div>
          </div>
        </div>
      );
    } else if (primaryTemplate.style === 'full') {
      return (
        <div className="zine-section">
          { /* TODO: Move below to FullTemplate component */ }
          { /* TODO: FullTemplate component supports different media types: video, iFrame, text */ }
          <div className="full-template">
            <div className="full-template-inner">
              <div className="text">
                <div className="submission-title-container">
                  <span className="submission-title">{ data.title }</span>
                </div>
                <p dangerouslySetInnerHTML={ this.renderSplitParas(primaryTemplate.text) }></p>
              </div>
            </div>
          </div>
        </div>
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
      <div className="zine-section">
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