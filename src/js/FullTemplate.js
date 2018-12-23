import React, { Component } from 'react';
import SleepToLearn from './SleepToLearn';

// ------------------------------------------------------
// A FullComponent consists of a full width container
// that displays one type of media: video (embedded iframe),
// text, or webpage (embedded iframe), as well as a 
// SplitTemplate component below that. This SplitTemplate
// is called "secondTemplate" in the data, and is added 
// in the ZineSubmission renderPrimary() function.
// ------------------------------------------------------
class FullTemplate extends Component {

  // ------------------------------------------------------
  constructor(props) {
    super(props);

    let contentTypeMap = new Map();
    contentTypeMap.set("text", "full-template-text");
    contentTypeMap.set("video", "video-embed-container");
    contentTypeMap.set("custom-site", "custom-site");
    contentTypeMap.set("img", "");

    this.state = { contentTypeMap }
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

      case 'custom-site':
        return (
          <div className={ this.state.contentTypeMap.get(this.props.data.contentType) }>
            <SleepToLearn />
          </div>
        );

      case 'img':
        return (
          <img
            className="img-full" 
            alt="subImgFull"
            src={ require(`../assets/${ this.props.assetDir }/${ this.props.data[this.props.data.contentType] }`) } 
          />
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
            this.props.isPrimary && this.props.data.contentType !== 'custom-site'?
            <div className="submission-title-container">
              <span className="submission-title">{ this.props.subTitle }</span>
              {
                this.props.extProjectUrl !== "" ?
                <a className="ext-proj-url" href={ this.props.extProjectUrl } target="_blank">website</a> : null
              }
            </div> : null
          }
          { this.renderMedia(this.props.data.contentType) }
        </div>
      </div>
    )
  }
}

export default FullTemplate;