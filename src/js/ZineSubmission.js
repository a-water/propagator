import React, { Component } from 'react';

class ZineSubmission extends Component {
  
  // constructor(props) {
  //   super(props);
  // }

  // TODO: Render based on template from zine data
  render() {
    return (
      <div className="zine-submission">
        <h1>{ this.props.sub["submissionTitle"] }</h1>
      </div>
    )
  }
}

export default ZineSubmission;