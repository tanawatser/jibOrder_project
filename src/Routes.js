import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Loginbranch from './Pages/Loginbranch'
import Homepage from './Pages/Homepage'
import Orderpage from './Pages/Orderpage'
import Listproduct from './Pages/Listpage'


export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
       
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={Loginbranch} />
        <Route exact path='/order' component={Orderpage} />
        <Route exact path='/listproduct' component={Listproduct} />      

        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

