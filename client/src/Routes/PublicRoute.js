import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import Signin from "../Components/Signin/Signin";
import Signup from "../Components/Signin/Signin";

import loader from "../Images/loader.gif";
import Loadable from "react-loadable";

import {Notfound} from './notFound';

const Loading = () => (
  <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto loader">
    <div className="loader">
      <img src={loader} alt="Loading..." />
    </div>
  </div>
);

export const PublicRoutes = props => {
  return (
    <React.Fragment>
      <Navigation.components.Navigation id={35} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="content">
              
            </div>
          )}
        />
        
        <Route
          path="/signin"
          component={Signin}
        />
        <Route
          path="/signup"
          component={Signup}
        />
        <Route
          path="/"
          component={Notfound}
        />
      </Switch>
      <Footer.components.Footer />
    </React.Fragment>
  );
};
