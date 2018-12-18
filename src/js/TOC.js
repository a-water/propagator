import React, { Component } from 'react';

// ------------------------------------------------------
// Generates a Table of Contents for a Zine component.
// ------------------------------------------------------
class TOC extends Component {
  render() {
    return (
      <div className="zine-toc">
        <div className="zine-cover"></div>
        <div className="zine-toc-container">
          <ul>
            { 
              this.props.submissions.map((sub, index) => {
                return (
                  <li key={ 'page-' + (index + 1) }>
                    "{ sub.submissionTitle.toUpperCase() }" by { sub.author.toUpperCase() }
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default TOC;