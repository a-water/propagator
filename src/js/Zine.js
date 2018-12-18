import React, { Component } from 'react';
import NavBar from './NavBar';
import ZineNav from './ZineNav';

// ------------------------------------------------------
// A zine component. Data for each zine is passed from
// App.js through Routes (not sure if this is best).
// The zine knows its current page.
// ------------------------------------------------------
class Zine extends Component {
  render() {
    return (
      <div className="zine">
        <NavBar />
        <ZineNav />
        <div className="zine-content">
          { /* Map through zine data and create a zine page for each */ }
        </div>
      </div>
    );
  }
}

export default Zine;