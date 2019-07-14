/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link, withRouter } from 'react-router-dom'; // withRouter is higher order componenet which means it takes anaother component as argument
import logo from '../../Images/logo.svg';
import { isAuthenticated } from '../../Auth';

const isActive = (history, path) => {
	if (history.location.pathname === path) return { color: '#ff9900' };
	return { color: '#ffffff' };
};

const Navigation = ({ history }) => (
	<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
		<a className="navbar-brand" href="/">
			<img src={logo} width="40" height="40" alt="logo" />
		</a>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="nav navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" style={isActive(history, '/')} to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" style={isActive(history, '/aboutus')} to="/aboutus">
						About Us
					</Link>
				</li>
				<li className="nav-item">
					<Link
						className="nav-link"
						style={isActive(history, '/diseases')}
						to="/diseases"
					>
						Diseases
					</Link>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/signin">
						Share Experience
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/signin">
						Ask Suggestions
					</a>
				</li>
			</ul>
			<ul className="nav navbar-nav navbar-right ml-md-auto ">
				{!isAuthenticated() && (
					<>
						<li className="nav-item">
							<Link
								className="nav-link"
								style={isActive(history, '/signin')}
								to="/signin"
							>
								Sign In
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								style={isActive(history, '/signup')}
								to="/signup"
							>
								Sign Up
							</Link>
						</li>
					</>
				)}
			</ul>
		</div>
	</nav>
);

export default withRouter(Navigation);
