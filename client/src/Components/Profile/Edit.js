import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './style.css';
import { isAuthenticated } from '../../Api';
import { read, update, updateUser } from '../../Api/User';
import DefaultProfile from '../../Images/avatar.png';
import loader from '../../Images/loader2.gif';

class EditProfile extends React.Component {
	constructor() {
		super();
		this.state = {
			id: '',
			name: '',
			email: '',
			password: '',
			redirectToProfile: false,
			error: '',
			fileSize: 0,
			loading: false,
			about: '',
		};
	}

	componentDidMount() {
		// api that takes files
		this.userData = new FormData();
		const userId = this.props.match.params.userId;
		this.init(userId);
	}

	init = userId => {
		const token = isAuthenticated().token;
		read(userId, token).then(data => {
			if (data.error) {
				this.setState({ redirectToProfile: true });
			} else {
				this.setState({
					id: data._id,
					name: data.name,
					email: data.email,
					about: data.about,
					error: '',
				});
			}
		});
	};

	isValid = () => {
		const { name, email, password, fileSize } = this.state;
		if (fileSize > 100000) {
			// upto 1Mb upload limit
			this.setState({ error: 'File size should be less than 100kb/1Mb' });
			return false;
		}
		if (name.length === 0) {
			this.setState({ error: 'Name is required', loading: false });
			return false;
		}
		// email@domain.com
		if (!/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(email)) {
			this.setState({ error: 'A valid Email is required', loading: false });
			return false;
		}
		if (password.length >= 1 && password.length <= 5) {
			this.setState({
				error: 'Password must be at least 6 characters long',
				loading: false,
			});
			return false;
		}
		return true;
	};

	handleChange = name => event => {
		// this.setState({ [name]: event.target.value });
		this.setState({ error: '' }); // empty the error on handle change
		const value = name === 'photo' ? event.target.files[0] : event.target.value; // check photo in name then grab the files

		const fileSize = name === 'photo' ? event.target.files[0].size : 0;
		this.userData.set(name, value);
		this.setState({ [name]: value, fileSize });
	};

	// clickSubmit = event => {
	// 	event.preventDefault();
	// 	// const { name, email, password } = this.state;
	// 	this.setState({ loading: true });
	// 	// const user = {		removed bz we are sending user.data now
	// 	// 	name,
	// 	// 	email,
	// 	// 	password: password || undefined,
	// 	// };
	// 	// console.log(user);
	// 	if (this.isValid()) {
	// 		const userId = this.props.match.params.userId;
	// 		const token = isAuthenticated().token;

	// 		update(userId, token, this.userData).then(data => {
	// 			if (data.error) this.setState({ error: data.error });
	// 			else
	// 				updateUser(data, () => {
	// 					this.setState({
	// 						redirectToProfile: true,
	// 					});
	// 				});
	// 		});
	// 	}
	// };

	clickSubmit = event => {
		event.preventDefault();
		this.setState({ loading: true });

		if (this.isValid()) {
			const userId = this.props.match.params.userId;
			const token = isAuthenticated().token;

			update(userId, token, this.userData).then(data => {
				if (data.error) {
					this.setState({ error: data.error });
					// if admin only redirect
				} else if (isAuthenticated().user.role === 'admin') {
					this.setState({
						redirectToProfile: true,
					});
				} else {
					// if same user update localstorage and redirect
					updateUser(data, () => {
						this.setState({
							redirectToProfile: true,
						});
					});
				}
			});
		}
	};

	signupForm = (id, name, email, password, about, photoUrl) => (
		<div className="container">
			<div className="col-lg-4">
				<h2 className="my-5">Edit Profile</h2>
			</div>
			<form>
				<div className="row">
					<div className="col-md-4">
						<div className="profile-img">
							{/* <img src={DefaultProfile} alt="profile pic" /> */}
							<img
								style={{ height: '200px', width: 'auto' }}
								className="img-thumbnail"
								src={photoUrl}
								onError={i => (i.target.src = `${DefaultProfile}`)}
								alt={name}
							/>
							<div className="file btn btn-lg btn-primary">
								Change Photo
								<input
									onChange={this.handleChange('photo')}
									type="file"
									accept="image/*"
									className="form-control"
								/>
							</div>
							{/* <input
								onChange={this.handleChange('photo')}
								type="file"
								accept="image/*"
								className="form-control"
							/> */}
						</div>
					</div>
					<div className="col-md-6">
						<div className="profile-head">
							<h5>{name}</h5>
						</div>
					</div>
				</div>
				<h6 className="text-divider">
					<span>Personal Information</span>
				</h6>
				{/* <div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">First name</label>
				<div className="col-lg-9">
					<input className="form-control" type="text" value="Paarmita" />
				</div>
			</div> */}
				{/* <div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Last name</label>
				<div className="col-lg-9">
					<input className="form-control" type="text" value="Bhargava" />
				</div>
			</div> */}
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label">Email</label>
					<div className="col-lg-9">
						<input
							onChange={this.handleChange('email')}
							type="email"
							className="form-control"
							value={email}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label">Phone No</label>
					<div className="col-lg-9">
						<input className="form-control" type="url" value="" />
					</div>
				</div>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label">Birthday</label>
					<div className="col-lg-9">
						<input className="form-control" type="text" value="28-07-1998" />
					</div>
				</div>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label">Age</label>
					<div className="col-lg-9">
						<input className="form-control" type="password" value="11111122333" />
					</div>
				</div>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label">Gender</label>
					<div className="col-lg-9">
						<input className="form-control" type="password" value="11111122333" />
					</div>
				</div>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label">Location</label>
					<div className="col-lg-9">
						<input className="form-control" type="text" value="" placeholder="City" />
					</div>
				</div>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label" />
					<div className="col-lg-6">
						<input className="form-control" type="text" value="" placeholder="State" />
					</div>
					<div className="col-lg-3">
						<input
							className="form-control"
							type="text"
							value=""
							placeholder="Country"
						/>
					</div>
				</div>
				<h6 className="text-divider">
					<span>Account Information</span>
				</h6>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label ">Username</label>
					<div className="col-lg-9">
						<input
							className="form-control"
							type="text"
							onChange={this.handleChange('name')}
							value={name}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label">Bio</label>
					<div className="col-lg-9">
						<textarea
							onChange={this.handleChange('about')}
							type="text"
							className="form-control"
							value={about}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label">Password</label>
					<div className="col-lg-9">
						<input
							onChange={this.handleChange('password')}
							type="password"
							className="form-control"
							value={password}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label">
						Confirm password
					</label>
					<div className="col-lg-9">
						<input className="form-control" type="password" />
					</div>
				</div>
				<div className="form-group row">
					<label className="col-lg-3 col-form-label form-control-label" />
					<div className="col-lg-12 btnProfile text-center">
						{/* <input
							type="reset"
							className="btn btn-secondary btnProfile"
							value="Cancel"
							to=""
						/> */}
						<Link to={`/user/${id}`} className="btn btn-secondary btnProfile">
							Cancel
						</Link>
						<input
							type="button"
							onClick={this.clickSubmit}
							className="btn btn-primary btnProfile"
							value="Save Changes"
						/>
					</div>
				</div>
			</form>
		</div>
	);

	render() {
		const { id, name, email, password, redirectToProfile, error, loading, about } = this.state;
		if (redirectToProfile) {
			return <Redirect to={`/user/${id}`} />;
		}
		const photoUrl = id
			? `${process.env.REACT_APP_API_URL}/api/user/photo/${id}?${new Date().getTime()}`
			: DefaultProfile;
		return (
			<div>
				<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
					{error}
				</div>
				{loading ? (
					<div>
						<img src={loader} alt="Loading..." />
					</div>
				) : (
					''
				)}
				{this.signupForm(id, name, email, password, about, photoUrl)}
			</div>
		);
	}
}
export default EditProfile;
