/* eslint-disable prefer-destructuring */
/* eslint-disable react/sort-comp */
/* eslint-disable import/named */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React, * as react from 'react';
import { Redirect, Link } from 'react-router-dom';
import './style.css';
import { isAuthenticated } from '../../Api';
import { read } from '../../Api/User';
import DefaultProfile from '../../Images/avatar.png';

class Profile extends react.Component {
	constructor() {
		super();
		this.state = {
			user: '',
			redirectToSignin: false,
		};
	}

	init = userId => {
		const token = isAuthenticated().token;
		read(userId, token).then(data => {
			if (data.error) {
				this.setState({ redirectToSignin: true });
			} else {
				this.setState({ user: data });
			}
		});
	};

	componentDidMount() {
		const userId = this.props.match.params.userId;
		this.init(userId);
	}

	componentWillReceiveProps(props) {
		const userId = props.match.params.userId;
		this.init(userId);
	}

	render() {
		const { redirectToSignin, user } = this.state;
		if (redirectToSignin) return <Redirect to="/signin" />;

		return (
			<div className="container emp-profile mainProfile">
				<form>
					<div className="row">
						<div className="col-md-4">
							<div className="profile-img">
								{/* <img src={profile.profile_pic} alt="profile pic" /> */}
								<img src={DefaultProfile} alt={user.name} />
							</div>
						</div>
						<div className="col-md-6">
							<div className="profile-head">
								<h5> {user.name}</h5>
								<h6>@ {user.name}</h6>
								{/* <p className="proile-rating">
									<span>{profile.bio}</span>
								</p> */}
							</div>
						</div>
						<div className="col-md-2">
							{isAuthenticated().user && isAuthenticated().user._id === user._id ? (
								<Link className="profile-edit-btn" to={`/user/edit/${user._id}`}>
									Edit Profile
								</Link>
							) : (
								<Link className="profile-edit-btn" to="/">
									Report Profile
								</Link>
							)}
						</div>
					</div>
					<div className="row">
						<div className="col-md-4" />
						<div className="col-md-8">
							<div className="tab-content profile-tab" id="myTabContent">
								<div
									className="tab-pane fade show active"
									id="home"
									role="tabpanel"
									aria-labelledby="home-tab"
								/>
								<div className="row">
									<div className="col-md-6">
										<label>Email</label>
									</div>
									<div className="col-md-6">
										<p>{user.email}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Joined</label>
									</div>
									<div className="col-md-6">
										<p>{`${new Date(user.created).toDateString()}`}</p>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Phone</label>
									</div>
									<div className="col-md-6">
										{/* <p>{profile.basicInformation.phoneno}</p> */}
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Age</label>
									</div>
									<div className="col-md-6">
										{/* <p>{profile.basicInformation.age}</p> */}
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Gender</label>
									</div>
									<div className="col-md-6">
										{/* <p>{profile.basicInformation.gender}</p> */}
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Location</label>
									</div>
									<div className="col-md-6">
										{/* <p>
											{profile.location.city},{profile.location.state},
											{profile.location.country}
										</p> */}
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<label>Birthday</label>
									</div>
									<div className="col-md-6">
										{/* <p>{profile.basicInformation.birthday}</p> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
export default Profile;
