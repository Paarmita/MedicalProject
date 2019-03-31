/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ClippedDrawer from '../Components/Navigation/Navigation';
import Signin from '../Components/Signin/Signin';
import Signup from '../Components/Signup/Signup';
import Home from '../Components/Home/Home';
import { Notfound } from './NotFound';

// import DashboardHeader from './Components/Dashboard/DashboardHeader';

import AboutUs from '../Components/AboutUs/AboutUs';
import Diseases from '../Components/Diseases/Diseases';
// import ContactUs from '../Components/ContactUs/ContactUs';

export const PublicRoutes = () => {
	return (
		<div>
			<ClippedDrawer />
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<div className="content">
							<Home />
						</div>
					)}
				/>

				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
				<Route path="/aboutus" component={AboutUs} />
				<Route path="/diseases" component={Diseases} />
				<Route path="/posted" render={() => <div>Posted</div>} />
				<Route path="/suggest" render={() => <div>Ask a suggestion</div>} />
				<Route path="/share_experience" render={() => <div>Share Experience</div>} />
				<Route path="/profile" render={() => <div>Profile</div>} />
				<Route path="/follow" render={() => <div>Follow</div>} />
				<Route path="/navbar" render={() => <div>Dashboard</div>} />
				<Route path="/diseases" component={Diseases} />
				<Route component={Notfound} />
			</Switch>
		</div>
	);
};
