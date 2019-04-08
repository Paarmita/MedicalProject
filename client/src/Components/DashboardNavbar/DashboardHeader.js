/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../../Images/logo.svg';
import SideNavbar from './SideNavbar';

class DashboardHeader extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
					<HashLink className="navbar-brand" to="/#">
						<img src={logo} width="40" height="40" alt="logo" />
					</HashLink>
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
								<a className="nav-link active" href="#">
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
								<a className="nav-link" href="#">
									Pathy
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact Us
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/dashboard/share_experience">
									Share Experience
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/dashboard/ask_suggestion">
									Ask Suggestions
								</a>
							</li>
						</ul>
						<ul className="nav navbar-nav navbar-right ml-md-auto ">
							<li className="nav-item">
								<span className="nav-link">Welcome</span>
							</li>
						</ul>
					</div>
				</nav>
				<SideNavbar />
			</div>
		);
	}
}

export default DashboardHeader;
