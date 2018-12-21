import React, { Component } from 'react';
import FullTemplate from './FullTemplate';
import SplitTemplate from './SplitTemplate';
import htmlData from './data/sleep-to-learn';

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
            assetDir={ data.assetDir }
            subTitle= { data.title }
            isPrimary= { true }
            data={ primaryTemplate }
            iframeData={ primaryTemplate.contentType === 'iframe' ? htmlData : null }
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
  renderSecondaryPrimary(data) {
    let secondPrimaryTemplate = data.primary.secondTemplate;

    if (secondPrimaryTemplate.style === 'split') {
      return (
        <div className="zine-section">
          <SplitTemplate
            isPrimary={ false }
            assetDir={ data.assetDir } 
            data={ secondPrimaryTemplate } 
          />
        </div>
      )
    } else {
      console.log('[renderSecondaryPrimary] other style: ', secondPrimaryTemplate.style);
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
      console.log('[renderSecondary] style: ', secondaryTemplate.style);
    }
  }

  // ------------------------------------------------------
  renderTertiary(data) {
    let tertiaryTemplate = data.tertiary.template;
    if (tertiaryTemplate.style === 'full') {
      return (
        <div className="zine-section">
          <FullTemplate
            assetDir={ data.assetDir }
            isPrimary= { false }
            data={ tertiaryTemplate }
            renderInnerHtml= { this.renderInnerHtml.bind(this) }
          />
        </div>
      )
    } else {
      console.log('[renderTertiary] style: ', tertiaryTemplate.style);
    }
  }


  // ------------------------------------------------------
  render() {
    let content = this.props.sub.content;
    return (
      <div className="zine-submission">
        { this.renderPrimary(content) }

        {
          content.primary.template.style === 'full' ?
          this.renderSecondaryPrimary(content) : null
        }

        { this.renderQuote(content) }

        { 
          content.hasOwnProperty('secondary') ?
          this.renderSecondary(content) : null
        }

        {
          content.hasOwnProperty('tertiary') ?
          this.renderTertiary(content) : null
        }
      </div>
    )
  }
}

export default ZineSubmission;