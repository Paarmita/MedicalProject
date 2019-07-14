/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './style.css';
import Testimonial from './Testimonial';
import Testimonial_data from '../../Data/Testimonial_data';

class ContactUs extends Component {
	render() {
		return (
			<div className="container mb-5">
				<h1 className="my-4 blogTitle">Contact Us</h1>
				<p> Contact Us now to know more about the diseases and its cure</p>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type specimen
					book. It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more
					recently with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.
				</p>
				<div className="contactDesc">
					<h6 className="col-md-2">Follow us on:</h6>
					<div className="col-md-12 col-sm-12">
						<ul className="social-network social-circle">
							<li>
								<a href="#" className="icoRss" title="Rss">
									<i className="fa fa-rss" />
								</a>
							</li>
							<li>
								<a href="#" className="icoFacebook" title="Facebook">
									<i className="fa fa-facebook" />
								</a>
							</li>
							<li>
								<a href="#" className="icoTwitter" title="Twitter">
									<i className="fa fa-twitter" />
								</a>
							</li>
							<li>
								<a href="#" className="icoGoogle" title="Google +">
									<i className="fa fa-google-plus" />
								</a>
							</li>
							<li>
								<a href="#" className="icoLinkedin" title="Linkedin">
									<i className="fa fa-linkedin" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<h4 className="text-center mb-4 mt-5">What people say about our platform</h4>
					<Testimonial slides={Testimonial_data} />
				</div>
			</div>
		);
	}
}

export default ContactUs;
