import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.svg';
import './style.css';
import { isAuthenticated } from '../../Api';

class Footer extends Component {
	render() {
		return (
			<div>
				{isAuthenticated() ? (
					<div />
				) : (
					<footer className="bg-dark text-white mt-4">
						<div className="container text-center text-md-left">
							<div className="row">
								<hr className="clearfix w-100 d-md-none" />

								<div className="col-md-2 mx-auto">
									<h5 className="mt-3 mb-4 heading">Features</h5>
									<ul className="list-unstyled">
										<li>
											<Link className="link" to="/posts">
												Posts
											</Link>
										</li>
										<li>
											<Link className="link" to="/signin">
												Ask Suggestion
											</Link>
										</li>
										<li>
											<Link className="link" to="/signin">
												Share Experience
											</Link>
										</li>
									</ul>
								</div>

								<div className="col-md-2 mx-auto">
									<h5 className="mt-3 mb-4 heading">Community</h5>
									<ul className="list-unstyled">
										<li>
											<a className="link" href="#!">
												Personal
											</a>
										</li>
										<li>
											<a className="link" href="#!">
												Facebook Group
											</a>
										</li>
										<li>
											<a className="link" href="/s">
												YouTube Channel
											</a>
										</li>
									</ul>
								</div>

								<div className="col-md-2 mx-auto _pd-left">
									<ul className="list-unstyled">
										<li>
											<img
												src={logo}
												className="img-responsive img-css"
												alt="logo"
											/>
										</li>
									</ul>
								</div>

								<div className="col-md-2 mx-auto">
									<h5 className=" mt-3 mb-4 heading">Company</h5>
									<ul className="list-unstyled">
										<li>
											<Link className="link" to="/privacypolicy">
												Privacy Policy
											</Link>
										</li>
										<li>
											<Link className="link" to="/faq">
												FAQ
											</Link>
										</li>
										<li>
											<Link className="link" to="/termsofuse">
												Terms of Use
											</Link>
										</li>
										<li>
											<Link className="link" to="/contactus">
												Contact Us
											</Link>
										</li>
									</ul>
								</div>

								<div className="col-md-2 mx-auto">
									<h5 className=" mt-3 mb-4 heading">Links</h5>
									<ul className="list-unstyled">
										<li>
											<Link className="link" to="/">
												Home
											</Link>
										</li>
										<li>
											<Link className="link" to="/diseases">
												Diseases
											</Link>
										</li>
										<li>
											<Link className="link" to="/pathy">
												Pathy
											</Link>
										</li>
										<li>
											<Link className="link" to="/aboutus">
												About Us
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<ul className="list-unstyled list-inline text-center ">
							<li className="list-inline-item">
								<a
									className="btn-floating mx-1 link _color"
									target="_blank"
									href="/"
								>
									<i className="fa fa-facebook" />
								</a>
							</li>
							<li className="list-inline-item">
								<a
									className="btn-floating mx-1 link _color"
									target="_blank"
									href="/"
								>
									<i className="fa fa-youtube" />
								</a>
							</li>
							<li className="list-inline-item">
								<a
									className="btn-floating mx-1 link _color"
									target="_blank"
									href="/"
								>
									<i className="fa fa-envelope" />
								</a>
							</li>
						</ul>

						<div className="footer-copyright text-center py-3 heading container">
							<p>© 2018 Copyright</p>
							<p>
								{' '}
								All rights reserved! Information on the website is reported by our
								members and is not a medical advice.
							</p>
						</div>
					</footer>
				)}
			</div>
		);
	}
}

export default Footer;
