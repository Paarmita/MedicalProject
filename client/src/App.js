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

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <p>MINI</p>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import './App.css';
// import Navigation from './Components/Navbar/Navbar';
// // import DashboardHeader from './Components/Dashboard/DashboardHeader';
// import Footer from './Components/Footer/Footer';

// import Signin from './Components/Signin/Signin';
// import Signup from './Components/Signup/Signup';
// import AboutUs from './Components/AboutUs/AboutUs';
// import Home from './Components/Home/Home';
// import Diseases from './Components/Diseases/Diseases';
// import ClippedDrawer from './Components/Navigation/Navigation';
// // import ContactUs from './Components/ContactUs/ContactUs';
// // import Data from './Components/ContactUs/Testimonial_data';
// import loader from './Images/loader.gif';

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = { isLoading: true };
// 		console.log(this.state.isLoading);
// 	}

// 	componentDidMount() {
// 		setTimeout(() => this.setState({ isLoading: false }), 3000);
// 		console.log('componentDidMount');
// 	}

// 	render() {
// 		if (this.state.isLoading) {
// 			return (
// 				<div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto ">
// 					<img alt="loader " src={loader} className="_loader" />
// 				</div>
// 			);
// 		}
// 		return (
// 			<React.Fragment>
// 				<Switch>
// 					<Route
// 						exact
// 						path="/"
// 						render={() => {
// 							return (
// 								<div>
// 									<Home />
// 								</div>
// 							);
// 						}}
// 					/>
// 					<Route path="/signin" component={Signin} />
// 					<Route path="/signup" component={Signup} />
// 					<Route path="/aboutus" component={AboutUs} />
// 					<Route path="/diseases" component={Diseases} />
// 				</Switch>

// 				<Route path="/navbar" component={ClippedDrawer} />
// 			</React.Fragment>
// 		);
// 	}
// }

// export default App;