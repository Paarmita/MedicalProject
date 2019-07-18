/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';
import Diseases from './Components/Diseases';
import Pathy from './Components/Pathy';
import Profile from './Components/Profile';
import EditProfile from './Components/Profile/Edit';
import Users from './Components/Users';
import AddTestimonial from './Components/AddTestimonial';
import PrivacyPolicy from './Components/PrivacyPolicy';
import AskSuggestion from './Components/AskSuggestion';
import ShareExperience from './Components/ShareExperience';
import Faq from './Components/Faq';
import TermsofUse from './Components/TermsofUse';
import Settings from './Components/Settings';
import Notfound from './Components/Notfound';
import { isAuthenticated } from './Api';

const MainRouter = () => (
	<div>
		<Navigation />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/blog" component={Blog} />
			<Route exact path="/pathy" component={Pathy} />
			<Route exact path="/diseases" component={Diseases} />
			<Route exact path="/aboutus" component={AboutUs} />
			<Route exact path="/signin" component={Signin} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/faq" component={Faq} />
			<Route exact path="/privacypolicy" component={PrivacyPolicy} />
			<Route exact path="/termsofuse" component={TermsofUse} />
			{isAuthenticated() && (
				<>
					<Route exact path="/user/settings/:userId" component={Settings} />
					<Route exact path="/user/dashboard/:userId" component={Settings} />
					<Route exact path="/user/findpeople/:userId" component={Settings} />
					<Route exact path="/user/:userId" component={Profile} />
					<Route exact path="/user/edit/:userId" component={EditProfile} />
					<Route exact path="/users" component={Users} />
					<Route exact path="/user/feed/:userId" component={Settings} />
					<Route exact path="/user/postfollowing/:userId" component={Settings} />
					<Route exact path="/user/postlike/:userId" component={Settings} />
					<Route
						exact
						path="/user/share_experience/:userId"
						component={ShareExperience}
					/>
					<Route exact path="/user/ask_suggestion/:userId" component={AskSuggestion} />
					<Route exact path="/user/testimonial/:userId" component={AddTestimonial} />
				</>
			)}
			<Route component={Notfound} />
		</Switch>
		<Footer />
	</div>
);

export default MainRouter;
