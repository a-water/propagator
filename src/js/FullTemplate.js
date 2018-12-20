import React, { Component } from 'react';
import SplitTemplate from './SplitTemplate';

// ------------------------------------------------------
// A FullComponent consists of a full width container
// that displays one type of media: video (embedded iframe),
// text, or webpage (embedded iframe), as well as a 
// SplitTemplate component below that.
// ------------------------------------------------------

class FullTemplate extends Component {

  // ------------------------------------------------------
  constructor(props) {
    super(props);

    let contentTypeMap = new Map();
    contentTypeMap.set("text", "full-template-text");
    contentTypeMap.set("video", "video-embed-container");
    contentTypeMap.set("iframe", "");
    contentTypeMap.set("img", "");

    this.state = {
      contentTypeMap
    }
  }
  
  // ------------------------------------------------------
  renderMedia(contentType) {
    switch (contentType) {
      case 'text':
        return (
          <p
            className={ this.state.contentTypeMap.get(this.props.data.contentType) }
            dangerouslySetInnerHTML={ this.props.renderInnerHtml(this.props.data[this.props.data.contentType]) }></p>
        );
        
      case 'video':
        return (
          <div
            className={ this.state.contentTypeMap.get(this.props.data.contentType) }
            dangerouslySetInnerHTML={ this.props.renderInnerHtml(this.props.data[this.props.data.contentType]) }></div>
        );

      case 'iframe':
        return (
          <div
            className={ this.state.contentTypeMap.get(this.props.data.contentType) }
            dangerouslySetInnerHTML={ this.props.renderInnerHtml(this.props.data[this.props.data.contentType]) }></div>
        );

      case 'img':
        return (
          <div
            className={ this.state.contentTypeMap.get(this.props.data.contentType) }
            >
              <img
                className="img-full" 
                alt="subImgFull"
                src={ require(`../assets/${ this.props.assetDir }/${ this.props.data[this.props.data.contentType] }`) } 
              />
            </div>
          );

      default:
        console.log('[renderMedia] contentType not recognized: ', contentType);
        return null;
    }
  }

  // ------------------------------------------------------
  render() {
    return (
      <div className="full-template">
        <div className={ 'full-template-inner ' + this.props.data.contentType }>
          {
            this.props.isPrimary ?
            <div className="submission-title-container">
              <span className="submission-title">{ this.props.subTitle }</span>
            </div> : null
          }
          { this.renderMedia(this.props.data.contentType) }
        </div>
      </div>
    )
  }
}

export default FullTemplate;