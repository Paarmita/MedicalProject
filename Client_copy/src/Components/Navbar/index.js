/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link, withRouter } from 'react-router-dom'; // withRouter is higher order componenet which means it takes anaother component as argument
import logo from '../../Images/logo.svg';
import SideNavbar from './SideNavbar';
import { signout, isAuthenticated } from '../../Api';

const isActive = (history, path) => {
	if (history.location.pathname === path) return { color: 'white' };
};

class NavDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: false,
		};
	}

	showDropdown(e) {
		e.preventDefault();
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
		}));
	}

	render() {
		const classDropdownMenu = `dropdown-menu${this.state.isToggleOn ? ' show' : ''}`;
		return (
			<li className="nav-item dropdown">
				<Link
					className="nav-link dropdown-toggle"
					href="/"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					to={`/user/${isAuthenticated().user._id}`}
					style={{ color: '#fff' }}
					onClick={e => {
						this.showDropdown(e);
					}}
				>
					<i className="fa fa-user-circle fa-lg mx-2" />
					{`${isAuthenticated().user.name}`}
				</Link>
				<div
					className={classDropdownMenu}
					aria-labelledby="navbarDropdown"
					onMouseEnter={this.enterMenu}
					onMouseLeave={this.leaveMenu}
				>
					{this.props.children}
				</div>
			</li>
		);
	}
}

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { history } = this.props;
		return (
			<div>
				{isAuthenticated() && ( // user authenticated show logout and username
					<>
						<SideNavbar />
					</>
				)}
				<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand" href="/">
						<img src={logo} width="40" height="40" alt="logo" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="nav navbar-nav navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" style={isActive(history, '/')} to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									style={isActive(history, '/aboutus')}
									to="/aboutus"
								>
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
								<Link
									className="nav-link"
									style={isActive(history, '/pathy')}
									to="/pathy"
								>
									Pathy
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									style={isActive(history, '/blog')}
									to="/blog"
								>
									Blogs
								</Link>
							</li>
							{!isAuthenticated() && (
								<>
									<li className="nav-item">
										<Link
											className="nav-link"
											style={isActive(history, '/')}
											to="/signin"
										>
											Share Experience
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link"
											style={isActive(history, '/')}
											to="/signin"
										>
											Ask Suggestions
										</Link>
									</li>
								</>
							)}
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

							{isAuthenticated() && ( // user authenticated show logout and username
								<>
									<li className="nav-item">
										<Link
											className="nav-link"
											to={`/user/${isAuthenticated().user._id}`}
											style={({ color: '#fff' }, { cursor: 'pointer' })}
										>
											<i className="fa fa-user-circle fa-lg mx-2" />
											{`${isAuthenticated().user.name}`}
										</Link>
									</li>
									{/* <NavDropdown name="Dropdown">
										<a className="dropdown-item" href="/">
											FAQ
										</a>
										<div className="dropdown-divider" />
										<a className="dropdown-item" href="/">
											Privacy Policy
										</a>
										<a className="dropdown-item" href="/">
											Terms of Use
										</a>
									</NavDropdown> */}
									{/* <li className="nav-item">
										<a
											className="nav-link"
											style={
												(isActive(history, '/signup'),
												{ cursor: 'pointer' })
											}
											onClick={() => signout(() => history.push('/'))}
										>
											Logout
										</a>
									</li> */}

									{/* {JSON.stringify(props.history)}             // we need to compare the pathname */}
								</>
							)}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default withRouter(Navigation);
