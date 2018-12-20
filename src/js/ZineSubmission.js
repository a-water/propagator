import React, { Component } from 'react';
import FullTemplate from './FullTemplate';
import SplitTemplate from './SplitTemplate';

class ZineSubmission extends Component {
  // ------------------------------------------------------
  renderInnerHtml(content) {
    return { __html: content };
  }

  // ------------------------------------------------------
  renderPrimary(data) {
    let primaryTemplate = data.primary.template;

    if (primaryTemplate.style === 'split') {
      return (
        <div className="zine-section">
          <SplitTemplate 
            subTitle={ data.title }
            assetDir={ data.assetDir }
            isPrimary={ true } 
            data={ primaryTemplate }
          />
        </div>
      );
    } else if (primaryTemplate.style === 'full') {
      return (
        <div className="zine-section">
          <FullTemplate
            subTitle= { data.title }
            isPrimary= { true }
            data={ primaryTemplate }
            renderInnerHtml= { this.renderInnerHtml.bind(this) }
          />
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
    let secondaryTemplate = data.secondary.template;
    if (secondaryTemplate.style === 'split') {
      return (
        <div className="zine-section">
          <SplitTemplate 
            assetDir={ data.assetDir }
            isPrimary={ false } 
            data={ secondaryTemplate }
          />
        </div>
      );
    } else {
      // other secondary style templates? 
      console.log('[renderSecondary] style: ', secondaryTemplate.style);
    }
   
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