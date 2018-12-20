import React, { Component } from 'react';

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
  render() {
    return (
      <div className="full-template">
        <div className="full-template-inner">
          <div className="submission-title-container">
            <span className="submission-title">{ this.props.submissionData.title }</span>
          </div>

          <p
            className={this.state.contentTypeMap.get(this.props.primaryTemplate.contentType)}
            dangerouslySetInnerHTML={ this.props.renderInnerHtml(this.props.primaryTemplate[this.props.primaryTemplate.contentType]) }>
          </p>

        </div>
      </div>
    )
  }
}

export default FullTemplate;