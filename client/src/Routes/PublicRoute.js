/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Notfound } from './NotFound';

import Navigation from '../Components/Navbar';
import Footer from '../Components/Footer';

import Signin from '../Components/Signin';
import Signup from '../Components/Signup';
import Home from '../Components/Home';
import Blog from '../Components/Blog';
import AboutUs from '../Components/AboutUs';
import Diseases from '../Components/Diseases';
import DiseaseDetail from '../Components/DiseaseDetail';
// import ContactUs from '../Components/ContactUs/ContactUs';

import Dashboard from '../Components/Dashboard';
import Profile from '../Components/Profile';
import EditProfile from '../Components/Profile/Edit';
import ShareExperience from '../Components/ShareExperience';
import AskSuggestion from '../Components/AskSuggestion';
import AddTestimonial from '../Components/AddTestimonial';

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
				<Route
					exact
					path="/disease/:id"
					render={props => <DiseaseDetail {...props.match.params} />}
				/>
				<Route path="/blog" component={Blog} />
				<Route path="/dashboard/posted" render={() => <div>Posted</div>} />
				<Route path="/dashboard/testimonial" component={AddTestimonial} />
				<Route path="/dashboard/ask_suggestion" component={AskSuggestion} />
				<Route path="/dashboard/share_experience" component={ShareExperience} />
				<Route exact path="/dashboard/profile/edit" component={EditProfile} />
				<Route path="/dashboard/profile" component={Profile} />
				<Route path="/dashboard/follow" render={() => <div>Follow</div>} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/admin" render={() => <div>Admin</div>} />
				<Route path="/admin/blog" render={() => <div>Blog Edit</div>} />
				<Route path="/admin/disease" render={() => <div>Disease add</div>} />
				<Route path="/admin/pathy" render={() => <div>Pathy Edit</div>} />
				<Route path="/admin/posts" render={() => <div>Posts Approve</div>} />
				<Route path="/admin/comments" render={() => <div>Comments Approve </div>} />
				<Route path="/admin/testimonial" render={() => <div>Testimonial Approve</div>} />
				<Route component={Notfound} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
};
