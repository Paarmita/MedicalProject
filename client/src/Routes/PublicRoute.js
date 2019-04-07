/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Components/Navbar';
import Footer from '../Components/Footer';
import Signin from '../Components/Signin';
import Signup from '../Components/Signup';
import Home from '../Components/Home';
import { Notfound } from './NotFound';
import Dashboard from '../Components/Dashboard';
import DashboardHeader from '../Components/DashboardNavbar/DashboardHeader';
import Blog from '../Components/Blog/Blog';
import Profile from '../Components/Profile';
import AboutUs from '../Components/AboutUs/AboutUs';
import Diseases from '../Components/Diseases';
// import ContactUs from '../Components/ContactUs/ContactUs';

export const PublicRoutes = () => {
	return (
		<React.Fragment>
			<Navigation />
			{/* <DashboardHeader /> */}
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
				<Route path="/blog" component={Blog} />
				<Route path="/posted" render={() => <div>Posted</div>} />
				<Route path="/suggest" render={() => <div>Ask a suggestion</div>} />
				<Route path="/share_experience" render={() => <div>Share Experience</div>} />
				<Route path="/profile" component={Profile} />
				<Route path="/follow" render={() => <div>Follow</div>} />
				<Route path="/navbar" component={DashboardHeader} />
				<Route path="/dashboard" component={Dashboard} />
				<Route component={Notfound} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
};
