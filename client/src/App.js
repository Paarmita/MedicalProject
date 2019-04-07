/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoutes } from './Routes/ProtectedRoute';
import { PublicRoutes } from './Routes/PublicRoute';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="content-container">
				<Switch>
					<Route path="/dashboard" component={ProtectedRoutes} />
					<Route path="/" component={PublicRoutes} />
				</Switch>
			</div>
		);
	}
}

export default App;
