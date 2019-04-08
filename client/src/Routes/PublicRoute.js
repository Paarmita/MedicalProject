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
import Blog from '../Components/Blog';
import Profile from '../Components/Profile';
import AboutUs from '../Components/AboutUs';
import Diseases from '../Components/Diseases';
import ShareExperience from '../Components/ShareExperience';
import AskSuggestion from '../Components/AskSuggestion';
import AddTestimonial from '../Components/AddTestimonial';

// import ContactUs from '../Components/ContactUs/ContactUs';

export const PublicRoutes = () => {
	return (
		<React.Fragment>
			<Navigation />
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
				<Route path="/dashboard/posted" render={() => <div>Posted</div>} />
				<Route path="/dashboard/testimonial" component={AddTestimonial} />
				<Route path="/dashboard/ask_suggestion" component={AskSuggestion} />
				<Route path="/dashboard/share_experience" component={ShareExperience} />
				<Route path="/dashboard/profile" component={Profile} />
				<Route path="/dashboard/follow" render={() => <div>Follow</div>} />
				<Route path="/dashboard" component={Dashboard} />
				<Route component={Notfound} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
};
