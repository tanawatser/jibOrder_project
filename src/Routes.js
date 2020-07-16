import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Productbranch01 from './Pages/Productbranch01'

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Productbranch01} />
        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

