import React, { Component } from 'react';
import NavBar from './NavBar';
import ZineNav from './ZineNav';
import TOC from './TOC';
import ZineSubmission from './ZineSubmission';

// ------------------------------------------------------
// A zine component. Data for each zine is passed from
// App.js through Routes (not sure if this is best).
// The zine knows its current page.
// ------------------------------------------------------
class Zine extends Component {

  // ------------------------------------------------------
  constructor(props) {
    super(props);

    this.numPages = props.zineData["submissions"].length; 
    this.TOC = this.generateTOC();

    this.state = {
      currentSubmission: -1,
      currentPage: 0,
    }

    if(props.match) {
      let { currentSubmissionTitle } = props.match.match.params;
      currentSubmissionTitle = currentSubmissionTitle.replace(/_/g, " ");
      console.log("BLAH: ", currentSubmissionTitle);
      if(currentSubmissionTitle) {
        for(let i=0; i<props.zineData["submissions"].length; i++) {
          if(props.zineData["submissions"][i].submissionTitle === currentSubmissionTitle) {
            this.state.currentSubmission = i;
            this.state.currentPage = i + 1;
            return;
          }
        }
      }
  }


    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  // ------------------------------------------------------
  componentDidMount() {
    document.addEventListener("keydown", this.handleOnKeyDown, false);
  }

  // ------------------------------------------------------
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleOnKeyDown, false);
  }

  // ------------------------------------------------------
  handleOnKeyDown(e) {
    e.preventDefault();
    if (e.keyCode === 39) {
      // right arrow
      this.incrementPage();
    } 
    
    if (e.keyCode === 37) {
      // left arrow
      this.decrementPage();
    }
  }

  // ------------------------------------------------------
  incrementPage() {
    // can't increment after submissions are done
    if (this.state.currentPage < this.numPages) {
      this.setState({
        currentSubmission: this.state.currentSubmission + 1,
        currentPage : this.state.currentPage + 1
      });
    }
  }

  // ------------------------------------------------------
  decrementPage() {
    // can't decrement from TOC
    if (this.state.currentPage >= 1) {
      this.setState({
        currentSubmission: this.state.currentSubmission - 1,
        currentPage: this.state.currentPage - 1
      });
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
          currentPage={ this.state.currentPage }
          numPages={ this.numPages }
          showPrevBtn={ this.state.currentPage > 0 }
          handleIncrementPage={ this.incrementPage.bind(this) }
          handleDecrementPage={ this.decrementPage.bind(this) }
        />
        <div className="zine-content">
          {
            this.state.currentPage === 0 ?
            <TOC submissions={ this.props.zineData["submissions"] } /> : 
            <ZineSubmission sub={ this.props.zineData["submissions"][this.state.currentSubmission] } />
          }
        </div>
      </div>
    );
  }
}

export default Zine;