/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.css';
import { signout, isAuthenticated } from '../../Api';

const isActive = (history, path) => {
	if (history.location.pathname === path) return { color: 'Black', fontWeight: '600' };
};

class SideNavbar extends React.Component {
	render() {
		const { history } = this.props;
		return (
			<div>
				<ul className="nav flex-column sideBar ">
					<li className="nav-item">
						<Link className="nav-link" style={isActive(history, '/posts')} to="/posts">
							<i className="fa fa-list-ul mr-2" /> Dashboard
						</Link>
					</li>
					{/* <li className="nav-item">
						<Link
							className="nav-link"
							style={isActive(history, '/findpeople')}
							to="/findpeople"
						>
							<i className="fa fa-address-card mr-2" /> Find People
						</Link>
					</li> */}
					<li className="nav-item">
						<Link
							className="nav-link "
							style={isActive(history, `/user/${isAuthenticated().user._id}`)}
							to={`/user/${isAuthenticated().user._id}`}
						>
							<i className="fa fa-user mr-2" /> Profile
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link " style={isActive(history, '/users')} to="/users">
							<i className="fa fa-users mr-2" /> Users
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link"
							style={isActive(history, `/myposts/${isAuthenticated().user._id}`)}
							to={`/myposts/${isAuthenticated().user._id}`}
						>
							<i className="fa fa-tag mr-2" /> My Posts
						</Link>
					</li>
					{/* <li className="nav-item">
						<Link className="nav-link" style={isActive(history, '/like')} to="/like">
							<i className="fa fa-thumbs-up mr-2" /> Posts I Like
						</Link>
					</li> */}
					<span className="border-top my-3" />
					<li className="nav-item">
						<Link
							className="nav-link"
							style={isActive(history, '/share_experience')}
							to="/share_experience"
						>
							<i className="fa fa-pencil-square-o mr-2" /> Share Experience
						</Link>
					</li>
					{/* <li className="nav-item">
						<Link className="nav-link" to="/post/ask_suggestion">
						<i className="fa fa-battery" /> Ask Suggestion
						</Link>
					</li> */}
					{/* <li className="nav-item">
						<Link
							className="nav-link"
							to={`/user/testimonial/${isAuthenticated().user._id}`}
						>
							<i className="fa fa-plus-circle mr-2" /> Add Testimonial
						</Link>
					</li> */}
					<span className="border-top my-3" />
					<li className="nav-item">
						<Link
							className="nav-link"
							to={`/user/settings/${isAuthenticated().user._id}`}
						>
							<i className="fa fa-cog mr-2" /> Settings
						</Link>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							style={(isActive(history, '/signup'), { cursor: 'pointer' })}
							onClick={() => signout(() => history.push('/'))}
						>
							<i className="fa fa-sign-out mr-2" /> Logout
						</a>
					</li>
					<span className="border-top my-3" />
					<li className="nav-item">
						<Link className="nav-link" style={isActive(history, '/faq')} to="/faq">
							<i className="fa fa-question-circle mr-2" /> FAQ
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link"
							style={isActive(history, '/privacypolicy')}
							to="/privacypolicy"
						>
							<i className="fa fa-user-secret mr-2" /> Privacy Policy
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="nav-link"
							style={isActive(history, '/termsofuse')}
							to="/termsofuse"
						>
							<i className="fa fa-hand-o-right mr-2" /> Terms of use
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default withRouter(SideNavbar);
