import React, { Component } from 'react';

// ------------------------------------------------------
// A SplitComponent consists of a 50/50 container where
// each side can display either text or image. Possible
// combos: Text/Img, Img/Text, Text/Text.
// ------------------------------------------------------
class SplitTemplate extends Component {

  // ------------------------------------------------------
  renderInnerHtml(content) {
    return { __html: content };
  }

  // ------------------------------------------------------
  generateSides(data) {
    switch (data.contentType) {
      // img left, text right
      case 'imgText':
        this.left = this.renderLeft('img', data.img);
        this.right = this.renderRight('text', data);
        break;

      // text left, img right
      case 'textImg':
        this.left = this.renderLeft('text', data);
        this.right = this.renderRight('img', data.img);
        break;
      
      // text left, text right
      case 'textText':
        // one of the data.text should be data.textRight
        data.isDoubleText = true;
        this.left = this.renderLeft('text', data);
        this.right = this.renderRight('text', data);
        data.isDoubleText = false;
        break;
        
      // we shouldn't be here
      default: 
        console.log('Unknown contentType: ', data.contentType);
        return null;
    }
  }

  // ------------------------------------------------------
  renderLeft(type, data) {
    // text on the left
    let title;
    if (this.props.isPrimary) {
      title = <span className="submission-title">{ this.props.subTitle }</span>
    }
    
    if (type === 'text') {
      return (
        <div className= {data.isDoubleText ? "split-left double-text-left" : "split-left" }>
          <div className="text">
            <div className="submission-title-container">
              { title }
              {
                this.props.extProjectUrl !== "" ?
                <a className="ext-proj-url" href={ this.props.extProjectUrl } rel="noopener noreferrer" target="_blank">website</a> : null
              }
            </div>
            <p dangerouslySetInnerHTML={ this.renderInnerHtml(data.text) }></p>
          </div>
        </div>
      );
    } 
      
    // img on the left
    return (
      <div className="split-left img">
        <img
          className="img-left" 
          alt="subImg"
          src={ require(`../assets/${ this.props.assetDir }/${ data }`) } 
        />
      </div>
    );
    
  }

  // ------------------------------------------------------
  renderRight(type, data) {
    // text on the right
    let title;
    if (this.props.isPrimary) {
      title = <span className="submission-title">{ this.props.subTitle }</span>
    }

    if (type === 'text') {
      return (
        <div className= {data.isDoubleText ? "split-right text-right double-text-right" : "split-right text-right"}>
          <div className="text">
            { title }
            <p dangerouslySetInnerHTML={ this.renderInnerHtml(data.isDoubleText ? data.textRight : data.text) }></p>
          </div>
        </div>
      )
    }

    // img on the right
    return (
      <div className="split-right">
        <img 
          className="img-right"
          alt="subImg"
          src={ require(`../assets/${ this.props.assetDir }/${ data }`) } 
        />
      </div>
    )
  }

  // ------------------------------------------------------\
  render() {
    if (this.props.data) {  
      this.generateSides(this.props.data);

      return (
        <div className="split-template">
          { this.left }
          { this.right }
        </div>
      )
    }

    return null;
  }
}

export default SplitTemplate;