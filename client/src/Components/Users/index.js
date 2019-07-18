/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
// https://bootsnipp.com/snippets/35E8q
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../../Api/User';
import DefaultProfile from '../../Images/avatar.png';
import './style.css';

class Users extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
		};
	}

	componentDidMount() {
		list().then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ users: data });
			}
		});
	}

	renderUsers = users => (
		<div className="row ">
			{users.map((user, i) => (
				<div className="card col-md-4" key={i}>
					<img
						style={{ height: '200px', width: 'auto' }}
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
						>
							View Profile
						</Link>
					</div>
				</div>
			))}
		</div>
	);

	render() {
		const { users } = this.state;
		return (
			<div className="container main">
				<h2 className="mt-6 mb-5">Users</h2>
				{this.renderUsers(users)}
			</div>
		);
	}
}

export default Users;
