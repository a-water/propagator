import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Zine from './Zine';

// bleh this will need to change later to a db
import issueData from './data/issue-01';

class App extends Component {

  render() {

    const App = () => (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Landing }/>
          { 
            /* 
              Later on we would potentially create an array of Routes 
              from some data like a list of zine metadata - for each 
              issue, create a new Route and pass the props needed

              <Route 
                path='/issues/:issueID'
                render={ () => <Zine /> }
              />
            */
          }
          
          <Route 
            path='/issue-01'
            render={ () => <Zine zineData={ issueData }/> }
          />
        </Switch>

        { 
          /*
            TODOS
            + Header for PROPAGATOR, about content
            + Hero for most current issue with link to issue
            + Calls for contributors
          */ 
        }
      </div>
    );

    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
