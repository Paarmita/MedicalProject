/* eslint-disable react/no-unused-state */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { findPeople, follow } from '../../Api/User';
import DefaultProfile from '../../Images/avatar.png';
import './style.css';
import { isAuthenticated } from '../../Api';

class FindPeople extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			error: '',
			open: false,
		};
	}

	componentDidMount() {
		const userId = isAuthenticated().user._id;
		const token = isAuthenticated().token;

		findPeople(userId, token).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ users: data });
			}
		});
	}

	clickFollow = (user, i) => {
		const userId = isAuthenticated().user._id;
		const token = isAuthenticated().token;

		follow(userId, token, user._id).then(data => {
			if (data.error) {
				this.setState({ error: data.error });
			} else {
				const toFollow = this.state.users;
				toFollow.splice(i, 1); // select the specific user from the array
				this.setState({
					users: toFollow,
					open: true,
					followMessage: `Following ${user.name}`,
				});
			}
		});
	};

	renderUsers = users => (
		<div className="row ">
			{users.map((user, i) => (
				<div className="card col-md-3 mx-2" key={i}>
					<img
						style={{ height: '200px', width: '200px', margin: 'auto' }}
						className="img-thumbnail"
						src={`${process.env.REACT_APP_API_URL}/user/photo/${user._id}`}
						onError={i => (i.target.src = `${DefaultProfile}`)}
						alt={user.name}
					/>
					<div className="card-body">
						<h5 className="card-title">{user.name}</h5>
						<p className="card-text">{user.email}</p>
						<Link
							to={`/user/${user._id}`}
							className="btn btn-raised btn-primary btn-sm"
							style={{ margin: 'auto' }}
						>
							View Profile
						</Link>
						<button
							onClick={() => this.clickFollow(user, i)}
							className="btn btn-raised btn-info float-right btn-sm"
						>
							Follow
						</button>
					</div>
				</div>
			))}
		</div>
	);

	render() {
		const { users, open, followMessage } = this.state;
		return (
			<div className="container main">
				<h2 className="mt-6 mb-5">Find People</h2>
				{open && <div className="alert alert-success">{followMessage}</div>}
				{this.renderUsers(users)}
			</div>
		);
	}
}

export default FindPeople;
