/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
// https://bootsnipp.com/snippets/35E8q
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../../Api/User';
import DefaultProfile from '../../Images/avatar.png';
// import FollowProfileButton from './FollowProfileButton';
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
		<div
			className="col-xs-12 col-md-12 col-sm-12 col-xs-12 mt-5 mx-40 row"
			style={{ justifyContent: 'center' }}
		>
			{users.map((user, i) => (
				<div className="card col-lg-3 my-2 mx-1" key={i}>
					<div className="profile text-center">
						{/* <div className="col-sm-12 row"> */}
						<div className="text-center my-3">
							<img
								src={`https://medical-umbrella.herokuapp.com/api/user/photo/${
									user._id
								}`}
								onError={i => (i.target.src = `${DefaultProfile}`)}
								alt={user.name}
								style={{ height: '50px', width: 'auto' }}
								className="rounded-circle img-fluid"
							/>
						</div>
						<div className="text-center">
							<h3>{user.name}</h3>
							<p>{user.about}</p>
							<p>{user.email}</p>
							{/* </div> */}
						</div>
						<div className="col-lg-12">
							{/* <div className="col-xs-12 col-sm-6">
								<h5>
									<b> 20,7K </b>
								</h5>
								<p>
									<small>Followers</small>
								</p>
								<button
									type="button"
									className="btn btn-success btn-sm btn-block"
									following={this.state.following}
									onButtonClick={this.clickFollowButton}
								>
									<span className="fa fa-plus-circle" /> Follow{' '}
								</button>
								<FollowProfileButton
										className="profile-edit-btn btn btn-success btn-block"
										following={this.state.following}
										onButtonClick={this.clickFollowButton}
									/>
							</div> */}
							<Link
								to={`/user/${user._id}`}
								className="btn btn-info btn-block btn-sm"
								style={{ margin: 'auto', padding: '5px' }}
							>
								<span className="fa fa-user" /> View Profile{' '}
							</Link>
							{/* <div className="col-xs-12 col-sm-6">
								<h5>
									<b>245</b>
								</h5>
								<p>
									<small>Following</small>
								</p>

								
							</div> */}
							{/* <div className="col-xs-12 col-sm-4 emphasis">
						<h2>
							<strong>43</strong>
						</h2>
						<p>
							<small>Snippets</small>
						</p>
						<div className="btn-group dropup btn-block">
							<button type="button" className="btn btn-primary">
								<span className="fa fa-gear" /> Options{' '}
							</button>
							<button
								type="button"
								className="btn btn-primary dropdown-toggle"
								data-toggle="dropdown"
							>
								<span className="caret" />
								<span className="sr-only">Toggle Dropdown</span>
							</button>
							<ul className="dropdown-menu text-left" role="menu">
								<li>
									<a href="#">
										<span class="fa fa-envelope pull-right" /> Send
										an email{' '}
									</a>
								</li>
								<li>
									<a href="#">
										<span class="fa fa-list pull-right" /> Add or
										remove from a list{' '}
									</a>
								</li>
								<li className="divider" />
								<li>
									<a href="#">
										<span class="fa fa-warning pull-right" />
										Report this user for spam
									</a>
								</li>
								<li className="divider" />
								<li>
									<a href="#" className="btn disabled" role="button">
										{' '}
										Unfollow{' '}
									</a>
								</li>
							</ul>
						</div>
					</div> */}
						</div>
					</div>
				</div>
			))}
		</div>
	);

	render() {
		const { users } = this.state;
		return (
			<div className="container">
				<h2 className="my-5">Users</h2>
				{this.renderUsers(users)}
			</div>
		);
	}
}

export default Users;
