import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Zine from './Zine';

class App extends Component {

  render() {

    const App = () => (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Landing }/>
          { 
            /* 
              Potentially create an array of Routes from some data
              like a list of zine metadata - for each issue, create
              a new Route and pass the props needed

              <Route 
                path='/issues/:issueID'
                render={ () => <Zine /> }
              />
            */
          }
          <Route 
            path='/issue-01'
            render={ () => <Zine /> }
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
