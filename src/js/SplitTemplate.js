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
    console.log('[ generateSides ]', data);
    switch (data.contentType) {

      // img left, text right
      case 'imgText':
        this.left = this.renderLeft('img', data.img);
        this.right = this.renderRight('text', data.text);
        break;

      // text left, img right
      case 'textImg':
        this.left = this.renderLeft('text', data.text);
        this.right = this.renderRight('img', data.img);
        break;
      
      // text left, text right
      case 'textText':
        break;
        
      // we shouldn't be here
      default: 
        console.log('Unknown contentType: ', data.contentType);
        return null;
    }
  }

  // ------------------------------------------------------
  renderLeft(type, data) {
    console.log('[ renderLeft ] data:', data);
    // text on the left
    if (type === 'text') {
      return (
        <div className="split-left">
          <div className="text">
            <span className="submission-title">{ this.props.subTitle }</span>
            <p dangerouslySetInnerHTML={ this.renderInnerHtml(data) }></p>
          </div>
        </div>
      );
    } 
      
    // img on the left
    return (
      <div className="split-left">img here</div>
    );
    
  }

  // ------------------------------------------------------
  renderRight(type, data) {
    console.log('[ renderRight ] data:', data);
    console.log('assetdir', this.props.assetDir);
    // text on the right
    if (type === 'text') {
      return (
        <div className="split-right">text here</div>
      )
    }

    // img on the right
    return (
      <div className="split-right">
        <img 
          alt="primary"
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