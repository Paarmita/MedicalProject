/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Blog from './Components/Blog';
import AboutUs from './Components/AboutUs';
import Navigation from './Components/Navbar';

const MainRouter = () => (
	<div>
		<Navigation />
		<Switch>
			<Route exact path="/" component={Navigation} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/signin" component={Signin} />
		</Switch>
	</div>
);

export default MainRouter;
