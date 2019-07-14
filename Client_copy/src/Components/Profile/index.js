/* eslint-disable import/named */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import profileData from '../../Data/ProfileData';
import './style.css';
import DashboardHeader from '../DashboardNavbar/DashboardHeader';

const html = [...profileData].map(profile => (
	<div className="container emp-profile mainProfile">
		<form>
			<div className="row">
				<div className="col-md-4">
					<div className="profile-img">
						<img src={profile.profile_pic} alt="profile pic" />
					</div>
				</div>
				<div className="col-md-6">
					<div className="profile-head">
						<h5>{profile.full_name}</h5>
						<h6>@{profile.username}</h6>
						<p className="proile-rating">
							<span>{profile.bio}</span>
						</p>
					</div>
				</div>
				<div className="col-md-2">
					<Link to="/dashboard/profile/edit">
						<button className="profile-edit-btn" type="submit">
							Edit Profile-Report Profile
						</button>
					</Link>
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
								<p>{profile.basicInformation.email}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>Phone</label>
							</div>
							<div className="col-md-6">
								<p>{profile.basicInformation.phoneno}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>Age</label>
							</div>
							<div className="col-md-6">
								<p>{profile.basicInformation.age}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>Gender</label>
							</div>
							<div className="col-md-6">
								<p>{profile.basicInformation.gender}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>Location</label>
							</div>
							<div className="col-md-6">
								<p>
									{profile.location.city},{profile.location.state},
									{profile.location.country}
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>Birthday</label>
							</div>
							<div className="col-md-6">
								<p>{profile.basicInformation.birthday}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
));
class Profile extends React.Component {
	render() {
		return (
			<div>
				<DashboardHeader />
				{html}
			</div>
		);
	}
}
export default Profile;
