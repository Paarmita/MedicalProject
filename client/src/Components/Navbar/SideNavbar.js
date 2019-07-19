/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.css';
import { signout, isAuthenticated } from '../../Api';

const isActive = (history, path) => {
	if (history.location.pathname === path) return { color: 'Black' };
};

class SideNavbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { history } = this.props;
		return (
			<div>
				<ul className="nav flex-column sideBar">
					<li className="nav-item">
						<Link
							className="nav-link"
							style={isActive(history, '/dashboard')}
							to="/dashboard"
						>
							Dashboard
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link"
							style={isActive(history, '/findpeople')}
							to="/findpeople"
						>
							Find People
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link " to={`/user/${isAuthenticated().user._id}`}>
							Profile
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link " style={isActive(history, '/users')} to="/users">
							Users
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" style={isActive(history, '/feed')} to="/feed">
							My Feed
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link"
							style={isActive(history, '/follow')}
							to="/follow"
						>
							Posts I follow
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" style={isActive(history, '/like')} to="/like">
							Posts I Like
						</Link>
					</li>
					<span className="border-top my-3" />
					<li className="nav-item">
						<Link
							className="nav-link"
							to={`/user/share_experience/${isAuthenticated().user._id}`}
						>
							Share Experience
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link"
							to={`/user/ask_suggestion/${isAuthenticated().user._id}`}
						>
							Ask Suggestion
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link"
							to={`/user/testimonial/${isAuthenticated().user._id}`}
						>
							Add Testimonial
						</Link>
					</li>
					<span className="border-top my-3" />
					<li className="nav-item">
						<Link
							className="nav-link"
							to={`/user/settings/${isAuthenticated().user._id}`}
						>
							Settings
						</Link>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							style={(isActive(history, '/signup'), { cursor: 'pointer' })}
							onClick={() => signout(() => history.push('/'))}
						>
							Logout
						</a>
					</li>
					<span className="border-top my-3" />
					<li className="nav-item">
						<Link className="nav-link" style={isActive(history, '/faq')} to="/faq">
							FAQ
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link"
							style={isActive(history, '/privacypolicy')}
							to="/privacypolicy"
						>
							Privacy Policy
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link"
							style={isActive(history, '/termsofuse')}
							to="/termsofuse"
						>
							Terms and Conditions
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default withRouter(SideNavbar);
