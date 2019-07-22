import React, * as react from 'react';
import { Redirect, Link } from 'react-router-dom';
import './style.css';
import { isAuthenticated } from '../../Api';
import { read } from '../../Api/User';
import { listByUser } from '../../Api/Post';
import DefaultProfile from '../../Images/avatar.png';
import FollowProfileButton from '../Users/FollowProfileButton';
import ProfileTabs from './ProfileTabs';

class Profile extends react.Component {
	constructor() {
		super();
		this.state = {
			// user: '',
			user: { following: [], followers: [] },
			redirectToSignin: false,
			following: false,
			error: '',
			posts: [],
		};
	}

	// check follow
	checkFollow = user => {
		const jwt = isAuthenticated();
		// console.log('followers', user.followers);
		const match = user.followers.find(follower => {
			// one id has many other ids (followers) and vice versa
			return follower._id === jwt.user._id;
		});
		return match;
	};

	clickFollowButton = callApi => {
		// co nst userId = this.props.atch.params.userId;
		const userId = isAuthenticated().user._id;
		const token = isAuthenticated().token;

		callApi(userId, token, this.state.user._id).then(data => {
			if (data.error) {
				this.setState({ error: data.error });
			} else {
				this.setState({ user: data, following: !this.state.following });
			}
		});
	};

	init = userId => {
		const token = isAuthenticated().token;
		read(userId, token).then(data => {
			if (data.error) {
				this.setState({ redirectToSignin: true });
			} else {
				const following = this.checkFollow(data);
				this.setState({ user: data, following });
				this.loadPosts(data._id);
			}
		});
	};

	loadPosts = userId => {
		const token = isAuthenticated().token;
		listByUser(userId, token).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ posts: data });
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
		const { redirectToSignin, user, posts } = this.state;
		if (redirectToSignin) return <Redirect to="/signin" />;

		const photoUrl = user._id
			? `${process.env.REACT_APP_API_URL}/api/user/photo/${user._id}?${new Date().getTime()}`
			: DefaultProfile;

		return (
			<div className="container">
				<div className="col-lg-4">
					<h2 className="my-5">Profile</h2>
				</div>
				<form>
					<div className="row">
						<div className="col-md-3">
							<div className="profile-img">
								{/* <img src={profile.pr ofile_pic} alt="profile pic" /> */}
								{/* <img src={DefaultProfile} alt={user.name} /> */}
								<img
									style={{ height: '200px', width: 'auto' }}
									className="img-thumbnail"
									src={photoUrl}
									onError={i => (i.target.src = `${DefaultProfile}`)}
									alt={user.name}
								/>
							</div>
						</div>
						<div className="col-md-7">
							<div className="profile-head">
								<h5>
									{' '}
									<span>
										<small>@</small>
									</span>
									{user.name}
								</h5>
								<h3>{user.about}</h3>
								<hr />
							</div>
							<div className="profile-head row mt-3">
								<div className="col-md-3 ">
									<h4>
										<b> {user.followers.length} </b>
									</h4>
									<p>
										<small>Followers</small>
									</p>
								</div>
								<div className="col-md-3">
									<h4>
										<b> {user.following.length} </b>
									</h4>
									<p>
										<small>Following</small>
									</p>
								</div>
							</div>
							<hr />
						</div>
						<div className="col-md-2">
							{isAuthenticated().user && isAuthenticated().user._id === user._id ? (
								<Link className="profile-edit-btn" to={`/user/edit/${user._id}`}>
									Edit Profile
								</Link>
							) : (
								<div>
									<FollowProfileButton
										className="profile-edit-btn"
										following={this.state.following}
										onButtonClick={this.clickFollowButton}
									/>
									<Link className="profile-edit-btn my-3" to="/">
										Report Profile
									</Link>
								</div>
							)}
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							{/* {isAuthenticated().user && isAuthenticated().user._id === user._id && (
								<FollowProfileButton
									following={this.state.following}
									onButtonClick={this.clickFollowButton}
								/>
							)} */}
							{/* <FollowProfileButton /> */}
						</div>
						<div className="col-md-7">
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
					<div className="row">
						{/* <div className="col-md-1" /> */}
						<div className="col-md-12">
							<hr />

							{/* {isAuthenticated().user && isAuthenticated().user._id === user._id ? (
								<ProfileTabs
									followers={user.followers}
									following={user.following}
								/>
							) : (
								<div>
									<ProfileTabs
										followers={user.followers}
										following={user.following}
										posts={posts}
									/>
								</div>
							)} */}
							<ProfileTabs followers={user.followers} following={user.following}/>
							{/* <MyPosts posts={posts} /> */}
						</div>
					</div>
				</form>
			</div>
		);
	}
}
export default Profile;
