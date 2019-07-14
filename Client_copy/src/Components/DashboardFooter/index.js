/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
	render() {
		return (
			<footer className="mt-4">

				<div className="footer-copyright text-center py-3 copyright container">
					<p>© 2018 Copyright</p>
					<p>
						{' '}
						!All rights reserved. Information on the website is reported by our members
						and is not a medical advice.
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
