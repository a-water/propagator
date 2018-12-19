import React, { Component } from 'react';
import FullTemplate from './FullTemplate';
import SplitTemplate from './SplitTemplate';

class ZineSubmission extends Component {
  renderInnerHtml(content) {
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
                <p dangerouslySetInnerHTML={ this.renderInnerHtml(primaryTemplate.text) }></p>
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
              <div className="submission-title-container">
                <span className="submission-title">{ data.title }</span>
              </div>

              {
                primaryTemplate.contentType === 'text'? 
                <p className="full-template-text" dangerouslySetInnerHTML={ this.renderInnerHtml(primaryTemplate.text) }></p> : null 
              }

              {
                primaryTemplate.contentType === 'video'?
                <div className="video-embed-container" dangerouslySetInnerHTML={ this.renderInnerHtml(primaryTemplate.video) }></div> : null
              }
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
  renderQuote(data) {
    return (
      <div className="zine-quote">
        <div className="zine-quote-inner">
          <p>"{ data.quote }"</p>
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
  render() {
    let content = this.props.sub.content;
    return (
      <div className="zine-submission">
        { this.renderPrimary(content) }
        { this.renderQuote(content) }
        { this.renderSecondary(content) }
      </div>
    )
  }
}

export default ZineSubmission;