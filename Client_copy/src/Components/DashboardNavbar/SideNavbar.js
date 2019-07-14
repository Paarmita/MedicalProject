/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class DashboardHeader extends React.Component {
	render() {
		return (
			<div>
				<ul className="nav flex-column sideBar">
					<li className="nav-item">
						<Link className="nav-link" to="/dashboard">
							Dashboard
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link active" to="/dashboard/profile">
							Profile
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/dashboard/posted">
							My Feed
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/dashboard/follow">
							Posts I follow
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/dashboard/follow">
							Posts I Like
						</Link>
					</li>
					<span className="border-top my-3" />
					<li className="nav-item">
						<Link className="nav-link" to="/dashboard/share_experience">
							Share Experience
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/dashboard/ask_suggestion">
							Ask Suggestion
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/dashboard/testimonial">
							Add Testimonial
						</Link>
					</li>
					<span className="border-top my-3" />
					<li className="nav-item">
						<Link className="nav-link" to="/settings">
							Settings
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/privacy">
							Privacy Policy
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/termsofuse">
							Terms & Conditions
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Logout
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default DashboardHeader;
