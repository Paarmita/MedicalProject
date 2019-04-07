/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import CardLayout from '../WhatWeDo';
import Stats from '../Stats';

class Home extends Component {
	render() {
		return (
			<div>
				<iframe
					title="Main frame"
					width="100%"
					height="500px"
					src="https://www.youtube.com/embed/tgbNymZ7vqY"
				/>
				<div className="container">
					<h1 className="text-center intro">Experience of common man help each other</h1>
				</div>
				<CardLayout />
				<Stats />
				<div className="container">
					<Link to="/Signup">
						<button type="button" className="btn btn-success button_join">
							Join Us
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Home;
