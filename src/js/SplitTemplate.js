import React, { Component } from 'react';

// ------------------------------------------------------
// A SplitComponent consists of a 50/50 container where
// each side can display either text or image. Possible
// combos: Text/Img, Img/Text, Text/Text.
// ------------------------------------------------------

class SplitTemplate extends Component {

  generateSides(data) {
    console.log(data);
    switch (data.contentType) {
      case 'imgText':
        
        break;
      case 'textImg':
        
        break;
      case 'textText':
      
        break;
        
      default: 
        console.log('Unknown contentType: ', data.contentType);
        return null;
    }
  }

  // ------------------------------------------------------
  renderLeft() {

  }

  // ------------------------------------------------------
  renderRight() {

  }

  // ------------------------------------------------------

  render() {
    if (this.props.template) {
      this.generateSides(this.props.template);
    }

    return (
      <div className="split-template"></div> 
    )
  }
}

export default SplitTemplate;