/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './SideNavbar.css';

class DashboardHeader extends React.Component {
	render() {
		return (
			<div>
				<ul className="nav flex-column sideBar">
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Profile
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Dashboard
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Posts I follow
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							My posts
						</a>
					</li>
					<span className="border-top my-3" />
					<li className="nav-item">
						<a className="nav-link" href="#">
							Share Experience
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Ask Suggestion
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Add Testimonial
						</a>
					</li>
					<span className="border-top my-3" />
					<li className="nav-item">
						<a className="nav-link" href="#">
							Settings
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Privacy Policy
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Terms & Conditions
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Logout
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default DashboardHeader;
