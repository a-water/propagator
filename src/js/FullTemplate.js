import React, { Component } from 'react';

// ------------------------------------------------------
// A FullComponent consists of a full width container
// that displays one type of media: video (embedded iframe),
// text, or webpage (embedded iframe), as well as a 
// SplitTemplate component below that.
// ------------------------------------------------------

class FullTemplate extends Component {
  render() {
    return (
      <div className="full-template"></div> 
    )
  }
}

export default FullTemplate;