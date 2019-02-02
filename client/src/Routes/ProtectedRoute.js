
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Notfound } from './NotFound';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Components/Dashboard/Dashboard';
import DashBoardHeader from '../Components/Dashboard/DashboardHeader'

export const ProtectedRoutes = (props) => {
  return(
    <div>
      <DashBoardHeader.containers.DashboardHeaderContainer />
       <Switch>
         <Route
            exact
            path="/"
            render={() => (
              <div className="content">
                <Notfound />
              </div>
            )}
          />
        <PrivateRoute path='/dashboard' component={Dashboard.components.Dashboard} />
       </Switch>
    </div>
  )
}