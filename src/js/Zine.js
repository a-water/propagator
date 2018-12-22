import React, { Component } from 'react';
import NavBar from './NavBar';
import ZineNav from './ZineNav';
import TOC from './TOC';
import ZineSubmission from './ZineSubmission';
import ZineControls from './ZineControls';

// ------------------------------------------------------
// A zine component. Data for each zine is passed from
// App.js through Routes (not sure if this is best).
// The zine knows its current page.
// ------------------------------------------------------
class Zine extends Component {

  // ------------------------------------------------------
  constructor(props) {
    super(props);
    const submissions = props.zineData["submissions"];

    this.numPages = submissions.length; 
    this.TOC = this.generateTOC();

    this.state = {
      currentSubmission: -1,
      currentPage: 0,
      currentSubmissionTitle: "",
      previousSubmissionTitle: "",
      nextSubmissionTitle: submissions[0].submissionTitle
    }

    if (props.match) {
      let { currentSubmissionTitle } = props.match.match.params;
      currentSubmissionTitle = currentSubmissionTitle.replace(/_/g, " ");

      if (currentSubmissionTitle) {
        for (let i=0; i<submissions.length; i++) {
          if (submissions[i].submissionTitle === currentSubmissionTitle) {
            this.state.currentSubmission      = i;
            this.state.currentPage            = i + 1;
            this.state.currentSubmissionTitle = currentSubmissionTitle;
            
            if (i === 0) {
              this.state.nextSubmissionTitle = submissions[i+1].submissionTitle; 
            } else if (i === submissions.length - 1) { 
              this.state.previousSubmissionTitle = submissions[i-1].submissionTitle;
            } else {
              this.state.nextSubmissionTitle = submissions[i+1].submissionTitle; 
              this.state.previousSubmissionTitle = submissions[i-1].submissionTitle;
            }
            return;
          }
        }
      }
    }
  }

  // ------------------------------------------------------
  generateTOC() {
    return (
      <div className="zine-toc">
        <ul>
          { 
            this.props.zineData["submissions"].map((sub, index) => {
              return (
                <li key={ 'page-' + (index + 1) }>
                  { sub.submissionTitle }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  // ------------------------------------------------------
  render() {
    return (
      <div className="zine">
        <NavBar />
        <ZineNav
          author={ 
            this.state.currentPage === 0 ? "TABLE OF CONTENTS" : 
            this.props.zineData["submissions"][this.state.currentSubmission].author 
          }
          creds={ 
            this.state.currentPage === 0 ? "" :
            this.props.zineData["submissions"][this.state.currentSubmission].creds 
          }
          currentSubmissionTitle={ this.state.currentSubmissionTitle }
          previousSubmissionTitle={ this.state.previousSubmissionTitle }
          nextSubmissionTitle={ this.state.nextSubmissionTitle }
          currentPage={ this.state.currentPage }
          numPages={ this.numPages }
          showPrevBtn={ this.state.currentPage > 0 }
        />
        <div className="zine-content">
          {
            this.state.currentPage === 0 ?
            <TOC submissions={ this.props.zineData["submissions"] } /> : 
            <ZineSubmission sub={ this.props.zineData["submissions"][this.state.currentSubmission] } />
          }
        </div>
        <ZineControls
          className="zine-controls-bottom"
          linkToPrev={`/issue-01/${ this.state.previousSubmissionTitle.replace(/ /g, "_") }`}
          linkToNext={`/issue-01/${ this.state.nextSubmissionTitle.replace(/ /g, "_") }`}
          isPrevDisabled={ this.state.currentPage === 0 }
          isNextDisabled={ this.state.currentPage === this.numPages }
          currentPageNum={ this.state.currentPage + 1 }
          maxPagesNum={ this.numPages + 1 }
        />
      </div>
    );
  }
}

export default Zine;