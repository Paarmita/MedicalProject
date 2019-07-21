import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { signout, isAuthenticated } from '../../Api';
import { remove } from '../../Api/User';

class DeleteUser extends Component {
	state = {
		redirect: false,
	};

	deleteAccount = () => {
		const token = isAuthenticated().token;
		const userId = this.props.userId;
		remove(userId, token).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				// signout user
				signout(() => console.log('User is deleted'));
				// redirect
				this.setState({ redirect: true });
			}
		});
	};

	deleteConfirmed = () => {
		const answer = window.customConfirm('Are you sure you want to delete your account?');
		if (answer) {
			this.deleteAccount();
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		}
		return (
			<button
				type="button"
				onClick={this.deleteConfirmed}
				className="btn btn-raised btn-danger"
			>
				Delete Profile
			</button>
		);
	}
}

export default DeleteUser;
