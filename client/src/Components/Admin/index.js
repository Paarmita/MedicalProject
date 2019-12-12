import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../Api';

class Admin extends Component {
	state = {
		redirectToHome: false,
	};

	componentDidMount() {
		if (isAuthenticated().user.role !== 'admin') {
			this.setState({ redirectToHome: true });
		}
	}

	render() {
		if (this.state.redirectToHome) {
			return <Redirect to="/" />;
		}

		return (
			<div>
				<div className="container">
					<h2 className="mt-5">Admin Dashboard</h2>
					<p>Edit/Delete profile, Edit/Delete posts and Edit/Delete testimonials</p>
				</div>
			</div>
		);
	}
}

export default Admin;
