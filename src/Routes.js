import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './Pages/Homepage'

import Branchorder from './Pages/Branchorder'

import ManagePL from './PagesManage/ManagePL'
import ManageBr from './PagesManage/ManageBr'
import ManageSt from './PagesManage/ManageSt'
import ManageLi from './PagesManage/ManageLi'
import ManageCate from './PagesManage/ManageCate'
import ManageAd from './PagesManage/ManageAd'





export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />

        <Route exact path='/branch_order' component={Branchorder} />

        <Route exact path='/manage_product' component={ManagePL} />
        <Route exact path='/manage_branch' component={ManageBr} />
        <Route exact path='/manage_stock' component={ManageSt} />
        <Route exact path='/manage_list' component={ManageLi} />
        <Route exact path='/manage_cate' component={ManageCate} />
        <Route exact path='/manage_advance' component={ManageAd} />

        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

