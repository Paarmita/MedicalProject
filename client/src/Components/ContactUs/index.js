import React, { Component } from 'react';
import './style.css';
import Testimonial from './Testimonial';
import TestimonialData from '../../Data/Testimonial_data';

class ContactUs extends Component {
	render() {
		return (
			<div className="container">
				<h2 className="my-5">Contact Us</h2>
				<p> Contact Us now to know more about the diseases and its cure</p>
				<p>
					Tell us about your company, your data, and your analytic goals. We can help you
					use your data to make better decisions. And if you don't currently have the data
					you need, we can help design data-capture and data-management strategies today
					that will power your analytics tomorrow.
				</p>
				<div className="contactDesc">
					<h6 className="col-md-2">Follow us on:</h6>
					<div className="col-md-12 col-sm-12">
						<ul className="social-network social-circle">
							<li>
								<a href="/" className="icoRss" title="Rss">
									<i className="fa fa-rss" />
								</a>
							</li>
							<li>
								<a href="/" className="icoFacebook" title="Facebook">
									<i className="fa fa-facebook" />
								</a>
							</li>
							<li>
								<a href="/" className="icoTwitter" title="Twitter">
									<i className="fa fa-twitter" />
								</a>
							</li>
							<li>
								<a href="/" className="icoGoogle" title="Google +">
									<i className="fa fa-google-plus" />
								</a>
							</li>
							<li>
								<a href="/" className="icoLinkedin" title="Linkedin">
									<i className="fa fa-linkedin" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<h4 className="text-center mb-4 mt-5">What people say about our platform</h4>
					<Testimonial slides={TestimonialData} />
				</div>
			</div>
		);
	}
}

export default ContactUs;
