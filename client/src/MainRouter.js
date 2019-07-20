import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Diseases from './Components/Diseases';
import Pathy from './Components/Pathy';
import ContactUs from './Components/ContactUs';
import Profile from './Components/Profile';
import EditProfile from './Components/Profile/Edit';
import Users from './Components/Users';
import FindPeople from './Components/FindPeople';
// import AddTestimonial from './Components/AddTestimonial';
// import AskSuggestion from './Components/AskSuggestion';
import ViewPosts from './Components/Posts';
import SinglePost from './Components/Posts/SinglePost';
import ShareExperience from './Components/ShareExperience';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Faq from './Components/Faq';
import TermsofUse from './Components/TermsofUse';
import Settings from './Components/Settings';
import Notfound from './Components/Notfound';

const MainRouter = () => (
	<div>
		<Navigation />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/posts" component={ViewPosts} />
			<Route exact path="/post/:postId" component={SinglePost} />
			<Route exact path="/pathy" component={Pathy} />
			<Route exact path="/diseases" component={Diseases} />
			<Route exact path="/aboutus" component={AboutUs} />
			<Route exact path="/contactus" component={ContactUs} />
			<Route exact path="/signin" component={Signin} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/faq" component={Faq} />
			<Route exact path="/privacypolicy" component={PrivacyPolicy} />
			<Route exact path="/termsofuse" component={TermsofUse} />

			{/* <PrivateRoute exact path="/posts" component={Posts} /> */}
			<PrivateRoute exact path="/findpeople" component={FindPeople} />
			<PrivateRoute exact path="/user/:userId" component={Profile} />
			<PrivateRoute exact path="/user/edit/:userId" component={EditProfile} />
			<PrivateRoute exact path="/users" component={Users} />
			{/* <PrivateRoute exact path="/user/feed/:userId" component={Settings} /> */}
			{/* <PrivateRoute exact path="/user/postfollowing/:userId" component={Settings} /> */}
			{/* <PrivateRoute exact path="/user/postlike/:userId" component={Settings} /> */}
			<PrivateRoute exact path="/share_experience" component={ShareExperience} />
			{/* <PrivateRoute exact path="/post/ask_suggestion" component={AskSuggestion} /> */}
			{/* <PrivateRoute exact path="/user/testimonial/:userId" component={AddTestimonial} /> */}
			<PrivateRoute exact path="/user/settings/:userId" component={Settings} />

			<Route component={Notfound} />
		</Switch>
		<Footer />
	</div>
);

export default MainRouter;
