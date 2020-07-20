import React from 'react';
import { Route, Switch } from 'react-router-dom';



import Loginbranch from './Pages/Loginbranch'
import Ordercards from './Pages/Ordercards'





export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
       
        <Route exact path='/login' component={Loginbranch} />
        <Route exact path='/order' component={Ordercards} />

        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

