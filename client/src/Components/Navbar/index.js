/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import logo from '../../Images/logo.svg';

class Navigation extends React.Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="/">
					<img src={logo} width="40" height="40" alt="logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="nav navbar-nav">
						<li className="nav-item active">
							<a className="nav-link active" href="/">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/aboutus">
								About Us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/diseases">
								Diseases
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/blog">
								Blog
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/pathy">
								Pathy
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contactus">
								Contact Us
							</a>
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
						<li className="nav-item">
							<a className="nav-link" href="/signin">
								Sign in
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/signup">
								Register
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default Navigation;
