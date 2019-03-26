import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import CardLayout from '../WhatWeDo/CardLayout';
import Stats from '../Stats/Stats';

class Home extends Component {
	render() {
		return (
			<div>
				<iframe
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
